/**
 *
 * Model Controller
 * This file contains the bussiness logic of the model controller
 *
 */

import { IModel } from "../interfaces/model.interface";
import {
  createModelRepository,
  getAllModelsByBrandIdRespository,
  getModelByIdRepository,
  updateModelRepository,
  getAllModelsByFiltersRepository,
} from "../repository/model.repository";
import {} from "../repository/brand.repository";
import {
  getBrandById,
  getBrandByNombre,
  updateBrand,
} from "./brand.controller";

/**
 * Get model by id
 * @param {string} id
 * @returns {Promise<IModel>}
 */
export const getModelById = async (id: string) => {
  const model = await getModelByIdRepository(id);

  return model;
};

/**
 * Get all models from brand
 * @param {string} id
 */
export const getAllModelsByBrandId = async (id: string) => {
  const brand = await getBrandById(Number(id));

  if (!brand) {
    throw new Error("Brand not found");
  }

  const models = await getAllModelsByBrandIdRespository(brand._id as string);

  return models;
};

/**
 * Create model
 * @param {String} brandId
 * @param {IModel} model
 * @returns {Promise<IModel>}
 */
export const createModel = async (brandId: string, model: IModel) => {
  try {
    console.log({ brandId, model }, "createModel-controller40");
    const brandFounded = await getBrandById(Number(brandId));
    console.log({ brandFounded }, "createModel-controller42");
    if (!brandFounded) {
      throw new Error("Brand not found");
    }

    const newModel = await createModelRepository({
      ...model,
      id: Number(model.id),
      brand: brandFounded._id as string,
    });

    return newModel;
  } catch (error) {
    console.error({ error });
    throw new Error("Error creating model");
  }
};

/**
 * Update model
 * @param {string} id
 * @param {IModel} model
 * @returns {Promise<IModel>}
 */
export const updateModel = async (id: string, model: IModel) => {
  try {
    const modelFounded = await getModelById(id);
    if (!modelFounded) {
      throw new Error("Model not found");
    }

    const isGreaterThanMininum = model.average_price > 100000;

    if (!isGreaterThanMininum) {
      throw new Error("Average price must be greater than 100000");
    }

    // TODO: Pending to update average price of brand when model is updated

    const updatedModel = await updateModelRepository(id, model);

    return updatedModel;
  } catch (error) {
    console.error({ error });
    throw new Error("Error updating model");
  }
};

/**
 * Get all models by filters
 * @param {number} greater
 * @param {number} lower
 * @returns {Promise<IModel[]>}
 */
export const getAllModelsByFilters = async (filter?: {
  greater: number;
  lower: number;
}) => {
  const models = await getAllModelsByFiltersRepository(filter);
  console.log({ models }, "model.controller.ts:119");
  return models;
};
