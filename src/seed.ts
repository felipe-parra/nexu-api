import mongoose from "mongoose";
import Brand from "./schemas/brand.schema"; // Importa el modelo de Brand
import Model from "./schemas/model.schema"; // Importa el modelo de Model
import data from "./data.json"; // Importa el archivo JSON de datos
import connectDB from "./utils/db";

// Conecta a la base de datos

// Función para insertar modelos en la base de datos
const seedModels = async () => {
  try {
    await connectDB();
    await Model.deleteMany(); // Borra todos los documentos en la colección de modelos

    for (const modelData of data) {
      let brandIndexId = 0;
      const { name, average_price, brand_name } = modelData;

      // Busca si la marca ya existe en la base de datos
      let brand = await Brand.findOne({ name: brand_name });

      // Si no existe, crea una nueva marca
      if (!brand) {
        brandIndexId = brandIndexId + 1;
        brand = new Brand({ name: brand_name, id: brandIndexId });
        await brand.save();
        console.log(`Marca creada: ${brand_name}`);
      }

      // Crea el modelo y asigna la marca
      const model = new Model({
        name: name,
        average_price: average_price,
        brand: brand._id, // Asigna el ID de la marca
      });

      await model.save();
      console.log(`Modelo insertado: ${name}`);
    }

    console.log("Modelos insertados correctamente");
  } catch (error) {
    console.error("Error al insertar modelos:", error);
  }
};

// Ejecuta la función de inserción de datos
seedModels();
