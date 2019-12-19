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
-- TRUNCATE TABLE index_carousel1;
INSERT INTO index_carousel1 (title, img_url) values ("轮播1", "/index/lunbo1.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播2", "/index/lunbo2.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播3", "/index/lunbo3.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播4", "/index/lunbo4.png");
INSERT INTO index_carousel1 (title, img_url) values ("轮播5", "/index/lunbo5.png");

DROP TABLE IF EXISTS index_topic;
CREATE TABLE IF NOT EXISTS index_topic (
    id INT UNSIGNED AUTO_INCREMENT COMMENT '自增主键',
    img_url VARCHAR(200) NOT NULL COMMENT '轮播图片地址',
    b_title VARCHAR(256) NOT NULL COMMENT '轮播图片大标题',
    s_title VARCHAR(256) NOT NULL COMMENT '轮播图片副标题',
    topic_count INT NOT NULL COMMENT '话题数量',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '轮播图';
-- 插入之前先把表清空
-- TRUNCATE TABLE index_topic;
INSERT INTO index_topic (img_url,b_title,s_title,topic_count) values ("/index/topic1.png","#一句话总结2019#","年度总结大全","309");
INSERT INTO index_topic (img_url,b_title,s_title,topic_count) values ("/index/topic2.png","#一直瞒着妈妈的事#","有些事绝对不能跟妈妈说","122");
INSERT INTO index_topic (img_url,b_title,s_title,topic_count) values ("/index/topic3.png","#解辣应该喝什么#","又讲互动：你觉得哪个饮料跟火锅最配","371");
INSERT INTO index_topic (img_url,b_title,s_title,topic_count) values ("/index/topic4.png","#最想实现的新年愿#","转锦鲤不如我捞你啊","402");

DROP TABLE IF EXISTS index_goods;
CREATE TABLE IF NOT EXISTS index_goods (
    id INT UNSIGNED AUTO_INCREMENT COMMENT '自增主键',
    goods_title VARCHAR(256) NOT NULL COMMENT '商品标题',
    img_url VARCHAR(200) NOT NULL COMMENT '图片地址',
    price INT NOT NULL COMMENT '商品价格',
    goods_count INT NOT NULL COMMENT '商品数量',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '轮播图';
-- 插入之前先把表清空
-- TRUNCATE TABLE index_topic;
INSERT INTO index_goods (goods_title,img_url,price,goods_count) values ("海底捞口袋坚果1盒375克","/index/goods1.png","1380","5805");
INSERT INTO index_goods (goods_title,img_url,price,goods_count) values ("小龙虾1盒装 6~8钱/只...","/index/goods2.png","999","598");
INSERT INTO index_goods (goods_title,img_url,price,goods_count) values ("海底捞 捞派滑牛肉1盒...","/index/goods3.png","900","292");
INSERT INTO index_goods (goods_title,img_url,price,goods_count) values ("海底捞捞派虾滑1盒 火...","/index/goods4.png","1099","254");

