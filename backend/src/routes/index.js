import { Router } from "express";
import characters from '.characters.js'


const router = Router()

router.use('/characters', characters)

export default router;