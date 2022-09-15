/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.4.20-MariaDB : Database - argentum_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`argentum_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `argentum_db`;

/*Table structure for table `carrito` */

DROP TABLE IF EXISTS `carrito`;

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `totalCantidad` int(11) NOT NULL,
  `totalPrecio` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` tinyint(1) DEFAULT 0,
  `idUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `carrito` */

/*Table structure for table `imagenes_productos` */

DROP TABLE IF EXISTS `imagenes_productos`;

CREATE TABLE `imagenes_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idProductos` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idProductos` (`idProductos`),
  CONSTRAINT `imagenes_productos_ibfk_1` FOREIGN KEY (`idProductos`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `imagenes_productos` */

insert  into `imagenes_productos`(`id`,`imagen`,`idProductos`,`createdAt`,`updatedAt`,`deletedAt`) values (1,'test-product-note.jpg',1,NULL,NULL,NULL),(2,'ps5.jpg',2,NULL,NULL,NULL),(3,'test-product-tv.jpg',3,NULL,NULL,NULL),(4,'test-s22.jpg',4,NULL,NULL,NULL),(5,'impresora-epson-multifuncion.jpg',5,NULL,NULL,NULL),(6,'notebook-lenovo-ideapad5.jpg',6,NULL,NULL,NULL),(7,'tv-smart-tv-70-pulgadas.jpg',7,NULL,NULL,NULL),(8,'heladera-samsung-nofrost.png',8,NULL,NULL,NULL),(9,'notebook-dell-jh94xwh.jpg',9,NULL,NULL,NULL),(10,'cafetera-express-de-longhi.jpg',10,NULL,NULL,NULL),(11,'tablet-samsung-a8.jpg',11,NULL,NULL,NULL),(12,'notebook-pcbox-celeron.jpg',12,NULL,NULL,NULL),(13,'lavarropas-automatico-dream.jpg',13,NULL,NULL,NULL),(14,'tablet-lenovo-8505fs.jpg',14,NULL,NULL,NULL),(15,'cocinaesco.jpg',15,NULL,NULL,NULL),(16,'PRO7630PHI_2.jpg',16,NULL,NULL,NULL),(17,'5dc494aa5972bebeaba40b61993a.jpg',17,NULL,NULL,NULL),(18,'ba04c4eb2de1900b0bccd68ac7ec.jpg',18,NULL,NULL,NULL),(19,'D_NQ_NP_888981-MLA49040495612_022022-O.jpg',19,NULL,NULL,NULL),(20,'impresora.jpg',20,NULL,NULL,NULL),(21,'plancha_atma.jpg',21,NULL,NULL,NULL),(22,'afeitadora.jpg',22,NULL,NULL,NULL),(23,'samsungcelular.jpg',23,NULL,NULL,NULL),(24,'71goLxuYp9L._AC_SL1500_.jpg',24,NULL,NULL,NULL),(32,'product-1662341523547.jpg',1,'2022-09-05','2022-09-05',NULL),(33,'product-1662341528355.jpg',1,'2022-09-05','2022-09-05',NULL),(34,'product-1662341532080.jpg',1,'2022-09-05','2022-09-05',NULL),(35,'product-1662341693658.jpg',2,'2022-09-05','2022-09-05',NULL),(36,'product-1662341719416.jpg',3,'2022-09-05','2022-09-05',NULL),(37,'product-1662341724546.jpg',3,'2022-09-05','2022-09-05',NULL),(38,'product-1662341740266.jpg',4,'2022-09-05','2022-09-05',NULL),(39,'product-1662341744841.jpg',4,'2022-09-05','2022-09-05',NULL),(40,'product-1662341748090.jpg',4,'2022-09-05','2022-09-05',NULL),(41,'product-1662341768919.jpg',5,'2022-09-05','2022-09-05',NULL),(42,'product-1662341772560.jpg',5,'2022-09-05','2022-09-05',NULL),(43,'product-1662341776272.jpg',5,'2022-09-05','2022-09-05',NULL),(44,'product-1662341792691.jpg',6,'2022-09-05','2022-09-05',NULL),(45,'product-1662341798918.jpg',6,'2022-09-05','2022-09-05',NULL),(46,'product-1662341802763.jpg',6,'2022-09-05','2022-09-05',NULL),(48,'product-1662341811145.jpg',7,'2022-09-05','2022-09-05',NULL),(50,'product-1662341831742.jpg',8,'2022-09-05','2022-09-05',NULL),(51,'product-1662341834872.jpg',8,'2022-09-05','2022-09-05',NULL),(52,'product-1662341846648.jpg',9,'2022-09-05','2022-09-05',NULL),(53,'product-1662341852488.jpg',10,'2022-09-05','2022-09-05',NULL),(54,'product-1662341856237.jpg',10,'2022-09-05','2022-09-05',NULL),(55,'product-1662341860472.jpg',10,'2022-09-05','2022-09-05',NULL),(56,'product-1662341868202.jpg',11,'2022-09-05','2022-09-05',NULL),(57,'product-1662341875957.png',12,'2022-09-05','2022-09-05',NULL),(58,'product-1662341882596.jpg',13,'2022-09-05','2022-09-05',NULL),(59,'product-1662341888571.jpg',14,'2022-09-05','2022-09-05',NULL),(60,'product-1662341893044.png',14,'2022-09-05','2022-09-05',NULL),(61,'product-1662341902969.jpg',15,'2022-09-05','2022-09-05',NULL),(62,'product-1662341907724.jpg',15,'2022-09-05','2022-09-05',NULL),(63,'product-1662341912210.jpg',15,'2022-09-05','2022-09-05',NULL),(64,'product-1662341921791.png',16,'2022-09-05','2022-09-05',NULL),(65,'product-1662341926753.webp',16,'2022-09-05','2022-09-05',NULL),(66,'product-1662341931091.jpg',16,'2022-09-05','2022-09-05',NULL),(67,'product-1662341940979.jpg',17,'2022-09-05','2022-09-05',NULL),(68,'product-1662341945219.jpg',17,'2022-09-05','2022-09-05',NULL),(69,'product-1662341949528.jpg',17,'2022-09-05','2022-09-05',NULL),(70,'product-1662341956521.png',18,'2022-09-05','2022-09-05',NULL),(71,'product-1662341968003.jpg',20,'2022-09-05','2022-09-05',NULL),(72,'product-1662341972102.jpg',20,'2022-09-05','2022-09-05',NULL),(73,'product-1662341976329.jpg',20,'2022-09-05','2022-09-05',NULL),(74,'product-1662341986029.png',21,'2022-09-05','2022-09-05',NULL),(75,'product-1662341990455.jpg',21,'2022-09-05','2022-09-05',NULL),(76,'product-1662342001215.jpg',22,'2022-09-05','2022-09-05',NULL),(77,'product-1662342006455.png',22,'2022-09-05','2022-09-05',NULL),(78,'product-1662342012365.jpg',22,'2022-09-05','2022-09-05',NULL),(79,'product-1662342023122.jpg',23,'2022-09-05','2022-09-05',NULL),(80,'product-1662342027422.jpg',23,'2022-09-05','2022-09-05',NULL),(81,'product-1662342035280.jpeg',24,'2022-09-05','2022-09-05',NULL),(83,'product-1662342044237.jpeg',24,'2022-09-05','2022-09-05',NULL),(84,'product-1662676440616.png',2,'2022-09-08','2022-09-08',NULL),(85,'product-1662676460612.jpg',2,'2022-09-08','2022-09-08',NULL),(86,'product-1662676496474.jpg',3,'2022-09-08','2022-09-08',NULL),(87,'product-1662676519356.jpg',7,'2022-09-08','2022-09-08',NULL),(88,'product-1662676539111.jpg',7,'2022-09-08','2022-09-08',NULL),(89,'product-1662676563041.png',8,'2022-09-08','2022-09-08',NULL),(90,'product-1662676570193.jpg',9,'2022-09-08','2022-09-08',NULL),(91,'product-1662676578597.jpg',9,'2022-09-08','2022-09-08',NULL),(92,'product-1662676632597.jpeg',11,'2022-09-08','2022-09-08',NULL),(93,'product-1662676652984.jpg',11,'2022-09-08','2022-09-08',NULL),(94,'product-1662676699122.jpg',12,'2022-09-08','2022-09-08',NULL),(95,'product-1662676714892.jpg',12,'2022-09-08','2022-09-08',NULL),(96,'product-1662676776443.jpg',13,'2022-09-08','2022-09-08',NULL),(97,'product-1662676784288.jpg',13,'2022-09-08','2022-09-08',NULL),(98,'product-1662676828898.jpg',14,'2022-09-08','2022-09-08',NULL),(99,'product-1662676869156.jpg',18,'2022-09-08','2022-09-08',NULL),(100,'product-1662676884720.jpg',18,'2022-09-08','2022-09-08',NULL),(101,'product-1662676956204.jpg',19,'2022-09-08','2022-09-08',NULL),(102,'product-1662676971425.jpg',19,'2022-09-08','2022-09-08',NULL),(103,'product-1662676980052.jpg',19,'2022-09-08','2022-09-08',NULL),(104,'product-1662677054274.jpg',21,'2022-09-08','2022-09-08',NULL),(105,'product-1662677089288.jpg',23,'2022-09-08','2022-09-08',NULL),(106,'product-1662677138906.jpeg',24,'2022-09-08','2022-09-08',NULL),(107,'product-1662739806597.jpg',25,'2022-09-09','2022-09-09',NULL),(108,'product-1662739831808.jpg',25,'2022-09-09','2022-09-09',NULL),(109,'product-1662739840630.jpg',25,'2022-09-09','2022-09-09',NULL),(110,'product-1662739848187.jpg',25,'2022-09-09','2022-09-09',NULL),(111,'product-1662740029478.jpg',26,'2022-09-09','2022-09-09',NULL),(112,'product-1662740038046.png',26,'2022-09-09','2022-09-09',NULL),(113,'product-1662740043801.jpg',26,'2022-09-09','2022-09-09',NULL),(114,'product-1662740047934.png',26,'2022-09-09','2022-09-09',NULL),(115,'product-1662785516385.jpg',27,'2022-09-10','2022-09-10',NULL),(116,'product-1662785523438.png',27,'2022-09-10','2022-09-10',NULL),(117,'product-1662785529017.jpg',27,'2022-09-10','2022-09-10',NULL),(118,'product-1662785533715.jpg',27,'2022-09-10','2022-09-10',NULL),(119,'product-1662785747034.jpg',28,'2022-09-10','2022-09-10',NULL),(120,'product-1662785755983.jpg',28,'2022-09-10','2022-09-10',NULL),(122,'product-1662785815392.jpg',28,'2022-09-10','2022-09-10',NULL),(123,'product-1662786300544.jpg',29,'2022-09-10','2022-09-10',NULL),(124,'product-1662786306713.png',29,'2022-09-10','2022-09-10',NULL),(125,'product-1662786311435.png',29,'2022-09-10','2022-09-10',NULL),(126,'product-1662786547277.jpg',30,'2022-09-10','2022-09-10',NULL),(127,'product-1662786554650.jpg',30,'2022-09-10','2022-09-10',NULL),(128,'product-1662786560050.jpg',30,'2022-09-10','2022-09-10',NULL),(129,'product-1662786564629.jpg',30,'2022-09-10','2022-09-10',NULL),(130,'product-1662787144500.jpg',31,'2022-09-10','2022-09-10',NULL),(131,'product-1662787150049.jpg',31,'2022-09-10','2022-09-10',NULL),(132,'product-1662787374826.jpg',32,'2022-09-10','2022-09-10',NULL),(133,'product-1662787384421.jpg',32,'2022-09-10','2022-09-10',NULL),(134,'product-1662787389641.jpg',32,'2022-09-10','2022-09-10',NULL),(135,'product-1662787394437.jpg',32,'2022-09-10','2022-09-10',NULL),(136,'product-1663204052471.jpg',33,'2022-09-15','2022-09-15',NULL),(137,'product-1663204076326.jpg',33,'2022-09-15','2022-09-15',NULL),(138,'product-1663204090708.jpg',33,'2022-09-15','2022-09-15',NULL),(139,'product-1663204121470.jpg',33,'2022-09-15','2022-09-15',NULL),(140,'product-1663204143136.jpg',34,'2022-09-15','2022-09-15',NULL),(141,'product-1663204152015.jpg',34,'2022-09-15','2022-09-15',NULL),(142,'product-1663204163086.jpg',34,'2022-09-15','2022-09-15',NULL),(143,'product-1663204200370.jpg',34,'2022-09-15','2022-09-15',NULL),(144,'product-1663204230672.jpg',35,'2022-09-15','2022-09-15',NULL),(145,'product-1663204239615.jpg',35,'2022-09-15','2022-09-15',NULL),(146,'product-1663204263614.png',35,'2022-09-15','2022-09-15',NULL),(147,'product-1663204286335.jpg',35,'2022-09-15','2022-09-15',NULL);

/*Table structure for table `producto_carrito` */

DROP TABLE IF EXISTS `producto_carrito`;

CREATE TABLE `producto_carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` date DEFAULT NULL,
  `idCarrito` int(11) DEFAULT NULL,
  `idProductos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCarrito` (`idCarrito`),
  KEY `idProductos` (`idProductos`),
  CONSTRAINT `producto_carrito_ibfk_1` FOREIGN KEY (`idCarrito`) REFERENCES `carrito` (`id`),
  CONSTRAINT `producto_carrito_ibfk_2` FOREIGN KEY (`idProductos`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `producto_carrito` */

/*Table structure for table `producto_categorias` */

DROP TABLE IF EXISTS `producto_categorias`;

CREATE TABLE `producto_categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `producto_categorias` */

insert  into `producto_categorias`(`id`,`nombre`,`descripcion`,`imagen`) values (1,'Telefonía móvil','Celulares y accesorios','celular-a52.jpg'),(2,'Computación','Computadoras, notebooks, periféricos y accesorios.','notebook-dell-jh94xwh.jpg'),(3,'Electrónica, audio y video','Dispositivos smart para el hogar, equipos de musica, SmartTv.','smart-tv-32.jpg'),(4,'Electrodomésticos','Lavadoras, secadoras, lavavajillas, hornos, microondas, neveras, congeladores y refrigeración en general, campanas extractoras, pequeños electrodomesticos, etc.','cafetera-express-de-longhi.jpg'),(5,'Consolas y videojuegos','Dispositivos electrónicos para el entretenimiento.','ps5.jpg'),(6,'Belleza y cuidado personal','Todo lo relacionado al cuidado de la belleza, cosmética y cuidado personal.','afeitadora.jpg');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `seccion` text COLLATE utf8_spanish_ci NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` int(11) DEFAULT NULL,
  `idProductoCategorias` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idProductoCategorias` (`idProductoCategorias`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idProductoCategorias`) REFERENCES `producto_categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `productos` */

insert  into `productos`(`id`,`nombre`,`precio`,`seccion`,`descuento`,`descripcion`,`cantidad`,`createdAt`,`updatedAt`,`deletedAt`,`idProductoCategorias`) values (1,'Notebook Lenovo de 14 HD',70000,'destacado',0,'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,',2,NULL,'2022-09-05',NULL,2),(2,'Playstation 5',64000,'destacado',0,'videoconsola portátil de la multinacional de origen japonés, Sony Computer Entertainment, para videojuegos y multimedia.',1,NULL,'2022-09-08',NULL,5),(3,'Smart TV PHILIPS 43 pulgadas',78000,'destacado',0,'Formato de pantalla 16:09. Frecuencia de barrido 60 Hz. Potencia RMS 16. Resolucion 1920 x 1080p. Wi-Fi 802.11n, 2x2, banda unica.',4,NULL,'2022-09-08',NULL,3),(4,'Celular Samsung S22',58000,'destacado',0,'El Galaxy S22 presenta un diseño ergonómico, elegante y delgado.',7,NULL,'2022-09-05',NULL,1),(5,'Impresora Epson multifunción',19990,'destacado',0,'La impresora Epson Ecotank es compacta y ligera, diseñada para ocupar poco espacio.',4,NULL,'2022-09-05',NULL,2),(6,'Notebook Lenovo IDEAPAD 5',114000,'destacado',0,'La notebook Lenovo IdeaPad 5 se diseñó poniendo especial atención en los detalles, dándole un estilo moderno con una estructura ligera para que puedas llevarla.',22,NULL,'2022-09-05',NULL,2),(7,'Smart TV Phillips 70',196370,'destacado',0,'Podés reproducir en tu TV el contenido (fotos, música y videos) almacenado en dispositivos externos como smartphones, tablets o pendrives conectándolos a través de sus puertos USB.',12,NULL,'2022-09-08',NULL,3),(8,'Heladera Samsung no frost',169999,'destacado',0,'Solo Twin Cooling Plus™ crea un entorno favorable para preservar los alimentos frescos en la heladera con un 70% de humedad, comparada con el 30% de un las heladeras convencionales.',7,NULL,'2022-09-08',NULL,4),(9,'Notebook Dell JH94XWH',86999,'destacado',0,'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades.',9,NULL,'2022-09-08',NULL,2),(10,'Cafetera EXPRESS DE LONGHI',118000,'oferta',15,'De\'Longhi con una trayectoria de más de 100 años es un referente en el mercado mundial en la fabricación de cafeteras automáticas y de espresso.',14,NULL,'2022-09-10',NULL,4),(11,'Tablet Samsung A8',61750,'destacado',0,'Tablet de 10.5 TFT WUXGA (1920 x 1200). Procesador Octa Core (CPU speed 2 GHz)',66,NULL,'2022-09-10',NULL,2),(12,'Notebook PCBOX PCB',48000,'oferta',25,'Notebook - Cloubook. Pantalla 14 FHD (1920x1080 Px)',10,NULL,'2022-09-08',NULL,2),(13,'Lavarropas Dream Concept',45760,'oferta',30,'Panel electronico. CDA (control digital de agitacion)',8,NULL,'2022-09-08',NULL,4),(14,'Tablet Lenovo 8505',23475,'oferta',25,'La portabilidad de una gran tablet para el entretenimiento y la comodidad',11,NULL,'2022-09-08',NULL,2),(15,'Cocina Escorial Candor S2',34000,'oferta',10,'La cocina Escorial está totalmente enlozada en polvo electroestático y cuenta con puerta de horno con visor',5,NULL,'2022-09-05',NULL,4),(16,'Procesadora Philips 600W 1,3Lts',12000,'oferta',12,'Su motor tiene una potencia de 600 watts, dos niveles de velocidad y un pulsador para un mayor control de los procesos.',15,NULL,'2022-09-05',NULL,4),(17,'Mixer Atma 600w 500 ml LM8527AP',12000,'oferta',80,'Moderno diseño en color blanco con el que vas a poder licuar, mezclar y emulsionar los ingredientes que quieras.',4,NULL,'2022-09-05',NULL,4),(18,'Calefactor Eléctrico Tivoli TPC-2007BN',13500,'oferta',60,'Cuenta con una potencia máxima de 2000 watts, y 2 niveles de potencia (1200W - 2000W)',8,NULL,'2022-09-08',NULL,4),(19,'Ventilador 3 en 1 Tivoli VPO-313',12199,'oferta',10,'El ventilador Tivoli VPO-313 es 3 en 1, es decir, podrás utilizarlo como ventilador de pie, de piso o de pared.',4,NULL,'2022-09-08',NULL,4),(20,'Impresora Multifunción HP Deskjet 2775',15000,'oferta',5,'Con la impresora multifunción HP Deskjet vas a poder imprimir, escanear y copiar, documentos y fotos en forma rápida con colores vibrantes y textos nítidos.',12,NULL,'2022-09-05',NULL,2),(21,'Planchita de Pelo GA.MA Elegance Bella Tourmaline',6500,'oferta',30,'La planchita de pelo GA.MA Elegance Bella Tourmaline cuenta con un diseño ultra plano, mango de fácil agarre y traba para mantener cerrada',14,NULL,'2022-09-08',NULL,6),(22,'Afeitadora Philips S1121/41',5100,'oferta',20,'Este cabezal es lavable, lo que garantiza una limpieza profunda de las cuchillas; por otro lado, su mango de goma antideslizante facilita el agarre y la precisión de la afeitadora. afeitadora Philips',8,NULL,'2022-09-05',NULL,6),(23,'Celular Samsung Galaxy S21 FE 5G 128 GB Blanco',105000,'oferta',1,'El Samsung s21 FE con 5G llegó a Frávega, y al mejor precio. Conocé el último modelo de Samsung en Argentina y sus novedosas características',2,NULL,'2022-09-08',NULL,1),(24,'Mini Proyector Portátil Led Hd Videobeamer Home Theater Wifi',18500,'oferta',15,'Brillo de la imagen: 40 lm Tamaño de la imagen: 40 - 120 - Con Wi-Fi: Sí Conexiones de entrada: HDMI,USB Fuentes de luz: 1000:1 Es mini: Sí Descripción Acerca de este producto',4,NULL,'2022-09-08',NULL,3),(25,'iPhone 13 Pro 128GB',610000,'destacado',0,'iPhone 13 Pro Color: Sierra Blue Memoria interna: 128 GB Memoria RAM: 4 GB Dual SIM: No Compañía telefónica: Liberado Sistema operativo: iOS 15 Tamaño de la pantalla: 6.1\" Resolución de la cámara: 12 MP Red: 5G Con pantalla táctil: Si Cámara digital: Si Capacidad de tarjeta de memoria: 128 GB',NULL,'2022-09-09','2022-09-09',NULL,1),(26,'Celular Motorola Moto G52 128G',49800,'destacado',0,'Su potente procesador Octa-Core Qualcomm Snapdragon y la memoria RAM de 6GB brindan un desempeño increíble. Obtendrás más potencia para jugar, stremear y usar las funciones avanzadas de cámara, además de un funcionamiento más eficiente que consume menos batería.',NULL,'2022-09-09','2022-09-10',NULL,1),(27,'Samsung Galaxy A13 128GB Negro',60590,'destacado',0,'El Samsung Galaxy A13 posee un diseño elegante, atractivo y moderno. Cuenta con pantalla Infinity-V de 6,6 pulgadas, con la que podrás ampliar tu visión y mirar todo lo que te estabas perdiendo. Además, por su tecnología TFT con resolución FullHD+ (1080 x 2408), tus contenidos se verán más nítidos, definidos y deslumbrantes.',NULL,'2022-09-10','2022-09-10',NULL,1),(28,'Parlante Bluetooth Sony Mhc-V7',214000,'destacado',0,'Parlante Bluetooth Sony Mhc-V73 Equipo de Musica Dvd Hdmi Características principales: Lleva la diversión de la fiesta a un público más amplio con sonido de fiesta omnidireccional, mejora el ambiente con las intermitentes luces de fiesta omnidireccionales y de parlante, y diviértete con la lista de reproducción de la fiesta y la clasificación de karaoke gracias a la aplicación Fiestable.',NULL,'2022-09-10','2022-09-10',NULL,3),(29,'Smart TV 50\" 4K UHD TCL ',89700,'destacado',0,'El Smart TV TCL L50P725-F de 50 pulgadas tiene una resolución 4K Ultra HD (3840 x 2160 píxeles) que es cuatro veces superior a la de una TV Full HD. El nuevo Google TV te ofrece mucho más entretenimiento.',NULL,'2022-09-10','2022-09-10',NULL,3),(30,'Secador de Pelo Remington',5850,'oferta',10,'El secador Remington D12A tiene un diseño ergonómico que brinda comodidad a la hora de manipularlo. Posee un gancho para que puedas colgarlo y tenerlo siempre a mano.Por otro lado, su filtro de aire es removible para facilitar su limpieza prolongando así la vida útil del motor.',NULL,'2022-09-10','2022-09-10',NULL,6),(31,'Tensiometro Scian Ld-752',7200,'oferta',35,'Memoria: recuerda las últimas 90 mediciones, lo cual permite al usuario encontrar previas mediciones con facilidad y monitorear cambios en la presión arterial. Colocación: fácil y cómoda colocación, asegurando lecturas rápidas y precisas. Indicador de arritmias. Pantalla digital LCD Apagado automático Indicador de batería baja Contenido del Empaque: 1 Monitor de presión arterial de muñeca 1 Manual de instrucciones',NULL,'2022-09-10','2022-09-10',NULL,6),(32,'Irrigador Bucal Gadnic 100psi',12500,'oferta',40,'¡ Llevá tu limpieza dental al máximo con el nuevo irrigador bucal GADNIC ! Potente, portátil y RECARGABLE. El mismo cuenta con 3 modos de operación para una mejor experiencia de blanqueo (Alta, media y baja), entregando una presión de agua de 30 a 100 psi y una frecuencia de agua de hasta 1800 chorros / minuto.',NULL,'2022-09-10','2022-09-10',NULL,6),(33,'Family Game ',20112,'destacado',12,'La Consola Famosa de los 90´ de 8 Bits RetroIncluye: Cable USB de Alimentación (Se podrá conectar a transformador de celular o directo a a TV), 220v, 2 joystickManual, Cable Audio/Video (rca), Compatible con Tv´s Nuevas como Led y Smart como tv viejas.',NULL,'2022-09-09','2022-09-15',NULL,5),(34,'Playstation 4',211247,'destacado',2,'Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB.Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.',NULL,'2022-09-09','2022-09-15',NULL,5),(35,'Playstation Portatil PSP',54376,'oferta',8,'La PlayStation Portable (PSP) es una videoconsola portátil de la multinacional de origen japonés, y la cuarta consola de Sony en ser diseñada por Ken Kutaragi, PSP servía para videojuegos, conectarse a internet y reproducir y ver multimedia.',NULL,'2022-09-09','2022-09-15',NULL,5);

/*Table structure for table `usuario_categorias` */

DROP TABLE IF EXISTS `usuario_categorias`;

CREATE TABLE `usuario_categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `acceso` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `usuario_categorias` */

insert  into `usuario_categorias`(`id`,`nombre`,`acceso`) values (1,'Invitado',1),(2,'Suscriptor',1),(3,'Administrador',0);

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `domicilio` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT 'user-default.jpg',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `deletedAt` tinyint(1) DEFAULT 0,
  `idUsuarioCategorias` int(11) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `idUsuarioCategorias` (`idUsuarioCategorias`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idUsuarioCategorias`) REFERENCES `usuario_categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombre`,`apellido`,`email`,`domicilio`,`ciudad`,`password`,`imagen`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioCategorias`) values (1,'Nico','Quartero','nicoquartero@gmail.com','Laprida 2054','Rosario','$2a$10$PNxKe0qETnIOVk4.J6bUTO4oY4l5z1wcZIQzKO920JD2S44Mm2feO','user-1658188615419.jpg','0000-00-00','0000-00-00',0,3),(2,'Pablo','Yanzon','yanzon@gmail.com','Tucuman 3823','Rosario','$2a$10$cIgqnfXk./2/CzcTcgWi7eWjx90wmgEUVniOBQC/klwRKUdBmtfNC','user07.jpg','0000-00-00','2022-09-07',0,2),(3,'Enrique','Lema','lema@gmail.com','Entre Rios 2233','Las Rosas','$2a$10$977LVHQfdtBU42kopVJI0.vGtpX.L0AvojjKrafN3Up8b07r9ZHkC','user-default.jpg','0000-00-00','0000-00-00',0,1),(4,'Michelle ','Michelle','michelle@gmail.com','La Via 2244','Roldan','$2a$10$LXXdvT.u0ff068evwh2MGecI9G92kDdetssI0fjHD0CxOZINlR46u','user-1658188944371.jpg','0000-00-00','0000-00-00',0,3),(5,'Juan','Acosta','Juan1@gmail.com','la paz 1234','Rufino','$2a$10$qnMkxjirnA4FKGds3mZuz.cI/M4Ie3rWXKsEMT03To51dSPmw2bh.','user-1658264341627.jpg','0000-00-00','0000-00-00',0,1),(6,'Josesito','Loma','josesito@gmail.com','La paz 1222','Funes','$2a$10$0SYAliBetyU.Pr7RgkMGH.EMbG4I9SMfrF0qESNhv1uPIEDvRDWaG','user-default.jpg','0000-00-00','0000-00-00',0,1),(7,'Julieta','Mortis','Julieta55@gmail.com','Los cardos 22','Rosario','$2a$10$UxoRiAZRrWQHL6T.b8nP5Oy1RiZ0pXOcecJNfia0LyDNGhb0IBoF.','user-1658264469890.jpg','0000-00-00','0000-00-00',0,1),(8,'Maria','Callejon','maria1@gmail.com','Tucuman 1122','Funes','$2a$10$4OmOD4xReisuglyS3o5Hq.psUINAE4er9M12BcvguAWEZqXBVgJgq','user-1658264502363.jpg','0000-00-00','0000-00-00',0,1),(9,'Marta','Lora','marta66@hotmail.com','San Martin 120','Constitucion','$2a$10$fkVnCZ2Siji1o4wGNX2bv.INLfK6KR7P9YDybQ19My8EhgE2toEKm','user-1658264554104.jpg','0000-00-00','0000-00-00',0,1),(10,'Emnrique','Sosa','enrlema33@gmail.com','San Juan 234','Capital','$2a$10$SVXh3Oz6SqmpU6JAH8zu7eUkM/llovsxgkjSwVC6L684/6Wdvc166','user-1658264622781.jpg','0000-00-00','0000-00-00',0,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
