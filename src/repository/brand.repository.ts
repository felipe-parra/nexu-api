/**
 *
 * Bran Repository
 *
 */

import Brand from "../schemas/brand.schema";
import { IBrand } from "../interfaces/brand.interface";

/**
 * Get all brands
 * @returns {Promise<IBrand[]>}
 */
export const getAllBrandsRepository = async (): Promise<IBrand[]> => {
  return await Brand.find();
};

/**
 * Get brand by id
 * @param {string} id
 * @returns {Promise<IBrand>}
 */
export const getBrandByIdRepository = async (id: number) => {
  console.log({ id: id }, "getBrandById-repository");
  if (!id) {
    throw new Error("Id is required");
  }

  const brand = await Brand.findOne({ id });

  if (!brand) {
    throw new Error("Brand not found");
  }
  console.log({ brand }, "getBrandById-repository34");
  return brand;
};

/**
 * Create brand
 * @param {IBrand} brand
 * @returns {Promise<IBrand>}
 */
export const createBrandRepository = async (brand: IBrand) => {
  try {
    console.log({ brand });
    const newBrand = await Brand.create(brand);

    return newBrand;
  } catch (error) {
    console.error({ error });
    throw new Error("Error creating brand");
  }
};

/**
 * Update brand
 * @param {string} id
 * @param {IBrand} brand
 * @returns {Promise<IBrand>}
 */
export const updateBrandRepository = async (id: string, brand: IBrand) => {
  if (!id) {
    throw new Error("Id is required");
  }

  const brandUpdated = await Brand.findOneAndUpdate(
    {
      id: id,
    },
    {
      $set: brand,
    },
    {
      new: true,
    }
  );

  return brandUpdated;
};

/**
 * Get brand by nombre
 * @param {string} nombre
 * @returns {Promise<IBrand>}
 */
export const getBrandByNombreRepository = async (nombre: string) => {
  const brand = await Brand.findOne({ nombre: nombre });

  if (!brand) {
    throw new Error("Brand not found");
  }

  return brand;
};

/**
 * Recalculate brand average price
 * @param {string} id
 * @param {number} newAveragePrice
 * @returns {Promise<IBrand>}
 */
export const recalculateBrandAveragePriceRepository = async (
  id: string,
  newAveragePrice: number
) => {
  const brand = await Brand.findById(id);

  if (!brand) {
    throw new Error("Brand not found");
  }

  brand.average_price = newAveragePrice;

  await brand.save();

  // return brand;
  return true;
};
