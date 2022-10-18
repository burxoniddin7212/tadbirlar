import model from './model.js'
import jwt from '../../lib/jwt.js';

const LOGIN = async (req, res) => {

   const admin = await model.LOGINADMIN(req.body);
   console.log(admin);
   if (admin) {
      res.send({
         status: 200,
         message: "ok",
         token: jwt.sign({ admin_id: admin.admin_id })
      })
   } else {
      res.send({
         status: 401,
         message: "wrong username or password",
         token: null
      })
   }
}






export default { LOGIN }