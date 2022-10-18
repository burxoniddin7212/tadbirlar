import { Router } from "express";
import controller from "./controller.js"
import {upload} from "../../lib/multer.js"

const router = Router();


router.get('/elon', controller.GET);
router.get('/elon/:id', controller.GET);
router.get('/elonizlash', controller.FILTER);
router.put('/elontastastiqlash/:id', controller.TASTIQLASH);
router.post('/elon',[upload.single('img')], controller.POST);
router.put('/elon', controller.UPDATE);
router.delete('/elon/:id', controller.DELETE);




export default router
