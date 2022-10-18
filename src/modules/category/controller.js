import module from "./model.js"

const GETCATEGORY = async (req, res, next) => {
   try {
      const category = await module.GETCATEGORY(req.params);
      console.log(category);
      if (req.params.id && category.length == 0) return res.send({
         status: 400,
         message: "bunday data yo'q"
      })
      return res.send({
         status: 200,
         message: "ok",
         data: category
      });
   } catch (error) {
      console.log(error);
   }
}

const GETSUBCATEGORY = async (req, res, next) => {
   try {
      const sub_category = await module.SUBCATEGORY();
      return res.send({
         status: 200,
         message: "ok",
         data: sub_category
      });
   } catch (error) {
      console.log(error);
   }
}

const POSTCATEGORY = async (req, res, next) => {
   try {
      const category = await module.POSTCATEGORY(req.body)
      return res.send({
         status:200,
         message:"qoshildi",
         data:category
      });
   } catch (error) {
      console.log(error);
   }
}

const UPDATECATEGORY = async (req, res, next) => {
   try {
      const category = await module.UPDATECATEGORY(req.body)
      return res.send({
         status:200,
         message:"ozgardi",
         data:category
      });
   } catch (error) {
      console.log(error);
   }
}


const DELETECATEGORY = async (req, res, next) => {
   try {
      const category = await module.DELETECATEGORY(req.params)
      return res.send({
         status:200,
         message:"o'chdi",
         data:category
      });
   } catch (error) {
      console.log(error);
   }
}

const POSTSUBCATEGORY = async (req, res, next) => {
   try {
      const sub_category = await module.POSTSUBCATEGORY(req.body);
      if(!sub_category) return res.sen({
         status:400,
         message:"validatsiyada xatolik bor"
      })
      return res.send({
         status:200,
         message:"qoshildi",
         data:sub_category
      });
   } catch (error) {
      console.log(error);
   }
}

const PUTSUBCATEGORY = async (req, res, next) => {
   try {
      const sub_category = await module.PUTSUBCATEGORY(req.body);

      if(!sub_category) return res.sen({
         status:400,
         message:"validatsiyada xatolik bor"
      })

      return res.send({
         status:200,
         message:"ozgardi",
         data:sub_category
      });
   } catch (error) {
      console.log(error);
   }
}


const DELETESUBCATEGORY = async (req, res, next) => {
   try {
      const sub_category = await module.DELETESUBCATEGORY(req.params);

      if(!sub_category) return res.send({
         status:400,
         message:"bunday sub_category_id li data o'chirib bo'lingan"
      })

      return res.send({
         status:200,
         message:"o'chdi",
         data:sub_category
      });
   } catch (error) {
      console.log(error);
   }
}


export default {
   GETCATEGORY,
   GETSUBCATEGORY,
   POSTCATEGORY,
   UPDATECATEGORY,
   DELETECATEGORY,
   POSTSUBCATEGORY,
   PUTSUBCATEGORY,
   DELETESUBCATEGORY
}