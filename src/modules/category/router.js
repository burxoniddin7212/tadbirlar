import { Router } from "express";
import controller from "./controller.js"
import {upload} from "../../lib/multer.js"

const router = Router();


router.get('/category', controller.GETCATEGORY);
router.get('/category/:id', controller.GETCATEGORY);
router.get('/subCategory', controller.GETSUBCATEGORY);
router.post('/category', controller.POSTCATEGORY);
router.put('/category', controller.UPDATECATEGORY);
router.delete('/category/:id', controller.DELETECATEGORY);
router.post('/subCategory', controller.POSTSUBCATEGORY);
router.put('/subCategory', controller.PUTSUBCATEGORY);
router.delete('/subCategory/:id', controller.DELETESUBCATEGORY);






export default router
