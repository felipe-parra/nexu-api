import {
  getAllBrandsRepository,
  getBrandByIdRepository,
} from "./brand.repository";
import { IBrand } from "../interfaces/brand.interface";

// Mockear el módulo 'Brand' completamente
jest.mock("../schemas/brand.schema", () => {
  const brands = [
    { id: 1, name: "ILX", average_price: 303176 },
    { id: 2, name: "MDX", average_price: 448193 },
    { id: 1264, name: "NSX", average_price: 3818225 },
    { id: 3, name: "RDX", average_price: 395753 },
    { id: 354, name: "RL", average_price: 239050 },
  ];
  return {
    find: jest.fn().mockResolvedValue(brands),
  };
});

describe("getAllBrandsRepository", () => {
  it("debería llamar a Brand.find() y devolver un array de marcas", async () => {
    // Importa el módulo 'Brand'
    const Brand = require("../schemas/brand.schema");

    // Llama a la función y espera la respuesta
    const marcas = await getAllBrandsRepository();

    const brands = await Brand.find();

    // Verifica que la función haya devuelto el resultado esperado
    expect(marcas).toEqual(brands);
    marcas.forEach((marca: IBrand) => {
      expect(marca).toHaveProperty("id");
      expect(marca).toHaveProperty("name");
      expect(marca).toHaveProperty("average_price");
    });
  });

  it("debería llamar a Brand.find() y devolver un array vacío", async () => {
    // Importa el módulo 'Brand'
    const Brand = require("../schemas/brand.schema");

    // Mockea la función 'find' para que devuelva un array vacío
    Brand.find = jest.fn().mockResolvedValue([]);

    // Llama a la función y espera la respuesta
    const marcas = await getAllBrandsRepository();

    // Verifica que la función haya devuelto el resultado esperado
    expect(marcas).toEqual([]);
  });
});

describe("getBrandByIdRepository", () => {
  it("debería devolver una marca existente por su ID", async () => {
    const Brand = require("../schemas/brand.schema");
    // Define un ID existente y una marca de ejemplo
    const existingId = 1;
    const existingBrand: IBrand = {
      id: existingId,
      name: "ILX",
      average_price: 303176,
    };

    // Configura el comportamiento esperado del mock de Brand.findOne
    (Brand.findOne as jest.Mock).mockResolvedValue(existingBrand);

    // Llama a la función y espera la respuesta
    const marca = await getBrandByIdRepository(existingId);

    // Verifica que Brand.findOne se haya llamado con el ID correcto
    expect(Brand.findOne).toHaveBeenCalledWith({ id: existingId });

    // Verifica que la función haya devuelto la marca esperada
    expect(marca).toEqual(existingBrand);
  });

  it("debería lanzar un error si el ID no existe", async () => {
    const Brand = require("../schemas/brand.schema");
    // Define un ID que no existe
    const nonExistentId = 999;

    // Configura el comportamiento esperado del mock de Brand.findOne
    (Brand.findOne as jest.Mock).mockResolvedValue(null);

    // Llama a la función y espera que lance un error
    await expect(getBrandByIdRepository(nonExistentId)).rejects.toThrow(
      "Brand not found"
    );
  });

  // it("debería lanzar un error si el ID no es válido", async () => {
  //   const Brand = require("../schemas/brand.schema");
  //   // Define un ID no válido (null en este caso)
  //   const invalidId = undefined;

  //   // Llama a la función y espera que lance un error
  //   await expect(getBrandByIdRepository(invalidId)).rejects.toThrow(
  //     "Id is required"
  //   );
  // });
});
