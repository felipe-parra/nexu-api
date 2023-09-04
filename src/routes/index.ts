import { Router } from "express";

import brandRoutes from "./brand.routes";
import modelRoutes from "./model.routes";

const router = Router();

router.get("/ping", (req, res) => {
  res.send("It's working!");
});

router.use("/brands", brandRoutes);
router.use("/models", modelRoutes);

export default router;
