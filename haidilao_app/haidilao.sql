set names utf8;
drop database if exists haidilao;
create haidilao;
use haidilao;
-- 会员页
-- 创建保存会员信息的表 message
create table message(
    mid int primary key auto_increment,
    mname varchar(32),
    mlaobi int,
    mno varchar(64)
);
insert into message values(null,'失宠.','0','NO.8620191216018780');

-- 创建保存第二部分连接的表  
create table tiaozhuan(
    tid int primary key auto_increment,
    ttitle varchar(32),
    tpic varchar(255),
    thref varchar(255),
    tpic1 varchar(255),
    tsubtitle1 varchar(64),
    tpic2 varchar(255),
    tsubtitle2 varchar(64),
    tpic3 varchar(255),
    tsubtitle3 varchar(64),
    tpic4 varchar(255),
    tsubtitle4 varchar(64),
);
-- 捞币换礼
insert into tiaozhuan values(null,'捞币换礼','../assets/member/img1.png','','../assets/member/member_details/pic1.png','会员可在捞币商城中兑换产品','../assets/member/member_details/pic2.png','所有会员','../assets/member/member_details/pic3.png','进入捞币商城，消耗捞币，兑换相关产品','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 生日赠礼
insert into tiaozhuan values(null,'生日赠礼','../assets/member/img2.png','','../assets/member/member_details/pic1.png','生日当月1号给已完善生日信息的会员，发放生日当月可食用的30元代金券一张。(请在APP端完善生日信息，生日当月完善信息的会员，将在明年生日月1日发放)','../assets/member/member_details/pic2.png','所有会员','../assets/member/member_details/pic3.png','仅限会员本人在本地门店就餐使用。代金券不能与折扣同时使用，且每次就餐只能使用一张代金券','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 升级礼遇
insert into tiaozhuan values(null,'升级礼遇','../assets/member/img3.png','','../assets/member/member_details/pic1.png','每月1日升级至海银、金海、黑海的会员，将获得相应礼遇。(不含原本就是该等级或将至该等级的会员)','../assets/member/member_details/pic2.png','银海及以上会员，每月1日评定升级的会员','../assets/member/member_details/pic3.png','仅限会员本人在内地门店就餐使用','../assets/member/member_details/pic4.png','升级礼遇内容以后台发放为准');
-- 线下活动
insert into tiaozhuan values(null,'线下活动','../assets/member/img4.png','','../assets/member/member_details/pic1.png','金海及以上等级会员有机会参与海底捞举办的相关线下活动','../assets/member/member_details/pic2.png','金海及以上会员','../assets/member/member_details/pic3.png','通过APP报名相应的线下活动，报名成功且通过审核的会员，既有机会参加','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- VIP专享
insert into tiaozhuan values(null,'VIP专享','../assets/member/img5.png','','../assets/member/member_details/pic1.png','','../assets/member/member_details/pic2.png','','../assets/member/member_details/pic3.png','','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 包间会议
insert into tiaozhuan values(null,'包间会议','../assets/member/img6.png','','../assets/member/member_details/pic1.png','黑海会员每月享受1张包间限免服务费使用券，发放当月有效，可用于会议洽谈的活动','../assets/member/member_details/pic2.png','黑海会员本人专享','../assets/member/member_details/pic3.png','目前仅在部分门店开放，预约方法：提前1-2天，APP进入“会员-专属客服”，练习黑海专属客服预约。','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 黑海通道
insert into tiaozhuan values(null,'黑海通道','../assets/member/img7.png','','../assets/member/member_details/pic1.png','正常营业门店当前市别网上排号已满时，黑海会员可正常排号','../assets/member/member_details/pic2.png','','../assets/member/member_details/pic3.png','','../assets/member/member_details/pic4.png','在不违反法律规定的前提下，海底捞有权对活动或权益未尽事宜进行补充说明和解释');
-- 期待更多
insert into tiaozhuan values(null,'期待更多','../assets/member/img8.png','','','','','','','','','');

-- 创建保存轮播图的表 carousel
create table carousel(
    cid int primary key auto_increment,
    cpic varchar(255),
    chref varchar(255)   --跳转路径
);
insert into carousel values(null,'../assets/member/lunbotu1.jpg','');
insert into carousel values(null,'../assets/member/lunbotu2.jpg','');
insert into carousel values(null,'../assets/member/lunbotu3.jpg','');
insert into carousel values(null,'../assets/member/lunbotu4.jpg','');

-- 创建保存成长值的表 grow
create table grow(
    gid int primary key auto_increment,
    ggrow int,
    gaward int,
    glevel varchar(32)
);
insert into grow values(null,'0','0','红海');

-- 创建保存食品的表 food
create table food(
    fid int primary key auto_increment,
    flaobi int,
    fbeat int,
    fpic varchar(255),
    ftitle varchar(64),
    flaobi int,
    fduihuan int
);
insert into food values(null,'0','0','../assets/member/food1.png','小龙虾1盒装 6~8钱/只 可选麻辣味/蒜蓉味/话梅黄酒味【邮寄到家】','999','677');
insert into food values(null,'0','0','../assets/member/food2.png','海底捞口袋坚果1盒375克','1380','6411');
insert into food values(null,'0','0','../assets/member/food3.png','海底捞 捞派虾滑1盒','1180','18')