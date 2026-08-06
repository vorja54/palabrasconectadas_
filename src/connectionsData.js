// Each daily puzzle has 4 categories, each with 4 words and a difficulty color.
// Difficulty order: yellow (easiest) < green < blue < purple (trickiest)

const PUZZLES = [
{id:1,categories:[{name:"PLANETAS",words:["MERCURIO","VENUS","TIERRA","MARTE"],color:"yellow"},{name:"FRUTAS",words:["MANZANA","NARANJA","UVA","PERA"],color:"green"},{name:"INSTRUMENTOS",words:["PIANO","GUITARRA","FLAUTA","BATERIA"],color:"blue"},{name:"CAPITALES",words:["PARIS","ROMA","BERLIN","LONDRES"],color:"purple"}]},{id:2,categories:[{name:"ANIMALES MARINOS",words:["DELFIN","TIBURON","BALLENA","PULPO"],color:"yellow"},{name:"MEDIOS TRANSPORTE",words:["COCHE","TREN","AVION","BARCO"],color:"green"},{name:"EMOCIONES",words:["ALEGRIA","TRISTEZA","ENFADO","MIEDO"],color:"blue"},{name:"HERRAMIENTAS",words:["MARTILLO","DESTORNILLADOR","SIERRA","LLAVE"],color:"purple"}]},{id:3,categories:[{name:"DEPORTES",words:["FUTBOL","TENIS","BASQUET","NATACION"],color:"yellow"},{name:"PARTES DEL CUERPO",words:["CABEZA","BRAZOS","PIERNAS","MANOS"],color:"green"},{name:"COLORES",words:["ROJO","AZUL","VERDE","AMARILLO"],color:"blue"},{name:"MUEBLES",words:["MESA","SILLA","SILLON","ESTANTE"],color:"purple"}]},{id:4,categories:[{name:"PROFESIONES",words:["MEDICO","BOMBERO","MAESTRO","POLICIA"],color:"yellow"},{name:"ELECTRODOMESTICOS",words:["NEVERA","LAVADORA","HORNO","MICROONDAS"],color:"green"},{name:"ESTACIONES AÑO",words:["PRIMAVERA","VERANO","OTOÑO","INVIERNO"],color:"blue"},{name:"METALES",words:["ORO","PLATA","BRONCE","COBRE"],color:"purple"}]},{id:5,categories:[{name:"PAISES",words:["MEXICO","ESPAÑA","ITALIA","JAPON"],color:"yellow"},{name:"BEBIDAS",words:["AGUA","CAFE","TE","ZUMO"],color:"green"},{name:"CLIMA",words:["SOLEADO","NUBLADO","LLUVIOSO","VENTOSO"],color:"blue"},{name:"PRENDAS VESTIR",words:["CAMISA","PANTALON","ZAPATOS","ABRIGO"],color:"purple"}]},{id:6,categories:[{name:"FLORES",words:["ROSA","TULIPAN","GIRASOL","MARGARITA"],color:"yellow"},{name:"DULCES",words:["CHOCOLATE","CARAMELO","GALLETA","PASTEL"],color:"green"},{name:"TIENDAS",words:["FARMACIA","PANADERIA","LIBRERIA","CARNICERIA"],color:"blue"},{name:"MONEDAS DIGITALES",words:["BITCOIN","ETHEREUM","CARDANO","SOLANA"],color:"purple"}]},{id:7,categories:[{name:"OFICIOS ANTIGUOS",words:["HERRERO","CARPINTERO","SASTRE","ZAPATERO"],color:"yellow"},{name:"UTILES ESCOLARES",words:["LAPIZ","CUADERNO","MOCHILA","REGLA"],color:"green"},{name:"ACCIONES COTIDIANAS",words:["CAMINAR","COMER","DORMIR","LEER"],color:"blue"},{name:"PALABRAS CON Ñ",words:["ESPAÑA","AÑO","MUÑECA","PIÑA"],color:"purple"}]},{id:8,categories:[{name:"MONTAÑAS FAMOSAS",words:["EVEREST","ALPES","ANDES","HIMALAYA"],color:"yellow"},{name:"DESASTRES NATURALES",words:["TERREMOTO","TSUNAMI","VOLCAN","HURACAN"],color:"green"},{name:"PECES",words:["SALMON","ATUN","MERLUZA","BACALAO"],color:"blue"},{name:"PRONOMBRES",words:["YO","TU","EL","ELLA"],color:"purple"}]},{id:9,categories:[{name:"REDES SOCIALES",words:["FACEBOOK","INSTAGRAM","TIKTOK","TWITTER"],color:"yellow"},{name:"VERBOS COCINA",words:["HERVIR","FREIR","HORNEAR","ASAR"],color:"green"},{name:"ENFERMEDADES",words:["GRIPE","RESFRIO","VARICELA","ALERGIA"],color:"blue"},{name:"FIGURAS GEOMETRICAS",words:["CIRCULO","CUADRADO","TRIANGULO","RECTANGULO"],color:"purple"}]},{id:10,categories:[{name:"DIAS DE LA SEMANA",words:["LUNES","MARTES","MIERCOLES","JUEVES"],color:"yellow"},{name:"PELICULAS INFANTILES",words:["TOY STORY","FROZEN","EL REY LEON","BUSCANDO A NEMO"],color:"green"},{name:"OCEANOS",words:["PACIFICO","ATLANTICO","INDICO","ARTICO"],color:"blue"},{name:"SIGNOS ZODIACALES",words:["ARIES","TAURO","GEMINIS","CANCER"],color:"purple"}]},{id:11,categories:[{name:"IDIOMAS",words:["INGLES","FRANCES","ALEMAN","CHINO"],color:"yellow"},{name:"FUENTES ENERGIA",words:["SOLAR","EOLICA","HIDRAULICA","NUCLEAR"],color:"green"},{name:"TECNOLOGIA",words:["ORDENADOR","CELULAR","TABLET","RELOJ"],color:"blue"},{name:"HUEVOS COCINA",words:["REVUELTOS","ESTRELLADOS","COCIDOS","POCHÉ"],color:"purple"}]},{id:12,categories:[{name:"RIOS FAMOSOS",words:["AMAZONAS","NILO","MISISIPI","DANUBIO"],color:"yellow"},{name:"PELUCHES ANIMALES",words:["OSO","CONEJO","PERRO","GATO"],color:"green"},{name:"SABORES HELADO",words:["VAINILLA","CHOCOLATE","FRESA","MENTA"],color:"blue"},{name:"ANIMALES VOLADORES",words:["AGUILA","MOSCA","MURCIELAGO","MARIPOSA"],color:"purple"}]},{id:13,categories:[{name:"LENGUAJES PROGRAMACION",words:["PYTHON","JAVASCRIPT","RUST","GO"],color:"yellow"},{name:"JUGUETES",words:["PELOTA","MUÑECA","YO-YO","ROMPECABEZAS"],color:"green"},{name:"BAILES",words:["SALSA","TANGO","BACHATA","MERENGUE"],color:"blue"},{name:"PUNTOS CARDINALES",words:["NORTE","SUR","ESTE","OESTE"],color:"purple"}]},{id:14,categories:[{name:"HOGAR",words:["COCINA","SALA","DORMITORIO","BAÑO"],color:"yellow"},{name:"OFICINA",words:["ESCRITORIO","SILLA","ORDENADOR","ARCHIVERO"],color:"green"},{name:"PLAYA",words:["ARENA","OLA","SOL","CONCHA"],color:"blue"},{name:"PARQUE",words:["ARBOL","BANCA","COLUMPIO","CESPED"],color:"purple"}]},{id:15,categories:[{name:"CORTOS ANIMADOS",words:["TOM y JERRY","PATO DONALD","MICKEY","PICAPIEDRAS"],color:"yellow"},{name:"ENLACES QUIMICOS",words:["COVALENTE","IONICO","METALICO","HIDROGENO"],color:"green"},{name:"AVES",words:["AGUILA","HALCÓN","BUHO","BUITRE"],color:"blue"},{name:"NOMBRES DE VARON",words:["JUAN","PEDRO","CARLOS","JOSE"],color:"purple"}]},{id:16,categories:[{name:"CIUDADES MEXICANAS",words:["CANCUN","GUADALAJARA","MONTERREY","PUEBLA"],color:"yellow"},{name:"GENEROS MUSICALES",words:["ROCK","POP","JAZZ","REGGAETON"],color:"green"},{name:"PLATOS TIPICOS",words:["TACOS","PAELLA","SUSHI","PASTA"],color:"blue"},{name:"GEMAS PRECIOSAS",words:["DIAMANTE","ESMERALDA","RUBI","ZAFIRO"],color:"purple"}]},{id:17,categories:[{name:"HOBBIES",words:["JARDINERIA","COCINA","PINTURA","FOTOGRAFIA"],color:"yellow"},{name:"ELEMENTOS QUIMICOS",words:["OXIGENO","HIDROGENO","CARBONO","NITROGENO"],color:"green"},{name:"RAZAS DE PERROS",words:["LABRADOR","PASTOR","BULLDOG","CHIHUAHUA"],color:"blue"},{name:"VERBOS IRREGULARES",words:["TENER","SER","ESTAR","HABER"],color:"purple"}]},{id:18,categories:[{name:"FORMAS ARTE",words:["PINTURA","ESCULTURA","MUSICA","LITERATURA"],color:"yellow"},{name:"REDES COMPUTADORAS",words:["INTERNET","INTRANET","EXTRANET","LAN"],color:"green"},{name:"ARBOLES FRUTALES",words:["MANZANO","NARANJO","LIMONERO","PERAL"],color:"blue"},{name:"NOTAS MUSICALES",words:["DO","RE","MI","FA"],color:"purple"}]},{id:19,categories:[{name:"CONSTELACIONES",words:["ORION","OSA MAYOR","OSA MENOR","CASSIOPEA"],color:"yellow"},{name:"RITMOS LATINOS",words:["SALSA","MERENGUE","CUMBIA","BACHATA"],color:"green"},{name:"MEDICAMENTOS",words:["IBUPROFENO","PARACETAMOL","ASPIRINA","ANTIBIOTICO"],color:"blue"},{name:"FECHAS IMPORTANTES",words:["ENERO","JULIO","OCTUBRE","DICIEMBRE"],color:"purple"}]},{id:20,categories:[{name:"TECNOLOGIA ANTIGUA",words:["FAX","DISQUETE","VHS","TELEFONO FIJO"],color:"yellow"},{name:"CIENCIAS",words:["BIOLOGIA","QUIMICA","FISICA","ASTRONOMIA"],color:"green"},{name:"TERMINAN EN N",words:["AVION","BALON","JAMON","LIMON"],color:"blue"},{name:"JUEGOS DE MESA",words:["AJEDREZ","DOMINO","DAMAS","SERPIENTES"],color:"purple"}]},{id:21,categories:[{name:"CENTROS COMERCIALES",words:["TIENDA","CINE","RESTAURANTE","FARMACIA"],color:"yellow"},{name:"VOCABULARIO MARINO",words:["ANCLA","TIMON","VELA","PROA"],color:"green"},{name:"SUPERHEROES",words:["BATMAN","SUPERMAN","SPIDERMAN","WONDER WOMAN"],color:"blue"},{name:"LAS CUATRO ESTACIONES",words:["PRIMAVERA","VERANO","OTOÑO","INVIERNO"],color:"purple"}]},{id:22,categories:[{name:"MAMIFEROS ACUATICOS",words:["BALLENA","DELFIN","NARVAL","FOCA"],color:"yellow"},{name:"FAMILIA",words:["PADRE","MADRE","HIJO","HERMANO"],color:"green"},{name:"ORDENADORES",words:["MONITOR","TECLADO","RATON","CPU"],color:"blue"},{name:"MONEDAS DEL MUNDO",words:["DOLAR","EURO","PESO","LIBRA"],color:"purple"}]},{id:23,categories:[{name:"FESTIVIDADES",words:["NAVIDAD","PASCUA","HALLOWEEN","AÑO NUEVO"],color:"yellow"},{name:"AROMAS COMUNES",words:["LAVANDA","ROSAS","VAINILLA","CAFE"],color:"green"},{name:"DINOSAURIOS",words:["T-REX","TRICERATOPS","ESTEGOSAURIO","PTERODACTILO"],color:"blue"},{name:"CEREALES",words:["TRIGO","ARROZ","AVENA","MAIZ"],color:"purple"}]},{id:24,categories:[{name:"TRANSPORTE PUBLICO",words:["AUTOBUS","METRO","TAXI","TRANVIA"],color:"yellow"},{name:"APARATOS MEDICOS",words:["ESTETOSCOPIO","TERMOMETRO","JERINGA","RAYOS X"],color:"green"},{name:"CANCIONES POPULARES",words:["DESPACITO","GASOLINA","BAILANDO","LA MACARENA"],color:"blue"},{name:"NUMEROS PRIMOS",words:["DOS","TRES","CINCO","SIETE"],color:"purple"}]},{id:25,categories:[{name:"REDES PESCA",words:["AGUA","PEZ","RED","CAÑA"],color:"yellow"},{name:"MOLUSCOS",words:["PULPO","CALAMAR","MEJILLON","ALMEJA"],color:"green"},{name:"MARCAS AUTOS",words:["TOYOTA","FORD","HONDA","BMW"],color:"blue"},{name:"COMPONENTES PC",words:["RAM","SSD","GPU","CPU"],color:"purple"}]},{id:26,categories:[{name:"TRASTORNOS SUEÑO",words:["INSOMNIO","SONAMBULISMO","APNEA","NARCOLEPSIA"],color:"yellow"},{name:"FENOMENOS CLIMA",words:["TORNADO","HURACAN","MONZON","SEQUIA"],color:"green"},{name:"PRINCESAS DISNEY",words:["CENICIENTA","BLANCANIEVES","ARIEL","BELLA"],color:"blue"},{name:"MATERIALES RECICLABLES",words:["VIDRIO","PLASTICO","PAPEL","ALUMINIO"],color:"purple"}]},{id:27,categories:[{name:"PLATAFORMAS STREAMING",words:["NETFLIX","DISNEY+","MAX","PRIME"],color:"yellow"},{name:"HIERBAS AROMATICAS",words:["ALBAHACA","ROMERO","OREGANO","PEREJIL"],color:"green"},{name:"PINTORES FAMOSOS",words:["PICASSO","DA VINCI","VAN GOGH","MONET"],color:"blue"},{name:"PRIMEROS AUXILIOS",words:["VENDA","GASA","ALCOHOL","YODO"],color:"purple"}]},{id:28,categories:[{name:"CONTINENTES",words:["AMERICA","EUROPA","ASIA","AFRICA"],color:"yellow"},{name:"POSTRES",words:["FLAN","HELADO","PASTEL","GELATINA"],color:"green"},{name:"MUSCULOS",words:["BICEPS","TRICEPS","PECTORAL","ABDOMEN"],color:"blue"},{name:"GASES ATMOSFERA",words:["OXIGENO","NITROGENO","ARGON","DIOXIDO"],color:"purple"}]},{id:29,categories:[{name:"ISLAS FAMOSAS",words:["BALI","MADAGASCAR","GROENLANDIA","CURAZAO"],color:"yellow"},{name:"FRUTOS SECOS",words:["ALMENDRA","NUEZ","AVELLANA","MANI"],color:"green"},{name:"SISTEMAS OPERATIVOS",words:["WINDOWS","MACOS","LINUX","ANDROID"],color:"blue"},{name:"OLIMPIADAS DEPORTES",words:["ATLETISMO","NATACION","GIMNASIA","ESGRIMA"],color:"purple"}]},{id:30,categories:[{name:"VEGETALES",words:["ZANAHORIA","BROCOLI","ESPINACA","CEBOLLA"],color:"yellow"},{name:"MODELOS DE NEGOCIO",words:["SaaS","E-COMMERCE","FRANQUICIA","MARKETPLACE"],color:"green"},{name:"TIPOS DE NUBES",words:["CUMULUS","STRATUS","CIRRUS","NIMBUS"],color:"blue"},{name:"PALABRAS ESDRUJULAS",words:["METODO","CAMARA","TELEFONO","MUSICA"],color:"purple"}]},{id:31,categories:[{name:"GRANDES PINTORES",words:["REMBRANDT","VELAZQUEZ","GOYA","DALI"],color:"yellow"},{name:"TECNICAS ESTUDIO",words:["SUBRAYAR","RESUMIR","MAPEAR","REPETIR"],color:"green"},{name:"LINEAS DEFENSA",words:["PRIMERA","SEGUNDA","TERCERA","CUARTA"],color:"blue"},{name:"CORTES CARNE",words:["LOMO","SOLOMILLO","CHULETA","PECHUGA"],color:"purple"}]},{id:32,categories:[{name:"GOBERNANTES",words:["PRESIDENTE","MINISTRO","SENADOR","ALCALDE"],color:"yellow"},{name:"SENTIDOS",words:["VISTA","OIDO","OLFATO","GUSTO"],color:"green"},{name:"TIEMPOS VERBALES",words:["PASADO","PRESENTE","FUTURO","CONDICIONAL"],color:"blue"},{name:"MOBILIARIO",words:[
          "ARMARIO",
          "CARPETA",
          "ESTANTE",
          "COMODA"
        ],color:"purple"}]},{id:33,categories:[{name:"ATLETISMO PRUEBAS",words:["VELOCIDAD","SALTO","LANZAMIENTO","RELEVOS"],color:"yellow"},{name:"MATERIALES OFICINA",words:["GRAPADORA","PERFORADORA","CLIP","POST-IT"],color:"green"},{name:"VOCABULARIO AVION",words:["TRIPULACION","PILOTO","AZAFATA","PASAJERO"],color:"blue"},{name:"PLANETAS GASEOSOS",words:["JUPITER","SATURNO","URANO","NEPTUNO"],color:"purple"}]},{id:34,categories:[{name:"REDES INALAMBRICAS",words:["WIFI","BLUETOOTH","NFC","5G"],color:"yellow"},{name:"ALIMENTOS GRANJA",words:["HUEVO","LECHE","QUESO","MIEL"],color:"green"},{name:"PLATOS MARISCO",words:["CEVICHE","PAELLA","CALDO","COCTEL"],color:"blue"},{name:"SELECCION FUTBOL",words:["BRASIL","ARGENTINA","ALEMANIA","FRANCIA"],color:"purple"}]},{id:35,categories:[{name:"ODONTOLOGIA",words:["CEPILLO","PASTA","HILO","ENJUAGUE"],color:"yellow"},{name:"DISNEY PERSONAJES",words:["MICKEY","MINNIE","DONALD","GOOFY"],color:"green"},{name:"COLORES CALIDOS",words:["ROJO","NARANJA","AMARILLO","ROSADO"],color:"blue"},{name:"RIOS AMERICANOS",words:["BRAVO","COLORADO","AMAZONAS","PARANA"],color:"purple"}]},{id:36,categories:[{name:"CIUDADES ESPAÑOLAS",words:["BARCELONA","MADRID","VALENCIA","SEVILLA"],color:"yellow"},{name:"CUBIERTOS",words:["CUCHILLO","TENEDOR","CUCHARA","SERVILETA"],color:"green"},{name:"EXPLORADORES",words:["COLON","MAGELLANES","COOK","PIZARRO"],color:"blue"},{name:"PALABRAS TERMINAN A",words:["CASA","MESA","SILLA","FLORA"],color:"purple"}]},{id:37,categories:[{name:"PELICULAS FAMOSAS",words:["TITANIC","AVATAR","STAR WARS","HARRY POTTER"],color:"yellow"},{name:"MONUMENTOS",words:["TORRE EIFFEL","ESTATUA LIBERTAD","COLISEO","PIRAMIDES"],color:"green"},{name:"FLORES PRIMAVERA",words:["TULIPAN","MARGARITA","JAZMIN","LILA"],color:"blue"},{name:"GANADORA OSCAR",words:["PELICULA","ACTOR","DIRECTOR","GUION"],color:"purple"}]},{id:38,categories:[{name:"CLUBES FUTBOL",words:["REAL MADRID","BARCELONA","MANCHESTER","JUVENTUS"],color:"yellow"},{name:"TECNICAS ARTE",words:["OLEO","ACUARELA","PASTEL","CARBON"],color:"green"},{name:"BILLETERA CRIPTO",words:["META MASK","TRUST WALLET","EXODUS","LEDGER"],color:"blue"},{name:"EDITORES CODIGO",words:["VS CODE","SUBLIME","INTELLIJ","VIM"],color:"purple"}]},{id:39,categories:[{name:"VOCABULARIO BANCO",words:["CUENTA","AHORRO","PRESTAMO","TARJETA"],color:"yellow"},{name:"FESTIVIDADES MEXICO",words:["DIA MUERTOS","NAVIDAD","SEMANA SANTA","INDEPENDENCIA"],color:"green"},{name:"TIPOS DE QUESO",words:["MOZZARELLA","CHEDDAR","SUIZO","PARMESANO"],color:"blue"},{name:"ALGORITMOS ORDENAR",words:["BURBUJA","INSERCION","SELECCION","RAPIDO"],color:"purple"}]},{id:40,categories:[{name:"PLATAFORMAS VIDEO",words:["YOUTUBE","TIKTOK","INSTAGRAM","FACEBOOK"],color:"yellow"},{name:"SIGNOS DE PUNTUACION",words:["COMA","PUNTO","NUMERAL","ARROBA"],color:"green"},{name:"ANIMALES VENENOSOS",words:["SERPIENTE","ESCORPION","ARAÑA","MEDUSA"],color:"blue"},{name:"PARTES PREGUNTA",words:["QUE","QUIEN","DONDE","CUANDO"],color:"purple"}]},{id:41,categories:[{name:"ANIMALES AFRICA",words:["LEON","ELEFANTE","JIRAFA","CEBRA"],color:"yellow"},{name:"ACCIONES",words:["CORRER","SALTAR","NADAR","VOLAR"],color:"green"},{name:"TEORIA MUSICAL",words:["RITMO","MELODIA","ARMONIA","COMPAS"],color:"blue"},{name:"MARCAS DEPORTIVAS",words:["NIKE","ADIDAS","PUMA","REEBOK"],color:"purple"}]},{id:42,categories:[{name:"PAISES SUDAMERICA",words:["PERU","COLOMBIA","CHILE","ARGENTINA"],color:"yellow"},{name:"UTENSILIOS COCINA",words:["OLLA","SARTEN","CUCHILLO","ESPATULA"],color:"green"},{name:"TIPOS DE VINO",words:["TINTO","BLANCO","ROSADO","ESPUMOSO"],color:"blue"},{name:"SISTEMA SOLAR",words:["SOL","LUNA","ESTRELLA","COMETA"],color:"purple"}]},{id:43,categories:[{name:"MARCAS TECNOLOGIA",words:["GOOGLE","APPLE","MICROSOFT","META"],color:"yellow"},{name:"HIJOS",words:["BEBE","NIÑO","ADOLESCENTE","ADULTO"],color:"green"},{name:"CULTIVOS",words:["MAIZ","TRIGO","SOJA","ARROZ"],color:"blue"},{name:"TERMINOS MEDICINA",words:["DIAGNOSTICO","PRONOSTICO","SINTOMA","TRATAMIENTO"],color:"purple"}]},{id:44,categories:[{name:"REDES SOCIALES CHINAS",words:["TIKTOK","WECHAT","XIAOHONGSHU","DOUYIN"],color:"yellow"},{name:"COSMETICOS",words:["LABIAL","RIMEL","BASE","POLVO"],color:"green"},{name:"ANIMALES POLARES",words:["OSO POLAR","PINGÜINO","FOCA","MOFETA"],color:"blue"},{name:"CIUDADES ANTIGUAS",words:["POMPEYA","BABILONIA","TEBAS","TROYA"],color:"purple"}]},{id:45,categories:[{name:"TIPOS DE CAFE",words:["ESPRESSO","CAPUCHINO","LATTE","AMERICANO"],color:"yellow"},{name:"ESTILOS ARQUITECTURA",words:["GOTICO","BARROCO","MODERNO","CLASICO"],color:"green"},{name:"ANIMALES NOCTURNOS",words:["BUHO","MURCIELAGO","LOBO","LUCIERNAGA"],color:"blue"},{name:"VOCABULARIO NÁUTICO",words:["POPA","PROA","ESTRIBOR","BABOR"],color:"purple"}]},{id:46,categories:[{name:"BOSQUES",words:["AMAZONIA","SELVA","TAIGA","BOSQUE"],color:"yellow"},{name:"VIAJE",words:["MALETA","PASAJE","HOTEL","VUELO"],color:"green"},{name:"FUTBOL TERMINOS",words:["GOL","PENAL","FUERA","CORNEO"],color:"blue"},{name:"PARTES DEL OJO",words:["IRIS","PUPILA","RETINA","CORNEA"],color:"purple"}]},{id:47,categories:[{name:"JUEGOS INFANTILES",words:["CARRERA","ESCONDITE","COMBA","PILLA"],color:"yellow"},{name:"CATEGORIAS GRAMATICALES",words:["SUSTANTIVO","VERBO","ADJETIVO","ADVERBIO"],color:"green"},{name:"MINERALES",words:["CUARZO","FELDESPATO","MICA","CALCITA"],color:"blue"},{name:"PALABRAS HOMOFONAS",words:["VACA","BACA","HOLA","OLA"],color:"purple"}]},{id:48,categories:[{name:"ANIMALES GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"yellow"},{name:"MATERIALES CONSTRUCCION",words:["LADRILLO","CEMENTO","ARENA","MADERA"],color:"green"},{name:"CORRIENTES ARTISTICAS",words:["RENACIMIENTO","ROMANTICISMO","IMPRESIONISMO","CUBISMO"],color:"blue"},{name:"ADJETIVOS NUMERALES",words:["PRIMERO","SEGUNDO","TERCERO","ULTIMO"],color:"purple"}]},{id:49,categories:[{name:"CENTROS COMERCIALES",words:["GALERIA","TIENDA","KIOSCO","MERCADO"],color:"yellow"},{name:"PERSONAS MITICAS",words:["HERCULES","ZEUS","ATENEA","PROMETEO"],color:"green"},{name:"DISNEY PELICULAS",words:["ALADDIN","MULAN","TARZAN","BLANCA"],color:"blue"},{name:"GENEROS LITERARIOS",words:["NOVELA","POESIA","DRAMA","ENSAYO"],color:"purple"}]},{id:50,categories:[{name:"MARAVILLAS MUNDO",words:["CHICHEN ITZA","MACHU PICCHU","COLISEO","TAJ MAHAL"],color:"yellow"},{name:"PARTES CASA",words:["PUERTA","VENTANA","TECHO","SUELO"],color:"green"},{name:"DEPORTES ACUATICOS",words:["SURF","BUCEO","REMO","VELA"],color:"blue"},{name:"HISTORIA ANTIGUA",words:["EGIPTO","GRECIA","ROMA","PERSA"],color:"purple"}]},{id:51,categories:[{name:"DULCES MEXICANOS",words:["CAJETA","CHAMOY","PALETA","GOMITA"],color:"yellow"},{name:"MUEBLES COCINA",words:["ALACENA","MESADA","GAVETA","ENCIMERA"],color:"green"},{name:"LIDERES MUNDO",words:["PRESIDENTE","REY","PRIMER MINISTRO","EMPERADOR"],color:"blue"},{name:"PLACAS TECTONICAS",words:["PACIFICA","AFRICANA","EUROASIATICA","NORTEAMERICANA"],color:"purple"}]},{id:52,categories:[{name:"TECLAS TECLADO",words:["ESPACIO","ENTRAR","BORRAR","MAYUS"],color:"yellow"},{name:"PUERTOS PC",words:["USB","HDMI","ETHERNET","AUDIO"],color:"green"},{name:"ANIMALES EXTINTOS",words:["DODO","TIGRE DIENTE","MAMUT","PEREZOSO"],color:"blue"},{name:"IDIOMAS INDIGENAS",words:["NAHUATL","MAYA","QUECHUA","GUARANI"],color:"purple"}]},{id:53,categories:[{name:"PELICULAS ANIMADAS",words:["SHREK","BUSCANDO A NEMO","TOY STORY","FROZEN"],color:"yellow"},{name:"PLATOS ESPAÑOLES",words:["TORTILLA","GAZPACHO","JAMON","CHURRO"],color:"green"},{name:"PREMIOS MUSICA",words:["GRAMMY","MTV","BILLBOARD","LATIN"],color:"blue"},{name:"FORMAS DE ONDA",words:["SENO","COSENO","CUADRADA","DIENTE"],color:"purple"}]},{id:54,categories:[{name:"TIENDAS ROPA",words:["ZARA","H&M","UNIQLO","MANGO"],color:"yellow"},{name:"ROPA DEPORTIVA",words:["SUDADERA","LEGGINGS","CHAQUE","TOP"],color:"green"},{name:"ECONOMIA",words:["INFLACION","CRECIMIENTO","RECESION","ESTANFLACION"],color:"blue"},{name:"IMPUREZAS AGUA",words:["SAL","ARENA","BARRO","ALGA"],color:"purple"}]},{id:55,categories:[{name:"APPS MENSAJERIA",words:["WHATSAPP","TELEGRAM","SIGNAL","MESSENGER"],color:"yellow"},{name:"PERSONAJES CARICATURAS",words:["BOB","SIMPSON","PATO","POKEMON"],color:"green"},{name:"TIPOS DE NIEVE",words:["POLVO","HUMEDA","COMPACTA","HIELO"],color:"blue"},{name:"CIENCIA FICCION",words:["VIAJE TIEMPO","CLONACION","TELEPATIA","TELETRANSPORTE"],color:"purple"}]},{id:56,categories:[{name:"PESCADOS COMUNES",words:["SALMON","ATUN","MERLUZA","TRUCHA"],color:"yellow"},{name:"MATERIALES PREHISTORIA",words:["PIEDRA","HUESO","MADERA","CUERO"],color:"green"},{name:"PALABRAS ONOMATOPEYAS",words:["GUAU","MIAU","MU","BEE"],color:"blue"},{name:"REFERENCIAS CINE",words:["ACCION","DRAMA","COMEDIA","TERROR"],color:"purple"}]},{id:57,categories:[{name:"PLATAFORMAS MUSICA",words:["SPOTIFY","APPLE MUSIC","YOUTUBE MUSIC","TIDAL"],color:"yellow"},{name:"COSAS DE OFICINA",words:["IMPRESORA","ESCANER","FOTOCOPIADORA","FAX"],color:"green"},{name:"ORGANOS HUMANOS",words:["CORAZON","PULMON","HIGADO","RIÑON"],color:"blue"},{name:"CLASICOS LITERATURA",words:["CIEN AÑOS","DON QUIJOTE","LAZARILLO","CUMBRES"],color:"purple"}]},{id:58,categories:[{name:"JUEGOS MESA MODERNOS",words:["CATAN","UNO","MUNCHKIN","PANDEMIC"],color:"yellow"},{name:"ROPA FORMAL",words:["CORBATA","BLUSA","TACON","TRAJE"],color:"green"},{name:"MARCAS TELEFONOS",words:["IPHONE","SAMSUNG","XIAOMI","HUAWEI"],color:"blue"},{name:"PALABRAS REPETIDAS",words:["COCO","PAPA","NENE","MAMA"],color:"purple"}]},{id:59,categories:[{name:"ISLAS CARIBE",words:["CUBA","PUERTO RICO","REPUBLICA DOMINICANA","JAMAICA"],color:"yellow"},{name:"CUIDADO PERSONAL",words:["JABON","SHAMPOO","PERFUME","CREMA"],color:"green"},{name:"HERIDAS",words:["CORTE","QUEMADURA","MORETON","RASGUNO"],color:"blue"},{name:"ESTILOS DE VIDA",words:["SALUDABLE","SEDENTARIO","ACTIVO","MINIMALISTA"],color:"purple"}]},{id:60,categories:[{name:"COMIDA RAPIDA",words:["HAMBURGUESA","PIZZA","TACO","SANDWICH"],color:"yellow"},{name:"HERRAMIENTAS JARDIN",words:["PALA","RASTRILLO","TIJERAS","MANGUERA"],color:"green"},{name:"CUERPOS CELESTES",words:["ASTEROIDE","METEORITO","COMETA","PLANETA"],color:"blue"},{name:"DEMONIOS",words:["LUCIFER","SATANAS","BELCEBU","MEFISTO"],color:"purple"}]},{id:61,categories:[{name:"PARQUES NACIONALES",words:["YOSEMITE","BANFF","TORRES DEL PAINE","IGUAZU"],color:"yellow"},{name:"VOCABULARIO BANCA",words:["CUENTA","TARJETA","CHEQUE","TRANSFERENCIA"],color:"green"},{name:"CORTES PELO",words:["LARGO","CORTO","MULTICAPA","RAPADO"],color:"blue"},{name:"SABORES UMAMI",words:["SOYA","TOMATE","CHAMPIÑON","QUESO"],color:"purple"}]},{id:62,categories:[{name:"APPS VIAJES",words:["UBER","AIRBNB","BOOKING","TRIPADVISOR"],color:"yellow"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ECLIPSE","AURORA","ESPEJISMO"],color:"green"},{name:"VIDA UNIVERSIDAD",words:["CLASE","EXAMEN","BIBLIOTECA","CAFETERIA"],color:"blue"},{name:"TINTES CABELLO",words:["CASTAÑO","RUBIO","NEGRO","ROJO"],color:"purple"}]},{id:63,categories:[{name:"ANIMALES PATAS",words:["PERRO","GATO","CONEJO","HAMSTER"],color:"yellow"},{name:"GRABACION AUDIO",words:["MICROFONO","AURICULARES","MEZCLADOR","MONITOR"],color:"green"},{name:"LUGARES HISTORICOS",words:["ACROPOLIS","STONEHENGE","PETRA","ANGKOR"],color:"blue"},{name:"CIUDADES FUTURISTAS",words:["DUBAI","SINGAPUR","TOKIO","SEUL"],color:"purple"}]},{id:64,categories:[{name:"REPOSTERIA",words:["HARINA","AZUCAR","HUEVO","MANTEQUILLA"],color:"yellow"},{name:"CICLISMO",words:["BICICLETA","CASCO","CARRETERA","MONTAÑA"],color:"green"},{name:"EXPLORACION ESPACIAL",words:["NASA","COHETE","SATELITE","ESTACION"],color:"blue"},{name:"EMISORAS RADIO",words:["LOS 40","KISS FM","RNE","CADENA SER"],color:"purple"}]},{id:65,categories:[{name:"HERIDAS PRIMEROS AUXILIOS",words:["RASPADURA","QUEMADURA","HEMATOMA","TORCEDURA"],color:"yellow"},{name:"ANIMALES ACORAZADOS",words:["TORTUGA","ARMADILLO","CANGREJO","CARACOL"],color:"green"},{name:"INSTRUMENTOS CUERDA",words:["GUITARRA","VIOLIN","VIOLONCHELO","ARPA"],color:"blue"},{name:"CUALIDADES FISICAS",words:["FUERZA","VELOCIDAD","RESISTENCIA","FLEXIBILIDAD"],color:"purple"}]},{id:66,categories:[{name:"FRUTAS TROPICALES",words:["MANGO","PAPAYA","GUANABANA","RAMBUTAN"],color:"yellow"},{name:"SALUD MENTAL",words:["ESTRES","ANSEDAD","DEPRESION","BIENESTAR"],color:"green"},{name:"FOTOGRAFIA",words:["CAMARA","LENTE","FLASH","TRIPODE"],color:"blue"},{name:"PROTOCOLOS INTERNET",words:["HTTP","FTP","DNS","TCP"],color:"purple"}]},{id:67,categories:[{name:"ANIMALES MARINOS PEQUEÑOS",words:["CAMARON","CANGREJO","LANGOSTA","MEJILLON"],color:"yellow"},{name:"PUERTOS Y CONECTORES",words:["USB-C","THUNDERBOLT","LIGHTNING","JACK"],color:"green"},{name:"COLORES FRIOS",words:["AZUL","VERDE","VIOLETA","TURQUESA"],color:"blue"},{name:"PRESIDENTES MEXICO",words:["OBRADOR","PEÑA","CALDERON","FOX"],color:"purple"}]},{id:68,categories:[{name:"VERBOS MOVIMIENTO",words:["IR","VENIR","LLEGAR","SALIR"],color:"yellow"},{name:"TIPOS TELA",words:["ALGODON","POLIESTER","LINO","SEDA"],color:"green"},{name:"ANIMALES CAMUFLAJE",words:["CAMALEON","PULPO","SEPIA","LEOPARDO"],color:"blue"},{name:"SISTEMAS NUMERICOS",words:["BINARIO","OCTAL","DECIMAL","HEXADECIMAL"],color:"purple"}]},{id:69,categories:[{name:"MARCAS LUPAS GAFAS",words:["RAY-BAN","OAKLEY","PERSOL","POLAROID"],color:"yellow"},{name:"PRACTICAS RELIGIOSAS",words:["ORACION","MEDITACION","AYUNO","PEREGRINACION"],color:"green"},{name:"SERIES NETFLIX",words:["STRANGER THINGS","CASA PAPEL","BRIDGERTON","SQUID GAME"],color:"blue"},{name:"PALABRAS LATINAS",words:["ET CETERA","EXITOS","CURRICULUM","ALUMNI"],color:"purple"}]},{id:70,categories:[{name:"BATERIAS COCINA",words:["OLLA EXPRES","WOK","CAZUELA","PAELLERA"],color:"yellow"},{name:"ESTRATEGIAS NEGOCIO",words:["MARKETING","VENTAS","LOGISTICA","INNOVACION"],color:"green"},{name:"ESTRELLAS FAMOSAS",words:["SIRIO","POLARIS","BETELGEUSE","VEGA"],color:"blue"},{name:"SINDROMES",words:["ESTOCKHOLM","DOWN","ASPERGER","BURNOUT"],color:"purple"}]},{id:71,categories:[{name:"FESTIVIDADES CULTURALES",words:["CARNAVAL","FERIA","PROCESION","ROMERIA"],color:"yellow"},{name:"CIUDADES EUROPA",words:["PRAGA","VIENA","BUDAPEST","LISBOA"],color:"green"},{name:"PERSONAJES HISTORICOS",words:["CORTES","PIZARRO","COLON","MAGELLANES"],color:"blue"},{name:"CONTRASENAS SEGURIDAD",words:["PIN","HUELLA","IRIS","FACIAL"],color:"purple"}]},{id:72,categories:[{name:"PASTAS ITALIANAS",words:["SPAGHETTI","FETTUCCINE","PENNE","LASAGNA"],color:"yellow"},{name:"LENGUAJES CORPORAL",words:["GESTO","POSTURA","MIRADA","SONRISA"],color:"green"},{name:"MARCAS HOTELES",words:["MARRIOTT","HILTON","GARDEN","HYATT"],color:"blue"},{name:"VIAS FERROCARRIL",words:["VIA","TRAVIESA","BALASTO","CARRIL"],color:"purple"}]},{id:73,categories:[{name:"TIPOS PAN",words:["BLANCO","INTEGRAL","CENTENO","MASA MADRE"],color:"yellow"},{name:"ALFABETO GRIEGO",words:["ALFA","BETA","GAMMA","DELTA"],color:"green"},{name:"TAREAS DOMESTICAS",words:["BARRER","FREGAR","PLANCHAR","POLVO"],color:"blue"},{name:"ANIMALES PREHISTORICOS",words:["MEGALODON","MAMUT","DODO","TIGRE DIENTE"],color:"purple"}]},{id:74,categories:[{name:"SITIOS WEB COMPRAS",words:["AMAZON","MERCADO LIBRE","EBAY","SHEIN"],color:"yellow"},{name:"APRENDIZAJE",words:["LEER","ESCRIBIR","ESCUCHAR","OBSERVAR"],color:"green"},{name:"SUPERHORRO PODERES",words:["INVISIBILIDAD","VUELO","TELEPATIA","FUERZA"],color:"blue"},{name:"VOCABULARIO JUDICIAL",words:["JUEZ","FISCAL","ABOGADO","TESTIGO"],color:"purple"}]},{id:75,categories:[{name:"TECNICAS PESCA",words:["CAÑA","RED","ANZUELO","CARNADA"],color:"yellow"},{name:"INVENTOS ANTIGUOS",words:["RUEDA","FUEGO","ARADO","VELA"],color:"green"},{name:"RUTAS MIGRACION",words:["AVES","MARIPOSA","BALLENA","SALMON"],color:"blue"},{name:"TERMINOS MUSICALES",words:["ALEGRO","ANDANTE","PRESTO","LARGO"],color:"purple"}]},{id:76,categories:[{name:"ACCESORIOS MODA",words:["BOLSO","CINTURON","PAÑUELO","GAFAS"],color:"yellow"},{name:"FIGURAS RETORICAS",words:["METAFORA","SIMIL","HIPERBOLE","IRONIA"],color:"green"},{name:"COMPETENCIAS LABORALES",words:["LIDERAZGO","EMPATIA","ADAPTABILIDAD","INICIATIVA"],color:"blue"},{name:"PALABRAS PALINDROMAS",words:["RECONOCER","SOMETEMOS","ANILINA","SALAS"],color:"purple"}]},{id:77,categories:[{name:"NATACION ESTILOS",words:["LIBRE","ESPALDA","PECHO","MARIPOSA"],color:"yellow"},{name:"COCINA MEXICANA",words:["CHILE","ALUBIA","ARROZ","NOPAL"],color:"green"},{name:"HONGOS",words:["CHAMPIÑON","SETAS","TRUFA","PORTOBELLO"],color:"blue"},{name:"PALABRAS ACENTO",words:["TILDE","GRAVE","AGUDA","ESDRUJULA"],color:"purple"}]},{id:78,categories:[{name:"ANIMALES SALTADORES",words:["RANA","CANGURO","GRILLO","PULGA"],color:"yellow"},{name:"COCTELERIA",words:["VASO","HIELO","LIMON","MENTA"],color:"green"},{name:"MAPAS",words:["MAPA","BRUJULA","GPS","CARTEL"],color:"blue"},{name:"PARADAS RESPIRACION",words:["PULMON","BRONQUIO","ALVEOLO","DIAFRAGMA"],color:"purple"}]},{id:79,categories:[{name:"VENDEDORES CALLEJEROS",words:["MERCADO","PUESTO","CARRITO","TIANGUIS"],color:"yellow"},{name:"DISPOSITIVOS ALMACENAMIENTO",words:["USB","DISCO","SD","NUBE"],color:"green"},{name:"ACCIDENTES GEOGRAFICOS",words:["CABO","GOLFO","ESTRECHO","PENINSULA"],color:"blue"},{name:"NUMEROS IRRACIONALES",words:["PI","E","RAIZ","PHI"],color:"purple"}]},{id:80,categories:[{name:"HISTORIA DE MEXICO",words:["AZTECA","MAYA","TOLTECA","OLMECA"],color:"yellow"},{name:"ACCESORIOS ELECTRONICOS",words:["CARGADOR","FUNDA","CABLE","ADAPTADOR"],color:"green"},{name:"CONDIMENTOS",words:["SAL","PIMIENTA","COMINO","PAPRIKA"],color:"blue"},{name:"IDIOMAS OFICIALES",words:["INGLES","ESPAÑOL","FRANCES","CHINO"],color:"purple"}]},{id:81,categories:[{name:"ESPECIES MADERA",words:["ROBLE","CAOBA","NOGAL","CEDRO"],color:"yellow"},{name:"ROPA INVIERNO",words:["CHAMARRA","BUFANDA","GUANTES","GORRO"],color:"green"},{name:"VIDA EN EL CAMPO",words:["PUEBLO","RANCHO","GRANJA","HUERTO"],color:"blue"},{name:"PALABRAS CORTAS",words:["SOL","MAR","LUZ","FLOR"],color:"purple"}]},{id:82,categories:[{name:"DEPORTES EXTREMOS",words:["PARACAIDAS","BUNGEE","ALPINISMO","RAFTING"],color:"yellow"},{name:"JARDIN INTERIOR",words:["MACETA","TIERRA","RIEGO","LUZ"],color:"green"},{name:"PRODUCTOS LACTEOS",words:["YOGURT","CREMA","MANTEQUILLA","CUAJADA"],color:"blue"},{name:"DIOSES GRIEGOS",words:["ZEUS","POSEIDON","HADES","ARES"],color:"purple"}]},{id:83,categories:[{name:"VIDEOJUEGOS",words:["MARIO","MINECRAFT","FORTNITE","ZELDA"],color:"yellow"},{name:"AYUNO",words:["AGUA","ZUMO","TE","CALDO"],color:"green"},{name:"ESPECIES EN PELIGRO",words:["PANDA","TIGRE","ELEFANTE","GORILA"],color:"blue"},{name:"PREMIOS NOBEL",words:["PAZ","CIENCIA","LITERATURA","MEDICINA"],color:"purple"}]},{id:84,categories:[{name:"PARQUES TEMATICOS",words:["DISNEY","UNIVERSAL","SIX FLAGS","XETULUL"],color:"yellow"},{name:"COLECCIONES",words:["MONEDAS","ESTAMPILLAS","FIGURAS","TARJETAS"],color:"green"},{name:"ALIMENTOS FERMENTADOS",words:["KIMCHI","CHUCUT","KEFIR","EN CURTIDO"],color:"blue"},{name:"ACORDES MUSICALES",words:["MAYOR","MENOR","AUMENTADO","DISMINUIDO"],color:"purple"}]},{id:85,categories:[{name:"PALABRAS DE ORIGEN",words:["ORIGEN","RAIZ","ETIMOLOGIA","FUENTE"],color:"yellow"},{name:"FORMAS DE TRANSPORTE",words:["CAMION","MOTO","BICI","PATINETA"],color:"green"},{name:"TEJIDOS ANIMALES",words:["LANA","CABRA","ALPACA","MERINO"],color:"blue"},{name:"FECHAS PATRIAS",words:["QUINCE","VEINTE","CINCO","DIEZ"],color:"purple"}]},{id:86,categories:[{name:"GOLOSINAS",words:["CHICLE","PALETA","GOMITAS","CARAMELO"],color:"yellow"},{name:"HOGAR INTELIGENTE",words:["ALEXA","TERMOSTATO","CAMARA","BOMBILLA"],color:"green"},{name:"ANIMALES RAPIDOS",words:["GUEPARDO","HALCÓN","GACELA","TIGRE"],color:"blue"},{name:"MATERIALES DERECHO",words:["CODIGO","ARTICULO","LICENCIA","CONTRATO"],color:"purple"}]},{id:87,categories:[{name:"MISCELANEA PAPELERIA",words:["HOJA","SOBRE","CARPETA","ETIQUETA"],color:"yellow"},{name:"VERBOS ESTADO",words:["SER","ESTAR","PARECER","SENTIR"],color:"green"},{name:"ESTRATEGIAS AJEDREZ",words:["APERTURA","MEDIO","FINAL","GAMBITO"],color:"blue"},{name:"ARQUITECTURA MODERNA",words:["RASCACIELOS","CUPULA","TORRE","DOMO"],color:"purple"}]},{id:88,categories:[{name:"ANIMALES LENTOS",words:["PEREZOSO","TORTUGA","CARACOL","KOALA"],color:"yellow"},{name:"COMIDA CALLEJERA",words:["HOT DOG","ELOTE","TACO","EMPANADA"],color:"green"},{name:"VENTANA ORDENADOR",words:["MAXIMIZAR","MINIMIZAR","CERRAR","RESTAURAR"],color:"blue"},{name:"EVENTOS NATURALEZA",words:["ECLIPSE","SOLSTICIO","EQUINOCCIO","LLUVIA"],color:"purple"}]},{id:89,categories:[{name:"TIPOS DE CERVEZA",words:["CLARA","OSCURA","ARTESANAL","SIN ALCOHOL"],color:"yellow"},{name:"HABILIDADES BLANDAS",words:["COMUNICACION","TRABAJO EQUIPO","RESOLUCION","LIDERAZGO"],color:"green"},{name:"CAPAS ATMOSFERA",words:["TROPOSFERA","ESTRATOSFERA","IONOSFERA","EXOSFERA"],color:"blue"},{name:"PALABRAS CONTRACTAS",words:["APOSTROFE","CONTRACCION","DEL","AL"],color:"purple"}]},{id:90,categories:[{name:"MUSICA LATINA",words:["REGGAETON","SALSA","BANDA","BACHATA"],color:"yellow"},{name:"UTENSILIOS COCINA BASICOS",words:["OLLA","SARTEN","VASO","PLATO"],color:"green"},{name:"MODELOS ESTADISTICA",words:["MEDIA","MEDIANA","MODA","VARIANZA"],color:"blue"},{name:"TIPOS DE PIEL",words:["SECA","GRASA","MIXTA","SENSIBLE"],color:"purple"}]},{id:91,categories:[{name:"LIBROS FAMOSOS",words:["HARRY POTTER","SEÑOR ANILLOS","GAME OF THRONES","CRONICA"],color:"yellow"},{name:"YESOS ROTURAS",words:["FRACTURA","ESCANDA","VENDAS","FERULA"],color:"green"},{name:"MATERIALES BLANDOS",words:["ARCILLA","PLASTILINA","GOMA","ESPUMA"],color:"blue"},{name:"ADJETIVOS SUPERLATIVOS",words:["BUENO","MALO","GRANDE","PEQUEÑO"],color:"purple"}]},{id:92,categories:[{name:"DEPORTES RAQUETA",words:["TENIS","BADMINTON","SQUASH","PADEL"],color:"yellow"},{name:"MUSCULOS PIERNA",words:["CUADRICEPS","BICEPS FEMORAL","GEMELOS","GLUTEO"],color:"green"},{name:"CULTIVOS TROPICALES",words:["CAÑA","BANANO","CACAO","CAFE"],color:"blue"},{name:"PALABRAS POLISEMICAS",words:["BANCO","CARTA","SILLA","VELA"],color:"purple"}]},{id:93,categories:[{name:"HERRAMIENTAS ELECTRICAS",words:["TALADRO","SIERRA","LIJADORA","AMOLADORA"],color:"yellow"},{name:"LLENAR FORMULARIOS",words:["CAMPO","CASILLA","BOTON","OPCION"],color:"green"},{name:"INSTRUMENTOS PRECISION",words:["CALIBRE","MICROMETRO","NIVEL","ESCUADRA"],color:"blue"},{name:"DANZAS REGIONALES",words:["JARABE","FANDANGO","SEVILLANA","FLAMENCO"],color:"purple"}]},{id:94,categories:[{name:"ANIMALES CAZADORES",words:["LOBO","HALCÓN","TIBURON","COCODRILO"],color:"yellow"},{name:"ESPECIAS COMUNES",words:["CANELA","CLAVO","JENGIBRE","NUEZ MOSCADA"],color:"green"},{name:"TIPOS DE LAGOS",words:["GLACIAR","CRATER","ARTIFICIAL","SALADO"],color:"blue"},{name:"OPERACIONES MATEMATICAS",words:["SUMA","RESTA","MULTIPLICACION","DIVISION"],color:"purple"}]},{id:95,categories:[{name:"VOCABULARIO CAMPAMENTO",words:["TIENDA","SACO","LINIERNA","BRUJULA"],color:"yellow"},{name:"REDES COMUNICACION",words:["TELEFONO","RADIO","TV","SATELITE"],color:"green"},{name:"ESPECIES BOSQUE",words:["HELECHO","MUSGO","LIQUEN","HONGO"],color:"blue"},{name:"CLASIFICACION ANIMALES",words:["MAMIFERO","AVE","REPTIL","PEZ"],color:"purple"}]},{id:96,categories:[{name:"POSTRE HELADO",words:["SABOR","CONO","VASO","TOPPING"],color:"yellow"},{name:"VOCABULARIO AEROPUERTO",words:["TERMINAL","PUERTA","PISTA","TORRE"],color:"green"},{name:"FENOMENOS ACUSTICOS",words:["ECO","RESONANCIA","AMPLIFICACION","ABSORCION"],color:"blue"},{name:"PALABRAS TABU",words:["PALABRO","MALEDUCACION","INSULTO","GROSERIA"],color:"purple"}]},{id:97,categories:[{name:"ANIMALES BEBES",words:["CACHORRO","GATITO","POLLITO","POTRILLO"],color:"yellow"},{name:"BAÑO",words:["DUCHA","JABON","TOALLA","ALBORNOZ"],color:"green"},{name:"TECNOLOGIA 2020",words:["IA","METAVERSO","BLOCKCHAIN","NFT"],color:"blue"},{name:"PALABRAS INGLES ESPAÑOL",words:["HOUSE","CASA","CAR","COCHE"],color:"purple"}]},{id:98,categories:[{name:"PERSONAJES MARVEL",words:["IRON MAN","CAPITAN","THOR","HULK"],color:"yellow"},{name:"TIPOS CORTE CARNE",words:["BISTEC","FILETE","COSTILLA","CARNE MOLIDA"],color:"green"},{name:"FORMAS DE PAGO",words:["EFECTIVO","TARJETA","TRANSFERENCIA","CRIPTO"],color:"blue"},{name:"ECUACIONES ALGEBRAICAS",words:["LINEAL","CUADRATICA","CUBICA","POLINOMICA"],color:"purple"}]},{id:99,categories:[{name:"LUGARES TURISTICOS",words:["PLAYA","MUSEO","IGLESIA","PLAZA"],color:"yellow"},{name:"SALUD VISUAL",words:["VISTA","ANTEOJOS","LENTES","CIRUGIA"],color:"green"},{name:"HERRAMIENTAS DIGITALES",words:["SLACK","TRELLO","FIGMA","NOTION"],color:"blue"},{name:"SIMULACION FISICA",words:["VELOCIDAD","ACELERACION","FUERZA","MASA"],color:"purple"}]},{id:100,categories:[{name:"RECICLAJE",words:["PLASTICO","VIDRIO","PAPEL","ORGANICO"],color:"yellow"},{name:"BEBIDAS CALIENTES",words:["CAFE","CHOCOLATE","MATE","INFUSION"],color:"green"},{name:"CICLO DEL AGUA",words:["EVAPORACION","CONDENSACION","PRECIPITACION","FILTRACION"],color:"blue"},{name:"PALABRAS LARGAS",words:["CONSTITUCIONAL","INTERNACIONAL","ESTERNOCLEIDO","ANTICONSTITUCIONAL"],color:"purple"}]},{id:101,categories:[{name:"FRUTAS TROPICALES",words:["MANGO","PAPAYA","GUAYABA","CHIRIMOYA"],color:"yellow"},{name:"DEPORTES ACUATICOS",words:["NATACION","SURF","REMO","BUCEO"],color:"green"},{name:"CAPITALES EUROPEAS",words:["PARIS","ROMA","BERLIN","LONDRES"],color:"blue"},{name:"INSTRUMENTOS CUERDA",words:["GUITARRA","VIOLIN","CELLO","ARPA"],color:"purple"}]},{id:102,categories:[{name:"ANIMALES DOMESTICOS",words:["PERRO","GATO","HAMSTER","CONEJO"],color:"yellow"},{name:"ELECTRODOMESTICOS",words:["LAVADORA","NEVERA","HORNO","MICROONDAS"],color:"green"},{name:"REDES SOCIALES",words:["FACEBOOK","TWITTER","INSTAGRAM","TIKTOK"],color:"blue"},{name:"GENEROS LITERARIOS",words:["NOVELA","ENSAYO","DRAMA","POESIA"],color:"purple"}]},{id:103,categories:[{name:"MEDIOS TRANSPORTE",words:["AUTOBUS","TREN","AVION","BARCO"],color:"yellow"},{name:"HERRAMIENTAS",words:["MARTILLO","DESTORNILLADOR","LLAVE","SIERRA"],color:"green"},{name:"ELEMENTOS QUIMICOS",words:["ORO","PLATA","COBRE","HIERRO"],color:"blue"},{name:"MOVIMIENTOS ARTISTICOS",words:["RENACIMIENTO","BARROCO","IMPRESIONISMO","SURREALISMO"],color:"purple"}]},{id:104,categories:[{name:"PARTES DEL CUERPO",words:["BRAZO","PIERNA","CABEZA","MANO"],color:"yellow"},{name:"POSTRES",words:["FLAN","HELADO","TARTA","NATILLAS"],color:"green"},{name:"OCUPACIONES",words:["MEDICO","ABOGADO","ARQUITECTO","INGENIERO"],color:"blue"},{name:"MITOLOGIA GRIEGA",words:["ZEUS","ATENEA","POSEIDON","HADES"],color:"purple"}]},{id:105,categories:[{name:"VERDURAS",words:["ZANAHORIA","BROCOLI","ESPINACA","CEBOLLA"],color:"yellow"},{name:"PUEBLOS INDIGENAS",words:["MAYA","AZTECA","INCA","GUARANI"],color:"green"},{name:"FUENTES ENERGIA",words:["SOLAR","EOLICA","HIDRAULICA","GEOTERMICA"],color:"blue"},{name:"FILOSOFOS",words:["SOCRATES","PLATON","ARISTOTELES","NIETZSCHE"],color:"purple"}]},{id:106,categories:[{name:"PRENDAS VESTIR",words:["PANTALON","CAMISA","ZAPATOS","ABRIGO"],color:"yellow"},{name:"BAILES",words:["SALSA","TANGO","FLAMENCO","BACHATA"],color:"green"},{name:"MARAVILLAS MUNDO",words:["PIRAMIDE","COLISEO","MACHU PICCHU","TAJ MAHAL"],color:"blue"},{name:"CIENCIAS",words:["BIOLOGIA","QUIMICA","FISICA","ASTRONOMIA"],color:"purple"}]},{id:107,categories:[{name:"EMOCIONES",words:["ALEGRIA","TRISTEZA","MIEDO","IRA"],color:"yellow"},{name:"JUEGOS MESA",words:["AJEDREZ","DOMINO","ESCALERAS","RAPIDO"],color:"green"},{name:"PLANETAS",words:["MARTE","VENUS","SATURNO","JUPITER"],color:"blue"},{name:"CORRIENTES PINTURA",words:["CUBISMO","ABSTRACTO","POP ART","EXPRESIONISMO"],color:"purple"}]},{id:108,categories:[{name:"OFICIOS ANTIGUOS",words:["HERRERO","PANADERO","SASTRE","CARPINTERO"],color:"yellow"},{name:"ESPECIAS",words:["CANELA","PIMIENTA","COMINO","AZAFRAN"],color:"green"},{name:"HITOS HISTORIA",words:["REVOLUCION","GUERRA","TRATADO","IMPERIO"],color:"blue"},{name:"ECOSISTEMAS",words:["SELVA","DESIERTO","TUNDRA","SABANA"],color:"purple"}]},{id:109,categories:[{name:"LENGUAJES PROGRAMACION",words:["PYTHON","JAVASCRIPT","JAVA","C"],color:"yellow"},{name:"DEPORTES EQUIPO",words:["FUTBOL","BASQUET","VOLEIBOL","RUGBY"],color:"green"},{name:"FORMAS GEOMETRICAS",words:["CIRCULO","CUADRADO","TRIANGULO","RECTANGULO"],color:"blue"},{name:"GLANDULAS",words:["TIROIDES","PANCREAS","HIPOFISIS","SUPRARRENAL"],color:"purple"}]},{id:110,categories:[{name:"PELICULAS FAMOSAS",words:["TITANIC","GLADIADOR","MATRIX","AVATAR"],color:"yellow"},{name:"MONEDAS MUNDO",words:["DOLAR","EURO","LIBRA","YEN"],color:"green"},{name:"MUSICA CLASICA",words:["BEETHOVEN","MOZART","BACH","CHOPIN"],color:"blue"},{name:"ARTES MARCIALES",words:["KARATE","JUDO","TAEKWONDO","KUNG FU"],color:"purple"}]},{id:111,categories:[{name:"TIENDAS",words:["FARMACIA","PANADERIA","CARNICERIA","LIBRERIA"],color:"yellow"},{name:"DEPORTES INVIERNO",words:["ESQUI","PATINAJE","HOCKEY","TRINEO"],color:"green"},{name:"INVENTOS",words:["RUEDA","PAPEL","POLVORA","BRUJULA"],color:"blue"},{name:"HUESOS CUERPO",words:["FEMUR","TIBIA","HUMERO","COSTILLA"],color:"purple"}]},{id:112,categories:[{name:"BEBIDAS",words:["AGUA","ZUMO","SODA","LECHE"],color:"yellow"},{name:"RIOS FAMOSOS",words:["AMAZONAS","NILO","MISISIPI","DANUBIO"],color:"green"},{name:"GENEROS MUSICALES",words:["JAZZ","ROCK","POP","REGGAETON"],color:"blue"},{name:"AVES RAPACES",words:["AGUILA","HALCÓN","BUITRE","LECHUZA"],color:"purple"}]},{id:113,categories:[{name:"MATERIALES ESCOLARES",words:["LAPIZ","CUADERNO","MOCHILA","REGLA"],color:"yellow"},{name:"SISTEMAS CUERPO",words:["RESPIRATORIO","DIGESTIVO","CIRCULATORIO","NERVIOSO"],color:"green"},{name:"MONTAÑAS",words:["EVEREST","ACONCAGUA","MONT BLANC","KILIMANJARO"],color:"blue"},{name:"PALEONTOLOGIA",words:["DINOSAURIO","FOSIL","EXCAVACION","MUSEO"],color:"purple"}]},{id:114,categories:[{name:"FRASES COMUNES",words:["HOLA","GRACIAS","POR FAVOR","ADIOS"],color:"yellow"},{name:"ANIMALES MARINOS",words:["DELFIN","TIBURON","BALLENA","PULPO"],color:"green"},{name:"OCEANOS",words:["PACIFICO","ATLANTICO","INDICO","ARTICO"],color:"blue"},{name:"ARQUITECTURA",words:["ARCO","BOVEDA","COLUMNA","CUPULA"],color:"purple"}]},{id:115,categories:[{name:"COSAS DE COCINA",words:["OLLA","SARTEN","CUCHILLO","ESPATULA"],color:"yellow"},{name:"VOCALES",words:["A","E","I","O"],color:"green"},{name:"DANZAS REGIONALES",words:["JOROPO","CUMBIA","SAMBA","MERENGUE"],color:"blue"},{name:"CUERPOS CELESTES",words:["ESTRELLA","COMETA","ASTEROIDE","METEORITO"],color:"purple"}]},{id:116,categories:[{name:"MUEBLES",words:["MESA","SILLA","ARMARIO","CAMA"],color:"yellow"},{name:"ENFERMEDADES",words:["GRIPE","DIABETES","ASMA","ANEMIA"],color:"green"},{name:"TRANSPORTE ANTIGUO",words:["CARRETA","DILIGENCIA","TRANVIA","VAPOR"],color:"blue"},{name:"TEORIAS CIENTIFICAS",words:["RELATIVIDAD","EVOLUCION","BIG BANG","GRAVEDAD"],color:"purple"}]},{id:117,categories:[{name:"DEPORTES PELOTA",words:["TENIS","GOLF","BEISBOL","PING PONG"],color:"yellow"},{name:"SENTIDOS",words:["VISTA","OIDO","TACTO","OLFATO"],color:"green"},{name:"RIQUEZA NATURAL",words:["PETROLEO","GAS","CARBON","URANIO"],color:"blue"},{name:"PERIODOS HISTORICOS",words:["EDAD MEDIA","RENACIMIENTO","PREHISTORIA","EDAD ANTIGUA"],color:"purple"}]},{id:118,categories:[{name:"UTILES ASEO",words:["JABON","SHAMPOO","CEPILLO","TOALLA"],color:"yellow"},{name:"FIESTAS",words:["CUMPLEAÑOS","BODA","BAUTIZO","GRADUACION"],color:"green"},{name:"PUENTES FAMOSOS",words:["GOLDEN GATE","TORRE","BROOKLYN","RIALTO"],color:"blue"},{name:"TEORIA COLOR",words:["PRIMARIO","SECUNDARIO","CALIDO","FRIO"],color:"purple"}]},{id:119,categories:[{name:"HERIDAS COMUNES",words:["CORTE","GOLPE","QUEMADURA","RASGUNO"],color:"yellow"},{name:"TECNOLOGIA",words:["ORDENADOR","CELULAR","TABLET","RELOJ"],color:"green"},{name:"PRINCESAS DISNEY",words:["BLANCA","CENICIENTA","AURORA","JASMIN"],color:"blue"},{name:"TEJIDOS",words:["ALGODON","LINO","LANA","SEDA"],color:"purple"}]},{id:120,categories:[{name:"PESOS MEDIDAS",words:["KILO","LITRO","METRO","LIBRA"],color:"yellow"},{name:"ESPECTACULOS",words:["CINE","TEATRO","CONCIERTO","CIRCO"],color:"green"},{name:"FENOMENOS NATURALES",words:["TERREMOTO","TORNADO","HURACAN","TSUNAMI"],color:"blue"},{name:"COMPOSITORES OPERA",words:["VERDI","PUCCINI","ROSSINI","WAGNER"],color:"purple"}]},{id:121,categories:[{name:"FRUTAS SECAS",words:["ALMENDRA","NUEZ","AVELLANA","MANI"],color:"yellow"},{name:"DINOSAURIOS",words:["TIRANOSAURIO","TRICERATOPS","VELOCIRAPTOR","ESTEGOSAURIO"],color:"green"},{name:"IDIOMAS MUNDO",words:["INGLES","FRANCES","MANDARIN","ARABE"],color:"blue"},{name:"MATEMATICAS",words:["ALGEBRA","CALCULO","GEOMETRIA","TRIGONOMETRIA"],color:"purple"}]},{id:122,categories:[{name:"ANIMALES GRANJA",words:["VACA","CERDO","GALLINA","OVEJA"],color:"yellow"},{name:"PARQUES NACIONALES",words:["YOSEMITE","BANFF","TORRES DEL PAINE","IGUAZU"],color:"green"},{name:"SUPERHÉROES",words:["BATMAN","SUPERMAN","SPIDERMAN","IRONMAN"],color:"blue"},{name:"CATEDRALES",words:["NOTRE DAME","SAGRADA FAMILIA","SAN PEDRO","SAN PABLO"],color:"purple"}]},{id:123,categories:[{name:"INSTRUMENTOS COCINA",words:["CUCHARA","TENEDOR","CUCHILLO","CAZUELA"],color:"yellow"},{name:"FESTIVIDADES",words:["CARNAVAL","SEMANA SANTA","NAVIDAD","RAMADAN"],color:"green"},{name:"DIOSES EGIPCIOS",words:["RA","ANUBIS","OSIRIS","HORUS"],color:"blue"},{name:"RAMAS MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","DERMATOLOGIA"],color:"purple"}]},{id:124,categories:[{name:"DEPORTES MENTALES",words:["AJEDREZ","GO","BRIDGE","POKER"],color:"yellow"},{name:"PARTES PLANTA",words:["RAIZ","TALLO","HOJA","FLOR"],color:"green"},{name:"EXPLORADORES",words:["COLON","MAGELLANES","PIZARRO","CORTES"],color:"blue"},{name:"TEXTURAS",words:["SUAVE","RUGOSO","LISO","ASPERO"],color:"purple"}]},{id:125,categories:[{name:"DULCES TIPICOS",words:["CHURRO","TORRIJA","CHURCHEN","TURRON"],color:"yellow"},{name:"OCEANOGRAFIA",words:["OLAS","MAREA","CORRIENTE","ABISMO"],color:"green"},{name:"CONECTORES LOGICOS",words:["Y","O","NO","SI"],color:"blue"},{name:"PENSAMIENTO",words:["LOGICA","RAZON","INTUICION","CREATIVIDAD"],color:"purple"}]},{id:126,categories:[{name:"PROFESIONES ARTE",words:["ACTOR","PINTOR","ESCRITOR","MUSICO"],color:"yellow"},{name:"ESTADOS AGUA",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"green"},{name:"CLUBES FUTBOL",words:["BARCELONA","MADRID","BOCA","RIVER"],color:"blue"},{name:"HABILIDADES COGNITIVAS",words:["MEMORIA","ATENCION","LENGUAJE","PERCEPCION"],color:"purple"}]},{id:127,categories:[{name:"CONTINENTES",words:["AMERICA","EUROPA","ASIA","AFRICA"],color:"yellow"},{name:"TECNOLOGIA ANTIGUA",words:["PALANCA","POLEA","TORNO","CUNA"],color:"green"},{name:"CELEBRIDADES",words:["SHAKIRA","BAD BUNNY","ROSALIA","JLO"],color:"blue"},{name:"TRASTORNOS SUEÑO",words:["INSOMNIO","APNEA","NARCOLEPSIA","SONAMBULISMO"],color:"purple"}]},{id:128,categories:[{name:"COSAS ESCRITORIO",words:["LAPIZ","BORRADOR","SACA PUNTA","RESALTADOR"],color:"yellow"},{name:"SABORES",words:["DULCE","SALADO","AMARGO","ACIDO"],color:"green"},{name:"VULCANES",words:["VESUBIO","ETNA","FUJI","KRAKATOA"],color:"blue"},{name:"DEFORMACIONES",words:["ESTIRAR","COMPRIMIR","TORCER","DOBLAR"],color:"purple"}]},{id:129,categories:[{name:"MEDIOS COMUNICACION",words:["RADIO","TELEVISION","PERIODICO","REVISTA"],color:"yellow"},{name:"DINOSAURIOS VOLADORES",words:["PTERODACTILO","PTERANODON","QUETZALCOATLUS","RANFORRINCO"],color:"green"},{name:"PRIMATES",words:["MONO","GORILA","CHIMPANCE","ORANGUTAN"],color:"blue"},{name:"PATRONES CLIMA",words:["MONZON","EL NIÑO","HURACAN","CICLON"],color:"purple"}]},{id:130,categories:[{name:"ALFABETO GRIEGO",words:["ALFA","BETA","GAMMA","DELTA"],color:"yellow"},{name:"ACCIDENTES DOMESTICOS",words:["CAIDA","QUEMADURA","CORTADURA","GOLPE"],color:"green"},{name:"ISLAS FAMOSAS",words:["HAWAI","IBIZA","BALI","MADAGASCAR"],color:"blue"},{name:"CORTEZAS TERRESTRES",words:["LITOSFERA","ASTENOSFERA","MESOSFERA","NUCLEO"],color:"purple"}]},{id:131,categories:[{name:"ANIMALES SALVAJES",words:["LEON","TIGRE","OSO","LOBO"],color:"yellow"},{name:"PUERTOS MARITIMOS",words:["ROTTERDAM","SINGAPUR","SHANGAI","HAMBURGO"],color:"green"},{name:"HERRAMIENTAS JARDIN",words:["PALA","RASTRILLO","TIJERA","MANGUERA"],color:"blue"},{name:"ENFERMEDADES MENTALES",words:["ANSIEDAD","DEPRESION","ESQUIZOFRENIA","TOC"],color:"purple"}]},{id:132,categories:[{name:"MEDICAMENTOS",words:["ASPIRINA","PARACETAMOL","IBUPROFENO","ANTIBIOTICO"],color:"yellow"},{name:"MISIONES ESPACIALES",words:["APOLO","ARTEMIS","VOYAGER","CURIOSITY"],color:"green"},{name:"BAILES TRADICIONALES",words:["JOTA","FANDANGO","SEVILLANA","PASODOBLE"],color:"blue"},{name:"PROPIEDADES FISICAS",words:["DENSIDAD","MASA","VOLUMEN","TEMPERATURA"],color:"purple"}]},{id:133,categories:[{name:"MARCADORES TEXTILES",words:["AGUJA","HILO","DEDAL","ALFILER"],color:"yellow"},{name:"CUENCAS HIDROGRAFICAS",words:["RIO","LAGO","MAR","OCEANO"],color:"green"},{name:"SERIES NETFLIX",words:["STRANGER THINGS","CASA PAPEL","WEDNESDAY","BRIDGERTON"],color:"blue"},{name:"RECURSOS RENOVABLES",words:["BIOMASA","SOLAR","HIDROELECTRICA","MAREOMOTRIZ"],color:"purple"}]},{id:134,categories:[{name:"MATERIALES ARTE",words:["ACUARELA","OLEO","CARBONCILLO","PASTEL"],color:"yellow"},{name:"CUARTOS CASA",words:["SALA","COCINA","BAÑO","DORMITORIO"],color:"green"},{name:"MOVIMIENTOS LITERARIOS",words:["MODERNISMO","REALISMO","ROMANTICISMO","NATURALISMO"],color:"blue"},{name:"CRISTALES",words:["CUARZO","DIAMANTE","RUBI","ESMERALDA"],color:"purple"}]},{id:135,categories:[{name:"CARNE",words:["TERNERA","POLLO","CERDO","CORDERO"],color:"yellow"},{name:"CULTIVOS",words:["TRIGO","MAIZ","ARROZ","AVENA"],color:"green"},{name:"GRANDES EXPLORACIONES",words:["RUTA SEDA","VUELTA MUNDO","CONQUISTA","COLONIZACION"],color:"blue"},{name:"MUSCULOS",words:["BICEPS","TRICEPS","CUADRICEPS","ABDOMINAL"],color:"purple"}]},{id:136,categories:[{name:"NUMEROS PRIMOS",words:["DOS","TRES","CINCO","SIETE"],color:"yellow"},{name:"VALORES HUMANOS",words:["HONESTIDAD","RESPETO","SOLIDARIDAD","JUSTICIA"],color:"green"},{name:"GRANDES LAGOS",words:["SUPERIOR","MICHIGAN","TITICACA","VICTORIA"],color:"blue"},{name:"INSTRUMENTOS PERCUSION",words:["BATERIA","TAMBOR","MARIMBA","XILOFONO"],color:"purple"}]},{id:137,categories:[{name:"MARCADORES TIEMPO",words:["AHORA","LUEGO","SIEMPRE","NUNCA"],color:"yellow"},{name:"FELINOS",words:["GATO","LEON","TIGRE","PUMA"],color:"green"},{name:"DESIERTOS",words:["SAHARA","GOBI","ATACAMA","ARABIA"],color:"blue"},{name:"AVANCES MEDICOS",words:["VACUNA","PENICILINA","RAYOS X","ADN"],color:"purple"}]},{id:138,categories:[{name:"PARTES BARCO",words:["VELA","TIMON","ANCLA","PROA"],color:"yellow"},{name:"MATERIALES RECICLABLES",words:["ALUMINIO","CARTON","PLASTICO","VIDRIO"],color:"green"},{name:"EQUIPO CAMPAMENTO",words:["CARPA","SACO DORMIR","BRUJULA","CANTIMPLORA"],color:"blue"},{name:"CATEGORIAS GRAMATICALES",words:["SUSTANTIVO","VERBO","ADJETIVO","ADVERBIO"],color:"purple"}]},{id:139,categories:[{name:"ANIMALES ACUATICOS",words:["PEZ","CALAMAR","LANGOSTA","CANGREJO"],color:"yellow"},{name:"VIVERES TECNOLOGICOS",words:["WIFI","BLUETOOTH","USB","HDMI"],color:"green"},{name:"FERIAS",words:["EXPO","FERIA","CIRCULAR","MUESTRA"],color:"blue"},{name:"TEORIAS ECONOMICAS",words:["CAPITALISMO","SOCIALISMO","KEYNESIANISMO","LIBERALISMO"],color:"purple"}]},{id:140,categories:[{name:"ANIMALES NOCTURNOS",words:["BUHO","MURCIELAGO","LUCIERNAGA","ZORRO"],color:"yellow"},{name:"FRUTOS",words:["TOMATO","AGUACATE","PIMIENTO","BERENJENA"],color:"green"},{name:"REGIONES ESPAÑA",words:["CATALUÑA","ANDALUCIA","GALICIA","VALENCIA"],color:"blue"},{name:"PRINCIPIOS FISICA",words:["INERCIA","GRAVITACION","TERMODINAMICA","CUANTICA"],color:"purple"}]},{id:141,categories:[{name:"POSTRES ESPAÑOLES",words:["CREMA CATALANA","TOCINO CIELO","ARROZ LECHE","BRAZO GITANO"],color:"yellow"},{name:"SIMMBOLOS NACIONALES",words:["BANDERA","ESCUDO","HIMNO","FLOR"],color:"green"},{name:"ANIMALES EXTINTOS",words:["DODO","MAMUT","TIGRE DIENTE","PEREZOSO GIGANTE"],color:"blue"},{name:"TECNICAS ARTE",words:["CLAROSCURO","PERSPECTIVA","SFUMATO","PUNTILLISMO"],color:"purple"}]},{id:142,categories:[{name:"PINTORES FAMOSOS",words:["PICASSO","DALI","GOYA","VAN GOGH"],color:"yellow"},{name:"CAVIDADES CUERPO",words:["BOCA","NARIZ","OREJA","PULMON"],color:"green"},{name:"SISTEMAS OPERATIVOS",words:["WINDOWS","MACOS","LINUX","ANDROID"],color:"blue"},{name:"CAPAS ATMOSFERA",words:["TROPOSFERA","ESTRATOSFERA","MESOSFERA","TERMOSFERA"],color:"purple"}]},{id:143,categories:[{name:"CONDIMENTOS",words:["SAL","ACEITE","VINAGRE","LIMON"],color:"yellow"},{name:"CICLOS VIDA",words:["NACER","CRECER","REPRODUCIR","MORIR"],color:"green"},{name:"FUERZAS FISICAS",words:["GRAVEDAD","FRICCION","MAGNETISMO","ELECTRICIDAD"],color:"blue"},{name:"FIGURAS RETORICAS",words:["METAFORA","HIPERBOLE","IRONIA","SINESTESIA"],color:"purple"}]},{id:144,categories:[{name:"JUEGOS TRADICIONALES",words:["CARRERA","SALTAR","ESCONDER","RAYUELA"],color:"yellow"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ESPECTRO","REFLEJO","REFLEXION"],color:"green"},{name:"BALLENAS",words:["AZUL","JOROBADA","FRANCA","ASESINA"],color:"blue"},{name:"ESTILOS LIDERAZGO",words:["DEMOCRATICO","AUTOCRATICO","TRANSFORMACIONAL","LAISSEZ FAIRE"],color:"purple"}]},{id:145,categories:[{name:"PALABRAS OPUESTAS",words:["ALTO","BAJO","GRANDE","PEQUEÑO"],color:"yellow"},{name:"LIDERES HISTORICOS",words:["GANDHI","MANDELA","LUTERO","CHURCHILL"],color:"green"},{name:"LENTEJAS ESPECTRO",words:["INFRARROJO","ULTRAVIOLETA","RAYOS X","MICROONDAS"],color:"blue"},{name:"ACENTOS ESPAÑOLES",words:["MEXICANO","ARGENTINO","ESPAÑOL","COLOMBIANO"],color:"purple"}]},{id:146,categories:[{name:"SOPAS",words:["CALDO","CREMA","POTAJE","CONSOME"],color:"yellow"},{name:"COLECCIONES",words:["SELLOS","MONEDAS","CROMOS","FIGURAS"],color:"green"},{name:"NAVES ESPACIALES",words:["COHETE","SATELITE","ESTACION","SONDA"],color:"blue"},{name:"FORMAS PENSAMIENTO",words:["CONVERGENTE","DIVERGENTE","CRITICO","ANALITICO"],color:"purple"}]},{id:147,categories:[{name:"DIVISIONES POLITICAS",words:["PAIS","PROVINCIA","CIUDAD","MUNICIPIO"],color:"yellow"},{name:"COMPORTAMIENTO ANIMAL",words:["MIGRACION","HIBERNACION","CAMUFLAJE","SIMBIOSIS"],color:"green"},{name:"ESCRITORES FAMOSOS",words:["CERVANTES","NERUDA","GARCIA MARQUEZ","BORGES"],color:"blue"},{name:"ESTADOS AGREGACION",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"purple"}]},{id:148,categories:[{name:"ACCESORIOS MODA",words:["BOLSO","CINTURON","BUFANDA","GORRO"],color:"yellow"},{name:"FAMILIA LINGUISTICA",words:["LATIN","GRIEGO","ARABE","GERMANICO"],color:"green"},{name:"ANCORAS ROCK",words:["QUEEN","ROLLING STONES","LED ZEPPELIN","PINK FLOYD"],color:"blue"},{name:"PROCESOS QUIMICOS",words:["OXIDACION","REDUCCION","HIDROLISIS","COMBUSTION"],color:"purple"}]},{id:149,categories:[{name:"ESPACIOS NATURALES",words:["BOSQUE","PRADERA","MANGLAR","ARRECIFE"],color:"yellow"},{name:"FUERZAS MILITARES",words:["EJERCITO","MARINA","AVIACION","INFANTERIA"],color:"green"},{name:"CONSTELACIONES",words:["ORION","OSA MAYOR","CASIOPEA","ESCORPION"],color:"blue"},{name:"INDICADORES ECONOMICOS",words:["PIB","IPC","MEDIA","TASA"],color:"purple"}]},{id:150,categories:[{name:"TECNICAS COCINA",words:["HERVIR","ASAR","FREIR","GUISAR"],color:"yellow"},{name:"SALUDOS MUNDO",words:["HOLA","KONICHIWA","SALAM","BONJOUR"],color:"green"},{name:"MOVIMIENTOS SOCIALES",words:["FEMINISMO","AMBIENTALISMO","PACIFISMO","INDIGENISMO"],color:"blue"},{name:"MECANISMOS",words:["RUEDA","POLEA","ENGRANAJE","TORNILLO"],color:"purple"}]}
];

const NEW_PUZZLES = [
{id:"puzzle-151",categories:[{name:"ESPECIES DE ARBOLES",words:["ROBLE","NOGAL","SAUCE","ALAMO"],color:"yellow"},{name:"TIPOS DE NUBES",words:["CUMULUS","CIRRUS","STRATUS","NIMBUS"],color:"green"},{name:"DEPORTES DE NIEVE",words:["ESQUI","SNOWBOARD","PATINAJE","TRINEO"],color:"blue"},{name:"ADJETIVOS DE PERSONALIDAD",words:["EXTROVERTIDO","TIMIDO","CARISMATICO","RESERVADO"],color:"purple"}]},
{id:"puzzle-152",categories:[{name:"PARTES DEL CELULAR",words:["PANTALLA","BATERIA","CAMARA","PROCESADOR"],color:"yellow"},{name:"TIPOS DE PIEDRA",words:["GRANITO","MARMOL","PIZARRA","ARENISCA"],color:"green"},{name:"GENEROS PERIODISTICOS",words:["NOTICIA","REPORTAJE","ENTREVISTA","COLUMNA"],color:"blue"},{name:"PALABRAS CON 4 VOCALES",words:["MURCIELAGO","AEROPUERTO","ARQUITECTO","AURICULAR"],color:"purple"}]},
{id:"puzzle-153",categories:[{name:"ANIMALES DE LA SELVA",words:["TIGRE","GUEPARDO","LEOPARDO","JAGUAR"],color:"yellow"},{name:"TIPOS DE PAN",words:["BAGUETTE","BOLLO","PANECILLO","CHAPATA"],color:"green"},{name:"RAMAS DE LA BIOLOGIA",words:["BOTANICA","ZOOLOGIA","GENETICA","ECOLOGIA"],color:"blue"},{name:"PALABRAS TERMINAN EN ION",words:["ACCION","VISION","MISION","PASION"],color:"purple"}]},
{id:"puzzle-154",categories:[{name:"MARCAS DE ROPA",words:["NIKE","ADIDAS","PUMA","CONVERSE"],color:"yellow"},{name:"PARTES DEL AVION",words:["ALA","MOTOR","TREN","COLA"],color:"green"},{name:"FASES DE LA LUNA",words:["NUEVA","CRECIENTE","LLENA","MENGUANTE"],color:"blue"},{name:"PALABRAS DE ORIGEN GRIEGO",words:["DEMOCRACIA","TEATRO","FILOSOFIA","MATEMATICA"],color:"purple"}]},
{id:"puzzle-155",categories:[{name:"TIPOS DE ENERGIA",words:["SOLAR","EOLICA","NUCLEAR","HIDROELECTRICA"],color:"yellow"},{name:"UTILES DE DIBUJO",words:["LAPIZ","CARBONCILLO","PASTEL","TIZA"],color:"green"},{name:"DISCIPLINAS DEPORTIVAS",words:["ATLETISMO","GIMNASIA","HALTEROFILIA","LUCHA"],color:"blue"},{name:"COSAS QUE SE PUEDEN PLANTAR",words:["SEMILLA","BULBO","ESQUEJE","PLANTULA"],color:"purple"}]},
{id:"puzzle-156",categories:[{name:"ANIMALES DEL DESIERTO",words:["CAMELO","SERPIENTE","LAGARTO","ALACRAN"],color:"yellow"},{name:"TIPOS DE SOMBRERO",words:["GORRA","PAMELA","COPA","VISERA"],color:"green"},{name:"SUSTANCIAS PURAS",words:["ELEMENTO","COMPUESTO","MEZCLA","DISOLUCION"],color:"blue"},{name:"VERBOS QUE CAMBIAN SIGNIFICADO",words:["ECHAR","HABER","TENER","PONER"],color:"purple"}]},
{id:"puzzle-157",categories:[{name:"MATERIALES DE JOYERIA",words:["ORO","PLATA","BRONCE","PALADIO"],color:"yellow"},{name:"PARTES DEL BARCO",words:["CASCO","CUBIERTA","CAMAROTE","PUENTE"],color:"green"},{name:"PROCESOS INDUSTRIALES",words:["FUNDICION","FORJA","LAMINADO","EXTRUSION"],color:"blue"},{name:"MONOSILABOS TONICOS",words:["DE","TE","SE","MI"],color:"purple"}]},
{id:"puzzle-158",categories:[{name:"FLORES SILVESTRES",words:["AMAPOLA","LAVANDA","RETAMA","BREZO"],color:"yellow"},{name:"UTENSILIOS DE BAÑO",words:["TOALLA","ALBORNOZ","ESTERILLA","CORTINA"],color:"green"},{name:"ESTRATEGIAS DE APRENDIZAJE",words:["MEMORIZAR","ASOCIAR","REPETIR","VISUALIZAR"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN POR CH",words:["CHOCOLATE","CHIMENEA","CHORIZO","CHAMPIÑON"],color:"purple"}]},
{id:"puzzle-159",categories:[{name:"TIPOS DE QUESO",words:["CHEDDAR","GRUYERE","CABRA","AZUL"],color:"yellow"},{name:"REDES DE COMPUTADORAS",words:["WIFI","ETHERNET","FIBRA","SATELITE"],color:"green"},{name:"MOVIMIENTOS DE LA TIERRA",words:["ROTACION","TRASLACION","PRECESION","NUTACION"],color:"blue"},{name:"PALABRAS CON PREFIJO IN",words:["INCREIBLE","INVISIBLE","INMORTAL","INUTIL"],color:"purple"}]},
{id:"puzzle-160",categories:[{name:"ANIMALES DEL BOSQUE",words:["CIERVO","ZORRO","ARDILLA","TEJON"],color:"yellow"},{name:"TIPOS DE CAMA",words:["INDIVIDUAL","MATRIMONIO","LITERA","SOFA"],color:"green"},{name:"HERRAMIENTAS DE MEDICION",words:["REGLA","CINTA","NIVEL","CALIBRE"],color:"blue"},{name:"PALABRAS DE CINCO LETRAS",words:["CAMPO","FUEGO","NIEVE","BARCO"],color:"purple"}]},
{id:"puzzle-161",categories:[{name:"INSTRUMENTOS DE PERCUSION",words:["TAMBOR","BATERIA","MARIMBA","TIMBAL"],color:"yellow"},{name:"TIPOS DE TELA",words:["ALGODON","LINO","SEDA","LANA"],color:"green"},{name:"SISTEMAS DEL CUERPO",words:["CIRCULATORIO","DIGESTIVO","NERVIOSO","RESPIRATORIO"],color:"blue"},{name:"CIUDADES PATRIMONIO",words:["GRANADA","TOLEDO","SALAMANCA","CUENCA"],color:"purple"}]},
{id:"puzzle-162",categories:[{name:"SABORES BASICOS",words:["DULCE","SALADO","AMARGO","ACIDO"],color:"yellow"},{name:"TIPOS DE LLAVE",words:["INGLESA","FIJA","ALLEN","TORX"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["CUBISMO","DADAISMO","SURREALISMO","FAUVISMO"],color:"blue"},{name:"PALABRAS CON DOBLE LETRA",words:["BELLEZA","CARROCERIA","ARROZ","PERRO"],color:"purple"}]},
{id:"puzzle-163",categories:[{name:"ELEMENTOS DEL CLIMA",words:["TEMPERATURA","HUMEDAD","PRESION","VIENTO"],color:"yellow"},{name:"TIPOS DE BOLSO",words:["MOCHILA","RIÑONERA","CARTERA","TOTE"],color:"green"},{name:"PETROLEO DERIVADOS",words:["GASOLINA","DIESEL","QUEROSENO","ASFALTO"],color:"blue"},{name:"PALABRAS CON 3 VOCALES IGUALES",words:["AURORA","CHILE","INDIVIDUO","PARAGUAS"],color:"purple"}]},
{id:"puzzle-164",categories:[{name:"ANIMALES DE RIOS Y LAGOS",words:["NUTRIA","CASTRO","RANA","TORTUGA"],color:"yellow"},{name:"ELEMENTOS DECORATIVOS",words:["JARRON","MARCO","FIGURA","VELA"],color:"green"},{name:"PLANETAS DEL SISTEMA SOLAR",words:["MARTE","JUPITER","SATURNO","NEPTUNO"],color:"blue"},{name:"PALABRAS QUE RIMAN CON AR",words:["CANTAR","BAILAR","SALTAR","JUGAR"],color:"purple"}]},
{id:"puzzle-165",categories:[{name:"ESPECIES DE PINO",words:["ABETO","PINO","CEDRO","ALERCE"],color:"yellow"},{name:"BATERIAS DE COCINA",words:["OLLA","SARTEN","CAZUELA","WOK"],color:"green"},{name:"TEORIAS DEL ORIGEN",words:["BIG BANG","CREACIONISMO","EVOLUCION","PANSERMIA"],color:"blue"},{name:"PALABRAS CON TRIPLE R",words:["CORRE","TERRENO","CARRO","BARRER"],color:"purple"}]},
{id:"puzzle-166",categories:[{name:"LOS CINCO SENTIDOS",words:["VISTA","OIDO","TACTO","GUSTO"],color:"yellow"},{name:"TIPOS DE LECHUGA",words:["ROMANA","ICEBBERG","RUCULA","CANONIGOS"],color:"green"},{name:"MARAVILLAS NATURALES",words:["GRAN CAÑON","ARRECIFE","AURORA","NIAGARA"],color:"blue"},{name:"VERBOS PRONOMINALES",words:["ARREPENTIRSE","QUEJARSE","ATREVERSE","DIGNARSE"],color:"purple"}]},
{id:"puzzle-167",categories:[{name:"MATERIALES DE COCINA",words:["MADERA","PLASTICO","SILICONA","ACERO"],color:"yellow"},{name:"TIPOS DE ESCRITURA",words:["CURSIVA","IMPRENTA","CALIGRAFIA","BRAILLE"],color:"green"},{name:"FENOMENOS ASTRONOMICOS",words:["ECLIPSE","SOLSTICIO","EQUINOCCIO","LLUVIA"],color:"blue"},{name:"PALABRAS CON DIPTONGO CRECIENTE",words:["AGUA","FUEGO","PIEDRA","TIERRA"],color:"purple"}]},
{id:"puzzle-168",categories:[{name:"ANIMALES DE LA SABANA",words:["CEBRA","JIRAFA","ANTILOPE","ÑU"],color:"yellow"},{name:"TIPOS DE CAFE",words:["ESPRESSO","CAPUCHINO","LATTE","MOCA"],color:"green"},{name:"ESTRUCTURAS CELULARES",words:["NUCLEO","MEMBRANA","MITOCONDRIA","RIBOSOMA"],color:"blue"},{name:"PALABRAS CON PREFIJO RE",words:["REHACER","RELEER","REPENSAR","REVISAR"],color:"purple"}]},
{id:"puzzle-169",categories:[{name:"PRENDAS DE INVIERNO",words:["ABRIGO","BUFANDA","GUANTES","GORRO"],color:"yellow"},{name:"TIPOS DE MADERA",words:["ROBLE","CAOBA","NOGAL","CEDRO"],color:"green"},{name:"RAMAS DE LA FISICA",words:["MECANICA","TERMODINAMICA","OPTICA","ACUSTICA"],color:"blue"},{name:"PALABRAS DE OCHO LETRAS",words:["CIRCULAR","CUADRADO","ESTRELLA","SATELITE"],color:"purple"}]},
{id:"puzzle-170",categories:[{name:"ESPECIES DE PALMERAS",words:["COCOTERA","DATILERA","ARECA","KENTIA"],color:"yellow"},{name:"CORTES DE CARNE",words:["LOMO","SOLOMILLO","CHULETA","ENTRECOT"],color:"green"},{name:"DISCIPLINAS FILOSOFICAS",words:["ETICA","LOGICA","METAFISICA","ESTETICA"],color:"blue"},{name:"PALABRAS ACENTUADAS EN LA ULTIMA",words:["CAFE","SOFA","AVION","BALON"],color:"purple"}]},
{id:"puzzle-171",categories:[{name:"ANIMALES DE LA TAIGA",words:["ALCE","LOBO","OSO","LINCE"],color:"yellow"},{name:"TIPOS DE GAFAS",words:["SOL","GRADUADAS","PANTALLA","NOCHE"],color:"green"},{name:"PROCESOS GEOGRAFICOS",words:["EROSION","SEDIMENTACION","GLACIACION","OROGENESIS"],color:"blue"},{name:"PALABRAS CON 2 SILABAS",words:["CASA","PERRO","GATO","SOL"],color:"purple"}]},
{id:"puzzle-172",categories:[{name:"MATERIALES DE EMBALAJE",words:["CAJA","CINTA","PLASTICO","PAPEL"],color:"yellow"},{name:"TIPOS DE SOMBRERO",words:["GORRA","PAMELA","COPA","VISERA"],color:"green"},{name:"RAMAS DE LA INGENIERIA",words:["CIVIL","MECANICA","ELECTRICA","QUIMICA"],color:"blue"},{name:"PALABRAS CON 4 SILABAS",words:["ARBOLITO","CASITA","PERRITO","GATITO"],color:"purple"}]},
{id:"puzzle-173",categories:[{name:"ESPECIES DE ROBLE",words:["ENCINA","ALCORNOCUE","QUEJIGO","CARBALLO"],color:"yellow"},{name:"UTILES DE COSTURA",words:["AGUJA","HILO","DEDAL","TIJERAS"],color:"green"},{name:"FENOMENOS ELECTRICOS",words:["CORRIENTE","VOLTAJE","RESISTENCIA","POTENCIA"],color:"blue"},{name:"PALABRAS CON PREFIJO SUB",words:["SUBTERRANEO","SUBMARINO","SUBURBANO","SUBTITULO"],color:"purple"}]},
{id:"puzzle-174",categories:[{name:"ANIMALES DE CORAL",words:["PEZ PAYASO","PEZ ANGEL","CABALLITO","ANEMONA"],color:"yellow"},{name:"TIPOS DE TORTA",words:["BIZCOCHO","QUEQUE","PASTEL","TARTA"],color:"green"},{name:"TEORIAS PSICOLOGICAS",words:["CONDUCTISMO","COGNITIVISMO","PSICOANALISIS","HUMANISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO PRE",words:["PREHISTORIA","PREVIO","PREDECIR","PREPARAR"],color:"purple"}]},
{id:"puzzle-175",categories:[{name:"MATERIALES DE OFICINA",words:["PAPEL","BOLIGRAFO","CLIP","GRAPA"],color:"yellow"},{name:"TIPOS DE CHOCOLATE",words:["NEGRO","LECHE","BLANCO","RUBI"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","TRAUMATOLOGIA"],color:"blue"},{name:"PALABRAS DE TRES LETRAS",words:[
          "SOL",
          "MAR",
          "LUZ",
          "PAN"
        ],color:"purple"}]},
{id:"puzzle-176",categories:[{name:"ESPECIES DE CACTUS",words:["SAGUARO","NOPAL","BIZNAGA","OREJA"],color:"yellow"},{name:"PARTES DEL ZAPATO",words:["SUELA","TACON","CORDON","LENGUETA"],color:"green"},{name:"PROCESOS QUIMICOS",words:["OXIDACION","REDUCCION","HIDROLISIS","COMBUSTION"],color:"blue"},{name:"PALABRAS CON PREFIJO SUPER",words:["SUPERMERCADO","SUPERFICIE","SUPERHUMANO","SUPERPOTENCIA"],color:"purple"}]},
{id:"puzzle-177",categories:[{name:"ANIMALES DE NIEVE",words:["PINGÜINO","FOCA","OSO POLAR","MOFETA"],color:"yellow"},{name:"TIPOS DE CEPILLO",words:["DIENTES","PELO","ROPA","ZAPATOS"],color:"green"},{name:"DISCIPLINAS DE LA HISTORIA",words:["PREHISTORIA","EDAD ANTIGUA","EDAD MEDIA","EDAD MODERNA"],color:"blue"},{name:"PALABRAS CON DOBLE S",words:["PASEO","MASA","CASA","PISO"],color:"purple"}]},
{id:"puzzle-178",categories:[{name:"ELEMENTOS DE LA TABLA",words:["ORO","PLATA","COBRE","HIERRO"],color:"yellow"},{name:"TIPOS DE CORTINA",words:["ESTORES","VISILLO","PERSIANA","CORTINON"],color:"green"},{name:"TEORIAS ECONOMICAS",words:["CAPITALISMO","SOCIALISMO","COMUNISMO","KEYNESIANISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO DES",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"purple"}]},
{id:"puzzle-179",categories:[{name:"ESPECIES DE SETAS",words:["CHAMPIÑON","TRUFA","BOLETUS","NÍSCALO"],color:"yellow"},{name:"PARTES DEL RELOJ",words:["MANECILLA","ESFERA","CORONA","PULSERA"],color:"green"},{name:"RAMAS DE LA GEOGRAFIA",words:["FISICA","HUMANA","POLITICA","ECONOMICA"],color:"blue"},{name:"PALABRAS DE SEIS LETRAS",words:["CAMINO","PLANTA","PUERTA","JARDIN"],color:"purple"}]},
{id:"puzzle-180",categories:[{name:"ANIMALES DE LA MONTAÑA",words:["CABRA","BUITRE","GAMUZA","MARMOTA"],color:"yellow"},{name:"TIPOS DE LLAVERO",words:["ARGOLIA","CADENA","COLGANTE","MOSQUETON"],color:"green"},{name:"FENOMENOS BIOLOGICOS",words:["FOTOSINTESIS","RESPIRACION","DIGESTION","CIRCULACION"],color:"blue"},{name:"PALABRAS CON 7 LETRAS",words:["ESTRELLA","PLANETA","SATELITE","COMETA"],color:"purple"}]},
{id:"puzzle-181",categories:[{name:"MATERIALES DE JOYERIA",words:["DIAMANTE","ESMERALDA","RUBI","ZAFIRO"],color:"yellow"},{name:"TIPOS DE ALMOHADA",words:["VISCOELASTICA","PLUMAS","LATEX","FIBRA"],color:"green"},{name:"DISCIPLINAS MATEMATICAS",words:["ALGEBRA","GEOMETRIA","CALCULO","ESTADISTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO INTER",words:["INTERNACIONAL","INTERACTIVO","INTERMEDIO","INTERRUPTOR"],color:"purple"}]},
{id:"puzzle-182",categories:[{name:"ESPECIES DE ORQUIDEA",words:["PHALAENOPSIS","DENDROBIUM","CATLEYA","ONDIDIUM"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","ESPATULA","RODILLO","LIJADORA"],color:"green"},{name:"PROCESOS DE SEPARACION",words:["FILTRACION","DESTILACION","DECANTACION","CENTRIFUGACION"],color:"blue"},{name:"PALABRAS DE OCHO LETRAS",words:["CIRCULAR","CUADRADO","HEXAGONO","OCTOGONO"],color:"purple"}]},
{id:"puzzle-183",categories:[{name:"ANIMALES DEL POLO",words:["OSO POLAR","PINGÜINO","FOCA","BELUGA"],color:"yellow"},{name:"TIPOS DE BOTELLA",words:["VIDRIO","PLASTICO","ALUMINIO","RETORNABLE"],color:"green"},{name:"RAMAS DE LA ASTRONOMIA",words:["COSMOLOGIA","ASTROFISICA","PLANETOLOGIA","RADIOASTRONOMIA"],color:"blue"},{name:"PALABRAS DE DIEZ LETRAS",words:["BIBLIOTECA","ZANAHORIAS","CAMPANARIO","MANDARINAS"],color:"purple"}]},
{id:"puzzle-184",categories:[{name:"ESPECIES DE AVE",words:["GORRION","PALOMA","GOLONDRINA","JILGUERO"],color:"yellow"},{name:"ELEMENTOS DE SEGURIDAD",words:["CASCO","ARNES","GUANTES","BOTAS"],color:"green"},{name:"TEORIAS DEL APRENDIZAJE",words:["CONSTRUCTIVISMO","CONECTIVISMO","CONDUCTISMO","COGNITIVISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO MENTE",words:["RAPIDAMENTE","LENTAMENTE","SUAVEMENTE","FUERTEMENTE"],color:"purple"}]},
{id:"puzzle-185",categories:[{name:"MATERIALES DE DEPORTE",words:["PELOTA","RAQUETA","RED","CANASTA"],color:"yellow"},{name:"TIPOS DE COLCHON",words:["MUELLES","ESPUMA","LATEX","HIDRICO"],color:"green"},{name:"FENOMENOS SOCIALES",words:["MIGRACION","URBANIZACION","GLOBALIZACION","DESIGUALDAD"],color:"blue"},{name:"PALABRAS CON PREFIJO BI",words:["BILINGUE","BICOLOR","BIPOLAR","BIDIRECCIONAL"],color:"purple"}]},
{id:"puzzle-186",categories:[{name:"ESPECIES DE PEZ",words:["SALMON","ATUN","MERLUZA","BACALAO"],color:"yellow"},{name:"PARTES DE LA BICICLETA",words:["RUEDA","MANILLAR","SILLIN","PEDAL"],color:"green"},{name:"RAMAS DE LA QUIMICA",words:["ORGANICA","INORGANICA","ANALITICA","FISICOQUIMICA"],color:"blue"},{name:"PALABRAS CON SUFIJO CIÓN",words:["NAVEGACION","COMUNICACION","INVESTIGACION","TRADUCCION"],color:"purple"}]},
{id:"puzzle-187",categories:[{name:"ANIMALES DEL ESTANQUE",words:["RANA","SAPO","TRITON","SALAMANDRA"],color:"yellow"},{name:"TIPOS DE MESA",words:["ESCRITORIO","COMEDOR","NOCHE","PICNIC"],color:"green"},{name:"PROCESOS METEOROLOGICOS",words:["EVAPORACION","CONDENSACION","PRECIPITACION","SUBLIMACION"],color:"blue"},{name:"PALABRAS CON SUFIJO DAD",words:["LIBERTAD","BONDAD","MALDAD","HERMANDAD"],color:"purple"}]},
{id:"puzzle-188",categories:[{name:"MATERIALES AISLANTES",words:["GOMA","PLASTICO","MADERA","VIDRIO"],color:"yellow"},{name:"TIPOS DE LAMPARA",words:["MESA","TECHO","PIE","PARED"],color:"green"},{name:"DISCIPLINAS DE LA SALUD",words:["NUTRICION","FISIOTERAPIA","ENFERMERIA","FARMACIA"],color:"blue"},{name:"PALABRAS CON SUFIJO EZA",words:["BELLEZA","RIQUEZA","POBREZA","ALTIVEZ"],color:"purple"}]},
{id:"puzzle-189",categories:[{name:"ESPECIES DE MARIPOSA",words:["MONARCA","VANESSA","MORFO","PAPILIO"],color:"yellow"},{name:"UTILES DE JARDINERIA",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"TEORIAS DE LA PERSONALIDAD",words:["PSICOANALISIS","HUMANISMO","RASGOS","BIG FIVE"],color:"blue"},{name:"PALABRAS CON SUFIJO ISMO",words:["REALISMO","IDEALISMO","OPTIMISMO","PATRIOTISMO"],color:"purple"}]},
{id:"puzzle-190",categories:[{name:"ANIMALES DE LA TUNDRA",words:["RENO","LIEBRE","ZORRO","BUEY"],color:"yellow"},{name:"TIPOS DE ESCRITORIO",words:["ORDENADOR","MESA","SILLA","ARCHIVADOR"],color:"green"},{name:"FENOMENOS ELECTROMAGNETICOS",words:["ELECTRICIDAD","MAGNETISMO","ONDAS","RADIACION"],color:"blue"},{name:"PALABRAS CON SUFIJO ERIA",words:["LLOVERIA","PEDRERIA","POLVERIA","HUMERIA"],color:"purple"}]},
{id:"puzzle-191",categories:[{name:"MATERIALES CONDUCTORES",words:["COBRE","ALUMINIO","ORO","PLATA"],color:"yellow"},{name:"PARTES DE LA FLOR",words:["PETALO","SEPALO","ESTAMBRE","PISTILO"],color:"green"},{name:"RAMAS DE LA LINGÜISTICA",words:["FONETICA","SINTAXIS","SEMANTICA","MORFOLOGIA"],color:"blue"},{name:"PALABRAS CON SUFIERO AZGO",words:["HALLAZGO","APRENDIZAJE","PASAJE","ROPAJE"],color:"purple"}]},
{id:"puzzle-192",categories:[{name:"ESPECIES DE HORMIGA",words:["OBRERA","GUERRERA","REINA","VOLADORA"],color:"yellow"},{name:"TIPOS DE SAPO",words:["COMUN","VERDE","MARINO","CORNUDO"],color:"green"},{name:"PROCESOS BIOLOGICOS",words:["MITOSIS","MEIOSIS","GEMACION","REGENERACION"],color:"blue"},{name:"PALABRAS CON SUFIJO ANZA",words:["CONFIANZA","ESPERANZA","VENGANZA","TARDANZA"],color:"purple"}]},
{id:"puzzle-193",categories:[{name:"ANIMALES DE CAZA",words:["HALCON","AGUILA","AZOR","CERNICALO"],color:"yellow"},{name:"UTILES DE LIMPIEZA",words:["ESCOBA","FREGONA","BALDE","PAÑO"],color:"green"},{name:"DISCIPLINAS DEL DEPORTE",words:["FISIOLOGIA","BIOMECANICA","PSICOLOGIA","NUTRICION"],color:"blue"},{name:"PALABRAS CON SUFIJO URA",words:["ALTURA","LECTURA","ESCRITURA","MORDEDURA"],color:"purple"}]},
{id:"puzzle-194",categories:[{name:"MATERIALES DE ACAMPADA",words:["TIENDA","SACO","ESTERILLA","LINIERNA"],color:"yellow"},{name:"TIPOS DE CANDADO",words:["NUMERICO","LLAVE","COMBINACION","BIOMETRICO"],color:"green"},{name:"TEORIAS DE LA MOTIVACION",words:["MASLOW","HERZBERG","DECI","LOCKE"],color:"blue"},{name:"PALABRAS CON SUFIJO LOGO",words:["BIOLOGO","GEOLOGO","PSICOLOGO","ANTROPOLOGO"],color:"purple"}]},
{id:"puzzle-195",categories:[{name:"ESPECIES DE ABEJA",words:["OBRERA","ZANGANO","REINA","MELIPONA"],color:"yellow"},{name:"PARTES DE LA GUITARRA",words:["CUERPO","MASTIL","TRASTES","CUERDAS"],color:"green"},{name:"FENOMENOS OCEANICOS",words:["OLAS","MAREAS","CORRIENTES","ABISMOS"],color:"blue"},{name:"PALABRAS CON SUFIJO TECNIA",words:["PIROTECNIA","ELECTROTECNIA","MECANOTECNIA","BIBLIOTECNIA"],color:"purple"}]},
{id:"puzzle-196",categories:[{name:"ANIMALES DEL ARRECIFE",words:["CABALLITO","PEZ PAYASO","ANGUILA","MERLUZA"],color:"yellow"},{name:"TIPOS DE SILLA",words:["PLEGABLE","GIRATORIA","TUMBONA","MEEDORA"],color:"green"},{name:"RAMAS DE LA PALEONTOLOGIA",words:["PALEOBOTANICA","PALEOZOOLOGIA","PALEOECOLOGIA","TAPONOMIA"],color:"blue"},{name:"PALABRAS CON SUFIJO FICO",words:["CIENTIFICO","ARTISTICO","ACADEMICO","ECONOMICO"],color:"purple"}]},
{id:"puzzle-197",categories:[{name:"MATERIALES DE DIBUJO",words:["CARBONCILLO","SANGUINA","SEPIA","CLARION"],color:"yellow"},{name:"UTILES DE MECANICA",words:["LLAVE","DESTORNILLADOR","ALICATE","MARTILLO"],color:"green"},{name:"PROCESOS GEOLOGICOS",words:["PLIEGUE","FALLA","DIACLASA","FRACTURA"],color:"blue"},{name:"PALABRAS CON SUFIJO SCOPO",words:["MICROSCOPIO","TELESCOPIO","ESTETOSCOPIO","PERISCOPIO"],color:"purple"}]},
{id:"puzzle-198",categories:[{name:"ESPECIES DE LAGARTIJA",words:["SALAMANQUESA","GECKO","ANOLIS","ESLIZON"],color:"yellow"},{name:"TIPOS DE VENTANA",words:["BATIENTE","CORREDERA","GUILOTINA","FIJA"],color:"green"},{name:"DISCIPLINAS DE LA TIERRA",words:["GEOLOGIA","METEOROLOGIA","OCEANOGRAFIA","SISMOLOGIA"],color:"blue"},{name:"PALABRAS CON SUFIJO GRAFO",words:["GEOGRAFO","BIOGRAFO","FOTOGRAFO","CALIGRAFO"],color:"purple"}]},
{id:"puzzle-199",categories:[{name:"ANIMALES DE LA PRADERA",words:["BISONTE","COYOTE","PERRO","TORTUGA"],color:"yellow"},{name:"PARTES DE LA LAVADORA",words:["TAMBOR","PANEL","MANGUERA","FILTRO"],color:"green"},{name:"FENOMENOS METEOROLOGICOS",words:["TORMENTA","HURACAN","MONZON","CICLON"],color:"blue"},{name:"PALABRAS CON SUFIJO METRO",words:["TERMOMETRO","VELOCIMETRO","ALTIMETRO","BAROMETRO"],color:"purple"}]},
{id:"puzzle-200",categories:[{name:"MATERIALES RECICLADOS",words:["CARTON","PLASTICO","VIDRIO","ALUMINIO"],color:"yellow"},{name:"TIPOS DE CORREA",words:["CUERO","TELA","GOMA","CADENA"],color:"green"},{name:"TEORIAS DEL UNIVERSO",words:["INFLACION","CUERDAS","MULTIVERSO","CICLICO"],color:"blue"},{name:"PALABRAS CON SUFIJO MANCIA",words:["ADIVINANZA","CLARIVIDENCIA","VIDENCIA","PRESCIENCIA"],color:"purple"}]},
{id:"puzzle-201",categories:[{name:"ESPECIES DE AVES",words:["AGUILA","HALCON","BUITRE","LECHUZA"],color:"yellow"},{name:"TIPOS DE PASTA",words:["SPAGHETTI","FETTUCCINE","PENNE","LASAGNA"],color:"green"},{name:"CAPAS DE LA TIERRA",words:["CORTEZA","MANTO","NUCLEO","LITOSFERA"],color:"blue"},{name:"PALABRAS CON PREFIJO CO",words:["COEXISTIR","COOPERAR","COORDINAR","COAUTOR"],color:"purple"}]},
{id:"puzzle-202",categories:[{name:"ANIMALES DE ASIA",words:["PANDA","TIGRE","ELEFANTE","ORANGUTAN"],color:"yellow"},{name:"UTENSILIOS DE COCINA",words:["COLADOR","RALLADOR","PELADOR","BATIDOR"],color:"green"},{name:"MOVIMIENTOS LITERARIOS",words:["MODERNISMO","VANGUARDISMO","REALISMO","ROMANTICISMO"],color:"blue"},{name:"PALABRAS CON 3 SILABAS",words:["CAMISA","ZAPATO","VENTANA","JARDIN"],color:"purple"}]},
{id:"puzzle-203",categories:[{name:"TIPOS DE NIEVE",words:["POLVO","HUMEDA","COMPACTA","GRANIZO"],color:"yellow"},{name:"MARCAS DE BEBIDAS",words:["COCA-COLA","PEPSI","SPRITE","FANTA"],color:"green"},{name:"TEORIAS ECONOMICAS",words:["OFERTA","DEMANDA","MERCADO","MONOPOLIO"],color:"blue"},{name:"PALABRAS CON SUFIJO TOR",words:["CANTOR","ACTOR","BAILADOR","TRABAJADOR"],color:"purple"}]},
{id:"puzzle-204",categories:[{name:"DEPORTES DE CONTACTO",words:["BOXEO","KARATE","JUDO","MMA"],color:"yellow"},{name:"ELEMENTOS DE COCINA",words:["ENCIMERA","HORNO","MICROONDAS","LAVAVAJILLAS"],color:"green"},{name:"CICLOS DE LA NATURALEZA",words:["NACER","CRECER","REPRODUCIR","MORIR"],color:"blue"},{name:"PALABRAS CON PREFIJO EN",words:["ENMARCAR","ENVOLVER","ENFRIAR","ENGAÑAR"],color:"purple"}]},
{id:"puzzle-205",categories:[{name:"ANIMALES DE MADAGASCAR",words:["LEMUR","CAMALEON","FOSA","GECKO"],color:"yellow"},{name:"TIPOS DE PASTEL",words:["CHOCOLATE","MANZANA","QUESO","ZANAHORIA"],color:"green"},{name:"ESTRUCTURAS GEOLOGICAS",words:["MONTAÑA","VALLE","MESETA","LLANURA"],color:"blue"},{name:"PALABRAS CON DOBLE N",words:["INNOVAR","INNATO","INNECESARIO","INNUMERABLE"],color:"purple"}]},
{id:"puzzle-206",categories:[{name:"MARCAS DE COSMETICOS",words:["MAC","NYX","MAYBELLINE","LOREAL"],color:"yellow"},{name:"RIOS DE ASIA",words:["GANGES","YANGTSE","MEKONG","LENA"],color:"green"},{name:"RITMOS DE BAILE",words:["SALSA","BACHATA","MERENGUE","CUMBIA"],color:"blue"},{name:"PALABRAS CON PREFIJO AD",words:["ADHERIR","ADJUNTAR","ADMITIR","ADOPTAR"],color:"purple"}]},
{id:"puzzle-207",categories:[{name:"ANIMALES DE AUSTRALIA",words:["CANGURO","KOALA","WOMBAT","ORNITORRINCO"],color:"yellow"},{name:"HERRAMIENTAS DE MEDICION",words:["CINTA METRICA","CALIBRE","MICROMETRO","NIVEL"],color:"green"},{name:"MOVIMIENTOS DE DANZA",words:["PASO","GIRO","SALTO","DESPLAZAMIENTO"],color:"blue"},{name:"PALABRAS CON SUFIJO ANTE",words:["ESTUDIANTE","CANTANTE","VIAJANTE","TRABAJANTE"],color:"purple"}]},
{id:"puzzle-208",categories:[{name:"ESPECIES DE PINO",words:["ABETO","ALERCE","CEDRO","PINO"],color:"yellow"},{name:"TIPOS DE SANDWICH",words:["CLUB","SUBMARINO","HAMBURGUESA","PEPITO"],color:"green"},{name:"FENOMENOS OCEANICOS",words:["OLAS","MAREAS","CORRIENTES","RESACA"],color:"blue"},{name:"PALABRAS CON PREFIJO AB",words:["ABNEGAR","ABSTENER","ABRIR","ABSOLVER"],color:"purple"}]},
{id:"puzzle-209",categories:[{name:"ANIMALES DE LA NOCHE",words:["BUHO","MURCIELAGO","LUCIERNAGA","ZORRO"],color:"yellow"},{name:"PARTES DE LA SILLA",words:["PATAS","RESPALDO","ASIENTO","BRAZOS"],color:"green"},{name:"RAMAS DE LA CIENCIA",words:["BIOLOGIA","QUIMICA","FISICA","ASTRONOMIA"],color:"blue"},{name:"PALABRAS CON PREFIJO CON",words:["CONSTRUIR","CONECTAR","CONVIVIR","CONCORDAR"],color:"purple"}]},
{id:"puzzle-210",categories:[{name:"ESPECIES DE CACTUS",words:["SAGUARO","NOPAL","BIZNAGA","AGAVE"],color:"yellow"},{name:"TIPOS DE TECLADO",words:["MEMBRANA","MECANICO","INALAMBRICO","ERGONOMICO"],color:"green"},{name:"PROCESOS COGNITIVOS",words:["MEMORIA","ATENCION","LENGUAJE","PERCEPCION"],color:"blue"},{name:"PALABRAS CON PREFIJO PRO",words:["PROYECTAR","PROPONER","PROSEGUIR","PROVOCAR"],color:"purple"}]},
{id:"puzzle-211",categories:[{name:"ANIMALES DE LA INDIA",words:["ELEFANTE","TIGRE","PAVO REAL","COBRA"],color:"yellow"},{name:"UTILES DE PESCA",words:["CAÑA","ANZUELO","RED","CARNADA"],color:"green"},{name:"ESTILOS TEATRALES",words:["TRAGEDIA","COMEDIA","DRAMA","MUSICAL"],color:"blue"},{name:"PALABRAS CON PREFIJO SUB",words:["SUBTERRANEO","SUBMARINO","SUBTITULO","SUBURBANO"],color:"purple"}]},
{id:"puzzle-212",categories:[{name:"MONTAÑAS DE AMERICA",words:["ACONCAGUA","DENALI","MCKINLEY","PICO DE ORIZABA"],color:"yellow"},{name:"TIPOS DE ENERGIA",words:["SOLAR","EOLICA","HIDROELECTRICA","GEOTERMICA"],color:"green"},{name:"COLORES PASTEL",words:["ROSADO","CELESTE","LILA","MELON"],color:"blue"},{name:"PALABRAS CON SUFIJO OSO",words:["AMOROSO","PELIGROSO","MARAVILLOSO","CUIDADOSO"],color:"purple"}]},
{id:"puzzle-213",categories:[{name:"ANIMALES DEL RIO",words:["CAIMAN","NUTRIA","CARPA","RANA"],color:"yellow"},{name:"MATERIALES DE ARTE",words:["OLEO","ACUARELA","ACRILICO","CARBONCILLO"],color:"green"},{name:"MOVIMIENTOS POLITICOS",words:["DEMOCRACIA","MONARQUIA","REPUBLICA","AUTOCRACIA"],color:"blue"},{name:"PALABRAS CON PREFIJO TRANS",words:["TRANSFORMAR","TRANSPORTAR","TRANSFERIR","TRANSMITIR"],color:"purple"}]},
{id:"puzzle-214",categories:[{name:"VOLCANES DE AMERICA",words:["POPOCATEPETL","ARENAL","KILAUEA","COTOPAXI"],color:"yellow"},{name:"TIPOS DE BOTAS",words:["VAQUERAS","LLUVIA","MONTAÑA","MILITAR"],color:"green"},{name:"DISCIPLINAS ACADEMICAS",words:["FILOSOFIA","SOCIOLOGIA","ANTROPOLOGIA","PSICOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO INTER",words:["INTERNACIONAL","INTERACTIVO","INTERMEDIO","INTERRUPTOR"],color:"purple"}]},
{id:"puzzle-215",categories:[{name:"ANIMALES DE LAJA",words:["MANTARRAYA","PEZ GLOBO","CABALLITO","ANEMONA"],color:"yellow"},{name:"PARTES DE LA CAMA",words:["COLCHON","ALMOHADA","SABANA","COBIJA"],color:"green"},{name:"ESTACIONES DEL TREN",words:["ANDEN","VIAS","MAQUINISTA","VAGON"],color:"blue"},{name:"PALABRAS CON SUFIJO IZAR",words:["REALIZAR","MODERNIZAR","UTILIZAR","CIVILIZAR"],color:"purple"}]},
{id:"puzzle-216",categories:[{name:"MARCAS DE LAPTOP",words:["DELL","HP","LENOVO","ASUS"],color:"yellow"},{name:"ESPECIES DE BALLENA",words:["AZUL","JOROBADA","FRANCA","ASESINA"],color:"green"},{name:"FORMAS DE RELIEVE",words:["CORDILLERA","MESETA","LLANURA","DEPRESION"],color:"blue"},{name:"PALABRAS CON PREFIJO EX",words:["EXPRESIDENTE","EXMARIDO","EXCOMPAÑERO","EXALUMNO"],color:"purple"}]},
{id:"puzzle-217",categories:[{name:"ANIMALES CAZADORES",words:["LOBO","HALCON","GUEPARDO","TIBURON"],color:"yellow"},{name:"TIPOS DE TOMATE",words:["CHERRY","RALA","PERA","ROMA"],color:"green"},{name:"ESCUELAS DE PENSAMIENTO",words:["ESTOICISMO","EPICUREISMO","PLATONISMO","ARISTOTELISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO OR",words:["AMOR","DOLOR","CALOR","COLOR"],color:"purple"}]},
{id:"puzzle-218",categories:[{name:"ESPECIES DE TIBURON",words:["BLANCO","MARTILLO","TORO","TIGRE"],color:"yellow"},{name:"PARTES DE LA MESA",words:["PATAS","TABLERO","CAJON","BORDE"],color:"green"},{name:"TEORIAS DE LA EVOLUCION",words:["SELECCION NATURAL","MUTACION","DERIVA","ADAPTACION"],color:"blue"},{name:"PALABRAS CON PREFIJO IN",words:["INVISIBLE","INCREIBLE","INEXPLICABLE","INCOMPLETO"],color:"purple"}]},
{id:"puzzle-219",categories:[{name:"AVES DE AMERICA",words:["CONDOR","QUETZAL","GUACAMAYA","TUCAN"],color:"yellow"},{name:"TIPOS DE ARROZ",words:["BLANCO","INTEGRAL","BASMATI","JAZMIN"],color:"green"},{name:"PROCESOS ATMOSFERICOS",words:["EVAPORACION","CONDENSACION","PRECIPITACION","SUBLIMACION"],color:"blue"},{name:"PALABRAS CON SUFIJO NTE",words:["AMABLE","COMBATIENTE","CONSTANTE","ELEGANTE"],color:"purple"}]},
{id:"puzzle-220",categories:[{name:"ANIMALES DEL JARDIN",words:["CARACOL","LOMBRIZ","MARIQUITA","HORMIGA"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","LIENZO","CABALLETE","ESPATULA"],color:"green"},{name:"RAMAS DE LA INGENIERIA",words:["CIVIL","MECANICA","ELECTRICA","QUIMICA"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTI",words:["ANTISOCIAL","ANTIBIOTICO","ANTIGRAVEDAD","ANTINATURAL"],color:"purple"}]},
{id:"puzzle-221",categories:[{name:"MARCAS DE ZAPATOS",words:["NIKE","ADIDAS","PUMA","NEW BALANCE"],color:"yellow"},{name:"ESPECIES DE ARBOL",words:["ROBLE","ENCINA","ALCORNOCUE","QUEJIGO"],color:"green"},{name:"FENOMENOS CELESTES",words:["ECLIPSE","SOLSTICIO","EQUINOCCIO","COMETA"],color:"blue"},{name:"PALABRAS CON PREFIJO BI",words:["BILINGUE","BICOLOR","BIPOLAR","BIDIRECCIONAL"],color:"purple"}]},
{id:"puzzle-222",categories:[{name:"ANIMALES HERBIVOROS",words:["VACA","CABALLO","ELEFANTE","JIRAFA"],color:"yellow"},{name:"TIPOS DE TAZA",words:["CAFE","TE","CHOCOLATE","SOPA"],color:"green"},{name:"ESCUELAS DE PSICOLOGIA",words:["CONDUCTISMO","COGNITIVISMO","HUMANISMO","PSICOANALISIS"],color:"blue"},{name:"PALABRAS CON PREFIJO PRE",words:["PREHISTORIA","PREESCOLAR","PREVIO","PREPAGO"],color:"purple"}]},
{id:"puzzle-223",categories:[{name:"AVES DEL BOSQUE",words:["CARPINTERO","PETIRROJO","RUISEÑOR","URACA"],color:"yellow"},{name:"PARTES DE LA PUERTA",words:["MANIJA","BISAGRA","CERROJO","MARCO"],color:"green"},{name:"TEORIAS DE LA LUZ",words:["REFLEXION","REFRACCION","DIFRACCION","POLARIZACION"],color:"blue"},{name:"PALABRAS CON SUFIJO ADO",words:["AMADO","CANSADO","DORMIDO","HERIDO"],color:"purple"}]},
{id:"puzzle-224",categories:[{name:"MARCAS DE RELOJES",words:["ROLEX","OMEGA","CASIO","SEIKO"],color:"yellow"},{name:"ESPECIES DE RANA",words:["DORADA","VERDE","ARBOL","TORTUGA"],color:"green"},{name:"MOVIMIENTOS CULTURALES",words:["RENACIMIENTO","ILUSTRACION","REFORMA","CONTRARREFORMA"],color:"blue"},{name:"PALABRAS CON PREFIJO SUPER",words:["SUPERMERCADO","SUPERFICIE","SUPERHUMANO","SUPERPOTENCIA"],color:"purple"}]},
{id:"puzzle-225",categories:[{name:"ANIMALES DE LA PRADERA",words:["BISONTE","COYOTE","PRADERA","PERRO"],color:"yellow"},{name:"TIPOS DE VASO",words:["AGUA","VINO","COCTEL","CERVEZA"],color:"green"},{name:"ESTRUCTURAS MITOLOGICAS",words:["OLIMPO","TARTARO","ELISIOS","HADES"],color:"blue"},{name:"PALABRAS CON PREFIJO DES",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"purple"}]},
{id:"puzzle-226",categories:[{name:"MARCAS DE GASEOSA",words:["COCA-COLA","PEPSI","SEVEN UP","CANADA DRY"],color:"yellow"},{name:"PARTES DE LA LAMPARA",words:["BOMBILLA","PANTALLA","BASE","CABLE"],color:"green"},{name:"CORRIENTES FILOSOFICAS",words:["EMPIRISMO","RACIONALISMO","IDEALISMO","MATERIALISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO AJE",words:["APRENDIZAJE","PASAJE","ROPAJE","LANZAJE"],color:"purple"}]},
{id:"puzzle-227",categories:[{name:"ESPECIES DE LAGARTIJA",words:["GECKO","ANOLIS","CAMALEON","SALAMANQUESA"],color:"yellow"},{name:"UTILES DE JARDIN",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","DERMATOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO MONO",words:["MONOTONO","MONOPOLIO","MONOCULO","MONOGAMIA"],color:"purple"}]},
{id:"puzzle-228",categories:[{name:"ANIMALES ACORAZADOS",words:["TORTUGA","ARMADILLO","CANGREJO","CARACOL"],color:"yellow"},{name:"TIPOS DE CORTINA",words:["ESTORES","VISILLO","PERSIANA","CORTINON"],color:"green"},{name:"PROCESOS INDUSTRIALES",words:["FUNDICION","FORJA","LAMINADO","EXTRUSION"],color:"blue"},{name:"PALABRAS CON SUFIJO LOGO",words:["BIOLOGO","GEOLOGO","PSICOLOGO","ANTROPOLOGO"],color:"purple"}]},
{id:"puzzle-229",categories:[{name:"MARCAS DE CERVEZA",words:["CORONA","HEINEKEN","BUDWEISER","MODELO"],color:"yellow"},{name:"PARTES DE LA VENTANA",words:["MARCO","VIDRIO","MANIJA","CERRADURA"],color:"green"},{name:"TEORIAS DEL APRENDIZAJE",words:["CONSTRUCTIVISMO","CONECTIVISMO","CONDUCTISMO","COGNITIVISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO HIPER",words:["HIPERMERCADO","HIPERTENSION","HIPERSENSIBLE","HIPERACTIVO"],color:"purple"}]},
{id:"puzzle-230",categories:[{name:"ESPECIES DE SERPIENTE",words:["BOA","COBRA","CORAL","CASCABEL"],color:"yellow"},{name:"UTILES DE COSTURA",words:["AGUJA","HILO","DEDAL","TIJERAS"],color:"green"},{name:"MOVIMIENTOS SOCIALES",words:["FEMINISMO","ECOLOGISMO","PACIFISMO","INDIGENISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO METRO",words:["TERMOMETRO","VELOCIMETRO","ALTIMETRO","BAROMETRO"],color:"purple"}]},
{id:"puzzle-231",categories:[{name:"ANIMALES DE AFRICA",words:["LEON","ELEFANTE","JIRAFA","CEBRA"],color:"yellow"},{name:"TIPOS DE BOLIGRAFO",words:["BOLI","PLUMA","RODILLO","GEL"],color:"green"},{name:"ESTRATEGIAS DE NEGOCIO",words:["MARKETING","VENTAS","LOGISTICA","INNOVACION"],color:"blue"},{name:"PALABRAS CON PREFIJO MICRO",words:["MICROSCOPIO","MICROONDAS","MICROCHIP","MICROFONO"],color:"purple"}]},
{id:"puzzle-232",categories:[{name:"PAJAROS CANTORES",words:["CANARIO","RUISEÑOR","JILGUERO","CALANDRA"],color:"yellow"},{name:"PARTES DE LA BICICLETA",words:["RUEDA","MANILLAR","SILLIN","PEDAL"],color:"green"},{name:"RAMAS DE LA GEOGRAFIA",words:["FISICA","HUMANA","POLITICA","ECONOMICA"],color:"blue"},{name:"PALABRAS CON SUFIJO LOGIA",words:["BIOLOGIA","GEOLOGIA","PSICOLOGIA","ANTROPOLOGIA"],color:"purple"}]},
{id:"puzzle-233",categories:[{name:"MARCAS DE TELEFONO",words:["IPHONE","SAMSUNG","XIAOMI","HUAWEI"],color:"yellow"},{name:"ESPECIES DE MARIPOSA",words:["MONARCA","VANESSA","MORFO","PAPILIO"],color:"green"},{name:"FENOMENOS SOCIALES",words:["MIGRACION","URBANIZACION","GLOBALIZACION","DESIGUALDAD"],color:"blue"},{name:"PALABRAS CON PREFIJO MULTI",words:["MULTICOLOR","MULTINACIONAL","MULTIMEDIA","MULTIUSO"],color:"purple"}]},
{id:"puzzle-234",categories:[{name:"ANIMALES DEL DESIERTO",words:["CAMELO","ESCORPION","RATON","SERPIENTE"],color:"yellow"},{name:"TIPOS DE ALMOHADA",words:["VISCOELASTICA","PLUMAS","LATEX","FIBRA"],color:"green"},{name:"TEORIAS DEL ORIGEN",words:["BIG BANG","CREACIONISMO","EVOLUCION","PANSERMIA"],color:"blue"},{name:"PALABRAS CON SUFIJO SCOPO",words:["MICROSCOPIO","TELESCOPIO","ESTETOSCOPIO","PERISCOPIO"],color:"purple"}]},
{id:"puzzle-235",categories:[{name:"AVES RAPACES NOCTURNAS",words:["BUHO","LECHUZA","AUTILLO","CÁRABO"],color:"yellow"},{name:"PARTES DE LA COCINA",words:["ENCHUFE","GRIFO","FREGADERO","ENCTIMERA"],color:"green"},{name:"DISCIPLINAS DEPORTIVAS",words:["ATLETISMO","GIMNASIA","HALTEROFILIA","LUCHA"],color:"blue"},{name:"PALABRAS CON PREFIJO SEMI",words:["SEMICIRCULO","SEMIFINAL","SEMIDIOS","SEMIPRESENCIAL"],color:"purple"}]},
{id:"puzzle-236",categories:[{name:"MARCAS DE AUTOS LUAO",words:["FERRARI","LAMBORGHINI","PORSCHE","MASERATI"],color:"yellow"},{name:"ESPECIES DE HORMIGA",words:["OBRERA","GUERRERA","REINA","VOLADORA"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["CUBISMO","DADAISMO","FAUVISMO","SURREALISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO POLI",words:["POLIDEPORTIVO","POLICROMO","POLIFONICO","POLIGONO"],color:"purple"}]},
{id:"puzzle-237",categories:[{name:"ANIMALES DEL BOSQUE",words:["CIERVO","ZORRO","ARDILLA","TEJON"],color:"yellow"},{name:"TIPOS DE MADERA",words:["ROBLE","CAOBA","NOGAL","CEDRO"],color:"green"},{name:"RAMAS DE LA FISICA",words:["MECANICA","TERMODINAMICA","OPTICA","ACUSTICA"],color:"blue"},{name:"PALABRAS CON SUFIJO GRAFO",words:["GEOGRAFO","BIOGRAFO","FOTOGRAFO","CALIGRAFO"],color:"purple"}]},
{id:"puzzle-238",categories:[{name:"MARCAS DE COMPUTADORAS",words:["DELL","HP","LENOVO","ACER"],color:"yellow"},{name:"PARTES DEL RELOJ",words:["MANECILLA","ESFERA","CORONA","PULSERA"],color:"green"},{name:"PROCESOS BIOLOGICOS",words:["MITOSIS","MEIOSIS","GEMACION","REGENERACION"],color:"blue"},{name:"PALABRAS CON PREFIJO ANFI",words:["ANFITEATRO","ANFIBIO","ANFIBOLOGIA","ANFIMACRO"],color:"purple"}]},
{id:"puzzle-239",categories:[{name:"ESPECIES DE MOLUSCO",words:["PULPO","CALAMAR","MEJILLON","ALMEJA"],color:"yellow"},{name:"UTILES DE LIMPIEZA",words:["ESCOBA","FREGONA","BALDE","PAÑO"],color:"green"},{name:"TEORIAS DE LA PERSONALIDAD",words:["PSICOANALISIS","HUMANISMO","RASGOS","BIG FIVE"],color:"blue"},{name:"PALABRAS CON PREFIJO EXTRA",words:["EXTRATERRESTRE","EXTRAORDINARIO","EXTRALARGO","EXTRACTO"],color:"purple"}]},
{id:"puzzle-240",categories:[{name:"ANIMALES DE LA TUNDRA",words:["RENO","LIEBRE","ZORRO","BUEY"],color:"yellow"},{name:"TIPOS DE COLCHON",words:["MUELLES","ESPUMA","LATEX","HIDRICO"],color:"green"},{name:"RAMAS DE LA QUIMICA",words:["ORGANICA","INORGANICA","ANALITICA","FISICOQUIMICA"],color:"blue"},{name:"PALABRAS CON SUFIJO FICO",words:["CIENTIFICO","ARTISTICO","ACADEMICO","ECONOMICO"],color:"purple"}]},
{id:"puzzle-241",categories:[{name:"MARCAS DE CELULAR",words:["SAMSUNG","APPLE","XIAOMI","HUAWEI"],color:"yellow"},{name:"PARTES DE LA FLOR",words:["PETALO","SEPALO","ESTAMBRE","PISTILO"],color:"green"},{name:"FENOMENOS ELECTRICOS",words:["CORRIENTE","VOLTAJE","RESISTENCIA","POTENCIA"],color:"blue"},{name:"PALABRAS CON PREFIJO VICE",words:["VICEPRESIDENTE","VICERRECTOR","VICEALMIRANTE","VICEPREMIER"],color:"purple"}]},
{id:"puzzle-242",categories:[{name:"AVES DEL POLO",words:["PINGÜINO","GAVIOTA","ALBATROS","GANSO"],color:"yellow"},{name:"TIPOS DE LLAVE",words:["INGLESA","FIJA","ALLEN","TORX"],color:"green"},{name:"MOVIMIENTOS DE LA TIERRA",words:["ROTACION","TRASLACION","PRECESION","NUTACION"],color:"blue"},{name:"PALABRAS CON SUFIJO AZO",words:["PORTAZO","GOLPAZO","MANOTAZO","PISOTON"],color:"purple"}]},
{id:"puzzle-243",categories:[{name:"ANIMALES AMAZONICOS",words:["ANACONDA","DORADO","PAICHE","PIRANHA"],color:"yellow"},{name:"PARTES DE LA GUITARRA",words:["CUERPO","MASTIL","TRASTES","CUERDAS"],color:"green"},{name:"PROCESOS GEOLOGICOS",words:["PLIEGUE","FALLA","DIACLASA","FRACTURA"],color:"blue"},{name:"PALABRAS CON PREFIJO HEMO",words:["HEMOGLOBINA","HEMORRAGIA","HEMATOMA","HEMODIALISIS"],color:"purple"}]},
{id:"puzzle-244",categories:[{name:"MARCAS DE TELEVISOR",words:["SONY","LG","SAMSUNG","PANASONIC"],color:"yellow"},{name:"ESPECIES DE ABEJA",words:["OBRERA","ZANGANO","REINA","MELIPONA"],color:"green"},{name:"TEORIAS DE LA MOTIVACION",words:["MASLOW","HERZBERG","DECI","LOCKE"],color:"blue"},{name:"PALABRAS CON SUFIJO ERIA",words:["LLOVERIA","PEDRERIA","POLVERIA","HUMERIA"],color:"purple"}]},
{id:"puzzle-245",categories:[{name:"ANIMALES DEL MANGLAR",words:["CANGREJO","GARZA","COCODRILO","IBIS"],color:"yellow"},{name:"TIPOS DE LAMPARA",words:["MESA","TECHO","PIE","PARED"],color:"green"},{name:"RAMAS DE LA LINGÜISTICA",words:["FONETICA","SINTAXIS","SEMANTICA","MORFOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO MINI",words:["MINIATURA","MINIFALDA","MINIMERCADO","MINIBUS"],color:"purple"}]},
{id:"puzzle-246",categories:[{name:"ANIMALES DEL CORAL",words:["PEZ PAYASO","PEZ ANGEL","CABALLITO","ANEMONA"],color:"yellow"},{name:"UTILES DE MECANICA",words:["LLAVE","DESTORNILLADOR","ALICATE","MARTILLO"],color:"green"},{name:"FENOMENOS METEOROLOGICOS",words:["TORMENTA","HURACAN","MONZON","CICLON"],color:"blue"},{name:"PALABRAS CON SUFIJO DAD",words:["LIBERTAD","BONDAD","MALDAD","HERMANDAD"],color:"purple"}]},
{id:"puzzle-247",categories:[{name:"MARCAS DE AUDIFONOS",words:["SONY","BOSE","SENNHEISER","BEATS"],color:"yellow"},{name:"PARTES DE LA LAVADORA",words:["TAMBOR","PANEL","MANGUERA","FILTRO"],color:"green"},{name:"TEORIAS DEL UNIVERSO",words:["INFLACION","CUERDAS","MULTIVERSO","CICLICO"],color:"blue"},{name:"PALABRAS CON SUFIJO URA",words:["ALTURA","LECTURA","ESCRITURA","MORDEDURA"],color:"purple"}]},
{id:"puzzle-248",categories:[{name:"ESPECIES DE HONGO",words:["CHAMPIÑON","TRUFA","BOLETUS","NISCALO"],color:"yellow"},{name:"TIPOS DE ESCRITORIO",words:["ORDENADOR","MESA","SILLA","ARCHIVADOR"],color:"green"},{name:"CORRIENTES PEDAGOGICAS",words:["MONTESSORI","WALDORF","REGIO EMILIA","TRADICIONAL"],color:"blue"},{name:"PALABRAS CON PREFIJO CONTRA",words:["CONTRAATAQUE","CONTRADECIR","CONTRASTAR","CONTRAPESO"],color:"purple"}]},
{id:"puzzle-249",categories:[{name:"ANIMALES DEL LAGO",words:["CISNE","PATO","GARZA","FLAMENCO"],color:"yellow"},{name:"TIPOS DE TELA",words:["ALGODON","LINO","SEDA","LANA"],color:"green"},{name:"RAMAS DE LA ASTRONOMIA",words:["COSMOLOGIA","ASTROFISICA","PLANETOLOGIA","RADIOASTRONOMIA"],color:"blue"},{name:"PALABRAS CON SUFIJO ISMO",words:["REALISMO","IDEALISMO","OPTIMISMO","PATRIOTISMO"],color:"purple"}]},
{id:"puzzle-250",categories:[{name:"MARCAS DE LENTES",words:["RAY-BAN","OAKLEY","PERSOL","POLAROID"],color:"yellow"},{name:"PARTES DE LA BOTA",words:["SUELA","TACON","CORDON","LENGUETA"],color:"green"},{name:"PROCESOS DE SEPARACION",words:["FILTRACION","DESTILACION","DECANTACION","CENTRIFUGACION"],color:"blue"},{name:"PALABRAS CON SUFIJO ANZA",words:["CONFIANZA","ESPERANZA","VENGANZA","TARDANZA"],color:"purple"}]},
{id:"puzzle-251",categories:[{name:"ANIMALES CAVADORES",words:["TOPO","TEJON","ARDILLA","CONEJO"],color:"yellow"},{name:"TIPOS DE CEPILLO",words:["DIENTES","PELO","ROPA","ZAPATOS"],color:"green"},{name:"DISCIPLINAS DE LA HISTORIA",words:["PREHISTORIA","EDAD ANTIGUA","EDAD MEDIA","EDAD MODERNA"],color:"blue"},{name:"PALABRAS CON PREFIJO INTRA",words:["INTRANET","INTRAVENOSO","INTRAMUSCULAR","INTRACELULAR"],color:"purple"}]},
{id:"puzzle-252",categories:[{name:"AVES DE PRESA",words:["AGUILA","HALCON","BUITRE","CERNICALO"],color:"yellow"},{name:"UTILES DE DIBUJO",words:["LAPIZ","CARBONCILLO","PASTEL","TIZA"],color:"green"},{name:"FENOMENOS OCEANICOS",words:["OLAS","MAREAS","CORRIENTES","ABISMOS"],color:"blue"},{name:"PALABRAS CON SUFIJO TECNIA",words:["PIROTECNIA","ELECTROTECNIA","MECANOTECNIA","BIBLIOTECNIA"],color:"purple"}]},
{id:"puzzle-253",categories:[{name:"MARCAS DE JUEGOS",words:["NINTENDO","PLAYSTATION","XBOX","SEGA"],color:"yellow"},{name:"PARTES DEL ZAPATO",words:["SUELA","TACON","CORDON","LENGUETA"],color:"green"},{name:"TEORIAS DE LA PERCEPCION",words:["GESTALT","CONSTRUCTIVISMO","ECOLOGICA","COGNITIVA"],color:"blue"},{name:"PALABRAS CON PREFIJO CIBER",words:["CIBERESPACIO","CIBERSEGURIDAD","CIBERNETICA","CIBERATAQUE"],color:"purple"}]},
{id:"puzzle-254",categories:[{name:"ESPECIES DE PALMERA",words:["COCOTERA","DATILERA","ARECA","KENTIA"],color:"yellow"},{name:"TIPOS DE ESCRITURA",words:["CURSIVA","IMPRENTA","CALIGRAFIA","BRAILLE"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["RENACIMIENTO","BARROCO","IMPRESIONISMO","SURREALISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO CIDA",words:["HOMICIDA","INSECTICIDA","SUICIDA","GENOCIDA"],color:"purple"}]},
{id:"puzzle-255",categories:[{name:"ANIMALES SALTADORES",words:["RANA","CANGURO","GRILLO","PULGA"],color:"yellow"},{name:"PARTES DE LA CARA",words:["OJOS","NARIZ","BOCA","OREJAS"],color:"green"},{name:"RAMAS DE LA PALEONTOLOGIA",words:["PALEOBOTANICA","PALEOZOOLOGIA","PALEOECOLOGIA","TAPONOMIA"],color:"blue"},{name:"PALABRAS CON PREFIJO NEURO",words:["NEUROCIENCIA","NEUROLOGIA","NEUROTRANSMISOR","NEUROPSICOLOGIA"],color:"purple"}]},
{id:"puzzle-256",categories:[{name:"MARCAS DE CAMARAS",words:["CANON","NIKON","SONY","FUJIFILM"],color:"yellow"},{name:"TIPOS DE PAN",words:["BLANCO","INTEGRAL","CENTENO","MASA MADRE"],color:"green"},{name:"PROCESOS COGNITIVOS",words:["ATENCION","MEMORIA","LENGUAJE","RAZONAMIENTO"],color:"blue"},{name:"PALABRAS CON SUFIJO VORO",words:["CARNIVORO","HERBIVORO","OMNIVORO","INSECTIVORO"],color:"purple"}]},
{id:"puzzle-257",categories:[{name:"ANIMALES DEL ESTERO",words:["FLAMENCO","GARZA","CISNE","PATICO"],color:"yellow"},{name:"UTILES DE ACAMPAR",words:["CARPA","SACO DORMIR","BRUJULA","CANTIMPLORA"],color:"green"},{name:"DISCIPLINAS DE LA SALUD",words:["NUTRICION","FISIOTERAPIA","ENFERMERIA","FARMACIA"],color:"blue"},{name:"PALABRAS CON PREFIJO PSICO",words:["PSICOLOGIA","PSIQUIATRA","PSICOANALISIS","PSICOTERAPIA"],color:"purple"}]},
{id:"puzzle-258",categories:[{name:"AVES DEL MAR",words:["ALBATROS","GAVIOTA","PELICANO","FRAGATA"],color:"yellow"},{name:"TIPOS DE CANDADO",words:["NUMERICO","LLAVE","COMBINACION","BIOMETRICO"],color:"green"},{name:"TEORIAS DE LA INTELIGENCIA",words:["GARDNER","STERNBERG","FLYNN","CATTELL"],color:"blue"},{name:"PALABRAS CON SUFIJO OIDE",words:["HUMANOIDE","ANDROIDE","ESFERICOIDE","METALOIDE"],color:"purple"}]},
{id:"puzzle-259",categories:[{name:"MARCAS DE TABLET",words:["IPAD","SAMSUNG","LENOVO","AMAZON"],color:"yellow"},{name:"PARTES DE LA SILLA",words:["RESPALDO","ASIENTO","PATAS","BRAZOS"],color:"green"},{name:"FENOMENOS ELECTROMAGNETICOS",words:["ELECTRICIDAD","MAGNETISMO","ONDAS","RADIACION"],color:"blue"},{name:"PALABRAS CON PREFIJO AUTO",words:["AUTOMOVIL","AUTOPISTA","AUTOMATICO","AUTONOMO"],color:"purple"}]},
{id:"puzzle-260",categories:[{name:"ANIMALES DE LAJA",words:["BALLENA","DELFIN","FOCA","LEON MARINO"],color:"yellow"},{name:"TIPOS DE LECHUGA",words:["ROMANA","ICEBBERG","RUCULA","CANONIGOS"],color:"green"},{name:"RAMAS DE LA ZOOLOGIA",words:["MASTOZOOLOGIA","ORNITOLOGIA","HERPETOLOGIA","ICTIOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO FOTO",words:["FOTOGRAFIA","FOTOSINTESIS","FOTOCOPIADORA","FOTOGENICO"],color:"purple"}]},
{id:"puzzle-261",categories:[{name:"MARCAS DE IMPRESORA",words:["HP","EPSON","CANON","BROTHER"],color:"yellow"},{name:"PARTES DEL CUADRO",words:["LIENZO","MARCO","BASTIDOR","PINTURA"],color:"green"},{name:"MOVIMIENTOS DE MODA",words:["CASUAL","FORMAL","DEPORTIVO","ELEGANTE"],color:"blue"},{name:"PALABRAS CON SUFIJO FERO",words:["CARNIFERO","HERBIFERO","ACUIFERO","FRUCTIFERO"],color:"purple"}]},
{id:"puzzle-262",categories:[{name:"ESPECIES DE PATO",words:["ANADE","PATO","CERCETA","PORRON"],color:"yellow"},{name:"TIPOS DE SILLA",words:["PLEGABLE","GIRATORIA","TUMBONA","MEEDORA"],color:"green"},{name:"TEORIAS DE LA MEMORIA",words:["SENSORIAL","CORTO PLAZO","LARGO PLAZO","PROCEDIMENTAL"],color:"blue"},{name:"PALABRAS CON PREFIJO TELE",words:["TELEFONO","TELEVISION","TELESCOPIO","TELEGRAMA"],color:"purple"}]},
{id:"puzzle-263",categories:[{name:"ANIMALES DE LA MONTAÑA",words:["CABRA","BUITRE","GAMUZA","MARMOTA"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","ESPATULA","RODILLO","BROCHA"],color:"green"},{name:"RAMAS DE LA SOCIOLOGIA",words:["URBANA","RURAL","POLITICA","CULTURAL"],color:"blue"},{name:"PALABRAS CON SUFIJO PEDIA",words:["ENCICLOPEDIA","ORTOPEDIA","PEDIATRIA","LOGPEDIA"],color:"purple"}]},
{id:"puzzle-264",categories:[{name:"MARCAS DE MOTOCICLETA",words:["HARLEY","HONDA","YAMAHA","KAWASAKI"],color:"yellow"},{name:"PARTES DE LA MANO",words:["DEDOS","PALMA","MUÑECA","UÑAS"],color:"green"},{name:"PROCESOS METABOLICOS",words:["CATABOLISMO","ANABOLISMO","GLUCOLISIS","CICLO KREBS"],color:"blue"},{name:"PALABRAS CON PREFIJO BIO",words:["BIOLOGIA","BIODIVERSIDAD","BIOMASA","BIOGRAFIA"],color:"purple"}]},
{id:"puzzle-265",categories:[{name:"AVES DEL BOSQUE",words:["CARPINTERO","URACA","PALOMA","GORRION"],color:"yellow"},{name:"TIPOS DE VENTANA",words:["BATIENTE","CORREDERA","GUILOTINA","FIJA"],color:"green"},{name:"DISCIPLINAS MATEMATICAS",words:["ALGEBRA","GEOMETRIA","CALCULO","ESTADISTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO GEO",words:["GEOGRAFIA","GEOLOGIA","GEOMETRIA","GEOPOLITICA"],color:"purple"}]},
{id:"puzzle-266",categories:[{name:"ANIMALES DEL HUERTO",words:["CONEJO","CARACOL","TOPO","LOMBRIZ"],color:"yellow"},{name:"UTILES DE CARPINTERIA",words:["SIERRA","CEPILLO","FORMON","LIJADORA"],color:"green"},{name:"TEORIAS DE LA COMUNICACION",words:["EMISOR","RECEPTOR","MENSAJE","CANAL"],color:"blue"},{name:"PALABRAS CON PREFIJO HIDRO",words:["HIDROELECTRICA","HIDRAULICO","HIDROGENO","HIDROAVION"],color:"purple"}]},
{id:"puzzle-267",categories:[{name:"MARCAS DE ROPA DEPORTIVA",words:["NIKE","ADIDAS","UNDER ARMOUR","PUMA"],color:"yellow"},{name:"PARTES DE LA ESTRELLA",words:["PUNTA","RADIO","CENTRO","LUZ"],color:"green"},{name:"RAMAS DE LA BOTANICA",words:["FISIOLOGIA","TAXONOMIA","ECOLOGIA","GENETICA"],color:"blue"},{name:"PALABRAS CON SUFIJO MICO",words:["ACADEMICO","ECONOMICO","FANATICO","POLEMICO"],color:"purple"}]},
{id:"puzzle-268",categories:[{name:"ESPECIES DE AVEZNO",words:["AVESTRUZ","EMU","NANDU","CASUARIO"],color:"yellow"},{name:"TIPOS DE CORREA",words:["CUERO","TELA","GOMA","CADENA"],color:"green"},{name:"FENOMENOS QUIMICOS",words:["OXIDACION","REDUCCION","HIDROLISIS","COMBUSTION"],color:"blue"},{name:"PALABRAS CON PREFIJO MACRO",words:["MACROECONOMIA","MACROBIOTICA","MACROFOTOGRAFIA","MACROESTRUCTURA"],color:"purple"}]},
{id:"puzzle-269",categories:[{name:"ANIMALES DEL POLO",words:["OSO POLAR","PINGÜINO","FOCA","BELUGA"],color:"yellow"},{name:"UTILES DE COCINA",words:["OLLA","SARTEN","CAZUELA","WOK"],color:"green"},{name:"MOVIMIENTOS CULTURALES",words:["HIPPIE","PUNK","GRUNGE","EMO"],color:"blue"},{name:"PALABRAS CON SUFIJO OSO",words:["PELIGROSO","MARAVILLOSO","HERMOSO","CUIDADOSO"],color:"purple"}]},
{id:"puzzle-270",categories:[{name:"MARCAS DE AURICULARES",words:["BEATS","BOSE","SONY","SENNHEISER"],color:"yellow"},{name:"PARTES DE LA NUBE",words:["CUMULUS","STRATUS","CIRRUS","NIMBUS"],color:"green"},{name:"TEORIAS DE LA RELATIVIDAD",words:["ESPECIAL","GENERAL","EQUIVALENCIA","CURVATURA"],color:"blue"},{name:"PALABRAS CON PREFIJO PARA",words:["PARACAIDAS","PARAGUAS","PARABRISAS","PARACHOQUES"],color:"purple"}]},
{id:"puzzle-271",categories:[{name:"ANIMALES DE LA INDIA",words:["ELEFANTE","TIGRE","PAVO REAL","COBRA"],color:"yellow"},{name:"TIPOS DE MESA",words:["ESCRITORIO","COMEDOR","NOCHE","PICNIC"],color:"green"},{name:"RAMAS DE LA ECONOMIA",words:["MICROECONOMIA","MACROECONOMIA","ECONOMETRIA","FINANZAS"],color:"blue"},{name:"PALABRAS CON PREFIJO RENO",words:["RENOVAR","RENACER","RENOVACION","RENACIMIENTO"],color:"purple"}]},
{id:"puzzle-272",categories:[{name:"MARCAS DE BICICLETA",words:["TREK","SPECIALIZED","GIANT","CANNONDALE"],color:"yellow"},{name:"PARTES DE LA HOJA",words:["LIMBO","PECIOLO","NASTRO","VENA"],color:"green"},{name:"PROCESOS DE FABRICACION",words:["MOLDEADO","TORNEADO","FRESADO","SOLDADURA"],color:"blue"},{name:"PALABRAS CON SUFIJO OTICO",words:["ACUSTICO","AERONAUTICO","ARTISTICO","CIENTIFICO"],color:"purple"}]},
{id:"puzzle-273",categories:[{name:"AVES DE COLORES",words:["GUACAMAYA","TUCAN","QUETZAL","PAVO REAL"],color:"yellow"},{name:"TIPOS DE BOTELLA",words:["VIDRIO","PLASTICO","ALUMINIO","RETORNABLE"],color:"green"},{name:"DISCIPLINAS DE LA TIERRA",words:["GEOLOGIA","METEOROLOGIA","OCEANOGRAFIA","SISMOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTRO",words:["ANTROPOLOGIA","ANTROPOCENO","ANTROPOMORFO","ANTROPOLOGO"],color:"purple"}]},
{id:"puzzle-274",categories:[{name:"ANIMALES DEL RIO",words:["CAIMAN","NUTRIA","CARPA","RANA"],color:"yellow"},{name:"UTILES DE JARDINERIA",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"TEORIAS DEL LIDERAZGO",words:["TRANSFORMACIONAL","SITUACIONAL","DEMOCRATICO","AUTOCRATICO"],color:"blue"},{name:"PALABRAS CON SUFIJO PARDO",words:["VERDEPARDO","ROJIPARDO","GRISPARDO","NEGROPARDO"],color:"purple"}]},
{id:"puzzle-275",categories:[{name:"MARCAS DE HELADO",words:["HAGEN DAZS","BEN JERRY","MAGNUM","CORNETO"],color:"yellow"},{name:"PARTES DE LA LLUVIA",words:["GOTA","LLUVIA","CHUBASCO","TORMENTA"],color:"green"},{name:"RAMAS DE LA FILOSOFIA",words:["ETICA","LOGICA","METAFISICA","ESTETICA"],color:"blue"},{name:"PALABRAS CON PREFIJO ETNO",words:["ETNOLOGIA","ETNOGRAFIA","ETNOCENTRISMO","ETNOBOTANICA"],color:"purple"}]},
{id:"puzzle-276",categories:[{name:"ESPECIES DE GATO",words:["SILVESTRE","DOMESTICO","LEON","TIGRE"],color:"yellow"},{name:"TIPOS DE BOLSO",words:["MOCHILA","RIÑONERA","CARTERA","TOTE"],color:"green"},{name:"FENOMENOS ATMOSFERICOS",words:["LLUVIA","NIEVE","GRANIZO","BRUMA"],color:"blue"},{name:"PALABRAS CON PREFIJO AERO",words:["AEROPUERTO","AERONAUTICA","AERODINAMICA","AEROBICO"],color:"purple"}]},
{id:"puzzle-277",categories:[{name:"ANIMALES DE LAS CAVERNAS",words:["MURCIELAGO","SALAMANDRA","GRILLO","ARAÑA"],color:"yellow"},{name:"UTILES DE COCINA",words:["COLADOR","RALLADOR","PELADOR","BATIDOR"],color:"green"},{name:"MOVIMIENTOS POLITICOS",words:["LIBERALISMO","CONSERVADURISMO","SOCIALISMO","FASCISMO"],color:"blue"},{name:"PALABRAS CON SUFIJO DERO",words:["JARDINERO","PANADERO","CARPINTERO","CARNICERO"],color:"purple"}]},
{id:"puzzle-278",categories:[{name:"MARCAS DE TEQUILA",words:["JOSE CUERVO","DON JULIO","PATRON","SAUZA"],color:"yellow"},{name:"PARTES DE LA MONTAÑA",words:["CUMBRE","LADERA","VALLE","BASE"],color:"green"},{name:"TEORIAS DE LA CONCIENCIA",words:["DUALISMO","MATERIALISMO","FUNCIONALISMO","FENOMENOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO CINE",words:["CINEMATOGRAFIA","CINEMATECA","CINEFILO","CINESCOPIO"],color:"purple"}]},
{id:"puzzle-279",categories:[{name:"ANIMALES DE LA SABANA",words:["CEBRA","JIRAFA","ANTILOPE","ÑU"],color:"yellow"},{name:"TIPOS DE CAFE",words:["ESPRESSO","CAPUCHINO","LATTE","MOCA"],color:"green"},{name:"RAMAS DE LA PSICOLOGIA",words:["CLINICA","EDUCATIVA","SOCIAL","ORGANIZACIONAL"],color:"blue"},{name:"PALABRAS CON PREFIJO DECA",words:["DECADENCIA","DECAIMIENTO","DECADENTE","DECAER"],color:"purple"}]},
{id:"puzzle-280",categories:[{name:"AVES DE GRANJA",words:["GALLINA","GALLO","PAVO","PATO"],color:"yellow"},{name:"TIPOS DE ALFOMBRA",words:["PERSIA","ORIENTAL","MODERNA","RURAL"],color:"green"},{name:"PROCESOS DE APRENDIZAJE",words:["OBSERVACION","IMITACION","REPETICION","REFLEXION"],color:"blue"},{name:"PALABRAS CON SUFIJO BLE",words:["AMABLE","POSIBLE","VISIBLE","TERRIBLE"],color:"purple"}]},
{id:"puzzle-281",categories:[{name:"MARCAS DE VINO",words:["CONCHA Y TORO","CATENA","ALMAVIVA","VEGA SICILIA"],color:"yellow"},{name:"PARTES DE LA OLA",words:["CRESTA","TUBO","ESPUMA","BASE"],color:"green"},{name:"DISCIPLINAS DEL DEPORTE",words:["FISIOLOGIA","BIOMECANICA","PSICOLOGIA","NUTRICION"],color:"blue"},{name:"PALABRAS CON PREFIJO EURO",words:["EUROPEO","EUROPEA","EUROVISION","EUROZONA"],color:"purple"}]},
{id:"puzzle-282",categories:[{name:"ANIMALES NOCTURNOS",words:["BUHO","MURCIELAGO","LUCIERNAGA","ZORRO"],color:"yellow"},{name:"TIPOS DE SOFA",words:["ESQUINERO","TUMBONA","CHELONG","LITERA"],color:"green"},{name:"TEORIAS DE LA JUSTICIA",words:["DISTRIBUTIVA","RETRIBUTIVA","RESTAURATIVA","PROCEDIMENTAL"],color:"blue"},{name:"PALABRAS CON PREFIJO NOV",words:["NOVEDAD","NOVATO","NOVICIADO","NOVOCAINA"],color:"purple"}]},
{id:"puzzle-283",categories:[{name:"MARCAS DE GORRAS",words:["NEW ERA","47 BRAND","NIKE","ADIDAS"],color:"yellow"},{name:"PARTES DEL RIO",words:["CAUCE","RIBERA","DELTA","ESTUARIO"],color:"green"},{name:"RAMAS DE LA BIOLOGIA",words:["BOTANICA","ZOOLOGIA","GENETICA","ECOLOGIA"],color:"blue"},{name:"PALABRAS CON SUFIJO ARIO",words:["BIBLIOTECARIO","SECRETARIO","COMISARIO","DICTADOR"],color:"purple"}]},
{id:"puzzle-284",categories:[{name:"ESPECIES DE PEZ",words:["SALMON","ATUN","MERLUZA","BACALAO"],color:"yellow"},{name:"TIPOS DE SOMBRERO",words:["GORRA","PAMELA","COPA","VISERA"],color:"green"},{name:"MOVIMIENTOS DE LA TIERRA",words:["ROTACION","TRASLACION","PRECESION","BAMBALEO"],color:"blue"},{name:"PALABRAS CON PREFIJO FERRO",words:["FERROCARRIL","FERROMAGNETICO","FERROVIARIO","FERRALLA"],color:"purple"}]},
{id:"puzzle-285",categories:[{name:"ANIMALES DEL ESTANQUE",words:["RANA","SAPO","TRITON","SALAMANDRA"],color:"yellow"},{name:"UTILES DE BAÑO",words:["TOALLA","ALBORNOZ","ESTERILLA","CORTINA"],color:"green"},{name:"FENOMENOS BIOLOGICOS",words:["FOTOSINTESIS","RESPIRACION","DIGESTION","CIRCULACION"],color:"blue"},{name:"PALABRAS CON PREFIJO TERMO",words:["TERMOMETRO","TERMOSTATO","TERMODINAMICA","TERMOELECTRICA"],color:"purple"}]},
{id:"puzzle-286",categories:[{name:"MARCAS DE LAPIZ",words:["FABER CASTELL","STAEDTLER","BIC","MAPED"],color:"yellow"},{name:"PARTES DEL VOLCAN",words:["CRATER","CONO","MAGMA","CHIMENEA"],color:"green"},{name:"TEORIAS DE LA VERDAD",words:["CORRESPONDENCIA","COHERENCIA","PRAGMATICA","CONSENSO"],color:"blue"},{name:"PALABRAS CON PREFIJO RADIO",words:["RADIOGRAFIA","RADIOACTIVO","RADIODIFUSION","RADIOTERAPIA"],color:"purple"}]},
{id:"puzzle-287",categories:[{name:"AVES DE LA SELVA",words:["GUACAMAYA","TUCAN","QUETZAL","LAPA"],color:"yellow"},{name:"TIPOS DE PANTALLA",words:["LED","LCD","OLED","PLASMA"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","TRAUMATOLOGIA"],color:"blue"},{name:"PALABRAS CON SUFIJO MANCIA",words:["ADIVINANZA","CLARIVIDENCIA","VIDENCIA","PRESCIENCIA"],color:"purple"}]},
{id:"puzzle-288",categories:[{name:"ANIMALES DE LA ESTEPA",words:["BISONTE","ANTILOPE","LOBO","CABALLO"],color:"yellow"},{name:"UTILES DE PESCA",words:["CAÑA","ANZUELO","CARRETE","SEÑUELO"],color:"green"},{name:"PROCESOS DE PENSAMIENTO",words:["DEDUCCION","INDUCCION","ABDUCCION","ANALOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO ELECTRO",words:["ELECTRICIDAD","ELECTRONICA","ELECTRODOMESTICO","ELECTROMAGNETICO"],color:"purple"}]},
{id:"puzzle-289",categories:[{name:"MARCAS DE MOCHILA",words:["JANSPORT","NIKE","ADIDAS","THE NORTH FACE"],color:"yellow"},{name:"PARTES DEL AGUA",words:["RIO","LAGO","MAR","OCEANO"],color:"green"},{name:"DISCIPLINAS MATEMATICAS",words:["ARITMETICA","ALGEBRA","GEOMETRIA","TRIGONOMETRIA"],color:"blue"},{name:"PALABRAS CON PREFIJO CARDIO",words:["CARDIOLOGIA","CARDIOVASCULAR","CARDIOPATIA","CARDIACO"],color:"purple"}]},
{id:"puzzle-290",categories:[{name:"ESPECIES DE ORQUIDEA",words:["PHALAENOPSIS","DENDROBIUM","CATLEYA","ONDIDIUM"],color:"yellow"},{name:"TIPOS DE TORTA",words:["BIZCOCHO","QUEQUE","PASTEL","TARTA"],color:"green"},{name:"TEORIAS DE LA EVOLUCION",words:["LAMARCKISMO","DARWINISMO","NEODARWINISMO","SALTACIONISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO ASTRO",words:["ASTRONOMIA","ASTROFISICA","ASTRONAUTA","ASTROLOGIA"],color:"purple"}]},
{id:"puzzle-291",categories:[{name:"ANIMALES DE LA GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"yellow"},{name:"UTILES DE COSTURA",words:["AGUJA","HILO","DEDAL","ALFILER"],color:"green"},{name:"RAMAS DE LA INGENIERIA",words:["CIVIL","MECANICA","INDUSTRIAL","SISTEMAS"],color:"blue"},{name:"PALABRAS CON PREFIJO CROMO",words:["CROMOSOMA","CROMATOGRAFIA","CROMATICO","CROMOSFERA"],color:"purple"}]},
{id:"puzzle-292",categories:[{name:"MARCAS DE GAFAS",words:["RAY-BAN","OAKLEY","PERSOL","POLAROID"],color:"yellow"},{name:"PARTES DEL FUEGO",words:["LLAMA","BRASA","CENIZA","HUMO"],color:"green"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ESPECTRO","REFLEJO","REFLEXION"],color:"blue"},{name:"PALABRAS CON PREFIJO TECNO",words:["TECNOLOGIA","TECNOESTRES","TECNOCRACIA","TECNICISMO"],color:"purple"}]},
{id:"puzzle-293",categories:[{name:"AVES DEL JARDIN",words:["COLIBRI","GORRION","PALOMA","JILGUERO"],color:"yellow"},{name:"TIPOS DE CHOCOLATE",words:["NEGRO","LECHE","BLANCO","RUBI"],color:"green"},{name:"MOVIMIENTOS LITERARIOS",words:["MODERNISMO","REALISMO","ROMANTICISMO","NATURALISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO ECO",words:["ECOLOGIA","ECOSISTEMA","ECONOMIA","ECOTURISMO"],color:"purple"}]},
{id:"puzzle-294",categories:[{name:"ANIMALES DEL ARRECIFE",words:["CABALLITO","PEZ PAYASO","ANGUILA","MANTARRAYA"],color:"yellow"},{name:"UTILES DE DIBUJO",words:["LAPIZ","CARBONCILLO","PASTEL","SANGUINA"],color:"green"},{name:"TEORIAS DE LA PERSONALIDAD",words:["BIG FIVE","ENNEAGRAMA","MBTI","TEMPERAMENTO"],color:"blue"},{name:"PALABRAS CON PREFIJO AERO",words:["AEROPUERTO","AERONAUTICA","AERODINAMICA","AEROBICO"],color:"purple"}]},
{id:"puzzle-295",categories:[{name:"MARCAS DE AGUA",words:["EVIAN","PERRIER","NESTLE","DASANI"],color:"yellow"},{name:"PARTES DEL TREN",words:["LOCOMOTORA","VAGON","ANDEN","VIA"],color:"green"},{name:"RAMAS DE LA QUIMICA",words:["ORGANICA","INORGANICA","ANALITICA","FISICOQUIMICA"],color:"blue"},{name:"PALABRAS CON PREFIJO FONO",words:["FONETICA","FONOLOGIA","FONOGRAFO","FONOTECA"],color:"purple"}]},
{id:"puzzle-296",categories:[{name:"ESPECIES DE ARBUSTO",words:["BREZO","RETAMA","JARA","TOMILLO"],color:"yellow"},{name:"TIPOS DE LLAVERO",words:["ARGOLIA","CADENA","COLGANTE","MOSQUETON"],color:"green"},{name:"PROCESOS PSICOLOGICOS",words:["PERCEPCION","ATENCION","MEMORIA","EMOCION"],color:"blue"},{name:"PALABRAS CON PREFIJO MEGA",words:["MEGAESTRUCTURA","MEGALITICO","MEGAFONO","MEGAPROYECTO"],color:"purple"}]},
{id:"puzzle-297",categories:[{name:"ANIMALES DE LA COSTA",words:["GAVIOTA","PELICANO","GOLONDRINA","CANGREJO"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","LIENZO","CABALLETE","ESPATULA"],color:"green"},{name:"DISCIPLINAS DE LA SALUD",words:["NUTRICION","FISIOTERAPIA","ENFERMERIA","FARMACIA"],color:"blue"},{name:"PALABRAS CON PREFIJO NEO",words:["NEOCLASICO","NEOLITICO","NEONATO","NEOLOGISMO"],color:"purple"}]},
{id:"puzzle-298",categories:[{name:"MARCAS DE ANTEOJOS",words:["RAY-BAN","OAKLEY","PERSOL","POLAROID"],color:"yellow"},{name:"PARTES DE LA CASCADA",words:["SALTO","POZO","ROCIO","TORRENTE"],color:"green"},{name:"TEORIAS DE LA FELICIDAD",words:["EUDEMONIA","HEDONISMO","FLUIR","AUTOREALIZACION"],color:"blue"},{name:"PALABRAS CON PREFIJO PANO",words:["PANORAMA","PANORAMICA","PANOPTICO","PANORAMICO"],color:"purple"}]},
{id:"puzzle-299",categories:[{name:"AVES PLAYERAS",words:["GAVIOTA","CHORLITO","PLAYERO","GARZA"],color:"yellow"},{name:"TIPOS DE LAMPARA",words:["MESA","TECHO","PIE","PARED"],color:"green"},{name:"RAMAS DE LA FISICA",words:["MECANICA","TERMODINAMICA","OPTICA","ACUSTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO CATA",words:["CATALOGO","CATALIZADOR","CATARATA","CATACLISMO"],color:"purple"}]},
{id:"puzzle-300",categories:[{name:"ANIMALES DE LA TAIGA",words:["ALCE","LOBO","OSO","LINCE"],color:"yellow"},{name:"UTILES DE MECANICA",words:["LLAVE","DESTORNILLADOR","ALICATE","MARTILLO"],color:"green"},{name:"FENOMENOS NATURALES",words:["TERREMOTO","TORNADO","HURACAN","TSUNAMI"],color:"blue"},{name:"PALABRAS CON PREFIJO TERRA",words:["TERRENO","TERRITORIO","TERRARIO","TERRACOTA"],color:"purple"}]},
{id:"puzzle-301",categories:[{name:"MARCAS DE TABACO",words:["MARLBORO","CAMEL","WINSTON","LUCKY STRIKE"],color:"yellow"},{name:"PARTES DE LA NOCHE",words:["ATARDECER","ANOCHECER","MADRUGADA","ALBA"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["CUBISMO","DADAISMO","SURREALISMO","FAUVISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO VIDE",words:["VIDEOJUEGO","VIDEOLLAMADA","VIDEOCLUB","VIDEOTECA"],color:"purple"}]},
{id:"puzzle-302",categories:[{name:"ESPECIES DE GECKO",words:["LEOPARDO","CRESTADO","TOKAY","DIURNO"],color:"yellow"},{name:"TIPOS DE ALMOHADA",words:["VISCOELASTICA","PLUMAS","LATEX","FIBRA"],color:"green"},{name:"TEORIAS DE LA MENTE",words:["TEORIA DE LA MENTE","MENTALIZACION","EMPATIA","METACOGNICION"],color:"blue"},{name:"PALABRAS CON PREFIJO HELIO",words:["HELIOCENTRICO","HELIOSFERA","HELIOTERAPIA","HELIOTROPO"],color:"purple"}]},
{id:"puzzle-303",categories:[{name:"ANIMALES DE LA DEHESA",words:["CERDO IBERICO","TORO","OVEJA","CABRA"],color:"yellow"},{name:"UTILES DE COCINA",words:["OLLA","SARTEN","CAZUELA","WOK"],color:"green"},{name:"RAMAS DE LA HISTORIA",words:["ANTIGUA","MEDIA","MODERNA","CONTEMPORANEA"],color:"blue"},{name:"PALABRAS CON PREFIJO CRONO",words:["CRONOLOGIA","CRONOMETRO","CRONICA","CRONOGRAMA"],color:"purple"}]},
{id:"puzzle-304",categories:[{name:"MARCAS DE PERFUME",words:["CHANEL","DIOR","VERSACE","PACO"],color:"yellow"},{name:"PARTES DEL DIA",words:["MAÑANA","TARDE","NOCHE","MADRUGADA"],color:"green"},{name:"PROCESOS DEL CUERPO",words:["RESPIRACION","DIGESTION","CIRCULACION","EXCRECION"],color:"blue"},{name:"PALABRAS CON PREFIJO HOMO",words:["HOMOGENEO","HOMBRE","HOMONIMO","HOMOLOGO"],color:"purple"}]},
{id:"puzzle-305",categories:[{name:"AVES DE LA SELVA",words:["GUACAMAYA","TUCAN","QUETZAL","LAPA"],color:"yellow"},{name:"TIPOS DE COLCHON",words:["MUELLES","ESPUMA","LATEX","HIDRICO"],color:"green"},{name:"TEORIAS DE LA EDUCACION",words:["TRADICIONAL","PROGRESISTA","CRITICA","CONSTRUCTIVISTA"],color:"blue"},{name:"PALABRAS CON PREFIJO GEOCENTRICO",words:["GEOCENTRISMO","GEOCENTRICO","GEODESIA","GEOCRONOLOGIA"],color:"purple"}]},
{id:"puzzle-306",categories:[{name:"ANIMALES DE LA SELVA",words:["TIGRE","GUEPARDO","LEOPARDO","JAGUAR"],color:"yellow"},{name:"UTILES DE JARDIN",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","TRAUMATOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO DI",words:["DIVIDIR","DILUIR","DILATAR","DIMINUIR"],color:"purple"}]},
{id:"puzzle-307",categories:[{name:"MARCAS DE RON",words:["BACARDI","HABANA CLUB","CAPTAIN MORGAN","DIPLOMATICO"],color:"yellow"},{name:"PARTES DE LA SEMANA",words:["LUNES","MARTES","MIERCOLES","JUEVES"],color:"green"},{name:"FENOMENOS SOCIALES",words:["MIGRACION","URBANIZACION","GLOBALIZACION","DESIGUALDAD"],color:"blue"},{name:"PALABRAS CON PREFIJO ENDO",words:["ENDOCRINO","ENDOSCOPIA","ENDODONCIA","ENDOTERMICO"],color:"purple"}]},
{id:"puzzle-308",categories:[{name:"ESPECIES DE PINO",words:["ABETO","ALERCE","CEDRO","PINO"],color:"yellow"},{name:"TIPOS DE CORTINA",words:["ESTORES","VISILLO","PERSIANA","CORTINON"],color:"green"},{name:"TEORIAS DE LA DEMOCRACIA",words:["DIRECTA","REPRESENTATIVA","PARTICIPATIVA","DELIBERATIVA"],color:"blue"},{name:"PALABRAS CON PREFIJO ISO",words:["ISOMERIA","ISOTERMO","ISOBARA","ISOMETRICO"],color:"purple"}]},
{id:"puzzle-309",categories:[{name:"ANIMALES DE LA MONTAÑA",words:["CABRA","BUITRE","GAMUZA","MARMOTA"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","ESPATULA","RODILLO","BROCHA"],color:"green"},{name:"RAMAS DE LA PSICOLOGIA",words:["CLINICA","EDUCATIVA","SOCIAL","ORGANIZACIONAL"],color:"blue"},{name:"PALABRAS CON PREFIJO MISO",words:["MISOGINIA","MISANTROPIA","MISOGINO","MISOLOGIA"],color:"purple"}]},
{id:"puzzle-310",categories:[{name:"MARCAS DE VODKA",words:["ABSOLUT","SMIRNOFF","GREY GOOSE","BELVEDERE"],color:"yellow"},{name:"PARTES DEL AÑO",words:["ENERO","FEBRERO","MARZO","ABRIL"],color:"green"},{name:"PROCESOS GEOLOGICOS",words:["EROSION","SEDIMENTACION","GLACIACION","OROGENESIS"],color:"blue"},{name:"PALABRAS CON PREFIJO XENO",words:["XENOFOBIA","XENOTRASPLANTE","XENOGLOSIA","XENOFILO"],color:"purple"}]},
{id:"puzzle-311",categories:[{name:"AVES ACUATICAS",words:["PATO","CISNE","GARZA","FLAMENCO"],color:"yellow"},{name:"TIPOS DE BOTELLA",words:["VIDRIO","PLASTICO","ALUMINIO","RETORNABLE"],color:"green"},{name:"DISCIPLINAS MATEMATICAS",words:["ALGEBRA","GEOMETRIA","CALCULO","ESTADISTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO ZOO",words:["ZOOLOGIA","ZOOTERAPIA","ZOOLOGICO","ZOOPLANCTON"],color:"purple"}]},
{id:"puzzle-312",categories:[{name:"ANIMALES DE LAJA",words:["BALLENA","DELFIN","FOCA","LEON MARINO"],color:"yellow"},{name:"UTILES DE LIMPIEZA",words:["ESCOBA","FREGONA","BALDE","PAÑO"],color:"green"},{name:"TEORIAS DE LA GUERRA",words:["TOTAL","LIMITADA","CIVIL","ASIMETRICA"],color:"blue"},{name:"PALABRAS CON PREFIJO TELU",words:["TELURICO","TELURISMO","TELURIA","TELURGIA"],color:"purple"}]},
{id:"puzzle-313",categories:[{name:"MARCAS DE JUGUETES",words:["LEGO","MATTEL","HASBRO","PLAYMOBIL"],color:"yellow"},{name:"PARTES DE LA LUNA",words:["CRECIENTE","LLENA","MENGUANTE","NUEVA"],color:"green"},{name:"RAMAS DE LA AGRICULTURA",words:["AGRONOMIA","HORTICULTURA","FRUTICULTURA","VITICULTURA"],color:"blue"},{name:"PALABRAS CON PREFIJO ANA",words:["ANALISIS","ANATOMIA","ANALOGIA","ANACRONISMO"],color:"purple"}]},
{id:"puzzle-314",categories:[{name:"ESPECIES DE BAMBU",words:["BAMBUSA","PHYLLOSTACHYS","DENDROCALAMUS","GUADUA"],color:"yellow"},{name:"TIPOS DE CEPILLO",words:["DIENTES","PELO","ROPA","ZAPATOS"],color:"green"},{name:"FENOMENOS BIOLOGICOS",words:["FOTOSINTESIS","RESPIRACION","DIGESTION","CIRCULACION"],color:"blue"},{name:"PALABRAS CON PREFIJO CRIO",words:["CRIOLLO","CRIOTERAPIA","CIRIOGENIA","CRIOSFERA"],color:"purple"}]},
{id:"puzzle-315",categories:[{name:"ANIMALES DE LA PRADERA",words:["BISONTE","COYOTE","PERRO","TORTUGA"],color:"yellow"},{name:"UTILES DE COCINA",words:["COLADOR","RALLADOR","PELADOR","BATIDOR"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["RENACIMIENTO","BARROCO","IMPRESIONISMO","SURREALISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO FILO",words:["FILOSOFIA","FILOLOGIA","FILANTROPIA","FILATELIA"],color:"purple"}]},
{id:"puzzle-316",categories:[{name:"MARCAS DE WHISKY",words:["JOHNNIE WALKER","JACK DANIELS","BUCHANANS","CHIVAS"],color:"yellow"},{name:"PARTES DE LA TIERRA",words:["CORTEZA","MANTO","NUCLEO","LITOSFERA"],color:"green"},{name:"TEORIAS DE LA COMUNICACION",words:["EMISOR","RECEPTOR","MENSAJE","CANAL"],color:"blue"},{name:"PALABRAS CON PREFIJO GENO",words:["GENOCIDIO","GENOTIPO","GENOMA","GENETICA"],color:"purple"}]},
{id:"puzzle-317",categories:[{name:"AVES DE LA COSTA",words:["GAVIOTA","PELICANO","ALBATROS","FRAGATA"],color:"yellow"},{name:"TIPOS DE LLAVE",words:["INGLESA","FIJA","ALLEN","TORX"],color:"green"},{name:"RAMAS DE LA ECONOMIA",words:["MICROECONOMIA","MACROECONOMIA","ECONOMETRIA","FINANZAS"],color:"blue"},{name:"PALABRAS CON PREFIJO LITO",words:["LITOSFERA","LITOGRAFIA","LITOLOGIA","LITOGRAMA"],color:"purple"}]},
{id:"puzzle-318",categories:[{name:"ANIMALES DE LA DEHESA",words:["CERDO IBERICO","TORO","OVEJA","CABRA"],color:"yellow"},{name:"UTILES DE PESCA",words:["CAÑA","ANZUELO","RED","CARNADA"],color:"green"},{name:"PROCESOS DE LA TIERRA",words:["PLIEGUE","FALLA","DIACLASA","FRACTURA"],color:"blue"},{name:"PALABRAS CON PREFIJO PALE",words:["PALEONTOLOGIA","PALEOLITICO","PALEOZOICO","PALEOCENO"],color:"purple"}]},
{id:"puzzle-319",categories:[{name:"MARCAS DE SNACKS",words:["DORITOS","LAY'S","PRINGLES","CHEETOS"],color:"yellow"},{name:"PARTES DE LA ROCA",words:["MINERAL","CRISTAL","GRANO","VETA"],color:"green"},{name:"DISCIPLINAS DE LA HISTORIA",words:["PREHISTORIA","EDAD ANTIGUA","EDAD MEDIA","EDAD MODERNA"],color:"blue"},{name:"PALABRAS CON PREFIJO SINO",words:["SINONIMO","SINONIMIA","SINONIMICO","SINONIMIA"],color:"purple"}]},
{id:"puzzle-320",categories:[{name:"ESPECIES DE LIQUEN",words:["CRUSTACEO","FOLIOSO","FRUTICOSO","GELATINOSO"],color:"yellow"},{name:"TIPOS DE ESCRITORIO",words:["ORDENADOR","MESA","SILLA","ARCHIVADOR"],color:"green"},{name:"TEORIAS DE LA ARQUITECTURA",words:["CLASICA","GOTICA","MODERNA","CONTEMPORANEA"],color:"blue"},{name:"PALABRAS CON PREFIJO HIDRO",words:["HIDROELECTRICA","HIDRAULICO","HIDROGENO","HIDROAVION"],color:"purple"}]},
{id:"puzzle-321",categories:[{name:"ANIMALES DE LA ESTEPA",words:["BISONTE","ANTILOPE","LOBO","CABALLO"],color:"yellow"},{name:"UTILES DE CARPINTERIA",words:["SIERRA","CEPILLO","FORMON","LIJADORA"],color:"green"},{name:"RAMAS DE LA FILOSOFIA",words:["ETICA","LOGICA","METAFISICA","ESTETICA"],color:"blue"},{name:"PALABRAS CON PREFIJO TERMO",words:["TERMOMETRO","TERMOSTATO","TERMODINAMICA","TERMOELECTRICA"],color:"purple"}]},
{id:"puzzle-322",categories:[{name:"MARCAS DE CEREAL",words:["KELLOGGS","NESQUIK","CHOCAPIC","FROSTIES"],color:"yellow"},{name:"PARTES DE LA CARNE",words:["LOMO","SOLOMILLO","CHULETA","PECHUGA"],color:"green"},{name:"FENOMENOS OCEANICOS",words:["OLAS","MAREAS","CORRIENTES","RESACA"],color:"blue"},{name:"PALABRAS CON PREFIJO FOTO",words:["FOTOGRAFIA","FOTOSINTESIS","FOTOCOPIADORA","FOTOGENICO"],color:"purple"}]},
{id:"puzzle-323",categories:[{name:"AVES DE LA GRANJA",words:["GALLINA","GALLO","PAVO","PATO"],color:"yellow"},{name:"TIPOS DE CANDADO",words:["NUMERICO","LLAVE","COMBINACION","BIOMETRICO"],color:"green"},{name:"TEORIAS DE LA INTELIGENCIA",words:["GARDNER","STERNBERG","FLYNN","CATTELL"],color:"blue"},{name:"PALABRAS CON PREFIJO NEURO",words:["NEUROCIENCIA","NEUROLOGIA","NEUROTRANSMISOR","NEUROPSICOLOGIA"],color:"purple"}]},
{id:"puzzle-324",categories:[{name:"ANIMALES DEL BOSQUE TEMPLADO",words:["CIERVO","OSO","ZORRO","ARDILLA"],color:"yellow"},{name:"UTILES DE BAÑO",words:["TOALLA","ALBORNOZ","ESTERILLA","CORTINA"],color:"green"},{name:"RAMAS DE LA BOTANICA",words:["FISIOLOGIA","TAXONOMIA","ECOLOGIA","GENETICA"],color:"blue"},{name:"PALABRAS CON PREFIJO RADIO",words:["RADIOGRAFIA","RADIOACTIVO","RADIODIFUSION","RADIOTERAPIA"],color:"purple"}]},
{id:"puzzle-325",categories:[{name:"MARCAS DE YOGURT",words:["YOPLAIT","DANONE","ACTIVIA","SKYR"],color:"yellow"},{name:"PARTES DE LA CAMA",words:["COLCHON","ALMOHADA","SABANA","COBIJA"],color:"green"},{name:"PROCESOS METABOLICOS",words:["CATABOLISMO","ANABOLISMO","GLUCOLISIS","CICLO KREBS"],color:"blue"},{name:"PALABRAS CON PREFIJO ELECTRO",words:["ELECTRICIDAD","ELECTRONICA","ELECTRODOMESTICO","ELECTROMAGNETICO"],color:"purple"}]},
{id:"puzzle-326",categories:[{name:"ESPECIES DE MUSGO",words:["MUSGO","HEPÁTICA","ANTHOCEROS","SPHAGNUM"],color:"yellow"},{name:"TIPOS DE SOFA",words:["ESQUINERO","TUMBONA","CHELONG","LITERA"],color:"green"},{name:"DISCIPLINAS DEL DEPORTE",words:["FISIOLOGIA","BIOMECANICA","PSICOLOGIA","NUTRICION"],color:"blue"},{name:"PALABRAS CON PREFIJO MEGA",words:["MEGAESTRUCTURA","MEGALITICO","MEGAFONO","MEGAPROYECTO"],color:"purple"}]},
{id:"puzzle-327",categories:[{name:"ANIMALES DEL CAÑON",words:["BUITRE","CABRA","SERPIENTE","AGUILA"],color:"yellow"},{name:"UTILES DE COCINA",words:["OLLA","SARTEN","CAZUELA","WOK"],color:"green"},{name:"TEORIAS DE LA EDUCACION",words:["TRADICIONAL","PROGRESISTA","CRITICA","CONSTRUCTIVISTA"],color:"blue"},{name:"PALABRAS CON PREFIJO CARDIO",words:["CARDIOLOGIA","CARDIOVASCULAR","CARDIOPATIA","CARDIACO"],color:"purple"}]},
{id:"puzzle-328",categories:[{name:"MARCAS DE CHAMPU",words:["PANTENE","HEAD SHOULDERS","HERBAL ESSENCES","GARNIER"],color:"yellow"},{name:"PARTES DE LA FLOR",words:["PETALO","SEPALO","ESTAMBRE","PISTILO"],color:"green"},{name:"RAMAS DE LA SOCIOLOGIA",words:["URBANA","RURAL","POLITICA","CULTURAL"],color:"blue"},{name:"PALABRAS CON PREFIJO ASTRO",words:["ASTRONOMIA","ASTROFISICA","ASTRONAUTA","ASTROLOGIA"],color:"purple"}]},
{id:"puzzle-329",categories:[{name:"AVES DE LA COSTA",words:["GAVIOTA","PELICANO","ALBATROS","FRAGATA"],color:"yellow"},{name:"TIPOS DE PANTALLA",words:["LED","LCD","OLED","PLASMA"],color:"green"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ESPECTRO","REFLEJO","REFLEXION"],color:"blue"},{name:"PALABRAS CON PREFIJO CROMO",words:["CROMOSOMA","CROMATOGRAFIA","CROMATICO","CROMOSFERA"],color:"purple"}]},
{id:"puzzle-330",categories:[{name:"ANIMALES DEL PANTANO",words:["COCODRILO","RANA","SERPIENTE","GARZA"],color:"yellow"},{name:"UTILES DE JARDINERIA",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"TEORIAS DE LA CONCIENCIA",words:["DUALISMO","MATERIALISMO","FUNCIONALISMO","FENOMENOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO TECNO",words:["TECNOLOGIA","TECNOESTRES","TECNOCRACIA","TECNICISMO"],color:"purple"}]},
{id:"puzzle-331",categories:[{name:"MARCAS DE JABON",words:["DOVE","LUX","PALMOLIVE","PROTEX"],color:"yellow"},{name:"PARTES DE LA GUITARRA",words:["CUERPO","MASTIL","TRASTES","CUERDAS"],color:"green"},{name:"RAMAS DE LA ZOOLOGIA",words:["MASTOZOOLOGIA","ORNITOLOGIA","HERPETOLOGIA","ICTIOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO ECO",words:["ECOLOGIA","ECOSISTEMA","ECONOMIA","ECOTURISMO"],color:"purple"}]},
{id:"puzzle-332",categories:[{name:"ESPECIES DE AVEZNO",words:["AVESTRUZ","EMU","NANDU","CASUARIO"],color:"yellow"},{name:"TIPOS DE ALFOMBRA",words:["PERSIA","ORIENTAL","MODERNA","RURAL"],color:"green"},{name:"PROCESOS DE PENSAMIENTO",words:["DEDUCCION","INDUCCION","ABDUCCION","ANALOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO FONO",words:["FONETICA","FONOLOGIA","FONOGRAFO","FONOTECA"],color:"purple"}]},
{id:"puzzle-333",categories:[{name:"ANIMALES DE LA CAVERNA",words:["MURCIELAGO","SALAMANDRA","GRILLO","ARAÑA"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","LIENZO","CABALLETE","ESPATULA"],color:"green"},{name:"DISCIPLINAS DE LA TIERRA",words:["GEOLOGIA","METEOROLOGIA","OCEANOGRAFIA","SISMOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO CINE",words:["CINEMATOGRAFIA","CINEMATECA","CINEFILO","CINESCOPIO"],color:"purple"}]},
{id:"puzzle-334",categories:[{name:"MARCAS DE DETERGENTE",words:["ACE","TIDE","PERSIL","SKIP"],color:"yellow"},{name:"PARTES DE LA BICICLETA",words:["RUEDA","MANILLAR","SILLIN","PEDAL"],color:"green"},{name:"TEORIAS DE LA MEMORIA",words:["SENSORIAL","CORTO PLAZO","LARGO PLAZO","PROCEDIMENTAL"],color:"blue"},{name:"PALABRAS CON PREFIJO ETNO",words:["ETNOLOGIA","ETNOGRAFIA","ETNOCENTRISMO","ETNOBOTANICA"],color:"purple"}]},
{id:"puzzle-335",categories:[{name:"AVES MIGRATORIAS",words:["GOLONDRINA","CIGUEÑA","GRULLA","GAVIOTA"],color:"yellow"},{name:"TIPOS DE LECHUGA",words:["ROMANA","ICEBBERG","RUCULA","CANONIGOS"],color:"green"},{name:"RAMAS DE LA PALEONTOLOGIA",words:["PALEOBOTANICA","PALEOZOOLOGIA","PALEOECOLOGIA","TAPONOMIA"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTRO",words:["ANTROPOLOGIA","ANTROPOCENO","ANTROPOMORFO","ANTROPOLOGO"],color:"purple"}]},
{id:"puzzle-336",categories:[{name:"ANIMALES DEL BOSQUE BOREAL",words:["ALCE","LOBO","LINCE","OSO"],color:"yellow"},{name:"UTILES DE COSTURA",words:["AGUJA","HILO","DEDAL","ALFILER"],color:"green"},{name:"FENOMENOS QUIMICOS",words:["OXIDACION","REDUCCION","HIDROLISIS","COMBUSTION"],color:"blue"},{name:"PALABRAS CON PREFIJO ETNO",words:["ETNOLOGIA","ETNOGRAFIA","ETNOCENTRISMO","ETNOBOTANICA"],color:"purple"}]},
{id:"puzzle-337",categories:[{name:"MARCAS DE CREMA",words:["NIVEA","NEUTROGENA","CERAVE","LA ROCHE POSAY"],color:"yellow"},{name:"PARTES DE LA LAVADORA",words:["TAMBOR","PANEL","MANGUERA","FILTRO"],color:"green"},{name:"TEORIAS DE LA EVOLUCION",words:["LAMARCKISMO","DARWINISMO","NEODARWINISMO","SALTACIONISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO EURO",words:["EUROPEO","EUROPEA","EUROVISION","EUROZONA"],color:"purple"}]},
{id:"puzzle-338",categories:[{name:"ESPECIES DE HELECHO",words:["HELECHO","POLIPODIO","ADIANTUM","ASPLENIO"],color:"yellow"},{name:"TIPOS DE VENTANA",words:["BATIENTE","CORREDERA","GUILOTINA","FIJA"],color:"green"},{name:"RAMAS DE LA BIOLOGIA",words:["BOTANICA","ZOOLOGIA","GENETICA","ECOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO PARAS",words:["PARASITO","PARASITOLOGIA","PARASITA","PARASITOSIS"],color:"purple"}]},
{id:"puzzle-339",categories:[{name:"ANIMALES DEL RIO",words:["CAIMAN","NUTRIA","CARPA","RANA"],color:"yellow"},{name:"UTILES DE MECANICA",words:["LLAVE","DESTORNILLADOR","ALICATE","MARTILLO"],color:"green"},{name:"PROCESOS DE APRENDIZAJE",words:["OBSERVACION","IMITACION","REPETICION","REFLEXION"],color:"blue"},{name:"PALABRAS CON PREFIJO CATA",words:["CATALOGO","CATALIZADOR","CATARATA","CATACLISMO"],color:"purple"}]},
{id:"puzzle-340",categories:[{name:"MARCAS DE PAÑALES",words:["PAMPERS","HUGGIES","DODOT","BABY SEC"],color:"yellow"},{name:"PARTES DEL RELOJ",words:["MANECILLA","ESFERA","CORONA","PULSERA"],color:"green"},{name:"TEORIAS DE LA JUSTICIA",words:["DISTRIBUTIVA","RETRIBUTIVA","RESTAURATIVA","PROCEDIMENTAL"],color:"blue"},{name:"PALABRAS CON PREFIJO DECA",words:["DECADENCIA","DECAIMIENTO","DECADENTE","DECAER"],color:"purple"}]},
{id:"puzzle-341",categories:[{name:"AVES DEL BOSQUE TROPICAL",words:["TUCAN","GUACAMAYA","QUETZAL","LAPA"],color:"yellow"},{name:"TIPOS DE TORTA",words:["BIZCOCHO","QUEQUE","PASTEL","TARTA"],color:"green"},{name:"RAMAS DE LA INGENIERIA",words:["CIVIL","MECANICA","INDUSTRIAL","SISTEMAS"],color:"blue"},{name:"PALABRAS CON PREFIJO NOV",words:["NOVEDAD","NOVATO","NOVICIADO","NOVOCAINA"],color:"purple"}]},
{id:"puzzle-342",categories:[{name:"ANIMALES DEL ESTERO",words:["FLAMENCO","GARZA","CISNE","PATICO"],color:"yellow"},{name:"UTILES DE DIBUJO",words:["LAPIZ","CARBONCILLO","PASTEL","SANGUINA"],color:"green"},{name:"FENOMENOS ELECTROMAGNETICOS",words:["ELECTRICIDAD","MAGNETISMO","ONDAS","RADIACION"],color:"blue"},{name:"PALABRAS CON PREFIJO HELIO",words:["HELIOCENTRICO","HELIOSFERA","HELIOTERAPIA","HELIOTROPO"],color:"purple"}]},
{id:"puzzle-343",categories:[{name:"MARCAS DE GALLETAS",words:["OREOS","PRINCIPE","CHOKIS","ANILLOS"],color:"yellow"},{name:"PARTES DE LA MONTAÑA",words:["CUMBRE","LADERA","VALLE","BASE"],color:"green"},{name:"TEORIAS DE LA PERSONALIDAD",words:["BIG FIVE","ENNEAGRAMA","MBTI","TEMPERAMENTO"],color:"blue"},{name:"PALABRAS CON PREFIJO CRONO",words:["CRONOLOGIA","CRONOMETRO","CRONICA","CRONOGRAMA"],color:"purple"}]},
{id:"puzzle-344",categories:[{name:"ESPECIES DE ENCINA",words:["ENCINA","ALCORNOCUE","QUEJIGO","CARBALLO"],color:"yellow"},{name:"TIPOS DE BOLSO",words:["MOCHILA","RIÑONERA","CARTERA","TOTE"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","TRAUMATOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO HOMO",words:["HOMOGENEO","HOMBRE","HOMONIMO","HOMOLOGO"],color:"purple"}]},
{id:"puzzle-345",categories:[{name:"ANIMALES DE LA SABANA",words:["CEBRA","JIRAFA","ANTILOPE","ÑU"],color:"yellow"},{name:"UTILES DE COCINA",words:["COLADOR","RALLADOR","PELADOR","BATIDOR"],color:"green"},{name:"PROCESOS DEL CUERPO",words:["RESPIRACION","DIGESTION","CIRCULACION","EXCRECION"],color:"blue"},{name:"PALABRAS CON PREFIJO GEOCENTRICO",words:["GEOCENTRISMO","GEOCENTRICO","GEODESIA","GEOCRONOLOGIA"],color:"purple"}]},
{id:"puzzle-346",categories:[{name:"MARCAS DE PIZZA",words:["DOMINO'S","PIZZA HUT","PAPA JOHN'S","LITTLE CAESARS"],color:"yellow"},{name:"PARTES DE LA NOCHE",words:["ATARDECER","ANOCHECER","MADRUGADA","ALBA"],color:"green"},{name:"DISCIPLINAS DE LA SALUD",words:["NUTRICION","FISIOTERAPIA","ENFERMERIA","FARMACIA"],color:"blue"},{name:"PALABRAS CON PREFIJO ENDO",words:["ENDOCRINO","ENDOSCOPIA","ENDODONCIA","ENDOTERMICO"],color:"purple"}]},
{id:"puzzle-347",categories:[{name:"AVES DEL BOSQUE",words:["CARPINTERO","URACA","PALOMA","GORRION"],color:"yellow"},{name:"TIPOS DE CAFE",words:["ESPRESSO","CAPUCHINO","LATTE","MOCA"],color:"green"},{name:"TEORIAS DE LA EDUCACION",words:["TRADICIONAL","PROGRESISTA","CRITICA","CONSTRUCTIVISTA"],color:"blue"},{name:"PALABRAS CON PREFIJO ANA",words:["ANALISIS","ANATOMIA","ANALOGIA","ANACRONISMO"],color:"purple"}]},
{id:"puzzle-348",categories:[{name:"ANIMALES DEL HUERTO",words:["CONEJO","CARACOL","TOPO","LOMBRIZ"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","ESPATULA","RODILLO","BROCHA"],color:"green"},{name:"RAMAS DE LA PSICOLOGIA",words:["CLINICA","EDUCATIVA","SOCIAL","ORGANIZACIONAL"],color:"blue"},{name:"PALABRAS CON PREFIJO LITO",words:["LITOSFERA","LITOGRAFIA","LITOLOGIA","LITOGRAMA"],color:"purple"}]},
{id:"puzzle-349",categories:[{name:"MARCAS DE SALSA",words:["VALENTINA","CHOLULA","TABASCO","SRIBACHA"],color:"yellow"},{name:"PARTES DE LA CASCADA",words:["SALTO","POZO","ROCIO","TORRENTE"],color:"green"},{name:"FENOMENOS SOCIALES",words:["MIGRACION","URBANIZACION","GLOBALIZACION","DESIGUALDAD"],color:"blue"},{name:"PALABRAS CON PREFIJO TELU",words:["TELURICO","TELURISMO","TELURIA","TELURGIA"],color:"purple"}]},
{id:"puzzle-350",categories:[{name:"ESPECIES DE PALMERA",words:["COCOTERA","DATILERA","ARECA","KENTIA"],color:"yellow"},{name:"TIPOS DE SOMBRERO",words:["GORRA","PAMELA","COPA","VISERA"],color:"green"},{name:"TEORIAS DE LA DEMOCRACIA",words:["DIRECTA","REPRESENTATIVA","PARTICIPATIVA","DELIBERATIVA"],color:"blue"},{name:"PALABRAS CON PREFIJO ZOO",words:["ZOOLOGIA","ZOOTERAPIA","ZOOLOGICO","ZOOPLANCTON"],color:"purple"}]},
{id:"puzzle-351",categories:[{name:"ANIMALES DEL BOSQUE",words:["CIERVO","ZORRO","ARDILLA","TEJON"],color:"yellow"},{name:"UTILES DE JARDIN",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"RAMAS DE LA FISICA",words:["MECANICA","TERMODINAMICA","OPTICA","ACUSTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO MISO",words:["MISOGINIA","MISANTROPIA","MISOGINO","MISOLOGIA"],color:"purple"}]},
{id:"puzzle-352",categories:[{name:"MARCAS DE REFRESCO",words:["COCA-COLA","PEPSI","SPRITE","FANTA"],color:"yellow"},{name:"PARTES DE LA HOJA",words:["LIMBO","PECIOLO","NASTRO","VENA"],color:"green"},{name:"PROCESOS GEOLOGICOS",words:["EROSION","SEDIMENTACION","GLACIACION","OROGENESIS"],color:"blue"},{name:"PALABRAS CON PREFIJO XENO",words:["XENOFOBIA","XENOTRASPLANTE","XENOGLOSIA","XENOFILO"],color:"purple"}]},
{id:"puzzle-353",categories:[{name:"AVES DE LA SELVA",words:["GUACAMAYA","TUCAN","QUETZAL","LAPA"],color:"yellow"},{name:"TIPOS DE PAN",words:["BLANCO","INTEGRAL","CENTENO","MASA MADRE"],color:"green"},{name:"DISCIPLINAS MATEMATICAS",words:["ARITMETICA","ALGEBRA","GEOMETRIA","TRIGONOMETRIA"],color:"blue"},{name:"PALABRAS CON PREFIJO GENO",words:["GENOCIDIO","GENOTIPO","GENOMA","GENETICA"],color:"purple"}]},
{id:"puzzle-354",categories:[{name:"ANIMALES DE LA GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"yellow"},{name:"UTILES DE BAÑO",words:["TOALLA","ALBORNOZ","ESTERILLA","CORTINA"],color:"green"},{name:"TEORIAS DE LA GUERRA",words:["TOTAL","LIMITADA","CIVIL","ASIMETRICA"],color:"blue"},{name:"PALABRAS CON PREFIJO PALE",words:["PALEONTOLOGIA","PALEOLITICO","PALEOZOICO","PALEOCENO"],color:"purple"}]},
{id:"puzzle-355",categories:[{name:"MARCAS DE CAFE",words:["NESCAFE","STARBUCKS","DUNKIN","LAVAZZA"],color:"yellow"},{name:"PARTES DE LA LUNA",words:["CRECIENTE","LLENA","MENGUANTE","NUEVA"],color:"green"},{name:"RAMAS DE LA AGRICULTURA",words:["AGRONOMIA","HORTICULTURA","FRUTICULTURA","VITICULTURA"],color:"blue"},{name:"PALABRAS CON PREFIJO CRIO",words:["CRIOLLO","CRIOTERAPIA","CIRIOGENIA","CRIOSFERA"],color:"purple"}]},
{id:"puzzle-356",categories:[{name:"ESPECIES DE SETA",words:["CHAMPIÑON","TRUFA","BOLETUS","NISCALO"],color:"yellow"},{name:"TIPOS DE TELA",words:["ALGODON","LINO","SEDA","LANA"],color:"green"},{name:"RAMAS DE LA HISTORIA",words:["ANTIGUA","MEDIA","MODERNA","CONTEMPORANEA"],color:"blue"},{name:"PALABRAS CON PREFIJO FILO",words:["FILOSOFIA","FILOLOGIA","FILANTROPIA","FILATELIA"],color:"purple"}]},
{id:"puzzle-357",categories:[{name:"ANIMALES DEL CAÑON",words:["BUITRE","CABRA","SERPIENTE","AGUILA"],color:"yellow"},{name:"UTILES DE PESCA",words:["CAÑA","ANZUELO","CARRETE","SEÑUELO"],color:"green"},{name:"PROCESOS DE LA TIERRA",words:["PLIEGUE","FALLA","DIACLASA","FRACTURA"],color:"blue"},{name:"PALABRAS CON PREFIJO PANO",words:["PANORAMA","PANORAMICA","PANOPTICO","PANORAMICO"],color:"purple"}]},
{id:"puzzle-358",categories:[{name:"MARCAS DE LECHE",words:["NESTLE","ALPURA","LALA","SANTA CLARA"],color:"yellow"},{name:"PARTES DE LA ROCA",words:["MINERAL","CRISTAL","GRANO","VETA"],color:"green"},{name:"DISCIPLINAS DE LA HISTORIA",words:["PREHISTORIA","EDAD ANTIGUA","EDAD MEDIA","EDAD MODERNA"],color:"blue"},{name:"PALABRAS CON PREFIJO SINO",words:["SINONIMO","SINONIMIA","SINONIMICO","SINONIMIA"],color:"purple"}]},
{id:"puzzle-359",categories:[{name:"AVES DEL BOSQUE",words:["CARPINTERO","PETIRROJO","RUISEÑOR","URACA"],color:"yellow"},{name:"TIPOS DE CHOCOLATE",words:["NEGRO","LECHE","BLANCO","RUBI"],color:"green"},{name:"TEORIAS DE LA ARQUITECTURA",words:["CLASICA","GOTICA","MODERNA","CONTEMPORANEA"],color:"blue"},{name:"PALABRAS CON PREFIJO ISO",words:["ISOMERIA","ISOTERMO","ISOBARA","ISOMETRICO"],color:"purple"}]},
{id:"puzzle-360",categories:[{name:"ANIMALES DE LA MONTAÑA",words:["CABRA","BUITRE","GAMUZA","MARMOTA"],color:"yellow"},{name:"UTILES DE COCINA",words:["OLLA","SARTEN","CAZUELA","WOK"],color:"green"},{name:"RAMAS DE LA ECONOMIA",words:["MICROECONOMIA","MACROECONOMIA","ECONOMETRIA","FINANZAS"],color:"blue"},{name:"PALABRAS CON PREFIJO GEO",words:["GEOGRAFIA","GEOLOGIA","GEOMETRIA","GEOPOLITICA"],color:"purple"}]},
{id:"puzzle-361",categories:[{name:"MARCAS DE HAMBURGUESA",words:["MCDONALD'S","BURGER KING","WENDY'S","FIVE GUYS"],color:"yellow"},{name:"PARTES DE LA TIERRA",words:["CORTEZA","MANTO","NUCLEO","LITOSFERA"],color:"green"},{name:"FENOMENOS NATURALES",words:["TERREMOTO","TORNADO","HURACAN","TSUNAMI"],color:"blue"},{name:"PALABRAS CON PREFIJO TERRA",words:["TERRENO","TERRITORIO","TERRARIO","TERRACOTA"],color:"purple"}]},
{id:"puzzle-362",categories:[{name:"ESPECIES DE ABEJA",words:["OBRERA","ZANGANO","REINA","MELIPONA"],color:"yellow"},{name:"TIPOS DE LAMPARA",words:["MESA","TECHO","PIE","PARED"],color:"green"},{name:"TEORIAS DE LA FELICIDAD",words:["EUDEMONIA","HEDONISMO","FLUIR","AUTOREALIZACION"],color:"blue"},{name:"PALABRAS CON PREFIJO VIDE",words:["VIDEOJUEGO","VIDEOLLAMADA","VIDEOCLUB","VIDEOTECA"],color:"purple"}]},
{id:"puzzle-363",categories:[{name:"ANIMALES DEL POLO",words:["OSO POLAR","PINGÜINO","FOCA","BELUGA"],color:"yellow"},{name:"UTILES DE CARPINTERIA",words:["SIERRA","CEPILLO","FORMON","LIJADORA"],color:"green"},{name:"RAMAS DE LA FILOSOFIA",words:["ETICA","LOGICA","METAFISICA","ESTETICA"],color:"blue"},{name:"PALABRAS CON PREFIJO AERO",words:["AEROPUERTO","AERONAUTICA","AERODINAMICA","AEROBICO"],color:"purple"}]},
{id:"puzzle-364",categories:[{name:"MARCAS DE YOGURT",words:["YOPLAIT","DANONE","ACTIVIA","SKYR"],color:"yellow"},{name:"PARTES DE LA SEMANA",words:["LUNES","MARTES","MIERCOLES","JUEVES"],color:"green"},{name:"PROCESOS DEL CUERPO",words:["RESPIRACION","DIGESTION","CIRCULACION","EXCRECION"],color:"blue"},{name:"PALABRAS CON PREFIJO RADIO",words:["RADIOGRAFIA","RADIOACTIVO","RADIODIFUSION","RADIOTERAPIA"],color:"purple"}]},
{id:"puzzle-365",categories:[{name:"AVES DEL JARDIN",words:["COLIBRI","GORRION","PALOMA","JILGUERO"],color:"yellow"},{name:"TIPOS DE COLCHON",words:["MUELLES","ESPUMA","LATEX","HIDRICO"],color:"green"},{name:"DISCIPLINAS DEL DEPORTE",words:["FISIOLOGIA","BIOMECANICA","PSICOLOGIA","NUTRICION"],color:"blue"},{name:"PALABRAS CON PREFIJO ELECTRO",words:["ELECTRICIDAD","ELECTRONICA","ELECTRODOMESTICO","ELECTROMAGNETICO"],color:"purple"}]},
{id:"puzzle-366",categories:[{name:"ANIMALES DE AMERICA",words:["JAGUAR","PUMA","ANACONDA","CAPIBARA"],color:"yellow"},{name:"TIPOS DE CHILE",words:["JALAPEÑO","HABANERO","POBLANO","CHIPOTLE"],color:"green"},{name:"ELEMENTOS DEL AIRE",words:["NITROGENO","OXIGENO","ARGON","DIOXIDO"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN POR RR",words:["RODILLA","ROSTRO","ROBLE","RUIDO"],color:"purple"}]},
{id:"puzzle-367",categories:[{name:"MARCAS DE CONSOLA",words:["PLAYSTATION","XBOX","NINTENDO","SEGA"],color:"yellow"},{name:"TIPOS DE NIEBLA",words:["RADIACION","ADVECCION","BANCA","OROGRÁFICA"],color:"green"},{name:"DISCIPLINAS CIENTIFICAS",words:["ASTRONOMIA","BIOLOGIA","FISICA","GEOLOGIA"],color:"blue"},{name:"PALABRAS CON 4 VOCALES",words:["MURCIELAGO","AEROPUERTO","ARQUITECTO","AURICULAR"],color:"purple"}]},
{id:"puzzle-368",categories:[{name:"DEPORTES DE AGUA",words:["NATACION","POLO","WATERPOLO","SALTOS"],color:"yellow"},{name:"MATERIALES DE ARTE",words:["LIENZO","PINCEL","PALETA","CABALLETE"],color:"green"},{name:"FENOMENOS SISMICOS",words:["TERREMOTO","REPLICA","EPICENTRO","HIPOCENTRO"],color:"blue"},{name:"PALABRAS CON TRIPLE A",words:["ALMANAQUE","CABALGATA","CARAMBOLA","ALFABETO"],color:"purple"}]},
{id:"puzzle-369",categories:[{name:"URBANISMO",words:["CIUDAD","BARRIO","AVENIDA","PLAZA"],color:"yellow"},{name:"TRASTORNOS ALIMENTOS",words:["ANOREXIA","BULIMIA","ORTOREXIA","VIGOREXIA"],color:"green"},{name:"INSTRUMENTOS VIENTO MADERA",words:["CLARINETE","OBOE","FAGOT","FLAUTIN"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN POR PS",words:["PSICOLOGIA","PSIQUIATRA","PSICOSIS","PSICOANALISIS"],color:"purple"}]},
{id:"puzzle-370",categories:[{name:"GRANDES CIUDADES",words:["TOKIO","LONDRES","PARIS","NUEVA YORK"],color:"yellow"},{name:"TIPOS DE NUBE",words:["CUMULONIMBO","ALTOSTRATUS","CIRRESTRATUS","NIMBESTRATUS"],color:"green"},{name:"RAMAS DE LA INGENIERIA",words:["AERONAUTICA","NAVAL","AMBIENTAL","BIOMEDICA"],color:"blue"},{name:"PALABRAS CON SUFIJO TORIO",words:["LABORATORIO","DORMITORIO","OBSERVATORIO","CREMATORIO"],color:"purple"}]},
{id:"puzzle-371",categories:[{name:"ANIMALES DE MADAGASCAR",words:["LEMUR","FOSA","CAMALEON","GECKO"],color:"yellow"},{name:"UTENSILIOS JARDIN",words:["PALA","AZADA","BINADOR","ESCARDA"],color:"green"},{name:"TEORIAS DE LA LUZ",words:["CORPUSCULAR","ONDULATORIA","CUANTICA","ELECTROMAGNETICA"],color:"blue"},{name:"PALABRAS CON 2 SILABAS",words:["SOL","MAR","CASA","PERRO"],color:"purple"}]},
{id:"puzzle-372",categories:[{name:"INSTRUMENTOS VIENTO",words:["TROMPETA","TROMBON","CORNO","TUBA"],color:"yellow"},{name:"PARTES DE LA PLANTA",words:["RAIZ","TALLO","HOJA","FRUTO"],color:"green"},{name:"BIOMAS TERRESTRES",words:["SELVA","DESIERTO","TUNDRA","TAIGA"],color:"blue"},{name:"PALABRAS DE OCHO LETRAS",words:["CIRCULAR","CUADRADO","HEXAGONO","OCTOGONO"],color:"purple"}]},
{id:"puzzle-373",categories:[{name:"MARCAS DE MODA",words:["ZARA","H&M","MANGO","UNIQLO"],color:"yellow"},{name:"HERRAMIENTAS JARDIN",words:["PODADORA","CORTACESPED","DESBROZADORA","SOPLADOR"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS S.XX",words:["EXPRESIONISMO","FAUVISMO","CUBISMO","FUTURISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO ENTRE",words:["ENTREACTO","ENTRECALLE","ENTRECEJO","ENTREPISO"],color:"purple"}]},
{id:"puzzle-374",categories:[{name:"ANIMALES DE LA PATAGONIA",words:["GUANACO","ÑANDU","PUMO","HUEMUL"],color:"yellow"},{name:"TIPOS DE TURISMO",words:["AVENTURA","CULTURAL","GASTRONOMICO","ECOLOGICO"],color:"green"},{name:"CAPAS DE LA ATMOSFERA",words:["TROPOSFERA","ESTRATOSFERA","MESOSFERA","TERMOSFERA"],color:"blue"},{name:"PALABRAS CON PREFIJO SOBRE",words:["SOBRESALIR","SOBREVIVIR","SOBREPONER","SOBRECARGAR"],color:"purple"}]},
{id:"puzzle-375",categories:[{name:"DEPORTES DE MONTAÑA",words:["SENDERISMO","ESCALADA","ALPINISMO","RAPEL"],color:"yellow"},{name:"COSAS DE LA COCINA",words:["ENCIMERA","CAMPANA","FREGADERO","GRIFO"],color:"green"},{name:"TIPOS DE ROCA",words:["IGNEA","METAMORFICA","SEDIMENTARIA","VOLCANICA"],color:"blue"},{name:"PALABRAS DE OCHO LETRAS",words:["ESTRELLA","SATELITE","MARIPOSA","ELEFANTE"],color:"purple"}]},
{id:"puzzle-376",categories:[{name:"ANIMALES DE LOS ANDES",words:["CONDOR","VICUÑA","ALPACA","LLAMA"],color:"yellow"},{name:"GENEROS DE PELICULA",words:["ACCION","COMEDIA","DRAMA","TERROR"],color:"green"},{name:"ESTRUCTURAS CELULARES",words:["MEMBRANA","CITOPLASMA","NUCLEO","VACUOLA"],color:"blue"},{name:"PALABRAS CON PREFIJO CONTRA",words:["CONTRAATAQUE","CONTRADECIR","CONTRASTAR","CONTRAPESO"],color:"purple"}]},
{id:"puzzle-377",categories:[{name:"MARCAS DE ZAPATILLAS",words:["NIKE","ADIDAS","PUMA","NEW BALANCE"],color:"yellow"},{name:"TIPOS DE ENERGIA RENOVABLE",words:["SOLAR","EOLICA","HIDRAULICA","GEOTERMICA"],color:"green"},{name:"TEORIAS DEL APRENDIZAJE",words:["CONDUCTISMO","COGNITIVISMO","CONSTRUCTIVISMO","CONECTIVISMO"],color:"blue"},{name:"PALABRAS DE DIEZ LETRAS",words:["BIBLIOTECA","CAMPANARIO","MANDARINAS","ZANAHORIAS"],color:"purple"}]},
{id:"puzzle-378",categories:[{name:"PLATOS DE LA COCINA MEXICANA",words:["TACO","TAMAL","POZOLE","CHILAQUILES"],color:"yellow"},{name:"PARTES DEL ORDENADOR",words:["MONITOR","TECLADO","RATON","PLACA"],color:"green"},{name:"FENOMENOS GEOFISICOS",words:["EROSION","SEDIMENTACION","GLACIACION","OROGENESIS"],color:"blue"},{name:"PALABRAS CON SUFIJO CRA",words:["DEMOCRACIA","TECNOCRACIA","PLUTOCRACIA","AUTOCRACIA"],color:"purple"}]},
{id:"puzzle-379",categories:[{name:"ESCRITORES ESPAÑOLES",words:["CERVANTES","QUEVEDO","GONGORA","LORCA"],color:"yellow"},{name:"TIPOS DE REGGAETON",words:["TRAP","DRILL","REGGAE","DANCEHALL"],color:"green"},{name:"RAMAS DE LA GEOLOGIA",words:["MINERALOGIA","PETROLOGIA","SISMOLOGIA","VULCANOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO CO",words:["COEXISTIR","COOPERAR","COORDINAR","COAUTOR"],color:"purple"}]},
{id:"puzzle-380",categories:[{name:"CELEBRIDADES ESPAÑOLAS",words:["ROSALIA","ANTONIO BANDERAS","PENELOPE CRUZ","RAFA NADAL"],color:"yellow"},{name:"MATERIALES TEXTILES",words:["ALGODON","LINO","SEDA","CACEMIRA"],color:"green"},{name:"PROCESOS FISICOS",words:["FUSION","EBULLICION","EVAPORACION","CONDENSACION"],color:"blue"},{name:"PALABRAS CON PREFIJO SUB",words:["SUBTERRANEO","SUBMARINO","SUBURBANO","SUBTITULO"],color:"purple"}]},
{id:"puzzle-381",categories:[{name:"ANIMALES DEL MEDITERRANEO",words:["MEDUSA","PULPO","MERLUZA","ANCHOA"],color:"yellow"},{name:"PARTES DEL CUERPO HUMANO",words:["CORAZON","PULMON","HIGADO","RIÑON"],color:"green"},{name:"ESTILOS ARQUITECTONICOS",words:["GOTICO","ROMANICO","BARROCO","NEOCLASICO"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTI",words:["ANTISOCIAL","ANTIBIOTICO","ANTIGRAVEDAD","ANTINATURAL"],color:"purple"}]},
{id:"puzzle-382",categories:[{name:"MARCAS DE CERVEZA MEXICANA",words:["CORONA","MODELO","PACIFICO","XX"],color:"yellow"},{name:"HERRAMIENTAS DE CARPINTERIA",words:["LIJADORA","TALADRO","FRESADORA","INGLETADORA"],color:"green"},{name:"DISCIPLINAS DE LA BIOLOGIA",words:["BOTANICA","ZOOLOGIA","MICROBIOLOGIA","GENETICA"],color:"blue"},{name:"PALABRAS CON SUFIJO BOGA",words:["CINEASTA","NOVELISTA","ARTISTA","PERIODISTA"],color:"purple"}]},
{id:"puzzle-383",categories:[{name:"DEPORTES DE RAQUETA",words:["TENIS","BADMINTON","SQUASH","PADEL"],color:"yellow"},{name:"TIPOS DE PASTEL",words:["TARTA","BIZCOCHO","BRAZO","PYM"],color:"green"},{name:"TEORIAS DE LA FILOSOFIA",words:["ESTOICISMO","EPICUREISMO","PLATONISMO","ARISTOTELISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO SEMI",words:["SEMICIRCULO","SEMIFINAL","SEMIDIOS","SEMIPRESENCIAL"],color:"purple"}]},
{id:"puzzle-384",categories:[{name:"ANIMALES DEL SUR DE ASIA",words:["ELEFANTE","TIGRE","RINOCERONTE","PANDA"],color:"yellow"},{name:"UTILES DE COCINA",words:["BATIDORA","LICUADORA","PROCESADORA","EXPRIMIDOR"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","DERMATOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO INTER",words:["INTERNACIONAL","INTERACTIVO","INTERMEDIO","INTERRUPTOR"],color:"purple"}]},
{id:"puzzle-385",categories:[{name:"MARCAS DE TECNOLOGIA MEXICANAS",words:["SOFTTEK","NECSOFT","SISCOM","ITSON"],color:"yellow"},{name:"TIPOS DE SANDIA",words:["ROJA","AMARILLA","SIN SEMILLA","MINIATURA"],color:"green"},{name:"MOVIMIENTOS LITERARIOS",words:["MODERNISMO","VANGUARDISMO","REALISMO MAGICO","BOOM"],color:"blue"},{name:"PALABRAS CON PREFIJO SUPER",words:["SUPERMERCADO","SUPERFICIE","SUPERHUMANO","SUPERPOTENCIA"],color:"purple"}]},
{id:"puzzle-386",categories:[{name:"PAISES ANDINOS",words:["PERU","BOLIVIA","ECUADOR","CHILE"],color:"yellow"},{name:"PARTES DEL MOTOR",words:["CILINDRO","PISTON","VALVULA","BULON"],color:"green"},{name:"FENOMENOS OCEANOGRAFICOS",words:["OLAS","MAREAS","CORRIENTES","RESACA"],color:"blue"},{name:"PALABRAS CON SUFIJO ERO",words:["JARDINERO","PANADERO","CARPINTERO","CARNICERO"],color:"purple"}]},
{id:"puzzle-387",categories:[{name:"GRANDES CIUDADES DE MEXICO",words:["CDMX","GUADALAJARA","MONTERREY","PUEBLA"],color:"yellow"},{name:"TIPOS DE TORTILLA",words:["MAIZ","HARINA","TRIGO","NOPAL"],color:"green"},{name:"ESTRUCTURAS OSEAS",words:["FEMUR","TIBIA","HUMERO","COSTILLA"],color:"blue"},{name:"PALABRAS CON PREFIJO PRE",words:["PREHISTORIA","PREESCOLAR","PREVIO","PREPAGO"],color:"purple"}]},
{id:"puzzle-388",categories:[{name:"ANIMALES DE LA PENINSULA IBERICA",words:["LINCE","LOBO","OSO","CIERVO"],color:"yellow"},{name:"UTENSILIOS DE BAÑO",words:["TOALLA","ALBORNOZ","ESTERILLA","CORTINA"],color:"green"},{name:"RAMAS DE LA FISICA",words:["MECANICA","TERMODINAMICA","OPTICA","ACUSTICA"],color:"blue"},{name:"PALABRAS CON PREFIJO DES",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"purple"}]},
{id:"puzzle-389",categories:[{name:"MARCAS DE VESTIDO",words:["NIKE","ADIDAS","PUMA","CONVERSE"],color:"yellow"},{name:"TIPOS DE QUESO MEXICANO",words:["PANELA","OAXACA","MANCHEGO","COTIJA"],color:"green"},{name:"TEORIAS DE LA HISTORIA",words:["MATERIALISMO","ESTRUCTURALISMO","POSITIVISMO","HISTORICISMO"],color:"blue"},{name:"PALABRAS CON 12 LETRAS",words:["ESTERNOCLEIDO","CONSTITUCIONAL","INTERNACIONAL","ANTICONSTITUCIONAL"],color:"purple"}]},
{id:"puzzle-390",categories:[{name:"DEPORTES DE VELOCIDAD",words:["FORMULA 1","MOTOGP","ATLETISMO","CICLISMO"],color:"yellow"},{name:"PARTES DE LA FLOR",words:["COROLA","CALIZ","ESTAMBRE","PISTILO"],color:"green"},{name:"CAPAS DE LA PIEL",words:["EPIDERMIS","DERMIS","HIPODERMIS","TEJIDO"],color:"blue"},{name:"PALABRAS CON PREFIJO BIO",words:["BIOLOGIA","BIODIVERSIDAD","BIOMASA","BIOGRAFIA"],color:"purple"}]},
{id:"puzzle-391",categories:[{name:"MARCAS DE AUTOS DEPORTIVOS",words:["FERRARI","LAMBORGHINI","PORSCHE","ASTON MARTIN"],color:"yellow"},{name:"UTENSILIOS DE COSTURA",words:["AGUJA","HILO","DEDAL","ALFILER"],color:"green"},{name:"RAMAS DE LA QUIMICA",words:["ORGANICA","INORGANICA","ANALITICA","FISICOQUIMICA"],color:"blue"},{name:"PALABRAS CON PREFIJO MACRO",words:["MACROECONOMIA","MACROBIOTICA","MACROFOTOGRAFIA","MACROESTRUCTURA"],color:"purple"}]},
{id:"puzzle-392",categories:[{name:"ANIMALES DEL AMAZONAS",words:["ANACONDA","DORADO","PAICHE","PIRANHA"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","ESPATULA","RODILLO","BROCHA"],color:"green"},{name:"MOVIMIENTOS POLITICOS",words:["LIBERALISMO","CONSERVADURISMO","SOCIALISMO","FASCISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO EURO",words:["EUROPEO","EUROPEA","EUROVISION","EUROZONA"],color:"purple"}]},
{id:"puzzle-393",categories:[{name:"GRANDES LAGOS",words:["TITICACA","SUPERIOR","VICTORIA","MICHIGAN"],color:"yellow"},{name:"TIPOS DE TOMATE",words:["CHERRY","RALA","PERA","ROMA"],color:"green"},{name:"PROCESOS METABOLICOS",words:["CATABOLISMO","ANABOLISMO","GLUCOLISIS","CICLO KREBS"],color:"blue"},{name:"PALABRAS CON PREFIJO HIDRO",words:["HIDROELECTRICA","HIDRAULICO","HIDROGENO","HIDROAVION"],color:"purple"}]},
{id:"puzzle-394",categories:[{name:"MARCAS DE GASEOSA",words:["COCA-COLA","PEPSI","SPRITE","FANTA"],color:"yellow"},{name:"PARTES DE LA CAMA",words:["COLCHON","ALMOHADA","SABANA","COBIJA"],color:"green"},{name:"TEORIAS PSICOLOGICAS",words:["CONDUCTISMO","COGNITIVISMO","PSICOANALISIS","HUMANISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO TELE",words:["TELEFONO","TELEVISION","TELESCOPIO","TELEGRAMA"],color:"purple"}]},
{id:"puzzle-395",categories:[{name:"ANIMALES DEL CARIBE",words:["FLAMENCO","IGUANA","TORTUGA","MANATI"],color:"yellow"},{name:"TIPOS DE CAFE MEXICANO",words:["CHIAPAS","VERACRUZ","OAXACA","TAPACHULA"],color:"green"},{name:"GRANDES FIORDOS",words:["NORUEGA","CHILE","NUEVA ZELANDA","ISLANDIA"],color:"blue"},{name:"PALABRAS CON PREFIJO AUTO",words:["AUTOMOVIL","AUTOPISTA","AUTOMATICO","AUTONOMO"],color:"purple"}]},
{id:"puzzle-396",categories:[{name:"MARCAS DE RON",words:["BACARDI","HABANA CLUB","CAPTAIN MORGAN","DIPLOMATICO"],color:"yellow"},{name:"PARTES DEL BARCO",words:["CASCO","VELA","TIMON","ANCLA"],color:"green"},{name:"RAMAS DE LA ASTRONOMIA",words:["COSMOLOGIA","ASTROFISICA","PLANETOLOGIA","RADIOASTRONOMIA"],color:"blue"},{name:"PALABRAS CON PREFIJO FOTO",words:["FOTOGRAFIA","FOTOSINTESIS","FOTOCOPIADORA","FOTOGENICO"],color:"purple"}]},
{id:"puzzle-397",categories:[{name:"PAISES CENTROAMERICANOS",words:["GUATEMALA","HONDURAS","EL SALVADOR","NICARAGUA"],color:"yellow"},{name:"UTILES DE PESCA",words:["CAÑA","ANZUELO","RED","SEÑUELO"],color:"green"},{name:"DISCIPLINAS DE LA SALUD",words:["NUTRICION","FISIOTERAPIA","ENFERMERIA","FARMACIA"],color:"blue"},{name:"PALABRAS CON PREFIJO MONO",words:["MONOTONO","MONOPOLIO","MONOCULO","MONOGAMIA"],color:"purple"}]},
{id:"puzzle-398",categories:[{name:"ANIMALES DEL BOSQUE MEXICANO",words:["TEPORINGO","CONEJO","ARDILLA","TLACUACHE"],color:"yellow"},{name:"TIPOS DE NIEVE",words:["POLVO","HUMEDA","COMPACTA","GRANIZO"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS MEXICANOS",words:["MURALISMO","ESTRIDENTISMO","RUPTURA","CONTEMPORANEO"],color:"blue"},{name:"PALABRAS CON PREFIJO PLURI",words:["PLURINACIONAL","PLURICULTURAL","PLURILINGUE","PLURIANUAL"],color:"purple"}]},
{id:"puzzle-399",categories:[{name:"GRANDES EXPLORADORES",words:["COLON","MAGELLANES","COOK","PIZARRO"],color:"yellow"},{name:"TIPOS DE LLAVE",words:["INGLESA","FIJA","ALLEN","TORX"],color:"green"},{name:"TEORIAS DE LA ECONOMIA",words:["KEYNESIANISMO","MONETARISMO","MARXISMO","ESCUELA AUSTRIACA"],color:"blue"},{name:"PALABRAS CON PREFIJO MULTI",words:["MULTICOLOR","MULTINACIONAL","MULTIMEDIA","MULTIUSO"],color:"purple"}]},
{id:"puzzle-400",categories:[{name:"MARCAS DE BICICLETA",words:["TREK","SPECIALIZED","GIANT","CANNONDALE"],color:"yellow"},{name:"PARTES DE LA LUNA",words:["CRECIENTE","LLENA","MENGUANTE","NUEVA"],color:"green"},{name:"PROCESOS INDUSTRIALES",words:["FUNDICION","FORJA","LAMINADO","EXTRUSION"],color:"blue"},{name:"PALABRAS CON PREFIJO CARDIO",words:["CARDIOLOGIA","CARDIOVASCULAR","CARDIOPATIA","CARDIACO"],color:"purple"}]},
{id:"puzzle-401",categories:[{name:"ANIMALES DE LA PREHISTORIA",words:["MAMUT","DODO","TIGRE DIENTE","PEREZOSO"],color:"yellow"},{name:"UTILES DE MECANICA",words:["LLAVE","DESTORNILLADOR","ALICATE","MARTILLO"],color:"green"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ESPECTRO","REFLEJO","REFLEXION"],color:"blue"},{name:"PALABRAS CON PREFIJO CRONO",words:["CRONOLOGIA","CRONOMETRO","CRONICA","CRONOGRAMA"],color:"purple"}]},
{id:"puzzle-402",categories:[{name:"MARCAS DE LAPTOP",words:["DELL","HP","LENOVO","ASUS"],color:"yellow"},{name:"TIPOS DE TELA",words:["ALGODON","POLIESTER","LINO","SEDA"],color:"green"},{name:"RAMAS DE LA MEDICINA",words:["PEDIATRIA","GERIATRIA","PSIQUIATRIA","TRAUMATOLOGIA"],color:"blue"},{name:"PALABRAS CON SUFIJO FONO",words:["TELEFONO","SAXOFON","MICROFONO","MEGAFONO"],color:"purple"}]},
{id:"puzzle-403",categories:[{name:"PAISES DEL GOLFO",words:["ARABIA SAUDITA","EMIRATOS","QATAR","KUWAIT"],color:"yellow"},{name:"PARTES DEL RELOJ",words:["MANECILLA","ESFERA","CORONA","PULSERA"],color:"green"},{name:"TEORIAS DE LA PERSONALIDAD",words:["BIG FIVE","ENNEAGRAMA","MBTI","TEMPERAMENTO"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTRO",words:["ANTROPOLOGIA","ANTROPOCENO","ANTROPOMORFO","ANTROPOLOGO"],color:"purple"}]},
{id:"puzzle-404",categories:[{name:"ANIMALES DEL PACIFICO",words:["BALLENA","DELFIN","FOCA","LEON MARINO"],color:"yellow"},{name:"VEGETALES DE TEMPORADA",words:["ESPARRAGO","GUISANTE","HABICHUELA","ACELGA"],color:"green"},{name:"MOVIMIENTOS SOCIALES",words:["FEMINISMO","ECOLOGISMO","PACIFISMO","INDIGENISMO"],color:"blue"},{name:"PALABRAS CON PREFIJO XENO",words:["XENOFOBIA","XENOTRASPLANTE","XENOGLOSIA","XENOFILO"],color:"purple"}]},
{id:"puzzle-405",categories:[{name:"MARCAS DE RELOJES",words:["ROLEX","OMEGA","CASIO","SEIKO"],color:"yellow"},{name:"TIPOS DE CORTINA",words:["ESTORES","VISILLO","PERSIANA","CORTINON"],color:"green"},{name:"ESTRUCTURAS GEOLOGICAS",words:["MONTAÑA","VALLE","MESETA","LLANURA"],color:"blue"},{name:"PALABRAS CON PREFIJO TECNO",words:["TECNOLOGIA","TECNOESTRES","TECNOCRACIA","TECNICISMO"],color:"purple"}]},
{id:"puzzle-406",categories:[{name:"GRANDES RIOS",words:["AMAZONAS","NILO","MISISIPI","GANGES"],color:"yellow"},{name:"UTILES DE PINTURA",words:["PINCEL","LIENZO","CABALLETE","ESPATULA"],color:"green"},{name:"TEORIAS DE LA EDUCACION",words:["TRADICIONAL","PROGRESISTA","CRITICA","CONSTRUCTIVISTA"],color:"blue"},{name:"PALABRAS CON PREFIJO GEO",words:["GEOGRAFIA","GEOLOGIA","GEOMETRIA","GEOPOLITICA"],color:"purple"}]},
{id:"puzzle-407",categories:[{name:"ANIMALES DEL BOSQUE TEMPLADO",words:["CIERVO","OSO","ZORRO","ARDILLA"],color:"yellow"},{name:"TIPOS DE CHOCOLATE",words:["NEGRO","LECHE","BLANCO","RUBI"],color:"green"},{name:"RAMAS DE LA SOCIOLOGIA",words:["URBANA","RURAL","POLITICA","CULTURAL"],color:"blue"},{name:"PALABRAS CON PREFIJO HELIO",words:["HELIOCENTRICO","HELIOSFERA","HELIOTERAPIA","HELIOTROPO"],color:"purple"}]},
{id:"puzzle-408",categories:[{name:"MARCAS DE AUDIFONOS",words:["SONY","BOSE","SENNHEISER","BEATS"],color:"yellow"},{name:"PARTES DE LA GUITARRA",words:["CUERPO","MASTIL","TRASTES","CUERDAS"],color:"green"},{name:"PROCESOS COGNITIVOS",words:["MEMORIA","ATENCION","LENGUAJE","PERCEPCION"],color:"blue"},{name:"PALABRAS CON PREFIJO NEURO",words:["NEUROCIENCIA","NEUROLOGIA","NEUROTRANSMISOR","NEUROPSICOLOGIA"],color:"purple"}]},
{id:"puzzle-409",categories:[{name:"PAISES NORDICOS",words:["NORUEGA","SUECIA","FINLANDIA","DINAMARCA"],color:"yellow"},{name:"TIPOS DE ALMOHADA",words:["VISCOELASTICA","PLUMAS","LATEX","FIBRA"],color:"green"},{name:"DISCIPLINAS DE LA TIERRA",words:["GEOLOGIA","METEOROLOGIA","OCEANOGRAFIA","SISMOLOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO RADIO",words:["RADIOGRAFIA","RADIOACTIVO","RADIODIFUSION","RADIOTERAPIA"],color:"purple"}]},
{id:"puzzle-410",categories:[{name:"ANIMALES DE LA COSTA",words:["GAVIOTA","PELICANO","GOLONDRINA","CANGREJO"],color:"yellow"},{name:"UTILES DE DIBUJO",words:["LAPIZ","CARBONCILLO","PASTEL","SANGUINA"],color:"green"},{name:"TEORIAS DE LA MEMORIA",words:["SENSORIAL","CORTO PLAZO","LARGO PLAZO","PROCEDIMENTAL"],color:"blue"},{name:"PALABRAS CON PREFIJO ELECTRO",words:["ELECTRICIDAD","ELECTRONICA","ELECTRODOMESTICO","ELECTROMAGNETICO"],color:"purple"}]},
{id:"puzzle-411",categories:[{name:"MARCAS DE TEQUILA",words:["JOSE CUERVO","DON JULIO","PATRON","SAUZA"],color:"yellow"},{name:"PARTES DE LA MONTAÑA",words:["CUMBRE","LADERA","VALLE","BASE"],color:"green"},{name:"FENOMENOS BIOLOGICOS",words:["FOTOSINTESIS","RESPIRACION","DIGESTION","CIRCULACION"],color:"blue"},{name:"PALABRAS CON PREFIJO AERO",words:["AEROPUERTO","AERONAUTICA","AERODINAMICA","AEROBICO"],color:"purple"}]},
{id:"puzzle-412",categories:[{name:"GRANDES MARAVILLAS",words:["CHICHEN ITZA","MACHU PICCHU","COLISEO","TAJ MAHAL"],color:"yellow"},{name:"TIPOS DE PAN",words:["BAGUETTE","CHAPATA","BOLLO","PANECILLO"],color:"green"},{name:"RAMAS DE LA FILOSOFIA",words:["ETICA","LOGICA","METAFISICA","ESTETICA"],color:"blue"},{name:"PALABRAS CON PREFIJO CATA",words:["CATALOGO","CATALIZADOR","CATARATA","CATACLISMO"],color:"purple"}]},
{id:"puzzle-413",categories:[{name:"ANIMALES DE AMERICA DEL SUR",words:["GUEPARDO","CAPIBARA","TAPIR","OSO HORMIGUERO"],color:"yellow"},{name:"PARTES DE LA LAVADORA",words:["TAMBOR","PANEL","MANGUERA","FILTRO"],color:"green"},{name:"TEORIAS DE LA COMUNICACION",words:["EMISOR","RECEPTOR","MENSAJE","CANAL"],color:"blue"},{name:"PALABRAS CON PREFIJO TERMO",words:["TERMOMETRO","TERMOSTATO","TERMODINAMICA","TERMOELECTRICA"],color:"purple"}]},
{id:"puzzle-414",categories:[{name:"MARCAS DE VODKA",words:["ABSOLUT","SMIRNOFF","GREY GOOSE","BELVEDERE"],color:"yellow"},{name:"TIPOS DE SILLA",words:["PLEGABLE","GIRATORIA","TUMBONA","MEEDORA"],color:"green"},{name:"PROCESOS DE PENSAMIENTO",words:["DEDUCCION","INDUCCION","ABDUCCION","ANALOGIA"],color:"blue"},{name:"PALABRAS CON PREFIJO PARA",words:["PARACAIDAS","PARAGUAS","PARABRISAS","PARACHOQUES"],color:"purple"}]},
{id:"puzzle-415",categories:[{name:"PAISES DE EUROPA DEL ESTE",words:["POLONIA","REPUBLICA CHECA","HUNGRIA","RUMANIA"],color:"yellow"},{name:"UTILES DE JARDINERIA",words:["PALA","RASTRILLO","AZADA","TIJERAS"],color:"green"},{name:"MOVIMIENTOS ARTISTICOS",words:["RENACIMIENTO","MANIERISMO","BARROCO","ROCOCO"],color:"blue"},{name:"PALABRAS CON PREFIJO CINE",words:["CINEMATOGRAFIA","CINEMATECA","CINEFILO","CINESCOPIO"],color:"purple"}]}
];

const JASON_PUZZLES = [
{id:"jason-1",categories:[{name:"PALABRAS CON DOBLE R",words:["CARRETERA","ARROZ","BARRIL","CORREDOR"],color:"yellow"},{name:"SINÓNIMOS DE GRANDE",words:["ENORME","GIGANTESCO","COLOSAL","MONSTRUOSO"],color:"green"},{name:"INSTRUMENTOS DE VIENTO",words:["TROMPETA","CLARINETE","SAXOFON","FLAUTA"],color:"blue"},{name:"VERBOS EN PASADO",words:["CAMBIO","CANTO","SALTO","MIRO"],color:"purple"}]},{id:"jason-2",categories:[{name:"PREFIJO 'DES-'",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"yellow"},{name:"ANIMALES DE GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"green"},{name:"PALABRAS QUE TERMINAN EN 'EZA'",words:["BELLEZA","RIQUEZA","POBREZA","PUREZA"],color:"blue"},{name:"MESES SIN 'R'",words:["MAYO","JUNIO","JULIO","AGOSTO"],color:"purple"}]},{id:"jason-3",categories:[{name:"VERBOS IRREGULARES",words:["TENER","PONER","SALIR","VENIR"],color:"yellow"},{name:"PUENTES FAMOSOS",words:["GOLDEN GATE","TORRE","RIALTO","BROOKLYN"],color:"green"},{name:"SUSTANTIVOS ABSTRACTOS",words:["ESPERANZA","LIBERTAD","JUSTICIA","IGUALDAD"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN CON 'H'",words:["HUEVO","HUESO","HIELO","HUERTO"],color:"purple"}]},{id:"jason-4",categories:[{name:"DÍAS DE LA SEMANA",words:["LUNES","VIERNES","DOMINGO","MARTES"],color:"yellow"},{name:"TERMINAN EN 'ÓN'",words:["CAMISÓN","COLCHÓN","RATÓN","CINTURÓN"],color:"green"},{name:"COSAS QUE EXPIRAN",words:["LECHE","PAN","MEDICINA","PERFUME"],color:"blue"},{name:"TIENEN HOMÓFONO",words:["VACA","BARON","HOLA","ASTA"],color:"purple"}]},{id:"jason-5",categories:[{name:"FRUTAS",words:["PLATANO","MANGO","MELON","KIWI"],color:"yellow"},{name:"PRENDAS INTERIORES",words:["CALCETÍN","CAMISETA","BOXER","SOSTÉN"],color:"green"},{name:"FIESTAS MUNDIALES",words:["CARNAVAL","OKTOBERFEST","JAZZ","TOMATINA"],color:"blue"},{name:"PALÍNDROMOS",words:["SALAS","RECONOCER","SOMOS","ANILINA"],color:"purple"}]},{id:"jason-6",categories:[{name:"GENTILICIOS",words:["MEXICANO","ARGENTINO","CHILENO","CUBANO"],color:"yellow"},{name:"TIEMPO VERBAL",words:["COMIÓ","SALIÓ","VIVIÓ","CORRIÓ"],color:"green"},{name:"COSAS FRÁGILES",words:["CRISTAL","HUEVO","ESPEJO","PORCELANA"],color:"blue"},{name:"NOMBRES COLECTIVOS",words:["MANADA","REBAÑO","EJERCITO","FLOTA"],color:"purple"}]},{id:"jason-7",categories:[{name:"FENÓMENOS NATURALES",words:["TERREMOTO","TORMENTA","TIFÓN","ERUPCIÓN"],color:"yellow"},{name:"PALABRAS INVARIABLES",words:["SALUD","CAOS","SED","HAMBRE"],color:"green"},{name:"RIOS DE EUROPA",words:["DANUBIO","RIN","SENA","TAJO"],color:"blue"},{name:"ANIMALES EN PELIGRO",words:["OSO PANDA","TIGRE","RINOCERONTE","KOALA"],color:"purple"}]},{id:"jason-8",categories:[{name:"MEDIOS DE TRANSPORTE",words:["AVION","TREN","BARCO","COCHE"],color:"yellow"},{name:"CANCIONES TÍPICAS",words:["CUMBIA","SALSA","BACHATA","MERENGUE"],color:"green"},{name:"JUEGOS DE MESA",words:["AJEDREZ","DOMINÓ","PARQUÉS","ESCALERAS"],color:"blue"},{name:"COSAS CON RUEDAS",words:["CARRITO","MONOPATÍN","PATINES","CARRETILLA"],color:"purple"}]},{id:"jason-9",categories:[{name:"ADJETIVOS DE TAMAÑO",words:["MINÚSCULO","ENANO","GIGANTE","PEQUEÑO"],color:"yellow"},{name:"LENGUAS ROMANCES",words:["ESPAÑOL","ITALIANO","FRANCÉS","PORTUGUÉS"],color:"green"},{name:"COSAS QUE SE DOBLAN",words:["ROPA","PAPEL","MANTEL","SERVILLETA"],color:"blue"},{name:"PALABRAS QUE CAMBIAN CON 'S'",words:["JABÓN","RINCÓN","VOLCÁN","CAPITÁN"],color:"purple"}]},{id:"jason-10",categories:[{name:"NÚMEROS IMPARES",words:["UNO","SIETE","QUINCE","VEINTITRÉS"],color:"yellow"},{name:"EDIFICIOS PÚBLICOS",words:["AYUNTAMIENTO","ESCUELA","HOSPITAL","BIBLIOTECA"],color:"green"},{name:"ACORTAMIENTOS COMUNES",words:["BICI","FOTO","MOTO","CINE"],color:"blue"},{name:"TRES VOCALES IGUALES",words:["NARANJA","MANZANA","INDIVIDUO","PARAGUAS"],color:"purple"}]},{id:"jason-11",categories:[{name:"GÉNEROS MUSICALES",words:["REGUETON","JAZZ","CLÁSICA","ROCK"],color:"yellow"},{name:"VOCALES FRECUENTES",words:["AIRE","AREA","IDEA","ÓLEO"],color:"green"},{name:"MARCAS REGISTRADAS",words:["COCA-COLA","NIKE","SONY","FERRARI"],color:"blue"},{name:"PLURALES IRREGULARES",words:["CARÁCTERES","ESPÉCIMENES","CURRÍCULOS","CERTÁMENES"],color:"purple"}]},{id:"jason-12",categories:[{name:"VERBOS DE COCINA",words:["HERVIR","FREÍR","ASAR","HORNEAR"],color:"yellow"},{name:"COSAS QUE SE ENROLLAN",words:["CABLE","MANGA","CINTA","ALFOMBRA"],color:"green"},{name:"PALABRAS CON 'X'",words:["EXAMEN","TEXTO","FLEXIBLE","EXCELENTE"],color:"blue"},{name:"VERBOS TERMINADOS EN IR",words:["REIR","VIVIR","PARTIR","SUBIR"],color:"purple"}]},{id:"jason-13",categories:[{name:"OBJETOS COTIDIANOS",words:["MESA","SILLA","PLATO","VASO"],color:"yellow"},{name:"SINÓNIMOS DE VELOZ",words:["RÁPIDO","ÁGIL","VELOZ","RAPAZ"],color:"green"},{name:"PIRÁMIDES POR PAÍS",words:["EGIPTO","MÉXICO","SUDÁN","GUATEMALA"],color:"blue"},{name:"PALABRAS AL REVÉS SENTIDAS",words:["AMOR","SOL","RÍO","LUZ"],color:"purple"}]},{id:"jason-14",categories:[{name:"PROFESIONES",words:["MEDICO","POLICIA","BOMBERO","MUSICO"],color:"yellow"},{name:"PALABRAS COMPUESTAS",words:["AGUACATE","PARAGUAS","CORREVEIDILE","PORTAPAPELES"],color:"green"},{name:"BAILES LATINOS",words:["SALSA","TANGO","FLAMENCO","BACHATA"],color:"blue"},{name:"COSAS QUE PUEDEN SER LÍQUIDAS",words:["SANGRE","FUEGO","ORO","PLATA"],color:"purple"}]},{id:"jason-15",categories:[{name:"PLATOS TÍPICOS",words:["PAELLA","TACO","AREQUIPE","MOQUECA"],color:"yellow"},{name:"PALABRAS QUE TERMINAN EN 'DAD'",words:["VERDAD","BONDAD","MALDAD","HERMANDAD"],color:"green"},{name:"INVENTOS QUE CAMBIARON EL MUNDO",words:["RUEDA","PAPEL","BRÚJULA","IMPRENTA"],color:"blue"},{name:"MONOSÍLABOS CON S",words:["SOL","SAL","SÍ","SER"],color:"purple"}]},{id:"jason-16",categories:[{name:"ANIMALES",words:["GATO","PERRO","CABALLO","CONEJO"],color:"yellow"},{name:"COSAS QUE SE SIEMBRAN",words:["TRIGO","MAÍZ","ARROZ","ALUBIA"],color:"green"},{name:"LÍMITES GEOGRÁFICOS",words:["ECUADOR","TRÓPICO","PARALELO","MERIDIANO"],color:"blue"},{name:"PALABRAS DE CINCO LETRAS",words:["SUPRA","ARBOL","PLATO","JAMON"],color:"purple"}]},{id:"jason-17",categories:[{name:"ELEMENTOS QUÍMICOS",words:["ORO","PLATA","HIERRO","COBRE"],color:"yellow"},{name:"PALABRAS QUE RIMAN CON 'ORO'",words:["TESORO","TORERO","DECORO","AÑORO"],color:"green"},{name:"VERBOS CON PREPOSICIÓN",words:["CONTAR CON","SOÑAR CON","PENSAR EN","CONSISTIR EN"],color:"blue"},{name:"METÁTESIS COMUNES",words:["MURCIÉLAGO","CROQUETA","ALMOHADA","AEROPUERTO"],color:"purple"}]},{id:"jason-18",categories:[{name:"MANDATOS CON PRONOMBRE",words:["DIGAMELO","COMPRAMELO","DIGASELO","MANDAMELO"],color:"yellow"},{name:"COSAS QUE SE EXPRIMEN",words:["NARANJA","LIMÓN","TORONJA","LIMA"],color:"green"},{name:"AGREGAR PREFIJO 'RE-'",words:["NACER","PASAR","CARGAR","LLENAR"],color:"blue"},{name:"CAMBIO DE LETRA",words:["ABOGADO","VASO","BARÓN","SABIA"],color:"purple"}]},{id:"jason-19",categories:[{name:"PALABRAS CON 'LL'",words:["LLAVE","LLUVIA","CALLES","POLLITO"],color:"yellow"},{name:"OLEOS DE PINTAR",words:["ÓLEO","ACUARELA","ACRÍLICO","PASTEL"],color:"green"},{name:"COSAS QUE SE PUEDEN MEDIR",words:["TIEMPO","PESO","ALTURA","TEMPERATURA"],color:"blue"},{name:"ANAGRAMAS",words:["ROMA","AMOR","MORA","RAMO"],color:"purple"}]},{id:"jason-20",categories:[{name:"PALABRAS CON DIPTONGO",words:["TIERRA","BUENO","FUEGO","VIENTO"],color:"yellow"},{name:"PALABRAS ESTRICTAS MISMA LETRA",words:["AS","CAER","REIR","SUMIR"],color:"green"},{name:"EMPIEZAN CON 'C' Y TERMINAN EN 'O'",words:["CAMINO","COLEGIO","CABELLO","CUADRO"],color:"blue"},{name:"PALABRAS CON LETRA MUDAS",words:["HORA","HOMBRE","HOY","HACIA"],color:"purple"}]},{id:"jason-21",categories:[{name:"SUSTANTIVOS FEMENINOS",words:["CASA","PUERTA","VENTANA","MESA"],color:"yellow"},{name:"LO CONTRARIO DE",words:["BUENO","GRANDE","ALEGRE","LIGERO"],color:"green"},{name:"AGUA EN MOVIMIENTO",words:["RÍO","MAR","CASCADA","TORRENTE"],color:"blue"},{name:"PALABRAS CON DOBLE R",words:["CARRO","PERRO","ARROZ","CARRETE"],color:"purple"}]},{id:"jason-22",categories:[{name:"VERBOS COTIDIANOS",words:["DORMIR","COMER","CAMINAR","HABLAR"],color:"yellow"},{name:"PARTES DE UNA CASA",words:["TEJADO","JARDÍN","GARAJE","SÓTANO"],color:"green"},{name:"PALABRAS POLISÉMICAS",words:["BANCO","Sierra","GATO","PICO"],color:"blue"},{name:"OBJETOS DE CASA",words:["TELEFONO","CAMARA","LAMPARA","BRUJULA"],color:"purple"}]},{id:"jason-23",categories:[{name:"SUFIJO '-ERO'",words:["CARTERO","PANADERO","JARDINERO","CARPINTERO"],color:"yellow"},{name:"COSAS REDONDAS",words:["RUEDA","PELOTA","GLOBO","CIRCULO"],color:"green"},{name:"PARADAS DE BUS",words:["ESTACIÓN","PARADA","TERMINAL","APARTADERO"],color:"blue"},{name:"PALABRAS QUE CAMBIAN SU SIGNIFICADO",words:["RATÓN","NUBE","VENTANA","ESCRITORIO"],color:"purple"}]},{id:"jason-24",categories:[{name:"SINÓNIMOS DE INTELIGENTE",words:["LISTO","SABIO","DOCTO","ERUDITO"],color:"yellow"},{name:"COSAS CON AGUJAS",words:["RELOJ","BRÚJULA","ÁRBOL","JERINGA"],color:"green"},{name:"PALABRAS CON DOS SIGNIFICADOS",words:["CAPITAL","MESA","SEDE","CURA"],color:"blue"},{name:"NÚMEROS ROMANOS",words:["C","D","M","X"],color:"purple"}]},{id:"jason-25",categories:[{name:"SINÓNIMOS DE BELLO",words:["HERMOSO","LIMPIO","PRECIOSO","BONITO"],color:"yellow"},{name:"COSAS QUE SE ROMPEN",words:["PLATO","VASO","JARRÓN","VENTANA"],color:"green"},{name:"INTERJECCIONES",words:["¡AY!","¡OH!","¡EH!","¡AH!"],color:"blue"},{name:"PALABRAS SIN VOCAL REPETIDA",words:["MURCIELAGO","REPUBLICA","ORQUIDEA","ABUELITO"],color:"purple"}]},
{
    "id": "jason-26",
    "categories": [
      {
        "name": "CONCEPTOS GEOMETRICOS",
        "words": [
          "PUNTO",
          "LINEA",
          "PLANO",
          "ANGULO"
        ],
        "color": "yellow"
      },
      {
        "name": "FIGURAS RETORICAS",
        "words": [
          "METAFORA",
          "HIPERBOLE",
          "IRONIA",
          "SIMIL"
        ],
        "color": "green"
      },
      {
        "name": "TERMINAN EN '-AZO'",
        "words": [
          "PEDRAZO",
          "PORTAZO",
          "PUÑETAZO",
          "BALONAZO"
        ],
        "color": "blue"
      },
      {
        "name": "PAISES SIN MAR",
        "words": [
          "SUIZA",
          "BOLIVIA",
          "AUSTRIA",
          "HUNGRIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-27",
    "categories": [
      {
        "name": "ESTRELLAS FAMOSAS",
        "words": [
          "SIRIO",
          "POLARIS",
          "BETELGEUSE",
          "VEGA"
        ],
        "color": "yellow"
      },
      {
        "name": "EN EL CARRO",
        "words": [
          "VOLANTE",
          "FRENO",
          "ACELERADOR",
          "ESPEJO"
        ],
        "color": "green"
      },
      {
        "name": "ACCIONES FUTBOL",
        "words": [
          "GOL",
          "PENAL",
          "FUERA LUGAR",
          "CABEZA"
        ],
        "color": "blue"
      },
      {
        "name": "CORDILLERAS",
        "words": [
          "ANDES",
          "HIMALAYA",
          "ALPES",
          "ROCHOSAS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-28",
    "categories": [
      {
        "name": "FENOMENOS ATMOSFERICOS",
        "words": [
          "LLUVIA",
          "NIEVE",
          "GRANIZO",
          "BRUMA"
        ],
        "color": "yellow"
      },
      {
        "name": "CANTANTES ROCK",
        "words": [
          "BOWIE",
          "JAGGER",
          "MERCURY",
          "COBAIN"
        ],
        "color": "green"
      },
      {
        "name": "ANTONIMO DE 'FUERTE'",
        "words": [
          "DEBIL",
          "FRAGIL",
          "FLOJO",
          "LIVIANO"
        ],
        "color": "blue"
      },
      {
        "name": "PRENDAS DE VESTIR",
        "words": [
          "CAMISA",
          "PANTALON",
          "ZAPATOS",
          "ABRIGO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-29",
    "categories": [
      {
        "name": "PREFIJO 'MULTI-'",
        "words": [
          "MULTICOLOR",
          "MULTINACIONAL",
          "MULTIMEDIA",
          "MULTIUSO"
        ],
        "color": "yellow"
      },
      {
        "name": "ANIMALES DEL DESIERTO",
        "words": [
          "CAMELO",
          "ESCORPION",
          "RATON",
          "SERPIENTE"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS DE SIETE LETRAS",
        "words": [
          "ZAPATOS",
          "VENTANA",
          "CABALLO",
          "BOTELLA"
        ],
        "color": "blue"
      },
      {
        "name": "MATERIAS ESCOLARES",
        "words": [
          "MATEMATICAS",
          "CIENCIAS",
          "LENGUAJE",
          "HISTORIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-30",
    "categories": [
      {
        "name": "GENEROS LITERARIOS",
        "words": [
          "NOVELA",
          "POESIA",
          "DRAMA",
          "ENSAYO"
        ],
        "color": "yellow"
      },
      {
        "name": "CALIFICACIONES",
        "words": [
          "EXCELENTE",
          "NOTABLE",
          "BIEN",
          "SUFICIENTE"
        ],
        "color": "green"
      },
      {
        "name": "ANTONIMO DE 'ALTO'",
        "words": [
          "BAJO",
          "CHICO",
          "PEQUEÑO",
          "REDUCIDO"
        ],
        "color": "blue"
      },
      {
        "name": "CORTES DE CARNE",
        "words": [
          "LOMO",
          "SOLOMILLO",
          "CHULETA",
          "PECHUGA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-31",
    "categories": [
      {
        "name": "PAISES ANDINOS",
        "words": [
          "PERU",
          "BOLIVIA",
          "COLOMBIA",
          "ECUADOR"
        ],
        "color": "yellow"
      },
      {
        "name": "COMPOSITORES CLASICOS",
        "words": [
          "BEETHOVEN",
          "MOZART",
          "BACH",
          "CHOPIN"
        ],
        "color": "green"
      },
      {
        "name": "EJERCICIOS FISICOS",
        "words": [
          "SENTADILLAS",
          "FLEXIONES",
          "ABDOMINALES",
          "CARRERA"
        ],
        "color": "blue"
      },
      {
        "name": "MISIONES ESPACIALES",
        "words": [
          "APOLO",
          "ARTEMIS",
          "VOYAGER",
          "CURIOSITY"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-32",
    "categories": [
      {
        "name": "PALABRAS CON DIPTONGO",
        "words": [
          "TIERRA",
          "BUENO",
          "FUEGO",
          "VIENTO"
        ],
        "color": "yellow"
      },
      {
        "name": "RIOS DE EUROPA",
        "words": [
          "DANUBIO",
          "RIN",
          "SENA",
          "TAJO"
        ],
        "color": "green"
      },
      {
        "name": "COSAS QUE SE ROMPEN",
        "words": [
          "PLATO",
          "VASO",
          "JARRON",
          "VENTANA"
        ],
        "color": "blue"
      },
      {
        "name": "REDES SOCIALES CHINAS",
        "words": [
          "TIKTOK",
          "WECHAT",
          "XIAOHONGSHU",
          "DOUYIN"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-33",
    "categories": [
      {
        "name": "VERBOS MODALES",
        "words": [
          "PODER",
          "QUERER",
          "DEBER",
          "SOLER"
        ],
        "color": "yellow"
      },
      {
        "name": "RAZAS DE PERROS",
        "words": [
          "LABRADOR",
          "PASTOR",
          "BULLDOG",
          "CHIHUAHUA"
        ],
        "color": "green"
      },
      {
        "name": "PARTES DE LA PIERNA",
        "words": [
          "MUSLO",
          "RODILLA",
          "PANTORRILLA",
          "TOBILLO"
        ],
        "color": "blue"
      },
      {
        "name": "APARATOS ELECTRONICOS",
        "words": [
          "TELEFONO",
          "CAMARA",
          "ORDENADOR",
          "TELEVISOR"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-34",
    "categories": [
      {
        "name": "PREFIJO 'ANTI-'",
        "words": [
          "ANTIAEREO",
          "ANTIBIOTICO",
          "ANTISOCIAL",
          "ANTINATURAL"
        ],
        "color": "yellow"
      },
      {
        "name": "PAISES CON MONARQUIA",
        "words": [
          "ESPAÑA",
          "INGLATERRA",
          "SUECIA",
          "JAPON"
        ],
        "color": "green"
      },
      {
        "name": "APPS DE MENSAJERIA",
        "words": [
          "WHATSAPP",
          "TELEGRAM",
          "SIGNAL",
          "MESSENGER"
        ],
        "color": "blue"
      },
      {
        "name": "ANIMALES OMNIVOROS",
        "words": [
          "OSO",
          "CERDO",
          "RATON",
          "ZORRO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-35",
    "categories": [
      {
        "name": "MARISCOS COMUNES",
        "words": [
          "CAMARON",
          "LANGOSTA",
          "PULPO",
          "MEJILLON"
        ],
        "color": "yellow"
      },
      {
        "name": "TIPOS DE PAN",
        "words": [
          "BLANCO",
          "INTEGRAL",
          "CENTENO",
          "MASA MADRE"
        ],
        "color": "green"
      },
      {
        "name": "COLORES PRIMARIOS",
        "words": [
          "ROJO",
          "AZUL",
          "AMARILLO",
          "VERDE"
        ],
        "color": "blue"
      },
      {
        "name": "TIPOS DE NUBES",
        "words": [
          "CUMULUS",
          "STRATUS",
          "CIRRUS",
          "NIMBUS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-36",
    "categories": [
      {
        "name": "VERBOS DE CAMBIO",
        "words": [
          "VOLVERSE",
          "HACERSE",
          "PONERSE",
          "CONVERTIRSE"
        ],
        "color": "yellow"
      },
      {
        "name": "FUTBOLISTAS MEXICANOS",
        "words": [
          "CHICHARITO",
          "RAFA MARQUEZ",
          "GUARDADO",
          "SANCHEZ"
        ],
        "color": "green"
      },
      {
        "name": "PUERTOS DE PC",
        "words": [
          "USB",
          "HDMI",
          "ETHERNET",
          "AUDIO"
        ],
        "color": "blue"
      },
      {
        "name": "TERMINOS MUSICALES",
        "words": [
          "ALEGRO",
          "ANDANTE",
          "PRESTO",
          "LARGO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-37",
    "categories": [
      {
        "name": "PALABRAS DEMOSTRATIVAS",
        "words": [
          "ESTE",
          "ESE",
          "AQUELLO",
          "ESO"
        ],
        "color": "yellow"
      },
      {
        "name": "ECOSISTEMAS ACUATICOS",
        "words": [
          "MARINO",
          "RIBERENO",
          "PANTANO",
          "ARRECIFE"
        ],
        "color": "green"
      },
      {
        "name": "CORTES DE CERDO",
        "words": [
          "LOMO",
          "COSTILLA",
          "JAMON",
          "PANCETA"
        ],
        "color": "blue"
      },
      {
        "name": "ESTADOS DE AGREGACION",
        "words": [
          "SOLIDO",
          "LIQUIDO",
          "GASEOSO",
          "PLASMA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-38",
    "categories": [
      {
        "name": "VERBOS IRREGULARES",
        "words": [
          "TENER",
          "PONER",
          "SALIR",
          "VENIR"
        ],
        "color": "yellow"
      },
      {
        "name": "INGREDIENTES BASICOS",
        "words": [
          "HARINA",
          "AZUCAR",
          "HUEVO",
          "MANTEQUILLA"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES DE MITAD DE AGUA",
        "words": [
          "RANA",
          "COCODRILO",
          "HIPOPOTAMO",
          "NUTRIA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS CON PREFIJO 'EX-'",
        "words": [
          "EXPRESIDENTE",
          "EXMARIDO",
          "EXCOMPAÑERO",
          "EXALUMNO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-39",
    "categories": [
      {
        "name": "EN EL BAÑO",
        "words": [
          "DUCHA",
          "INODORO",
          "LAVAMANOS",
          "ESPEJO"
        ],
        "color": "yellow"
      },
      {
        "name": "DIOSAS EGIPCIAS",
        "words": [
          "ISIS",
          "BASTET",
          "NUT",
          "MAAT"
        ],
        "color": "green"
      },
      {
        "name": "CELEBRACIONES MUNDIALES",
        "words": [
          "AÑO NUEVO",
          "NAVIDAD",
          "HALLOWEEN",
          "PASCUA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS PALINDROMAS",
        "words": [
          "SALAS",
          "RECONOCER",
          "SOMOS",
          "ANILINA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-40",
    "categories": [
      {
        "name": "RITMOS LATINOS",
        "words": [
          "SALSA",
          "MERENGUE",
          "CUMBIA",
          "BACHATA"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'HIPER-'",
        "words": [
          "HIPERMERCADO",
          "HIPERTENSION",
          "HIPERSENSIBLE",
          "HIPERACTIVO"
        ],
        "color": "green"
      },
      {
        "name": "PRINCESAS DISNEY",
        "words": [
          "BLANCA",
          "CENICIENTA",
          "AURORA",
          "JASMIN"
        ],
        "color": "blue"
      },
      {
        "name": "DULCES TIPICOS",
        "words": [
          "CHURRO",
          "TORRIJA",
          "TURRON",
          "MAZAPAN"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-41",
    "categories": [
      {
        "name": "PAISES CENTROAMERICA",
        "words": [
          "GUATEMALA",
          "HONDURAS",
          "EL SALVADOR",
          "COSTA RICA"
        ],
        "color": "yellow"
      },
      {
        "name": "PRODUCTOS LIMPIEZA",
        "words": [
          "JABON",
          "DETERGENTE",
          "CLORO",
          "LIMPIADOR"
        ],
        "color": "green"
      },
      {
        "name": "TIPOS DE ROCAS",
        "words": [
          "IGNEAS",
          "SEDIMENTARIAS",
          "METAMORFICAS",
          "CALIZA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS CON 'X'",
        "words": [
          "EXAMEN",
          "TEXTO",
          "FLEXIBLE",
          "EXCELENTE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-42",
    "categories": [
      {
        "name": "CIVILIZACIONES ANTIGUAS",
        "words": [
          "EGIPTO",
          "GRECIA",
          "ROMA",
          "MAYA"
        ],
        "color": "yellow"
      },
      {
        "name": "PADRES DE LA CIENCIA",
        "words": [
          "NEWTON",
          "EINSTEIN",
          "DARWIN",
          "GALILEO"
        ],
        "color": "green"
      },
      {
        "name": "TECNICAS DE PINTURA",
        "words": [
          "OLEO",
          "ACUARELA",
          "PASTEL",
          "CARBON"
        ],
        "color": "blue"
      },
      {
        "name": "CONJUNCIONES",
        "words": [
          "Y",
          "O",
          "PERO",
          "PORQUE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-43",
    "categories": [
      {
        "name": "NUMEROS IMPARES",
        "words": [
          "UNO",
          "TRES",
          "CINCO",
          "SIETE"
        ],
        "color": "yellow"
      },
      {
        "name": "PARTES DEL OJO",
        "words": [
          "IRIS",
          "PUPILA",
          "RETINA",
          "CORNEA"
        ],
        "color": "green"
      },
      {
        "name": "ALFABETOS DEL MUNDO",
        "words": [
          "LATINO",
          "GRIEGO",
          "CIRILICO",
          "ARABE"
        ],
        "color": "blue"
      },
      {
        "name": "TIPOS DE BICICLETA",
        "words": [
          "MONTAÑA",
          "RUTA",
          "URBANA",
          "ELECTRICA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-44",
    "categories": [
      {
        "name": "EMISORAS DE RADIO",
        "words": [
          "LOS 40",
          "KISS FM",
          "RNE",
          "CADENA SER"
        ],
        "color": "yellow"
      },
      {
        "name": "PERSONAJES DISNEY",
        "words": [
          "MICKEY",
          "MINNIE",
          "DONALD",
          "GOOFY"
        ],
        "color": "green"
      },
      {
        "name": "CLUBES FUTBOL",
        "words": [
          "REAL MADRID",
          "BARCELONA",
          "BOCA",
          "RIVER"
        ],
        "color": "blue"
      },
      {
        "name": "PLATAFORMAS DE MUSICA",
        "words": [
          "SPOTIFY",
          "APPLE MUSIC",
          "YOUTUBE MUSIC",
          "TIDAL"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-45",
    "categories": [
      {
        "name": "TERMINAN EN N",
        "words": [
          "AVION",
          "BALON",
          "ATUN",
          "JAMON"
        ],
        "color": "yellow"
      },
      {
        "name": "COSAS DE CAMPANA",
        "words": [
          "TIENDA",
          "SACO",
          "LINIERNA",
          "BRUJULA"
        ],
        "color": "green"
      },
      {
        "name": "MEDIOS DE TRANSPORTE",
        "words": [
          "COCHE",
          "TREN",
          "MOTO",
          "BARCO"
        ],
        "color": "blue"
      },
      {
        "name": "PUEBLOS INDIGENAS",
        "words": [
          "MAYA",
          "AZTECA",
          "INCA",
          "GUARANI"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-46",
    "categories": [
      {
        "name": "COSAS DE PAPELERIA",
        "words": [
          "HOJA",
          "SOBRE",
          "CARPETA",
          "ETIQUETA"
        ],
        "color": "yellow"
      },
      {
        "name": "UTENSILIOS DE COCINA",
        "words": [
          "OLLA",
          "SARTEN",
          "CUCHILLO",
          "ESPATULA"
        ],
        "color": "green"
      },
      {
        "name": "SUFIJO '-OSO'",
        "words": [
          "PELIGROSO",
          "MARAVILLOSO",
          "HERMOSO",
          "CUIDADOSO"
        ],
        "color": "blue"
      },
      {
        "name": "PERSONAJES MARVEL",
        "words": [
          "IRON MAN",
          "CAPITAN",
          "THOR",
          "HULK"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-47",
    "categories": [
      {
        "name": "CIUDADES MEXICANAS",
        "words": [
          "CANCUN",
          "GUADALAJARA",
          "MONTERREY",
          "PUEBLA"
        ],
        "color": "yellow"
      },
      {
        "name": "HERRAMIENTAS JARDIN",
        "words": [
          "PALA",
          "RASTRILLO",
          "TIJERA",
          "MANGUERA"
        ],
        "color": "green"
      },
      {
        "name": "DINOSAURIOS FAMOSOS",
        "words": [
          "T-REX",
          "TRICERATOPS",
          "ESTEGOSAURIO",
          "PTERODACTILO"
        ],
        "color": "blue"
      },
      {
        "name": "REVOLUCIONES",
        "words": [
          "FRANCESA",
          "MEXICANA",
          "INDUSTRIAL",
          "RUSA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-48",
    "categories": [
      {
        "name": "NOTAS MUSICALES",
        "words": [
          "DO",
          "RE",
          "MI",
          "FA"
        ],
        "color": "yellow"
      },
      {
        "name": "PERFUMES FAMOSOS",
        "words": [
          "CHANEL",
          "DIOR",
          "VERSACE",
          "PACO"
        ],
        "color": "green"
      },
      {
        "name": "FORMATOS DE ARCHIVO",
        "words": [
          "PDF",
          "JPEG",
          "MP3",
          "TXT"
        ],
        "color": "blue"
      },
      {
        "name": "ESTRELLAS CERCANAS",
        "words": [
          "SOL",
          "ALFA CENTAURI",
          "SIRIO",
          "BARNARD"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-49",
    "categories": [
      {
        "name": "POSTRES ESPAÑOLES",
        "words": [
          "CREMA CATALANA",
          "TOCINO DE CIELO",
          "ARROZ LECHE",
          "BRAZO GITANO"
        ],
        "color": "yellow"
      },
      {
        "name": "PROFESIONES COMUNES",
        "words": [
          "MEDICO",
          "BOMBERO",
          "MAESTRO",
          "POLICIA"
        ],
        "color": "green"
      },
      {
        "name": "SISTEMAS OPERATIVOS",
        "words": [
          "WINDOWS",
          "MACOS",
          "LINUX",
          "ANDROID"
        ],
        "color": "blue"
      },
      {
        "name": "EQUIPOS DE LA LIGA MX",
        "words": [
          "AMERICA",
          "CHIVAS",
          "CRUZ AZUL",
          "RAYADOS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-50",
    "categories": [
      {
        "name": "PLATAFORMAS DE VIDEO",
        "words": [
          "YOUTUBE",
          "TIKTOK",
          "INSTAGRAM",
          "FACEBOOK"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 'C' SUAVE",
        "words": [
          "CENA",
          "CINE",
          "CIELO",
          "CERO"
        ],
        "color": "green"
      },
      {
        "name": "CONSOLAS DE VIDEOJUEGOS",
        "words": [
          "PLAYSTATION",
          "XBOX",
          "NINTENDO",
          "PC"
        ],
        "color": "blue"
      },
      {
        "name": "ESTACIONES DEL AÑO",
        "words": [
          "PRIMAVERA",
          "VERANO",
          "OTOÑO",
          "INVIERNO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-51",
    "categories": [
      {
        "name": "ASTEROIDES FAMOSOS",
        "words": [
          "CERES",
          "VESTA",
          "PALLAS",
          "JUNO"
        ],
        "color": "yellow"
      },
      {
        "name": "SISTEMAS DE GPS",
        "words": [
          "WAZE",
          "MAPS",
          "TOMTOM",
          "HERE"
        ],
        "color": "green"
      },
      {
        "name": "DIAS FESTIVOS ESPAÑA",
        "words": [
          "NAVIDAD",
          "SEMANA SANTA",
          "CORPUS",
          "HISPANIDAD"
        ],
        "color": "blue"
      },
      {
        "name": "DESIERTOS FAMOSOS",
        "words": [
          "SAHARA",
          "GOBI",
          "ATACAMA",
          "ARABIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-52",
    "categories": [
      {
        "name": "MANUALIDADES",
        "words": [
          "ORIGAMI",
          "MACETA",
          "PINTURA",
          "TEJER"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS POLISEMICAS",
        "words": [
          "BANCO",
          "CARTA",
          "SILLA",
          "VELA"
        ],
        "color": "green"
      },
      {
        "name": "NOVELAS FAMOSAS",
        "words": [
          "DON QUIJOTE",
          "CIEN AÑOS",
          "LAZARILLO",
          "CUMBRES"
        ],
        "color": "blue"
      },
      {
        "name": "PREFIJO 'MICRO-'",
        "words": [
          "MICROONDAS",
          "MICROSCOPIO",
          "MICROCHIP",
          "MICROFONO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-53",
    "categories": [
      {
        "name": "MEDIOS DE TRANSPORTE ANTIGUOS",
        "words": [
          "CARRETA",
          "DILIGENCIA",
          "TRANVIA",
          "VAPOR"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 'LL'",
        "words": [
          "LLAVE",
          "LLUVIA",
          "CALLE",
          "POLLO"
        ],
        "color": "green"
      },
      {
        "name": "UNIDADES TIEMPO",
        "words": [
          "SEGUNDO",
          "MINUTO",
          "HORA",
          "DIA"
        ],
        "color": "blue"
      },
      {
        "name": "DISENADORES FAMOSOS",
        "words": [
          "CHANEL",
          "DIOR",
          "ARMANI",
          "VERSACE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-54",
    "categories": [
      {
        "name": "PALABRAS CON 'V'",
        "words": [
          "VACA",
          "VASO",
          "VENTANA",
          "VERDE"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS TERMINAN EN 'O'",
        "words": [
          "PERRO",
          "GATO",
          "LIBRO",
          "PLATO"
        ],
        "color": "green"
      },
      {
        "name": "AUMENTATIVOS",
        "words": [
          "PERRAZO",
          "GATOTE",
          "CASOTA",
          "BIGOTE"
        ],
        "color": "blue"
      },
      {
        "name": "PERSONAJES HISTORICOS",
        "words": [
          "COLON",
          "CORTES",
          "PIZARRO",
          "MAGELLANES"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-55",
    "categories": [
      {
        "name": "BISILABAS",
        "words": [
          "CASA",
          "MESA",
          "SILLA",
          "VACA"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 'G' FUERTE",
        "words": [
          "GENTE",
          "GITANO",
          "GELATINA",
          "GESTION"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES DE COMPANIA",
        "words": [
          "PERRO",
          "GATO",
          "PEZ",
          "HAMSTER"
        ],
        "color": "blue"
      },
      {
        "name": "MUSEOS FAMOSOS",
        "words": [
          "LOUVRE",
          "PRADO",
          "METROPOLITANO",
          "BRITANICO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-56",
    "categories": [
      {
        "name": "REDES SOCIALES",
        "words": [
          "FACEBOOK",
          "TWITTER",
          "INSTAGRAM",
          "TIKTOK"
        ],
        "color": "yellow"
      },
      {
        "name": "BANCOS FAMOSOS",
        "words": [
          "SANTANDER",
          "BBVA",
          "CITIBANK",
          "HSBC"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES NOCTURNOS",
        "words": [
          "BUHO",
          "MURCIELAGO",
          "LOBO",
          "LUCIERNAGA"
        ],
        "color": "blue"
      },
      {
        "name": "BEBIDAS ALCOHOLICAS",
        "words": [
          "CERVEZA",
          "VINO",
          "TEQUILA",
          "RON"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-57",
    "categories": [
      {
        "name": "ESTILOS DE MODA",
        "words": [
          "CASUAL",
          "FORMAL",
          "DEPORTIVO",
          "ELEGANTE"
        ],
        "color": "yellow"
      },
      {
        "name": "LIDERES HISTORICOS",
        "words": [
          "GANDHI",
          "MANDELA",
          "LUTERO",
          "CHURCHILL"
        ],
        "color": "green"
      },
      {
        "name": "PLACAS TECTONICAS",
        "words": [
          "PACIFICA",
          "AFRICANA",
          "EUROASIATICA",
          "NORTEAMERICANA"
        ],
        "color": "blue"
      },
      {
        "name": "COSAS DE OFICINA",
        "words": [
          "ESCRITORIO",
          "SILLA",
          "ORDENADOR",
          "ARCHIVERO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-58",
    "categories": [
      {
        "name": "SABORES DE HELADO",
        "words": [
          "VAINILLA",
          "CHOCOLATE",
          "FRESA",
          "MENTA"
        ],
        "color": "yellow"
      },
      {
        "name": "PLANETAS GASEOSOS",
        "words": [
          "JUPITER",
          "SATURNO",
          "URANO",
          "NEPTUNO"
        ],
        "color": "green"
      },
      {
        "name": "SUFIJO '-ISTA'",
        "words": [
          "ARTISTA",
          "PIANISTA",
          "PERIODISTA",
          "CIENTIFICO"
        ],
        "color": "blue"
      },
      {
        "name": "COMPONENTES PC",
        "words": [
          "RAM",
          "SSD",
          "GPU",
          "CPU"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-59",
    "categories": [
      {
        "name": "ANIMALES MARINOS",
        "words": [
          "DELFIN",
          "TIBURON",
          "BALLENA",
          "PULPO"
        ],
        "color": "yellow"
      },
      {
        "name": "HUESOS DEL BRAZO",
        "words": [
          "HUMERO",
          "RADIO",
          "CUBITO",
          "FALANGES"
        ],
        "color": "green"
      },
      {
        "name": "ADJETIVOS DE TAMAÑO",
        "words": [
          "MINUSCULO",
          "ENANO",
          "GIGANTE",
          "PEQUEÑO"
        ],
        "color": "blue"
      },
      {
        "name": "CAPITALES DE CENTROAMERICA",
        "words": [
          "MANAGUA",
          "TEGUCIGALPA",
          "GUATEMALA",
          "PANAMA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-60",
    "categories": [
      {
        "name": "MARIPOSAS",
        "words": [
          "MONARCA",
          "ALAS",
          "COLOR",
          "MIGRACION"
        ],
        "color": "yellow"
      },
      {
        "name": "TRANSPORTE PUBLICO",
        "words": [
          "AUTOBUS",
          "METRO",
          "TAXI",
          "TRANVIA"
        ],
        "color": "green"
      },
      {
        "name": "SUFIJO '-DAD'",
        "words": [
          "LIBERTAD",
          "BONDAD",
          "MALDAD",
          "HERMANDAD"
        ],
        "color": "blue"
      },
      {
        "name": "INSTRUMENTOS PERCUSION",
        "words": [
          "BATERIA",
          "TAMBOR",
          "MARIMBA",
          "XILOFONO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-61",
    "categories": [
      {
        "name": "RAMAS DE BIOLOGIA",
        "words": [
          "BOTANICA",
          "ZOOLOGIA",
          "GENETICA",
          "ECOLOGIA"
        ],
        "color": "yellow"
      },
      {
        "name": "CAPITALES ASIATICAS",
        "words": [
          "TOKIO",
          "SEUL",
          "PEKIN",
          "BANGKOK"
        ],
        "color": "green"
      },
      {
        "name": "HIERBAS AROMATICAS",
        "words": [
          "ALBAHACA",
          "ROMERO",
          "OREGANO",
          "PEREJIL"
        ],
        "color": "blue"
      },
      {
        "name": "LIBROS DE AVENTURAS",
        "words": [
          "ISLA TESORO",
          "ROBINSON CRUSOE",
          "LA VUELTA",
          "VEINTE MIL"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-62",
    "categories": [
      {
        "name": "FESTIVALES DE MUSICA",
        "words": [
          "COACHELLA",
          "GLASTONBURY",
          "LIVE AID",
          "ROCK IN RIO"
        ],
        "color": "yellow"
      },
      {
        "name": "CINE DE TERROR",
        "words": [
          "PSICOSIS",
          "EL RESPLANDOR",
          "IT",
          "EXORCISTA"
        ],
        "color": "green"
      },
      {
        "name": "FORMACIONES ROCOSAS",
        "words": [
          "CABO",
          "GOLFO",
          "ESTRECHO",
          "PENINSULA"
        ],
        "color": "blue"
      },
      {
        "name": "TIPOS DE INVERSION",
        "words": [
          "ACCIONES",
          "BONOS",
          "FONDOS",
          "BIENES RAICES"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-63",
    "categories": [
      {
        "name": "CIUDADES PORTUARIAS",
        "words": [
          "BARCELONA",
          "VALENCIA",
          "CADIZ",
          "MALAGA"
        ],
        "color": "yellow"
      },
      {
        "name": "TIPOS DE HONGOS",
        "words": [
          "CHAMPIÑON",
          "SETAS",
          "TRUFA",
          "PORTOBELLO"
        ],
        "color": "green"
      },
      {
        "name": "PAISES NORDICOS",
        "words": [
          "SUECIA",
          "NORUEGA",
          "DINAMARCA",
          "FINLANDIA"
        ],
        "color": "blue"
      },
      {
        "name": "ANTONIMO DE 'NUEVO'",
        "words": [
          "VIEJO",
          "USADO",
          "GASTADO",
          "ANTIGUO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-64",
    "categories": [
      {
        "name": "PALABRAS HOMOGRAFAS",
        "words": [
          "RIO",
          "VINO",
          "COMO",
          "CALLE"
        ],
        "color": "yellow"
      },
      {
        "name": "COLORES SECUNDARIOS",
        "words": [
          "NARANJA",
          "VIOLETA",
          "ROSADO",
          "MARRON"
        ],
        "color": "green"
      },
      {
        "name": "PLANETAS INTERIORES",
        "words": [
          "MERCURIO",
          "VENUS",
          "TIERRA",
          "MARTE"
        ],
        "color": "blue"
      },
      {
        "name": "DINASTIAS REALES",
        "words": [
          "BORBON",
          "HABSBURGO",
          "TUDOR",
          "ROMANOV"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-65",
    "categories": [
      {
        "name": "PAISES INSULARES",
        "words": [
          "JAPON",
          "CUBA",
          "MADAGASCAR",
          "FILIPINAS"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 2 VOCALES IGUALES",
        "words": [
          "AARON",
          "COOPER",
          "COORDENADA",
          "AZAAR"
        ],
        "color": "green"
      },
      {
        "name": "EVENTOS ASTRONOMICOS",
        "words": [
          "ECLIPSE",
          "SOLSTICIO",
          "EQUINOCCIO",
          "LLUVIA"
        ],
        "color": "blue"
      },
      {
        "name": "TIPOS DE CARNE",
        "words": [
          "TERNERA",
          "POLLO",
          "CERDO",
          "CORDERO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-66",
    "categories": [
      {
        "name": "ANTONIMO DE 'FACIL'",
        "words": [
          "DIFICIL",
          "COMPLEJO",
          "ENREDADO",
          "LABORIOSO"
        ],
        "color": "yellow"
      },
      {
        "name": "METALES PRECIOSOS",
        "words": [
          "DIAMANTE",
          "ESMERALDA",
          "RUBI",
          "ZAFIRO"
        ],
        "color": "green"
      },
      {
        "name": "COCTELES CLASICOS",
        "words": [
          "MARGARITA",
          "MOJITO",
          "PIÑA COLADA",
          "DAIQUIRI"
        ],
        "color": "blue"
      },
      {
        "name": "FASES DE LA LUNA",
        "words": [
          "NUEVA",
          "CRECIENTE",
          "LLENA",
          "MENGUANTE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-67",
    "categories": [
      {
        "name": "CAMPEONES DEL MUNDO",
        "words": [
          "BRASIL",
          "ALEMANIA",
          "ARGENTINA",
          "FRANCIA"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS DE TRES LETRAS",
        "words": [
          "SOL",
          "MAR",
          "PAN",
          "LUZ"
        ],
        "color": "green"
      },
      {
        "name": "PERSONAJES DE ANIME",
        "words": [
          "GOKU",
          "NARUTO",
          "MONKEY",
          "PUFF"
        ],
        "color": "blue"
      },
      {
        "name": "UNIDADES DE MEDIDA",
        "words": [
          "METRO",
          "LITRO",
          "KILO",
          "SEGUNDO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-68",
    "categories": [
      {
        "name": "PALABRAS CON DOBLE 'R'",
        "words": [
          "CARRETERA",
          "ARROZ",
          "BARRIL",
          "CORREDOR"
        ],
        "color": "yellow"
      },
      {
        "name": "TIPOS DE QUESO",
        "words": [
          "MOZZARELLA",
          "CHEDDAR",
          "SUIZO",
          "PARMESANO"
        ],
        "color": "green"
      },
      {
        "name": "CLIMAS DEL MUNDO",
        "words": [
          "TROPICAL",
          "MEDITERANEO",
          "CONTINENTAL",
          "POLAR"
        ],
        "color": "blue"
      },
      {
        "name": "DEPORTES INVIERNO",
        "words": [
          "ESQUI",
          "PATINAJE",
          "HOCKEY",
          "TRINEO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-69",
    "categories": [
      {
        "name": "TIPOS DE ENERGIA",
        "words": [
          "SOLAR",
          "EOLICA",
          "HIDRAULICA",
          "NUCLEAR"
        ],
        "color": "yellow"
      },
      {
        "name": "PREPOSICIONES",
        "words": [
          "A",
          "ANTE",
          "BAJO",
          "CON"
        ],
        "color": "green"
      },
      {
        "name": "MODELOS DE NEGOCIO",
        "words": [
          "SaaS",
          "E-COMMERCE",
          "FRANQUICIA",
          "MARKETPLACE"
        ],
        "color": "blue"
      },
      {
        "name": "FILOSOFOS FAMOSOS",
        "words": [
          "SOCRATES",
          "PLATON",
          "ARISTOTELES",
          "NIETZSCHE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-70",
    "categories": [
      {
        "name": "BOSQUES DEL MUNDO",
        "words": [
          "AMAZONIA",
          "TAIGA",
          "SELVA",
          "BOSQUE BOREAL"
        ],
        "color": "yellow"
      },
      {
        "name": "EN LA COCINA",
        "words": [
          "NEVERA",
          "ESTUFA",
          "LAVADORA",
          "HORNO"
        ],
        "color": "green"
      },
      {
        "name": "FRUTAS DE TEMPORADA",
        "words": [
          "SANDIA",
          "MELON",
          "UVA",
          "NARANJA"
        ],
        "color": "blue"
      },
      {
        "name": "CALZADO FEMENINO",
        "words": [
          "TACONES",
          "BALLERINAS",
          "SANDALIAS",
          "BOTINES"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-71",
    "categories": [
      {
        "name": "ACRONIMOS",
        "words": [
          "SIDA",
          "LIDER",
          "RADAR",
          "SONAR"
        ],
        "color": "yellow"
      },
      {
        "name": "EN LA MESA",
        "words": [
          "PLATO",
          "VASO",
          "TENEDOR",
          "SERVILLETA"
        ],
        "color": "green"
      },
      {
        "name": "JUEGOS DE CARTAS",
        "words": [
          "POKER",
          "BRIDGE",
          "UNO",
          "CORAZONES"
        ],
        "color": "blue"
      },
      {
        "name": "PREFIJO 'DES-'",
        "words": [
          "DESCONOCIDO",
          "DESAPARECER",
          "DESCUBRIR",
          "DESARMAR"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-72",
    "categories": [
      {
        "name": "PALABRAS CON 'GR'",
        "words": [
          "GRANDE",
          "GRITO",
          "GRIS",
          "GRUESO"
        ],
        "color": "yellow"
      },
      {
        "name": "MUNDIALES SEDES",
        "words": [
          "MEXICO 70",
          "ITALIA 90",
          "FRANCIA 98",
          "RUSIA 2018"
        ],
        "color": "green"
      },
      {
        "name": "COLORES FRIOS",
        "words": [
          "AZUL",
          "VERDE",
          "VIOLETA",
          "TURQUESA"
        ],
        "color": "blue"
      },
      {
        "name": "MUEBLES DEL HOGAR",
        "words": [
          "MESA",
          "SILLA",
          "ARMARIO",
          "CAMA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-73",
    "categories": [
      {
        "name": "SERES MITOLOGICOS",
        "words": [
          "CENTAURO",
          "SIRENA",
          "GRIFO",
          "FENIX"
        ],
        "color": "yellow"
      },
      {
        "name": "PAISES DE AFRICA",
        "words": [
          "EGIPTO",
          "KENIA",
          "MARRUECOS",
          "SUDAFRICA"
        ],
        "color": "green"
      },
      {
        "name": "JUEGOS DE MESA MODERNOS",
        "words": [
          "CATAN",
          "PANDEMIC",
          "MUNCHKIN",
          "RISK"
        ],
        "color": "blue"
      },
      {
        "name": "CRUZADAS",
        "words": [
          "PRIMERA",
          "SEGUNDA",
          "TERCERA",
          "INFANTIL"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-74",
    "categories": [
      {
        "name": "SUSTANTIVOS COLECTIVOS",
        "words": [
          "MANADA",
          "REBAÑO",
          "EJERCITO",
          "FLOTA"
        ],
        "color": "yellow"
      },
      {
        "name": "SINONIMO DE 'INTELIGENTE'",
        "words": [
          "LISTO",
          "SABIO",
          "DOCTO",
          "ERUDITO"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON 'PL'",
        "words": [
          "PLATO",
          "PLUMA",
          "PLANTA",
          "PLAZA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS DE ORIGEN NAHUATL",
        "words": [
          "CHOCOLATE",
          "TOMATE",
          "AGUACATE",
          "CHILE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-75",
    "categories": [
      {
        "name": "HEROES MITOLOGICOS",
        "words": [
          "HERCULES",
          "AQUILES",
          "TESEO",
          "PERSEO"
        ],
        "color": "yellow"
      },
      {
        "name": "EMPIEZAN CON 'LL'",
        "words": [
          "LLAVE",
          "LLUVIA",
          "LLAMAR",
          "LLAMA"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON HIATO",
        "words": [
          "POESIA",
          "TEATRO",
          "LEER",
          "CAER"
        ],
        "color": "blue"
      },
      {
        "name": "PIEZAS DE BICICLETA",
        "words": [
          "MANUBRIO",
          "LLANTA",
          "CADENA",
          "PEDAL"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-76",
    "categories": [
      {
        "name": "NUMEROS PARES",
        "words": [
          "DOS",
          "CUATRO",
          "SEIS",
          "OCHO"
        ],
        "color": "yellow"
      },
      {
        "name": "VERBOS REFLEXIVOS",
        "words": [
          "LEVANTARSE",
          "DUCHARSE",
          "VESTIRSE",
          "ACOSTARSE"
        ],
        "color": "green"
      },
      {
        "name": "PARTES DEL ROSTRO",
        "words": [
          "OJOS",
          "NARIZ",
          "BOCA",
          "OREJAS"
        ],
        "color": "blue"
      },
      {
        "name": "FLORES COMUNES",
        "words": [
          "ROSA",
          "TULIPAN",
          "GIRASOL",
          "MARGARITA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-77",
    "categories": [
      {
        "name": "EDITORES DE CODIGO",
        "words": [
          "VS CODE",
          "SUBLIME",
          "INTELLIJ",
          "VIM"
        ],
        "color": "yellow"
      },
      {
        "name": "HIERBAS PARA TE",
        "words": [
          "MANZANILLA",
          "MENTA",
          "HIERBABUENA",
          "TE VERDE"
        ],
        "color": "green"
      },
      {
        "name": "INSTRUMENTOS DE TECLA",
        "words": [
          "PIANO",
          "ORGANO",
          "ACORDEON",
          "SINTETIZADOR"
        ],
        "color": "blue"
      },
      {
        "name": "ACCESORIOS MODA",
        "words": [
          "BOLSO",
          "CINTURON",
          "BUFANDA",
          "GORRO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-78",
    "categories": [
      {
        "name": "PREFIJO 'IN-'",
        "words": [
          "INCREIBLE",
          "INVISIBLE",
          "INEXACTO",
          "INUTIL"
        ],
        "color": "yellow"
      },
      {
        "name": "CAPITALES EUROPEAS",
        "words": [
          "PARIS",
          "ROMA",
          "BERLIN",
          "LONDRES"
        ],
        "color": "green"
      },
      {
        "name": "MARCAS DE AUTOS",
        "words": [
          "TOYOTA",
          "FORD",
          "HONDA",
          "BMW"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS TERMINAN EN 'A'",
        "words": [
          "CASA",
          "MESA",
          "SILLA",
          "FLORA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-79",
    "categories": [
      {
        "name": "ANTONIMO DE 'LLENO'",
        "words": [
          "VACIO",
          "HUECO",
          "DESOCUPADO",
          "LIBRE"
        ],
        "color": "yellow"
      },
      {
        "name": "INDICADORES ECONOMICOS",
        "words": [
          "PIB",
          "IPC",
          "TASA",
          "INDICE"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES DOMESTICOS",
        "words": [
          "PERRO",
          "GATO",
          "HAMSTER",
          "CONEJO"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS ONOMATOPEYICAS",
        "words": [
          "GUAU",
          "MIAU",
          "MU",
          "BEE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-80",
    "categories": [
      {
        "name": "PINTORES FAMOSOS",
        "words": [
          "PICASSO",
          "DALI",
          "GOYA",
          "VAN GOGH"
        ],
        "color": "yellow"
      },
      {
        "name": "CINE DE CIENCIA FICCION",
        "words": [
          "BLADE RUNNER",
          "2001",
          "MATRIX",
          "STAR WARS"
        ],
        "color": "green"
      },
      {
        "name": "NUMEROS PRIMOS",
        "words": [
          "DOS",
          "TRES",
          "CINCO",
          "SIETE"
        ],
        "color": "blue"
      },
      {
        "name": "INDEFINIDOS",
        "words": [
          "ALGO",
          "NADA",
          "ALGUIEN",
          "NADIE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-81",
    "categories": [
      {
        "name": "PARTES DE LA CASA",
        "words": [
          "COCINA",
          "SALA",
          "DORMITORIO",
          "BAÑO"
        ],
        "color": "yellow"
      },
      {
        "name": "NEUROTRANSMISORES",
        "words": [
          "SEROTONINA",
          "DOPAMINA",
          "ADRENALINA",
          "MELATONINA"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON SUFIJO '-ANTE'",
        "words": [
          "ESTUDIANTE",
          "TRABAJANTE",
          "CANTANTE",
          "VIAJANTE"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS TABU",
        "words": [
          "PALABRO",
          "INSULTO",
          "MALEDUCACION",
          "GROSERIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-82",
    "categories": [
      {
        "name": "ESCRITORES LATINOAMERICANOS",
        "words": [
          "GARCIA MARQUEZ",
          "NERUDA",
          "BORGES",
          "PAZ"
        ],
        "color": "yellow"
      },
      {
        "name": "PERSONAJES DC",
        "words": [
          "BATMAN",
          "SUPERMAN",
          "WONDER WOMAN",
          "FLASH"
        ],
        "color": "green"
      },
      {
        "name": "PRESIDENTES DE USA",
        "words": [
          "WASHINGTON",
          "LINCOLN",
          "ROOSEVELT",
          "KENNEDY"
        ],
        "color": "blue"
      },
      {
        "name": "PAISES BAJOS",
        "words": [
          "HOLANDA",
          "BELGICA",
          "LUXEMBURGO",
          "PAISES BAJOS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-83",
    "categories": [
      {
        "name": "RIOS DE AMERICA",
        "words": [
          "AMAZONAS",
          "MISISIPI",
          "BRAVO",
          "PARANA"
        ],
        "color": "yellow"
      },
      {
        "name": "ANAGRAMAS COMUNES",
        "words": [
          "ROMA",
          "AMOR",
          "MORA",
          "RAMO"
        ],
        "color": "green"
      },
      {
        "name": "DEPORTES DE COMBATE",
        "words": [
          "BOXEO",
          "MMA",
          "ESGRIMA",
          "LUCHA"
        ],
        "color": "blue"
      },
      {
        "name": "PERSONAJES DE FICCIÓN",
        "words": [
          "SHERLOCK",
          "POTTER",
          "BOND",
          "GATSBY"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-84",
    "categories": [
      {
        "name": "NEBULOSAS",
        "words": [
          "ORION",
          "CANGREJO",
          "ANILLO",
          "AGUILA"
        ],
        "color": "yellow"
      },
      {
        "name": "MATERIALES Y OBJETOS",
        "words": [
          "ARBOL",
          "MARMOL",
          "LAPIZ",
          "AZUCAR"
        ],
        "color": "green"
      },
      {
        "name": "CAPAS ATMOSFERICAS",
        "words": [
          "TROPOSFERA",
          "ESTRATOSFERA",
          "MESOSFERA",
          "TERMOSFERA"
        ],
        "color": "blue"
      },
      {
        "name": "TRISILABAS",
        "words": [
          "VENTANA",
          "CAMISA",
          "ZAPATO",
          "ABRIGO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-85",
    "categories": [
      {
        "name": "ROMPECABEZAS",
        "words": [
          "PUZZLE",
          "CRUCIGRAMA",
          "SOPA LETRAS",
          "SUDOKU"
        ],
        "color": "yellow"
      },
      {
        "name": "LENGUAS INDIGENAS",
        "words": [
          "NAHUATL",
          "MAYA",
          "QUECHUA",
          "GUARANI"
        ],
        "color": "green"
      },
      {
        "name": "GENTILICIOS MEXICO",
        "words": [
          "YUCATECO",
          "JALISCIENSE",
          "REGIOMONTANO",
          "CHILANGO"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS INVARIABLES",
        "words": [
          "SALUD",
          "CAOS",
          "SED",
          "HAMBRE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-86",
    "categories": [
      {
        "name": "GRUPOS ESPAÑOLES",
        "words": [
          "ESTOPA",
          "AMARAL",
          "VETUSTA MORLA",
          "LOQUILLO"
        ],
        "color": "yellow"
      },
      {
        "name": "ACRONIMOS ESCOLARES",
        "words": [
          "ESO",
          "BACHILLER",
          "FP",
          "UNED"
        ],
        "color": "green"
      },
      {
        "name": "PREFIJO 'SUB-'",
        "words": [
          "SUBTERRANEO",
          "SUBACUATICO",
          "SUBTITULO",
          "SUBMARINO"
        ],
        "color": "blue"
      },
      {
        "name": "FOTOGRAFIA",
        "words": [
          "CAMARA",
          "LENTE",
          "FLASH",
          "TRIPODE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-87",
    "categories": [
      {
        "name": "CASCADAS FAMOSAS",
        "words": [
          "NIAGARA",
          "IGUAZU",
          "ANGEL",
          "VICTORIA"
        ],
        "color": "yellow"
      },
      {
        "name": "SINONIMO DE 'ANTIGUO'",
        "words": [
          "VIEJO",
          "ARCAICO",
          "ANCESTRAL",
          "PRIMITIVO"
        ],
        "color": "green"
      },
      {
        "name": "DEPORTES ACUATICOS",
        "words": [
          "NATACION",
          "SURF",
          "REMO",
          "BUCEO"
        ],
        "color": "blue"
      },
      {
        "name": "LEYENDAS MEXICANAS",
        "words": [
          "LLA LORONA",
          "CHUPACABRAS",
          "NAHUAL",
          "MULATA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-88",
    "categories": [
      {
        "name": "FUNCIONES MATEMATICAS",
        "words": [
          "LINEAL",
          "CUADRATICA",
          "EXPONENCIAL",
          "LOGARITMICA"
        ],
        "color": "yellow"
      },
      {
        "name": "PAISES CON NOMBRE DE CIUDAD",
        "words": [
          "SINGAPUR",
          "MONACO",
          "VATICANO",
          "LUXEMBURGO"
        ],
        "color": "green"
      },
      {
        "name": "BEBIDAS TRADICIONALES",
        "words": [
          "TEQUILA",
          "PULQUE",
          "HORCHATA",
          "POZOLE"
        ],
        "color": "blue"
      },
      {
        "name": "CARRERAS UNIVERSITARIAS",
        "words": [
          "MEDICINA",
          "DERECHO",
          "INGENIERIA",
          "ARQUITECTURA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-89",
    "categories": [
      {
        "name": "MARCAS DE ROPA",
        "words": [
          "ZARA",
          "H&M",
          "MANGO",
          "UNIQLO"
        ],
        "color": "yellow"
      },
      {
        "name": "DIRECTORES DE CINE",
        "words": [
          "SPIELBERG",
          "NOLAN",
          "TARANTINO",
          "ALMODOVAR"
        ],
        "color": "green"
      },
      {
        "name": "EMPRESAS TECNOLOGIA",
        "words": [
          "GOOGLE",
          "APPLE",
          "MICROSOFT",
          "META"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS DE UNA SILABA",
        "words": [
          "DIOS",
          "FLOR",
          "CRUZ",
          "VOZ"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-90",
    "categories": [
      {
        "name": "VERBOS REGULARES 'ER'",
        "words": [
          "BEBER",
          "CORRER",
          "LEER",
          "VENDER"
        ],
        "color": "yellow"
      },
      {
        "name": "PROTOCOLOS DE INTERNET",
        "words": [
          "HTTP",
          "FTP",
          "DNS",
          "TCP"
        ],
        "color": "green"
      },
      {
        "name": "GLANDULAS ENDOCRINAS",
        "words": [
          "TIROIDES",
          "PANCREAS",
          "HIPOFISIS",
          "SUPRARRENAL"
        ],
        "color": "blue"
      },
      {
        "name": "ISLAS FAMOSAS",
        "words": [
          "HAWAI",
          "BALI",
          "MADAGASCAR",
          "CUBA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-91",
    "categories": [
      {
        "name": "ANIMALES EN PELIGRO",
        "words": [
          "PANDA",
          "TIGRE",
          "ELEFANTE",
          "GORILA"
        ],
        "color": "yellow"
      },
      {
        "name": "LAGOS FAMOSOS",
        "words": [
          "TITICACA",
          "VICTORIA",
          "SUPERIOR",
          "GINEBRA"
        ],
        "color": "green"
      },
      {
        "name": "HUESOS DEL CUERPO",
        "words": [
          "FEMUR",
          "TIBIA",
          "HUMERO",
          "COSTILLA"
        ],
        "color": "blue"
      },
      {
        "name": "MARCAS DE RELOJES",
        "words": [
          "ROLEX",
          "OMEGA",
          "CASIO",
          "SEIKO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-92",
    "categories": [
      {
        "name": "PINTORES MEXICANOS",
        "words": [
          "FRIDA KAHLO",
          "RIVERA",
          "SIGUEIROS",
          "TAMAYO"
        ],
        "color": "yellow"
      },
      {
        "name": "MUSCULOS PRINCIPALES",
        "words": [
          "BICEPS",
          "TRICEPS",
          "CUADRICEPS",
          "ABDOMINAL"
        ],
        "color": "green"
      },
      {
        "name": "PAISES BALCANICOS",
        "words": [
          "CROACIA",
          "SERBIA",
          "BOSNIA",
          "ALBANIA"
        ],
        "color": "blue"
      },
      {
        "name": "FIGURAS EN 3D",
        "words": [
          "CUBO",
          "ESFERA",
          "CILINDRO",
          "PIRAMIDE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-93",
    "categories": [
      {
        "name": "ROPA DE INVIERNO",
        "words": [
          "CHAMARRA",
          "BUFANDA",
          "GUANTES",
          "GORRO"
        ],
        "color": "yellow"
      },
      {
        "name": "BEBIDAS CALIENTES",
        "words": [
          "CAFE",
          "CHOCOLATE",
          "MATE",
          "INFUSION"
        ],
        "color": "green"
      },
      {
        "name": "NAVEGADORES WEB",
        "words": [
          "CHROME",
          "FIREFOX",
          "SAFARI",
          "EDGE"
        ],
        "color": "blue"
      },
      {
        "name": "PAISES ESCANDINAVOS",
        "words": [
          "SUECIA",
          "NORUEGA",
          "DINAMARCA",
          "FINLANDIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-94",
    "categories": [
      {
        "name": "PALABRAS MASCULINAS",
        "words": [
          "PERRO",
          "GATO",
          "ARBOL",
          "LIBRO"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'BIO-'",
        "words": [
          "BIOLOGIA",
          "BIODIVERSIDAD",
          "BIOMASA",
          "BIOGRAFIA"
        ],
        "color": "green"
      },
      {
        "name": "ORDENES CON PRONOMBRE",
        "words": [
          "DIGAMELO",
          "COMPRAMELO",
          "ENSENAMELO",
          "BUSCAMELO"
        ],
        "color": "blue"
      },
      {
        "name": "PARTES DE UN BARCO",
        "words": [
          "VELA",
          "TIMON",
          "ANCLA",
          "PROA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-95",
    "categories": [
      {
        "name": "JUEGOS INFANTILES",
        "words": [
          "CARRERA",
          "ESCONDITE",
          "COMBA",
          "PILLA"
        ],
        "color": "yellow"
      },
      {
        "name": "SINONIMO DE 'GRANDE'",
        "words": [
          "ENORME",
          "GIGANTESCO",
          "COLOSAL",
          "MONSTRUOSO"
        ],
        "color": "green"
      },
      {
        "name": "EMPRESAS DE INTERNET",
        "words": [
          "GOOGLE",
          "AMAZON",
          "META",
          "NETFLIX"
        ],
        "color": "blue"
      },
      {
        "name": "BIOMAS TERRESTRES",
        "words": [
          "SELVA",
          "DESIERTO",
          "TUNDRA",
          "SABANA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-96",
    "categories": [
      {
        "name": "PALABRAS CON 'G' SUAVE",
        "words": [
          "GATO",
          "GOL",
          "GUSTO",
          "GOMA"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS DE ORIGEN ARABE",
        "words": [
          "ALMOHADA",
          "ALGODON",
          "ALMACEN",
          "AZUCAR"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON 'BR'",
        "words": [
          "BRAZO",
          "BROCHA",
          "BRUJA",
          "BRUJULA"
        ],
        "color": "blue"
      },
      {
        "name": "COMIDAS DE NAVIDAD",
        "words": [
          "BACALAO",
          "LECHON",
          "TAMALES",
          "ROMERITOS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-97",
    "categories": [
      {
        "name": "UNIDADES LONGITUD",
        "words": [
          "METRO",
          "CENTIMETRO",
          "KILOMETRO",
          "MILLA"
        ],
        "color": "yellow"
      },
      {
        "name": "PERSONAJES LITERARIOS",
        "words": [
          "SHERLOCK",
          "HAMLET",
          "QUIJOTE",
          "HUCK FINN"
        ],
        "color": "green"
      },
      {
        "name": "TRASTORNOS MENTALES",
        "words": [
          "ANSIEDAD",
          "DEPRESION",
          "TOC",
          "ESQUIZOFRENIA"
        ],
        "color": "blue"
      },
      {
        "name": "SINONIMO DE 'HERMOSO'",
        "words": [
          "BELLO",
          "PRECIOSO",
          "BONITO",
          "LIMPIO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-98",
    "categories": [
      {
        "name": "MOBILIARIO",
        "words": [
          "ARMARIO",
          "CARPETA",
          "ESTANTE",
          "COMODA"
        ],
        "color": "yellow"
      },
      {
        "name": "CONSTELACIONES",
        "words": [
          "ORION",
          "OSA MAYOR",
          "CASIOPEA",
          "ESCORPION"
        ],
        "color": "green"
      },
      {
        "name": "CANTANTES LATINOS",
        "words": [
          "SHAKIRA",
          "BAD BUNNY",
          "ROSALIA",
          "JLO"
        ],
        "color": "blue"
      },
      {
        "name": "POSICIONES FUTBOL",
        "words": [
          "PORTERO",
          "DEFENSA",
          "MEDIO",
          "DELANTERO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-99",
    "categories": [
      {
        "name": "TAREAS DEL HOGAR",
        "words": [
          "BARRER",
          "FREGAR",
          "PLANCHAR",
          "POLVO"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'RE-'",
        "words": [
          "RENACER",
          "REPASAR",
          "RECARGAR",
          "RELLENAR"
        ],
        "color": "green"
      },
      {
        "name": "PREFIJO 'SUPER-'",
        "words": [
          "SUPERMERCADO",
          "SUPERHOMBRE",
          "SUPERFICIE",
          "SUPERPOTENCIA"
        ],
        "color": "blue"
      },
      {
        "name": "PRONOMBRES PERSONALES",
        "words": [
          "YO",
          "TU",
          "EL",
          "ELLA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-100",
    "categories": [
      {
        "name": "DIOSES NORUEGOS",
        "words": [
          "ODIN",
          "THOR",
          "FREY",
          "LOKI"
        ],
        "color": "yellow"
      },
      {
        "name": "FORMAS DE ONDA",
        "words": [
          "SENO",
          "COSENO",
          "CUADRADA",
          "DIENTE"
        ],
        "color": "green"
      },
      {
        "name": "COSAS DE PLAYA",
        "words": [
          "ARENA",
          "OLA",
          "SOL",
          "CONCHA"
        ],
        "color": "blue"
      },
      {
        "name": "EMPIEZAN CON 'Z'",
        "words": [
          "ZAPATO",
          "ZORRO",
          "ZANAHORIA",
          "ZARZA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-101",
    "categories": [
      {
        "name": "DEPORTES DE PELOTA",
        "words": [
          "FUTBOL",
          "TENIS",
          "BEISBOL",
          "GOLF"
        ],
        "color": "yellow"
      },
      {
        "name": "OPERACIONES ARITMETICAS",
        "words": [
          "SUMA",
          "RESTA",
          "MULTIPLICAR",
          "DIVIDIR"
        ],
        "color": "green"
      },
      {
        "name": "COSAS QUE SE EXPRIMEN",
        "words": [
          "NARANJA",
          "LIMON",
          "TORONJA",
          "LIMA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS FEMENINAS",
        "words": [
          "CASA",
          "MESA",
          "FLOR",
          "PUERTA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-102",
    "categories": [
      {
        "name": "SINONIMO DE 'FEO'",
        "words": [
          "HORRIBLE",
          "MONSTRUOSO",
          "DEFORME",
          "REPUGNANTE"
        ],
        "color": "yellow"
      },
      {
        "name": "COMIDA RAPIDA",
        "words": [
          "HAMBURGUESA",
          "PIZZA",
          "TACO",
          "SANDWICH"
        ],
        "color": "green"
      },
      {
        "name": "LENGUAJES DE PROGRAMACION",
        "words": [
          "PYTHON",
          "JAVASCRIPT",
          "JAVA",
          "C"
        ],
        "color": "blue"
      },
      {
        "name": "NUMEROS ROMANOS",
        "words": [
          "I",
          "V",
          "X",
          "L"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-103",
    "categories": [
      {
        "name": "INSTRUMENTOS VIENTO",
        "words": [
          "FLAUTA",
          "CLARINETE",
          "TROMPETA",
          "SAXOFON"
        ],
        "color": "yellow"
      },
      {
        "name": "FENOMENOS QUIMICOS",
        "words": [
          "OXIDACION",
          "REDUCCION",
          "HIDROLISIS",
          "COMBUSTION"
        ],
        "color": "green"
      },
      {
        "name": "FRUTAS ROJAS",
        "words": [
          "FRESA",
          "FRAMBUESA",
          "CEREZA",
          "ARANDANO"
        ],
        "color": "blue"
      },
      {
        "name": "DIAS FESTIVOS MEXICO",
        "words": [
          "DIA MUERTOS",
          "NAVIDAD",
          "SEMANA SANTA",
          "INDEPENDENCIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-104",
    "categories": [
      {
        "name": "PALABRAS DE SEIS LETRAS",
        "words": [
          "JARDIN",
          "CAMINO",
          "PUERTA",
          "BOSQUE"
        ],
        "color": "yellow"
      },
      {
        "name": "CUERPOS CELESTES",
        "words": [
          "ESTRELLA",
          "COMETA",
          "ASTEROIDE",
          "METEORITO"
        ],
        "color": "green"
      },
      {
        "name": "FUTBOLISTAS ARGENTINOS",
        "words": [
          "MESSI",
          "MARADONA",
          "DI MARIA",
          "AGUERO"
        ],
        "color": "blue"
      },
      {
        "name": "ANTONIMO DE 'ALEGRE'",
        "words": [
          "TRISTE",
          "APAGADO",
          "SOMBRIO",
          "MUSTIO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-105",
    "categories": [
      {
        "name": "MARCAS DE CELULARES",
        "words": [
          "IPHONE",
          "SAMSUNG",
          "XIAOMI",
          "HUAWEI"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 'Q'",
        "words": [
          "QUESO",
          "QUEMAR",
          "QUITAR",
          "QUERER"
        ],
        "color": "green"
      },
      {
        "name": "OBRAS DE ARTE FAMOSAS",
        "words": [
          "MONA LISA",
          "ULTIMA CENA",
          "NOCHE ESTRELLADA",
          "GRITO"
        ],
        "color": "blue"
      },
      {
        "name": "BEBIDAS REFRESCANTES",
        "words": [
          "AGUA",
          "SODA",
          "ZUMO",
          "LIMONADA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-106",
    "categories": [
      {
        "name": "CRIPTOMONEDAS",
        "words": [
          "BITCOIN",
          "ETHEREUM",
          "CARDANO",
          "SOLANA"
        ],
        "color": "yellow"
      },
      {
        "name": "ANTONIMO DE 'BUENO'",
        "words": [
          "MALO",
          "PERVERSO",
          "VILEZA",
          "MALDAD"
        ],
        "color": "green"
      },
      {
        "name": "MESES DEL AÑO",
        "words": [
          "ENERO",
          "MARZO",
          "JUNIO",
          "DICIEMBRE"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS CON 'Ñ'",
        "words": [
          "ESPAÑA",
          "AÑO",
          "MUÑECA",
          "PIÑA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-107",
    "categories": [
      {
        "name": "VERBOS DE PERCEPCION",
        "words": [
          "VER",
          "OIR",
          "OLER",
          "SENTIR"
        ],
        "color": "yellow"
      },
      {
        "name": "MEDIDAS DE PESO",
        "words": [
          "GRAMO",
          "KILO",
          "TONELADA",
          "LIBRA"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS DE DOBLE SENTIDO",
        "words": [
          "PICO",
          "GATO",
          "LIMA",
          "SERIE"
        ],
        "color": "blue"
      },
      {
        "name": "DISPOSITIVOS APPLE",
        "words": [
          "IPHONE",
          "IPAD",
          "MACBOOK",
          "APPLE WATCH"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-108",
    "categories": [
      {
        "name": "DIAS DE LA SEMANA",
        "words": [
          "LUNES",
          "MARTES",
          "MIERCOLES",
          "JUEVES"
        ],
        "color": "yellow"
      },
      {
        "name": "PAISES DE ASIA SURESTE",
        "words": [
          "TAILANDIA",
          "VIETNAM",
          "INDONESIA",
          "MALASIA"
        ],
        "color": "green"
      },
      {
        "name": "IDIOMAS DE EUROPA",
        "words": [
          "ALEMAN",
          "FRANCES",
          "ITALIANO",
          "PORTUGUES"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS DE ORIGEN GRIEGO",
        "words": [
          "DEMOCRACIA",
          "FILOSOFIA",
          "TEATRO",
          "MATEMATICAS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-109",
    "categories": [
      {
        "name": "TERMINAN EN '-AJE'",
        "words": [
          "VIAJE",
          "PAISAJE",
          "LENGUAJE",
          "EQUIPAJE"
        ],
        "color": "yellow"
      },
      {
        "name": "FUERZAS FISICAS",
        "words": [
          "GRAVEDAD",
          "MAGNETISMO",
          "ELECTRICA",
          "FRICCION"
        ],
        "color": "green"
      },
      {
        "name": "SUPERHEROES",
        "words": [
          "BATMAN",
          "SUPERMAN",
          "SPIDERMAN",
          "IRONMAN"
        ],
        "color": "blue"
      },
      {
        "name": "JOYAS COMUNES",
        "words": [
          "ANILLO",
          "COLLAR",
          "PENDIENTES",
          "PULSERA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-110",
    "categories": [
      {
        "name": "PALABRAS DE TRES LETRAS",
        "words": [
          "SOL",
          "MAR",
          "LUZ",
          "PAN"
        ],
        "color": "yellow"
      },
      {
        "name": "POSTRES TIPICOS",
        "words": [
          "FLAN",
          "HELADO",
          "PASTEL",
          "GELATINA"
        ],
        "color": "green"
      },
      {
        "name": "GUERRAS FAMOSAS",
        "words": [
          "MUNDIAL",
          "CIVIL",
          "VIETNAM",
          "INDEPENDENCIA"
        ],
        "color": "blue"
      },
      {
        "name": "HERRAMIENTAS MANUALES",
        "words": [
          "MARTILLO",
          "DESTORNILLADOR",
          "SIERRA",
          "LLAVE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-111",
    "categories": [
      {
        "name": "COSAS QUE SE PLIEGAN",
        "words": [
          "ROPA",
          "PAPEL",
          "MANTEL",
          "SERVILLETA"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'AUTO-'",
        "words": [
          "AUTOMOVIL",
          "AUTOPISTA",
          "AUTOMATICO",
          "AUTONOMO"
        ],
        "color": "green"
      },
      {
        "name": "SALSAS PICANTES",
        "words": [
          "VALENTINA",
          "CHOLULA",
          "TABASCO",
          "SRIBACHA"
        ],
        "color": "blue"
      },
      {
        "name": "INGREDIENTES MEXICANOS",
        "words": [
          "CHILE",
          "ALUBIA",
          "MAIZ",
          "NOPAL"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-112",
    "categories": [
      {
        "name": "EMPIEZAN CON 'H'",
        "words": [
          "HUEVO",
          "HUESO",
          "HIELO",
          "HUERTO"
        ],
        "color": "yellow"
      },
      {
        "name": "ANIMALES DE GRANJA",
        "words": [
          "VACA",
          "CERDO",
          "GALLINA",
          "CABALLO"
        ],
        "color": "green"
      },
      {
        "name": "TIPOS DE ARBOLES",
        "words": [
          "ROBLE",
          "PINO",
          "SAUCE",
          "CEDRO"
        ],
        "color": "blue"
      },
      {
        "name": "SENTIDOS HUMANOS",
        "words": [
          "VISTA",
          "OIDO",
          "OLFATO",
          "GUSTO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-113",
    "categories": [
      {
        "name": "SIGNOS DEL ZODIACO",
        "words": [
          "ARIES",
          "TAURO",
          "GEMINIS",
          "CANCER"
        ],
        "color": "yellow"
      },
      {
        "name": "SUFIJO '-CION'",
        "words": [
          "ACCION",
          "CANCION",
          "VISION",
          "MISION"
        ],
        "color": "green"
      },
      {
        "name": "SINONIMO DE 'TRISTE'",
        "words": [
          "APENADO",
          "DECAIDO",
          "MELANCOLICO",
          "DEPRIMIDO"
        ],
        "color": "blue"
      },
      {
        "name": "PRESIDENTES DE MEXICO",
        "words": [
          "OBRADOR",
          "ENRIQUE PENA",
          "CALDERON",
          "VICENTE FOX"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-114",
    "categories": [
      {
        "name": "SUFIJO '-MENTE'",
        "words": [
          "RAPIDAMENTE",
          "FACILMENTE",
          "LENTAMENTE",
          "SUAVEMENTE"
        ],
        "color": "yellow"
      },
      {
        "name": "PARTICULAS SUBATOMICAS",
        "words": [
          "PROTON",
          "NEUTRON",
          "ELECTRON",
          "FOTON"
        ],
        "color": "green"
      },
      {
        "name": "ESPECIES DE PESCADO",
        "words": [
          "SALMON",
          "ATUN",
          "MERLUZA",
          "TRUCHA"
        ],
        "color": "blue"
      },
      {
        "name": "ADJETIVOS NUMERALES",
        "words": [
          "PRIMERO",
          "SEGUNDO",
          "TERCERO",
          "ULTIMO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-115",
    "categories": [
      {
        "name": "AVES RAPACES",
        "words": [
          "AGUILA",
          "HALCÓN",
          "BUITRE",
          "LECHUZA"
        ],
        "color": "yellow"
      },
      {
        "name": "NIVELES EDUCATIVOS",
        "words": [
          "PREESCOLAR",
          "PRIMARIA",
          "SECUNDARIA",
          "UNIVERSIDAD"
        ],
        "color": "green"
      },
      {
        "name": "TECNOLOGIA ANTIGUA",
        "words": [
          "FAX",
          "DISQUETE",
          "VHS",
          "TELEFONO FIJO"
        ],
        "color": "blue"
      },
      {
        "name": "ORGANOS VITALES",
        "words": [
          "CORAZON",
          "PULMON",
          "HIGADO",
          "RIÑON"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-116",
    "categories": [
      {
        "name": "SINONIMO DE 'SENCILLO'",
        "words": [
          "FACIL",
          "SIMPLE",
          "BASICO",
          "ELEMENTAL"
        ],
        "color": "yellow"
      },
      {
        "name": "PLANETAS SISTEMA SOLAR",
        "words": [
          "MARTE",
          "VENUS",
          "SATURNO",
          "JUPITER"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON SUFIJO '-ABLE'",
        "words": [
          "AMABLE",
          "COMIBLE",
          "BEBIBLE",
          "PROBABLE"
        ],
        "color": "blue"
      },
      {
        "name": "COSAS ELECTRICAS",
        "words": [
          "LAMPARA",
          "VENTILADOR",
          "TOSTADOR",
          "PLANCHA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-117",
    "categories": [
      {
        "name": "VERBOS EN INFINITIVO",
        "words": [
          "CORRER",
          "SALTAR",
          "COMER",
          "VIVIR"
        ],
        "color": "yellow"
      },
      {
        "name": "BANDAS FAMOSAS",
        "words": [
          "QUEEN",
          "ROLLING STONES",
          "LED ZEPPELIN",
          "PINK FLOYD"
        ],
        "color": "green"
      },
      {
        "name": "IMPERIOS HISTORICOS",
        "words": [
          "ROMANO",
          "PERSA",
          "MONGOL",
          "BIZANTINO"
        ],
        "color": "blue"
      },
      {
        "name": "ANIMALES CARNIVOROS",
        "words": [
          "LEON",
          "LOBO",
          "TIBURON",
          "COCODRILO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-118",
    "categories": [
      {
        "name": "PELICULAS ANIMADAS",
        "words": [
          "TOY STORY",
          "FROZEN",
          "REY LEON",
          "NEMO"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'PRE-'",
        "words": [
          "PREHISTORIA",
          "PREESCOLAR",
          "PREVIO",
          "PREPAGO"
        ],
        "color": "green"
      },
      {
        "name": "INVENTOS IMPORTANTES",
        "words": [
          "RUEDA",
          "PAPEL",
          "POLVORA",
          "BRUJULA"
        ],
        "color": "blue"
      },
      {
        "name": "COLECCIONES COMUNES",
        "words": [
          "MONEDAS",
          "ESTAMPILLAS",
          "FIGURAS",
          "TARJETAS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-119",
    "categories": [
      {
        "name": "DERIVADOS DE LECHE",
        "words": [
          "QUESO",
          "YOGURT",
          "CREMA",
          "MANTEQUILLA"
        ],
        "color": "yellow"
      },
      {
        "name": "TERMINAN EN '-UCHO'",
        "words": [
          "POBLUCHO",
          "VIVIENDUCHO",
          "CASUCHO",
          "CUARTUCHO"
        ],
        "color": "green"
      },
      {
        "name": "COSAS DEL HOGAR",
        "words": [
          "SILLA",
          "MANTA",
          "PLATO",
          "VASO"
        ],
        "color": "blue"
      },
      {
        "name": "TERMINAN EN N",
        "words": [
          "AVION","BALON","JAMON","LIMON"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-120",
    "categories": [
      {
        "name": "PELICULAS DE TERROR",
        "words": [
          "PSICOSIS",
          "RESPLANDOR",
          "SABBATH",
          "DRACULA"
        ],
        "color": "yellow"
      },
      {
        "name": "IMPUESTOS COMUNES",
        "words": [
          "IVA",
          "ISR",
          "IEPS",
          "IMPUSTO"
        ],
        "color": "green"
      },
      {
        "name": "FENOMENOS NATURALES",
        "words": [
          "TERREMOTO",
          "TORNADO",
          "HURACAN",
          "TSUNAMI"
        ],
        "color": "blue"
      },
      {
        "name": "IDIOMAS MAS HABLADOS",
        "words": [
          "INGLES",
          "CHINO",
          "ESPAÑOL",
          "HINDI"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-121",
    "categories": [
      {
        "name": "COSAS QUE SE ENROLLAN",
        "words": [
          "CABLE",
          "MANGA",
          "CINTA",
          "ALFOMBRA"
        ],
        "color": "yellow"
      },
      {
        "name": "TIPOS DE INTELIGENCIA",
        "words": [
          "IA",
          "MACHINE LEARNING",
          "DEEP LEARNING",
          "RED NEURONAL"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES EXTINTOS",
        "words": [
          "DODO",
          "MAMUT",
          "TIGRE DIENTE",
          "PEREZOSO GIGANTE"
        ],
        "color": "blue"
      },
      {
        "name": "HABITOS SALUDABLES",
        "words": [
          "DORMIR",
          "COMER",
          "EJERCICIO",
          "HIDRATACION"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-122",
    "categories": [
      {
        "name": "SERIES DE TELEVISION",
        "words": [
          "STRANGER THINGS",
          "JUEGO TRONOS",
          "BREAKING BAD",
          "LOST"
        ],
        "color": "yellow"
      },
      {
        "name": "COMENTARISTAS DEPORTIVOS",
        "words": [
          "RELATO",
          "CRONICA",
          "ANALISIS",
          "ENTREVISTA"
        ],
        "color": "green"
      },
      {
        "name": "MONSTRUOS MITOLOGICOS",
        "words": [
          "MINOTAURO",
          "MEDUSA",
          "CICLOPE",
          "HIDRA"
        ],
        "color": "blue"
      },
      {
        "name": "RITUALES Y TRADICIONES",
        "words": [
          "PONER PINO",
          "CAMPANADAS",
          "QUEMAR AÑO",
          "PIEDRA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-123",
    "categories": [
      {
        "name": "PALABRAS CON SUFIJO '-AL'",
        "words": [
          "MUSICAL",
          "NATURAL",
          "CULTURAL",
          "GENERAL"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON 'TR'",
        "words": [
          "TREN",
          "TREMENTINA",
          "TRENZA",
          "TRIANGULO"
        ],
        "color": "green"
      },
      {
        "name": "EMPIEZAN CON 'CH'",
        "words": [
          "CHOCOLATE",
          "CHILE",
          "CHANCLA",
          "CHIMENEA"
        ],
        "color": "blue"
      },
      {
        "name": "DIOSAS GRIEGAS",
        "words": [
          "ATENEA",
          "AFRODITA",
          "ARTEMISA",
          "HERA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-124",
    "categories": [
      {
        "name": "COMETAS FAMOSOS",
        "words": [
          "HALLEY",
          "HALE BOP",
          "ISON",
          "BENNETT"
        ],
        "color": "yellow"
      },
      {
        "name": "ANIMALES BEBES",
        "words": [
          "CACHORRO",
          "GATITO",
          "POLLITO",
          "POTRILLO"
        ],
        "color": "green"
      },
      {
        "name": "MARCAS DEPORTIVAS",
        "words": [
          "NIKE",
          "ADIDAS",
          "PUMA",
          "REEBOK"
        ],
        "color": "blue"
      },
      {
        "name": "UTILES ESCOLARES",
        "words": [
          "LAPIZ",
          "CUADERNO",
          "MOCHILA",
          "REGLA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-125",
    "categories": [
      {
        "name": "PALABRAS CON PREFIJO 'INTER-'",
        "words": [
          "INTERNACIONAL",
          "INTERACTUAR",
          "INTERMEDIO",
          "INTERNET"
        ],
        "color": "yellow"
      },
      {
        "name": "PAISES MEDITERRANEOS",
        "words": [
          "ESPAÑA",
          "ITALIA",
          "GRECIA",
          "TURQUIA"
        ],
        "color": "green"
      },
      {
        "name": "OCEANOS DEL MUNDO",
        "words": [
          "PACIFICO",
          "ATLANTICO",
          "INDICO",
          "ARTICO"
        ],
        "color": "blue"
      },
      {
        "name": "INSTRUMENTOS CIENTIFICOS",
        "words": [
          "ESTETOSCOPIO",
          "TERMOMETRO",
          "JERINGA",
          "TENSOMETRO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-126",
    "categories": [
      {
        "name": "SINONIMO DE 'DIFICIL'",
        "words": [
          "COMPLICADO",
          "LABORIOSO",
          "ARDIO",
          "TORPE"
        ],
        "color": "yellow"
      },
      {
        "name": "VERBOS REGULARES 'IR'",
        "words": [
          "VIVIR",
          "ESCRIBIR",
          "RECIBIR",
          "ABRIR"
        ],
        "color": "green"
      },
      {
        "name": "BANDAS DE ROCK LATINO",
        "words": [
          "MANA",
          "CAIFANES",
          "SODA STEREO",
          "HOMBRES G"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS CON 'B'",
        "words": [
          "BOLSO",
          "BARCO",
          "BICICLETA",
          "BOTA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-127",
    "categories": [
      {
        "name": "ANIMALES ACORAZADOS",
        "words": [
          "TORTUGA",
          "ARMADILLO",
          "CANGREJO",
          "CARACOL"
        ],
        "color": "yellow"
      },
      {
        "name": "VINOS FAMOSOS",
        "words": [
          "TINTO",
          "BLANCO",
          "ROSADO",
          "ESPUMOSO"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES VENENOSOS",
        "words": [
          "SERPIENTE",
          "ESCORPION",
          "ARAÑA",
          "MEDUSA"
        ],
        "color": "blue"
      },
      {
        "name": "PLATOS DE CUCHARA",
        "words": [
          "CALDO",
          "SOPA",
          "CREMA",
          "POTAJE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-128",
    "categories": [
      {
        "name": "GASES NOBLES",
        "words": [
          "HELIO",
          "NEON",
          "ARGON",
          "KRIPTON"
        ],
        "color": "yellow"
      },
      {
        "name": "MONOSILABAS",
        "words": [
          "SOL",
          "MAR",
          "LUZ",
          "PAN"
        ],
        "color": "green"
      },
      {
        "name": "MATERIALES DE OFICINA",
        "words": [
          "GRAPADORA",
          "PERFORADORA",
          "CLIP",
          "POST-IT"
        ],
        "color": "blue"
      },
      {
        "name": "PELICULAS CLASICAS",
        "words": [
          "CASABLANCA",
          "CIUDADANO KANE",
          "LO QUE EL VIENTO",
          "PSICOSIS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-129",
    "categories": [
      {
        "name": "VERBOS REGULARES 'AR'",
        "words": [
          "HABLAR",
          "LLEGAR",
          "BUSCAR",
          "COMPRAR"
        ],
        "color": "yellow"
      },
      {
        "name": "DEPORTES DE RAQUETA",
        "words": [
          "TENIS",
          "BADMINTON",
          "SQUASH",
          "PADEL"
        ],
        "color": "green"
      },
      {
        "name": "CIUDADES CON RIO",
        "words": [
          "PARIS SENA",
          "LONDRES TAMESIS",
          "ROMA TIBER",
          "VIENA DANUBIO"
        ],
        "color": "blue"
      },
      {
        "name": "VOLCANES ACTIVOS",
        "words": [
          "VESUBIO",
          "ETNA",
          "FUJI",
          "KRAKATOA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-130",
    "categories": [
      {
        "name": "EMPIEZAN CON 'Y'",
        "words": [
          "YEMA",
          "YATE",
          "YELMO",
          "YERBA"
        ],
        "color": "yellow"
      },
      {
        "name": "SIGLAS COMUNES",
        "words": [
          "ONG",
          "OVNI",
          "ADN",
          "ONU"
        ],
        "color": "green"
      },
      {
        "name": "VERBOS DE COCINA",
        "words": [
          "HERVIR",
          "FREIR",
          "HORNEAR",
          "ASAR"
        ],
        "color": "blue"
      },
      {
        "name": "MITOS URBANOS",
        "words": [
          "CHUPACABRAS",
          "LLA LORONA",
          "EL CUCUY",
          "PIEDRA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-131",
    "categories": [
      {
        "name": "PALABRAS COMPUESTAS",
        "words": [
          "PARAGUAS",
          "CORREVEIDILE",
          "SACACORCHOS",
          "PORTAFOLIO"
        ],
        "color": "yellow"
      },
      {
        "name": "GALAXIAS FAMOSAS",
        "words": [
          "VIA LACTEA",
          "ANDROMEDA",
          "TRIANGULO",
          "SOMBRERO"
        ],
        "color": "green"
      },
      {
        "name": "MUSAS GRIEGAS",
        "words": [
          "CALIOPE",
          "TERPSICORE",
          "URANIA",
          "TALIA"
        ],
        "color": "blue"
      },
      {
        "name": "DEPORTES OLIMPICOS",
        "words": [
          "ATLETISMO",
          "NATACION",
          "GIMNASIA",
          "ESGRIMA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-132",
    "categories": [
      {
        "name": "REGIONES DE ESPAÑA",
        "words": [
          "ANDALUCIA",
          "CATALUNA",
          "GALICIA",
          "PAIS VASCO"
        ],
        "color": "yellow"
      },
      {
        "name": "GENEROS MUSICALES",
        "words": [
          "JAZZ",
          "ROCK",
          "POP",
          "REGGAETON"
        ],
        "color": "green"
      },
      {
        "name": "SATELITES NATURALES",
        "words": [
          "LUNA",
          "EUROPA",
          "TITAN",
          "GANIMEDES"
        ],
        "color": "blue"
      },
      {
        "name": "DISPOSITIVOS MOVILES",
        "words": [
          "IPHONE",
          "SAMSUNG",
          "XIAOMI",
          "HUAWEI"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-133",
    "categories": [
      {
        "name": "ANIMALES HERBIVOROS",
        "words": [
          "VACA",
          "CABALLO",
          "ELEFANTE",
          "JIRAFA"
        ],
        "color": "yellow"
      },
      {
        "name": "CORRIENTES PINTURA",
        "words": [
          "RENACIMIENTO",
          "BARROCO",
          "IMPRESIONISMO",
          "CUBISMO"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS DE CINCO LETRAS",
        "words": [
          "ARBOL",
          "PLATO",
          "BARCO",
          "CAMPO"
        ],
        "color": "blue"
      },
      {
        "name": "CAPITALES NORDICAS",
        "words": [
          "ESTOCOLMO",
          "OSLO",
          "COPENHAGUE",
          "HELSINKI"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-134",
    "categories": [
      {
        "name": "POETAS FAMOSOS",
        "words": [
          "BECQUER",
          "MACHADO",
          "NERUDA",
          "BENEDETTI"
        ],
        "color": "yellow"
      },
      {
        "name": "ESCRITORES ESPAÑOLES",
        "words": [
          "CERVANTES",
          "LORCA",
          "UNAMUNO",
          "PEREZ GALDOS"
        ],
        "color": "green"
      },
      {
        "name": "TITANES",
        "words": [
          "CRONOS",
          "ATLAS",
          "PROMETEO",
          "EPIMETEO"
        ],
        "color": "blue"
      },
      {
        "name": "ELECTRODOMESTICOS",
        "words": [
          "NEVERA",
          "LAVADORA",
          "HORNO",
          "MICROONDAS"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-135",
    "categories": [
      {
        "name": "ENFERMEDADES COMUNES",
        "words": [
          "GRIPE",
          "RESFRIO",
          "VARICELA",
          "ALERGIA"
        ],
        "color": "yellow"
      },
      {
        "name": "PREFIJO 'TELE-'",
        "words": [
          "TELEVISION",
          "TELEFONO",
          "TELESCOPIO",
          "TELEGRAMA"
        ],
        "color": "green"
      },
      {
        "name": "PLANETAS EXTERIORES",
        "words": [
          "JUPITER",
          "SATURNO",
          "URANO",
          "NEPTUNO"
        ],
        "color": "blue"
      },
      {
        "name": "EXPLORADORES FAMOSOS",
        "words": [
          "COLON",
          "MAGELLANES",
          "PIZARRO",
          "CORTES"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-136",
    "categories": [
      {
        "name": "FRUTAS TROPICALES",
        "words": [
          "MANGO",
          "PAPAYA",
          "GUANABANA",
          "RAMBUTAN"
        ],
        "color": "yellow"
      },
      {
        "name": "GENEROS CINEMATOGRAFICOS",
        "words": [
          "ACCION",
          "DRAMA",
          "COMEDIA",
          "TERROR"
        ],
        "color": "green"
      },
      {
        "name": "ESTILOS ARQUITECTURA",
        "words": [
          "GOTICO",
          "BARROCO",
          "MODERNO",
          "CLASICO"
        ],
        "color": "blue"
      },
      {
        "name": "ANIMALES DE AFRICA",
        "words": [
          "LEON",
          "ELEFANTE",
          "JIRAFA",
          "CEBRA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-137",
    "categories": [
      {
        "name": "TRATADOS FAMOSOS",
        "words": [
          "VERSALLES",
          "YALTA",
          "TORDESILLAS",
          "GUADALUPE"
        ],
        "color": "yellow"
      },
      {
        "name": "COSAS DE COCINA",
        "words": [
          "OLLA",
          "SARTEN",
          "VASO",
          "PLATO"
        ],
        "color": "green"
      },
      {
        "name": "VERDURAS CRUDAS",
        "words": [
          "LECHUGA",
          "ZANAHORIA",
          "APIO",
          "PIMIENTO"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS INTERROGATIVAS",
        "words": [
          "QUE",
          "QUIEN",
          "DONDE",
          "CUANDO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-138",
    "categories": [
      {
        "name": "MARCAS DE LUJO",
        "words": [
          "TESLA",
          "FERRARI",
          "LAMBORGHINI",
          "PORSCHE"
        ],
        "color": "yellow"
      },
      {
        "name": "NUMEROS ENTEROS",
        "words": [
          "UNO",
          "CERO",
          "MENOS UNO",
          "CIEN"
        ],
        "color": "green"
      },
      {
        "name": "TIPOS DE TIBURONES",
        "words": [
          "BLANCO",
          "MARTILLO",
          "TORO",
          "TIGRE"
        ],
        "color": "blue"
      },
      {
        "name": "CAPITALES DEL CARIBE",
        "words": [
          "LA HABANA",
          "SAN JUAN",
          "SANTO DOMINGO",
          "NASSAU"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-139",
    "categories": [
      {
        "name": "BAILES LATINOS",
        "words": [
          "SALSA",
          "TANGO",
          "FLAMENCO",
          "BACHATA"
        ],
        "color": "yellow"
      },
      {
        "name": "ACTIVIDADES AL AIRE LIBRE",
        "words": [
          "CICLISMO",
          "SENDERISMO",
          "PICNIC",
          "CAMPING"
        ],
        "color": "green"
      },
      {
        "name": "ANIMALES POLARES",
        "words": [
          "OSO POLAR",
          "PINGÜINO",
          "FOCA",
          "MOFETA"
        ],
        "color": "blue"
      },
      {
        "name": "MONEDAS DEL MUNDO",
        "words": [
          "DOLAR",
          "EURO",
          "PESO",
          "LIBRA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-140",
    "categories": [
      {
        "name": "PALABRAS DE CUATRO LETRAS",
        "words": [
          "CAFE",
          "SOFA",
          "MAMA",
          "PAPA"
        ],
        "color": "yellow"
      },
      {
        "name": "EMPIEZAN CON 'P' Y ACABAN EN 'O'",
        "words": [
          "PERRO",
          "PLATO",
          "PUERTO",
          "PINO"
        ],
        "color": "green"
      },
      {
        "name": "ESTRECHOS MARITIMOS",
        "words": [
          "GIBRALTAR",
          "BOSFORO",
          "DARDANELOS",
          "MAGELLANES"
        ],
        "color": "blue"
      },
      {
        "name": "ALEACIONES METALICAS",
        "words": [
          "ACERO",
          "BRONCE",
          "LATON",
          "ARMCO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-141",
    "categories": [
      {
        "name": "SUSTANTIVOS ABSTRACTOS",
        "words": [
          "ESPERANZA",
          "LIBERTAD",
          "JUSTICIA",
          "IGUALDAD"
        ],
        "color": "yellow"
      },
      {
        "name": "ARTES MARCIALES",
        "words": [
          "KARATE",
          "JUDO",
          "TAEKWONDO",
          "KUNG FU"
        ],
        "color": "green"
      },
      {
        "name": "FESTIVIDADES",
        "words": [
          "NAVIDAD",
          "PASCUA",
          "HALLOWEEN",
          "AÑO NUEVO"
        ],
        "color": "blue"
      },
      {
        "name": "COCINA MEXICANA",
        "words": [
          "TACO",
          "TAMAL",
          "POZOLE",
          "MOLE"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-142",
    "categories": [
      {
        "name": "SINONIMO DE 'RAPIDO'",
        "words": [
          "VELOZ",
          "AGIL",
          "PRESTO",
          "VERTIGINOSO"
        ],
        "color": "yellow"
      },
      {
        "name": "POSESIVOS",
        "words": [
          "MI",
          "TU",
          "SU",
          "NUESTRO"
        ],
        "color": "green"
      },
      {
        "name": "SISTEMAS DE ESCRITURA",
        "words": [
          "JEROGLIFICO",
          "CUNEIFORME",
          "CHINO",
          "KANA"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS HOMOFONAS",
        "words": [
          "VACA",
          "BACA",
          "HOLA",
          "OLA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-143",
    "categories": [
      {
        "name": "DIOSES EGIPCIOS",
        "words": [
          "RA",
          "ANUBIS",
          "OSIRIS",
          "HORUS"
        ],
        "color": "yellow"
      },
      {
        "name": "EXAMENES ESCOLARES",
        "words": [
          "PARCIAL",
          "FINAL",
          "EXTRAORDINARIO",
          "GLOBAL"
        ],
        "color": "green"
      },
      {
        "name": "VEGETALES VERDES",
        "words": [
          "ESPINACA",
          "BROCOLI",
          "LECHUGA",
          "APIO"
        ],
        "color": "blue"
      },
      {
        "name": "DIMINUTIVOS",
        "words": [
          "PERRITO",
          "GATITO",
          "CASITA",
          "ARBOLITO"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-144",
    "categories": [
      {
        "name": "ACORDES BASICOS",
        "words": [
          "MAYOR",
          "MENOR",
          "AUMENTADO",
          "DISMINUIDO"
        ],
        "color": "yellow"
      },
      {
        "name": "PALABRAS CON REPETICION",
        "words": [
          "COCO",
          "PAPA",
          "NENE",
          "MAMA"
        ],
        "color": "green"
      },
      {
        "name": "FIGURAS GEOMETRICAS",
        "words": [
          "CIRCULO",
          "CUADRADO",
          "TRIANGULO",
          "RECTANGULO"
        ],
        "color": "blue"
      },
      {
        "name": "COSAS DEL BAÑO",
        "words": [
          "TOALLA",
          "CEPILLO",
          "SHAMPOO",
          "SECADOR"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-145",
    "categories": [
      {
        "name": "PARTES DEL CEREBRO",
        "words": [
          "CEREBRO",
          "CEREBELO",
          "TALLO",
          "HIPOTALAMO"
        ],
        "color": "yellow"
      },
      {
        "name": "BEBIDAS Y MUEBLES",
        "words": [
          "CAFE",
          "SOFA",
          "TE",
          "MESA"
        ],
        "color": "green"
      },
      {
        "name": "CAPITALES AMERICANAS",
        "words": [
          "LIMA",
          "BRASILIA",
          "OTTAWA",
          "BUENOS AIRES"
        ],
        "color": "blue"
      },
      {
        "name": "MONUMENTOS FAMOSOS",
        "words": [
          "TORRE EIFFEL",
          "ESTATUA LIBERTAD",
          "COLISEO",
          "PIRAMIDES"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-146",
    "categories": [
      {
        "name": "PALABRAS QUE CAMBIAN CON S",
        "words": [
          "JABON",
          "RINCON",
          "VOLCAN",
          "CAPITAN"
        ],
        "color": "yellow"
      },
      {
        "name": "MEDIDAS DE VOLUMEN",
        "words": [
          "LITRO",
          "MILILITRO",
          "GALON",
          "BARRIL"
        ],
        "color": "green"
      },
      {
        "name": "VERBOS DE MOVIMIENTO",
        "words": [
          "IR",
          "VENIR",
          "LLEGAR",
          "SALIR"
        ],
        "color": "blue"
      },
      {
        "name": "DEPORTES EXTREMOS",
        "words": [
          "PARACAIDAS",
          "BUNGEE",
          "ALPINISMO",
          "RAFTING"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-147",
    "categories": [
      {
        "name": "CONTINENTES",
        "words": [
          "AMERICA",
          "EUROPA",
          "ASIA",
          "AFRICA"
        ],
        "color": "yellow"
      },
      {
        "name": "ANIMALES QUE VUELAN",
        "words": [
          "AGUILA",
          "MOSCA",
          "MURCIELAGO",
          "MARIPOSA"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS CON 'C' FUERTE",
        "words": [
          "CASA",
          "CAMA",
          "COCHE",
          "COLOR"
        ],
        "color": "blue"
      },
      {
        "name": "CANCIONES POPULARES",
        "words": [
          "DESPACITO",
          "GASOLINA",
          "BAILANDO",
          "LA MACARENA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-148",
    "categories": [
      {
        "name": "COSAS DE BAÑO",
        "words": [
          "DUCHA",
          "JABON",
          "TOALLA",
          "CEPILLO"
        ],
        "color": "yellow"
      },
      {
        "name": "HECHOS HISTORICOS",
        "words": [
          "INDEPENDENCIA",
          "REVOLUCION",
          "CONQUISTA",
          "COLONIA"
        ],
        "color": "green"
      },
      {
        "name": "PALABRAS LATINAS USUALES",
        "words": [
          "EXITOS",
          "CURRICULUM",
          "ALUMNI",
          "ET CETERA"
        ],
        "color": "blue"
      },
      {
        "name": "BANDERAS TRICOLORES",
        "words": [
          "MEXICO",
          "ITALIA",
          "FRANCIA",
          "RUSIA"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-149",
    "categories": [
      {
        "name": "COLORES CALIDOS",
        "words": [
          "ROJO",
          "NARANJA",
          "AMARILLO",
          "ROSADO"
        ],
        "color": "yellow"
      },
      {
        "name": "PROCESOS BIOLOGICOS",
        "words": [
          "MITOSIS",
          "MEIOSIS",
          "FOTOSINTESIS",
          "RESPIRACION"
        ],
        "color": "green"
      },
      {
        "name": "FENOMENOS OPTICOS",
        "words": [
          "ARCOIRIS",
          "ECLIPSE",
          "AURORA",
          "ESPEJISMO"
        ],
        "color": "blue"
      },
      {
        "name": "AGUJEROS NEGROS",
        "words": [
          "SAGITARIO",
          "CISNE",
          "ANDROMEDA",
          "M87"
        ],
        "color": "purple"
      }
    ]
  },
  {
    "id": "jason-150",
    "categories": [
      {
        "name": "MARAVILLAS MODERNAS",
        "words": [
          "CHICHEN ITZA",
          "MACHU PICCHU",
          "COLISEO",
          "TAJ MAHAL"
        ],
        "color": "yellow"
      },
      {
        "name": "VITAMINAS ESENCIALES",
        "words": [
          "VITAMINA A",
          "VITAMINA C",
          "VITAMINA D",
          "VITAMINA B12"
        ],
        "color": "green"
      },
      {
        "name": "PRIMATES",
        "words": [
          "MONO",
          "GORILA",
          "CHIMPANCE",
          "ORANGUTAN"
        ],
        "color": "blue"
      },
      {
        "name": "REFLEXIONES",
        "words": [
          "NO",
          "SIEMPRE",
          "NUNCA",
          "TAL VEZ"
        ],
        "color": "purple"
      }
    ]
  },
{id:"jason-151",categories:[{name:"PALABRAS CON 'B' Y 'V'",words:["BELLO","VACA","BACA","VASO"],color:"yellow"},{name:"COSAS QUE SE PUEDEN ENROLLAR",words:["ALFOMBRA","MANTA","CABLE","PAPEL"],color:"green"},{name:"PALABRAS QUE EMPIEZAN CON 'Z'",words:["ZAPATO","ZORRO","ZUMO","ZONA"],color:"blue"},{name:"PALABRAS DE CUATRO LETRAS",words:["LUNA","FLOR","ROSA","PATO"],color:"purple"}]},
{id:"jason-152",categories:[{name:"PALABRAS CON SONIDO 'RR'",words:["CARRETERA","TERRENO","BARRIL","ARROZ"],color:"yellow"},{name:"SUFIJOS DIMINUTIVOS",words:["CASITA","PERRITO","GATITO","ARBOLITO"],color:"green"},{name:"COSAS QUE SE PUEDEN DOBLAR",words:["SERVILLETA","MANTEL","CAMISA","PAPEL"],color:"blue"},{name:"PALABRAS DE SIETE LETRAS",words:["PLANETA","GAVIOTA","TORTUGA","CABALLO"],color:"purple"}]},
{id:"jason-153",categories:[{name:"SINONIMOS DE TRISTEZA",words:["MELANCOLIA","PENA","AFLICCION","DESOLACION"],color:"yellow"},{name:"MANDATOS CON PRONOMBRE",words:["DIGAMELO","ENTREGASELO","COMPRAMELO","DIGASELO"],color:"green"},{name:"COSAS QUE SE PUEDEN MEDIR",words:["TIEMPO","DISTANCIA","PESO","TEMPERATURA"],color:"blue"},{name:"PALABRAS CON 2 SILABAS",words:["CASA","PERRO","GATO","MESA"],color:"purple"}]},
{id:"jason-154",categories:[{name:"PALABRAS CON HIATO",words:["LEER","CREER","CAER","TRAER"],color:"yellow"},{name:"SINONIMOS DE ALEGRIA",words:["FELICIDAD","GOZO","DICHA","ALBOROZO"],color:"green"},{name:"SUSTANTIVOS ABSTRACTOS",words:["LIBERTAD","IGUALDAD","FRATERNIDAD","JUSTICIA"],color:"blue"},{name:"PALABRAS CON 8 LETRAS",words:["CIRCULAR","CUADRADO","HEXAGONO","OCTOGONO"],color:"purple"}]},
{id:"jason-155",categories:[{name:"PALABRAS CON GUE GUI",words:["GUERRA","GUITARRA","GUISANTE","GUION"],color:"yellow"},{name:"SINONIMOS DE RAPIDO",words:["VELOZ","AGIL","RAPAZ","PRESTO"],color:"green"},{name:"COSAS QUE CRECEN",words:["PLANTA","ARBOL","PELO","UÑA"],color:"blue"},{name:"PALABRAS CON 12 LETRAS",words:["CONSTITUCION","REFRIGERADOR","SUPERMERCADO","ARQUITECTURA"],color:"purple"}]},
{id:"jason-156",categories:[{name:"PALABRAS CON GEO",words:["GEOGRAFIA","GEOLOGIA","GEOMETRIA","GEOPOLITICA"],color:"yellow"},{name:"SINONIMOS DE INTELIGENTE",words:["LISTO","SABIO","ERUDITO","DOCTO"],color:"green"},{name:"COSAS QUE SE PUEDEN COCINAR",words:["HERVIR","ASAR","FREIR","HORNEAR"],color:"blue"},{name:"PALABRAS CON 5 LETRAS",words:["CAMPO","FUEGO","NIEVE","BARCO"],color:"purple"}]},
{id:"jason-157",categories:[{name:"PALABRAS CON PREFIJO TELE",words:["TELEFONO","TELEVISION","TELESCOPIO","TELEGRAMA"],color:"yellow"},{name:"SINONIMOS DE VALIENTE",words:["AUDZ","INTREPIDO","BRAVO","HEROICO"],color:"green"},{name:"COSAS QUE SE PUEDEN PINTAR",words:["CUADRO","PARED","LIENZO","MURAL"],color:"blue"},{name:"PALABRAS CON PRIMERA Y ULTIMA IGUAL",words:["AROMA","AMOR","ROSA","ALAS"],color:"purple"}]},
{id:"jason-158",categories:[{name:"PALABRAS CON SUFIJO DOR",words:["CANTADOR","BAILADOR","JUGADOR","TRABAJADOR"],color:"yellow"},{name:"SINONIMOS DE BELLO",words:["HERMOSO","PRECIOSO","BONITO","LIMPIO"],color:"green"},{name:"COSAS QUE SE PUEDEN LEER",words:["LIBRO","REVISTA","PERIODICO","CARTA"],color:"blue"},{name:"PALABRAS CON 3 LETRAS",words:["SOL","MAR","LUZ","PAN"],color:"purple"}]},
{id:"jason-159",categories:[{name:"PALABRAS CON PREFIJO AUTO",words:["AUTOMOVIL","AUTONOMO","AUTOMATICO","AUTORRETRATO"],color:"yellow"},{name:"SINONIMOS DE ENORME",words:["GIGANTESCO","COLOSAL","MONSTRUOSO","TITANICO"],color:"green"},{name:"COSAS QUE SE PUEDEN ESCRIBIR",words:["CARTA","POEMA","NOVELA","MENSAJE"],color:"blue"},{name:"TERMINAN EN VOCAL O N",words:["CAFE","SOFA","AVION","BALON"],color:"purple"}]},
{id:"jason-160",categories:[{name:"PALABRAS CON GUE GUI",words:["GUERRA","GUITARRA","GUISANTE","GUION"],color:"yellow"},{name:"SINONIMOS DE PEQUEÑO",words:["ENANO","MINIATURA","REDUCIDO","MINIMO"],color:"green"},{name:"COSAS QUE SE PUEDEN SENTIR",words:["EMOCION","DOLOR","FRIO","CALOR"],color:"blue"},{name:"PALABRAS CON PREFIJO ANTI",words:["ANTIBIOTICO","ANTISOCIAL","ANTIGRAVEDAD","ANTINATURAL"],color:"purple"}]},
{id:"jason-161",categories:[{name:"PALABRAS CON SUFIJO TERO",words:["JARDINERO","PANADERO","CARTERO","CARNICERO"],color:"yellow"},{name:"SINONIMOS DE OSCURO",words:["SOMBRIO","TENEBROSO","LOBREGO","NEGRO"],color:"green"},{name:"COSAS QUE SE PUEDEN CORTAR",words:["PAPEL","TELA","MADERA","CABELLO"],color:"blue"},{name:"PALABRAS DE SEIS LETRAS",words:["CAMINO","JARDIN","PUERTA","PLANTA"],color:"purple"}]},
{id:"jason-162",categories:[{name:"PALABRAS CON PREFIJO BIO",words:["BIOLOGIA","BIOSFERA","BIODIVERSIDAD","BIOMASA"],color:"yellow"},{name:"SINONIMOS DE FUERTE",words:["ROBUSTO","FORTACHON","PODEROSO","VIGOROSO"],color:"green"},{name:"COSAS QUE SE PUEDEN ABRIR",words:["PUERTA","VENTANA","BOTELLA","CAJA"],color:"blue"},{name:"SUSTANTIVOS TERMINADOS EN EZA",words:["BELLEZA","RIQUEZA","POBREZA","ALTIVEZ"],color:"purple"}]},
{id:"jason-163",categories:[{name:"PALABRAS CON SUFIJO ISTA",words:["ARTISTA","PIANISTA","PERIODISTA","CICLISTA"],color:"yellow"},{name:"SINONIMOS DE TRISTE",words:["APENADO","MELANCOLICO","DESDICHADO","LUGUBRE"],color:"green"},{name:"COSAS QUE SE PUEDEN ESCUCHAR",words:["MUSICA","RUIDO","SONIDO","SILENCIO"],color:"blue"},{name:"PALABRAS CON 8 LETRAS",words:["CIRCULAR","CUADRADO","ESTRELLA","SATELITE"],color:"purple"}]},
{id:"jason-164",categories:[{name:"PALABRAS CON PREFIJO HIDRO",words:["HIDROELECTRICA","HIDRAULICO","HIDROGENO","HIDROAVION"],color:"yellow"},{name:"SINONIMOS DE VIEJO",words:["ANCIANO","ANTIGUO","VETERANO","SEPTUAGENARIO"],color:"green"},{name:"COSAS QUE SE PUEDEN VER",words:["PAISAJE","PELICULA","CUADRO","ESPECTACULO"],color:"blue"},{name:"ANIMALES DOMESTICOS",words:["PERRO","GATO","CONEJO","LORO"],color:"purple"}]},
{id:"jason-165",categories:[{name:"PALABRAS CON SUFIJO AZO",words:["PORTAZO","GOLPAZO","MANOTAZO","PISOTON"],color:"yellow"},{name:"SINONIMOS DE ENOJADO",words:["IRRITADO","ENFADADO","COLERICO","FURIOSO"],color:"green"},{name:"VERBOS EN INFINITIVO",words:["CORRER","SALTAR","COMER","DORMIR"],color:"blue"},{name:"PALABRAS CON DOBLE VOCAL",words:["COOPERAR","COORDINAR","CREER","LEER"],color:"purple"}]},
{id:"jason-166",categories:[{name:"PALABRAS CON PREFIJO MULTI",words:["MULTICOLOR","MULTIFUNCIONAL","MULTIPLE","MULTITUD"],color:"yellow"},{name:"SINONIMOS DE AMABLE",words:["CORTES","GENTIL","ATENTO","AFABLE"],color:"green"},{name:"PARTES DEL DIA",words:["MAÑANA","TARDE","NOCHE","MADRUGADA"],color:"blue"},{name:"PALABRAS CON VOCAL DOBLE",words:["LEER","CREER","POSEER","COOPERAR"],color:"purple"}]},
{id:"jason-167",categories:[{name:"PALABRAS CON SUFIJO ERO",words:["CARPINTERO","JARDINERO","PANADERO","CARNICERO"],color:"yellow"},{name:"SINONIMOS DE RICO",words:["ADINERADO","OPULENTO","ACOMODADO","MILLONARIO"],color:"green"},{name:"COSAS QUE SE PUEDEN OLER",words:["PERFUME","FLOR","COMIDA","HUMO"],color:"blue"},{name:"COMIDA Y APARATOS",words:["PLATANO","TELEFONO","CAMARA","MUSICA"],color:"purple"}]},
{id:"jason-168",categories:[{name:"PALABRAS CON PREFIJO MICRO",words:["MICROSCOPIO","MICROONDA","MICROORGANISMO","MICROCHIP"],color:"yellow"},{name:"SINONIMOS DE SABIO",words:["ERUDITO","DOCTO","ILUSTRADO","CULTO"],color:"green"},{name:"COSAS QUE SE PUEDEN TOCAR",words:["TEXTURA","SUPERFICIE","MATERIAL","OBJETO"],color:"blue"},{name:"PRONOMBRES Y ARTICULOS",words:["TU","EL","MI","SI"],color:"purple"}]},
{id:"jason-169",categories:[{name:"PALABRAS CON SUFIJO ISMO",words:["REALISMO","IDEALISMO","OPTIMISMO","PATRIOTISMO"],color:"yellow"},{name:"SINONIMOS DE POBRE",words:["HUMILDE","MENESTEROSO","NECESITADO","INDIGENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN COMPRAR",words:["PRODUCTO","ARTICULO","MERCANCIA","BIEN"],color:"blue"},{name:"PALABRAS DE ONCE LETRAS",words:["CARPINTEROS","CALCULADORA","ARQUITECTOS","CAMPANARIOS"],color:"purple"}]},
{id:"jason-170",categories:[{name:"PALABRAS CON PREFIJO MINI",words:["MINIATURA","MINIFALDA","MINIMERCADO","MINIBUS"],color:"yellow"},{name:"SINONIMOS DE FELIZ",words:["ALEGRE","CONTENTO","JUBILOSO","REGOZIJADO"],color:"green"},{name:"COSAS QUE SE PUEDEN REGALAR",words:["PRESENTE","OBSEQUIO","DETALLE","SORPRESA"],color:"blue"},{name:"PALABRAS CON SUFIJO ANZA",words:["CONFIANZA","ESPERANZA","VENGANZA","TARDANZA"],color:"purple"}]},
{id:"jason-171",categories:[{name:"PALABRAS CON SUFIJO AJE",words:["APRENDIZAJE","PASAJE","ROPAJE","LANZAJE"],color:"yellow"},{name:"SINONIMOS DE GENEROSO",words:["ALTRUISTA","DESPRENDIDO","LIBERAL","BENEFACTOR"],color:"green"},{name:"COSAS QUE SE PUEDEN COLECCIONAR",words:["MONEDAS","SELLOS","CROMOS","FIGURAS"],color:"blue"},{name:"PALABRAS CON TRIPTONGO",words:["PARAGUAS","Uruguay","BUEY","CONFIAIS"],color:"purple"}]},
{id:"jason-172",categories:[{name:"PALABRAS CON PREFIJO SEMI",words:["SEMICIRCULO","SEMIFINAL","SEMIDIOS","SEMPITERNO"],color:"yellow"},{name:"SINONIMOS DE HONRADO",words:["INTEGRO","RECTITUD","PROBO","ETICO"],color:"green"},{name:"COSAS QUE SE PUEDEN CONSTRUIR",words:["CASA","PUENTE","EDIFICIO","CARRETERA"],color:"blue"},{name:"PALABRAS CON SUFIJO URIA",words:["DICTADURIA","BURGUESIA","ALCALDIA","ABOGACIA"],color:"purple"}]},
{id:"jason-173",categories:[{name:"PALABRAS CON SUFIJO TORIO",words:["LABORATORIO","DORMITORIO","OBSERVATORIO","CREMATORIO"],color:"yellow"},{name:"SINONIMOS DE PACIENTE",words:["TOLERANTE","RESIGNADO","CALMADO","SERENO"],color:"green"},{name:"COSAS QUE SE PUEDEN VESTIR",words:["ROPA","PRENDA","TRAJE","UNIFORME"],color:"blue"},{name:"PALABRAS CON 4 VOCALES DISTINTAS",words:["MURCIELAGO","AEROPUERTO","ARQUITECTO","AURICULAR"],color:"purple"}]},
{id:"jason-174",categories:[{name:"PALABRAS CON PREFIJO EXTRA",words:["EXTRATERRESTRE","EXTRAORDINARIO","EXTRALARGO","EXTRACTO"],color:"yellow"},{name:"SINONIMOS DE CURIOSO",words:["INQUISITIVO","INDAGADOR","PREGUNTON","AVERIGUADOR"],color:"green"},{name:"COSAS QUE SE PUEDEN COMPARTIR",words:["COMIDA","SECRETO","MOMENTO","ALEGRIA"],color:"blue"},{name:"PALABRAS CON 5 VOCALES",words:["MURCIELAGO","AEROPUERTO","ARQUITECTO","AURICULAR"],color:"purple"}]},
{id:"jason-175",categories:[{name:"PALABRAS CON SUFIJO TUD",words:["AMISTAD","BONDAD","MALDAD","HERMANDAD"],color:"yellow"},{name:"SINONIMOS DE TONTOS",words:["NEJOD","BOBO","INSENSATO","ESTUPIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN LAVAR",words:["ROPA","PLATOS","COCHE","MANOS"],color:"blue"},{name:"PALABRAS CON 3 CONSONANTES SEGUIDAS",words:["ESTRELLA","TRANSPORTE","INSTRUMENTO","CONSTRUIR"],color:"purple"}]},
{id:"jason-176",categories:[{name:"PALABRAS CON PREFIJO VICE",words:["VICEPRESIDENTE","VICERRECTOR","VICEALMIRANTE","VICEPREMIER"],color:"yellow"},{name:"SINONIMOS DE TIMIDO",words:["RESERVADO","INTROVERTIDO","MIRADO","VERGONZOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN PERDER",words:["LLAVES","TIEMPO","OPORTUNIDAD","EQUIPAJE"],color:"blue"},{name:"PALABRAS CON GUE QUE SUENAN A GE",words:["GUERRA","GUITARRA","GUION","GUISANTE"],color:"purple"}]},
{id:"jason-177",categories:[{name:"PALABRAS CON SUFIJO LOGIA",words:["BIOLOGIA","GEOLOGIA","PSICOLOGIA","ANTROPOLOGIA"],color:"yellow"},{name:"SINONIMOS DE TREMENDO",words:["ESPANTOSO","HORRIBLE","ATROZ","IMPONENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN APAGAR",words:["LUZ","FUEGO","RADIO","TELEVISION"],color:"blue"},{name:"PALABRAS CON 3 R",words:["CORRE","TERRENO","CARRO","BARRER"],color:"purple"}]},
{id:"jason-178",categories:[{name:"PALABRAS CON PREFIJO SUB",words:["SUBTERRANEO","SUBMARINO","SUBURBANO","SUBTITULO"],color:"yellow"},{name:"SINONIMOS DE AMENO",words:["AGRADABLE","PLACENTERO","GRATO","DELICIOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN CERRAR",words:["PUERTA","VENTANA","CAJA","BOTELLA"],color:"blue"},{name:"PALABRAS CON 3 VOCALES IGUALES",words:["AURORA","CHILE","INDIVIDUO","PARAGUAS"],color:"purple"}]},
{id:"jason-179",categories:[{name:"PALABRAS CON SUFIJO CION",words:["NAVEGACION","COMUNICACION","INVESTIGACION","TRADUCCION"],color:"yellow"},{name:"SINONIMOS DE ELEGANTE",words:["SOFISTICADO","DISTINGUIDO","REFINADO","SEÑORIAL"],color:"green"},{name:"COSAS QUE SE PUEDEN TRANSPORTAR",words:["CARGA","MERCANCIA","EQUIPAJE","PAQUETE"],color:"blue"},{name:"PALABRAS CON 6 SILABAS",words:["ESTERNOCLEIDO","CONSTITUCIONAL","INTERNACIONAL","ANTICONSTITUCIONAL"],color:"purple"}]},
{id:"jason-180",categories:[{name:"PALABRAS CON PREFIJO BI",words:["BILINGUE","BICOLOR","BIPOLAR","BIDIRECCIONAL"],color:"yellow"},{name:"SINONIMOS DE ASUSTADO",words:["ATERRIZADO","ATEMORIZADO","ESPANTADO","HORRORIZADO"],color:"green"},{name:"COSAS QUE SE PUEDEN CARGAR",words:["BATERIA","TELEFONO","ORDENADOR","TABLE"],color:"blue"},{name:"PALABRAS CON SUFIJO FOBIA",words:["CLAUSTROFOBIA","AGORAFOBIA","ARACNOFOBIA","ACROFOBIA"],color:"purple"}]},
{id:"jason-181",categories:[{name:"PALABRAS CON SUFIJO CIDA",words:["HOMICIDA","INSECTICIDA","SUICIDA","GENOCIDA"],color:"yellow"},{name:"SINONIMOS DE ORGULLOSO",words:["SOBERBIO","ALTIVO","VANIDOSO","HINCHADO"],color:"green"},{name:"COSAS QUE SE PUEDEN PEDIR",words:["AYUDA","PERMISO","OPINION","CONSEJO"],color:"blue"},{name:"PALABRAS CON LETRA DOBLE",words:["BELLEZA","CARRO","ARROZ","PERRO"],color:"purple"}]},
{id:"jason-182",categories:[{name:"PALABRAS CON PREFIJO PRE",words:["PREHISTORIA","PREVIO","PREDECIR","PREPARAR"],color:"yellow"},{name:"SINONIMOS DE TRANQUILO",words:["SERENO","APACIBLE","PLACIDO","SOSEGADO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENSEÑAR",words:["CLASE","LECCION","CURSO","TALLER"],color:"blue"},{name:"PALABRAS CON SUFIJO URA",words:["ALTURA","LECTURA","ESCRITURA","MORDEDURA"],color:"purple"}]},
{id:"jason-183",categories:[{name:"PALABRAS CON SUFIJO DERO",words:["JARDINERO","PANADERO","CARPINTERO","CARNICERO"],color:"yellow"},{name:"SINONIMOS DE HABIL",words:["DESTRO","CAPAZ","COMPETENTE","EFICAZ"],color:"green"},{name:"COSAS QUE SE PUEDEN HEREDAR",words:["FORTUNA","GENES","ENFERMEDAD","PROPIEDAD"],color:"blue"},{name:"PALABRAS CON SUFIJO AZGO",words:["HALLAZGO","APRENDIZAJE","PASAJE","ROPAJE"],color:"purple"}]},
{id:"jason-184",categories:[{name:"PALABRAS CON PREFIJO INTER",words:["INTERNACIONAL","INTERACTIVO","INTERMEDIO","INTERRUPTOR"],color:"yellow"},{name:"SINONIMOS DE SOSPECHOSO",words:["DUDOSO","INCERTO","AMBIGUO","EQUIVOCO"],color:"green"},{name:"COSAS QUE SE PUEDEN PLANIFICAR",words:["VIAJE","PROYECTO","EVENTO","REUNION"],color:"blue"},{name:"PALABRAS CON SUFIJO FICO",words:["CIENTIFICO","ARTISTICO","ACADEMICO","ECONOMICO"],color:"purple"}]},
{id:"jason-185",categories:[{name:"PALABRAS CON SUFIJO MENTE",words:["RAPIDAMENTE","LENTAMENTE","SUAVEMENTE","FUERTEMENTE"],color:"yellow"},{name:"SINONIMOS DE INESPERADO",words:["SORPRENDENTE","IMPREVISTO","REPENTINO","SUBITO"],color:"green"},{name:"COSAS QUE SE PUEDEN RECORDAR",words:["MOMENTO","RECUERDO","ANECDOTA","MEMORIA"],color:"blue"},{name:"PALABRAS CON 7 SILABAS",words:["ESTERNOCLEIDOMASTOIDEO","CONSTITUCIONALMENTE","INTERNACIONALMENTE","ANTICONSTITUCIONALMENTE"],color:"purple"}]},
{id:"jason-186",categories:[{name:"PALABRAS CON PREFIJO SUPER",words:["SUPERMERCADO","SUPERFICIE","SUPERHUMANO","SUPERPOTENCIA"],color:"yellow"},{name:"SINONIMOS DE ABURRIDO",words:["MONOTONO","SOSO","INSIPIDO","LANGUIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN OLVIDAR",words:["NOMBRE","CITA","DIRECCION","NUMERO"],color:"blue"},{name:"PALABRAS CON 4 SILABAS",words:["ARBOLITO","CASITA","PERRITO","GATITO"],color:"purple"}]},
{id:"jason-187",categories:[{name:"PALABRAS CON SUFIJO METRO",words:["TERMOMETRO","VELOCIMETRO","ALTIMETRO","BAROMETRO"],color:"yellow"},{name:"SINONIMOS DE EXTRAÑO",words:["RARO","INSOLITO","POCO COMUN","ANOMALO"],color:"green"},{name:"COSAS QUE SE PUEDEN CONGELAR",words:["AGUA","COMIDA","HIELO","NIEVE"],color:"blue"},{name:"PALABRAS CON SUFIJO TECNIA",words:["PIROTECNIA","ELECTROTECNIA","MECANOTECNIA","BIBLIOTECNIA"],color:"purple"}]},
{id:"jason-188",categories:[{name:"PALABRAS CON PREFIJO DES",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"yellow"},{name:"SINONIMOS DE FRIO",words:["HELADO","GLACIAL","GELIDO","POLAR"],color:"green"},{name:"COSAS QUE SE PUEDEN RECICLAR",words:["PAPEL","PLASTICO","VIDRIO","ALUMINIO"],color:"blue"},{name:"PALABRAS CON SUFIJO GRAFO",words:["GEOGRAFO","BIOGRAFO","FOTOGRAFO","CALIGRAFO"],color:"purple"}]},
{id:"jason-189",categories:[{name:"PALABRAS CON SUFIJO SCOPO",words:["MICROSCOPIO","TELESCOPIO","ESTETOSCOPIO","PERISCOPIO"],color:"yellow"},{name:"SINONIMOS DE CALIENTE",words:["ARDOROSO","ABRASADOR","TROPICAL","SOFOCANTE"],color:"green"},{name:"COSAS QUE SE PUEDEN INVENTAR",words:["HISTORIA","EXCUSA","INVENTO","TEORIA"],color:"blue"},{name:"PALABRAS CON SUFIJO MANCIA",words:["ADIVINANZA","CLARIVIDENCIA","VIDENCIA","PRESCIENCIA"],color:"purple"}]},
{id:"jason-190",categories:[{name:"PALABRAS CON PREFIJO RE",words:["REHACER","RELEER","REPENSAR","REVISAR"],color:"yellow"},{name:"SINONIMOS DE DEBIL",words:["FRAGIL","DELICADO","FLOJO","LANGUIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN MEJORAR",words:["HABILIDAD","RELACION","SALUD","CONOCIMIENTO"],color:"blue"},{name:"PALABRAS CON 5 SILABAS",words:["ESTERNOCLEIDO","CONSTITUCIONAL","INTERNACIONAL","ANTICONSTITUCIONAL"],color:"purple"}]},
{id:"jason-191",categories:[{name:"PALABRAS CON SUFIJO ARIO",words:["BIBLIOTECARIO","SECRETARIO","COMISARIO","DICTADOR"],color:"yellow"},{name:"SINONIMOS DE CLARO",words:["TRANSPARENTE","NITIDO","LUMPIO","CRISTALINO"],color:"green"},{name:"COSAS QUE SE PUEDEN PROGRAMAR",words:["CODIGO","SOFTWARE","APLICACION","SISTEMA"],color:"blue"},{name:"VERBOS TERMINADOS EN IR",words:["REIR","FREIR","VIVIR","SUBIR"],color:"purple"}]},
{id:"jason-192",categories:[{name:"PALABRAS CON PREFIJO TRANS",words:["TRANSPORTE","TRANSFORMAR","TRANSFERIR","TRANSPARENTE"],color:"yellow"},{name:"SINONIMOS DE DIFICIL",words:["COMPLICADO","ARDUO","LABORIOSO","EXIGENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN IMAGINAR",words:["SUEÑO","FANTASIA","ILUSION","VISION"],color:"blue"},{name:"PALABRAS CON SUFIJO LOGO",words:["BIOLOGO","GEOLOGO","PSICOLOGO","ANTROPOLOGO"],color:"purple"}]},
{id:"jason-193",categories:[{name:"PALABRAS CON SUFIJO VORO",words:["CARNIVORO","HERBIVORO","OMNIVORO","INSECTIVORO"],color:"yellow"},{name:"SINONIMOS DE SUAVE",words:["LISO","TERCIOPELO","SEDOSO","MULLIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN SONAR",words:["ALARMA","TIMBRE","CAMPANA","SILBATO"],color:"blue"},{name:"PALABRAS CON 8 SILABAS",words:["ESTERNOCLEIDOMASTOIDEO","CONSTITUCIONALMENTE","INTERNACIONALMENTE","ANTICONSTITUCIONALMENTE"],color:"purple"}]},
{id:"jason-194",categories:[{name:"PALABRAS CON PREFIJO MONO",words:["MONOTONO","MONOPOLIO","MONOCULO","MONOGAMIA"],color:"yellow"},{name:"SINONIMOS DE OCUPADO",words:["ATAREADO","REQUETE","AFLUENTE","TRABAJADOR"],color:"green"},{name:"COSAS QUE SE PUEDEN LIMPIAR",words:["CASA","COCHE","ROPA","VENTANA"],color:"blue"},{name:"PALABRAS CON 9 SILABAS",words:["ESTERNOCLEIDOMASTOIDEO","CONSTITUCIONALMENTE","INTERNACIONALMENTE","ANTICONSTITUCIONALMENTE"],color:"purple"}]},
{id:"jason-195",categories:[{name:"PALABRAS CON SUFIJO FERO",words:["CARNIFERO","HERBIFERO","ACUIFERO","FRUCTIFERO"],color:"yellow"},{name:"SINONIMOS DE PEREZOSO",words:["HOLGAZAN","VAGO","INDOLENTE","FLOJO"],color:"green"},{name:"COSAS QUE SE PUEDEN PROBAR",words:["COMIDA","ROPA","PERFUME","MEDICINA"],color:"blue"},{name:"PALABRAS CON SUFIJO ERIA",words:["LLOVERIA","PEDRERIA","POLVERIA","HUMERIA"],color:"purple"}]},
{id:"jason-196",categories:[{name:"PALABRAS CON PREFIJO POLI",words:["POLIDEPORTIVO","POLICROMO","POLIFONICO","POLIGONO"],color:"yellow"},{name:"SINONIMOS DE SINCERO",words:["HONESTO","FRANCO","NOBLE","VERAZ"],color:"green"},{name:"COSAS QUE SE PUEDEN FRENAR",words:["COCHE","BICICLETA","TREN","IMBULSO"],color:"blue"},{name:"PALABRAS CON SUFIJO OTICO",words:["ACUSTICO","AERONAUTICO","ARTISTICO","CIENTIFICO"],color:"purple"}]},
{id:"jason-197",categories:[{name:"PALABRAS CON SUFIJO MICO",words:["ACADEMICO","ECONOMICO","FANATICO","POLEMICO"],color:"yellow"},{name:"SINONIMOS DE FEO",words:["HORRIBLE","REPUGNANTE","ESPANTOSO","ABOMINABLE"],color:"green"},{name:"COSAS QUE SE PUEDEN SECAR",words:["ROPA","PELO","PLANTAS","PINTURA"],color:"blue"},{name:"ADJETIVOS",words:["CAOTICO","HEROICO","RAPIDO","LENTO"],color:"purple"}]},
{id:"jason-198",categories:[{name:"PALABRAS CON PREFIJO ANFI",words:["ANFITEATRO","ANFIBIO","ANFIBOLOGIA","ANFIMACRO"],color:"yellow"},{name:"SINONIMOS DE ESTRICTO",words:["RIGIDO","SEVERO","EXIGENTE","RIGUROSO"],color:"green"},{name:"COSAS QUE SE PUEDEN OCULTAR",words:["SECRETO","TESORO","SENTIMIENTO","EVIDENCIA"],color:"blue"},{name:"PALABRAS CON SUFIJO ACEO",words:["HERBACEO","CARNACEO","FARINACEO","CRUSTACEO"],color:"purple"}]},
{id:"jason-199",categories:[{name:"PALABRAS CON SUFIJO BLE",words:["AMABLE","POSIBLE","VISIBLE","TERRIBLE"],color:"yellow"},{name:"SINONIMOS DE NUEVO",words:["RECIENTE","F RESCO","NOVEDOSO","INEDITO"],color:"green"},{name:"COSAS QUE SE PUEDEN CONECTAR",words:["CABLE","DISPOSITIVO","RED","CIRCUITO"],color:"blue"},{name:"PALABRAS CON DOBLE R",words:["CARRO","ARROZ","PERRO","TIERRA"],color:"purple"}]},
{id:"jason-200",categories:[{name:"PALABRAS CON PREFIJO HEMO",words:["HEMOGLOBINA","HEMORRAGIA","HEMATOMA","HEMODIALISIS"],color:"yellow"},{name:"SINONIMOS DE MAGNIFICO",words:["ESPLENDIDO","EXCELENTE","SOBERBIO","SUPERBO"],color:"green"},{name:"COSAS QUE SE PUEDEN PULIR",words:["MADERA","METAL","PIEDRA","VIDRIO"],color:"blue"},{name:"PALABRAS CON SUFIJO PARDO",words:["VERDEPARDO","ROJIPARDO","GRISPARDO","NEGROPARDO"],color:"purple"}]},
{id:"jason-201",categories:[{name:"PALABRAS CON PREFIJO OMNI",words:["OMNIPRESENTE","OMNIPOTENTE","OMNISCIENTE","OMNIVORO"],color:"yellow"},{name:"SINONIMOS DE RAPIDO",words:["VELOZ","AGIL","RAPAZ","FUGAS"],color:"green"},{name:"COSAS QUE SE PUEDEN DOBLAR",words:["PAPEL","TELA","MANTEL","SERVILLETA"],color:"blue"},{name:"PALABRAS CON 3 VOCALES IGUALES",words:["AURORA","CHILE","INDIVIDUO","PARAGUAS"],color:"purple"}]},
{id:"jason-202",categories:[{name:"PALABRAS CON SUFIJO URA",words:["ESCRITURA","LECTURA","MORDEDURA","ALTURA"],color:"yellow"},{name:"ANTONIMOS DE CLARO",words:["OSCURO","TURBIO","AMBIGUO","CONFUSO"],color:"green"},{name:"COSAS QUE SE PUEDEN HILAR",words:["ALGODON","LANA","SEDA","LINO"],color:"blue"},{name:"PALABRAS CON TRIPLE LETRA",words:["BELLEZA","CARROCERIA","ARROZ","PERRO"],color:"purple"}]},
{id:"jason-203",categories:[{name:"PALABRAS CON PREFIJO HIPER",words:["HIPERMERCADO","HIPERTENSION","HIPERSENSIBLE","HIPERACTIVO"],color:"yellow"},{name:"SINONIMOS DE TRISTE",words:["MELANCOLICO","APESADUMBRADO","DECAIDO","LANGUIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN TEJER",words:["BUFANDA","SUETER","CALCETINES","MANTA"],color:"blue"},{name:"PALABRAS DE DOS LETRAS",words:["DE","TE","SE","MI"],color:"purple"}]},
{id:"jason-204",categories:[{name:"PALABRAS CON SUFIJO OSO",words:["AMOROSO","PELIGROSO","MARAVILLOSO","CUIDADOSO"],color:"yellow"},{name:"SINONIMOS DE FEO",words:["HORRIBLE","REPUGNANTE","ABORRECIBLE","DEFORME"],color:"green"},{name:"COSAS QUE SE PUEDEN TALLAR",words:["MADERA","PIEDRA","MARFIL","HUESO"],color:"blue"},{name:"PALABRAS CON 5 CONSONANTES",words:["TRANSPORTE","INSTRUMENTO","CONSTANTE","MONSTRUO"],color:"purple"}]},
{id:"jason-205",categories:[{name:"PALABRAS CON PREFIJO BI",words:["BILINGUE","BICOLOR","BIPOLAR","BIDIRECCIONAL"],color:"yellow"},{name:"SINONIMOS DE ABUNDANTE",words:["PROFUSO","COPOSO","NUMEROSO","PLETORICO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCONTRAR EN EL MAR",words:["ALGA","CORAL","PERLA","CONCHA"],color:"blue"},{name:"PALABRAS QUE CAMBIAN DE GENERO",words:["ARTISTA","PERIODISTA","DEPORTISTA","PIANISTA"],color:"purple"}]},
{id:"jason-206",categories:[{name:"PALABRAS CON SUFIJO CIDA",words:["HOMICIDA","INSECTICIDA","SUICIDA","GENOCIDA"],color:"yellow"},{name:"SINONIMOS DE ASUSTADO",words:["ATERROZADO","ESPANTADO","HORRORIZADO","ATEMORIZADO"],color:"green"},{name:"COSAS QUE SE PUEDEN PERFORAR",words:["MADERA","METAL","PARED","TELA"],color:"blue"},{name:"PALABRAS DE SIETE LETRAS",words:["CABALLO","PLANETA","BOTELLA","GAVIOTA"],color:"purple"}]},
{id:"jason-207",categories:[{name:"PALABRAS CON PREFIJO MICRO",words:["MICROSCOPIO","MICROONDAS","MICROCHIP","MICROFONO"],color:"yellow"},{name:"SINONIMOS DE VALIENTE",words:["CORAJUDO","BRAVO","AUDAS","INTRAPIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCONTRAR EN EL CIELO",words:["NUBE","ESTRELLA","LUNA","COMETA"],color:"blue"},{name:"PALABRAS CON PREFIJO Y SUFIJO",words:["DESAMOR","INCAPAZ","IRREAL","ANTIHEROE"],color:"purple"}]},
{id:"jason-208",categories:[{name:"PALABRAS CON SUFIJO DAD",words:["LIBERTAD","BONDAD","MALDAD","HERMANDAD"],color:"yellow"},{name:"SINONIMOS DE INTELIGENTE",words:["LISTO","SABIO","ERUDITO","DOCTO"],color:"green"},{name:"COSAS QUE SE PUEDEN CORTAR",words:["PAPEL","TELA","MADERA","VERDURA"],color:"blue"},{name:"PALABRAS CON 4 VOCALES DISTINTAS",words:["MURCIELAGO","AEROPUERTO","ARQUITECTO","AURICULAR"],color:"purple"}]},
{id:"jason-209",categories:[{name:"PALABRAS CON PREFIJO EXTRA",words:["EXTRATERRESTRE","EXTRAORDINARIO","EXTRALARGO","EXTRACTO"],color:"yellow"},{name:"SINONIMOS DE PEREZOSO",words:["HOLGAZAN","VAGO","INDOLENTE","APATICO"],color:"green"},{name:"COSAS QUE SE PUEDEN PLEGAR",words:["SILLA","MESA","CARPA","PARAGUAS"],color:"blue"},{name:"PALABRAS CON LETRA REPETIDA",words:["BELLEZA","CARRETERA","ARROZ","PERRO"],color:"purple"}]},
{id:"jason-210",categories:[{name:"PALABRAS CON SUFIJO AJE",words:["APRENDIZAJE","PASAJE","ROPAJE","LANZAJE"],color:"yellow"},{name:"ANTONIMOS DE RICO",words:["POBRE","MISERO","NECESITADO","INDIGENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN REMAR",words:["BOTE","KAYAK","CANOA","LANCHA"],color:"blue"},{name:"PALABRAS DE OCHO LETRAS",words:["ESTRELLA","SATELITE","MARIPOSA","CUADRADO"],color:"purple"}]},
{id:"jason-211",categories:[{name:"PALABRAS CON PREFIJO CIBER",words:["CIBERESPACIO","CIBERSEGURIDAD","CIBERNETICA","CIBERATAQUE"],color:"yellow"},{name:"SINONIMOS DE DEBIL",words:["FRAGIL","FLOJO","LIVIANO","ENDEMBLE"],color:"green"},{name:"COSAS QUE SE PUEDEN FILTRAR",words:["AGUA","CAFE","ACEITE","AIRE"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN CON H MUDO",words:["HORA","HOMBRE","HOY","HACIA"],color:"purple"}]},
{id:"jason-212",categories:[{name:"PALABRAS CON SUFIJO ISMO",words:["REALISMO","IDEALISMO","OPTIMISMO","PATRIOTISMO"],color:"yellow"},{name:"SINONIMOS DE EXTRAÑO",words:["RARO","INSOLITO","INUSUAL","SINGULAR"],color:"green"},{name:"COSAS QUE SE PUEDEN ENROLLAR",words:["CABLE","MANGA","CINTA","ALFOMBRA"],color:"blue"},{name:"PALABRAS DE SEIS LETRAS",words:["CAMINO","PUERTA","JARDIN","BOSQUE"],color:"purple"}]},
{id:"jason-213",categories:[{name:"PALABRAS CON PREFIJO FOTO",words:["FOTOGRAFIA","FOTOSINTESIS","FOTOCOPIADORA","FOTOGENICO"],color:"yellow"},{name:"SINONIMOS DE ENOJADO",words:["IRRITADO","MOLESTO","COLERICO","FURIOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN MEDIR",words:["TIEMPO","PESO","ALTURA","TEMPERATURA"],color:"blue"},{name:"PALABRAS CON 8 LETRAS",words:["CIRCULAR","CUADRADO","HEXAGONO","OCTOGONO"],color:"purple"}]},
{id:"jason-214",categories:[{name:"PALABRAS CON SUFIJO LOGIA",words:["BIOLOGIA","GEOLOGIA","PSICOLOGIA","ANTROPOLOGIA"],color:"yellow"},{name:"SINONIMOS DE SABROSO",words:["DELICIOSO","EXQUISITO","SUCULENTO","APETITOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN COMPRIMIR",words:["ESPONJA","ALGODON","AIRE","ROPA"],color:"blue"},{name:"PALABRAS DE DIEZ LETRAS",words:["BIBLIOTECA","CAMPANARIO","ZANAHORIAS","MANDARINAS"],color:"purple"}]},
{id:"jason-215",categories:[{name:"PALABRAS CON PREFIJO VICE",words:["VICEPRESIDENTE","VICERRECTOR","VICEALMIRANTE","VICEPREMIER"],color:"yellow"},{name:"SINONIMOS DE PEQUEÑO",words:["MINUSCULO","ENANO","REDUCIDO","EXIGUO"],color:"green"},{name:"COSAS QUE SE PUEDEN COLGAR",words:["CUADRO","ROPA","LAMPARA","CORTINA"],color:"blue"},{name:"PALABRAS CON 4 SILABAS",words:["ARBOLITO","CASITA","PERRITO","GATITO"],color:"purple"}]},
{id:"jason-216",categories:[{name:"PALABRAS CON SUFIJO ANTE",words:["ESTUDIANTE","CANTANTE","VIAJANTE","TRABAJANTE"],color:"yellow"},{name:"SINONIMOS DE FUERTE",words:["ROBUSTO","FORTACHON","VIGOROSO","POTENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCENDER",words:["FUEGO","LUZ","MOTOR","VELA"],color:"blue"},{name:"PALABRAS CON SUFIJO EZA",words:["BELLEZA","RIQUEZA","POBREZA","ALTIVEZ"],color:"purple"}]},
{id:"jason-217",categories:[{name:"PALABRAS CON PREFIJO POLI",words:["POLIDEPORTIVO","POLICROMO","POLIFONICO","POLIGONO"],color:"yellow"},{name:"SINONIMOS DE AMABLE",words:["CORTES","GENTIL","AFABLE","DULCE"],color:"green"},{name:"COSAS QUE SE PUEDEN BEBER FRIAS",words:["AGUA","CERVEZA","REFRESCO","LECHE"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN CON CH",words:["CHOCOLATE","CHIMENEA","CHORIZO","CHAMPIÑON"],color:"purple"}]},
{id:"jason-218",categories:[{name:"PALABRAS CON SUFIJO AZO",words:["PORTAZO","GOLPAZO","MANOTAZO","PISOTON"],color:"yellow"},{name:"SINONIMOS DE BRILLANTE",words:["RADIANTE","RESPLANDECIENTE","LUMINOSO","FULGURANTE"],color:"green"},{name:"COSAS QUE SE PUEDEN APRETAR",words:["BOTON","GATILLO","INTERRUPTOR","PALANCA"],color:"blue"},{name:"PALABRAS CON 3 LETRAS",words:["SOL","MAR","LUZ","PAN"],color:"purple"}]},
{id:"jason-219",categories:[{name:"PALABRAS CON PREFIJO ANFI",words:["ANFITEATRO","ANFIBIO","ANFIBOLOGIA","ANFIMACRO"],color:"yellow"},{name:"SINONIMOS DE SABIO",words:["ERUDITO","DOCTO","ILUSTRADO","CULTO"],color:"green"},{name:"COSAS QUE SE PUEDEN ELEVAR",words:["GLOBO","COMETA","AVION","COHETE"],color:"blue"},{name:"PALABRAS CON PREFIJO RE",words:["REHACER","RELEER","REPENSAR","REVISAR"],color:"purple"}]},
{id:"jason-220",categories:[{name:"PALABRAS CON SUFIJO TECNIA",words:["PIROTECNIA","ELECTROTECNIA","MECANOTECNIA","BIBLIOTECNIA"],color:"yellow"},{name:"SINONIMOS DE OSCURO",words:["TENEBROSO","SOMBRIO","LOBREGO","NEGRO"],color:"green"},{name:"COSAS QUE SE PUEDEN ABRIR",words:["PUERTA","VENTANA","BOTELLA","CAJA"],color:"blue"},{name:"PALABRAS CON SUFIJO PARDO",words:["VERDEPARDO","ROJIPARDO","GRISPARDO","NEGROPARDO"],color:"purple"}]},
{id:"jason-221",categories:[{name:"PALABRAS CON PREFIJO AUTO",words:["AUTOMOVIL","AUTOPISTA","AUTOMATICO","AUTONOMO"],color:"yellow"},{name:"SINONIMOS DE DIFICIL",words:["COMPLICADO","COMPLEJO","ENREVESADO","INTRINCADO"],color:"green"},{name:"COSAS QUE SE PUEDEN PELAR",words:["NARANJA","PLATANO","PAPA","MANZANA"],color:"blue"},{name:"PALABRAS CON SUFIJO FICO",words:["CIENTIFICO","ARTISTICO","ACADEMICO","ECONOMICO"],color:"purple"}]},
{id:"jason-222",categories:[{name:"PALABRAS CON SUFIJO VORO",words:["CARNIVORO","HERBIVORO","OMNIVORO","INSECTIVORO"],color:"yellow"},{name:"SINONIMOS DE ANTIGUO",words:["VIEJO","ANCIANO","ARCAICO","VETERANO"],color:"green"},{name:"COSAS QUE SE PUEDEN TRENZAR",words:["CABELLO","CUERDA","CESTA","TRENZA"],color:"blue"},{name:"PALABRAS CON PREFIJO EN",words:["ENMARCAR","ENVOLVER","ENFRIAR","ENGAÑAR"],color:"purple"}]},
{id:"jason-223",categories:[{name:"PALABRAS CON PREFIJO TELE",words:["TELEFONO","TELEVISION","TELESCOPIO","TELEGRAMA"],color:"yellow"},{name:"SINONIMOS DE ENOJADO",words:["FURIOSO","IRRITADO","MOLESTO","COLERICO"],color:"green"},{name:"COSAS QUE SE PUEDEN RELLENAR",words:["FORMULARIO","COLCHON","ALMOHADA","MASA"],color:"blue"},{name:"PALABRAS CON 2 SILABAS",words:["CASA","PERRO","GATO","SOL"],color:"purple"}]},
{id:"jason-224",categories:[{name:"PALABRAS CON SUFIJO OIDE",words:["HUMANOIDE","ANDROIDE","ESFERICOIDE","METALOIDE"],color:"yellow"},{name:"SINONIMOS DE FELIZ",words:["ALEGRE","CONTENTO","JUBILOSO","GOZOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN ROMPER",words:["PLATO","VASO","JARRON","VENTANA"],color:"blue"},{name:"PALABRAS CON 5 SILABAS",words:["ESTERNOCLEIDO","CONSTITUCIONAL","INTERNACIONAL","ANTICONSTITUCIONAL"],color:"purple"}]},
{id:"jason-225",categories:[{name:"PALABRAS CON PREFIJO HIDRO",words:["HIDROELECTRICA","HIDRAULICO","HIDROGENO","HIDROAVION"],color:"yellow"},{name:"SINONIMOS DE FEO",words:["HORRIBLE","REPUGNANTE","DEFORME","ABOMINABLE"],color:"green"},{name:"COSAS QUE SE PUEDEN CALENTAR",words:["AGUA","COMIDA","HORNO","PLANCHA"],color:"blue"},{name:"PALABRAS CON SUFIJO FERO",words:["CARNIFERO","HERBIFERO","ACUIFERO","FRUCTIFERO"],color:"purple"}]},
{id:"jason-226",categories:[{name:"PALABRAS CON SUFIJO SCOPO",words:["MICROSCOPIO","TELESCOPIO","ESTETOSCOPIO","PERISCOPIO"],color:"yellow"},{name:"SINONIMOS DE GRANDE",words:["ENORME","GIGANTESCO","COLOSAL","MONSTRUOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCONTRAR EN UNA PLAYA",words:["ARENA","OLA","SOL","CONCHA"],color:"blue"},{name:"PALABRAS CON PREFIJO AB",words:["ABNEGAR","ABSTENER","ABRIR","ABSOLVER"],color:"purple"}]},
{id:"jason-227",categories:[{name:"PALABRAS CON PREFIJO GEO",words:["GEOGRAFIA","GEOLOGIA","GEOMETRIA","GEOPOLITICA"],color:"yellow"},{name:"SINONIMOS DE HERMOSO",words:["BELLO","PRECIOSO","LIMPIO","BONITO"],color:"green"},{name:"COSAS QUE SE PUEDEN HACER CON AGUA",words:["NADAR","REGA","LAVAR","COCINAR"],color:"blue"},{name:"PALABRAS CON SUFIJO METRO",words:["TERMOMETRO","VELOCIMETRO","ALTIMETRO","BAROMETRO"],color:"purple"}]},
{id:"jason-228",categories:[{name:"PALABRAS CON SUFIJO GRAFO",words:["GEOGRAFO","BIOGRAFO","FOTOGRAFO","CALIGRAFO"],color:"yellow"},{name:"SINONIMOS DE TRANQUILO",words:["SERENO","CALMADO","PACIFICO","PLACIDO"],color:"green"},{name:"COSAS QUE SE PUEDEN PINTAR",words:["LIENZO","PARED","MADERA","TELA"],color:"blue"},{name:"PALABRAS CON PREFIJO AD",words:["ADHERIR","ADJUNTAR","ADMITIR","ADOPTAR"],color:"purple"}]},
{id:"jason-229",categories:[{name:"PALABRAS CON PREFIJO CARDIO",words:["CARDIOLOGIA","CARDIOVASCULAR","CARDIOPATIA","CARDIACO"],color:"yellow"},{name:"SINONIMOS DE RARO",words:["EXTRAÑO","INSOLITO","INUSUAL","SINGULAR"],color:"green"},{name:"COSAS QUE SE PUEDEN SOPLAR",words:["VELA","GLOBO","PITO","FLECHA"],color:"blue"},{name:"PALABRAS CON SUFIJO MICO",words:["ACADEMICO","ECONOMICO","FANATICO","POLEMICO"],color:"purple"}]},
{id:"jason-230",categories:[{name:"PALABRAS CON SUFIJO MANCIA",words:["ADIVINANZA","CLARIVIDENCIA","VIDENCIA","PRESCIENCIA"],color:"yellow"},{name:"SINONIMOS DE POBRE",words:["MISERO","NECESITADO","INDIGENTE","MENESTEROSO"],color:"green"},{name:"COSAS QUE SE PUEDEN ASAR",words:["CARNE","VERDURA","PAN","PAPA"],color:"blue"},{name:"PALABRAS DE CUATRO LETRAS",words:["CASA","MESA","GATO","LUNA"],color:"purple"}]},
{id:"jason-231",categories:[{name:"PALABRAS CON PREFIJO CRONO",words:["CRONOLOGIA","CRONOMETRO","CRONICA","CRONOGRAMA"],color:"yellow"},{name:"SINONIMOS DE CLARO",words:["LUCIDO","EVIDENTE","MANIFIESTO","PATENTE"],color:"green"},{name:"COSAS QUE SE PUEDEN PLANTAR EN MACETA",words:["FLOR","HIERBA","CACTUS","BONSAL"],color:"blue"},{name:"PALABRAS CON SUFIJO OTICO",words:["ACUSTICO","AERONAUTICO","ARTISTICO","CIENTIFICO"],color:"purple"}]},
{id:"jason-232",categories:[{name:"PALABRAS CON SUFIJO LOGO",words:["BIOLOGO","GEOLOGO","PSICOLOGO","ANTROPOLOGO"],color:"yellow"},{name:"SINONIMOS DE LIQUIDO",words:["FLUIDO","ACUOSO","LECHE","AGUA"],color:"green"},{name:"COSAS QUE SE PUEDEN TOSTAR",words:["PAN","CAFE","MAIZ","ALMENDRA"],color:"blue"},{name:"PALABRAS CON PREFIJO CON",words:["CONSTRUIR","CONECTAR","CONVIVIR","CONCORDAR"],color:"purple"}]},
{id:"jason-233",categories:[{name:"PALABRAS CON PREFIJO NEURO",words:["NEUROCIENCIA","NEUROLOGIA","NEUROTRANSMISOR","NEUROPSICOLOGIA"],color:"yellow"},{name:"SINONIMOS DE FRESCO",words:["NUEVO","RECIENTE","NOVEDOSO","INEDITO"],color:"green"},{name:"COSAS QUE SE PUEDEN RASTRILLAR",words:["HOJA","HIERBA","TIERRA","JARDIN"],color:"blue"},{name:"PALABRAS DE DOCE LETRAS",words:["CONSTITUCION","REFRIGERADOR","SUPERMERCADO","ARQUITECTURA"],color:"purple"}]},
{id:"jason-234",categories:[{name:"PALABRAS CON SUFIJO BLE",words:["AMABLE","POSIBLE","VISIBLE","TERRIBLE"],color:"yellow"},{name:"SINONIMOS DE VIEJO",words:["ANCIANO","ARCAICO","VETERANO","ANTIGUO"],color:"green"},{name:"COSAS QUE SE PUEDEN EXPRIMIR",words:["NARANJA","LIMON","TORONJA","LIMA"],color:"blue"},{name:"PALABRAS CON PREFIJO PRO",words:["PROYECTAR","PROPONER","PROSEGUIR","PROVOCAR"],color:"purple"}]},
{id:"jason-235",categories:[{name:"PALABRAS CON PREFIJO AERO",words:["AEROPUERTO","AERONAUTICA","AERODINAMICA","AEROBICO"],color:"yellow"},{name:"SINONIMOS DE MALO",words:["PESIMO","DEFICIENTE","MALIGNO","PERNICIOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN SALTAR",words:["CUERDA","VALLA","CHARCO","RIO"],color:"blue"},{name:"PALABRAS CON 2 VOCALES SEGUIDAS",words:["AIRE","AREA","IDEA","OLEO"],color:"purple"}]},
{id:"jason-236",categories:[{name:"PALABRAS CON SUFIJO DERO",words:["JARDINERO","PANADERO","CARPINTERO","CARNICERO"],color:"yellow"},{name:"SINONIMOS DE PESADO",words:["PESIMO","MOLESTO","FASTIDIOSO","ENFADOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCORDAR",words:["ZAPATO","GUITARRA","RAQUETA","PERSIANA"],color:"blue"},{name:"PALABRAS CON PREFIJO INTRA",words:["INTRANET","INTRAVENOSO","INTRAMUSCULAR","INTRACELULAR"],color:"purple"}]},
{id:"jason-237",categories:[{name:"PALABRAS CON PREFIJO ELECTRO",words:["ELECTRICIDAD","ELECTRONICA","ELECTRODOMESTICO","ELECTROMAGNETICO"],color:"yellow"},{name:"SINONIMOS DE LIMPIO",words:["ASEO","PULCRO","HIGIENICO","INMACULADO"],color:"green"},{name:"COSAS QUE SE PUEDEN FREGAR",words:["PLATO","SUELO","ROPA","SARTEN"],color:"blue"},{name:"PALABRAS CON SUFIJO ARIO",words:["BIBLIOTECARIO","SECRETARIO","COMISARIO","DICTADOR"],color:"purple"}]},
{id:"jason-238",categories:[{name:"PALABRAS CON SUFIJO PEDIA",words:["ENCICLOPEDIA","ORTOPEDIA","PEDIATRIA","LOGPEDIA"],color:"yellow"},{name:"SINONIMOS DE BAJO",words:["PEQUEÑO","REDUCIDO","EXIGUO","MINIMO"],color:"green"},{name:"COSAS QUE SE PUEDEN ATAR",words:["ZAPATO","CORBATA","PAQUETE","CABO"],color:"blue"},{name:"PALABRAS CON PREFIJO MINI",words:["MINIATURA","MINIFALDA","MINIMERCADO","MINIBUS"],color:"purple"}]},
{id:"jason-239",categories:[{name:"PALABRAS CON PREFIJO TERMO",words:["TERMOMETRO","TERMOSTATO","TERMODINAMICA","TERMOELECTRICA"],color:"yellow"},{name:"SINONIMOS DE ESTRICTO",words:["RIGIDO","SEVERO","EXIGENTE","RIGUROSO"],color:"green"},{name:"COSAS QUE SE PUEDEN LIJAR",words:["MADERA","METAL","PARED","PINTURA"],color:"blue"},{name:"PALABRAS CON SUFIJO ERIA",words:["LLOVERIA","PEDRERIA","POLVERIA","HUMERIA"],color:"purple"}]},
{id:"jason-240",categories:[{name:"PALABRAS CON SUFIJO ANZA",words:["CONFIANZA","ESPERANZA","VENGANZA","TARDANZA"],color:"yellow"},{name:"SINONIMOS DE SUAVE",words:["BLANDO","TENUE","LIGERO","DELICADO"],color:"green"},{name:"COSAS QUE SE PUEDEN PULVERIZAR",words:["AGUA","PERFUME","PINTURA","INSECTICIDA"],color:"blue"},{name:"PALABRAS DE ONCE LETRAS",words:["CARPINTEROS","CALCULADORA","ARQUITECTOS","TELEVISORES"],color:"purple"}]},
{id:"jason-241",categories:[{name:"PALABRAS CON PREFIJO RADIO",words:["RADIOGRAFIA","RADIOACTIVO","RADIODIFUSION","RADIOTERAPIA"],color:"yellow"},{name:"SINONIMOS DE GRUESO",words:["ANCHO","GORDO","CORPULENTO","VOLUMINOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN CLONAR",words:["ADN","CELULA","OVERA","ARCHIVO"],color:"blue"},{name:"PALABRAS CON SUFIJO CRA",words:["DEMOCRACIA","TECNOCRACIA","PLUTOCRACIA","AUTOCRACIA"],color:"purple"}]},
{id:"jason-242",categories:[{name:"PALABRAS CON SUFIJO FONO",words:["TELEFONO","SAXOFON","MICROFONO","MEGAFONO"],color:"yellow"},{name:"SINONIMOS DE DELGADO",words:["FINO","ESBELTO","SUTIL","ENJUTO"],color:"green"},{name:"COSAS QUE SE PUEDEN AROMATIZAR",words:["CAFE","TE","VELA","ACEITE"],color:"blue"},{name:"PALABRAS CON PREFIJO SEMI",words:["SEMICIRCULO","SEMIFINAL","SEMIDIOS","SEMIPRESENCIAL"],color:"purple"}]},
{id:"jason-243",categories:[{name:"PALABRAS CON PREFIJO ANA",words:["ANALISIS","ANATOMIA","ANALOGIA","ANACRONISMO"],color:"yellow"},{name:"SINONIMOS DE ENOJADO",words:["IRRITADO","MOLESTO","COLERICO","FURIOSO"],color:"green"},{name:"COSAS QUE SE PUEDEN DECORAR",words:["CASA","PASTEL","ARBOL","REGALO"],color:"blue"},{name:"PALABRAS CON SUFIJO OSO",words:["PELIGROSO","MARAVILLOSO","HERMOSO","CUIDADOSO"],color:"purple"}]},
{id:"jason-244",categories:[{name:"PALABRAS CON SUFIJO TOR",words:["CANTOR","ACTOR","BAILADOR","TRABAJADOR"],color:"yellow"},{name:"SINONIMOS DE NUEVO",words:["RECIENTE","FRESCO","NOVEDOSO","INEDITO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENMARCAR",words:["CUADRO","FOTO","DIPLOMA","ESPEJO"],color:"blue"},{name:"PALABRAS CON 3 VOCALES DISTINTAS",words:["CIELO","FUEGO","PIEDRA","TIERRA"],color:"purple"}]},
{id:"jason-245",categories:[{name:"PALABRAS CON PREFIJO MACRO",words:["MACROECONOMIA","MACROBIOTICA","MACROFOTOGRAFIA","MACROESTRUCTURA"],color:"yellow"},{name:"SINONIMOS DE LENTO",words:["PAUSADO","POSADO","DESPACIO","TARDO"],color:"green"},{name:"COSAS QUE SE PUEDEN COLAR",words:["CAFE","PASTA","ARROZ","AGUA"],color:"blue"},{name:"PALABRAS CON 3 VOCALES IGUALES",words:["AURORA","CHILE","INDIVIDUO","PARAGUAS"],color:"purple"}]},
{id:"jason-246",categories:[{name:"PALABRAS CON SUFIJO ERO",words:["JARDINERO","PANADERO","CARPINTERO","CARNICERO"],color:"yellow"},{name:"SINONIMOS DE ASUSTADO",words:["ATERROZADO","ESPANTADO","HORRORIZADO","ATEMORIZADO"],color:"green"},{name:"COSAS QUE SE PUEDEN ENCONTRAR EN UN BOSQUE",words:["ARBOL","HONGO","RIACHUELO","SENDERO"],color:"blue"},{name:"PALABRAS CON SUFIJO TECNIA",words:["PIROTECNIA","ELECTROTECNIA","MECANOTECNIA","BIBLIOTECNIA"],color:"purple"}]},
{id:"jason-247",categories:[{name:"PALABRAS CON PREFIJO MEGA",words:["MEGAESTRUCTURA","MEGALITICO","MEGAFONO","MEGAPROYECTO"],color:"yellow"},{name:"SINONIMOS DE MAGNIFICO",words:["ESPLENDIDO","EXCELENTE","SOBERBIO","SUPERBO"],color:"green"},{name:"COSAS QUE SE PUEDEN GRABAR",words:["VIDEO","AUDIO","METAL","PIEDRA"],color:"blue"},{name:"PALABRAS CON SUFIJO LOGIA",words:["BIOLOGIA","GEOLOGIA","PSICOLOGIA","ANTROPOLOGIA"],color:"purple"}]},
{id:"jason-248",categories:[{name:"PALABRAS CON SUFIJO CIDA",words:["HOMICIDA","INSECTICIDA","SUICIDA","GENOCIDA"],color:"yellow"},{name:"SINONIMOS DE BUENO",words:["EXCELENTE","OPTIMO","MAGNIFICO","SOBERBIO"],color:"green"},{name:"COSAS QUE SE PUEDEN CONGELAR",words:["AGUA","COMIDA","CARNE","VERDURA"],color:"blue"},{name:"PALABRAS CON 8 LETRAS",words:["ESTRELLA","SATELITE","MARIPOSA","ELEFANTE"],color:"purple"}]},
{id:"jason-249",categories:[{name:"PALABRAS CON PREFIJO ETNO",words:["ETNOLOGIA","ETNOGRAFIA","ETNOCENTRISMO","ETNOBOTANICA"],color:"yellow"},{name:"SINONIMOS DE FRESCO",words:["NUEVO","RECIENTE","NOVEDOSO","INEDITO"],color:"green"},{name:"COSAS QUE SE PUEDEN FERMENTAR",words:["UVA","CEBADA","LECHE","MASA"],color:"blue"},{name:"PALABRAS CON 6 LETRAS",words:["CAMINO","PUERTA","PUENTE","JARDIN"],color:"purple"}]},
{id:"jason-250",categories:[{name:"PALABRAS CON SUFIJO FICO",words:["CIENTIFICO","ARTISTICO","ACADEMICO","ECONOMICO"],color:"yellow"},{name:"SINONIMOS DE RIGIDO",words:["DURO","INFLEXIBLE","TENSO","ESTIRADO"],color:"green"},{name:"COSAS QUE SE PUEDEN FUNDIR",words:["HIELO","METAL","VIDRIO","PLASTICO"],color:"blue"},{name:"PALABRAS CON 10 LETRAS",words:["BIBLIOTECA","CAMPANARIO","ZANAHORIAS","DESARROLLO"],color:"purple"}]}
];

const SPECIAL_PUZZLES = {
"0101":{id:"special-0101",categories:[{name:"PROPOSITOS AÑO NUEVO",words:["EJERCICIO","DIETA","AHORRO","VIAJE"],color:"yellow"},{name:"TRADICIONES AÑO NUEVO",words:["UVA","CAMPANADA","BRINDIS","CORNETA"],color:"green"},{name:"MESES DEL AÑO",words:["ENERO","MARZO","JUNIO","DICIEMBRE"],color:"blue"},{name:"NUMEROS ROMANOS",words:["I","V","X","L"],color:"purple"}]},"1225":{id:"special-1225",categories:[{name:"NAVIDAD",words:["VILLANCICO","REGALO","ARBOL","ESTRELLA"],color:"yellow"},{name:"ADORNOS NAVIDAD",words:["ESFERA","GUIRNALDA","LUCES","BELEN"],color:"green"},{name:"POSTRES NAVIDAD",words:["TURRON","POLVORON","MAZAPAN","ROSCON"],color:"blue"},{name:"PERSONAJES NAVIDAD",words:["SANTA","RENO","DUENDE","ELFO"],color:"purple"}]},"1031":{id:"special-1031",categories:[{name:"HALLOWEEN",words:["CALABAZA","DISFRAZ","FANTASMA","DULCE"],color:"yellow"},{name:"MONSTRUOS",words:["VAMPIRO","ZOMBIE","LOBO","MOMIA"],color:"green"},{name:"COLORES OSCUROS",words:["NEGRO","MORADO","ROJO","GRIS"],color:"blue"},{name:"PELICULAS TERROR",words:["EL EXORCISTA","PSICOSIS","IT","EL RESPLANDOR"],color:"purple"}]},"0214":{id:"special-0214",categories:[{name:"AMOR Y AMISTAD",words:["CORAZON","FLORES","CHOCOLATE","CARTA"],color:"yellow"},{name:"PAREJA",words:["NOVIO","ESPOSO","COMPAÑERO","ALMA"],color:"green"},{name:"PALABRAS DULCES",words:["AMOR","BESO","ABRAZO","CARICIA"],color:"blue"},{name:"CANCIONES AMOR",words:["BOLERO","BALADA","RANCHERA","SONETO"],color:"purple"}]},"0704":{id:"special-0704",categories:[{name:"INDEPENDENCIA USA",words:["LIBERTAD","DECLARACION","BANDERA","FUEGOS"],color:"yellow"},{name:"SIMBOLOS USA",words:["AGUILA","ESTATUA","DOLAR","CASA BLANCA"],color:"green"},{name:"CIUDADES USA",words:["NUEVA YORK","LOS ANGELES","CHICAGO","MIAMI"],color:"blue"},{name:"INVENTOS USA",words:["AVION","BOMBILLA","INTERNET","TELEFONO"],color:"purple"}]},"0916":{id:"special-0916",categories:[{name:"INDEPENDENCIA MEXICO",words:["GRITO","CAMPANA","HIDALGO","INSURGENTE"],color:"yellow"},{name:"SIMBOLOS MEXICO",words:["AGUILA","SERPIENTE","NOPAL","TRICOLOR"],color:"green"},{name:"COMIDA MEXICANA",words:["TACO","TAMAL","POZOLE","MOLE"],color:"blue"},{name:"ARTE MEXICANO",words:["FRIDA","RIVERA","SIGUEIROS","KAHLO"],color:"purple"}]},"1206":{id:"special-1206",categories:[{name:"CONSTITUCION ESPAÑOLA",words:["CONSTITUCION","DEMOCRACIA","DERECHO","LEY"],color:"yellow"},{name:"SIMBOLOS ESPAÑA",words:["TORO","BAILAORA","SOLEAR","PAELLA"],color:"green"},{name:"REYES ESPAÑA",words:["FELIPE","LETICIA","JUAN CARLOS","SOFIA"],color:"blue"},{name:"COMUNIDADES",words:["ANDALUCIA","CATALUÑA","PAIS VASCO","GALICIA"],color:"purple"}]},"0520":{id:"special-0520",categories:[{name:"DIA DE LA INDEPENDENCIA",words:["CUBANO","PUERTORRIQUEÑO","DOMINICANO","LIBERTAD"],color:"yellow"},{name:"PRIMAVERA",words:["FLOR","SOL","MARIPOSA","ARCOIRIS"],color:"green"},{name:"JARDIN",words:["SEMILLA","TIERRA","AGUA","SOL"],color:"blue"},{name:"HERIDAS EMOCIONALES",words:["PENA","DUELO","PERDON","CICATRIZ"],color:"purple"}]},"0601":{id:"special-0601",categories:[{name:"VERANO",words:["PLAYA","SOL","CALOR","VACACIONES"],color:"yellow"},{name:"DEPORTES VERANO",words:["NATACION","SURF","BUCEO","VELA"],color:"green"},{name:"FRUTAS VERANO",words:["SANDIA","MELON","MANGO","PIÑA"],color:"blue"},{name:"ROPA VERANO",words:["SHORT","CAMISETA","SANDALIA","GORRA"],color:"purple"}]}
,"0106":{id:"special-0106",categories:[{name:"REYES MAGOS",words:["MELCHOR","GASPAR","BALTASAR","REGALO"],color:"yellow"},{name:"TRADICIONES REYES",words:["ROSCA","JUGUETE","CARTA","CABALGATA"],color:"green"},{name:"JUGUETES CLASICOS",words:["PELOTA","MUÑECA","YO-YO","ROMPECABEZAS"],color:"blue"},{name:"PERSONAJES NAVIDAD",words:["SANTA","RENO","DUENDE","ELFO"],color:"purple"}]}
,"0308":{id:"special-0308",categories:[{name:"MUJERES INSPIRADORAS",words:["FRIDA","MALALA","CURIE","TUBMAN"],color:"yellow"},{name:"DERECHOS MUJER",words:["IGUALDAD","SUFRAGIO","EQUIDAD","EMPODERAMIENTO"],color:"green"},{name:"PROFESIONES",words:["CIENTIFICA","INGENIERA","MEDICA","ABOGADA"],color:"blue"},{name:"COLORES MUJER",words:["MORADO","VERDE","BLANCO","ROSADO"],color:"purple"}]}
,"0423":{id:"special-0423",categories:[{name:"LIBROS CLASICOS",words:["DON QUIJOTE","CIEN AÑOS","LAZARILLO","CUMBRES"],color:"yellow"},{name:"GENEROS LITERARIOS",words:["NOVELA","POESIA","DRAMA","ENSAYO"],color:"green"},{name:"PARTES DEL LIBRO",words:["PORTADA","INDICE","CAPITULO","EPILOGO"],color:"blue"},{name:"ESCRITORES CERVANTES",words:["CERVANTES","SHAKESPEARE","GARCIA MARQUEZ","NERUDA"],color:"purple"}]}
,"0501":{id:"special-0501",categories:[{name:"PROFESIONES",words:["MEDICO","MAESTRO","BOMBERO","POLICIA"],color:"yellow"},{name:"DERECHOS LABORALES",words:["VACACIONES","SALARIO","JORNADA","SEGURO"],color:"green"},{name:"HERRAMIENTAS",words:["MARTILLO","LLAVE","SIERRA","DESTORNILLADOR"],color:"blue"},{name:"LUGARES TRABAJO",words:["OFICINA","FABRICA","HOSPITAL","ESCUELA"],color:"purple"}]}
,"0510":{id:"special-0510",categories:[{name:"FAMILIA",words:["MADRE","ABUELA","HIJA","HERMANA"],color:"yellow"},{name:"FLORES",words:["ROSA","CLAVEL","TULIPAN","MARGARITA"],color:"green"},{name:"PALABRAS DULCES",words:["AMOR","BESO","ABRAZO","CARICIA"],color:"blue"},{name:"QUEHACERES CASA",words:["COCINAR","BARRER","LAVAR","PLANCHAR"],color:"purple"}]}
,"0520":{id:"special-0520",categories:[{name:"DIA INTERNET",words:["RED","WIFI","NAVEGADOR","CORREO"],color:"yellow"},{name:"REDES SOCIALES",words:["FACEBOOK","INSTAGRAM","TIKTOK","TWITTER"],color:"green"},{name:"TECNOLOGIA WEB",words:["SERVIDOR","DOMINIO","HOSTING","NUBE"],color:"blue"},{name:"EMAIL EMOJIS",words:["ARROBA","PUNTO","GUION","NUMERAL"],color:"purple"}]}
,"0525":{id:"special-0525",categories:[{name:"REVOLUCION ARGENTINA",words:["BELGRANO","SAN MARTIN","INDEPENDENCIA","LIBERTAD"],color:"yellow"},{name:"SIMBOLOS ARGENTINA",words:["SOL","CELESTE","BLANCO","PAMPA"],color:"green"},{name:"COMIDA ARGENTINA",words:["ASADO","EMPANADA","MATE","DULCE LECHE"],color:"blue"},{name:"TANGO",words:["GARDEL","BANDONEON","MILONGA","BAILE"],color:"purple"}]}
,"0615":{id:"special-0615",categories:[{name:"PADRE FAMILIA",words:["PADRE","ABUELO","HIJO","HERMANO"],color:"yellow"},{name:"HERRAMIENTAS",words:["MARTILLO","DESTORNILLADOR","LLAVE","SIERRA"],color:"green"},{name:"DEPORTES",words:["FUTBOL","BEISBOL","BASQUET","GOLF"],color:"blue"},{name:"AFICIONES PADRE",words:["JARDINERIA","PESCA","ASADO","MECANICA"],color:"purple"}]}
,"0718":{id:"special-0718",categories:[{name:"PLAYA VERANO",words:["ARENA","SOL","OLA","TOALLA"],color:"yellow"},{name:"HELADOS",words:["VAINILLA","CHOCOLATE","FRESA","MENTA"],color:"green"},{name:"VACACIONES",words:["VIAJE","HOTEL","MALETA","DESCANSO"],color:"blue"},{name:"DEPORTES ACUATICOS",words:["SURF","BUCEO","REMO","VELA"],color:"purple"}]}
,"0815":{id:"special-0815",categories:[{name:"ASUNCION",words:["VIRGEN","MARIA","CIELO","GLORIA"],color:"yellow"},{name:"VERANO",words:["SOL","CALOR","PLAYA","VACACIONES"],color:"green"},{name:"FRUTAS AGOSTO",words:["SANDIA","MELON","HIGO","DURAZNO"],color:"blue"},{name:"FESTIVIDADES AGOSTO",words:["FERIA","FIESTA","PROCESION","VERBENA"],color:"purple"}]}
,"0927":{id:"special-0927",categories:[{name:"CONSUMACION INDEPENDENCIA",words:["ITURBIDE","TRIGARANTE","EJERCITO","MEXICO"],color:"yellow"},{name:"SIMBOLOS PATRIOS MX",words:["BANDERA","ESCUDO","HIMNO","NOPAL"],color:"green"},{name:"HISTORIA MEXICO",words:["VIRREINATO","INSURGENCIA","CONSUMACION","REPUBLICA"],color:"blue"},{name:"PERSONAJES INDEPENDENCIA",words:["HIDALGO","MORELOS","ALLENDE","ALDAMA"],color:"purple"}]}
,"1012":{id:"special-1012",categories:[{name:"HISPANIDAD",words:["ESPAÑA","AMERICA","IDIOMA","CULTURA"],color:"yellow"},{name:"PAISES HISPANOS",words:["MEXICO","ARGENTINA","COLOMBIA","PERU"],color:"green"},{name:"BAILES HISPANOS",words:["SALSA","FLAMENCO","TANGO","BACHATA"],color:"blue"},{name:"DESCUBRIMIENTO",words:["COLON","CARABELA","OCEANO","NUEVO MUNDO"],color:"purple"}]}
,"1101":{id:"special-1101",categories:[{name:"DIA MUERTOS",words:["ALTAR","OFENDA","CEMPASUCHIL","CALAVERA"],color:"yellow"},{name:"ELEMENTOS ALTAR",words:["VELA","INCIENSO","AGUA","PAN"],color:"green"},{name:"ALMAS",words:["ESPIRITU","ANCESTRO","DIFUNTO","RECUERDO"],color:"blue"},{name:"COLORES DIA MUERTOS",words:["NARANJA","MORADO","NEGRO","BLANCO"],color:"purple"}]}
,"1102":{id:"special-1102",categories:[{name:"CEMENTERIO",words:["TUMBA","FLOR","CRUZ","LAPIDA"],color:"yellow"},{name:"RECUERDO",words:["MEMORIA","FOTO","CARTA","HERENCIA"],color:"green"},{name:"TRADICION",words:["VISITA","VELORIO","REZO","CAMPANA"],color:"blue"},{name:"EMOCIONES",words:["PENA","AMOR","GRATITUD","PAZ"],color:"purple"}]}
,"1208":{id:"special-1208",categories:[{name:"INMACULADA",words:["VIRGEN","MARIA","PURISIMA","CONCEPCION"],color:"yellow"},{name:"RELIGION",words:["FE","ESPERANZA","ORACION","DEVOCION"],color:"green"},{name:"FIESTAS DICIEMBRE",words:["NAVIDAD","INMACULADA","NOCHEBUENA","FIN AÑO"],color:"blue"},{name:"SIMBOLOS VIRGEN",words:["AZUL","BLANCO","ESTRELLA","LUNA"],color:"purple"}]}
,"1224":{id:"special-1224",categories:[{name:"NOCHEBUENA",words:["CENA","FAMILIA","BRINDIS","REGALO"],color:"yellow"},{name:"PLATOS NAVIDAD",words:["PAVOD","BACALAO","LECHON","TAMAL"],color:"green"},{name:"ADORNOS",words:["ARBOL","ESFERA","GUIRNALDA","ESTRELLA"],color:"blue"},{name:"TRADICIONES",words:["MISA","VILLANCICO","ABRAZO","UVA"],color:"purple"}]}
,"1228":{id:"special-1228",categories:[{name:"INOCENTES",words:["BROMA","TRUCO","BURLAS","RISA"],color:"yellow"},{name:"BROMAS CLASICAS",words:["SUSTO","MENTIRA","DISFRAZ","ENGAÑO"],color:"green"},{name:"SENTIMIENTOS",words:["HUMOR","ALEGRIA","SORPRESA","RISA"],color:"blue"},{name:"PALABRAS ENGAÑOSAS",words:["HOMONIMO","POLISEMIA","AMBIGUEDAD","IRONIA"],color:"purple"}]}
,"1231":{id:"special-1231",categories:[{name:"PROPOSITOS",words:["EJERCICIO","DIETA","AHORRO","VIAJE"],color:"yellow"},{name:"CAMPANADAS",words:["DOSE","UVA","BRINDIS","CORNETA"],color:"green"},{name:"FIESTA",words:["BAILE","MUSICA","AMIGO","BRILLO"],color:"blue"},{name:"TRADICIONES",words:["MALETA","LENTEJA","ROPA","COLOR"],color:"purple"}]}
};

const MUNDIAL_PUZZLES = [
{id:"mundial-1",categories:[{name:"SELECCIONES FAVORITAS",words:["ARGENTINA","BRASIL","FRANCIA","ESPAÑA"],color:"yellow"},{name:"TERMINOS FUTBOL",words:["GOL","PENAL","FUERA LUGAR","CABEZA"],color:"green"},{name:"ESTADIOS MUNDIALISTAS",words:["CANCHA","GRADA","VESTUARIO","BANQUILLO"],color:"blue"},{name:"MUNDIAL 2026 SEDES",words:["NUEVA YORK","LOS ANGELES","CIUDAD MÉXICO","TORONTO"],color:"purple"}]},
{id:"mundial-2",categories:[{name:"PAISES CAMPEONES",words:["URUGUAY","ITALIA","INGLATERRA","ALEMANIA"],color:"yellow"},{name:"POSICIONES JUEGO",words:["PORTERO","DEFENSA","MEDIOCAMPO","DELANTERO"],color:"green"},{name:"ACCIONES PARTIDO",words:["PASE","TIRO","CENTRO","SAQUE"],color:"blue"},{name:"PREMIOS MUNDIAL",words:["BALON DE ORO","BOTA DE ORO","GUANTE DE ORO","MEJOR JUGADOR"],color:"purple"}]},
{id:"mundial-3",categories:[{name:"SEDES USA 2026",words:["DALLAS","MIAMI","ATLANTA","HOUSTON"],color:"yellow"},{name:"SEDES CANADA 2026",words:["VANCOUVER","TORONTO","EDMONTON","MONTREAL"],color:"green"},{name:"LEYENDAS MUNDIAL",words:["MARADONA","PELE","MESSI","ZIDANE"],color:"blue"},{name:"BALONES MUNDIAL",words:["TANGO","AZTECA","QUESTRA","TELSTAR"],color:"purple"}]},
{id:"mundial-4",categories:[{name:"DELANTEROS ESTRELLA",words:["MBAPPE","HAALAND","LEWANDOWSKI","KANE"],color:"yellow"},{name:"CENTROCAMPISTAS",words:["MODRIC","DE BRUYNE","BELLINGHAM","MUSIALA"],color:"green"},{name:"DEFENSAS TOP",words:["VAN DIJK","DIAS","SALIBA","ARAUJO"],color:"blue"},{name:"ARQUEROS FAMOSOS",words:["NEUER","COURTOIS","ALISSON","OBLAK"],color:"purple"}]},
{id:"mundial-5",categories:[{name:"FALTAS Y SANCIONES",words:["FALTA","TARJETA AMARILLA","TARJETA ROJA","EXPULSION"],color:"yellow"},{name:"TACTICAS FUTBOL",words:["PRESION","CONTRAATAQUE","POSESION","FUERA DE JUEGO"],color:"green"},{name:"COPA MUNDIAL",words:["FIFA","TROFEO","FASE GRUPOS","OCTAVOS"],color:"blue"},{name:"TIPOS DE GOL",words:["GOL","AUTOGOL","GOLAZO","CHILENA"],color:"purple"}]},
{id:"mundial-6",categories:[{name:"LEYENDAS RETIRADAS",words:["RONALDO","RONALDINHO","INIESTA","XAVI"],color:"yellow"},{name:"DIRECTORES TECNICOS",words:["GUARDIOLA","KLOPP","ANCELOTTI","MOURINHO"],color:"green"},{name:"LIGAS EUROPEAS",words:["PREMIER LEAGUE","LA LIGA","BUNDESLIGA","SERIE A"],color:"blue"},{name:"COPA AMERICA",words:["BRASIL","ARGENTINA","URUGUAY","CHILE"],color:"purple"}]},
{id:"mundial-7",categories:[{name:"PARTIDO FUTBOL",words:["PRIMER TIEMPO","SEGUNDO TIEMPO","TIEMPO EXTRA","PENALES"],color:"yellow"},{name:"HIMNOS Y SIMBOLOS",words:["HIMNO","BANDERA","ESCUDO","CAMISETA"],color:"green"},{name:"AFICION FUTBOLERA",words:["HINCHA","BARRA","PORRA","ULTRAS"],color:"blue"},{name:"ESTADIOS ICONICOS",words:["MARACANA","WEMBLEY","BERNABEU","CAMP NOU"],color:"purple"}]},
{id:"mundial-8",categories:[{name:"RECORD MUNDIALISTA",words:["MAS GOLES","MAS PARTIDOS","MAS TITULOS","MAS ASISTENCIAS"],color:"yellow"},{name:"INSTRING 2025",words:["DEBUTANTES","CANADA","PRIMERA VEZ","ESTRENO"],color:"green"},{name:"ARBITROS",words:["CENTRAL","LINEA","VAR","CUARTO ARBITRO"],color:"blue"},{name:"CLASICOS FUTBOL",words:["CLASICO","DERBY","SUPERCLASICO","OLD FIRM"],color:"purple"}]},
{id:"mundial-9",categories:[{name:"PRIMEROS MUNDIALES",words:["URUGUAY 1930","ITALIA 1934","FRANCIA 1938","BRASIL 1950"],color:"yellow"},{name:"SELECCIONES SORPRESA",words:["CROACIA","MARRUECOS","TURQUIA","COREA"],color:"green"},{name:"ESTRELLAS ACTUALES",words:["VINICIUS","RODRI","BALVERDE","SAKA"],color:"blue"},{name:"MUNDIAL FEMENINO",words:["EEUU","ALEMANIA","NORUEGA","JAPON"],color:"purple"}]},
{id:"mundial-10",categories:[{name:"INDUMENTARIA",words:["CAMISETA","SHORT","MEDIAS","TACHONES"],color:"yellow"},{name:"PREPARACION PARTIDO",words:["CALENTAMIENTO","ESTIRAMIENTO","TACTICA","VIDEO"],color:"green"},{name:"MARCADOR",words:["GOL","TRIUNFO","EMPATE","DERROTA"],color:"blue"},{name:"CLASIFICACION",words:["ELIMINATORIAS","REPECHAJE","SORTEO","BOMBO"],color:"purple"}]},
{id:"mundial-11",categories:[{name:"MASCOTAS MUNDIAL",words:["GAUCHITO","FULECO","ZABIVAKA","LA'EEB"],color:"yellow"},{name:"TRANSMISION DEPORTIVA",words:["TELEVISION","RADIO","STREAMING","COMENTARIO"],color:"green"},{name:"HABILIDADES FUTBOL",words:["DRIBLAR","REGATE","TACKLE","DESPEJE"],color:"blue"},{name:"FORMACIONES TACTICAS",words:["4-4-2","4-3-3","3-5-2","4-2-3-1"],color:"purple"}]},
{id:"mundial-12",categories:[{name:"EQUIPOS LATINOAMERICA",words:["BOCA","RIVER","NACIONAL","PEÑAROL"],color:"yellow"},{name:"MUNDIAL SEDES HISTORICAS",words:["MEXICO 70","MEXICO 86","FRANCIA 98","JAPON 2002"],color:"green"},{name:"TECNOLOGIA FUTBOL",words:["VAR","OJO DE HALCÓN","CHIP","SENSOR"],color:"blue"},{name:"TORNEOS INTERNACIONALES",words:["CHAMPIONS","EUROPA LEAGUE","LIBERTADORES","SUDAMERICANA"],color:"purple"}]},
{id:"mundial-13",categories:[{name:"PAISES ANFITRIONES",words:["QATAR","RUSIA","SUDAFRICA","COREA DEL SUR"],color:"yellow"},{name:"CATEGORIAS MUNDIAL",words:["SUB-20","SUB-17","FEMENINO","PLAYA"],color:"green"},{name:"JUGADORES TOP 2026",words:["MBAPPE","VINICIUS","BELLINGHAM","RODRI"],color:"blue"},{name:"FECHAS PATRIAS FUTBOL",words:["MARACANAZO","MANO DE DIOS","GOL DEL SIGLO","MINEIRAZO"],color:"purple"}]},
{id:"mundial-14",categories:[{name:"ESTRELLAS AFRICANAS",words:["SALAH","MANE","OSIMHEN","HAKIMI"],color:"yellow"},{name:"JUVENILES PROMESA",words:["YAMAL","ENDRICK","ZAÏRE-EMERY","GAVI"],color:"green"},{name:"DERBI REGIONAL",words:["FLA-FLU","DERBY MADONNINA","NORD DERBY","REVISTA"],color:"blue"},{name:"PARTES DEL ESTADIO",words:["PALCO","TUNEL","BANQUILLO","CABINA"],color:"purple"}]},
{id:"mundial-15",categories:[{name:"ACCIONES DEFENSIVAS",words:["BLOQUEO","INTERCEPCION","COBERTURA","MARCAJE"],color:"yellow"},{name:"MEDIOS DEPORTIVOS",words:["ESPN","FOX SPORTS","TUDN","MOVISTAR"],color:"green"},{name:"ENTRADAS AL ESTADIO",words:["BOLETO","ABONO","GENERAL","VIP"],color:"blue"},{name:"FINALES HISTORICAS",words:["SEMIFINAL","FINAL","TERCER LUGAR","CEREMONIA"],color:"purple"}]},
{id:"mundial-16",categories:[{name:"COMENTARISTAS",words:["RELATO","CRONICA","ANALISIS","ENTREVISTA"],color:"yellow"},{name:"PROPIETARIOS CLUBES",words:["PEREZ","ABRAMOVICH","SHEIKH","LAPORTA"],color:"green"},{name:"PALABRAS FUTBOLERAS",words:["CORRER","SALTAR","SUDAR","GRITAR"],color:"blue"},{name:"PAISES SUB-20",words:["ESPAÑA","URUGUAY","SERBIA","UCRANIA"],color:"purple"}]},
{id:"mundial-17",categories:[{name:"SUPLENTES Y CAMBIOS",words:["SUPLENTE","BANCA","CAMBIO","SUSTITUCION"],color:"yellow"},{name:"ESTRELLAS ASIATICAS",words:["SON","NAGANUMA","AL-DAWSARI","KANG-IN"],color:"green"},{name:"CAPITANES ICONICOS",words:["MESSI","MARADONA","BECKENBAUER","CAFU"],color:"blue"},{name:"TECNOLOGIA ESTADIOS",words:["TECHO","PASTO","REFRIGERACION","ILUMINACION"],color:"purple"}]},
{id:"mundial-18",categories:[{name:"APODOS FUTBOLEROS",words:["ALBICELESTE","VERDAO","SELECAO","AZZURRA"],color:"yellow"},{name:"GOLES CELEBRES",words:["CHILENA","OMBLIGO","RAKETA","VASELINA"],color:"green"},{name:"ENTRENADORES DT",words:["SCALONI","DESCHAMPS","SOUTHGATE","VAN GAAL"],color:"blue"},{name:"CAUSA FAMOSA",words:["MANO DE DIOS","CALCIOPOLI","FUTBOL TOTAL","TIKI-TAKA"],color:"purple"}]},
{id:"mundial-19",categories:[{name:"COMPETENCIAS FIFA",words:["MUNDIAL","CONFEDERACIONES","SUBCAMPEON","CLASIFICACION"],color:"yellow"},{name:"CONFEDERACIONES",words:["CONMEBOL","UEFA","CONCACAF","CAF"],color:"green"},{name:"HIMNOS PARTIDO",words:["HIMNO","MARCHA","CANCION","CORO"],color:"blue"},{name:"TERMINOS PERIODISTICOS",words:["POLÉMICA","CONTROVERSIA","ESCÁNDALO","PROTESTA"],color:"purple"}]},
{id:"mundial-20",categories:[{name:"EQUIPOS ELIMINADOS",words:["ITALIA","SUECIA","ARGELIA","EGIPTO"],color:"yellow"},{name:"JUGADORES RETIRADA",words:["MESSI","CRISTIANO","BENZEMA","MODRIC"],color:"green"},{name:"INSTANCIAS MUNDIAL",words:["FASE GRUPOS","OCTAVOS","CUARTOS","SEMIFINAL"],color:"blue"},{name:"MOMENTOS ICONICOS",words:["MANO DE DIOS","PASE DE MARADONA","CABEZA DE ZIDANE","BAILE DE RONALDINHO"],color:"purple"}]},
{id:"mundial-21",categories:[{name:"MARCAS PATROCINIO",words:["NIKE","ADIDAS","PUMA","LACOSTE"],color:"yellow"},{name:"ESTADOS UNIDOS MLS",words:["INTER MIAMI","LA GALAXY","NYCFC","ATLANTA"],color:"green"},{name:"BALONES ESPECIALES",words:["TANGO","AZTECA","QUESTRA","AL RIHLA"],color:"blue"},{name:"COPA DEL MUNDO",words:["JULES RIMET","TROFEO FIFA","ORO","COPA"],color:"purple"}]},
{id:"mundial-22",categories:[{name:"REGLAS FUTBOL",words:["SAQUE META","SAQUE BANDA","TIRO ESQUINA","TIRO LIBRE"],color:"yellow"},{name:"DINASTIAS FUTBOL",words:["MALDINI","THURAM","BLIND","ALONSO"],color:"green"},{name:"PARTIDOS CLASICOS",words:["BRASIL VS ARGENTINA","ALEMANIA VS INGLATERRA","MEXICO VS USA","ITALIA VS ALEMANIA"],color:"blue"},{name:"BALON DE ORO",words:["MESSI","CRISTIANO","BENZEMA","RODRI"],color:"purple"}]},
{id:"mundial-23",categories:[{name:"FANATICOS",words:["HINCHADA","BARRAS","ULTRAS","SEGUIDORES"],color:"yellow"},{name:"CANALES TV",words:["TELEVISA","TV AZTECA","UNIVISION","FOX SPORTS"],color:"green"},{name:"SISTEMAS DEFENSIVOS",words:["LINEA ALTA","LINEA BAJA","MARCAJE","FUERA DE JUEGO"],color:"blue"},{name:"ORGANIZADORES",words:["FIFA","CONMEBOL","UEFA","COMITE OLIMPICO"],color:"purple"}]},
{id:"mundial-24",categories:[{name:"SELECCIONES NORTEAMERICA",words:["MEXICO","ESTADOS UNIDOS","CANADA","COSTA RICA"],color:"yellow"},{name:"CAMPEONATOS NACIONALES",words:["LIGA MX","PREMIER LEAGUE","LA LIGA","SERIE A"],color:"green"},{name:"HIMNO MUNDIAL",words:["WAKA WAKA","WAVING FLAG","SIGN OF THE TIMES","LIVIN LA VIDA LOCA"],color:"blue"},{name:"LEYENDA FUTBOL",words:["GARRINCHA","CRUYFF","BECKENBAUER","PLATINI"],color:"purple"}]},
{id:"mundial-25",categories:[{name:"SELECCIONES DEBUTANTES",words:["CANADA","PRIMERA VEZ","MUNDIAL NUEVO","DEBUT"],color:"yellow"},{name:"SISTEMAS DE JUEGO",words:["OFENSIVO","DEFENSIVO","EQUILIBRADO","CONTRAGOLPE"],color:"green"},{name:"SELECCION EUROPEA",words:["ESPAÑA","ALEMANIA","FRANCIA","INGLATERRA"],color:"blue"},{name:"PREMIOS INDIVIDUALES",words:["BOTA DE ORO","BALON DE ORO","JUGADOR PARTIDO","MEJOR JOVEN"],color:"purple"}]},
];


// ===== MODO DEPORTES: 120 puzzles temáticos con rotación diaria =====
const TEMATICO_PUZZLES = [
{id:"tem-dep-1",tema:"Deportes",subtema:"Real Madrid",categories:[{name:"PORTEROS HISTORICOS",words:["CASILLAS","BUYO","COURTOIS","ILLGNER"],color:"yellow"},{name:"CAPITANES RECIENTES",words:["RAMOS","RAUL","BENZEMA","MARCELO"],color:"green"},{name:"FICHAJES GALACTICOS",words:["FIGO","ZIDANE","BECKHAM","OWEN"],color:"blue"},{name:"CANTERANOS DE LA FABRICA",words:["GUTI","MORATA","NACHO","VALVERDE"],color:"purple"}]},
{id:"tem-dep-2",tema:"Deportes",subtema:"FC Barcelona",categories:[{name:"CANTERANOS DE LA MASIA",words:["XAVI","INIESTA","PUYOL","BUSQUETS"],color:"yellow"},{name:"DELANTEROS EXTRANJEROS",words:["ROMARIO","ETOO","SUAREZ","HENRY"],color:"green"},{name:"ENTRENADORES CAMPEONES",words:["CRUYFF","GUARDIOLA","RIJKAARD","LUIS ENRIQUE"],color:"blue"},{name:"JUGARON EN MADRID Y BARCA",words:["FIGO","LAUDRUP","SCHUSTER","HAGI"],color:"purple"}]},
{id:"tem-dep-3",tema:"Deportes",subtema:"Champions League",categories:[{name:"EQUIPOS MULTICAMPEONES",words:["MADRID","MILAN","BAYERN","LIVERPOOL"],color:"yellow"},{name:"SEDES DE FINAL",words:["WEMBLEY","ESTAMBUL","LISBOA","ATENAS"],color:"green"},{name:"GOLEADORES HISTORICOS",words:["CRISTIANO","MESSI","RAUL","BENZEMA"],color:"blue"},{name:"DT CAMPEONES DE CHAMPIONS",words:["ANCELOTTI","GUARDIOLA","ZIDANE","KLOPP"],color:"purple"}]},
{id:"tem-dep-4",tema:"Deportes",subtema:"Derbis del Fútbol",categories:[{name:"DERBIS DE MADRID",words:["REAL","ATLETICO","RAYO","GETAFE"],color:"yellow"},{name:"DERBIS DE SEVILLA",words:["SEVILLA","BETIS","NERVION","HELIOPOLIS"],color:"green"},{name:"DERBIS ITALIANOS",words:["INTER","MILAN","ROMA","LAZIO"],color:"blue"},{name:"NOMBRES DE DERBI",words:["ETERNO","SUPERCLASICO","OLD FIRM","MERSEYSIDE"],color:"purple"}]},
{id:"tem-dep-5",tema:"Deportes",subtema:"Selecciones",categories:[{name:"CAMPEONAS DEL MUNDO",words:["BRASIL","ALEMANIA","ITALIA","FRANCIA"],color:"yellow"},{name:"NUNCA CAMPEONAS",words:["HOLANDA","MEXICO","PORTUGAL","BELGICA"],color:"green"},{name:"APODOS DE SELECCION",words:["ALBICELESTE","CANARINHA","AZZURRA","ROJA"],color:"blue"},{name:"PAISES ANFITRIONES",words:["QATAR","RUSIA","SUDAFRICA","JAPON"],color:"purple"}]},
{id:"tem-dep-6",tema:"Deportes",subtema:"NBA",categories:[{name:"BASES LEGENDARIOS",words:["MAGIC","STOCKTON","NASH","PAUL"],color:"yellow"},{name:"PIVOTS DOMINANTES",words:["SHAQ","KAREEM","OLAJUWON","EWING"],color:"green"},{name:"ANOTADORES PUROS",words:["JORDAN","KOBE","IVERSON","DURANT"],color:"blue"},{name:"NOMBRES CON DOBLE SENTIDO",words:["BIRD","WEST","PIPPEN","HORNET"],color:"purple"}]},
{id:"tem-dep-7",tema:"Deportes",subtema:"Dinastías NBA",categories:[{name:"BULLS DE LOS 90",words:["JORDAN","PIPPEN","RODMAN","KERR"],color:"yellow"},{name:"LAKERS SHOWTIME",words:["MAGIC","KAREEM","WORTHY","SCOTT"],color:"green"},{name:"WARRIORS RECIENTES",words:["CURRY","THOMPSON","GREEN","DURANT"],color:"blue"},{name:"ENTRENADORES CAMPEONES",words:["RILEY","JACKSON","POPOVICH","AUERBACH"],color:"purple"}]},
{id:"tem-dep-8",tema:"Deportes",subtema:"Grand Slams",categories:[{name:"TORNEOS DEL GRAND SLAM",words:["WIMBLEDON","ROLAND GARROS","US OPEN","AUSTRALIA"],color:"yellow"},{name:"CAMPEONES EN TIERRA",words:["NADAL","BORG","WILANDER","KUERTEN"],color:"green"},{name:"CAMPEONES EN HIERBA",words:["FEDERER","SAMPRAS","BECKER","EDBERG"],color:"blue"},{name:"TERMINOS CON DOBLE VIDA",words:["ACE","LOVE","BREAK","FAULT"],color:"purple"}]},
{id:"tem-dep-9",tema:"Deportes",subtema:"Tenis Español",categories:[{name:"GANADORES DE ROLAND GARROS",words:["RAFA NADAL","CARLOS MOYA","SERGI BRUGUERA","JUAN CARLOS FERRERO"],color:"yellow"},{name:"NUEVA GENERACION",words:["CARLOS ALCARAZ","ALEJANDRO DAVIDOVICH","JAUME MUNAR","ROBERTO CARBALLES"],color:"green"},{name:"CAMPEONAS ESPAÑOLAS",words:["ARANTXA SANCHEZ","CONCHITA MARTINEZ","GARBIÑE MUGURUZA","CARLA SUAREZ"],color:"blue"},{name:"HEROES DE LA COPA DAVIS",words:["ALEX CORRETJA","ALBERT COSTA","TOMMY ROBREDO","FELICIANO LOPEZ"],color:"purple"}]},
{id:"tem-dep-10",tema:"Deportes",subtema:"Fórmula 1",categories:[{name:"CAMPEONES ACTUALES",words:["VERSTAPPEN","HAMILTON","ROSBERG","VETTEL"],color:"yellow"},{name:"CAMPEONES CLASICOS",words:["SENNA","PROST","LAUDA","FANGIO"],color:"green"},{name:"ESCUDERIAS MITICAS",words:["FERRARI","MCLAREN","WILLIAMS","LOTUS"],color:"blue"},{name:"APELLIDOS CON SIGNIFICADO",words:["HILL","BRABHAM","BUTTON","BRAWN"],color:"purple"}]},
{id:"tem-dep-11",tema:"Deportes",subtema:"Circuitos de F1",categories:[{name:"CIRCUITOS URBANOS",words:["MONACO","SINGAPUR","BAKU","YEDA"],color:"yellow"},{name:"CIRCUITOS EUROPEOS",words:["MONZA","SPA","SILVERSTONE","HUNGARORING"],color:"green"},{name:"CIRCUITOS AMERICANOS",words:["INTERLAGOS","AUSTIN","MEXICO","MIAMI"],color:"blue"},{name:"CURVAS CON NOMBRE",words:["EAU ROUGE","PARABOLICA","RASCASSE","LESMO"],color:"purple"}]},
{id:"tem-dep-12",tema:"Deportes",subtema:"MotoGP",categories:[{name:"CAMPEONES ESPAÑOLES",words:["MARQUEZ","LORENZO","RINS","MARTIN"],color:"yellow"},{name:"CATEGORIAS DEL MUNDIAL",words:["MOTOGP","MOTO2","MOTO3","MOTOE"],color:"green"},{name:"MARCAS JAPONESAS",words:["HONDA","YAMAHA","SUZUKI","KAWASAKI"],color:"blue"},{name:"APODOS DEL PADDOCK",words:["DOCTOR","MARTILLO","TIBURON","DIABLO"],color:"purple"}]},
{id:"tem-dep-13",tema:"Deportes",subtema:"Ciclismo",categories:[{name:"GANADORES DEL TOUR",words:["INDURAIN","HINAULT","MERCKX","FROOME"],color:"yellow"},{name:"TIPOS DE CICLISTA",words:["ESCALADOR","SPRINTER","ROULEUR","GREGARIO"],color:"green"},{name:"PUERTOS MITICOS",words:["TOURMALET","GALIBIER","ANGLIRU","MORTIROLO"],color:"blue"},{name:"MAILLOTS Y SU MERITO",words:["AMARILLO","VERDE","LUNARES","BLANCO"],color:"purple"}]},
{id:"tem-dep-14",tema:"Deportes",subtema:"Golf",categories:[{name:"GOLPES BAJO PAR",words:["BIRDIE","EAGLE","ALBATROS","CONDOR"],color:"yellow"},{name:"LOS CUATRO MAJORS",words:["MASTERS","US OPEN","BRITISH","PGA"],color:"green"},{name:"PALOS DE GOLF",words:["DRIVER","HIERRO","WEDGE","PUTTER"],color:"blue"},{name:"CAMPOS LEGENDARIOS",words:["AUGUSTA","SAINT ANDREWS","PEBBLE BEACH","VALDERRAMA"],color:"purple"}]},
{id:"tem-dep-15",tema:"Deportes",subtema:"Natación",categories:[{name:"ESTILOS OLIMPICOS",words:["CROL","ESPALDA","BRAZA","MARIPOSA"],color:"yellow"},{name:"LEYENDAS DE LA PISCINA",words:["PHELPS","THORPE","SPITZ","BIONDI"],color:"green"},{name:"NADADORES ESPAÑOLES",words:["MARCHENA","LOPEZ ZUBERO","MELLADO","COSTA"],color:"blue"},{name:"ANFIBIOS DEL LENGUAJE",words:["CALLE","VIRAJE","SALIDA","RELEVO"],color:"purple"}]},
{id:"tem-dep-16",tema:"Deportes",subtema:"Alpinismo",categories:[{name:"OCHOMILES",words:["EVEREST","K2","LHOTSE","MAKALU"],color:"yellow"},{name:"ALPINISTAS LEYENDA",words:["MESSNER","HILLARY","BONATTI","HERZOG"],color:"green"},{name:"MATERIAL DE MONTAÑA",words:["PIOLET","CRAMPON","ARNES","MOSQUETON"],color:"blue"},{name:"GRANDES CORDILLERAS",words:["HIMALAYA","ANDES","ALPES","KARAKORUM"],color:"purple"}]},
{id:"tem-dep-17",tema:"Deportes",subtema:"Récords y Proezas",categories:[{name:"VELOCISTAS OLIMPICOS",words:["BOLT","OWENS","LEWIS","GATLIN"],color:"yellow"},{name:"PRUEBAS DE ATLETISMO",words:["MARATON","VALLAS","RELEVO","PERTIGA"],color:"green"},{name:"MITOS DE OTROS DEPORTES",words:["JORDAN","PHELPS","NADAL","SCHUMACHER"],color:"blue"},{name:"GESTAS CON NOMBRE PROPIO",words:["DREAM TEAM","MARACANAZO","MILAGRO HIELO","REMONTADA"],color:"purple"}]},
{id:"tem-dep-18",tema:"Deportes",subtema:"Mundos del Deporte",categories:[{name:"DEPORTES DE RAQUETA",words:["TENIS","PADEL","SQUASH","BADMINTON"],color:"yellow"},{name:"DEPORTES DE COMBATE",words:["BOXEO","JUDO","KARATE","LUCHA"],color:"green"},{name:"DEPORTES DE DESLIZAMIENTO",words:["ESQUI","SNOWBOARD","PATINAJE","LUGE"],color:"blue"},{name:"DEPORTE Y VERBO",words:["REMO","SALTO","TIRO","VELA"],color:"purple"}]},
{id:"tem-dep-19",tema:"Deportes",subtema:"Premier League",categories:[{name:"CLUBES DE LONDRES",words:["ARSENAL","CHELSEA","TOTTENHAM","WEST HAM"],color:"yellow"},{name:"CLUBES DEL NORTE",words:["LIVERPOOL","EVERTON","NEWCASTLE","LEEDS"],color:"green"},{name:"ESTADIOS INGLESES",words:["ANFIELD","OLD TRAFFORD","EMIRATES","STAMFORD"],color:"blue"},{name:"MANAGERS ICONICOS",words:["FERGUSON","WENGER","MOURINHO","KLOPP"],color:"purple"}]},
{id:"tem-dep-20",tema:"Deportes",subtema:"Manchester United",categories:[{name:"IDOLOS DE OLD TRAFFORD",words:["GIGGS","SCHOLES","ROONEY","KEANE"],color:"yellow"},{name:"NUMEROS 7 HISTORICOS",words:["BEST","CANTONA","BECKHAM","RONALDO"],color:"green"},{name:"TITULOS Y GLORIAS",words:["TREBLE","PREMIER","CHAMPIONS","FA CUP"],color:"blue"},{name:"APODOS DEL CLUB",words:["RED DEVILS","DIABLOS","UNITED","MANCUNIANO"],color:"purple"}]},
{id:"tem-dep-21",tema:"Deportes",subtema:"Selección Española",categories:[{name:"CAMPEONES 2010",words:["CASILLAS","PUYOL","XAVI","INIESTA"],color:"yellow"},{name:"GOLEADORES DE LA ROJA",words:["VILLA","MORATA","TORRES","RAUL"],color:"green"},{name:"SELECCIONADORES",words:["ARAGONES","DEL BOSQUE","LOPETEGUI","DE LA FUENTE"],color:"blue"},{name:"SEDES DE TITULOS",words:["VIENA","JOHANNESBURGO","KIEV","BERLIN"],color:"purple"}]},
{id:"tem-dep-22",tema:"Deportes",subtema:"Maradona",categories:[{name:"CLUBES DE MARADONA",words:["BOCA","NAPOLI","BARCELONA","SEVILLA"],color:"yellow"},{name:"MOMENTOS MITICOS",words:["MANO DE DIOS","GOL DEL SIGLO","MEXICO 86","BARRILETE"],color:"green"},{name:"SELECCION ARGENTINA",words:["ALBICELESTE","PELUSA","DIEZ","CAPITAN"],color:"blue"},{name:"OTROS DIEZ ARGENTINOS",words:["RIQUELME","AIMAR","ORTEGA","MESSI"],color:"purple"}]},
{id:"tem-dep-23",tema:"Deportes",subtema:"Ligas del Mundo",categories:[{name:"LIGA ITALIANA",words:["JUVENTUS","MILAN","INTER","NAPOLI"],color:"yellow"},{name:"LIGA ALEMANA",words:["BAYERN","DORTMUND","LEIPZIG","LEVERKUSEN"],color:"green"},{name:"LIGA FRANCESA",words:["PSG","MARSELLA","LYON","MONACO"],color:"blue"},{name:"NOMBRES DE LIGA",words:["SERIE A","BUNDESLIGA","LIGUE 1","EREDIVISIE"],color:"purple"}]},
{id:"tem-dep-24",tema:"Deportes",subtema:"Mundiales Históricos",categories:[{name:"PAISES ANFITRIONES",words:["BRASIL","ALEMANIA","MEXICO","QATAR"],color:"yellow"},{name:"CAMPEONES RECIENTES",words:["ESPAÑA","ITALIA","FRANCIA","ARGENTINA"],color:"green"},{name:"BALONES OFICIALES",words:["TELSTAR","TANGO","JABULANI","AL RIHLA"],color:"blue"},{name:"MASCOTAS MUNDIALISTAS",words:["NARANJITO","FULECO","ZAKUMI","LAEEB"],color:"purple"}]},
{id:"tem-dep-25",tema:"Deportes",subtema:"Porteros Legendarios",categories:[{name:"PORTEROS ESPAÑOLES",words:["ZUBIZARRETA","CASILLAS","ARCONADA","DE GEA"],color:"yellow"},{name:"PORTEROS EXTRANJEROS",words:["BUFFON","NEUER","YASHIN","KAHN"],color:"green"},{name:"ACCIONES DEL ARQUERO",words:["PARADA","BLOCAJE","ESTIRADA","DESPEJE"],color:"blue"},{name:"APODOS DE PORTERO",words:["ARAÑA NEGRA","SANTO","GATO","PANTERA"],color:"purple"}]},
{id:"tem-dep-26",tema:"Deportes",subtema:"Números 10",categories:[{name:"DIEZ ARGENTINOS",words:["MARADONA","MESSI","RIQUELME","AIMAR"],color:"yellow"},{name:"DIEZ BRASILEÑOS",words:["PELE","ZICO","RIVALDO","KAKA"],color:"green"},{name:"DIEZ EUROPEOS",words:["ZIDANE","TOTTI","RUI COSTA","HAGI"],color:"blue"},{name:"CUALIDADES DEL DIEZ",words:["MAGIA","VISION","PASE","REGATE"],color:"purple"}]},
{id:"tem-dep-27",tema:"Deportes",subtema:"Copa América",categories:[{name:"SELECCIONES CAMPEONAS",words:["ARGENTINA","BRASIL","URUGUAY","CHILE"],color:"yellow"},{name:"ESTRELLAS SUDAMERICANAS",words:["MESSI","NEYMAR","SUAREZ","VIDAL"],color:"green"},{name:"PAISES PARTICIPANTES",words:["COLOMBIA","PERU","ECUADOR","PARAGUAY"],color:"blue"},{name:"SEDES HISTORICAS",words:["MARACANA","CENTENARIO","MONUMENTAL","NACIONAL"],color:"purple"}]},
{id:"tem-dep-28",tema:"Deportes",subtema:"Delanteros Goleadores",categories:[{name:"NUEVES CLASICOS",words:["BATISTUTA","RONALDO","VAN BASTEN","SHEARER"],color:"yellow"},{name:"GOLEADORES ACTUALES",words:["HAALAND","MBAPPE","KANE","LEWANDOWSKI"],color:"green"},{name:"PICHICHIS HISTORICOS",words:["ZARRA","HUGO SANCHEZ","MESSI","CRISTIANO"],color:"blue"},{name:"TIPOS DE REMATE",words:["VOLEA","CABEZAZO","VASELINA","CHILENA"],color:"purple"}]},
{id:"tem-dep-29",tema:"Deportes",subtema:"Estadios del Mundo",categories:[{name:"ESTADIOS ESPAÑOLES",words:["BERNABEU","CAMP NOU","METROPOLITANO","MESTALLA"],color:"yellow"},{name:"ESTADIOS SUDAMERICANOS",words:["MARACANA","MONUMENTAL","BOMBONERA","CENTENARIO"],color:"green"},{name:"ESTADIOS INGLESES",words:["WEMBLEY","ANFIELD","OLD TRAFFORD","ETIHAD"],color:"blue"},{name:"APODOS DE ESTADIO",words:["COLISEO","CATEDRAL","OLLA","CALDERA"],color:"purple"}]},
{id:"tem-dep-30",tema:"Deportes",subtema:"Cracks de los 90",categories:[{name:"MEDIAPUNTAS DE LOS 90",words:["BAGGIO","ZIDANE","LAUDRUP","VALDERRAMA"],color:"yellow"},{name:"GOLEADORES DE LOS 90",words:["RONALDO","BATISTUTA","WEAH","KLINSMANN"],color:"green"},{name:"DEFENSAS DE LOS 90",words:["MALDINI","BARESI","HIERRO","KOEMAN"],color:"blue"},{name:"BALONES DE ORO 90s",words:["STOICHKOV","SAMMER","SHEVCHENKO","MATTHAUS"],color:"purple"}]},
{id:"tem-dep-31",tema:"Deportes",subtema:"Fútbol Sudamericano",categories:[{name:"CLUBES ARGENTINOS",words:["BOCA","RIVER","INDEPENDIENTE","RACING"],color:"yellow"},{name:"CLUBES BRASILEÑOS",words:["FLAMENGO","SANTOS","CORINTHIANS","PALMEIRAS"],color:"green"},{name:"COPA LIBERTADORES",words:["TROFEO","FINAL","GLORIA","CONMEBOL"],color:"blue"},{name:"IDOLOS CONTINENTALES",words:["PELE","MARADONA","GARRINCHA","ZICO"],color:"purple"}]},
{id:"tem-dep-32",tema:"Deportes",subtema:"Reglas del Fútbol",categories:[{name:"INFRACCIONES",words:["FALTA","PENALTI","MANO","FUERA DE JUEGO"],color:"yellow"},{name:"REANUDACIONES",words:["SAQUE","CORNER","BANDA","CENTRO"],color:"green"},{name:"SANCIONES",words:["AMARILLA","ROJA","EXPULSION","AMONESTACION"],color:"blue"},{name:"EL VAR Y LA TECNOLOGIA",words:["VAR","GOL LINE","REVISION","MONITOR"],color:"purple"}]},
{id:"tem-dep-33",tema:"Deportes",subtema:"Eurocopa",categories:[{name:"CAMPEONES DE EUROPA",words:["ESPAÑA","ALEMANIA","ITALIA","HOLANDA"],color:"yellow"},{name:"SORPRESAS HISTORICAS",words:["GRECIA","DINAMARCA","PORTUGAL","URSS"],color:"green"},{name:"GOLEADORES EURO",words:["PLATINI","SHEARER","GRIEZMANN","RONALDO"],color:"blue"},{name:"PAISES ANFITRIONES EURO",words:["INGLATERRA","FRANCIA","SUECIA","AUSTRIA"],color:"purple"}]},
{id:"tem-dep-34",tema:"Deportes",subtema:"Fútbol Italiano",categories:[{name:"GRANDES DEL CALCIO",words:["JUVENTUS","MILAN","INTER","ROMA"],color:"yellow"},{name:"LEYENDAS ITALIANAS",words:["TOTTI","DEL PIERO","BAGGIO","MALDINI"],color:"green"},{name:"CATENACCIO Y TACTICA",words:["LIBERO","MARCAJE","REPLIEGUE","CERROJO"],color:"blue"},{name:"DERBIS DE ITALIA",words:["MADONNINA","CAPITALE","MOLE","TERAMO"],color:"purple"}]},
{id:"tem-dep-35",tema:"Deportes",subtema:"Balón de Oro",categories:[{name:"MULTIPLES GANADORES",words:["MESSI","CRISTIANO","PLATINI","CRUYFF"],color:"yellow"},{name:"GANADORES ESPAÑOLES",words:["SUAREZ","STOICHKOV","RODRI","LUIS SUAREZ"],color:"green"},{name:"GANADORES DEFENSAS",words:["BECKENBAUER","CANNAVARO","SAMMER","MATTHAUS"],color:"blue"},{name:"PALABRAS DEL PREMIO",words:["FRANCE FOOTBALL","GALA","TROFEO","VOTACION"],color:"purple"}]},
{id:"tem-dep-36",tema:"Deportes",subtema:"Fútbol Africano",categories:[{name:"ESTRELLAS AFRICANAS",words:["ETOO","DROGBA","SALAH","MANE"],color:"yellow"},{name:"SELECCIONES POTENTES",words:["CAMERUN","NIGERIA","SENEGAL","EGIPTO"],color:"green"},{name:"COPA AFRICA",words:["CAN","TROFEO","CAF","FINAL"],color:"blue"},{name:"PIONEROS DEL CONTINENTE",words:["WEAH","MILLA","PELE FALSO","BWALYA"],color:"purple"}]},
{id:"tem-dep-37",tema:"Deportes",subtema:"Boston Celtics",categories:[{name:"LEYENDAS VERDES",words:["BIRD","RUSSELL","HAVLICEK","MCHALE"],color:"yellow"},{name:"PLANTILLA MODERNA",words:["TATUM","BROWN","SMART","HORFORD"],color:"green"},{name:"SIMBOLOS DEL CLUB",words:["TREBOL","PARQUET","BANNER","BOSTON"],color:"blue"},{name:"RIVALES ETERNOS",words:["LAKERS","SIXERS","PISTONS","HEAT"],color:"purple"}]},
{id:"tem-dep-38",tema:"Deportes",subtema:"Estrellas NBA Actuales",categories:[{name:"BASES ESTRELLA",words:["CURRY","DONCIC","MORANT","IRVING"],color:"yellow"},{name:"ALEROS DOMINANTES",words:["DURANT","LEONARD","TATUM","GEORGE"],color:"green"},{name:"HOMBRES ALTOS",words:["JOKIC","EMBIID","GOBERT","DAVIS"],color:"blue"},{name:"ROOKIES DEL AÑO",words:["BARNES","MOBLEY","BANCHERO","WEMBANYAMA"],color:"purple"}]},
{id:"tem-dep-39",tema:"Deportes",subtema:"Baloncesto Español",categories:[{name:"GENERACION DE ORO",words:["GASOL","NAVARRO","CALDERON","REYES"],color:"yellow"},{name:"JUGADORES ACTUALES",words:["HERNANGOMEZ","ABRINES","BROWN","LLULL"],color:"green"},{name:"CLUBES ACB",words:["MADRID","BARCELONA","BASKONIA","UNICAJA"],color:"blue"},{name:"TITULOS DE ESPAÑA",words:["MUNDIAL","EUROBASKET","PLATA","ORO"],color:"purple"}]},
{id:"tem-dep-40",tema:"Deportes",subtema:"Historia de la NBA",categories:[{name:"PIONEROS",words:["MIKAN","RUSSELL","CHAMBERLAIN","WEST"],color:"yellow"},{name:"ERA DE LOS 80",words:["MAGIC","BIRD","THOMAS","DR J"],color:"green"},{name:"ERA DE LOS 2000",words:["DUNCAN","GARNETT","NOWITZKI","KOBE"],color:"blue"},{name:"FRANQUICIAS HISTORICAS",words:["CELTICS","LAKERS","BULLS","SPURS"],color:"purple"}]},
{id:"tem-dep-41",tema:"Deportes",subtema:"Jugadas de Baloncesto",categories:[{name:"TIPOS DE CANASTA",words:["TRIPLE","BANDEJA","MATE","GANCHO"],color:"yellow"},{name:"ACCIONES DEFENSIVAS",words:["TAPON","ROBO","REBOTE","BLOQUEO"],color:"green"},{name:"TERMINOS DE JUEGO",words:["ASISTENCIA","POSESION","CONTRAATAQUE","PICK"],color:"blue"},{name:"ANGLICISMOS DEL BASKET",words:["CROSSOVER","ALLEY OOP","BUZZER","CLUTCH"],color:"purple"}]},
{id:"tem-dep-42",tema:"Deportes",subtema:"Federer y Nadal",categories:[{name:"TITULOS DE FEDERER",words:["WIMBLEDON","AUSTRALIA","US OPEN","BASILEA"],color:"yellow"},{name:"TITULOS DE NADAL",words:["ROLAND GARROS","MONTECARLO","ROMA","BARCELONA"],color:"green"},{name:"RIVALES DEL BIG THREE",words:["DJOKOVIC","MURRAY","WAWRINKA","DEL POTRO"],color:"blue"},{name:"GOLPES DE TENIS",words:["DERECHA","REVES","SAQUE","VOLEA"],color:"purple"}]},
{id:"tem-dep-43",tema:"Deportes",subtema:"Tenis Femenino",categories:[{name:"LEYENDAS ABSOLUTAS",words:["GRAF","SERENA","NAVRATILOVA","EVERT"],color:"yellow"},{name:"ESTRELLAS RECIENTES",words:["SWIATEK","SABALENKA","GAUFF","RYBAKINA"],color:"green"},{name:"CAMPEONAS ESPAÑOLAS",words:["ARANTXA","CONCHITA","MUGURUZA","SUAREZ"],color:"blue"},{name:"NUMERO UNO DEL MUNDO",words:["HALEP","WOZNIACKI","KERBER","OSAKA"],color:"purple"}]},
{id:"tem-dep-44",tema:"Deportes",subtema:"Copa Davis",categories:[{name:"PAISES GANADORES",words:["ESPAÑA","EEUU","AUSTRALIA","FRANCIA"],color:"yellow"},{name:"JUGADORES ESPAÑOLES",words:["NADAL","FERRER","LOPEZ","BAUTISTA"],color:"green"},{name:"FORMATO DEL TORNEO",words:["INDIVIDUAL","DOBLES","ELIMINATORIA","SEDE"],color:"blue"},{name:"OTROS TROFEOS POR PAISES",words:["FED CUP","ATP CUP","HOPMAN","LAVER"],color:"purple"}]},
{id:"tem-dep-45",tema:"Deportes",subtema:"Fernando Alonso",categories:[{name:"ESCUDERIAS DE ALONSO",words:["RENAULT","FERRARI","MCLAREN","ASTON MARTIN"],color:"yellow"},{name:"OTROS PILOTOS ESPAÑOLES",words:["SAINZ","DE LA ROSA","MERHI","GENE"],color:"green"},{name:"HAZAÑAS DE NANO",words:["DAKAR","LE MANS","INDY","MUNDIAL"],color:"blue"},{name:"CIRCUITOS FAVORITOS",words:["MONACO","HUNGARORING","SINGAPUR","SPA"],color:"purple"}]},
{id:"tem-dep-46",tema:"Deportes",subtema:"Escuderías F1",categories:[{name:"EQUIPOS PUNTEROS",words:["FERRARI","RED BULL","MERCEDES","MCLAREN"],color:"yellow"},{name:"EQUIPOS MEDIOS",words:["ALPINE","ASTON MARTIN","WILLIAMS","HAAS"],color:"green"},{name:"JEFES DE EQUIPO",words:["HORNER","WOLFF","VASSEUR","BROWN"],color:"blue"},{name:"PROVEEDORES DE NEUMATICOS",words:["PIRELLI","BRIDGESTONE","MICHELIN","GOODYEAR"],color:"purple"}]},
{id:"tem-dep-47",tema:"Deportes",subtema:"Leyendas del Motor",categories:[{name:"CAMPEONES MULTIPLE F1",words:["SCHUMACHER","HAMILTON","FANGIO","VETTEL"],color:"yellow"},{name:"PILOTOS FALLECIDOS EN PISTA",words:["SENNA","CLARK","RINDT","VILLENEUVE"],color:"green"},{name:"DINASTIAS DEL MOTOR",words:["HILL","VERSTAPPEN","ROSBERG","ANDRETTI"],color:"blue"},{name:"NACIONALIDADES CAMPEONAS",words:["BRITANICO","ALEMAN","BRASILEÑO","FINLANDES"],color:"purple"}]},
{id:"tem-dep-48",tema:"Deportes",subtema:"MotoGP Leyendas",categories:[{name:"CAMPEONES ITALIANOS",words:["ROSSI","AGOSTINI","CAPIROSSI","BIAGGI"],color:"yellow"},{name:"CAMPEONES ESPAÑOLES",words:["MARQUEZ","LORENZO","RINS","MARTIN"],color:"green"},{name:"CIRCUITOS DE MOTO",words:["MUGELLO","JEREZ","ASSEN","SACHSENRING"],color:"blue"},{name:"NUMEROS ICONICOS",words:["46","93","99","26"],color:"purple"}]},
{id:"tem-dep-49",tema:"Deportes",subtema:"Circuitos Míticos",categories:[{name:"CIRCUITOS DE F1",words:["MONZA","SPA","SUZUKA","INTERLAGOS"],color:"yellow"},{name:"CIRCUITOS DE RESISTENCIA",words:["LE MANS","DAYTONA","NURBURGRING","SEBRING"],color:"green"},{name:"CIRCUITOS DE MOTO",words:["JEREZ","MUGELLO","ASSEN","PHILLIP ISLAND"],color:"blue"},{name:"PAISES DE LOS TRAZADOS",words:["ITALIA","BELGICA","JAPON","BRASIL"],color:"purple"}]},
{id:"tem-dep-50",tema:"Deportes",subtema:"Rally y Dakar",categories:[{name:"CAMPEONES DE RALLY",words:["LOEB","SAINZ","OGIER","MAKINEN"],color:"yellow"},{name:"MARCAS DE RALLY",words:["TOYOTA","CITROEN","FORD","HYUNDAI"],color:"green"},{name:"TERRENOS DEL DAKAR",words:["DUNA","DESIERTO","ARENA","PISTA"],color:"blue"},{name:"CATEGORIAS DEL DAKAR",words:["COCHES","MOTOS","CAMIONES","QUADS"],color:"purple"}]},
{id:"tem-dep-51",tema:"Deportes",subtema:"Ciclismo Español",categories:[{name:"GANADORES DEL TOUR",words:["INDURAIN","OCAÑA","PEREIRO","CONTADOR"],color:"yellow"},{name:"ESCALADORES MITICOS",words:["BAHAMONTES","PERICO","VALVERDE","LANDA"],color:"green"},{name:"PUERTOS ESPAÑOLES",words:["ANGLIRU","MORTIROLO","BOLA MUNDO","LAGOS"],color:"blue"},{name:"EQUIPOS HISTORICOS",words:["BANESTO","KELME","ONCE","MOVISTAR"],color:"purple"}]},
{id:"tem-dep-52",tema:"Deportes",subtema:"Vuelta a España",categories:[{name:"MAILLOT ROJO",words:["LIDER","GENERAL","ROJO","GANADOR"],color:"yellow"},{name:"FINALES EN ALTO",words:["ANGLIRU","BOLA MUNDO","SIERRA NEVADA","AITANA"],color:"green"},{name:"CICLISTAS INTERNACIONALES",words:["ROGLIC","FROOME","QUINTANA","EVENEPOEL"],color:"blue"},{name:"CIUDADES DE SALIDA",words:["MADRID","SEVILLA","BILBAO","VALENCIA"],color:"purple"}]},
{id:"tem-dep-53",tema:"Deportes",subtema:"Tour de Francia",categories:[{name:"MAILLOT AMARILLO",words:["LIDER","AMARILLO","GENERAL","MAILLOT"],color:"yellow"},{name:"PUERTOS FRANCESES",words:["TOURMALET","GALIBIER","ALPE DHUEZ","VENTOUX"],color:"green"},{name:"GANADORES RECIENTES",words:["POGACAR","VINGEGAARD","BERNAL","THOMAS"],color:"blue"},{name:"CIUDAD DE LLEGADA",words:["PARIS","CAMPOS ELISEOS","ARCO TRIUNFO","SENA"],color:"purple"}]},
{id:"tem-dep-54",tema:"Deportes",subtema:"Ciclismo Clásicas",categories:[{name:"CLASICAS DE PRIMAVERA",words:["ROUBAIX","FLANDES","LIEJA","MILAN SANREMO"],color:"yellow"},{name:"TIPOS DE CORREDOR",words:["CLASICOMANO","SPRINTER","ESCALADOR","CONTRARRELOJISTA"],color:"green"},{name:"TERRENOS ESPECIALES",words:["ADOQUIN","PAVE","MURO","REPECHO"],color:"blue"},{name:"PAISES CICLISTAS",words:["BELGICA","HOLANDA","ITALIA","FRANCIA"],color:"purple"}]},
{id:"tem-dep-55",tema:"Deportes",subtema:"Golf Mayores",categories:[{name:"GANADORES DEL MASTERS",words:["WOODS","NICKLAUS","MICKELSON","GARCIA"],color:"yellow"},{name:"GOLFISTAS EUROPEOS",words:["BALLESTEROS","OLAZABAL","FALDO","RAHM"],color:"green"},{name:"CAMPOS DE LOS MAJORS",words:["AUGUSTA","PEBBLE BEACH","SAINT ANDREWS","PINEHURST"],color:"blue"},{name:"CHAQUETA Y PREMIOS",words:["VERDE","CLARET JUG","TROFEO","MEDALLA"],color:"purple"}]},
{id:"tem-dep-56",tema:"Deportes",subtema:"Golf Español",categories:[{name:"GRANDES ESPAÑOLES",words:["BALLESTEROS","OLAZABAL","JIMENEZ","RAHM"],color:"yellow"},{name:"GOLPES DEL JUEGO",words:["DRIVE","APPROACH","CHIP","PUTT"],color:"green"},{name:"CAMPOS ESPAÑOLES",words:["VALDERRAMA","PGA CATALUNYA","SOTOGRANDE","LUMINE"],color:"blue"},{name:"TERMINOS EN INGLES",words:["FAIRWAY","GREEN","ROUGH","BUNKER"],color:"purple"}]},
{id:"tem-dep-57",tema:"Deportes",subtema:"Natación Olímpica",categories:[{name:"REYES DE LA PISCINA",words:["PHELPS","SPITZ","THORPE","LOCHTE"],color:"yellow"},{name:"NADADORAS ESTRELLA",words:["LEDECKY","FRANKLIN","COUGHLIN","HOSSZU"],color:"green"},{name:"DISTANCIAS OLIMPICAS",words:["CINCUENTA","CIEN","DOSCIENTOS","CUATROCIENTOS"],color:"blue"},{name:"MATERIAL DE NADADOR",words:["GAFAS","GORRO","BAÑADOR","ALETA"],color:"purple"}]},
{id:"tem-dep-58",tema:"Deportes",subtema:"Deportes Acuáticos",categories:[{name:"DISCIPLINAS DE AGUA",words:["NATACION","WATERPOLO","SALTOS","SINCRONIZADA"],color:"yellow"},{name:"DEPORTES DE VELA",words:["VELA","WINDSURF","KITESURF","REGATA"],color:"green"},{name:"DEPORTES DE REMO",words:["REMO","PIRAGUA","CANOA","KAYAK"],color:"blue"},{name:"DEPORTES DE TABLA",words:["SURF","BODYBOARD","PADEL SURF","SKIM"],color:"purple"}]},
{id:"tem-dep-59",tema:"Deportes",subtema:"Atletismo Pista",categories:[{name:"PRUEBAS DE VELOCIDAD",words:["CIEN","DOSCIENTOS","CUATROCIENTOS","RELEVOS"],color:"yellow"},{name:"PRUEBAS DE FONDO",words:["CINCO MIL","DIEZ MIL","MARATON","MEDIA"],color:"green"},{name:"VELOCISTAS HISTORICOS",words:["BOLT","OWENS","LEWIS","GREENE"],color:"blue"},{name:"MOMENTOS DE LA CARRERA",words:["SALIDA","TACO","META","VUELTA"],color:"purple"}]},
{id:"tem-dep-60",tema:"Deportes",subtema:"Atletismo Saltos",categories:[{name:"SALTOS HORIZONTALES",words:["LONGITUD","TRIPLE","PALO","IMPULSO"],color:"yellow"},{name:"SALTOS VERTICALES",words:["ALTURA","PERTIGA","LISTON","FOSBURY"],color:"green"},{name:"LANZAMIENTOS",words:["JABALINA","MARTILLO","DISCO","PESO"],color:"blue"},{name:"PRUEBAS COMBINADAS",words:["DECATLON","HEPTATLON","PENTATLON","TRIATLON"],color:"purple"}]},
{id:"tem-dep-61",tema:"Deportes",subtema:"Juegos Olímpicos",categories:[{name:"SEDES DE VERANO",words:["BARCELONA","ATENAS","PEKIN","TOKIO"],color:"yellow"},{name:"SIMBOLOS OLIMPICOS",words:["ANTORCHA","AROS","LLAMA","PODIO"],color:"green"},{name:"TIPOS DE MEDALLA",words:["ORO","PLATA","BRONCE","DIPLOMA"],color:"blue"},{name:"LEMAS Y VALORES",words:["CITIUS","ALTIUS","FORTIUS","JUEGO LIMPIO"],color:"purple"}]},
{id:"tem-dep-62",tema:"Deportes",subtema:"Deportes de Invierno",categories:[{name:"DEPORTES DE ESQUI",words:["ALPINO","FONDO","SALTO","ESLALON"],color:"yellow"},{name:"DEPORTES DE HIELO",words:["PATINAJE","HOCKEY","CURLING","BOBSLEIGH"],color:"green"},{name:"SEDES DE INVIERNO",words:["CHAMONIX","SAPPORO","CALGARY","SOCHI"],color:"blue"},{name:"MODALIDADES DESLIZANTES",words:["LUGE","SKELETON","SNOWBOARD","BIATLON"],color:"purple"}]},
{id:"tem-dep-63",tema:"Deportes",subtema:"Alpinismo Extremo",categories:[{name:"CATORCE OCHOMILES",words:["EVEREST","K2","KANGCHENJUNGA","DHAULAGIRI"],color:"yellow"},{name:"ESCUELAS DE ESCALADA",words:["DEPORTIVA","CLASICA","BOULDER","ARTIFICIAL"],color:"green"},{name:"ALPINISTAS ESPAÑOLES",words:["PASABAN","OIARZABAL","IÑURRATEGI","TXIKON"],color:"blue"},{name:"PELIGROS DE LA MONTAÑA",words:["ALUD","GRIETA","VERTIGO","SEROTA"],color:"purple"}]},
{id:"tem-dep-64",tema:"Deportes",subtema:"Boxeo",categories:[{name:"LEYENDAS DEL RING",words:["ALI","TYSON","FOREMAN","FRAZIER"],color:"yellow"},{name:"CATEGORIAS DE PESO",words:["PESADO","MEDIO","LIGERO","PLUMA"],color:"green"},{name:"GOLPES DE BOXEO",words:["JAB","GANCHO","CROSS","UPPERCUT"],color:"blue"},{name:"TERMINOS DEL COMBATE",words:["ASALTO","KO","CAMPANA","ESQUINA"],color:"purple"}]},
{id:"tem-dep-65",tema:"Deportes",subtema:"Artes Marciales",categories:[{name:"ARTES JAPONESAS",words:["JUDO","KARATE","AIKIDO","KENDO"],color:"yellow"},{name:"OTRAS DISCIPLINAS",words:["TAEKWONDO","KUNG FU","MUAY THAI","CAPOEIRA"],color:"green"},{name:"GRADOS Y CINTURONES",words:["BLANCO","NEGRO","DAN","KYU"],color:"blue"},{name:"ARTES DE COMBATE MIXTO",words:["MMA","GRAPPLING","SUBMISSION","JIU JITSU"],color:"purple"}]},
{id:"tem-dep-66",tema:"Deportes",subtema:"Rugby",categories:[{name:"SELECCIONES POTENTES",words:["NUEVA ZELANDA","SUDAFRICA","INGLATERRA","FRANCIA"],color:"yellow"},{name:"POSICIONES DE RUGBY",words:["PILAR","MELE","APERTURA","ZAGUERO"],color:"green"},{name:"FORMAS DE PUNTUAR",words:["ENSAYO","CONVERSION","PENAL","DROP"],color:"blue"},{name:"TERMINOS DEL JUEGO",words:["PLACAJE","TOUCH","RUCK","MAUL"],color:"purple"}]},
{id:"tem-dep-67",tema:"Deportes",subtema:"Balonmano",categories:[{name:"SELECCION ESPAÑOLA",words:["HISPANOS","MUNDIAL","EUROPEO","BRONCE"],color:"yellow"},{name:"POSICIONES",words:["PORTERO","EXTREMO","PIVOTE","CENTRAL"],color:"green"},{name:"ACCIONES DEL JUEGO",words:["LANZAMIENTO","BLOCAJE","CONTRAATAQUE","SIETE METROS"],color:"blue"},{name:"CLUBES POTENTES",words:["BARCELONA","KIEL","VESZPREM","PARIS"],color:"purple"}]},
{id:"tem-dep-68",tema:"Deportes",subtema:"Voleibol",categories:[{name:"ACCIONES DEL VOLEY",words:["SAQUE","REMATE","BLOQUEO","RECEPCION"],color:"yellow"},{name:"POSICIONES",words:["COLOCADOR","LIBERO","CENTRAL","OPUESTO"],color:"green"},{name:"VARIANTES DEL DEPORTE",words:["PLAYA","PISTA","SENTADO","INDOOR"],color:"blue"},{name:"SELECCIONES FUERTES",words:["BRASIL","ITALIA","POLONIA","EEUU"],color:"purple"}]},
{id:"tem-dep-69",tema:"Deportes",subtema:"Récords del Deporte",categories:[{name:"RECORDS DE VELOCIDAD",words:["USAIN BOLT","CIEN METROS","SPRINT","RAYO"],color:"yellow"},{name:"DEPORTISTAS MAS LAUREADOS",words:["PHELPS","LATYNINA","BOLT","BILES"],color:"green"},{name:"PROEZAS DE RESISTENCIA",words:["IRONMAN","ULTRAMARATON","TRAVESIA","VUELTA"],color:"blue"},{name:"MARCAS IMBATIBLES",words:["BEAMON","BUBKA","POWELL","KOMAROVA"],color:"purple"}]},
{id:"tem-dep-70",tema:"Deportes",subtema:"Momentos Históricos",categories:[{name:"GESTAS DEL FUTBOL",words:["MARACANAZO","REMONTADA","MANO DE DIOS","GOL SIGLO"],color:"yellow"},{name:"HAZAÑAS OLIMPICAS",words:["DREAM TEAM","NADIA","BOLT","SPITZ"],color:"green"},{name:"HITOS DEL TENIS",words:["GRAND SLAM","GOLDEN SLAM","BIG THREE","OPEN ERA"],color:"blue"},{name:"MILAGROS DEPORTIVOS",words:["MILAGRO HIELO","LEICESTER","GRECIA 2004","VILLARREAL"],color:"purple"}]},
{id:"tem-dep-71",tema:"Deportes",subtema:"Deportes de Motor",categories:[{name:"CATEGORIAS DEL MOTOR",words:["FORMULA 1","MOTOGP","RALLY","INDYCAR"],color:"yellow"},{name:"CARRERAS DE RESISTENCIA",words:["LE MANS","DAYTONA","SPA","NURBURGRING"],color:"green"},{name:"PARTES DEL COCHE",words:["ALERON","CHASIS","MOTOR","NEUMATICO"],color:"blue"},{name:"BANDERAS DE CARRERA",words:["CUADROS","AMARILLA","ROJA","AZUL"],color:"purple"}]},
{id:"tem-dep-72",tema:"Deportes",subtema:"Iconos del Deporte",categories:[{name:"ICONOS DEL FUTBOL",words:["PELE","MARADONA","MESSI","CRISTIANO"],color:"yellow"},{name:"ICONOS DEL BASKET",words:["JORDAN","LEBRON","MAGIC","BIRD"],color:"green"},{name:"ICONOS DEL TENIS",words:["FEDERER","NADAL","SERENA","BORG"],color:"blue"},{name:"ICONOS DEL MOTOR",words:["SCHUMACHER","SENNA","ROSSI","HAMILTON"],color:"purple"}]},
{id:"tem-dep-73",tema:"Deportes",subtema:"Cristiano Ronaldo",categories:[{name:"CLUBES DE CR7",words:["SPORTING","UNITED","MADRID","JUVENTUS"],color:"yellow"},{name:"TROFEOS INDIVIDUALES",words:["BALON ORO","BOTA ORO","PICHICHI","MVP"],color:"green"},{name:"RIVALES DE SU ERA",words:["MESSI","NEYMAR","LEWANDOWSKI","BENZEMA"],color:"blue"},{name:"CELEBRACIONES Y APODOS",words:["SIUUU","BICHO","COMANDANTE","CR7"],color:"purple"}]},
{id:"tem-dep-74",tema:"Deportes",subtema:"Lionel Messi",categories:[{name:"CLUBES DE MESSI",words:["BARCELONA","PSG","INTER MIAMI","NEWELLS"],color:"yellow"},{name:"TITULOS CON ARGENTINA",words:["MUNDIAL","COPA AMERICA","FINALISSIMA","OLIMPICO"],color:"green"},{name:"COMPAÑEROS EN EL BARCA",words:["XAVI","INIESTA","SUAREZ","NEYMAR"],color:"blue"},{name:"APODOS DE LA PULGA",words:["PULGA","DIEZ","GOAT","LEO"],color:"purple"}]},
{id:"tem-dep-75",tema:"Deportes",subtema:"Clásico Español",categories:[{name:"JUGADORES DEL MADRID",words:["RAMOS","BENZEMA","MODRIC","VINICIUS"],color:"yellow"},{name:"JUGADORES DEL BARCA",words:["MESSI","BUSQUETS","PIQUE","PEDRI"],color:"green"},{name:"GOLES HISTORICOS",words:["MANITA","REMONTADA","ULTIMO MINUTO","HAT TRICK"],color:"blue"},{name:"ESCENARIOS DEL CLASICO",words:["BERNABEU","CAMP NOU","SUPERCOPA","WEMBLEY"],color:"purple"}]},
{id:"tem-dep-76",tema:"Deportes",subtema:"Entrenadores Míticos",categories:[{name:"TECNICOS ESPAÑOLES",words:["DEL BOSQUE","GUARDIOLA","LUIS ENRIQUE","SIMEONE"],color:"yellow"},{name:"TECNICOS EXTRANJEROS",words:["ANCELOTTI","MOURINHO","KLOPP","FERGUSON"],color:"green"},{name:"ESTILOS DE JUEGO",words:["TIKI TAKA","CATENACCIO","GEGENPRESSING","FUTBOL TOTAL"],color:"blue"},{name:"FILOSOFOS DEL BANQUILLO",words:["CRUYFF","SACCHI","BIELSA","MICHELS"],color:"purple"}]},
{id:"tem-dep-77",tema:"Deportes",subtema:"Goles Legendarios",categories:[{name:"TIPOS DE GOLAZO",words:["CHILENA","VASELINA","FALTA","VOLEA"],color:"yellow"},{name:"AUTORES DE GOLAZOS",words:["MARADONA","ZIDANE","ROBERTO CARLOS","RONALDINHO"],color:"green"},{name:"GOLES EN FINALES",words:["INIESTA","SERGIO RAMOS","GOTZE","MANDZUKIC"],color:"blue"},{name:"CELEBRACIONES ICONICAS",words:["ARBOL","CUNA","SALTO","BESO ESCUDO"],color:"purple"}]},
{id:"tem-dep-78",tema:"Deportes",subtema:"Fútbol Femenino",categories:[{name:"ESTRELLAS MUNDIALES",words:["PUTELLAS","BONMATI","MORGAN","MARTA"],color:"yellow"},{name:"SELECCIONES POTENTES",words:["ESPAÑA","EEUU","ALEMANIA","INGLATERRA"],color:"green"},{name:"CLUBES REFERENTES",words:["BARCELONA","LYON","WOLFSBURGO","CHELSEA"],color:"blue"},{name:"TITULOS DE ESPAÑA",words:["MUNDIAL","NATIONS LEAGUE","BALON ORO","CHAMPIONS"],color:"purple"}]},
{id:"tem-dep-79",tema:"Deportes",subtema:"Copa del Rey",categories:[{name:"GANADORES HABITUALES",words:["MADRID","BARCELONA","ATHLETIC","SEVILLA"],color:"yellow"},{name:"SORPRESAS COPERAS",words:["ALCORCON","ALAVES","MIRANDES","LEGANES"],color:"green"},{name:"FASES DEL TORNEO",words:["ELIMINATORIA","DIECISEISAVOS","SEMIFINAL","FINAL"],color:"blue"},{name:"ESCENARIOS DE FINAL",words:["CARTUJA","MESTALLA","VICENTE CALDERON","BERNABEU"],color:"purple"}]},
{id:"tem-dep-80",tema:"Deportes",subtema:"Fichajes Récord",categories:[{name:"FICHAJES CAROS",words:["NEYMAR","MBAPPE","DEMBELE","GRIEZMANN"],color:"yellow"},{name:"CLUBES COMPRADORES",words:["PSG","BARCELONA","MADRID","CITY"],color:"green"},{name:"TIPOS DE OPERACION",words:["TRASPASO","CESION","CLAUSULA","LIBRE"],color:"blue"},{name:"CONCEPTOS ECONOMICOS",words:["MILLONES","VARIABLES","PRIMA","SALARIO"],color:"purple"}]},
{id:"tem-dep-81",tema:"Deportes",subtema:"NBA Playoffs",categories:[{name:"RONDAS DE PLAYOFF",words:["PRIMERA","SEMIS","FINAL CONF","FINALES"],color:"yellow"},{name:"MVPS DE LAS FINALES",words:["JORDAN","DUNCAN","LEBRON","CURRY"],color:"green"},{name:"FRANQUICIAS GANADORAS",words:["LAKERS","CELTICS","BULLS","WARRIORS"],color:"blue"},{name:"MOMENTOS DE PLAYOFF",words:["FLU GAME","BLOCK","SHOT","BUZZER"],color:"purple"}]},
{id:"tem-dep-82",tema:"Deportes",subtema:"Draft y Jóvenes NBA",categories:[{name:"NUMEROS UNO DEL DRAFT",words:["LEBRON","DUNCAN","IVERSON","WEMBANYAMA"],color:"yellow"},{name:"JOVENES PROMESAS",words:["BANCHERO","HOLMGREN","EDWARDS","WAGNER"],color:"green"},{name:"UNIVERSIDADES CUNA",words:["DUKE","KENTUCKY","UCLA","NORTH CAROLINA"],color:"blue"},{name:"CONCEPTOS DEL DRAFT",words:["LOTERIA","PICK","ROOKIE","PROSPECTO"],color:"purple"}]},
{id:"tem-dep-83",tema:"Deportes",subtema:"Baloncesto Europeo",categories:[{name:"EUROLIGA CLUBES",words:["MADRID","BARCELONA","OLYMPIACOS","MACCABI"],color:"yellow"},{name:"SELECCIONES FUERTES",words:["ESPAÑA","FRANCIA","SERBIA","GRECIA"],color:"green"},{name:"ESTRELLAS DEL CONTINENTE",words:["DONCIC","GASOL","NOWITZKI","PARKER"],color:"blue"},{name:"COMPETICIONES",words:["EUROLIGA","EUROBASKET","EUROCUP","ACB"],color:"purple"}]},
{id:"tem-dep-84",tema:"Deportes",subtema:"Tenis Masculino Actual",categories:[{name:"NUEVA GENERACION",words:["ALCARAZ","SINNER","RUNE","MUSETTI"],color:"yellow"},{name:"VETERANOS EN ACTIVO",words:["DJOKOVIC","MURRAY","WAWRINKA","MONFILS"],color:"green"},{name:"MAESTROS ATP FINALS",words:["FEDERER","NADAL","LENDL","BECKER"],color:"blue"},{name:"SUPERFICIES Y TORNEOS",words:["INDIAN WELLS","MIAMI","MADRID","ROMA"],color:"purple"}]},
{id:"tem-dep-85",tema:"Deportes",subtema:"Grand Slam Femenino",categories:[{name:"CAMPEONAS MODERNAS",words:["SWIATEK","SABALENKA","GAUFF","RYBAKINA"],color:"yellow"},{name:"LEYENDAS DEL PASADO",words:["GRAF","SELES","HINGIS","CAPRIATI"],color:"green"},{name:"TORNEOS FEMENINOS",words:["WIMBLEDON","US OPEN","AUSTRALIA","ROLAND GARROS"],color:"blue"},{name:"NUMERO UNO HISTORICAS",words:["DAVENPORT","SERENA","HENIN","CLIJSTERS"],color:"purple"}]},
{id:"tem-dep-86",tema:"Deportes",subtema:"F1 Moderna",categories:[{name:"PILOTOS DE LA PARRILLA",words:["VERSTAPPEN","NORRIS","LECLERC","RUSSELL"],color:"yellow"},{name:"CAMPEONES RECIENTES",words:["HAMILTON","VETTEL","ROSBERG","RAIKKONEN"],color:"green"},{name:"CIRCUITOS NUEVOS",words:["MIAMI","YEDA","LAS VEGAS","QATAR"],color:"blue"},{name:"TECNOLOGIA DEL COCHE",words:["DRS","ERS","HALO","DIFUSOR"],color:"purple"}]},
{id:"tem-dep-87",tema:"Deportes",subtema:"Historia F1",categories:[{name:"CAMPEONES DE LOS 2000",words:["SCHUMACHER","ALONSO","RAIKKONEN","HAMILTON"],color:"yellow"},{name:"CAMPEONES DE LOS 90",words:["SENNA","PROST","MANSELL","HILL"],color:"green"},{name:"ESCUDERIAS DESAPARECIDAS",words:["LOTUS","BRABHAM","TYRRELL","JORDAN"],color:"blue"},{name:"CIRCUITOS CLASICOS",words:["MONZA","SPA","SILVERSTONE","MONACO"],color:"purple"}]},
{id:"tem-dep-88",tema:"Deportes",subtema:"Superbikes y Motos",categories:[{name:"PILOTOS DE SUPERBIKE",words:["REA","BAYLISS","BAUTISTA","EDWARDS"],color:"yellow"},{name:"MARCAS EN COMPETICION",words:["DUCATI","KAWASAKI","BMW","HONDA"],color:"green"},{name:"CIRCUITOS DE SBK",words:["ARAGON","IMOLA","PORTIMAO","ASSEN"],color:"blue"},{name:"PARTES DE LA MOTO",words:["CARENADO","MANILLAR","ESCAPE","BASCULANTE"],color:"purple"}]},
{id:"tem-dep-89",tema:"Deportes",subtema:"Grandes Rivalidades",categories:[{name:"RIVALIDADES DEL FUTBOL",words:["MESSI CRISTIANO","PELE MARADONA","MADRID BARCA","BOCA RIVER"],color:"yellow"},{name:"RIVALIDADES DEL TENIS",words:["FEDERER NADAL","BORG MCENROE","GRAF SELES","SAMPRAS AGASSI"],color:"green"},{name:"RIVALIDADES DEL MOTOR",words:["SENNA PROST","ROSSI MARQUEZ","HAMILTON VERSTAPPEN","LAUDA HUNT"],color:"blue"},{name:"RIVALIDADES DEL BASKET",words:["MAGIC BIRD","LAKERS CELTICS","JORDAN ISIAH","LEBRON CURRY"],color:"purple"}]},
{id:"tem-dep-90",tema:"Deportes",subtema:"Mundial de Clubes",categories:[{name:"GANADORES EUROPEOS",words:["MADRID","BARCELONA","BAYERN","LIVERPOOL"],color:"yellow"},{name:"GANADORES SUDAMERICANOS",words:["CORINTHIANS","INTERNACIONAL","SAO PAULO","RIVER"],color:"green"},{name:"CONTINENTES FIFA",words:["UEFA","CONMEBOL","CONCACAF","AFC"],color:"blue"},{name:"SEDES DEL TORNEO",words:["JAPON","MARRUECOS","EMIRATOS","QATAR"],color:"purple"}]},
{id:"tem-dep-91",tema:"Deportes",subtema:"Estrellas Emergentes",categories:[{name:"JOVENES DEL FUTBOL",words:["YAMAL","ENDRICK","GULER","WIRTZ"],color:"yellow"},{name:"JOVENES DEL BASKET",words:["WEMBANYAMA","EDWARDS","BANCHERO","HOLMGREN"],color:"green"},{name:"JOVENES DEL TENIS",words:["ALCARAZ","SINNER","RUNE","FONSECA"],color:"blue"},{name:"JOVENES DEL MOTOR",words:["PIASTRI","BEARMAN","ANTONELLI","ACOSTA"],color:"purple"}]},
{id:"tem-dep-92",tema:"Deportes",subtema:"Deporte y Cifras",categories:[{name:"NUMEROS MITICOS FUTBOL",words:["DIEZ","SIETE","NUEVE","UNO"],color:"yellow"},{name:"DORSALES DEL BASKET",words:["VEINTITRES","VEINTICUATRO","TREINTA","SEIS"],color:"green"},{name:"DISTANCIAS OLIMPICAS",words:["CIEN","MARATON","CUATROCIENTOS","RELEVO"],color:"blue"},{name:"PUNTUACIONES",words:["GOL","CANASTA","ENSAYO","PUNTO"],color:"purple"}]},
{id:"tem-dep-93",tema:"Deportes",subtema:"Estadios Emblemáticos",categories:[{name:"CATEDRALES DEL FUTBOL",words:["MARACANA","WEMBLEY","BERNABEU","CAMP NOU"],color:"yellow"},{name:"PABELLONES DE BASKET",words:["MADISON","STAPLES","PALAU","WIZINK"],color:"green"},{name:"CIRCUITOS COMO SEDE",words:["MONACO","MONZA","SILVERSTONE","SPA"],color:"blue"},{name:"RECINTOS OLIMPICOS",words:["NIDO","OLIMPICO","MONTJUIC","LUZHNIKI"],color:"purple"}]},
{id:"tem-dep-94",tema:"Deportes",subtema:"Copa Libertadores",categories:[{name:"REYES DE AMERICA",words:["INDEPENDIENTE","BOCA","PEÑAROL","RIVER"],color:"yellow"},{name:"CLUBES BRASILEÑOS",words:["FLAMENGO","SANTOS","GREMIO","PALMEIRAS"],color:"green"},{name:"IDOLOS DEL TORNEO",words:["RIQUELME","GALLARDO","PELE","BOCHINI"],color:"blue"},{name:"PAISES CAMPEONES",words:["ARGENTINA","BRASIL","URUGUAY","COLOMBIA"],color:"purple"}]},
{id:"tem-dep-95",tema:"Deportes",subtema:"Fútbol de Leyenda",categories:[{name:"MITOS EUROPEOS",words:["CRUYFF","BECKENBAUER","DI STEFANO","PUSKAS"],color:"yellow"},{name:"MITOS SUDAMERICANOS",words:["PELE","MARADONA","GARRINCHA","KEMPES"],color:"green"},{name:"GENIOS DEL REGATE",words:["BEST","RONALDINHO","STOICHKOV","ROMARIO"],color:"blue"},{name:"PIONEROS DEL GOL",words:["MULLER","EUSEBIO","ZARRA","CHARLTON"],color:"purple"}]},
{id:"tem-dep-96",tema:"Deportes",subtema:"Ciclismo Mundial",categories:[{name:"CAMPEONES DEL MUNDO",words:["VALVERDE","SAGAN","EVENEPOEL","ALAPHILIPPE"],color:"yellow"},{name:"PRUEBAS DEL CALENDARIO",words:["TOUR","GIRO","VUELTA","MUNDIAL"],color:"green"},{name:"MARCAS DE BICI",words:["PINARELLO","SPECIALIZED","TREK","COLNAGO"],color:"blue"},{name:"MODALIDADES CICLISTAS",words:["RUTA","PISTA","MONTAÑA","CICLOCROSS"],color:"purple"}]},
{id:"tem-dep-97",tema:"Deportes",subtema:"Real Madrid Champions",categories:[{name:"FINALES GANADAS",words:["LISBOA","MILAN","CARDIFF","KIEV"],color:"yellow"},{name:"GOLEADORES BLANCOS",words:["CRISTIANO","BENZEMA","RAUL","DI STEFANO"],color:"green"},{name:"HEROES DE LA DECIMA",words:["RAMOS","BALE","MARCELO","MODRIC"],color:"blue"},{name:"APODOS DEL TORNEO",words:["OREJONA","LA COPA","CHAMPIONS","EUROPA"],color:"purple"}]},
{id:"tem-dep-98",tema:"Deportes",subtema:"Barça de Guardiola",categories:[{name:"EL EQUIPO DEL SEXTETE",words:["VALDES","PUYOL","XAVI","MESSI"],color:"yellow"},{name:"FICHAJES DE PEP",words:["ALVES","IBRAHIMOVIC","VILLA","ALEXIS"],color:"green"},{name:"CONCEPTOS TACTICOS",words:["TIKI TAKA","FALSO NUEVE","PRESION","POSESION"],color:"blue"},{name:"TITULOS DE 2009",words:["LIGA","COPA","CHAMPIONS","SUPERCOPA"],color:"purple"}]},
{id:"tem-dep-99",tema:"Deportes",subtema:"Selección Argentina",categories:[{name:"CAMPEONES DE QATAR",words:["MESSI","DI MARIA","ALVAREZ","MARTINEZ"],color:"yellow"},{name:"LEYENDAS ALBICELESTES",words:["MARADONA","KEMPES","BATISTUTA","RIQUELME"],color:"green"},{name:"TITULOS RECIENTES",words:["MUNDIAL","COPA AMERICA","FINALISSIMA","SUB20"],color:"blue"},{name:"APODOS DE LA SELECCION",words:["ALBICELESTE","SCALONETA","PIBES","GAUCHOS"],color:"purple"}]},
{id:"tem-dep-100",tema:"Deportes",subtema:"Selección Brasileña",categories:[{name:"PENTACAMPEONES",words:["RONALDO","RIVALDO","RONALDINHO","CAFU"],color:"yellow"},{name:"CRACKS ACTUALES",words:["NEYMAR","VINICIUS","RODRYGO","RAPHINHA"],color:"green"},{name:"MITOS HISTORICOS",words:["PELE","GARRINCHA","ZICO","SOCRATES"],color:"blue"},{name:"APODOS VERDEAMARELOS",words:["CANARINHA","SCRATCH","SELECAO","VERDEAMARELA"],color:"purple"}]},
{id:"tem-dep-101",tema:"Deportes",subtema:"Villarreal y Sevilla",categories:[{name:"JUGADORES DEL SEVILLA",words:["RAKITIC","JESUS NAVAS","BANEGA","REYES"],color:"yellow"},{name:"TITULOS EUROPA LEAGUE",words:["SEVILLA","VILLARREAL","ATLETICO","VALENCIA"],color:"green"},{name:"ESTADIOS ANDALUCES",words:["PIZJUAN","CARTUJA","CERAMICA","VILLAMARIN"],color:"blue"},{name:"APODOS DE EQUIPO",words:["SUBMARINO","NERVIONENSE","GROGUET","HISPALENSE"],color:"purple"}]},
{id:"tem-dep-102",tema:"Deportes",subtema:"Athletic y Real Sociedad",categories:[{name:"CANTERA DEL ATHLETIC",words:["WILLIAMS","MUNIAIN","SUSAETA","LLORENTE"],color:"yellow"},{name:"REAL SOCIEDAD",words:["OYARZABAL","ODEGAARD","GRIEZMANN","XABI ALONSO"],color:"green"},{name:"ESTADIOS VASCOS",words:["SAN MAMES","ANOETA","IPURUA","MENDIZORROZA"],color:"blue"},{name:"FILOSOFIA Y DERBI",words:["CANTERA","EUSKADI","DERBI VASCO","LA CATEDRAL"],color:"purple"}]},
{id:"tem-dep-103",tema:"Deportes",subtema:"Kobe y los Lakers",categories:[{name:"COMPAÑEROS DE KOBE",words:["SHAQ","GASOL","ODOM","FISHER"],color:"yellow"},{name:"RIVALES DE KOBE",words:["DUNCAN","GARNETT","PIERCE","NASH"],color:"green"},{name:"NUMEROS Y LEGADO",words:["OCHO","VEINTICUATRO","MAMBA","LEYENDA"],color:"blue"},{name:"ANILLOS Y TITULOS",words:["CAMPEON","MVP","ALL STAR","ORO"],color:"purple"}]},
{id:"tem-dep-104",tema:"Deportes",subtema:"LeBron James",categories:[{name:"EQUIPOS DE LEBRON",words:["CAVALIERS","HEAT","LAKERS","CLEVELAND"],color:"yellow"},{name:"RIVALES DE SU ERA",words:["CURRY","DURANT","DUNCAN","LEONARD"],color:"green"},{name:"HITOS DE SU CARRERA",words:["MAXIMO ANOTADOR","MVP","BLOCK","THE DECISION"],color:"blue"},{name:"APODOS DEL REY",words:["KING","THE CHOSEN","AKRON","LBJ"],color:"purple"}]},
{id:"tem-dep-105",tema:"Deportes",subtema:"Michael Jordan",categories:[{name:"LOGROS DE JORDAN",words:["SEIS ANILLOS","MVP","DUNK","TITULO"],color:"yellow"},{name:"COMPAÑEROS BULLS",words:["PIPPEN","RODMAN","KERR","KUKOC"],color:"green"},{name:"RIVALES HISTORICOS",words:["MAGIC","BIRD","THOMAS","MALONE"],color:"blue"},{name:"MARCA Y LEGADO",words:["AIR","JUMPMAN","23","NIKE"],color:"purple"}]},
{id:"tem-dep-106",tema:"Deportes",subtema:"Nadal en Roland Garros",categories:[{name:"RIVALES EN PARIS",words:["FEDERER","DJOKOVIC","WAWRINKA","THIEM"],color:"yellow"},{name:"SUPERFICIE Y JUEGO",words:["TIERRA","ARCILLA","BOTE","TOPSPIN"],color:"green"},{name:"OTROS TITULOS DE RAFA",words:["WIMBLEDON","US OPEN","AUSTRALIA","OLIMPICO"],color:"blue"},{name:"APODOS DE NADAL",words:["RAFA","TORO","MANACOR","DECIMA"],color:"purple"}]},
{id:"tem-dep-107",tema:"Deportes",subtema:"Djokovic",categories:[{name:"LOGROS DE NOLE",words:["GRAND SLAM","NUMERO UNO","MASTERS","GOLDEN"],color:"yellow"},{name:"RIVALES DEL SERBIO",words:["FEDERER","NADAL","MURRAY","ALCARAZ"],color:"green"},{name:"TORNEOS DOMINADOS",words:["AUSTRALIA","WIMBLEDON","MIAMI","PARIS"],color:"blue"},{name:"APODOS Y ORIGEN",words:["NOLE","DJOKER","SERBIA","BELGRADO"],color:"purple"}]},
{id:"tem-dep-108",tema:"Deportes",subtema:"Verstappen y Red Bull",categories:[{name:"COMPAÑEROS Y RIVALES",words:["PEREZ","HAMILTON","LECLERC","NORRIS"],color:"yellow"},{name:"CIRCUITOS DE VICTORIA",words:["SPA","MONACO","SUZUKA","AUSTIN"],color:"green"},{name:"EQUIPO RED BULL",words:["HORNER","NEWEY","MARKO","HONDA"],color:"blue"},{name:"TITULOS Y RECORDS",words:["CAMPEON","POLE","VUELTA RAPIDA","PODIO"],color:"purple"}]},
{id:"tem-dep-109",tema:"Deportes",subtema:"Hamilton y Mercedes",categories:[{name:"LOGROS DE LEWIS",words:["SIETE TITULOS","POLE RECORD","VICTORIAS","MVP"],color:"yellow"},{name:"RIVALES DE HAMILTON",words:["ROSBERG","VETTEL","VERSTAPPEN","ALONSO"],color:"green"},{name:"ESCUDERIAS DE LEWIS",words:["MCLAREN","MERCEDES","FERRARI","PLATA"],color:"blue"},{name:"CIRCUITOS FAVORITOS",words:["SILVERSTONE","HUNGARORING","MONTREAL","SHANGHAI"],color:"purple"}]},
{id:"tem-dep-110",tema:"Deportes",subtema:"Marc Márquez",categories:[{name:"RIVALES DE MARC",words:["ROSSI","LORENZO","PEDROSA","BAGNAIA"],color:"yellow"},{name:"MARCAS Y MOTOS",words:["HONDA","DUCATI","REPSOL","GRESINI"],color:"green"},{name:"CIRCUITOS DE MOTOGP",words:["JEREZ","MUGELLO","ASSEN","SACHSENRING"],color:"blue"},{name:"NUMERO Y APODOS",words:["93","CABROTO","TIBURON","CERVERA"],color:"purple"}]},
{id:"tem-dep-111",tema:"Deportes",subtema:"Valentino Rossi",categories:[{name:"MARCAS DE ROSSI",words:["HONDA","YAMAHA","DUCATI","APRILIA"],color:"yellow"},{name:"RIVALES DEL DOCTOR",words:["BIAGGI","GIBERNAU","LORENZO","STONER"],color:"green"},{name:"SIMBOLOS DE VR46",words:["46","DOCTOR","SOL Y LUNA","TAVULLIA"],color:"blue"},{name:"CATEGORIAS QUE GANO",words:["125","250","500","MOTOGP"],color:"purple"}]},
{id:"tem-dep-112",tema:"Deportes",subtema:"Induráin y el Ciclismo",categories:[{name:"GESTAS DE MIGUEL",words:["CINCO TOURS","GIRO","HORA","CONTRARRELOJ"],color:"yellow"},{name:"RIVALES DE INDURAIN",words:["ROMINGER","CHIAPPUCCI","BUGNO","ZULLE"],color:"green"},{name:"EQUIPOS Y ORIGEN",words:["BANESTO","NAVARRA","VILLAVA","REYNOLDS"],color:"blue"},{name:"OTROS TOUR ESPAÑOLES",words:["BAHAMONTES","OCAÑA","PERICO","CONTADOR"],color:"purple"}]},
{id:"tem-dep-113",tema:"Deportes",subtema:"Fórmula 1 Circuitos 2",categories:[{name:"CIRCUITOS DE ASIA",words:["SUZUKA","SINGAPUR","SHANGHAI","YEDA"],color:"yellow"},{name:"CIRCUITOS DE AMERICA",words:["AUSTIN","MEXICO","MIAMI","INTERLAGOS"],color:"green"},{name:"CIRCUITOS DE EUROPA",words:["IMOLA","BARCELONA","ZANDVOORT","SPIELBERG"],color:"blue"},{name:"CIRCUITOS DESAPARECIDOS",words:["HOCKENHEIM","NURBURGRING","MAGNY COURS","ESTORIL"],color:"purple"}]},
{id:"tem-dep-114",tema:"Deportes",subtema:"Golf de Leyenda",categories:[{name:"GRANDES DE AMERICA",words:["WOODS","NICKLAUS","PALMER","HOGAN"],color:"yellow"},{name:"GRANDES DE EUROPA",words:["BALLESTEROS","FALDO","OLAZABAL","WOOSNAM"],color:"green"},{name:"JUGADORES ACTUALES",words:["RAHM","MCILROY","SCHEFFLER","SPIETH"],color:"blue"},{name:"TERRENOS DEL CAMPO",words:["GREEN","FAIRWAY","BUNKER","ROUGH"],color:"purple"}]},
{id:"tem-dep-115",tema:"Deportes",subtema:"Natación de Élite",categories:[{name:"ESTILOS DE COMPETICION",words:["LIBRE","ESPALDA","BRAZA","MARIPOSA"],color:"yellow"},{name:"RECORD MUNDIAL HOMBRES",words:["PHELPS","POPOV","BIONDI","THORPE"],color:"green"},{name:"NADADORAS DE ORO",words:["LEDECKY","FRANKLIN","HOSSZU","CAMPBELL"],color:"blue"},{name:"PRUEBAS DE VELOCIDAD",words:["CINCUENTA","CIEN","ESPRINT","VIRAJE"],color:"purple"}]},
{id:"tem-dep-116",tema:"Deportes",subtema:"Everest y Ochomiles",categories:[{name:"OCHOMILES DE NEPAL",words:["EVEREST","LHOTSE","MAKALU","MANASLU"],color:"yellow"},{name:"OCHOMILES DE PAKISTAN",words:["K2","NANGA PARBAT","BROAD PEAK","GASHERBRUM"],color:"green"},{name:"PRIMEROS EN LA CUMBRE",words:["HILLARY","TENZING","MESSNER","HABELER"],color:"blue"},{name:"RUTAS Y CAMPAMENTOS",words:["ARISTA","COLLADO","BASE","ALTURA"],color:"purple"}]},
{id:"tem-dep-117",tema:"Deportes",subtema:"Atletas Olímpicos",categories:[{name:"VELOCISTAS DE ORO",words:["BOLT","OWENS","LEWIS","JOHNSON"],color:"yellow"},{name:"GIMNASTAS LEGENDARIAS",words:["COMANECI","BILES","LATYNINA","KORBUT"],color:"green"},{name:"FONDISTAS MITICOS",words:["GEBRESELASSIE","BEKELE","FARAH","KIPCHOGE"],color:"blue"},{name:"SALTADORES Y LANZADORES",words:["BEAMON","BUBKA","SOTOMAYOR","EDWARDS"],color:"purple"}]},
{id:"tem-dep-118",tema:"Deportes",subtema:"Tenis Dobles y Mixto",categories:[{name:"PAREJAS FAMOSAS",words:["BRYAN","WOODBRIDGE","GRANOLLERS","CABAL"],color:"yellow"},{name:"SUPERFICIES DE JUEGO",words:["TIERRA","HIERBA","DURA","MOQUETA"],color:"green"},{name:"GOLPES DE DOBLES",words:["VOLEA","SAQUE","GLOBO","REMATE"],color:"blue"},{name:"ZONAS DE LA PISTA",words:["RED","FONDO","PASILLO","ANCHO"],color:"purple"}]},
{id:"tem-dep-119",tema:"Deportes",subtema:"Deporte Español Glorioso",categories:[{name:"CAMPEONES DEL MOTOR",words:["ALONSO","MARQUEZ","LORENZO","SAINZ"],color:"yellow"},{name:"CAMPEONES DE RAQUETA",words:["NADAL","ALCARAZ","MUGURUZA","FERRERO"],color:"green"},{name:"CAMPEONES DE EQUIPO",words:["ROJA","ÑBA","HISPANOS","GUERRERAS"],color:"blue"},{name:"CAMPEONES INDIVIDUALES",words:["GASOL","INDURAIN","BALLESTEROS","POU"],color:"purple"}]},
{id:"tem-dep-120",tema:"Deportes",subtema:"Grandes Campeones",categories:[{name:"CAMPEONES DEL FUTBOL",words:["MESSI","MARADONA","PELE","BECKENBAUER"],color:"yellow"},{name:"CAMPEONES DEL TENIS",words:["FEDERER","NADAL","DJOKOVIC","GRAF"],color:"green"},{name:"CAMPEONES DEL MOTOR",words:["SCHUMACHER","HAMILTON","ROSSI","MARQUEZ"],color:"blue"},{name:"CAMPEONES DE LEYENDA",words:["JORDAN","PHELPS","BOLT","ALI"],color:"purple"}]},
{id:"tem-dep-121",tema:"Deportes",subtema:"Campeones de LaLiga",categories:[{name:"CAMPEONES HISTORICOS",words:["ATHLETIC","VALENCIA","REAL SOCIEDAD","DEPORTIVO"],color:"yellow"},{name:"IDOLOS DE ESOS CLUBES",words:["ZARRA","MENDIETA","ARCONADA","BEBETO"],color:"green"},{name:"CIUDADES CON TITULO",words:["BILBAO","SAN SEBASTIAN","LA CORUÑA","SEVILLA"],color:"blue"},{name:"APODOS DE CAMPEONES",words:["LEONES","CHE","TXURI URDIN","DEPOR"],color:"purple"}]},
{id:"tem-dep-122",tema:"Deportes",subtema:"LaLiga de los 2000",categories:[{name:"EL DEPOR CAMPEON",words:["IRURETA","MAKAAY","VALERON","TRISTAN"],color:"yellow"},{name:"VALENCIA DE BENITEZ",words:["BENITEZ","AIMAR","BARAJA","AYALA"],color:"green"},{name:"AÑOS DE TITULO SORPRESA",words:["2000","2002","2004","1981"],color:"blue"},{name:"ESTADIOS CAMPEONES",words:["RIAZOR","MESTALLA","ATOCHA","SAN MAMES"],color:"purple"}]},
{id:"tem-dep-123",tema:"Deportes",subtema:"Historia de LaLiga",categories:[{name:"PICHICHIS HISTORICOS",words:["ZARRA","QUINI","HUGO SANCHEZ","PAHIÑO"],color:"yellow"},{name:"ENTRENADORES CAMPEONES",words:["IRURETA","ARAGONES","ANTIC","CLEMENTE"],color:"green"},{name:"CLUBES CENTENARIOS",words:["ATHLETIC","BARCELONA","MADRID","ESPANYOL"],color:"blue"},{name:"PREMIOS DE LA LIGA",words:["PICHICHI","ZAMORA","BALON","GUANTE"],color:"purple"}]},
{id:"tem-his-1",tema:"Historia",subtema:"Imperio Romano",categories:[{name:"EMPERADORES",words:["AUGUSTO","NERON","TRAJANO","ADRIANO"],color:"yellow"},{name:"DIOSES ROMANOS",words:["JUPITER","MARTE","VENUS","NEPTUNO"],color:"green"},{name:"CIUDADES DEL IMPERIO",words:["ROMA","POMPEYA","CARTAGO","ALEJANDRIA"],color:"blue"},{name:"TERMINOS MILITARES",words:["LEGION","CENTURION","GLADIO","FALANGE"],color:"purple"}]},
{id:"tem-his-2",tema:"Historia",subtema:"Antiguo Egipto",categories:[{name:"FARAONES",words:["RAMSES","TUTANKAMON","KEOPS","AKENATON"],color:"yellow"},{name:"DIOSES EGIPCIOS",words:["RA","OSIRIS","ANUBIS","HORUS"],color:"green"},{name:"MONUMENTOS",words:["PIRAMIDE","ESFINGE","TEMPLO","OBELISCO"],color:"blue"},{name:"ELEMENTOS DEL NILO",words:["PAPIRO","CROCODILO","LOTO","CRECIDA"],color:"purple"}]},
{id:"tem-his-3",tema:"Historia",subtema:"Grecia Antigua",categories:[{name:"FILOSOFOS",words:["SOCRATES","PLATON","ARISTOTELES","EPICURO"],color:"yellow"},{name:"CIUDADES ESTADO",words:["ATENAS","ESPARTA","TEBAS","CORINTO"],color:"green"},{name:"DIOSES DEL OLIMPO",words:["ZEUS","HERA","APOLO","ATENEA"],color:"blue"},{name:"CONCEPTOS GRIEGOS",words:["DEMOCRACIA","AGORA","POLIS","FILOSOFIA"],color:"purple"}]},
{id:"tem-his-4",tema:"Historia",subtema:"Edad Media",categories:[{name:"CLASES SOCIALES",words:["REY","NOBLE","VASALLO","SIERVO"],color:"yellow"},{name:"CONSTRUCCIONES",words:["CASTILLO","MURALLA","CATEDRAL","MONASTERIO"],color:"green"},{name:"OFICIOS MEDIEVALES",words:["HERRERO","JUGLAR","MONJE","ESCUDERO"],color:"blue"},{name:"TERMINOS FEUDALES",words:["FEUDO","GREMIO","DIEZMO","CRUZADA"],color:"purple"}]},
{id:"tem-his-5",tema:"Historia",subtema:"Descubrimiento de América",categories:[{name:"EXPLORADORES",words:["COLON","MAGALLANES","PIZARRO","CORTES"],color:"yellow"},{name:"LAS TRES CARABELAS",words:["PINTA","NIÑA","SANTA MARIA","CARABELA"],color:"green"},{name:"CIVILIZACIONES",words:["AZTECA","INCA","MAYA","OLMECA"],color:"blue"},{name:"REYES CATOLICOS",words:["ISABEL","FERNANDO","CASTILLA","ARAGON"],color:"purple"}]},
{id:"tem-his-6",tema:"Historia",subtema:"Revolución Francesa",categories:[{name:"FIGURAS CLAVE",words:["ROBESPIERRE","DANTON","MARAT","NAPOLEON"],color:"yellow"},{name:"SIMBOLOS",words:["BASTILLA","GUILLOTINA","BANDERA","MARSELLESA"],color:"green"},{name:"LEMAS Y IDEAS",words:["LIBERTAD","IGUALDAD","FRATERNIDAD","REPUBLICA"],color:"blue"},{name:"GRUPOS POLITICOS",words:["JACOBINOS","GIRONDINOS","REALISTAS","SANSCULOTTES"],color:"purple"}]},
{id:"tem-his-7",tema:"Historia",subtema:"Segunda Guerra Mundial",categories:[{name:"LIDERES",words:["CHURCHILL","ROOSEVELT","STALIN","HITLER"],color:"yellow"},{name:"PAISES ALIADOS",words:["INGLATERRA","EEUU","URSS","FRANCIA"],color:"green"},{name:"BATALLAS Y LUGARES",words:["NORMANDIA","STALINGRADO","PEARL HARBOR","BERLIN"],color:"blue"},{name:"TERMINOS BELICOS",words:["BLITZKRIEG","DESEMBARCO","RESISTENCIA","ARMISTICIO"],color:"purple"}]},
{id:"tem-his-8",tema:"Historia",subtema:"Civilizaciones Antiguas",categories:[{name:"MESOPOTAMIA",words:["SUMERIA","BABILONIA","ASIRIA","UR"],color:"yellow"},{name:"INVENTOS ANTIGUOS",words:["RUEDA","ESCRITURA","ARADO","CALENDARIO"],color:"green"},{name:"RIOS HISTORICOS",words:["NILO","TIGRIS","EUFRATES","INDO"],color:"blue"},{name:"MARAVILLAS ANTIGUAS",words:["COLOSO","FARO","JARDINES","MAUSOLEO"],color:"purple"}]},
{id:"tem-his-9",tema:"Historia",subtema:"Los Vikingos",categories:[{name:"DIOSES NORDICOS",words:["ODIN","THOR","LOKI","FREYA"],color:"yellow"},{name:"ELEMENTOS VIKINGOS",words:["DRAKKAR","RUNA","HACHA","ESCUDO"],color:"green"},{name:"TERRITORIOS",words:["NORUEGA","GROENLANDIA","ISLANDIA","VINLAND"],color:"blue"},{name:"CONCEPTOS NORDICOS",words:["VALHALLA","SAGA","BERSERKER","RAGNAROK"],color:"purple"}]},
{id:"tem-his-10",tema:"Historia",subtema:"El Imperio Español",categories:[{name:"REYES DE ESPAÑA",words:["CARLOS I","FELIPE II","FELIPE III","FELIPE IV"],color:"yellow"},{name:"TERRITORIOS",words:["FLANDES","NAPOLES","PERU","MEXICO"],color:"green"},{name:"BATALLAS NAVALES",words:["LEPANTO","ARMADA","TRAFALGAR","GRAVELINAS"],color:"blue"},{name:"CONCEPTOS DEL SIGLO ORO",words:["TERCIOS","VIRREINATO","GALEON","CONQUISTA"],color:"purple"}]},
{id:"tem-his-11",tema:"Historia",subtema:"Mesoamérica",categories:[{name:"PUEBLOS",words:["AZTECAS","MAYAS","TOLTECAS","ZAPOTECAS"],color:"yellow"},{name:"CIUDADES ANTIGUAS",words:["TENOCHTITLAN","TIKAL","PALENQUE","TEOTIHUACAN"],color:"green"},{name:"DIOSES",words:["QUETZALCOATL","TLALOC","KUKULCAN","HUITZILOPOCHTLI"],color:"blue"},{name:"CULTIVOS Y ALIMENTOS",words:["MAIZ","CACAO","CHILE","FRIJOL"],color:"purple"}]},
{id:"tem-his-12",tema:"Historia",subtema:"La Guerra Fría",categories:[{name:"BLOQUES Y PAISES",words:["EEUU","URSS","CUBA","CHINA"],color:"yellow"},{name:"SIMBOLOS",words:["MURO","TELON","MISIL","SATELITE"],color:"green"},{name:"CONFLICTOS Y CRISIS",words:["VIETNAM","COREA","BERLIN","CARIBE"],color:"blue"},{name:"CONCEPTOS",words:["COMUNISMO","CAPITALISMO","ESPIONAJE","CARRERA"],color:"purple"}]},
{id:"tem-his-13",tema:"Historia",subtema:"El Renacimiento",categories:[{name:"ARTISTAS",words:["LEONARDO","MIGUEL ANGEL","RAFAEL","BOTICELLI"],color:"yellow"},{name:"CIUDADES ITALIANAS",words:["FLORENCIA","VENECIA","ROMA","MILAN"],color:"green"},{name:"MECENAS E IDEAS",words:["MEDICIS","HUMANISMO","IMPRENTA","PERSPECTIVA"],color:"blue"},{name:"INVENTOS Y AVANCES",words:["BRUJULA","TELESCOPIO","ANATOMIA","CARTOGRAFIA"],color:"purple"}]},
{id:"tem-his-14",tema:"Historia",subtema:"Antigua China",categories:[{name:"DINASTIAS",words:["MING","HAN","QING","TANG"],color:"yellow"},{name:"INVENTOS CHINOS",words:["POLVORA","PAPEL","BRUJULA","SEDA"],color:"green"},{name:"CONSTRUCCIONES",words:["MURALLA","PAGODA","PALACIO","CANAL"],color:"blue"},{name:"FILOSOFIA Y CULTURA",words:["CONFUCIO","TAO","MANDARIN","DRAGON"],color:"purple"}]},
{id:"tem-his-15",tema:"Historia",subtema:"La Independencia Americana",categories:[{name:"LIBERTADORES",words:["BOLIVAR","SAN MARTIN","SUCRE","OHIGGINS"],color:"yellow"},{name:"PAISES LIBERADOS",words:["COLOMBIA","PERU","CHILE","VENEZUELA"],color:"green"},{name:"BATALLAS",words:["AYACUCHO","BOYACA","CHACABUCO","CARABOBO"],color:"blue"},{name:"CONCEPTOS",words:["EMANCIPACION","CRIOLLO","VIRREINATO","REPUBLICA"],color:"purple"}]},
{id:"tem-his-16",tema:"Historia",subtema:"El Antiguo Oeste",categories:[{name:"FIGURAS DEL OESTE",words:["SHERIFF","VAQUERO","FORAJIDO","PISTOLERO"],color:"yellow"},{name:"ELEMENTOS",words:["REVOLVER","LAZO","ESPUELA","CANTIMPLORA"],color:"green"},{name:"LUGARES",words:["SALOON","RANCHO","PRADERA","CANON"],color:"blue"},{name:"PUEBLOS NATIVOS",words:["APACHE","SIOUX","COMANCHE","CHEROKEE"],color:"purple"}]},
{id:"tem-his-17",tema:"Historia",subtema:"La Revolución Industrial",categories:[{name:"INVENTOS",words:["MAQUINA VAPOR","TELAR","LOCOMOTORA","TELEGRAFO"],color:"yellow"},{name:"INVENTORES",words:["WATT","STEPHENSON","EDISON","BELL"],color:"green"},{name:"MATERIALES Y ENERGIA",words:["CARBON","HIERRO","ACERO","VAPOR"],color:"blue"},{name:"CONCEPTOS SOCIALES",words:["FABRICA","OBRERO","SINDICATO","BURGUESIA"],color:"purple"}]},
{id:"tem-his-18",tema:"Historia",subtema:"El Imperio Bizantino",categories:[{name:"EMPERADORES",words:["JUSTINIANO","CONSTANTINO","TEODOSIO","HERACLIO"],color:"yellow"},{name:"ELEMENTOS BIZANTINOS",words:["ICONO","MOSAICO","CUPULA","BASILICA"],color:"green"},{name:"CONSTANTINOPLA",words:["BOSFORO","MURALLA","HIPODROMO","PUERTO"],color:"blue"},{name:"CONCEPTOS",words:["ORTODOXIA","CISMA","CODIGO","IMPERIO"],color:"purple"}]},
{id:"tem-his-19",tema:"Historia",subtema:"Exploradores y Viajeros",categories:[{name:"EXPLORADORES",words:["MARCO POLO","VASCO DE GAMA","MAGALLANES","COOK"],color:"yellow"},{name:"RUTAS Y MARES",words:["SEDA","ESPECIAS","INDICO","PACIFICO"],color:"green"},{name:"INSTRUMENTOS",words:["BRUJULA","ASTROLABIO","SEXTANTE","MAPA"],color:"blue"},{name:"DESTINOS",words:["CATAY","CIPANGO","INDIAS","ESPECIERIA"],color:"purple"}]},
{id:"tem-his-20",tema:"Historia",subtema:"La Prehistoria",categories:[{name:"PERIODOS",words:["PALEOLITICO","NEOLITICO","EDAD BRONCE","EDAD HIERRO"],color:"yellow"},{name:"HERRAMIENTAS",words:["HACHA","LANZA","ARCO","PROPULSOR"],color:"green"},{name:"HOMINIDOS",words:["NEANDERTAL","SAPIENS","ERECTUS","HABILIS"],color:"blue"},{name:"MANIFESTACIONES",words:["PINTURA","MENHIR","DOLMEN","FUEGO"],color:"purple"}]},
{id:"tem-lit-1",tema:"Literatura",subtema:"Cervantes y el Quijote",categories:[{name:"PERSONAJES",words:["QUIJOTE","SANCHO","DULCINEA","ROCINANTE"],color:"yellow"},{name:"LUGARES",words:["MANCHA","TOBOSO","VENTA","MOLINOS"],color:"green"},{name:"OTRAS OBRAS DE CERVANTES",words:["GALATEA","PERSILES","RINCONETE","NOVELAS"],color:"blue"},{name:"TEMAS DE LA OBRA",words:["LOCURA","CABALLERIA","AVENTURA","IDEAL"],color:"purple"}]},
{id:"tem-lit-2",tema:"Literatura",subtema:"Poesía Española",categories:[{name:"POETAS DEL 27",words:["LORCA","ALBERTI","CERNUDA","ALEIXANDRE"],color:"yellow"},{name:"POETAS CLASICOS",words:["GONGORA","QUEVEDO","GARCILASO","BECQUER"],color:"green"},{name:"TIPOS DE ESTROFA",words:["SONETO","ROMANCE","TERCETO","CUARTETO"],color:"blue"},{name:"RECURSOS POETICOS",words:["METAFORA","RIMA","VERSO","METRICA"],color:"purple"}]},
{id:"tem-lit-3",tema:"Literatura",subtema:"Shakespeare",categories:[{name:"TRAGEDIAS",words:["HAMLET","MACBETH","OTELO","LEAR"],color:"yellow"},{name:"PERSONAJES",words:["ROMEO","JULIETA","YAGO","OFELIA"],color:"green"},{name:"COMEDIAS",words:["SUEÑO","TEMPESTAD","VENECIA","FIERECILLA"],color:"blue"},{name:"TEMAS",words:["AMOR","VENGANZA","PODER","CELOS"],color:"purple"}]},
{id:"tem-lit-4",tema:"Literatura",subtema:"Literatura Latinoamericana",categories:[{name:"AUTORES",words:["GARCIA MARQUEZ","BORGES","CORTAZAR","NERUDA"],color:"yellow"},{name:"OBRAS",words:["RAYUELA","ALEPH","AMOR","SOLEDAD"],color:"green"},{name:"NOBEL DE LITERATURA",words:["ASTURIAS","PAZ","VARGAS LLOSA","MISTRAL"],color:"blue"},{name:"CONCEPTOS",words:["REALISMO","MACONDO","BOOM","FANTASTICO"],color:"purple"}]},
{id:"tem-lit-5",tema:"Literatura",subtema:"Mitología Griega",categories:[{name:"HEROES",words:["AQUILES","ULISES","HERCULES","PERSEO"],color:"yellow"},{name:"CRIATURAS",words:["MINOTAURO","MEDUSA","CENTAURO","CICLOPE"],color:"green"},{name:"OBRAS DE HOMERO",words:["ILIADA","ODISEA","TROYA","ITACA"],color:"blue"},{name:"LUGARES MITICOS",words:["OLIMPO","HADES","ATLANTIDA","ARGOS"],color:"purple"}]},
{id:"tem-lit-6",tema:"Literatura",subtema:"Novela de Aventuras",categories:[{name:"AUTORES",words:["VERNE","STEVENSON","SALGARI","DEFOE"],color:"yellow"},{name:"OBRAS DE VERNE",words:["NAUTILUS","VIAJE LUNA","MILLAS","GLOBO"],color:"green"},{name:"PERSONAJES",words:["NEMO","CRUSOE","SANDOKAN","FOGG"],color:"blue"},{name:"ESCENARIOS",words:["ISLA","OCEANO","JUNGLA","ABISMO"],color:"purple"}]},
{id:"tem-lit-7",tema:"Literatura",subtema:"Terror y Misterio",categories:[{name:"AUTORES",words:["POE","LOVECRAFT","STOKER","SHELLEY"],color:"yellow"},{name:"CRIATURAS",words:["DRACULA","FRANKENSTEIN","MOMIA","FANTASMA"],color:"green"},{name:"DETECTIVES",words:["HOLMES","POIROT","MARPLE","DUPIN"],color:"blue"},{name:"AMBIENTES",words:["CASTILLO","NIEBLA","CRIPTA","CEMENTERIO"],color:"purple"}]},
{id:"tem-lit-8",tema:"Literatura",subtema:"Teatro Clásico Español",categories:[{name:"DRAMATURGOS",words:["LOPE","CALDERON","TIRSO","MORETO"],color:"yellow"},{name:"OBRAS FAMOSAS",words:["FUENTEOVEJUNA","VIDA SUEÑO","BURLADOR","PERIBAÑEZ"],color:"green"},{name:"PERSONAJES TIPO",words:["GALAN","DAMA","GRACIOSO","BARBA"],color:"blue"},{name:"CONCEPTOS TEATRALES",words:["HONOR","COMEDIA","ENTREMES","CORRAL"],color:"purple"}]},
{id:"tem-lit-9",tema:"Literatura",subtema:"Cuentos de Hadas",categories:[{name:"AUTORES",words:["PERRAULT","ANDERSEN","GRIMM","HOFFMANN"],color:"yellow"},{name:"PROTAGONISTAS",words:["CENICIENTA","BLANCANIEVES","PULGARCITO","CAPERUCITA"],color:"green"},{name:"ELEMENTOS MAGICOS",words:["VARITA","ESPEJO","MANZANA","ZAPATO"],color:"blue"},{name:"PERSONAJES",words:["BRUJA","HADA","PRINCIPE","OGRO"],color:"purple"}]},
{id:"tem-lit-10",tema:"Literatura",subtema:"Generación del 98",categories:[{name:"AUTORES",words:["UNAMUNO","MACHADO","BAROJA","AZORIN"],color:"yellow"},{name:"OBRAS",words:["NIEBLA","CAMPOS","ARBOL","VOLUNTAD"],color:"green"},{name:"TEMAS",words:["ESPAÑA","CASTILLA","PAISAJE","EXISTENCIA"],color:"blue"},{name:"CONCEPTOS",words:["REGENERACION","PESIMISMO","INTRAHISTORIA","MODERNISMO"],color:"purple"}]},
{id:"tem-lit-11",tema:"Literatura",subtema:"Novela Rusa",categories:[{name:"AUTORES",words:["TOLSTOI","DOSTOIEVSKI","CHEJOV","GOGOL"],color:"yellow"},{name:"OBRAS",words:["GUERRA PAZ","KARAMAZOV","KARENINA","CRIMEN"],color:"green"},{name:"TEMAS",words:["CULPA","REDENCION","ALMA","DESTINO"],color:"blue"},{name:"ESCENARIOS",words:["MOSCU","SIBERIA","ESTEPA","PETERSBURGO"],color:"purple"}]},
{id:"tem-lit-12",tema:"Literatura",subtema:"Ciencia Ficción",categories:[{name:"AUTORES",words:["ASIMOV","BRADBURY","CLARKE","DICK"],color:"yellow"},{name:"CONCEPTOS",words:["ROBOT","GALAXIA","ANDROIDE","DISTOPIA"],color:"green"},{name:"OBRAS",words:["FUNDACION","CRONICAS","ODISEA","FAHRENHEIT"],color:"blue"},{name:"TEMAS",words:["FUTURO","TECNOLOGIA","ESPACIO","TIEMPO"],color:"purple"}]},
{id:"tem-lit-13",tema:"Literatura",subtema:"Poesía Universal",categories:[{name:"POETAS",words:["WHITMAN","BAUDELAIRE","RIMBAUD","PESSOA"],color:"yellow"},{name:"MOVIMIENTOS",words:["ROMANTICISMO","SIMBOLISMO","VANGUARDIA","PARNASO"],color:"green"},{name:"FORMAS",words:["ODA","ELEGIA","HAIKU","EGLOGA"],color:"blue"},{name:"TEMAS POETICOS",words:["AMOR","MUERTE","NATURALEZA","TIEMPO"],color:"purple"}]},
{id:"tem-lit-14",tema:"Literatura",subtema:"Realismo del Siglo XIX",categories:[{name:"AUTORES ESPAÑOLES",words:["GALDOS","CLARIN","PARDO BAZAN","VALERA"],color:"yellow"},{name:"AUTORES EUROPEOS",words:["BALZAC","FLAUBERT","DICKENS","ZOLA"],color:"green"},{name:"OBRAS",words:["FORTUNATA","REGENTA","BOVARY","PEPITA"],color:"blue"},{name:"CARACTERISTICAS",words:["OBSERVACION","SOCIEDAD","DETALLE","VEROSIMIL"],color:"purple"}]},
{id:"tem-lit-15",tema:"Literatura",subtema:"Fábulas y Moralejas",categories:[{name:"FABULISTAS",words:["ESOPO","SAMANIEGO","IRIARTE","LAFONTAINE"],color:"yellow"},{name:"ANIMALES PROTAGONISTAS",words:["ZORRA","CUERVO","LIEBRE","TORTUGA"],color:"green"},{name:"FABULAS FAMOSAS",words:["CIGARRA","LOBO","RATON","LEON"],color:"blue"},{name:"CONCEPTOS",words:["MORALEJA","ENSEÑANZA","VIRTUD","VICIO"],color:"purple"}]},
{id:"tem-lit-16",tema:"Literatura",subtema:"Literatura Épica",categories:[{name:"POEMAS EPICOS",words:["ILIADA","ODISEA","ENEIDA","CANTAR MIO CID"],color:"yellow"},{name:"HEROES EPICOS",words:["AQUILES","ENEAS","ROLDAN","BEOWULF"],color:"green"},{name:"ELEMENTOS",words:["GESTA","BATALLA","HONOR","DESTINO"],color:"blue"},{name:"AUTORES",words:["HOMERO","VIRGILIO","DANTE","MILTON"],color:"purple"}]},
{id:"tem-lit-17",tema:"Literatura",subtema:"Romanticismo",categories:[{name:"AUTORES ESPAÑOLES",words:["ESPRONCEDA","BECQUER","ZORRILLA","LARRA"],color:"yellow"},{name:"AUTORES EUROPEOS",words:["BYRON","GOETHE","HUGO","KEATS"],color:"green"},{name:"OBRAS",words:["RIMAS","TENORIO","FAUSTO","MISERABLES"],color:"blue"},{name:"TEMAS ROMANTICOS",words:["PASION","LIBERTAD","NOCHE","REBELDIA"],color:"purple"}]},
{id:"tem-lit-18",tema:"Literatura",subtema:"Novela Negra",categories:[{name:"AUTORES",words:["CHANDLER","HAMMETT","SIMENON","HIGHSMITH"],color:"yellow"},{name:"DETECTIVES",words:["MARLOWE","MAIGRET","SPADE","RIPLEY"],color:"green"},{name:"ELEMENTOS",words:["CRIMEN","PISTA","COARTADA","SOSPECHOSO"],color:"blue"},{name:"AMBIENTES",words:["CIUDAD","CALLEJON","BAR","COMISARIA"],color:"purple"}]},
{id:"tem-lit-19",tema:"Literatura",subtema:"Premios Nobel Hispanos",categories:[{name:"ESPAÑOLES",words:["CELA","ECHEGARAY","JIMENEZ","BENAVENTE"],color:"yellow"},{name:"LATINOAMERICANOS",words:["NERUDA","MISTRAL","PAZ","ASTURIAS"],color:"green"},{name:"OBRAS",words:["COLMENA","PLATERO","RESIDENCIA","LABERINTO"],color:"blue"},{name:"GENEROS",words:["NOVELA","POESIA","TEATRO","ENSAYO"],color:"purple"}]},
{id:"tem-lit-20",tema:"Literatura",subtema:"Personajes de Novela",categories:[{name:"HEROES CLASICOS",words:["QUIJOTE","CID","AMADIS","CELESTINA"],color:"yellow"},{name:"PROTAGONISTAS FEMENINAS",words:["REGENTA","FORTUNATA","BOVARY","KARENINA"],color:"green"},{name:"AVENTUREROS",words:["CRUSOE","GULLIVER","NEMO","SANDOKAN"],color:"blue"},{name:"ANTIHEROES",words:["LAZARILLO","BUSCON","RASKOLNIKOV","MEURSAULT"],color:"purple"}]},
{id:"tem-cie-1",tema:"Ciencia",subtema:"El Sistema Solar",categories:[{name:"PLANETAS ROCOSOS",words:["MERCURIO","VENUS","TIERRA","MARTE"],color:"yellow"},{name:"PLANETAS GASEOSOS",words:["JUPITER","SATURNO","URANO","NEPTUNO"],color:"green"},{name:"CUERPOS MENORES",words:["ASTEROIDE","COMETA","METEORITO","PLUTON"],color:"blue"},{name:"ASTROS Y CONCEPTOS",words:["SOL","LUNA","ORBITA","GALAXIA"],color:"purple"}]},
{id:"tem-cie-2",tema:"Ciencia",subtema:"El Cuerpo Humano",categories:[{name:"ORGANOS VITALES",words:["CORAZON","PULMON","HIGADO","RIÑON"],color:"yellow"},{name:"HUESOS",words:["FEMUR","CRANEO","COSTILLA","TIBIA"],color:"green"},{name:"SISTEMAS",words:["NERVIOSO","DIGESTIVO","CIRCULATORIO","RESPIRATORIO"],color:"blue"},{name:"SENTIDOS",words:["VISTA","OIDO","OLFATO","GUSTO"],color:"purple"}]},
{id:"tem-cie-3",tema:"Ciencia",subtema:"Química Básica",categories:[{name:"GASES NOBLES",words:["HELIO","NEON","ARGON","KRIPTON"],color:"yellow"},{name:"METALES",words:["HIERRO","COBRE","ORO","PLATA"],color:"green"},{name:"ESTADOS DE LA MATERIA",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"blue"},{name:"CONCEPTOS QUIMICOS",words:["ATOMO","MOLECULA","ENLACE","REACCION"],color:"purple"}]},
{id:"tem-cie-4",tema:"Ciencia",subtema:"El Reino Animal",categories:[{name:"MAMIFEROS",words:["BALLENA","ELEFANTE","LEON","MURCIELAGO"],color:"yellow"},{name:"AVES",words:["AGUILA","PINGÜINO","AVESTRUZ","COLIBRI"],color:"green"},{name:"REPTILES",words:["COCODRILO","SERPIENTE","TORTUGA","IGUANA"],color:"blue"},{name:"INVERTEBRADOS",words:["PULPO","ARAÑA","MEDUSA","CANGREJO"],color:"purple"}]},
{id:"tem-cie-5",tema:"Ciencia",subtema:"Grandes Científicos",categories:[{name:"FISICOS",words:["EINSTEIN","NEWTON","GALILEO","HAWKING"],color:"yellow"},{name:"QUIMICOS Y BIOLOGOS",words:["CURIE","DARWIN","PASTEUR","MENDEL"],color:"green"},{name:"INVENTORES",words:["EDISON","TESLA","BELL","MARCONI"],color:"blue"},{name:"CAMPOS DE ESTUDIO",words:["FISICA","QUIMICA","BIOLOGIA","ASTRONOMIA"],color:"purple"}]},
{id:"tem-cie-6",tema:"Ciencia",subtema:"La Célula",categories:[{name:"ORGANULOS",words:["NUCLEO","MITOCONDRIA","RIBOSOMA","VACUOLA"],color:"yellow"},{name:"TIPOS DE CELULA",words:["NEURONA","GLOBULO","OVULO","ESPERMATOZOIDE"],color:"green"},{name:"MOLECULAS BIOLOGICAS",words:["ADN","PROTEINA","LIPIDO","GLUCOSA"],color:"blue"},{name:"PROCESOS CELULARES",words:["MITOSIS","RESPIRACION","SINTESIS","DIVISION"],color:"purple"}]},
{id:"tem-cie-7",tema:"Ciencia",subtema:"Fuerzas y Energía",categories:[{name:"TIPOS DE ENERGIA",words:["CINETICA","POTENCIAL","TERMICA","SOLAR"],color:"yellow"},{name:"FUERZAS FUNDAMENTALES",words:["GRAVEDAD","MAGNETISMO","FRICCION","TENSION"],color:"green"},{name:"UNIDADES DE MEDIDA",words:["JULIO","VATIO","NEWTON","VOLTIO"],color:"blue"},{name:"CONCEPTOS FISICOS",words:["MASA","VELOCIDAD","ACELERACION","INERCIA"],color:"purple"}]},
{id:"tem-cie-8",tema:"Ciencia",subtema:"Los Dinosaurios",categories:[{name:"CARNIVOROS",words:["TIRANOSAURIO","VELOCIRAPTOR","ESPINOSAURIO","ALOSAURIO"],color:"yellow"},{name:"HERBIVOROS",words:["DIPLODOCUS","TRICERATOPS","BRAQUIOSAURIO","ESTEGOSAURIO"],color:"green"},{name:"PERIODOS GEOLOGICOS",words:["TRIASICO","JURASICO","CRETACICO","PALEOZOICO"],color:"blue"},{name:"CONCEPTOS",words:["FOSIL","EXTINCION","PALEONTOLOGO","METEORITO"],color:"purple"}]},
{id:"tem-cie-9",tema:"Ciencia",subtema:"El Clima y la Atmósfera",categories:[{name:"FENOMENOS METEOROLOGICOS",words:["LLUVIA","NIEVE","GRANIZO","NIEBLA"],color:"yellow"},{name:"CAPAS ATMOSFERICAS",words:["TROPOSFERA","ESTRATOSFERA","MESOSFERA","IONOSFERA"],color:"green"},{name:"FENOMENOS EXTREMOS",words:["HURACAN","TORNADO","TORMENTA","SEQUIA"],color:"blue"},{name:"INSTRUMENTOS",words:["TERMOMETRO","BAROMETRO","VELETA","PLUVIOMETRO"],color:"purple"}]},
{id:"tem-cie-10",tema:"Ciencia",subtema:"La Tabla Periódica",categories:[{name:"ELEMENTOS LIGEROS",words:["HIDROGENO","HELIO","LITIO","CARBONO"],color:"yellow"},{name:"METALES PRECIOSOS",words:["ORO","PLATA","PLATINO","PALADIO"],color:"green"},{name:"NO METALES",words:["OXIGENO","NITROGENO","AZUFRE","CLORO"],color:"blue"},{name:"CONCEPTOS",words:["SIMBOLO","NUMERO ATOMICO","PROTON","ELECTRON"],color:"purple"}]},
{id:"tem-cie-11",tema:"Ciencia",subtema:"Ecología y Medio Ambiente",categories:[{name:"ECOSISTEMAS",words:["SELVA","DESIERTO","OCEANO","TUNDRA"],color:"yellow"},{name:"PROBLEMAS AMBIENTALES",words:["CONTAMINACION","DEFORESTACION","SEQUIA","EROSION"],color:"green"},{name:"ENERGIAS RENOVABLES",words:["SOLAR","EOLICA","HIDRAULICA","GEOTERMICA"],color:"blue"},{name:"CONCEPTOS ECOLOGICOS",words:["BIODIVERSIDAD","HABITAT","CADENA","RECICLAJE"],color:"purple"}]},
{id:"tem-cie-12",tema:"Ciencia",subtema:"El Universo",categories:[{name:"CUERPOS CELESTES",words:["ESTRELLA","GALAXIA","NEBULOSA","QUASAR"],color:"yellow"},{name:"FENOMENOS COSMICOS",words:["SUPERNOVA","AGUJERO NEGRO","ECLIPSE","BIG BANG"],color:"green"},{name:"EXPLORACION ESPACIAL",words:["COHETE","SATELITE","TELESCOPIO","SONDA"],color:"blue"},{name:"CONCEPTOS ASTRONOMICOS",words:["ORBITA","GRAVEDAD","AÑO LUZ","CONSTELACION"],color:"purple"}]},
{id:"tem-cie-13",tema:"Ciencia",subtema:"Las Plantas",categories:[{name:"PARTES DE LA PLANTA",words:["RAIZ","TALLO","HOJA","FLOR"],color:"yellow"},{name:"TIPOS DE PLANTAS",words:["ARBOL","ARBUSTO","HELECHO","MUSGO"],color:"green"},{name:"PROCESOS VEGETALES",words:["FOTOSINTESIS","POLINIZACION","GERMINACION","FLORACION"],color:"blue"},{name:"NECESIDADES",words:["AGUA","LUZ","NUTRIENTES","AIRE"],color:"purple"}]},
{id:"tem-cie-14",tema:"Ciencia",subtema:"La Luz y el Sonido",categories:[{name:"COLORES DEL ARCOIRIS",words:["ROJO","VERDE","AZUL","VIOLETA"],color:"yellow"},{name:"FENOMENOS OPTICOS",words:["REFLEXION","REFRACCION","DIFRACCION","ESPEJISMO"],color:"green"},{name:"CONCEPTOS DEL SONIDO",words:["ECO","FRECUENCIA","VOLUMEN","TIMBRE"],color:"blue"},{name:"INSTRUMENTOS OPTICOS",words:["LUPA","PRISMA","LENTE","MICROSCOPIO"],color:"purple"}]},
{id:"tem-cie-15",tema:"Ciencia",subtema:"Inventos que Cambiaron el Mundo",categories:[{name:"COMUNICACION",words:["TELEFONO","RADIO","TELEGRAFO","INTERNET"],color:"yellow"},{name:"TRANSPORTE",words:["AUTOMOVIL","AVION","LOCOMOTORA","COHETE"],color:"green"},{name:"MEDICINA",words:["VACUNA","PENICILINA","RAYOS X","ANESTESIA"],color:"blue"},{name:"VIDA COTIDIANA",words:["BOMBILLA","IMPRENTA","MOTOR","ORDENADOR"],color:"purple"}]},
{id:"tem-cie-16",tema:"Ciencia",subtema:"El Agua",categories:[{name:"ESTADOS DEL AGUA",words:["HIELO","VAPOR","LIQUIDO","ROCIO"],color:"yellow"},{name:"MASAS DE AGUA",words:["OCEANO","RIO","LAGO","LAGUNA"],color:"green"},{name:"CICLO DEL AGUA",words:["EVAPORACION","CONDENSACION","PRECIPITACION","INFILTRACION"],color:"blue"},{name:"CONCEPTOS",words:["HIDROGENO","OXIGENO","CORRIENTE","MAREA"],color:"purple"}]},
{id:"tem-cie-17",tema:"Ciencia",subtema:"Genética y Evolución",categories:[{name:"CONCEPTOS GENETICOS",words:["GEN","CROMOSOMA","ADN","MUTACION"],color:"yellow"},{name:"EVOLUCION",words:["SELECCION","ADAPTACION","ESPECIE","FOSIL"],color:"green"},{name:"CIENTIFICOS",words:["DARWIN","MENDEL","WATSON","CRICK"],color:"blue"},{name:"CONCEPTOS HEREDITARIOS",words:["HERENCIA","DOMINANTE","RECESIVO","GENOTIPO"],color:"purple"}]},
{id:"tem-cie-18",tema:"Ciencia",subtema:"La Tierra",categories:[{name:"CAPAS TERRESTRES",words:["CORTEZA","MANTO","NUCLEO","LITOSFERA"],color:"yellow"},{name:"FENOMENOS GEOLOGICOS",words:["TERREMOTO","VOLCAN","TSUNAMI","EROSION"],color:"green"},{name:"RELIEVES",words:["MONTAÑA","VALLE","MESETA","LLANURA"],color:"blue"},{name:"CONCEPTOS",words:["TECTONICA","MAGMA","PLACA","FALLA"],color:"purple"}]},
{id:"tem-cie-19",tema:"Ciencia",subtema:"Matemáticas",categories:[{name:"FIGURAS GEOMETRICAS",words:["CIRCULO","TRIANGULO","CUADRADO","PENTAGONO"],color:"yellow"},{name:"OPERACIONES",words:["SUMA","RESTA","MULTIPLICACION","DIVISION"],color:"green"},{name:"CONCEPTOS",words:["ALGEBRA","GEOMETRIA","FRACCION","ECUACION"],color:"blue"},{name:"NUMEROS ESPECIALES",words:["PRIMO","PAR","IMPAR","DECIMAL"],color:"purple"}]},
{id:"tem-cie-20",tema:"Ciencia",subtema:"Tecnología Digital",categories:[{name:"COMPONENTES",words:["PROCESADOR","MEMORIA","DISCO","PANTALLA"],color:"yellow"},{name:"LENGUAJES DE PROGRAMACION",words:["PYTHON","JAVA","JAVASCRIPT","RUBY"],color:"green"},{name:"CONCEPTOS DIGITALES",words:["ALGORITMO","SOFTWARE","HARDWARE","DATO"],color:"blue"},{name:"INTERNET",words:["NAVEGADOR","SERVIDOR","NUBE","RED"],color:"purple"}]},
{id:"tem-his-21",tema:"Historia",subtema:"El Imperio Otomano",categories:[{name:"SULTANES",words:["SOLIMAN","MEHMED","OSMAN","BAYACETO"],color:"yellow"},{name:"CIUDADES",words:["ESTAMBUL","ANKARA","ESMIRNA","BURSA"],color:"green"},{name:"ELEMENTOS OTOMANOS",words:["HAREN","VISIR","JENIZARO","BAZAR"],color:"blue"},{name:"CONCEPTOS",words:["CALIFA","MEZQUITA","SULTANATO","IMPERIO"],color:"purple"}]},
{id:"tem-his-22",tema:"Historia",subtema:"La Guerra Civil Española",categories:[{name:"BANDOS Y GRUPOS",words:["REPUBLICA","NACIONAL","MILICIA","BRIGADA"],color:"yellow"},{name:"CIUDADES CLAVE",words:["MADRID","GUERNICA","TERUEL","EBRO"],color:"green"},{name:"CONCEPTOS",words:["EXILIO","TRINCHERA","FRENTE","REFUGIO"],color:"blue"},{name:"CONSECUENCIAS",words:["POSGUERRA","DICTADURA","HAMBRE","RECONSTRUCCION"],color:"purple"}]},
{id:"tem-his-23",tema:"Historia",subtema:"La Antigua India",categories:[{name:"IMPERIOS Y DINASTIAS",words:["MAURYA","GUPTA","MOGOL","CHOLA"],color:"yellow"},{name:"RELIGIONES",words:["HINDUISMO","BUDISMO","JAINISMO","SIJISMO"],color:"green"},{name:"MONUMENTOS",words:["TAJ MAHAL","FORTALEZA","TEMPLO","PALACIO"],color:"blue"},{name:"CONCEPTOS",words:["CASTA","KARMA","MAHARAJA","ESPECIAS"],color:"purple"}]},
{id:"tem-his-24",tema:"Historia",subtema:"La Peste Negra",categories:[{name:"PROPAGACION",words:["RATA","PULGA","CONTAGIO","EPIDEMIA"],color:"yellow"},{name:"CONSECUENCIAS",words:["MORTANDAD","CRISIS","DESPOBLACION","MIEDO"],color:"green"},{name:"REMEDIOS DE LA EPOCA",words:["SANGRIA","HIERBAS","MASCARA","AISLAMIENTO"],color:"blue"},{name:"CONTEXTO MEDIEVAL",words:["MEDIEVO","EUROPA","FEUDO","IGLESIA"],color:"purple"}]},
{id:"tem-his-25",tema:"Historia",subtema:"La Conquista del Espacio",categories:[{name:"MISIONES",words:["APOLO","SOYUZ","GEMINI","MERCURY"],color:"yellow"},{name:"PROTAGONISTAS",words:["ARMSTRONG","GAGARIN","ALDRIN","TERESHKOVA"],color:"green"},{name:"HITOS",words:["ALUNIZAJE","ORBITA","SATELITE","COHETE"],color:"blue"},{name:"AGENCIAS Y PAISES",words:["NASA","URSS","EEUU","BAIKONUR"],color:"purple"}]},
{id:"tem-his-26",tema:"Historia",subtema:"Los Aztecas",categories:[{name:"SOCIEDAD",words:["TLATOANI","GUERRERO","SACERDOTE","MACEHUAL"],color:"yellow"},{name:"CIUDAD Y LUGARES",words:["TENOCHTITLAN","TEMPLO","CALZADA","LAGO"],color:"green"},{name:"DIOSES",words:["HUITZILOPOCHTLI","TLALOC","QUETZALCOATL","TEZCATLIPOCA"],color:"blue"},{name:"CULTURA",words:["CODICE","SACRIFICIO","CALENDARIO","CHINAMPA"],color:"purple"}]},
{id:"tem-his-27",tema:"Historia",subtema:"La Antigua Persia",categories:[{name:"REYES",words:["CIRO","DARIO","JERJES","ARTAJERJES"],color:"yellow"},{name:"CIUDADES",words:["PERSEPOLIS","SUSA","PASARGADA","ECBATANA"],color:"green"},{name:"CONCEPTOS",words:["SATRAPA","AQUEMENIDA","ZOROASTRO","IMPERIO"],color:"blue"},{name:"GUERRAS",words:["MARATON","TERMOPILAS","SALAMINA","PLATEA"],color:"purple"}]},
{id:"tem-his-28",tema:"Historia",subtema:"El Feudalismo",categories:[{name:"JERARQUIA",words:["MONARCA","SEÑOR","CABALLERO","CAMPESINO"],color:"yellow"},{name:"OBLIGACIONES",words:["VASALLAJE","TRIBUTO","DIEZMO","CORVEA"],color:"green"},{name:"LUGARES",words:["CASTILLO","ALDEA","FEUDO","MOLINO"],color:"blue"},{name:"CONCEPTOS",words:["JURAMENTO","LEALTAD","PRIVILEGIO","ESTAMENTO"],color:"purple"}]},
{id:"tem-his-29",tema:"Historia",subtema:"La Ilustración",categories:[{name:"PENSADORES",words:["VOLTAIRE","ROUSSEAU","MONTESQUIEU","DIDEROT"],color:"yellow"},{name:"IDEAS",words:["RAZON","PROGRESO","LIBERTAD","TOLERANCIA"],color:"green"},{name:"OBRAS Y LOGROS",words:["ENCICLOPEDIA","CONTRATO","ESPIRITU","CARTAS"],color:"blue"},{name:"CONCEPTOS",words:["SIGLO LUCES","DESPOTISMO","SEPARACION","EMPIRISMO"],color:"purple"}]},
{id:"tem-his-30",tema:"Historia",subtema:"La Primera Guerra Mundial",categories:[{name:"POTENCIAS",words:["ALEMANIA","FRANCIA","INGLATERRA","AUSTRIA"],color:"yellow"},{name:"ARMAS Y TACTICAS",words:["TRINCHERA","GAS","TANQUE","AMETRALLADORA"],color:"green"},{name:"BATALLAS",words:["VERDUN","SOMME","MARNE","YPRES"],color:"blue"},{name:"CONCEPTOS",words:["ARMISTICIO","ALIANZA","MOVILIZACION","IMPERIO"],color:"purple"}]},
{id:"tem-his-31",tema:"Historia",subtema:"Los Mayas",categories:[{name:"CIUDADES",words:["TIKAL","PALENQUE","COPAN","CHICHEN ITZA"],color:"yellow"},{name:"CONOCIMIENTOS",words:["ASTRONOMIA","MATEMATICAS","ESCRITURA","CALENDARIO"],color:"green"},{name:"CONSTRUCCIONES",words:["PIRAMIDE","OBSERVATORIO","TEMPLO","JUEGO PELOTA"],color:"blue"},{name:"CONCEPTOS",words:["GLIFO","CENOTE","SELVA","CERO"],color:"purple"}]},
{id:"tem-his-32",tema:"Historia",subtema:"La Caída de Roma",categories:[{name:"PUEBLOS INVASORES",words:["VISIGODO","VANDALO","OSTROGODO","HUNO"],color:"yellow"},{name:"LIDERES BARBAROS",words:["ATILA","ALARICO","ODOACRO","TEODORICO"],color:"green"},{name:"CAUSAS",words:["CORRUPCION","INVASION","CRISIS","DIVISION"],color:"blue"},{name:"CONSECUENCIAS",words:["MEDIEVO","FRAGMENTACION","DECADENCIA","OCASO"],color:"purple"}]},
{id:"tem-his-33",tema:"Historia",subtema:"El Antiguo Japón",categories:[{name:"GUERREROS",words:["SAMURAI","SHOGUN","RONIN","NINJA"],color:"yellow"},{name:"ELEMENTOS",words:["KATANA","KIMONO","PAGODA","GEISHA"],color:"green"},{name:"PERIODOS",words:["EDO","MEIJI","HEIAN","KAMAKURA"],color:"blue"},{name:"CONCEPTOS",words:["BUSHIDO","HONOR","EMPERADOR","FEUDAL"],color:"purple"}]},
{id:"tem-his-34",tema:"Historia",subtema:"Las Cruzadas",categories:[{name:"PROTAGONISTAS",words:["SALADINO","RICARDO","GODOFREDO","BALDUINO"],color:"yellow"},{name:"ORDENES MILITARES",words:["TEMPLARIOS","HOSPITALARIOS","TEUTONICOS","SANTIAGO"],color:"green"},{name:"LUGARES",words:["JERUSALEN","ACRE","ANTIOQUIA","CONSTANTINOPLA"],color:"blue"},{name:"CONCEPTOS",words:["PEREGRINO","RECONQUISTA","INFIEL","CRUZ"],color:"purple"}]},
{id:"tem-his-35",tema:"Historia",subtema:"La Revolución Rusa",categories:[{name:"LIDERES",words:["LENIN","TROTSKI","STALIN","KERENSKI"],color:"yellow"},{name:"GRUPOS",words:["BOLCHEVIQUE","MENCHEVIQUE","SOVIET","ZARISTA"],color:"green"},{name:"CONCEPTOS",words:["REVOLUCION","PROLETARIADO","COMUNISMO","OCTUBRE"],color:"blue"},{name:"CONSECUENCIAS",words:["URSS","GUERRA CIVIL","COLECTIVIZACION","REPUBLICA"],color:"purple"}]},
{id:"tem-his-36",tema:"Historia",subtema:"La Antigua Mesopotamia",categories:[{name:"PUEBLOS",words:["SUMERIOS","ACADIOS","BABILONIOS","ASIRIOS"],color:"yellow"},{name:"INVENTOS",words:["ESCRITURA","RUEDA","ARADO","REGADIO"],color:"green"},{name:"REYES Y CODIGOS",words:["HAMMURABI","SARGON","GILGAMESH","NABUCODONOSOR"],color:"blue"},{name:"CONCEPTOS",words:["ZIGURAT","CUNEIFORME","TABLILLA","CIUDAD ESTADO"],color:"purple"}]},
{id:"tem-his-37",tema:"Historia",subtema:"El Muro de Berlín",categories:[{name:"CONTEXTO",words:["ALEMANIA","BERLIN","DIVISION","FRONTERA"],color:"yellow"},{name:"LADOS",words:["ORIENTAL","OCCIDENTAL","RDA","RFA"],color:"green"},{name:"CONCEPTOS",words:["TELON ACERO","CHECKPOINT","GUARDIA","FUGA"],color:"blue"},{name:"LA CAIDA",words:["REUNIFICACION","LIBERTAD","DERRIBO","MULTITUD"],color:"purple"}]},
{id:"tem-his-38",tema:"Historia",subtema:"La Antigua Grecia Clásica",categories:[{name:"POLITICOS Y ESTRATEGAS",words:["PERICLES","SOLON","TEMISTOCLES","ALCIBIADES"],color:"yellow"},{name:"BATALLAS",words:["MARATON","SALAMINA","TERMOPILAS","PLATEA"],color:"green"},{name:"CULTURA",words:["TEATRO","OLIMPIADA","TRAGEDIA","ORACULO"],color:"blue"},{name:"CONCEPTOS",words:["ACROPOLIS","HELENO","CIUDADANO","ASAMBLEA"],color:"purple"}]},
{id:"tem-his-39",tema:"Historia",subtema:"La Era Napoleónica",categories:[{name:"BATALLAS",words:["AUSTERLITZ","WATERLOO","TRAFALGAR","BORODINO"],color:"yellow"},{name:"CONCEPTOS",words:["EMPERADOR","IMPERIO","CODIGO","CORONACION"],color:"green"},{name:"LUGARES DEL EXILIO",words:["ELBA","SANTA ELENA","PARIS","CORCEGA"],color:"blue"},{name:"ADVERSARIOS",words:["WELLINGTON","NELSON","KUTUZOV","BLUCHER"],color:"purple"}]},
{id:"tem-his-40",tema:"Historia",subtema:"El Antiguo Reino de Malí",categories:[{name:"CONTEXTO AFRICANO",words:["AFRICA","SAHARA","NIGER","TIMBUKTU"],color:"yellow"},{name:"COMERCIO",words:["ORO","SAL","MARFIL","CARAVANA"],color:"green"},{name:"FIGURAS",words:["MANSA MUSA","SUNDIATA","REY","MERCADER"],color:"blue"},{name:"CONCEPTOS",words:["IMPERIO","PEREGRINACION","MEZQUITA","RIQUEZA"],color:"purple"}]},
{id:"tem-lit-21",tema:"Literatura",subtema:"El Lazarillo y la Picaresca",categories:[{name:"OBRAS PICARESCAS",words:["LAZARILLO","GUZMAN","BUSCON","JUSTINA"],color:"yellow"},{name:"PERSONAJES PICAROS",words:["PABLOS","COJUELO","LAZARO","ESTEBANILLO"],color:"green"},{name:"AMOS DEL LAZARILLO",words:["CIEGO","CLERIGO","ESCUDERO","BULDERO"],color:"blue"},{name:"TEMAS",words:["HAMBRE","ASTUCIA","HONRA","SUPERVIVENCIA"],color:"purple"}]},
{id:"tem-lit-22",tema:"Literatura",subtema:"Kafka y lo Absurdo",categories:[{name:"OBRAS DE KAFKA",words:["METAMORFOSIS","PROCESO","CASTILLO","CONDENA"],color:"yellow"},{name:"TEMAS",words:["ABSURDO","BUROCRACIA","CULPA","ALIENACION"],color:"green"},{name:"OTROS AUTORES DEL ABSURDO",words:["CAMUS","BECKETT","IONESCO","SARTRE"],color:"blue"},{name:"CONCEPTOS",words:["ANGUSTIA","INSECTO","LABERINTO","PESADILLA"],color:"purple"}]},
{id:"tem-lit-23",tema:"Literatura",subtema:"La Divina Comedia",categories:[{name:"LOS TRES REINOS",words:["INFIERNO","PURGATORIO","PARAISO","LIMBO"],color:"yellow"},{name:"PERSONAJES",words:["DANTE","VIRGILIO","BEATRIZ","CARONTE"],color:"green"},{name:"CONCEPTOS",words:["CIRCULO","PECADO","REDENCION","ALEGORIA"],color:"blue"},{name:"CONTEXTO",words:["FLORENCIA","MEDIEVO","TERCETO","ITALIANO"],color:"purple"}]},
{id:"tem-lit-24",tema:"Literatura",subtema:"Jane Austen y la Novela Inglesa",categories:[{name:"OBRAS DE AUSTEN",words:["ORGULLO","EMMA","PERSUASION","SENSIBILIDAD"],color:"yellow"},{name:"PERSONAJES",words:["DARCY","ELIZABETH","ELINOR","WENTWORTH"],color:"green"},{name:"HERMANAS BRONTE",words:["CHARLOTTE","EMILY","ANNE","BRANWELL"],color:"blue"},{name:"TEMAS",words:["AMOR","MATRIMONIO","CLASE","SOCIEDAD"],color:"purple"}]},
{id:"tem-lit-25",tema:"Literatura",subtema:"La Poesía de Machado",categories:[{name:"OBRAS",words:["SOLEDADES","CAMPOS CASTILLA","PROVERBIOS","JUAN MAIRENA"],color:"yellow"},{name:"TEMAS",words:["CAMINO","TIEMPO","PAISAJE","MUERTE"],color:"green"},{name:"LUGARES",words:["SORIA","SEVILLA","BAEZA","DUERO"],color:"blue"},{name:"SIMBOLOS",words:["CAMINANTE","TARDE","OLMO","FUENTE"],color:"purple"}]},
{id:"tem-lit-26",tema:"Literatura",subtema:"El Modernismo",categories:[{name:"AUTORES",words:["RUBEN DARIO","VALLE INCLAN","JUAN RAMON","MARTI"],color:"yellow"},{name:"OBRAS",words:["AZUL","PROSAS","SONATAS","PLATERO"],color:"green"},{name:"SIMBOLOS",words:["CISNE","PRINCESA","JARDIN","PAVO REAL"],color:"blue"},{name:"CARACTERISTICAS",words:["MUSICALIDAD","EXOTISMO","BELLEZA","SENSUALIDAD"],color:"purple"}]},
{id:"tem-lit-27",tema:"Literatura",subtema:"Hemingway y la Novela Americana",categories:[{name:"AUTORES USA",words:["HEMINGWAY","FAULKNER","STEINBECK","FITZGERALD"],color:"yellow"},{name:"OBRAS DE HEMINGWAY",words:["VIEJO MAR","ADIOS ARMAS","FIESTA","CAMPANAS"],color:"green"},{name:"OBRAS AMERICANAS",words:["GATSBY","UVAS IRA","RUIDO FURIA","MOBY DICK"],color:"blue"},{name:"TEMAS",words:["GUERRA","SUEÑO","NATURALEZA","PERDIDA"],color:"purple"}]},
{id:"tem-lit-28",tema:"Literatura",subtema:"El Siglo de Oro",categories:[{name:"POETAS",words:["GONGORA","QUEVEDO","LOPE","GARCILASO"],color:"yellow"},{name:"CORRIENTES",words:["CULTERANISMO","CONCEPTISMO","PETRARQUISMO","BARROCO"],color:"green"},{name:"OBRAS EN PROSA",words:["QUIJOTE","BUSCON","GUZMAN","CRITICON"],color:"blue"},{name:"TEMAS BARROCOS",words:["DESENGAÑO","FUGACIDAD","CONTRASTE","MUERTE"],color:"purple"}]},
{id:"tem-lit-29",tema:"Literatura",subtema:"Orwell y la Distopía",categories:[{name:"OBRAS DISTOPICAS",words:["1984","REBELION","MUNDO FELIZ","FAHRENHEIT"],color:"yellow"},{name:"AUTORES",words:["ORWELL","HUXLEY","BRADBURY","ATWOOD"],color:"green"},{name:"CONCEPTOS DE 1984",words:["GRAN HERMANO","NEOLENGUA","PARTIDO","TELEPANTALLA"],color:"blue"},{name:"TEMAS",words:["VIGILANCIA","CONTROL","LIBERTAD","TOTALITARISMO"],color:"purple"}]},
{id:"tem-lit-30",tema:"Literatura",subtema:"La Celestina",categories:[{name:"PERSONAJES",words:["CELESTINA","CALISTO","MELIBEA","PARMENO"],color:"yellow"},{name:"TEMAS",words:["AMOR","CODICIA","MUERTE","PASION"],color:"green"},{name:"CONTEXTO",words:["ROJAS","MEDIEVO","TRAGICOMEDIA","DIALOGO"],color:"blue"},{name:"CONCEPTOS",words:["ALCAHUETA","CRIADO","HECHIZO","AMBICION"],color:"purple"}]},
{id:"tem-lit-31",tema:"Literatura",subtema:"Poetas Malditos",categories:[{name:"AUTORES",words:["BAUDELAIRE","RIMBAUD","VERLAINE","MALLARME"],color:"yellow"},{name:"OBRAS",words:["FLORES MAL","TEMPORADA","ILUMINACIONES","SPLEEN"],color:"green"},{name:"TEMAS",words:["BELLEZA","DECADENCIA","REBELDIA","MELANCOLIA"],color:"blue"},{name:"CONCEPTOS",words:["SIMBOLISMO","BOHEMIA","VICIO","MODERNIDAD"],color:"purple"}]},
{id:"tem-lit-32",tema:"Literatura",subtema:"El Teatro de Lorca",categories:[{name:"TRAGEDIAS RURALES",words:["BODAS SANGRE","YERMA","BERNARDA ALBA","DOÑA ROSITA"],color:"yellow"},{name:"TEMAS",words:["PASION","MUERTE","HONRA","LIBERTAD"],color:"green"},{name:"POEMARIOS",words:["ROMANCERO","POETA NUEVA YORK","LLANTO","GACELAS"],color:"blue"},{name:"SIMBOLOS",words:["LUNA","CUCHILLO","AGUA","CABALLO"],color:"purple"}]},
{id:"tem-lit-33",tema:"Literatura",subtema:"Las Mil y Una Noches",categories:[{name:"PERSONAJES",words:["SCHEREZADE","ALADINO","SIMBAD","ALI BABA"],color:"yellow"},{name:"ELEMENTOS MAGICOS",words:["LAMPARA","GENIO","ALFOMBRA","TESORO"],color:"green"},{name:"CONCEPTOS",words:["SULTAN","CUENTO","PALACIO","DESIERTO"],color:"blue"},{name:"ESCENARIOS",words:["BAGDAD","BAZAR","OASIS","CAVERNA"],color:"purple"}]},
{id:"tem-lit-34",tema:"Literatura",subtema:"Proust y la Novela Moderna",categories:[{name:"AUTORES MODERNOS",words:["PROUST","JOYCE","WOOLF","MANN"],color:"yellow"},{name:"OBRAS",words:["ULISES","TIEMPO PERDIDO","FARO","MONTAÑA"],color:"green"},{name:"TECNICAS",words:["MONOLOGO","FLASHBACK","CONCIENCIA","INTROSPECCION"],color:"blue"},{name:"TEMAS",words:["MEMORIA","TIEMPO","IDENTIDAD","ARTE"],color:"purple"}]},
{id:"tem-lit-35",tema:"Literatura",subtema:"El Romancero",categories:[{name:"TIPOS DE ROMANCE",words:["HISTORICO","FRONTERIZO","CABALLERESCO","LIRICO"],color:"yellow"},{name:"TEMAS",words:["AMOR","GUERRA","HONOR","AVENTURA"],color:"green"},{name:"CARACTERISTICAS",words:["OCTOSILABO","ORAL","ANONIMO","POPULAR"],color:"blue"},{name:"CONCEPTOS",words:["JUGLAR","ROMANCE","RIMA","ESTRIBILLO"],color:"purple"}]},
{id:"tem-lit-36",tema:"Literatura",subtema:"La Beat Generation",categories:[{name:"AUTORES",words:["KEROUAC","GINSBERG","BURROUGHS","CASSADY"],color:"yellow"},{name:"OBRAS",words:["CAMINO","AULLIDO","ALMUERZO","VISIONES"],color:"green"},{name:"TEMAS",words:["VIAJE","LIBERTAD","REBELDIA","ESPIRITU"],color:"blue"},{name:"CONCEPTOS",words:["BEATNIK","CONTRACULTURA","JAZZ","CARRETERA"],color:"purple"}]},
{id:"tem-lit-37",tema:"Literatura",subtema:"Dostoyevski",categories:[{name:"OBRAS",words:["CRIMEN CASTIGO","IDIOTA","KARAMAZOV","DEMONIOS"],color:"yellow"},{name:"PERSONAJES",words:["RASKOLNIKOV","MISHKIN","ALIOSHA","IVAN"],color:"green"},{name:"TEMAS",words:["CULPA","REDENCION","FE","LIBERTAD"],color:"blue"},{name:"CONCEPTOS",words:["CONCIENCIA","SUFRIMIENTO","MORAL","NIHILISMO"],color:"purple"}]},
{id:"tem-lit-38",tema:"Literatura",subtema:"Neruda y la Poesía Chilena",categories:[{name:"OBRAS DE NERUDA",words:["VEINTE POEMAS","CANTO GENERAL","ODAS","RESIDENCIA"],color:"yellow"},{name:"POETAS CHILENOS",words:["MISTRAL","HUIDOBRO","PARRA","ZURITA"],color:"green"},{name:"TEMAS",words:["AMOR","MAR","POLITICA","NATURALEZA"],color:"blue"},{name:"SIMBOLOS",words:["OCEANO","VINO","PAN","TIERRA"],color:"purple"}]},
{id:"tem-lit-39",tema:"Literatura",subtema:"Tolkien y la Fantasía",categories:[{name:"OBRAS",words:["HOBBIT","ANILLOS","SILMARILLION","CUENTOS"],color:"yellow"},{name:"PERSONAJES",words:["FRODO","GANDALF","ARAGORN","GOLLUM"],color:"green"},{name:"RAZAS",words:["ELFO","ENANO","ORCO","ENT"],color:"blue"},{name:"LUGARES",words:["MORDOR","RIVENDEL","COMARCA","GONDOR"],color:"purple"}]},
{id:"tem-lit-40",tema:"Literatura",subtema:"El Ensayo",categories:[{name:"ENSAYISTAS",words:["MONTAIGNE","ORTEGA","UNAMUNO","BORGES"],color:"yellow"},{name:"OBRAS",words:["ENSAYOS","REBELION MASAS","VIDA QUIJOTE","OTRAS INQUISICIONES"],color:"green"},{name:"TEMAS DEL ENSAYO",words:["FILOSOFIA","POLITICA","CULTURA","SOCIEDAD"],color:"blue"},{name:"CARACTERISTICAS",words:["REFLEXION","SUBJETIVO","ARGUMENTO","PROSA"],color:"purple"}]},
{id:"tem-cie-21",tema:"Ciencia",subtema:"El Sistema Nervioso",categories:[{name:"PARTES DEL CEREBRO",words:["CEREBELO","CORTEZA","HIPOTALAMO","BULBO"],color:"yellow"},{name:"CELULAS Y ELEMENTOS",words:["NEURONA","AXON","DENDRITA","SINAPSIS"],color:"green"},{name:"FUNCIONES",words:["MEMORIA","REFLEJO","EQUILIBRIO","MOVIMIENTO"],color:"blue"},{name:"CONCEPTOS",words:["IMPULSO","ESTIMULO","NERVIO","MEDULA"],color:"purple"}]},
{id:"tem-cie-22",tema:"Ciencia",subtema:"Los Volcanes",categories:[{name:"PARTES DEL VOLCAN",words:["CRATER","CHIMENEA","CAMARA","CONO"],color:"yellow"},{name:"MATERIALES",words:["LAVA","MAGMA","CENIZA","BASALTO"],color:"green"},{name:"TIPOS Y FENOMENOS",words:["ERUPCION","GEISER","FUMAROLA","COLADA"],color:"blue"},{name:"VOLCANES FAMOSOS",words:["VESUBIO","ETNA","KRAKATOA","TEIDE"],color:"purple"}]},
{id:"tem-cie-23",tema:"Ciencia",subtema:"La Electricidad",categories:[{name:"MAGNITUDES",words:["VOLTAJE","CORRIENTE","RESISTENCIA","POTENCIA"],color:"yellow"},{name:"COMPONENTES",words:["PILA","CABLE","BOMBILLA","INTERRUPTOR"],color:"green"},{name:"CIENTIFICOS",words:["VOLTA","AMPERE","OHM","FARADAY"],color:"blue"},{name:"CONCEPTOS",words:["CARGA","CIRCUITO","ELECTRON","CONDUCTOR"],color:"purple"}]},
{id:"tem-cie-24",tema:"Ciencia",subtema:"Los Océanos",categories:[{name:"OCEANOS",words:["ATLANTICO","PACIFICO","INDICO","ARTICO"],color:"yellow"},{name:"VIDA MARINA",words:["CORAL","PLANCTON","MEDUSA","ALGA"],color:"green"},{name:"FENOMENOS",words:["MAREA","CORRIENTE","OLA","TSUNAMI"],color:"blue"},{name:"ZONAS Y RELIEVE",words:["ARRECIFE","FOSA","PLATAFORMA","ABISMO"],color:"purple"}]},
{id:"tem-cie-25",tema:"Ciencia",subtema:"Las Aves",categories:[{name:"AVES RAPACES",words:["AGUILA","HALCON","BUHO","BUITRE"],color:"yellow"},{name:"AVES ACUATICAS",words:["PATO","CISNE","GARZA","PELICANO"],color:"green"},{name:"AVES NO VOLADORAS",words:["AVESTRUZ","PINGÜINO","EMU","KIWI"],color:"blue"},{name:"PARTES Y CONCEPTOS",words:["PLUMA","PICO","NIDO","MIGRACION"],color:"purple"}]},
{id:"tem-cie-26",tema:"Ciencia",subtema:"La Energía Nuclear",categories:[{name:"PARTICULAS",words:["PROTON","NEUTRON","ELECTRON","NUCLEO"],color:"yellow"},{name:"PROCESOS",words:["FISION","FUSION","RADIACION","DESINTEGRACION"],color:"green"},{name:"ELEMENTOS",words:["URANIO","PLUTONIO","RADIO","TORIO"],color:"blue"},{name:"CONCEPTOS",words:["REACTOR","ATOMO","ISOTOPO","CADENA"],color:"purple"}]},
{id:"tem-cie-27",tema:"Ciencia",subtema:"Los Insectos",categories:[{name:"INSECTOS VOLADORES",words:["MARIPOSA","ABEJA","LIBELULA","MOSCA"],color:"yellow"},{name:"INSECTOS SOCIALES",words:["HORMIGA","OBRERA","AVISPA","TERMITA"],color:"green"},{name:"PARTES DEL CUERPO",words:["ANTENA","TORAX","ABDOMEN","ALA"],color:"blue"},{name:"CONCEPTOS",words:["METAMORFOSIS","LARVA","CRISALIDA","COLONIA"],color:"purple"}]},
{id:"tem-cie-28",tema:"Ciencia",subtema:"La Astronomía",categories:[{name:"INSTRUMENTOS",words:["TELESCOPIO","OBSERVATORIO","SONDA","RADAR"],color:"yellow"},{name:"ASTRONOMOS",words:["COPERNICO","KEPLER","GALILEO","HUBBLE"],color:"green"},{name:"OBJETOS CELESTES",words:["PLANETA","COMETA","NEBULOSA","CUASAR"],color:"blue"},{name:"CONCEPTOS",words:["ORBITA","ECLIPSE","CONSTELACION","GALAXIA"],color:"purple"}]},
{id:"tem-cie-29",tema:"Ciencia",subtema:"El Sistema Digestivo",categories:[{name:"ORGANOS",words:["ESTOMAGO","INTESTINO","HIGADO","PANCREAS"],color:"yellow"},{name:"PROCESO",words:["MASTICACION","DIGESTION","ABSORCION","EXCRECION"],color:"green"},{name:"SUSTANCIAS",words:["SALIVA","BILIS","ENZIMA","JUGO"],color:"blue"},{name:"NUTRIENTES",words:["PROTEINA","VITAMINA","MINERAL","FIBRA"],color:"purple"}]},
{id:"tem-cie-30",tema:"Ciencia",subtema:"Los Minerales y Rocas",categories:[{name:"PIEDRAS PRECIOSAS",words:["DIAMANTE","RUBI","ESMERALDA","ZAFIRO"],color:"yellow"},{name:"ROCAS",words:["GRANITO","MARMOL","PIZARRA","BASALTO"],color:"green"},{name:"METALES",words:["ORO","PLATA","COBRE","HIERRO"],color:"blue"},{name:"CONCEPTOS",words:["CRISTAL","MINA","YACIMIENTO","DUREZA"],color:"purple"}]},
{id:"tem-cie-31",tema:"Ciencia",subtema:"La Fotosíntesis",categories:[{name:"ELEMENTOS NECESARIOS",words:["LUZ","AGUA","DIOXIDO","CLOROFILA"],color:"yellow"},{name:"PRODUCTOS",words:["OXIGENO","GLUCOSA","ALMIDON","ENERGIA"],color:"green"},{name:"PARTES DE LA PLANTA",words:["HOJA","CLOROPLASTO","ESTOMA","NERVIO"],color:"blue"},{name:"CONCEPTOS",words:["SAVIA","PIGMENTO","RESPIRACION","CICLO"],color:"purple"}]},
{id:"tem-cie-32",tema:"Ciencia",subtema:"Los Estados de la Materia",categories:[{name:"ESTADOS",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"yellow"},{name:"CAMBIOS DE ESTADO",words:["FUSION","EVAPORACION","CONDENSACION","SUBLIMACION"],color:"green"},{name:"PROPIEDADES",words:["MASA","VOLUMEN","DENSIDAD","TEMPERATURA"],color:"blue"},{name:"CONCEPTOS",words:["MOLECULA","PARTICULA","ENERGIA","PRESION"],color:"purple"}]},
{id:"tem-cie-33",tema:"Ciencia",subtema:"Los Mamíferos Marinos",categories:[{name:"CETACEOS",words:["BALLENA","DELFIN","ORCA","CACHALOTE"],color:"yellow"},{name:"PINNIPEDOS",words:["FOCA","MORSA","LEON MARINO","OTARIA"],color:"green"},{name:"CARACTERISTICAS",words:["ALETA","SOPLIDO","GRASA","PULMON"],color:"blue"},{name:"CONCEPTOS",words:["MIGRACION","ECOLOCALIZACION","BUCEO","MANADA"],color:"purple"}]},
{id:"tem-cie-34",tema:"Ciencia",subtema:"La Química Orgánica",categories:[{name:"ELEMENTOS CLAVE",words:["CARBONO","HIDROGENO","OXIGENO","NITROGENO"],color:"yellow"},{name:"BIOMOLECULAS",words:["PROTEINA","LIPIDO","GLUCIDO","ENZIMA"],color:"green"},{name:"COMPUESTOS",words:["METANO","ETANOL","BENCENO","GLUCOSA"],color:"blue"},{name:"CONCEPTOS",words:["MOLECULA","ENLACE","CADENA","POLIMERO"],color:"purple"}]},
{id:"tem-cie-35",tema:"Ciencia",subtema:"Los Terremotos",categories:[{name:"CONCEPTOS SISMICOS",words:["EPICENTRO","HIPOCENTRO","FALLA","REPLICA"],color:"yellow"},{name:"MEDICION",words:["RICHTER","SISMOGRAFO","MAGNITUD","ESCALA"],color:"green"},{name:"CONSECUENCIAS",words:["TSUNAMI","GRIETA","DERRUMBE","MAREMOTO"],color:"blue"},{name:"CONTEXTO GEOLOGICO",words:["PLACA","TECTONICA","CORTEZA","TENSION"],color:"purple"}]},
{id:"tem-cie-36",tema:"Ciencia",subtema:"El Sistema Inmunológico",categories:[{name:"CELULAS DEFENSIVAS",words:["LINFOCITO","LEUCOCITO","MACROFAGO","ANTICUERPO"],color:"yellow"},{name:"AMENAZAS",words:["VIRUS","BACTERIA","HONGO","PARASITO"],color:"green"},{name:"CONCEPTOS",words:["VACUNA","INMUNIDAD","ANTIGENO","INFECCION"],color:"blue"},{name:"RESPUESTAS",words:["FIEBRE","INFLAMACION","DEFENSA","MEMORIA"],color:"purple"}]},
{id:"tem-cie-37",tema:"Ciencia",subtema:"La Óptica",categories:[{name:"FENOMENOS",words:["REFLEXION","REFRACCION","DISPERSION","DIFRACCION"],color:"yellow"},{name:"INSTRUMENTOS",words:["LENTE","PRISMA","ESPEJO","LUPA"],color:"green"},{name:"CONCEPTOS DE LA LUZ",words:["RAYO","ESPECTRO","ONDA","FOTON"],color:"blue"},{name:"COLORES",words:["ROJO","VERDE","AZUL","AMARILLO"],color:"purple"}]},
{id:"tem-cie-38",tema:"Ciencia",subtema:"La Biología Celular",categories:[{name:"ORGANULOS",words:["NUCLEO","MITOCONDRIA","RIBOSOMA","LISOSOMA"],color:"yellow"},{name:"MEMBRANAS Y ESTRUCTURA",words:["MEMBRANA","CITOPLASMA","PARED","VACUOLA"],color:"green"},{name:"PROCESOS",words:["MITOSIS","MEIOSIS","OSMOSIS","DIVISION"],color:"blue"},{name:"MOLECULAS",words:["ADN","ARN","PROTEINA","ENZIMA"],color:"purple"}]},
{id:"tem-cie-39",tema:"Ciencia",subtema:"Los Reptiles y Anfibios",categories:[{name:"REPTILES",words:["COCODRILO","LAGARTO","SERPIENTE","TORTUGA"],color:"yellow"},{name:"ANFIBIOS",words:["RANA","SAPO","SALAMANDRA","TRITON"],color:"green"},{name:"CARACTERISTICAS",words:["ESCAMA","VENENO","MUDA","SANGRE FRIA"],color:"blue"},{name:"CONCEPTOS",words:["METAMORFOSIS","HIBERNACION","REPTAR","HUEVO"],color:"purple"}]},
{id:"tem-cie-40",tema:"Ciencia",subtema:"El Cambio Climático",categories:[{name:"GASES",words:["DIOXIDO","METANO","OZONO","VAPOR"],color:"yellow"},{name:"CONSECUENCIAS",words:["DESHIELO","SEQUIA","INUNDACION","CALENTAMIENTO"],color:"green"},{name:"SOLUCIONES",words:["RECICLAJE","RENOVABLE","AHORRO","REFORESTACION"],color:"blue"},{name:"CONCEPTOS",words:["EFECTO INVERNADERO","EMISION","HUELLA","SOSTENIBLE"],color:"purple"}]},
];

// Rango de fechas del Mundial 2026
const MUNDIAL_START = { month: 6, day: 11 };
const MUNDIAL_END = { month: 7, day: 19 };

// Ciclo infinito: cuando se acaban todos los puzzles, se reshufflean y se vuelve a empezar
const CYCLE_START_MS = Date.UTC(2024, 0, 1); // 1 de enero de 2024

function getDaysSince(date) {
  const dateUTC = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const diff = dateUTC - CYCLE_START_MS;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Deterministic shuffle using the cycle number as seed
function shuffleByCycle(array, cycle) {
  const shuffled = [...array];
  let seed = cycle;
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647;
    const j = Math.abs(seed) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getDailyPuzzle(date = new Date(), mode = 'normal') {
  // Special mode: return a rotating Mundial puzzle during the world cup period
  if (mode === 'special') {
    return getMundialPuzzle(date);
  }
  // Temático mode: daily rotating themed puzzle (Deportes, Historia, Literatura, Ciencia)
  // 'deportes' kept as an alias for backward compatibility with saved state / old links
  if (mode === 'tematico' || mode === 'deportes') {
    return getTematicoPuzzle(date);
  }
  const monthDay = String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0');
  if (SPECIAL_PUZZLES[monthDay] && mode !== 'jason') {
    return { ...SPECIAL_PUZZLES[monthDay], date };
  }
  // Ciclo infinito: cada N dias se reshufflea el pool y se empieza de nuevo
  const puzzlePool = mode === 'jason' ? JASON_PUZZLES : [...PUZZLES, ...NEW_PUZZLES];
  const daysSince = getDaysSince(date);
  const cycle = Math.floor(daysSince / puzzlePool.length);
  let indexInCycle = daysSince % puzzlePool.length;
  const shuffledPool = shuffleByCycle(puzzlePool, cycle);

  // Modo Dificil: evitar que el puzzle comparta palabras con el Normal del mismo dia.
  // Si colisiona, saltar de 7 en 7 posiciones (determinista) hasta encontrar uno limpio.
  if (mode === 'jason') {
    const normalPuzzle = getDailyPuzzle(date, 'normal');
    const normalWords = new Set(normalPuzzle.categories.flatMap((c) => c.words));
    const collides = (p) => p.categories.some((c) => c.words.some((w) => normalWords.has(w)));
    let attempts = 0;
    while (collides(shuffledPool[indexInCycle]) && attempts < shuffledPool.length) {
      indexInCycle = (indexInCycle + 7) % shuffledPool.length;
      attempts++;
    }
  }

  return { ...shuffledPool[indexInCycle], date };
}

// Returns true if today is within the Mundial 2026 date range
export function isMundialActive(date = new Date()) {
  const start = new Date(date.getFullYear(), MUNDIAL_START.month - 1, MUNDIAL_START.day);
  const end = new Date(date.getFullYear(), MUNDIAL_END.month - 1, MUNDIAL_END.day, 23, 59, 59, 999);
  return date >= start && date <= end;
}

// Returns a daily rotating Mundial puzzle based on date seed (also uses cycle system)
function getMundialPuzzle(date = new Date()) {
  if (!isMundialActive(date)) return null;
  const daysSince = getDaysSince(date);
  const cycle = Math.floor(daysSince / MUNDIAL_PUZZLES.length);
  const indexInCycle = daysSince % MUNDIAL_PUZZLES.length;
  const shuffledPool = shuffleByCycle(MUNDIAL_PUZZLES, cycle);
  return { ...shuffledPool[indexInCycle], date };
}

// Orden de rotación de los temas (uno por día, se repite el ciclo)
const TEMATICO_TEMAS = ['Deportes', 'Historia', 'Literatura', 'Ciencia'];

// Modo TEMÁTICO: cada día un tema distinto (Deportes, Historia, Literatura, Ciencia),
// rotando en ciclo. Dentro de cada tema, rota por sus puzzles.
// Durante un evento temporal (Mundial), el modo "se convierte" en el temático de ese evento.
export function getTematicoPuzzle(date = new Date()) {
  // Si hay un evento especial activo (p.ej. Mundial), se muestra ese puzzle
  const mundial = getMundialPuzzle(date);
  if (mundial) return mundial;

  const daysSince = getDaysSince(date);
  // Elegir el tema del día según la rotación
  const tema = TEMATICO_TEMAS[daysSince % TEMATICO_TEMAS.length];
  const pool = TEMATICO_PUZZLES.filter((p) => p.tema === tema);
  if (pool.length === 0) {
    // Fallback defensivo: si un tema no tuviera puzzles, usar el pool completo
    const cycleAll = Math.floor(daysSince / TEMATICO_PUZZLES.length);
    const idxAll = daysSince % TEMATICO_PUZZLES.length;
    const shuffledAll = shuffleByCycle(TEMATICO_PUZZLES, cycleAll);
    return { ...shuffledAll[idxAll], date };
  }
  // Cuántas veces ha salido este tema hasta hoy (para avanzar dentro de su pool)
  const apariciones = Math.floor(daysSince / TEMATICO_TEMAS.length);
  const cycle = Math.floor(apariciones / pool.length);
  const indexInCycle = apariciones % pool.length;
  const shuffledPool = shuffleByCycle(pool, cycle);
  return { ...shuffledPool[indexInCycle], date };
}

// Alias por compatibilidad con código que aún llame a getDeportesPuzzle
export function getDeportesPuzzle(date = new Date()) {
  return getTematicoPuzzle(date);
}

// Kept for backward compatibility with components that check tab visibility
export function getActiveSpecial(date = new Date()) {
  return isMundialActive(date) ? { id: "mundial-2026" } : null;
}

// Practice mode: weekly rotating pool of exactly 10 puzzles
// Resets every Friday at 21:00 (local time)
function getPracticeWeekSeed(date = new Date()) {
  // Reference: first Friday after launch
  const REFERENCE = new Date(2026, 5, 19, 21, 0, 0); // June 19, 2026 21:00
  const diffMs = date.getTime() - REFERENCE.getTime();
  if (diffMs < 0) return 0;
  return Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
}

function getWeeklyPracticePuzzle() {
  const weekSeed = getPracticeWeekSeed();
  const combinedPool = [...PUZZLES, ...NEW_PUZZLES];
  const poolSize = 10;
  const groupCount = Math.floor(combinedPool.length / poolSize);
  const groupIndex = Math.abs(weekSeed * 16807) % groupCount;
  const startIdx = groupIndex * poolSize;
  const weeklyPool = combinedPool.slice(startIdx, startIdx + poolSize);
  const pickIndex = Math.floor(Math.random() * weeklyPool.length);
  return { ...weeklyPool[pickIndex], isPractice: true };
}

export { PUZZLES, NEW_PUZZLES, SPECIAL_PUZZLES, JASON_PUZZLES, MUNDIAL_PUZZLES, TEMATICO_PUZZLES, TEMATICO_TEMAS, getWeeklyPracticePuzzle };
