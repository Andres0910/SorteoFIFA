import Team from "../models/Team.js";
import mongoose from 'mongoose'
import express from 'express';

export const AgregarEquipo = async (req, res) => {
  console.log('Agregando un equipo');
    const body = req.body;
    const pais = new Team(body);
    try{
        const validationError = pais.validateSync();
        if(validationError){
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await pais.save();
        return res.status(201).json({
            pais
        });
    }catch(error){
        return res.status(500).json({
            msg: 'Error al guardar el equipo'
        });
    }
};

export const ObtenerEquipos = async (req, res) => {
  console.log('Obteniendo todos los equipos');
    try{
        const teams = await Team.find({},{ v:0 });
        if(teams.length === 0 ){
            return res.status(404).json({
                msg: 'No se encontraron equipos'
            });
        }
        return res.status(200).json({
            teams
        });
    }catch{
        return res.status(500).json({
            msg: 'Error al obtener los equipos'
        });
    }
};


export const ObtenerEquipoPorId = async (req, res) => {
  const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no valido'
            });
        }
        const team = await Team.findById(id);
        if(!team){
            return res.status(404).json({
                msg: 'Equipo no encontrado'
            });
        }

        return res.status(200).json({
            team
        });
    } catch(error){
        return res.status(500).json({
            msg: 'Error al obtener el equipo por ID'
        });
    }
};


export const ActualizarEquipo = async (req, res) => {
  console.log('Update');
    const id = req.params.id;
    const body= req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no valido'
            });
        }
        const team = await Team.findByIdAndUpdate(id,body, {new: true, runValidators: true});
        if(!team){
            return res.status(404).json({
                msg: 'Equipo no encontrado'
            });
        }
        return res.status(200).json({
            team
        });
    }catch(error){
        return res.status(500).json({
            msg:'Error al actualizar el equipo'
        });
    }
};


export const EliminarEquipo = async (req, res) => {
  console.log('Delete');
    const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no valido'
            });
        }
        const team = await Team.findByIdAndDelete(id);
        if(!team){
            return res.status(404).json({
                msg: 'Equipo no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Equipo eliminado correctamente',
            team
        });
    }catch(error){
        return res.status(500).json({
            msg:'Error al eliminar el equipo'
        });
    }
};

