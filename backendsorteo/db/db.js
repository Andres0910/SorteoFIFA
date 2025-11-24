import mongoose from 'mongoose';
import dotenv from "dotenv";
import Team from "../models/Team.js";

let isConnected = false;
/*
const teams = [
  { name: "Argentina", confederation: "CONMEBOL", ranking: 1 },
  { name: "Francia", confederation: "UEFA", ranking: 2 },
  { name: "Brasil", confederation: "CONMEBOL", ranking: 3 },
  { name: "Inglaterra", confederation: "UEFA", ranking: 4 },
  { name: "Bélgica", confederation: "UEFA", ranking: 5 },
  { name: "Portugal", confederation: "UEFA", ranking: 6 },
  { name: "Países Bajos", confederation: "UEFA", ranking: 7 },
  { name: "España", confederation: "UEFA", ranking: 8 },

  { name: "Croacia", confederation: "UEFA", ranking: 9 },
  { name: "Italia", confederation: "UEFA", ranking: 10 },
  { name: "Estados Unidos", confederation: "CONCACAF", ranking: 11 },
  { name: "México", confederation: "CONCACAF", ranking: 12 },
  { name: "Uruguay", confederation: "CONMEBOL", ranking: 13 },
  { name: "Colombia", confederation: "CONMEBOL", ranking: 14 },
  { name: "Japón", confederation: "AFC", ranking: 15 },
  { name: "Corea del Sur", confederation: "AFC", ranking: 16 },

  { name: "Australia", confederation: "AFC", ranking: 17 },
  { name: "Marruecos", confederation: "CAF", ranking: 18 },
  { name: "Senegal", confederation: "CAF", ranking: 19 },
  { name: "Nigeria", confederation: "CAF", ranking: 20 },
  { name: "Egipto", confederation: "CAF", ranking: 21 },
  { name: "Canadá", confederation: "CONCACAF", ranking: 22 },
  { name: "Ecuador", confederation: "CONMEBOL", ranking: 23 },
  { name: "Perú", confederation: "CONMEBOL", ranking: 24 },

  { name: "Irán", confederation: "AFC", ranking: 25 },
  { name: "Qatar", confederation: "AFC", ranking: 26 },
  { name: "Arabia Saudita", confederation: "AFC", ranking: 27 },
  { name: "Costa Rica", confederation: "CONCACAF", ranking: 28 },
  { name: "Serbia", confederation: "UEFA", ranking: 29 },
  { name: "Dinamarca", confederation: "UEFA", ranking: 30 },
  { name: "Polonia", confederation: "UEFA", ranking: 31 },
  { name: "Suiza", confederation: "UEFA", ranking: 32 }
];*/

const conectarAMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log('Conectados a MongoDB'.green);
        
        
    /*    // Limpia la colección antes
    await Team.deleteMany();
    console.log("Colección Team limpiada");

    // Inserta los equipos
    await Team.insertMany(teams);
    console.log("Base de datos poblada con 32 equipos");*/
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error);
  }
};

const db = mongoose.connection;



db.once('open', ()=>{
    isConnected = true;
})

db.on('disconnected', () =>{
    isConnected = false;
    console.log('Desconectado de MongoDB'.yellow);
})

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB desconectado');
    process.exit(0);
})

export {conectarAMongoDB, isConnected};