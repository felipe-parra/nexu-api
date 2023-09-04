/**
 *
 * Model Service
 * This file contains handlers services of Model
 *
 */

import { Request, Response } from "express";
import {
  createModel,
  getModelById,
  updateModel,
  getAllModelsByFilters,
} from "../controllers/model.controller";

/**
 * Get model by id
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IModel>}
 */
export const getModelByIdService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await getModelById(id);
    return res.json(model);
  } catch (error) {
    console.error({ error });
    throw new Error("Error getting model");
  }
};

/**
 * Create model
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IModel>}
 */
export const createModelService = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;
    const model = await createModel(brandId, req.body);
    return res.json(model);
  } catch (error) {
    console.error({ error });
    throw new Error("Error creating model");
  }
};

/**
 * Update model
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IModel>}
 */
export const updateModelService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await updateModel(id, req.body);
    return res.json(model);
  } catch (error) {
    console.error({ error });
    throw new Error("Error updating model");
  }
};

/**
 * Get all models by filters
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IModel[]>}
 */
export const getAllModelsService = async (req: Request, res: Response) => {
  try {
    const { greater, lower } = req.query;
    if (greater && lower) {
      const models = await getAllModelsByFilters({
        greater: Number(greater),
        lower: Number(lower),
      });
      return res.json(models);
    }

    const models = await getAllModelsByFilters();
    return res.json(models);
  } catch (error) {
    console.error({ error });
    throw new Error("Error getting models");
  }
};
