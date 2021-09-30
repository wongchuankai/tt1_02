CREATE TABLE customer (
  id serial NOT NULL,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  postal_code varchar(255) NOT NULL,
  gender varchar(50) NOT NULL,
  created_at date NOT NULL DEFAULT NOW()
);

CREATE TABLE category (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL UNIQUE,
  description text NOT NULL,
  image text NOT NULL
);
