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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `carrito` */

/*Table structure for table `ofertas` */

DROP TABLE IF EXISTS `ofertas`;

CREATE TABLE `ofertas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `tipo_oferta` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idProductos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `ofertas` */

/*Table structure for table `producto_carrito` */

DROP TABLE IF EXISTS `producto_carrito`;

CREATE TABLE `producto_carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` date DEFAULT NULL,
  `idCarrito` int(11) DEFAULT NULL,
  `idProductos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `seccion` text COLLATE utf8_spanish_ci NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `imagen` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` int(11) DEFAULT NULL,
  `idProductoCategorias` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `productos` */

insert  into `productos`(`id`,`nombre`,`precio`,`seccion`,`descuento`,`descripcion`,`imagen`,`cantidad`,`createdAt`,`updatedAt`,`deletedAt`,`idProductoCategorias`) values (1,'Notebook Lenovo de 14 HD',70000,'destacado',0,'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,','test-product-note.jpg',2,NULL,NULL,NULL,2),(2,'Playstation 5',64000,'destacado',0,'videoconsola portátil de la multinacional de origen japonés, Sony Computer Entertainment, para videojuegos y multimedia.','ps5.jpg',1,NULL,NULL,NULL,5),(3,'Smart TV PHILIPS 43 pulgadas',78000,'destacado',0,'Formato de pantalla 16:09. Frecuencia de barrido 60 Hz. Potencia RMS 16. Resolucion 1920 x 1080p. Wi-Fi 802.11n, 2x2, banda unica.','test-product-tv.jpg',4,NULL,NULL,NULL,3),(4,'Celular Samsung S22',58000,'destacado',0,'El Galaxy S22 presenta un diseño ergonómico, elegante y delgado.','test-s22.jpg',7,NULL,NULL,NULL,1),(5,'Impresora Epson multifunción',19990,'destacado',0,'La impresora Epson Ecotank es compacta y ligera, diseñada para ocupar poco espacio.','impresora-epson-multifuncion.jpg',4,NULL,NULL,NULL,2),(6,'Notebook Lenovo IDEAPAD 5',114000,'destacado',0,'La notebook Lenovo IdeaPad 5 se diseñó poniendo especial atención en los detalles, dándole un estilo moderno con una estructura ligera para que puedas llevarla.','notebook-lenovo-ideapad5.jpg',22,NULL,NULL,NULL,2),(7,'Smart TV Phillips 70',196370,'destacado',0,'Podés reproducir en tu TV el contenido (fotos, música y videos) almacenado en dispositivos externos como smartphones, tablets o pendrives conectándolos a través de sus puertos USB.','tv-smart-tv-70-pulgadas.jpg',12,NULL,NULL,NULL,3),(8,'Heladera Samsung no frost',169999,'destacado',0,'Solo Twin Cooling Plus™ crea un entorno favorable para preservar los alimentos frescos en la heladera con un 70% de humedad, comparada con el 30% de un las heladeras convencionales.','heladera-samsung-nofrost.png',7,NULL,NULL,NULL,4),(9,'Notebook Dell JH94XWH',86999,'destacado',0,'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades.','notebook-dell-jh94xwh.jpg',9,NULL,NULL,NULL,2),(10,'Cafetera EXPRESS DE LONGHI',118000,'destacado',0,'De\'Longhi con una trayectoria de más de 100 años es un referente en el mercado mundial en la fabricación de cafeteras automáticas y de espresso.','cafetera-express-de-longhi.jpg',14,NULL,NULL,NULL,4),(11,'Tablet Samsung A8',61750,'oferta',30,'Tablet de 10.5 TFT WUXGA (1920 x 1200). Procesador Octa Core (CPU speed 2 GHz)','tablet-samsung-a8.jpg',66,NULL,NULL,NULL,2),(12,'Notebook PCBOX PCB',48000,'oferta',25,'Notebook - Cloubook. Pantalla 14 FHD (1920x1080 Px)','notebook-pcbox-celeron.jpg',10,NULL,NULL,NULL,2),(13,'Lavarropas Dream Concept',45760,'oferta',30,'Panel electronico. CDA (control digital de agitacion)','lavarropas-automatico-dream.jpg',8,NULL,NULL,NULL,4),(14,'Tablet Lenovo 8505',23475,'oferta',25,'La portabilidad de una gran tablet para el entretenimiento y la comodidad','tablet-lenovo-8505fs.jpg',11,NULL,NULL,NULL,2),(15,'Cocina Escorial Candor S2',34000,'oferta',10,'La cocina Escorial está totalmente enlozada en polvo electroestático y cuenta con puerta de horno con visor','cocinaesco.jpg',5,NULL,NULL,NULL,4),(16,'Procesadora Philips 600W 1,3Lts',12000,'oferta',12,'Su motor tiene una potencia de 600 watts, dos niveles de velocidad y un pulsador para un mayor control de los procesos.','PRO7630PHI_2.jpg',15,NULL,NULL,NULL,4),(17,'Mixer Atma 600w 500 ml LM8527AP',12000,'oferta',80,'Moderno diseño en color blanco con el que vas a poder licuar, mezclar y emulsionar los ingredientes que quieras.','5dc494aa5972bebeaba40b61993a.jpg',4,NULL,NULL,NULL,1),(18,'Calefactor Eléctrico Tivoli TPC-2007BN',13500,'oferta',60,'Cuenta con una potencia máxima de 2000 watts, y 2 niveles de potencia (1200W - 2000W)','ba04c4eb2de1900b0bccd68ac7ec.jpg',8,NULL,NULL,NULL,4),(19,'Ventilador 3 en 1 Tivoli VPO-313',12199,'oferta',10,'El ventilador Tivoli VPO-313 es 3 en 1, es decir, podrás utilizarlo como ventilador de pie, de piso o de pared.','D_NQ_NP_888981-MLA49040495612_022022-O.jpg',4,NULL,NULL,NULL,4),(20,'Impresora Multifunción HP Deskjet 2775',15000,'oferta',5,'Con la impresora multifunción HP Deskjet vas a poder imprimir, escanear y copiar, documentos y fotos en forma rápida con colores vibrantes y textos nítidos.','impresora.jpg',12,NULL,NULL,NULL,2),(21,'Planchita de Pelo GA.MA Elegance Bella Tourmaline',6500,'oferta',30,'La planchita de pelo GA.MA Elegance Bella Tourmaline cuenta con un diseño ultra plano, mango de fácil agarre y traba para mantener cerrada','plancha_atma.jpg',14,NULL,NULL,NULL,6),(22,'Afeitadora Philips S1121/41',5100,'oferta',20,'Este cabezal es lavable, lo que garantiza una limpieza profunda de las cuchillas; por otro lado, su mango de goma antideslizante facilita el agarre y la precisión de la afeitadora. afeitadora Philips','afeitadora.jpg',8,NULL,NULL,NULL,6),(23,'Celular Samsung Galaxy S21 FE 5G 128 GB Blanco',105000,'oferta',1,'El Samsung s21 FE con 5G llegó a Frávega, y al mejor precio. Conocé el último modelo de Samsung en Argentina y sus novedosas características','samsungcelular.jpg',2,NULL,NULL,NULL,1),(24,'Mini Proyector Portátil Led Hd Videobeamer Home Theater Wifi',18500,'oferta',15,'Brillo de la imagen: 40 lm Tamaño de la imagen: 40 - 120 - Con Wi-Fi: Sí Conexiones de entrada: HDMI,USB Fuentes de luz: 1000:1 Es mini: Sí Descripción Acerca de este producto','71goLxuYp9L._AC_SL1500_.jpg',4,NULL,NULL,NULL,1);

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
  `imagen` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` date NOT NULL,
  `UpdateAt` date NOT NULL,
  `deleteAt` tinyint(1) DEFAULT 0,
  `idUsuarioCategorias` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuarioCategorias` (`idUsuarioCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombre`,`apellido`,`email`,`domicilio`,`ciudad`,`password`,`imagen`,`createdAt`,`UpdateAt`,`deleteAt`,`idUsuarioCategorias`) values (1,'Nico','Quartero','nicoquartero@gmail.com','Laprida 2054','Rosario','$2a$10$PNxKe0qETnIOVk4.J6bUTO4oY4l5z1wcZIQzKO920JD2S44Mm2feO','user-1658188615419.jpg','0000-00-00','0000-00-00',0,NULL),(2,'Pablo','Yanzon','yanzon@gmail.com','Tucuman 3823','Rosario','$2a$10$cIgqnfXk./2/CzcTcgWi7eWjx90wmgEUVniOBQC/klwRKUdBmtfNC','user07.jpg','0000-00-00','0000-00-00',0,NULL),(3,'Enrique','Lema','lema@gmail.com','Entre Rios 2233','Las Rosas','$2a$10$977LVHQfdtBU42kopVJI0.vGtpX.L0AvojjKrafN3Up8b07r9ZHkC','user-default.jpg','0000-00-00','0000-00-00',0,NULL),(4,'Michelle ','Michelle','michelle@gmail.com','La Via 2244','Roldan','$2a$10$LXXdvT.u0ff068evwh2MGecI9G92kDdetssI0fjHD0CxOZINlR46u','user-1658188944371.jpg','0000-00-00','0000-00-00',0,NULL),(5,'Juan','Acosta','Juan1@gmail.com','la paz 1234','Rufino','$2a$10$qnMkxjirnA4FKGds3mZuz.cI/M4Ie3rWXKsEMT03To51dSPmw2bh.','user-1658264341627.jpg','0000-00-00','0000-00-00',0,NULL),(6,'Josesito','Loma','josesito@gmail.com','La paz 1222','Funes','$2a$10$0SYAliBetyU.Pr7RgkMGH.EMbG4I9SMfrF0qESNhv1uPIEDvRDWaG','user-default.jpg','0000-00-00','0000-00-00',0,NULL),(7,'Julieta','Mortis','Julieta55@gmail.com','Los cardos 22','Rosario','$2a$10$UxoRiAZRrWQHL6T.b8nP5Oy1RiZ0pXOcecJNfia0LyDNGhb0IBoF.','user-1658264469890.jpg','0000-00-00','0000-00-00',0,NULL),(8,'Maria','Callejon','maria1@gmail.com','Tucuman 1122','Funes','$2a$10$4OmOD4xReisuglyS3o5Hq.psUINAE4er9M12BcvguAWEZqXBVgJgq','user-1658264502363.jpg','0000-00-00','0000-00-00',0,NULL),(9,'Marta','Lora','marta66@hotmail.com','San Martin 120','Constitucion','$2a$10$fkVnCZ2Siji1o4wGNX2bv.INLfK6KR7P9YDybQ19My8EhgE2toEKm','user-1658264554104.jpg','0000-00-00','0000-00-00',0,NULL),(10,'Emnrique','Sosa','enrlema33@gmail.com','San Juan 234','Capital','$2a$10$SVXh3Oz6SqmpU6JAH8zu7eUkM/llovsxgkjSwVC6L684/6Wdvc166','user-1658264622781.jpg','0000-00-00','0000-00-00',0,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
