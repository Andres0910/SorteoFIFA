import { Router } from "express";
import { drawGroups } from "../controllers/drawController.js";

const draw = Router();

draw.get("/", drawGroups);

export default draw;

