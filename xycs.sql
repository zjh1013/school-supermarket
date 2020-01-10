-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- Server version:               5.0.96-community-nt - MySQL Community Edition (GPL)
-- Server OS:                    Win64
-- HeidiSQL 版本:                  10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for xycs
DROP DATABASE IF EXISTS `xycs`;
CREATE DATABASE IF NOT EXISTS `xycs` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `xycs`;

-- Dumping structure for table xycs.address
DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(50) NOT NULL auto_increment,
  `name` char(50) default '0',
  `phone` char(50) default '0',
  `street` char(50) default '0',
  `detailed` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.address: ~3 rows (approximately)
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`id`, `name`, `phone`, `street`, `detailed`) VALUES
	(1, '左家辉', '16601219604', '北京市', '北京八维研修学院'),
	(7, '左右', '15184294405', '葫芦岛市', '葫芦岛南票区'),
	(12, '刘濮源', '17610051263', '信阳市', '信阳市浉河区');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- Dumping structure for table xycs.bannerlist
DROP TABLE IF EXISTS `bannerlist`;
CREATE TABLE IF NOT EXISTS `bannerlist` (
  `id` int(11) NOT NULL auto_increment,
  `imgUrl` char(254) default '0',
  `imgTxt` char(254) default '0',
  `type` int(20) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.bannerlist: ~5 rows (approximately)
DELETE FROM `bannerlist`;
/*!40000 ALTER TABLE `bannerlist` DISABLE KEYS */;
INSERT INTO `bannerlist` (`id`, `imgUrl`, `imgTxt`, `type`) VALUES
	(1, 'https://img.dmallcdn.com/dshop/201912/209483cf-a7f6-417b-8edd-c476779ecd4a_750H', '12月', 1),
	(2, 'https://img.dmallcdn.com/dshop/201912/73cb7684-ea70-4fa2-af95-bc028b2e3efd_750H', '12月', 1),
	(3, 'https://img.dmallcdn.com/dshop/201912/e8e09968-865f-4ddf-884b-b144c14f64b8_750H', '12月', 1),
	(4, 'https://img.dmallcdn.com/dshop/201912/73cb7684-ea70-4fa2-af95-bc028b2e3efd_750H', '12月', 0),
	(5, 'https://img.dmallcdn.com/dshop/201912/bb6625e3-861b-4848-bb31-df44d72568d1_750H', '12月', 0);
/*!40000 ALTER TABLE `bannerlist` ENABLE KEYS */;

-- Dumping structure for table xycs.navlist
DROP TABLE IF EXISTS `navlist`;
CREATE TABLE IF NOT EXISTS `navlist` (
  `id` int(11) NOT NULL auto_increment,
  `iconUrl` char(254) default '0',
  `iconTxt` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.navlist: ~10 rows (approximately)
DELETE FROM `navlist`;
/*!40000 ALTER TABLE `navlist` DISABLE KEYS */;
INSERT INTO `navlist` (`id`, `iconUrl`, `iconTxt`) VALUES
	(1, 'https://img.dmallcdn.com/dshop/201912/dfb02a2e-d56d-4b79-9e7a-b9a50f02bad6_240x240H', '蔬菜每日鲜'),
	(2, 'https://img.dmallcdn.com/dshop/201912/2334054d-cc4d-4965-878c-8ed23be6dec1_240x240H', '肉蛋禽'),
	(3, 'https://img.dmallcdn.com/dshop/201912/71d5fada-c186-4ad0-b042-4153ac33c6a5_240x240H', '母婴天地'),
	(4, 'https://img.dmallcdn.com/dshop/201912/00fda625-d636-4c72-bee1-35b4e7f98ddf_240x240H', '进店必买'),
	(5, 'https://img.dmallcdn.com/dshop/201912/5d7940d2-e097-4265-821c-787f921737a4_240x240H', '美通卡'),
	(6, 'https://img.dmallcdn.com/dshop/201912/b990b70a-eb4b-4cc4-980f-05df986cf88d_240x240H', '早晚市'),
	(7, 'https://img.dmallcdn.com/dshop/201912/4a3b4663-5c04-49dd-8293-31bdda13d72a_240x240H', '品牌汇'),
	(8, 'https://img.dmallcdn.com/dshop/201912/d2c96133-f730-4894-947e-e69dbebe6f51_240x240H', '领卷中心'),
	(9, 'https://img.dmallcdn.com/dshop/201912/5de62d54-97c0-49f2-89cf-09c3c0d4abe5_240x240H', '支付优惠'),
	(10, 'https://img.dmallcdn.com/dshop/201912/a76686ba-7146-4828-b64d-f1c1f1a0f4d8_240x240H', '直采品牌');
/*!40000 ALTER TABLE `navlist` ENABLE KEYS */;

-- Dumping structure for table xycs.shopcar
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE IF NOT EXISTS `shopcar` (
  `id` int(11) NOT NULL auto_increment,
  `title` char(50) default '0',
  `img` char(254) default '0',
  `money` char(50) default '0',
  `count` int(50) default '0',
  `types` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.shopcar: ~0 rows (approximately)
DELETE FROM `shopcar`;
/*!40000 ALTER TABLE `shopcar` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopcar` ENABLE KEYS */;

-- Dumping structure for table xycs.shoplist
DROP TABLE IF EXISTS `shoplist`;
CREATE TABLE IF NOT EXISTS `shoplist` (
  `id` int(11) NOT NULL auto_increment,
  `img` char(254) default '0',
  `title` char(50) default '0',
  `leiji` char(50) default '0',
  `pin` char(50) default '0',
  `money` char(50) default '0',
  `type` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.shoplist: ~15 rows (approximately)
DELETE FROM `shoplist`;
/*!40000 ALTER TABLE `shoplist` DISABLE KEYS */;
INSERT INTO `shoplist` (`id`, `img`, `title`, `leiji`, `pin`, `money`, `type`) VALUES
	(1, 'https://img.dmallcdn.com/20181218/dde86e64-9b78-43a1-8a01-e7f942332974_360x360H', '车厘子XL【精】350g', '1.5万', '16', '39.9', '2'),
	(2, '//img.dmallcdn.com//20191119/6fc5572f-a16a-43fc-91c7-9f72bfac3fd3_240x240H', '  都乐进口香蕉 约950g', '1.3万', '12', '5.96', '2'),
	(3, '//img.dmallcdn.com//20191210/fc8746b7-8a32-4202-8d94-decd3e931eca_240x240H', '  冰糖麒麟瓜1粒【精】 约2.5kg', '1万', '15', '29.9', '2'),
	(4, '//img.dmallcdn.com//20180611/9dd36899-82d6-42c6-84f4-fdcb996eb902_240x240H', '  猕猴桃 约950g', '1.4万', '20', '5.96', '2'),
	(5, '//img.dmallcdn.com//20190930/c14c3997-ce73-4bf6-bc9a-fc181991b4b9_240x240H', '  玉田大白菜 约3kg', '5千', '21', '2.58', '3'),
	(6, '//img.dmallcdn.com//20180315/79a8ea11-bc5c-4fc0-b559-9c7f4ceb0802_240x240H', '  四季豆【盒】 约300g', '6千', '10', '8.90', '3'),
	(7, '//img.dmallcdn.com//20190820/338b0b00-fa15-4458-ba7c-78544a21e0e4_240x240H', '  倭瓜【精】约1kg', '7千', '6', '4.39', '3'),
	(8, '//img.dmallcdn.com//20190603/18d41aef-956e-4ef2-a8ba-a27856654701_800x800H', '三只松鼠云果园芒果干 116g', '1.2万', '50', '10.5', '5'),
	(9, '//img.dmallcdn.com//20180913/331ce9bd-b43a-41fd-8b9d-ca09ef43e6c8_800x800H', '卫龙亲嘴豆皮 60g', '2.5万', '99', '3.90', '5'),
	(10, '//img.dmallcdn.com//20190430/aedc6686-643e-45bb-ad20-77c66b2b299e_800x800H', '米多奇烤香馍片 50g', '2.0万', '55', '1.50', '5'),
	(11, '//img.dmallcdn.com//20191029/c4703b0d-480d-485e-9445-68fa76bdb399_800x800H', '波力海苔30束 原味 30g', '1.3万', '15', '25.90', '5'),
	(12, '//img.dmallcdn.com//20190513/23c9970b-d1d9-41d9-b55b-6b10e816bd6d_240x240H', '  冷冻牛腱子 约1.2kg', '3千', '5', '98.80', '4'),
	(13, '//img.dmallcdn.com//20190513/0be4db82-dbe4-4c2a-b525-33ab7f65dba0_240x240H', '  冷冻鸡翅中 约450g', '5千', '10', '21.98', '4'),
	(14, '//img.dmallcdn.com//20191008/f86f5897-12c8-4cdd-a9e2-c9389cc9bb05_240x240H', '  正大安全美味鲜鸡蛋25枚 1.37kg', '8千', '15', '23.90', '4'),
	(15, '//img.dmallcdn.com//20181107/6ab24992-a78e-4fdd-9bb2-74056274ef81_240x240H', '  冷冻鸭边腿 约500g', '9千', '13', '7.90', '4');
/*!40000 ALTER TABLE `shoplist` ENABLE KEYS */;

-- Dumping structure for table xycs.shopright
DROP TABLE IF EXISTS `shopright`;
CREATE TABLE IF NOT EXISTS `shopright` (
  `id` int(11) NOT NULL auto_increment,
  `img` char(254) default '0',
  `title` char(50) default '0',
  `leiji` char(50) default '0',
  `pin` char(50) default '0',
  `money` char(50) default '0',
  `type` char(50) default '0',
  `typeid` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.shopright: ~23 rows (approximately)
DELETE FROM `shopright`;
/*!40000 ALTER TABLE `shopright` DISABLE KEYS */;
INSERT INTO `shopright` (`id`, `img`, `title`, `leiji`, `pin`, `money`, `type`, `typeid`) VALUES
	(1, '//m.360buyimg.com/babel/s220x220_jfs/t1/69198/14/13339/105020/5da922b0Edfbe9a4e/7ccf6f75d16f83cb.jpg!q70.dpg', '好吃的车厘子', '1.5万', '18', '69.90', '1', '11'),
	(2, '//m.360buyimg.com/babel/s220x220_jfs/t19198/258/1472320955/67363/36cff595/5acc2a01N54fa281e.jpg!q70.dpg', '好吃的奇异果', '1.5万', '15', '39.90', '1', '11'),
	(3, '//m.360buyimg.com/babel/s220x220_jfs/t1/102528/28/6879/149608/5df71cbdE1fa013c9/c3ae28d3ab22eafd.jpg!q70.dpg', '好吃的鲜橙', '1.8万', '16', '19.80', '1', '11'),
	(4, '//m.360buyimg.com/babel/s220x220_jfs/t1/49623/10/9556/359313/5d6ceb5cE215179b6/7fb9f24346d9257c.jpg!q70.dpg', '好吃的冰糖梨', '1.3万', '15', '49.90', '1', '11'),
	(5, '//m.360buyimg.com/babel/s220x220_jfs/t1/98919/12/3836/250401/5de488caE38b9830b/828c609510b8e4ed.jpg!q70.dpg', '好吃的草莓', '2.1万', '20', '36.90', '1', '11'),
	(6, '//m.360buyimg.com/babel/s260x260_jfs/t1/52557/9/8422/291168/5d5e5100Eadf7d454/d27a71b887472df3.jpg!q70.dpg', '好吃的石榴', '1.2万', '16', '15.90', '1', '11'),
	(7, '//m.360buyimg.com/babel/s260x260_jfs/t11515/331/8628660/98681/3a80633e/59e5a5a0Ne24fdc1c.jpg!q70.dpg', '好吃的香蕉', '1.5万', '14', '19.90', '1', '11'),
	(8, '//m.360buyimg.com/babel/s220x220_jfs/t7387/226/4302038728/165944/d312fb84/59ff14e6Na81ba077.jpg!q70.dpg', '好吃的黑玉米', '1.8万', '13', '27.90', '1', '12'),
	(9, '//m.360buyimg.com/babel/s220x220_jfs/t11710/251/1213506537/319426/6bad9170/59fede4eN5f2ff750.jpg!q70.dpg', '好吃的莲藕', '1.5万', '12', '12.90', '1', '12'),
	(10, '//m.360buyimg.com/babel/s220x220_jfs/t1/107142/16/1953/59851/5e01d18eE44a12fec/4ee6a00c4edb97c8.jpg!q70.dpg', '好吃的烤红薯', '1.4万', '10', '22.90', '1', '12'),
	(11, '//m.360buyimg.com/babel/s220x220_jfs/t1/7251/25/7476/67785/5be3a3acE9c7a7e27/c37262f6a6bb0260.jpg!q70.dpg', '好吃的白豆腐', '1.3万', '9', '3.50', '1', '12'),
	(12, '//m.360buyimg.com/babel/s220x220_jfs/t1/33066/30/5068/284486/5cb94be6E21a12d5c/96b269b58ba3f0da.jpg!q70.dpg', '好吃的烤山药', '1.2万', '11', '67.90', '1', '12'),
	(13, '//m.360buyimg.com/babel/s220x220_jfs/t3526/310/2014375487/500788/99978c40/583d31d0N4b3c83e0.jpg!q70.dpg', '好吃的西蓝花', '1.5万', '15', '9.90', '1', '12'),
	(14, '//img11.360buyimg.com/n2/s240x240_jfs/t23056/125/656504938/428005/26cab124/5b3c583fN63f51905.jpg!q70.jpg', '好吃的盐水鸭', '1.2万', '12', '49.90', '2', '21'),
	(15, '//img13.360buyimg.com/n2/s240x240_jfs/t1/91464/19/471/248945/5dad85b7E56529c3f/e9f5ba006ed66aa7.jpg!q70.jpg', '好吃的樱桃谷鸭', '1.1万', '10', '68.90', '2', '21'),
	(16, '//img14.360buyimg.com/n2/s240x240_jfs/t20785/145/224675507/341341/8ec8aecc/5b04f520N573e5607.jpg!q70.jpg', '好吃的鸡蛋', '1.2万', '15', '47.90', '2', '21'),
	(17, '//img11.360buyimg.com/n2/s240x240_jfs/t1/66000/5/13493/128814/5daff006E250526cc/8ccb1cf82a99c0fb.jpg!q70.jpg', '好吃的鸭蛋', '1.8万', '12', '59.90', '2', '21'),
	(18, '//img12.360buyimg.com/n2/s240x240_jfs/t7681/148/2154394350/231974/f976acac/59a8ce05N33517d24.jpg!q70.jpg', '好吃的新西兰羊肉', '1.5万', '16', '38.80', '2', '22'),
	(19, '//img10.360buyimg.com/n2/s240x240_jfs/t1/57846/12/15596/239522/5dc8c15bEd8203302/e87aa7e87222e5fd.jpg!q70.jpg', '好吃的羊腿', '1.4万', '12', '69.90', '2', '22'),
	(20, '//img10.360buyimg.com/n2/s240x240_jfs/t1/88585/19/7495/395296/5dfc3883E16b3ae6d/521b6060ebf5154c.jpg!q70.jpg', '好吃的加拿大冰虾', '1.2万', '15', '56.00', '2', '22'),
	(21, '//img13.360buyimg.com/n2/s240x240_jfs/t27622/341/2698834386/104497/6cf4f8b9/5cd8c231N25fc0f50.jpg!q70.jpg', '好吃的厄瓜多尔虾', '1.0万', '13', '118.00', '2', '22'),
	(22, '//img10.360buyimg.com/n2/s240x240_jfs/t1/15847/20/6904/128262/5c6525cbE3a1230b7/37365952f2287771.jpg!q70.jpg', '好吃的美国扇贝', '1.1万', '15', '259.00', '2', '22'),
	(23, '//img14.360buyimg.com/n2/s240x240_jfs/t5140/56/2182311234/93228/11e74a74/59198a7fNef61de36.jpg!q70.jpg', '好吃的蒜蓉扇贝', '1.2万', '14', '46.90', '2', '22');
/*!40000 ALTER TABLE `shopright` ENABLE KEYS */;

-- Dumping structure for table xycs.tab
DROP TABLE IF EXISTS `tab`;
CREATE TABLE IF NOT EXISTS `tab` (
  `id` int(20) NOT NULL auto_increment,
  `names` char(50) default NULL,
  `type` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.tab: ~4 rows (approximately)
DELETE FROM `tab`;
/*!40000 ALTER TABLE `tab` DISABLE KEYS */;
INSERT INTO `tab` (`id`, `names`, `type`) VALUES
	(3, '水果', '2'),
	(4, '蔬菜', '3'),
	(5, '肉蛋', '4'),
	(6, '零食', '5');
/*!40000 ALTER TABLE `tab` ENABLE KEYS */;

-- Dumping structure for table xycs.tableft
DROP TABLE IF EXISTS `tableft`;
CREATE TABLE IF NOT EXISTS `tableft` (
  `id` int(10) NOT NULL auto_increment,
  `name` char(50) default NULL,
  `type` char(50) default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.tableft: ~5 rows (approximately)
DELETE FROM `tableft`;
/*!40000 ALTER TABLE `tableft` DISABLE KEYS */;
INSERT INTO `tableft` (`id`, `name`, `type`) VALUES
	(1, '蔬菜水果', '0'),
	(2, '肉蛋水产', '0'),
	(3, '牛奶冰品', '0'),
	(4, '休闲小食', '0'),
	(5, '酒水饮料', '0');
/*!40000 ALTER TABLE `tableft` ENABLE KEYS */;

-- Dumping structure for table xycs.tabtop
DROP TABLE IF EXISTS `tabtop`;
CREATE TABLE IF NOT EXISTS `tabtop` (
  `id` int(20) NOT NULL auto_increment,
  `name` char(50) NOT NULL default '0',
  `type` char(50) NOT NULL default '0',
  `typeid` char(50) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.tabtop: ~6 rows (approximately)
DELETE FROM `tabtop`;
/*!40000 ALTER TABLE `tabtop` DISABLE KEYS */;
INSERT INTO `tabtop` (`id`, `name`, `type`, `typeid`) VALUES
	(1, '全部', '1', '10'),
	(2, '新鲜水果', '1', '11'),
	(3, '蔬菜豆菇', '1', '12'),
	(5, '全部', '2', '20'),
	(6, '肉/蛋/禽', '2', '21'),
	(7, '海鲜水产', '2', '22');
/*!40000 ALTER TABLE `tabtop` ENABLE KEYS */;

-- Dumping structure for table xycs.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL auto_increment,
  `username` char(50) default NULL COMMENT '用户名',
  `password` char(50) default NULL COMMENT '密码',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table xycs.user: ~5 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`) VALUES
	(1, '左家辉', '123321'),
	(2, '左家辉1', '123321'),
	(3, '左家辉123', '123321'),
	(4, '左右', '123321'),
	(5, '小左', '123321');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
