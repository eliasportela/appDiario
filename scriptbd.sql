-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE frota (
id_frota INT PRIMARY KEY,
marca VARCHAR(64),
modelo VARCHAR(64),
placa VARCHAR(8)
)

CREATE TABLE motorista (
id_motorista SERIAL PRIMARY KEY,
nome_motorista VARCHAR(64),
senha VARCHAR(64),
usuario VARCHAR(32),
cnh INT
)

CREATE TABLE ocorrencia (
id_occorencia SERIAL PRIMARY KEY,
ds_ocorrencia VARCHAR(64)
)

CREATE TABLE parada (
id_jornada INT,
id_occorencia INT,
latitude VARCHAR(10),
longitude VARCHAR(10),
horario_inicio TIME,
horario_fim TIME,
FOREIGN KEY(id_occorencia) REFERENCES ocorrencia (id_occorencia)
)

CREATE TABLE coordenada (
id_coordenada SERIAL PRIMARY KEY,
coordenada VARCHAR(10),
ds_localizacao VARCHAR(64)
)

CREATE TABLE diario_coordenda (
id_coordenada INT,
id_db INT,
FOREIGN KEY(id_coordenada) REFERENCES coordenada (id_coordenada)
)

CREATE TABLE jornada (
id_jornada SERIAL PRIMARY KEY,
horario_partida TIME,
horario_fim TIME,
Data_inicio DATE,
Data_fim DATE,
latitude_inicio VARCHAR(10),
latitude_fim VARCHAR(10),
longitude_inicio VARCHAR(10),
longitude_fim VARCHAR(10),
concluida INT
)

CREATE TABLE db_jornada (
id_db INT,
id_jornada INT,
FOREIGN KEY(id_jornada) REFERENCES jornada (id_jornada)
)

CREATE TABLE diario_bordo (
id_db SERIAL PRIMARY KEY,
id_motorista INT,
id_frota INT,
Data_Inicio DATE,
Data_fim DATE,
Concluido INT,
FOREIGN KEY(id_motorista) REFERENCES motorista (id_motorista),
FOREIGN KEY(id_frota) REFERENCES frota (id_frota)
)

ALTER TABLE parada ADD FOREIGN KEY(id_jornada) REFERENCES jornada (id_jornada)
ALTER TABLE diario_coordenda ADD FOREIGN KEY(id_db) REFERENCES diario_bordo (id_db)
ALTER TABLE db_jornada ADD FOREIGN KEY(id_db) REFERENCES diario_bordo (id_db)
