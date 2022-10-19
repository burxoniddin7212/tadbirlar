import module from "./model.js"

const GET = async (req, res, next) => {
   try {
      const elon = await module.GETELON(req.params, req.query);
      elon.forEach(e=>{
         e.img="https://tadbirlar.herokuapp.com/"+e.img
      })
      if (req.params.id && elon.length == 0) return res.send({
         status: 400,
         message: "bunday data yo'q"
      })
      return res.send({
         status: 200,
         message: "ok",
         data: elon
      });
   } catch (error) {
      console.log(error);
   }
}


const FILTER = async (req, res, next) => {
   try {
      const elon = await module.GETELONFILTER(req.query);
      elon.forEach(e=>{
         e.img="https://tadbirlar.herokuapp.com/"+e.img
      })
      if (elon.length == 0) return res.send({
         status: 400,
         message: "bunday data yo'q"
      })
      return res.send({
         status: 200,
         message: "ok",
         data: elon
      });
   } catch (error) {
      console.log(error);
   }
}


const TASTIQLASH = async (req, res, next) => {
   try {
      console.log(req.headers);
      const elon = await module.TASTIQLASH(req.params);

      if (!elon) return res.send({
         status: 400,
         message: "bunday data yo'q"
      })
      return res.send({
         status: 201,
         message: "ok",
         data: elon
      });
   } catch (error) {
      console.log(error);
   }
}

const POST = async (req, res, next) => {
   try {

      console.log(req.file.filename);
      let img = req.file.filename;
      const elon = await module.POST(req.body, img);

      if (!elon) return res.send({
         status: 400,
         message: "validatsiyada xatolik bor"
      })

      res.send({
         status: 200,
         message: "ok",
         data: elon
      })

   } catch (error) {
      console.log(error);
   }
}


const UPDATE = async (req, res, next) => {
   try {

      const elon = await module.UPDATE(req.body);
      if (!elon) return res.send({
         status: 400,
         message: "validatsiyada xatolik bor"
      })
      res.send({
         status: 200,
         message: "ok",
         data: elon
      })

   } catch (error) {
      console.log(error);
   }
}

const DELETE = async (req, res, next) => {
   try {

      const elon = await module.DELETE(req.params);
      if (!elon) return res.send({
         status: 400,
         message: "bunday elon_id li data yoq"
      })
      return res.send({
         status: 200,
         message: "ochirildi",
         data: elon
      })
   } catch (error) {
      console.log(error);
   }
}


export default {
   GET,
   FILTER,
   TASTIQLASH,
   POST,
   UPDATE,
   DELETE
}