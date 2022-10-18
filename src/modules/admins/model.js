import { fatch, fatchAll } from "../../lib/postgre.js"
import { LOGIN } from "./query.js"



const LOGINADMIN = async ({ login, parol }) => {
   return fatch(LOGIN, [login, parol])
}


export default { LOGINADMIN }