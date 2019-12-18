-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET AUTOCOMMIT = 0;
-- START TRANSACTION;
-- SET time_zone = "+00:00";
-- CREATE DATABASE IF NOT EXISTS haidilao DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE haidilao;
DROP TABLE IF EXISTS index_carousel1;
CREATE TABLE IF NOT EXISTS index_carousel1 (
    id INT UNSIGNED AUTO_INCREMENT COMMENT '自增主键',
    title VARCHAR(100) NOT NULL COMMENT '轮播图片名称',
    img_url VARCHAR(200) NOT NULL COMMENT '轮播图片地址',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '轮播图';
-- 插入之前先把表清空
--TRUNCATE TABLE index_carousel1;
INSERT INTO index_carousel1 (title, img_url) values ("轮播1", "../../assets/index/lunbo1.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播2", "../../assets/index/lunbo2.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播3", "../../assets/index/lunbo3.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播4", "../../assets/index/lunbo4.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播5", "../../assets/index/lunbo5.png");
