import module from "./model.js"


const KORILGANLARGET = async (req, res, next) => {
   try {
      const data = await module.KORILGANLAR();
      console.log(data);
      return res.send({
         status: 200,
         message: "ok",
         data: data
      })
   } catch (error) {
      console.log(error);
   }
}

const KORILGANLAR = async (req, res, next) => {
   try {
      var { elon_id } = req.body;
      const data = await module.KORILGANLAR();
      let findElon = data.find(elon => elon.elon_id == elon_id);
      if (!findElon) {
         const elon = await module.KORILGANLARGAQ(req.body);
         const korganlar = await module.KORGANLARGAQ(elon_id, req.ip, req.headers["user-agent"]);
         return res.send({
            status: 201,
            message: "ok",
            data: {
               korilgan: elon,
               korganlar: korganlar
            }
         })
      } else {
         let korganlar1 = findElon?.korganlar.find(data => data?.ip == req.ip && data?.user_agent == req.headers["user-agent"]);

         if (korganlar1) {
            return res.send({
               status: 400,
               message: "bu user korib bo'lgan"
            })
         } else {
            const korganlar2 = await module.KORGANLARGAQ(elon_id, req.ip, req.headers["user-agent"]);
            const data = await module.KORILGANLAR();
            let korilganElon = data.find(info => info.elon_id == elon_id);
            let korilganlar_soni = korilganElon.korilganlar_soni;
            korilganlar_soni = +korilganlar_soni + 1;

            let korilganlarSonigaQoshilgani = await module.KORILGANLARNIOSHIRISH(elon_id, korilganlar_soni);

            return res.send({
               status: 200,
               message: "korilganlar soni bittaga kopaydi",
               data: korilganlarSonigaQoshilgani
            })
         }

      }

   } catch (error) {
      console.log(error);
   }
}





export default {
   KORILGANLAR,
   KORILGANLARGET
}