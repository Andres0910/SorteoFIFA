import express from 'express';
import cors from 'cors';
import * as db from '../db/db.js'
import indexRoutes from '../routes/indexRoutes.js'


export default class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.generalRoute = '/api/';

    this.middlewares();

    this.routes();
  }

  async conectarDBMongo(){
    if(!db.isConnected){
      await db.conectarAMongoDB();
    }
  }


  middlewares(){
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static('public'));
  }

  routes(){

    //localhost:4000/api/
    this.app.use(this.generalRoute, indexRoutes);
    this.app.use((req, res) => {
      res.status(404).json({
        msg: 'Ruta no encontrada'
      });
    })
  }

  listen(){
    this.app.listen(this.port, () =>{
      console.log('Servidor corriendo en puerto', `${this.port}`.yellow);
    });
  }
}