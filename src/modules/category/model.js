import { fatch, fatchAll } from "../../lib/postgre.js"
import { GET, GETSUBCATEGORY, POSTC, UPDATEC, DELETEC, POSTS, PUTS, DELETES } from "./query.js"

const GETCATEGORY = async ({ id = 0 }) => {
   return await fatchAll(GET, [id])
}


const SUBCATEGORY = async () => {
   return await fatchAll(GETSUBCATEGORY)
}

const POSTCATEGORY = async ({ category_name }) => {
   return await fatch(POSTC, [category_name])
}

const UPDATECATEGORY = async ({ category_id, category_name }) => {
   return await fatch(UPDATEC, [category_id, category_name])
}

const DELETECATEGORY = async ({ id }) => {
   return await fatch(DELETEC, [id])
}

const POSTSUBCATEGORY = async ({ category_id, sub_category_name }) => {
   return await fatch(POSTS, [category_id, sub_category_name])
}

const PUTSUBCATEGORY = async ({ sub_category_id, sub_category_name }) => {
   return await fatch(PUTS, [sub_category_id, sub_category_name])
}

const DELETESUBCATEGORY = async ({ id }) => {
   return await fatch(DELETES, [id])
}



export default {
   GETCATEGORY,
   SUBCATEGORY,
   POSTCATEGORY,
   UPDATECATEGORY,
   DELETECATEGORY,
   POSTSUBCATEGORY,
   PUTSUBCATEGORY,
   DELETESUBCATEGORY
}