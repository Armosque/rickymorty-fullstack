import { Router } from "express";
import router from ".";
import charactersControllers from '../controllers/characters.controllers.js'

const router = Router();
router.use('/', charactersControllers )
export default router;