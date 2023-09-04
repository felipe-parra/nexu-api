/**
 *
 * Brand Service
 * This file contains handlers services of Brand
 *
 */

import { Request, Response } from "express";
import {
  createBrand,
  getAllBrands,
  getBrandById,
  getBrandModels,
} from "../controllers/brand.controller";
import { IModel } from "../interfaces/model.interface";

/**
 * Get all brands
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IBrand[]>}
 */
export const getAllBrandsService = async (req: Request, res: Response) => {
  try {
    const brands = await getAllBrands();
    return res.json(brands);
  } catch (error) {
    console.error({ error });
    throw new Error("Error getting brands");
  }
};

/**
 * Get brand by id
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IBrand>}
 */
export const getBrandByIdService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const brand = await getBrandById(Number(id));
    return res.json(brand);
  } catch (error) {
    console.error({ error });
    throw new Error("Error getting brand");
  }
};

/**
 * Create brand
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IBrand>}
 */
export const createBrandService = async (req: Request, res: Response) => {
  try {
    const brand = await createBrand(req.body);
    return res.json(brand);
  } catch (error) {
    console.error({ error });
    throw new Error("Error creating brand");
  }
};

/**
 * Get all models from brand
 * @params {Request} req
 * @params {Response} res
 * @returns {Promise<IModel[]>}
 */
export const getBrandModelsService = async (req: Request, res: Response) => {
  try {
    console.log({ params: req.params }, "getBrandModels-service");
    const models = await getBrandModels(req.params.id);
    return res.json(models);
  } catch (error) {
    console.error({ error });
    throw new Error("Error getting brand models");
  }
};
