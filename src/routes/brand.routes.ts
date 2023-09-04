import { Router } from "express";
import {
  createBrandService,
  getAllBrandsService,
  getBrandByIdService,
  getBrandModelsService,
} from "../services/brand.service";
import { createModelService } from "../services/model.service";
const router = Router();

// GET /api/brands
router.get("/", getAllBrandsService);

// GET /api/brands/:id
router.get("/:id", getBrandByIdService);

// POST /api/brands
router.post("/", createBrandService);

// GET /api/brands/:id/models
router.get("/:id/models", getBrandModelsService);

// POST /api/brands/:id/models
router.post("/:brandId/models", createModelService);

export default router;
