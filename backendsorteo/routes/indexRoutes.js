
import team from './teamRoutes.js';
import draw from './drawRoutes.js';

import { Router } from 'express';
const indexRoutes = Router();

indexRoutes.use('/teams', team);
indexRoutes.use('/draw', draw);


export default indexRoutes;