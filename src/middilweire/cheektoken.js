import jwt from "../lib/jwt.js"



const cheektoken = (req, res, next) => {
   try {
      if (req.method != "GET" && req.url != '/login') {
         const token = req.headers.token;
         if (!token) throw new Error('token required');
         jwt.verify(token)
      }
      next();
   } catch (error) {
      res.send({
         status: 401,
         message: "Forbiddin"
      })
   }
}



export {
   cheektoken
}