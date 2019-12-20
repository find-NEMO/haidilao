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


-- 会员页
-- 创建保存会员信息的表 member_message
drop table if exists member_message;
create table if not exists member_message(
    mid int primary key auto_increment,
    mname varchar(64),
    mlaobi int,
    mno varchar(64)
);
insert into member_message values(null,'失宠.','0','NO.8620191216018780');

-- 创建保存第二部分连接的表
drop table if exists member_tiaozhuan;  
create table if not exists member_tiaozhuan(
    tid int primary key auto_increment,
    ttitle varchar(32),
    tpic_n varchar(255),
    tpic_y varchar(255),
    tpic0 varchar(255),
    tsubtitle0 varchar(64),
    tsubtitle1 varchar(255),   
    tsubtitle2 varchar(255),   
    tsubtitle3 varchar(255),   
    tsubtitle4 varchar(255)
);
-- 捞币换礼
insert into member_tiaozhuan values(null,'捞币换礼','/member/img1.png','/member/img1.png','/member/close.png','银海解锁','会员可在捞币商城中兑换产品','所有会员','进入捞币商城，消耗捞币，兑换相关产品','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 生日赠礼
insert into member_tiaozhuan values(null,'生日赠礼','/member/img2.png','/member/img2.png','/member/close.png','银海解锁','生日当月1号给已完善生日信息的会员，发放生日当月可食用的30元代金券一张。(请在APP端完善生日信息，生日当月完善信息的会员，将在明年生日月1日发放)','所有会员','仅限会员本人在本地门店就餐使用。代金券不能与折扣同时使用，且每次就餐只能使用一张代金券','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 升级礼遇
insert into member_tiaozhuan values(null,'升级礼遇','/member/img3.png','/member/img33.png','/member/close.png','银海解锁','每月1日升级至海银、金海、黑海的会员，将获得相应礼遇。(不含原本就是该等级或将至该等级的会员)','银海及以上会员，每月1日评定升级的会员','仅限会员本人在内地门店就餐使用','升级礼遇内容以后台发放为准');
-- 线下活动
insert into member_tiaozhuan values(null,'线下活动','/member/img4.png','/member/img44.png','/member/close.png','银海解锁','金海及以上等级会员有机会参与海底捞举办的相关线下活动','金海及以上会员','通过APP报名相应的线下活动，报名成功且通过审核的会员，既有机会参加','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- VIP专享
insert into member_tiaozhuan values(null,'VIP专享','/member/img5.png','/member/img55.png','/member/close.png','银海解锁','1','2','3','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 包间会议
insert into member_tiaozhuan values(null,'包间会议','/member/img6.png','/member/img66.png','/member/close.png','银海解锁','黑海会员每月享受1张包间限免服务费使用券，发放当月有效，可用于会议洽谈的活动','黑海会员本人专享','目前仅在部分门店开放，预约方法：提前1-2天，APP进入“会员-专属客服”，练习黑海专属客服预约。','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 黑海通道
insert into member_tiaozhuan values(null,'黑海通道','/member/img7.png','/member/img77.png','/member/close.png','银海解锁','正常营业门店当前市别网上排号已满时，黑海会员可正常排号','文字','文字','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 期待更多
insert into member_tiaozhuan values(null,'期待更多','/member/img8.png','/member/img8.png','','','','','','');

-- 创建保存轮播图的表 member_carousel
drop table if exists member_carousel;
create table if not exists member_carousel(
    cid int primary key auto_increment,
    cpic varchar(255),
    chref varchar(255)  
insert into member_carousel values(null,'/member/lunbotu1.jpg','');
insert into member_carousel values(null,'/member/lunbotu2.jpg','');
insert into member_carousel values(null,'/member/lunbotu3.jpg','');
insert into member_carousel values(null,'/member/lunbotu4.jpg','');

-- 创建保存成长值的表 grow
drop table if exists member_grow;
create table if not exists member_grow(
    gid int primary key auto_increment,
    ggrow int,
    gaward int,
    glevel varchar(32)
);
insert into member_grow values(null,'0','0','红海');

-- 创建保存食品的表 food
drop table if exists member_food;
create table if not exists member_food(
    fid int primary key auto_increment,
    fmount int,
    fbeat int,
    fpic varchar(255),
    ftitle varchar(64),
    flaobi int,
    fduihuan int
);
insert into member_food values(null,'0','0','../assets/member/food1.png','小龙虾1盒装 6~8钱/只 可选麻辣味/蒜蓉味/话梅黄酒味【邮寄到家】','999','677');
insert into member_food values(null,'0','0','../assets/member/food2.png','海底捞口袋坚果1盒375克','1380','6411');
insert into member_food values(null,'0','0','../assets/member/food3.png','海底捞 捞派虾滑1盒','1180','18');
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

