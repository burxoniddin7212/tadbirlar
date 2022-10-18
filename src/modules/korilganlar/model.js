import { fatch, fatchAll } from "../../lib/postgre.js"
import { KORILGANLARSONI, KORGANLARGAQQUERY, KORILGANLARSONIQ, COUNT } from "./query.js"

const KORILGANLAR = async () => {
   return await fatchAll(KORILGANLARSONI)
}

const KORILGANLARGAQ = async ({ elon_id }) => {
   let count = 1;
   return await fatch(KORILGANLARSONIQ, [elon_id, count])
}

const KORGANLARGAQ = async (elon_id, ip, user_agent) => {
   return await fatch(KORGANLARGAQQUERY, [elon_id, ip, user_agent])
}

const KORILGANLARNIOSHIRISH = async (elon_id, korilganlar_soni) => {
   return await fatch(COUNT, [elon_id, korilganlar_soni])
}



export default {
   KORILGANLAR,
   KORILGANLARGAQ,
   KORGANLARGAQ,
   KORILGANLARNIOSHIRISH
}