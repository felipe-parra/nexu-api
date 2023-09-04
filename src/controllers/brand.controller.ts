/**
 *
 * Brand Controller,
 * This file contains the bussiness logic of the brand controller
 *
 */

import { IBrand } from "../interfaces/brand.interface";
import {
  createBrandRepository,
  getAllBrandsRepository,
  getBrandByIdRepository,
  getBrandByNombreRepository,
  updateBrandRepository,
} from "../repository/brand.repository";
import { getAllModelsByBrandId } from "./model.controller";

/**
 * Get all brands
 * @returns {Promise<IBrand[]>}
 */
export const getAllBrands = async () => {
  const brands = await getAllBrandsRepository();

  return brands;
};

/**
 * Get brand by id
 * @param {string} id
 * @returns {Promise<IBrand>}
 */
export const getBrandById = async (id: number) => {
  console.log({ id }, "getBrandById-controller");
  const brand = await getBrandByIdRepository(id);
  console.log({ brand }, "getBrandById-controller");
  return brand;
};

/**
 * Get bran by nombre
 * @param {string} nombre
 * @returns {Promise<IBrand>}
 */
export const getBrandByNombre = async (nombre: string) => {
  const brand = await getBrandByNombreRepository(nombre);

  return brand;
};

/**
 * Create brand
 * @param {IBrand} brand
 * @returns {Promise<IBrand>}
 */
export const createBrand = async (brand: IBrand) => {
  try {
    const newBrand = await createBrandRepository(brand);

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
export const updateBrand = async (id: string, brand: IBrand) => {
  if (!id) {
    throw new Error("Id is required");
  }

  const brandUpdated = await updateBrandRepository(id, brand);

  return brandUpdated;
};

/**
 * Get all models from brand
 * @param {string} id
 * @returns {Promise<IModel[]>}
 */
export const getBrandModels = async (id: string) => {
  const models = await getAllModelsByBrandId(id);

  return models;
};
