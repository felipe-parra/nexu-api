import { Router } from "express";
import {
  getModelByIdService,
  updateModelService,
  getAllModelsService,
} from "../services/model.service";

const router = Router();

// GET /api/model/:id
router.get("/id", getModelByIdService);

// PUT /api/models/:id
router.put("/:id", updateModelService);

// GET /api/models?greater=1&lower=1
router.get("/", getAllModelsService);

export default router;
