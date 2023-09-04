/**
 *
 * Model Repository
 *
 */

import { IModel } from "../interfaces/model.interface";
import Model from "../schemas/model.schema";

/**
 * Get all models
 * @params {Object} filter
 * @returns {Promise<IModel[]>}
 */
export const getAllModelsRepository = async (filter: {}) => {
  return await Model.find(filter || {});
};

/**
 * Get all models from brand
 * @param {string} id
 * @returns {Promise<IModel[]>}
 */
export const getAllModelsByBrandIdRespository = async (id: string) => {
  return await Model.find({ brand: id });
};

/**
 * Get model by id
 * @param {string} id
 * @returns {Promise<IModel>}
 */
export const getModelByIdRepository = async (id: string) => {
  if (!id) {
    throw new Error("Id is required");
  }

  const model = await Model.findOne({
    $or: [{ id: id }, { _id: id }],
  });

  return model;
};

/**
 * Create model
 * @param {IModel} model
 * @returns {Promise<IModel>}
 */
export const createModelRepository = async (model: IModel) => {
  try {
    const newModel = await Model.create(model);

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
export const updateModelRepository = async (id: string, model: IModel) => {
  if (!id) {
    throw new Error("Id is required");
  }

  const modelUpdated = await Model.findOneAndUpdate(
    {
      id: id,
    },
    {
      $set: model,
    },
    {
      new: true,
    }
  );

  return modelUpdated;
};

/**
 * Get all models by filters
 * @param {Object} filter
 * @returns {Promise<IModel[]>}
 */
export const getAllModelsByFiltersRepository = async (filter?: {
  greater: number;
  lower: number;
}) => {
  if (!filter) {
    return await Model.find({});
  }

  return await Model.find({
    average_price: {
      $gt: filter.greater,
      $lt: filter.lower,
    },
  });
};
