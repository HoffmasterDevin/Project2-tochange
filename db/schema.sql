DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

USE fitness_db;

DROP TABLE IF EXISTS attack;
CREATE TABLE attack (
  attack_id int NOT NULL,
  category varchar(25),
  activity varchar(25),
  damage int,
  PRIMARY KEY (attack_id)
);


DROP TABLE IF EXISTS enemy;
CREATE TABLE enemy (
  enemy_id int NOT NULL,
  name varchar(25) DEFAULT NULL,
  health int DEFAULT NULL,
  PRIMARY KEY (enemy_id)
);

DROP TABLE IF EXISTS fight;
CREATE TABLE fight (
  fight_id int NOT NULL,
  user_id int NOT NULL,
  date datetime NOT NULL,
  user_id int NOT NULL,
  enemy_id int NOT NULL,
  defeated tinyint NOT NULL,
  PRIMARY KEY (fight_id)
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id int NOT NULL,
  username varchar(16) NOT NULL,
  email varchar(255) DEFAULT NULL,
  password varchar(32) NOT NULL,
  create_time timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);