import {Router} from 'express';
import {
  AgregarEquipo,
  ObtenerEquipos,
  ObtenerEquipoPorId,
  ActualizarEquipo,
  EliminarEquipo,
} from "../controllers/teamController.js";


const team = Router();

team.post("/", AgregarEquipo);
team.get("/",  ObtenerEquipos);
team.get("/:id",  ObtenerEquipoPorId);
team.put("/:id",  ActualizarEquipo);
team.delete("/:id",  EliminarEquipo);

export default team;