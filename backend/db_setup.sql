-- Setup MySQL server for farmtel
CREATE DATABASE IF NOT EXISTS farmtel_db;
CREATE USER IF NOT EXISTS 'farmtel'@'localhost' IDENTIFIED BY 'farmtel_pwd';
GRANT ALL PRIVILEGES ON `farmtel_db`.* TO 'farmtel'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'farmtel'@'localhost';
FLUSH PRIVILEGES;
