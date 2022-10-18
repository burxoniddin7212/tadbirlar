CREATE DATABASE tadbirlar;
\c tadbirlar

CREATE EXTENSION IF NOT EXISTS pgcrypto;
create type tadbir_turi_t as enum('online','offline');
create type tashkilot_turi_t as enum('yuridik','jismoniy');

CREATE TABLE admins(
   admin_id serial primary key,
   login varchar not null,
   parol varchar not null,
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('active')
);

CREATE TABLE category(
   category_id serial primary key,
   category_name varchar,
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('active')
);

CREATE TABLE sub_category(
   sub_category_id serial primary key,
   category_id int REFERENCES category(category_id),
   sub_category_name varchar,
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('active')
);

CREATE TABLE elon(
   elon_id serial primary key,
   sub_category_id int REFERENCES sub_category(sub_category_id),
   otkaziladigan_kun date,
   otkaziladigan_vaqt varchar(10),
   tadbir_turi tadbir_turi_t,
   link varchar,
   tashkilot_turi tashkilot_turi_t,
   yuridik_nomi varchar,
   ismi_sharifi varchar,
   img varchar,
   professiya varchar(100),
   contact varchar(20),
   qoshimcha_contact varchar(20),
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('new')
);

CREATE TABLE korilganlar_soni(
   id serial not null,
   elon_id int primary key,
   korilganlar_soni bigint,
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('active')
);

CREATE TABLE korganlar(
   id serial not null,
   elon_id int REFERENCES korilganlar_soni(elon_id),
   ip varchar not null,
   user_agent varchar not null,
   created_at date DEFAULT CURRENT_TIMESTAMP,
   status varchar DEFAULT('active')
);






