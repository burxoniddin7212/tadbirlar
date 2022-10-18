
const GET = `
  select
   c.*,
   json_agg(s.*) as sub_category
  from category as c
  left join sub_category as s on c.category_id=s.category_id
  WHERE c.status='active' and s.status='active' and case
                                                     when $1>0 then c.category_id=$1
                                                     else true
                                                    end
  group by c.category_id

`;

const GETSUBCATEGORY = `
  select
   *
  from sub_category
  WHERE status='active'
`;

const POSTC = `
  INSERT INTO category(category_name) VALUES ($1) returning *
`;

const UPDATEC=`
with old_category as (
  select
      category_name
  from category
  where category_id = $1    
) update category as c
  set
  category_name = 
          case 
              when length($2) > 0 then $2
              else (select category_name from old_category)
          end   
where c.category_id = $1 and c.status = 'active'
returning c.*      
`;

const DELETEC=`
 update category as c
  set
  status = 'delete'
where c.category_id = $1 and c.status = 'active'
returning c.*      
`;

const POSTS=`
INSERT INTO sub_category(category_id,sub_category_name) VALUES ($1,$2) returning *     
`;

const PUTS=`
 update sub_category as s
  set
  sub_category_name=$2
where s.sub_category_id = $1 and s.status = 'active'
returning s.*      
`;

const DELETES=`
 update sub_category as s
  set
  status='delete'
where s.sub_category_id = $1 and s.status = 'active'
returning s.*      
`;

export {
  GET,
  GETSUBCATEGORY,
  POSTC,
  UPDATEC,
  DELETEC,
  POSTS,
  PUTS,
  DELETES
}