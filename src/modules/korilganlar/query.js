
const KORILGANLARSONI = `
  select
  ks.*,
  json_agg(k.*) as korganlar
  FROM
  korilganlar_soni as ks
   left join korganlar as k on  ks.elon_id=k.elon_id
   group by ks.elon_id
`;

const KORILGANLARSONIQ = `
  INSERT INTO korilganlar_soni(elon_id,korilganlar_soni) values ($1,$2) RETURNING * 
`;

const KORGANLARGAQQUERY = `
  INSERT INTO korganlar(elon_id,ip,user_agent) values ($1,$2,$3) RETURNING * 
`;

const COUNT=`
  UPDATE korilganlar_soni
  SET korilganlar_soni=$2
  WHERE elon_id=$1 
  RETURNING * 
`


export {
  KORILGANLARSONI,
  KORILGANLARSONIQ,
  KORGANLARGAQQUERY,
  COUNT
}