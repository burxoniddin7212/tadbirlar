
INSERT INTO admins(login,parol) values ('ali',crypt('12345', gen_salt('bf')));


INSERT INTO category(category_name) values ('infarmatsion texnologies'),('dizayn'),('biznes'),('ta''lim');

INSERT INTO sub_category(sub_category_name,category_id) values ('web developer',1),('mobile developer',1),('java developer',1),('flatter',1);


INSERT INTO sub_category(sub_category_name,category_id) values ('UI/UX dizayn',2),('grafik dizayn',2);

INSERT INTO sub_category(sub_category_name,category_id) values ('menejment',3),('kredit va audit',3);

INSERT INTO sub_category(sub_category_name,category_id) values ('matematika',4),('fizika',4);


INSERT INTO elon(sub_category_id,otkaziladigan_kun,otkaziladigan_vaqt,tadbir_turi,link,tashkilot_turi,yuridik_nomi,ismi_sharifi,img,professiya,contact,qoshimcha_contact) values (2,'2022-10-20','16:00','offline','youtube.com/....','yuridik','developerweb','normengliyev abdumutal','erkinov.png','mobile developer','998909787212','998901234567'),(4,'2022-10-21','16:00','offline','youtube.com/....','yuridik','developerweb','egamqulov dilshod','erkinov.png','flutter','998909787212','998901234567'),(5,'2022-10-22','16:00','offline','youtube.com/....','yuridik','developerweb','ataboyev bobur','erkinov.png','flutter','998909787212','998901234567');


CREATE TABLE color(
   id serial,
   color color_t
);
INSERT INTO color(color) values ('gra');



INSERT INTO korilganlar_soni(elon_id,korilganlar_soni) values (1,1),(2,1);
INSERT INTO korganlar(elon_id,ip,user_agent) values (1,'::11','ayfon-6'),(2,'::12','ayfon-7');





select CAST('2022-10-17T19:00:00.000Z' AS DATE)=CAST('2022-10-17' AS DATE);




DELETE FROM korilganlar_soni
WHERE id='6';
DELETE FROM korganlar
WHERE id='12';
