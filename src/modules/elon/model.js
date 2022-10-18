import { fatch, fatchAll } from "../../lib/postgre.js"
import { GET, FILTER, ELONTASTIQLASH, POSTQ, UPDATEQ, DELETEELON } from "./query.js"

const GETELON = async ({ id = 0 }, { limit = 6, page = 1 }) => {
   return await fatchAll(GET, [id, limit, page])
}

const GETELONFILTER = async ({ ismiSharifi = '', tadbirTuri = '', kun = '', subCategoryId = '', limit = 6, page = 1 }) => {
   return await fatchAll(FILTER, [ismiSharifi, tadbirTuri, subCategoryId, kun, limit, page])
}

const TASTIQLASH = async ({ id }) => {
   let status = await 'active';
   return await fatch(ELONTASTIQLASH, [status, id])
}


const POST = async ({ sub_category_id, otkaziladigan_kun, otkaziladigan_vaqt, tadbir_turi, link, tashkilot_turi, yuridik_nomi, ismi_sharifi, professiya, contact, qoshimcha_contact },img) => {

   return await fatchAll(POSTQ, [sub_category_id, otkaziladigan_kun, otkaziladigan_vaqt, tadbir_turi, link, tashkilot_turi, yuridik_nomi, ismi_sharifi, img, professiya, contact, qoshimcha_contact])
}


const UPDATE = async ({ elon_id, sub_category_id = "", otkaziladigan_kun = "", otkaziladigan_vaqt = "", tadbir_turi = "", link, tashkilot_turi = "", yuridik_nomi = "", ismi_sharifi = "", img = "", professiya = "", contact = "", qoshimcha_contact = "" }) => {

   return await fatch(UPDATEQ, [elon_id, sub_category_id, otkaziladigan_kun, otkaziladigan_vaqt, tadbir_turi, link, tashkilot_turi, yuridik_nomi, ismi_sharifi, img, professiya, contact, qoshimcha_contact])
}

const DELETE = async ({ id }) => {

   return await fatch(DELETEELON, [id])
}

export default {
   GETELON,
   GETELONFILTER,
   TASTIQLASH,
   POST,
   UPDATE,
   DELETE
}