import { Router } from "express";
import controller from "./controller.js"

const router = Router();


router.get('/korildi', controller.KORILGANLARGET);
router.put('/korildi', controller.KORILGANLAR);





export default router
