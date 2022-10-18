
const GET = `
  select
   *
  from elon
  WHERE status='active' and case
                           when $1>0 then elon_id=$1    
                           else true                     
                         end
  
  LIMIT $2
  OFFSET ($3-1)*$2
`;

const FILTER = `
  select
   e.*
  from elon as e
  WHERE status='active'
  and 
    case
      when LENGTH($1)>0 then e.ismi_sharifi=$1  
    else true                     
    end
  and
    case
      when LENGTH($2)>0 then CAST(e.tadbir_turi AS varchar)=CAST($2 AS varchar)
    else true
    end
  and
    case
      when LENGTH($3)>0 then e.sub_category_id=CAST($3 AS INTEGER)
    else true
    end
  and
    case
      when LENGTH($4)>0 then  CAST(e.otkaziladigan_kun AS DATE)=CAST($4 AS DATE)
    else true
    end

    LIMIT $5 
    OFFSET ($6-1)*$5
  `;

const ELONTASTIQLASH = `
    UPDATE elon
    SET
    status=$1
    WHERE elon_id=CAST($2 AS INTEGER)
    RETURNING * 
  `;

  const POSTQ = `
  INSERT INTO elon(sub_category_id, otkaziladigan_kun, otkaziladigan_vaqt, tadbir_turi, link, tashkilot_turi, yuridik_nomi, ismi_sharifi, img, professiya, contact, qoshimcha_contact) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *
  `;

const UPDATEQ=`
with old_elon as (
  select
  sub_category_id, otkaziladigan_kun, 
  otkaziladigan_vaqt, tadbir_turi,
  link, tashkilot_turi, 
  yuridik_nomi, ismi_sharifi, 
  img, professiya,
  contact, qoshimcha_contact
  from elon
  where elon_id = $1    
) update elon as c
  set
  sub_category_id = 
          case 
              when length($2) > 0 then CAST($2 AS INTEGER)
              else (select sub_category_id from old_elon)
          end,
  otkaziladigan_kun = 
          case 
              when length($3) > 0 then CAST($3 AS DATE)
              else (select otkaziladigan_kun from old_elon)
          end, 
  otkaziladigan_vaqt = 
          case 
              when length($4) > 0 then $4
              else (select otkaziladigan_vaqt from old_elon)
          end,       
  tadbir_turi = 
          case 
              when length($5) > 0 then CAST($5 AS tadbir_turi_t)
              else (select tadbir_turi from old_elon)
          end, 
  link = 
          case 
              when length($6) > 0 then $6
              else (select link from old_elon)
          end,  
  tashkilot_turi = 
          case 
              when length($7) > 0 then CAST($7 AS tashkilot_turi_t)
              else (select tashkilot_turi from old_elon)
          end,  
  yuridik_nomi = 
          case 
              when length($8) > 0 then $8
              else (select yuridik_nomi from old_elon)
          end,   
  ismi_sharifi = 
          case 
              when length($9) > 0 then $9
              else (select ismi_sharifi from old_elon)
          end,    
  img = 
          case 
              when length($10) > 0 then $10
              else (select img from old_elon)
          end, 
  professiya = 
          case 
              when length($11) > 0 then $11
              else (select professiya from old_elon)
          end,   
  contact = 
          case 
              when length($12) > 0 then $12
              else (select contact from old_elon)
          end,   
          qoshimcha_contact = 
          case 
              when length($13) > 0 then $13
              else (select qoshimcha_contact from old_elon)
          end                
where c.elon_id = CAST($1 AS INTEGER) and c.status = 'active'
returning c.*      
`;

const DELETEELON=`
  UPDATE elon
  SET
  status='delete'
  where elon_id=$1
  returning * 
`;

export {
  GET,
  FILTER,
  ELONTASTIQLASH,
  POSTQ,
  UPDATEQ,
  DELETEELON
}