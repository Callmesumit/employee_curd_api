import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser); // Login API

export default router;