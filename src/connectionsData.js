// Each daily puzzle has 4 categories, each with 4 words and a difficulty color.
// Difficulty order: yellow (easiest) < green < blue < purple (trickiest)

const PUZZLES = [
{id:1,categories:[{name:"PLANETAS",words:["MERCURIO","VENUS","TIERRA","MARTE"],color:"yellow"},{name:"FRUTAS",words:["MANZANA","NARANJA","UVA","PERA"],color:"green"},{name:"INSTRUMENTOS",words:["PIANO","GUITARRA","FLAUTA","BATERIA"],color:"blue"},{name:"CAPITALES",words:["PARIS","ROMA","BERLIN","LONDRES"],color:"purple"}]},{id:2,categories:[{name:"ANIMALES MARINOS",words:["DELFIN","TIBURON","BALLENA","PULPO"],color:"yellow"},{name:"MEDIOS TRANSPORTE",words:["COCHE","TREN","AVION","BARCO"],color:"green"},{name:"EMOCIONES",words:["ALEGRIA","TRISTEZA","ENFADO","MIEDO"],color:"blue"},{name:"HERRAMIENTAS",words:["MARTILLO","DESTORNILLADOR","SIERRA","LLAVE"],color:"purple"}]},{id:3,categories:[{name:"DEPORTES",words:["FUTBOL","TENIS","BASQUET","NATACION"],color:"yellow"},{name:"PARTES DEL CUERPO",words:["CABEZA","BRAZOS","PIERNAS","MANOS"],color:"green"},{name:"COLORES",words:["ROJO","AZUL","VERDE","AMARILLO"],color:"blue"},{name:"MUEBLES",words:["MESA","SILLA","SILLON","ESTANTE"],color:"purple"}]},{id:4,categories:[{name:"PROFESIONES",words:["MEDICO","BOMBERO","MAESTRO","POLICIA"],color:"yellow"},{name:"ELECTRODOMESTICOS",words:["NEVERA","LAVADORA","HORNO","MICROONDAS"],color:"green"},{name:"ESTACIONES AÑO",words:["PRIMAVERA","VERANO","OTOÑO","INVIERNO"],color:"blue"},{name:"METALES",words:["ORO","PLATA","BRONCE","COBRE"],color:"purple"}]},{id:5,categories:[{name:"PAISES",words:["MEXICO","ESPAÑA","ITALIA","JAPON"],color:"yellow"},{name:"BEBIDAS",words:["AGUA","CAFE","TE","ZUMO"],color:"green"},{name:"CLIMA",words:["SOLEADO","NUBLADO","LLUVIOSO","VENTOSO"],color:"blue"},{name:"PRENDAS VESTIR",words:["CAMISA","PANTALON","ZAPATOS","ABRIGO"],color:"purple"}]},{id:6,categories:[{name:"FLORES",words:["ROSA","TULIPAN","GIRASOL","MARGARITA"],color:"yellow"},{name:"DULCES",words:["CHOCOLATE","CARAMELO","GALLETA","PASTEL"],color:"green"},{name:"TIENDAS",words:["FARMACIA","PANADERIA","LIBRERIA","CARNICERIA"],color:"blue"},{name:"MONEDAS DIGITALES",words:["BITCOIN","ETHEREUM","CARDANO","SOLANA"],color:"purple"}]},{id:7,categories:[{name:"OFICIOS ANTIGUOS",words:["HERRERO","CARPINTERO","SASTRE","ZAPATERO"],color:"yellow"},{name:"UTILES ESCOLARES",words:["LAPIZ","CUADERNO","MOCHILA","REGLA"],color:"green"},{name:"ACCIONES COTIDIANAS",words:["CAMINAR","COMER","DORMIR","LEER"],color:"blue"},{name:"PALABRAS CON Ñ",words:["ESPAÑA","AÑO","MUÑECA","PIÑA"],color:"purple"}]},{id:8,categories:[{name:"MONTAÑAS FAMOSAS",words:["EVEREST","ALPES","ANDES","HIMALAYA"],color:"yellow"},{name:"DESASTRES NATURALES",words:["TERREMOTO","TSUNAMI","VOLCAN","HURACAN"],color:"green"},{name:"PECES",words:["SALMON","ATUN","MERLUZA","BACALAO"],color:"blue"},{name:"PRONOMBRES",words:["YO","TU","EL","ELLA"],color:"purple"}]},{id:9,categories:[{name:"REDES SOCIALES",words:["FACEBOOK","INSTAGRAM","TIKTOK","TWITTER"],color:"yellow"},{name:"VERBOS COCINA",words:["HERVIR","FREIR","HORNEAR","ASAR"],color:"green"},{name:"ENFERMEDADES",words:["GRIPE","RESFRIO","VARICELA","ALERGIA"],color:"blue"},{name:"FIGURAS GEOMETRICAS",words:["CIRCULO","CUADRADO","TRIANGULO","RECTANGULO"],color:"purple"}]},{id:10,categories:[{name:"DIAS DE LA SEMANA",words:["LUNES","MARTES","MIERCOLES","JUEVES"],color:"yellow"},{name:"PELICULAS INFANTILES",words:["TOY STORY","FROZEN","EL REY LEON","BUSCANDO A NEMO"],color:"green"},{name:"OCEANOS",words:["PACIFICO","ATLANTICO","INDICO","ARTICO"],color:"blue"},{name:"SIGNOS ZODIACALES",words:["ARIES","TAURO","GEMINIS","CANCER"],color:"purple"}]},{id:11,categories:[{name:"IDIOMAS",words:["INGLES","FRANCES","ALEMAN","CHINO"],color:"yellow"},{name:"FUENTES ENERGIA",words:["SOLAR","EOLICA","HIDRAULICA","NUCLEAR"],color:"green"},{name:"TECNOLOGIA",words:["ORDENADOR","CELULAR","TABLET","RELOJ"],color:"blue"},{name:"HUEVOS COCINA",words:["REVUELTOS","ESTRELLADOS","COCIDOS","POCHÉ"],color:"purple"}]},{id:12,categories:[{name:"RIOS FAMOSOS",words:["AMAZONAS","NILO","MISISIPI","DANUBIO"],color:"yellow"},{name:"PELUCHES ANIMALES",words:["OSO","CONEJO","PERRO","GATO"],color:"green"},{name:"SABORES HELADO",words:["VAINILLA","CHOCOLATE","FRESA","MENTA"],color:"blue"},{name:"ANIMALES VOLADORES",words:["AGUILA","MOSCA","MURCIELAGO","MARIPOSA"],color:"purple"}]},{id:13,categories:[{name:"LENGUAJES PROGRAMACION",words:["PYTHON","JAVASCRIPT","RUST","GO"],color:"yellow"},{name:"JUGUETES",words:["PELOTA","MUÑECA","YO-YO","ROMPECABEZAS"],color:"green"},{name:"BAILES",words:["SALSA","TANGO","BACHATA","MERENGUE"],color:"blue"},{name:"PUNTOS CARDINALES",words:["NORTE","SUR","ESTE","OESTE"],color:"purple"}]},{id:14,categories:[{name:"HOGAR",words:["COCINA","SALA","DORMITORIO","BAÑO"],color:"yellow"},{name:"OFICINA",words:["ESCRITORIO","SILLA","ORDENADOR","ARCHIVERO"],color:"green"},{name:"PLAYA",words:["ARENA","OLA","SOL","CONCHA"],color:"blue"},{name:"PARQUE",words:["ARBOL","BANCA","COLUMPIO","CESPED"],color:"purple"}]},{id:15,categories:[{name:"CORTOS ANIMADOS",words:["TOM y JERRY","PATO DONALD","MICKEY","PICAPIEDRAS"],color:"yellow"},{name:"ENLACES QUIMICOS",words:["COVALENTE","IONICO","METALICO","HIDROGENO"],color:"green"},{name:"AVES",words:["AGUILA","HALCÓN","BUHO","BUITRE"],color:"blue"},{name:"NOMBRES DE VARON",words:["JUAN","PEDRO","CARLOS","JOSE"],color:"purple"}]},{id:16,categories:[{name:"CIUDADES MEXICANAS",words:["CANCUN","GUADALAJARA","MONTERREY","PUEBLA"],color:"yellow"},{name:"GENEROS MUSICALES",words:["ROCK","POP","JAZZ","REGGAETON"],color:"green"},{name:"PLATOS TIPICOS",words:["TACOS","PAELLA","SUSHI","PASTA"],color:"blue"},{name:"GEMAS PRECIOSAS",words:["DIAMANTE","ESMERALDA","RUBI","ZAFIRO"],color:"purple"}]},{id:17,categories:[{name:"HOBBIES",words:["JARDINERIA","COCINA","PINTURA","FOTOGRAFIA"],color:"yellow"},{name:"ELEMENTOS QUIMICOS",words:["OXIGENO","HIDROGENO","CARBONO","NITROGENO"],color:"green"},{name:"RAZAS DE PERROS",words:["LABRADOR","PASTOR","BULLDOG","CHIHUAHUA"],color:"blue"},{name:"VERBOS IRREGULARES",words:["TENER","SER","ESTAR","HABER"],color:"purple"}]},{id:18,categories:[{name:"FORMAS ARTE",words:["PINTURA","ESCULTURA","MUSICA","LITERATURA"],color:"yellow"},{name:"REDES COMPUTADORAS",words:["INTERNET","INTRANET","EXTRANET","LAN"],color:"green"},{name:"ARBOLES FRUTALES",words:["MANZANO","NARANJO","LIMONERO","PERAL"],color:"blue"},{name:"NOTAS MUSICALES",words:["DO","RE","MI","FA"],color:"purple"}]},{id:19,categories:[{name:"CONSTELACIONES",words:["ORION","OSA MAYOR","OSA MENOR","CASSIOPEA"],color:"yellow"},{name:"RITMOS LATINOS",words:["SALSA","MERENGUE","CUMBIA","BACHATA"],color:"green"},{name:"MEDICAMENTOS",words:["IBUPROFENO","PARACETAMOL","ASPIRINA","ANTIBIOTICO"],color:"blue"},{name:"FECHAS IMPORTANTES",words:["ENERO","JULIO","OCTUBRE","DICIEMBRE"],color:"purple"}]},{id:20,categories:[{name:"TECNOLOGIA ANTIGUA",words:["FAX","DISQUETE","VHS","TELEFONO FIJO"],color:"yellow"},{name:"CIENCIAS",words:["BIOLOGIA","QUIMICA","FISICA","ASTRONOMIA"],color:"green"},{name:"PALABRAS AGUDAS",words:["CAFE","SOFA","AVION","BALON"],color:"blue"},{name:"JUEGOS DE MESA",words:["AJEDREZ","DOMINO","DAMAS","SERPIENTES"],color:"purple"}]},{id:21,categories:[{name:"CENTROS COMERCIALES",words:["TIENDA","CINE","RESTAURANTE","FARMACIA"],color:"yellow"},{name:"VOCABULARIO MARINO",words:["ANCLA","TIMON","VELA","PROA"],color:"green"},{name:"SUPERHEROES",words:["BATMAN","SUPERMAN","SPIDERMAN","WONDER WOMAN"],color:"blue"},{name:"LAS CUATRO ESTACIONES",words:["PRIMAVERA","VERANO","OTOÑO","INVIERNO"],color:"purple"}]},{id:22,categories:[{name:"MAMIFEROS ACUATICOS",words:["BALLENA","DELFIN","NARVAL","FOCA"],color:"yellow"},{name:"FAMILIA",words:["PADRE","MADRE","HIJO","HERMANO"],color:"green"},{name:"ORDENADORES",words:["MONITOR","TECLADO","RATON","CPU"],color:"blue"},{name:"MONEDAS DEL MUNDO",words:["DOLAR","EURO","PESO","LIBRA"],color:"purple"}]},{id:23,categories:[{name:"FESTIVIDADES",words:["NAVIDAD","PASCUA","HALLOWEEN","AÑO NUEVO"],color:"yellow"},{name:"AROMAS COMUNES",words:["LAVANDA","ROSAS","VAINILLA","CAFE"],color:"green"},{name:"DINOSAURIOS",words:["T-REX","TRICERATOPS","ESTEGOSAURIO","PTERODACTILO"],color:"blue"},{name:"CEREALES",words:["TRIGO","ARROZ","AVENA","MAIZ"],color:"purple"}]},{id:24,categories:[{name:"TRANSPORTE PUBLICO",words:["AUTOBUS","METRO","TAXI","TRANVIA"],color:"yellow"},{name:"APARATOS MEDICOS",words:["ESTETOSCOPIO","TERMOMETRO","JERINGA","RAYOS X"],color:"green"},{name:"CANCIONES POPULARES",words:["DESPACITO","GASOLINA","BAILANDO","LA MACARENA"],color:"blue"},{name:"NUMEROS PRIMOS",words:["DOS","TRES","CINCO","SIETE"],color:"purple"}]},{id:25,categories:[{name:"REDES PESCA",words:["AGUA","PEZ","RED","CAÑA"],color:"yellow"},{name:"MOLUSCOS",words:["PULPO","CALAMAR","MEJILLON","ALMEJA"],color:"green"},{name:"MARCAS AUTOS",words:["TOYOTA","FORD","HONDA","BMW"],color:"blue"},{name:"COMPONENTES PC",words:["RAM","SSD","GPU","CPU"],color:"purple"}]},{id:26,categories:[{name:"TRASTORNOS SUEÑO",words:["INSOMNIO","SONAMBULISMO","APNEA","NARCOLEPSIA"],color:"yellow"},{name:"FENOMENOS CLIMA",words:["TORNADO","HURACAN","MONZON","SEQUIA"],color:"green"},{name:"PRINCESAS DISNEY",words:["CENICIENTA","BLANCANIEVES","ARIEL","BELLA"],color:"blue"},{name:"MATERIALES RECICLABLES",words:["VIDRIO","PLASTICO","PAPEL","ALUMINIO"],color:"purple"}]},{id:27,categories:[{name:"PLATAFORMAS STREAMING",words:["NETFLIX","DISNEY+","MAX","PRIME"],color:"yellow"},{name:"HIERBAS AROMATICAS",words:["ALBAHACA","ROMERO","OREGANO","PEREJIL"],color:"green"},{name:"PINTORES FAMOSOS",words:["PICASSO","DA VINCI","VAN GOGH","MONET"],color:"blue"},{name:"PRIMEROS AUXILIOS",words:["VENDA","GASA","ALCOHOL","YODO"],color:"purple"}]},{id:28,categories:[{name:"CONTINENTES",words:["AMERICA","EUROPA","ASIA","AFRICA"],color:"yellow"},{name:"POSTRES",words:["FLAN","HELADO","PASTEL","GELATINA"],color:"green"},{name:"MUSCULOS",words:["BICEPS","TRICEPS","PECTORAL","ABDOMEN"],color:"blue"},{name:"GASES ATMOSFERA",words:["OXIGENO","NITROGENO","ARGON","DIOXIDO"],color:"purple"}]},{id:29,categories:[{name:"ISLAS FAMOSAS",words:["BALI","MADAGASCAR","GROENLANDIA","CURAZAO"],color:"yellow"},{name:"FRUTOS SECOS",words:["ALMENDRA","NUEZ","AVELLANA","MANI"],color:"green"},{name:"SISTEMAS OPERATIVOS",words:["WINDOWS","MACOS","LINUX","ANDROID"],color:"blue"},{name:"OLIMPIADAS DEPORTES",words:["ATLETISMO","NATACION","GIMNASIA","ESGRIMA"],color:"purple"}]},{id:30,categories:[{name:"VEGETALES",words:["ZANAHORIA","BROCOLI","ESPINACA","CEBOLLA"],color:"yellow"},{name:"MODELOS DE NEGOCIO",words:["SaaS","E-COMMERCE","FRANQUICIA","MARKETPLACE"],color:"green"},{name:"TIPOS DE NUBES",words:["CUMULUS","STRATUS","CIRRUS","NIMBUS"],color:"blue"},{name:"PALABRAS ESDRUJULAS",words:["METODO","CAMARA","TELEFONO","MUSICA"],color:"purple"}]},{id:31,categories:[{name:"GRANDES PINTORES",words:["REMBRANDT","VELAZQUEZ","GOYA","DALI"],color:"yellow"},{name:"TECNICAS ESTUDIO",words:["SUBRAYAR","RESUMIR","MAPEAR","REPETIR"],color:"green"},{name:"LINEAS DEFENSA",words:["PRIMERA","SEGUNDA","TERCERA","CUARTA"],color:"blue"},{name:"CORTES CARNE",words:["LOMO","SOLOMILLO","CHULETA","PECHUGA"],color:"purple"}]},{id:32,categories:[{name:"GOBERNANTES",words:["PRESIDENTE","MINISTRO","SENADOR","ALCALDE"],color:"yellow"},{name:"SENTIDOS",words:["VISTA","OIDO","OLFATO","GUSTO"],color:"green"},{name:"TIEMPOS VERBALES",words:["PASADO","PRESENTE","FUTURO","CONDICIONAL"],color:"blue"},{name:"PALABRAS GRAVES",words:["ARBOL","CARPETA","LIBRO","MESA"],color:"purple"}]},{id:33,categories:[{name:"ATLETISMO PRUEBAS",words:["VELOCIDAD","SALTO","LANZAMIENTO","RELEVOS"],color:"yellow"},{name:"MATERIALES OFICINA",words:["GRAPADORA","PERFORADORA","CLIP","POST-IT"],color:"green"},{name:"VOCABULARIO AVION",words:["TRIPULACION","PILOTO","AZAFATA","PASAJERO"],color:"blue"},{name:"PLANETAS GASEOSOS",words:["JUPITER","SATURNO","URANO","NEPTUNO"],color:"purple"}]},{id:34,categories:[{name:"REDES INALAMBRICAS",words:["WIFI","BLUETOOTH","NFC","5G"],color:"yellow"},{name:"ALIMENTOS GRANJA",words:["HUEVO","LECHE","QUESO","MIEL"],color:"green"},{name:"PLATOS MARISCO",words:["CEVICHE","PAELLA","CALDO","COCTEL"],color:"blue"},{name:"SELECCION FUTBOL",words:["BRASIL","ARGENTINA","ALEMANIA","FRANCIA"],color:"purple"}]},{id:35,categories:[{name:"ODONTOLOGIA",words:["CEPILLO","PASTA","HILO","ENJUAGUE"],color:"yellow"},{name:"DISNEY PERSONAJES",words:["MICKEY","MINNIE","DONALD","GOOFY"],color:"green"},{name:"COLORES CALIDOS",words:["ROJO","NARANJA","AMARILLO","ROSADO"],color:"blue"},{name:"RIOS AMERICANOS",words:["BRAVO","COLORADO","AMAZONAS","PARANA"],color:"purple"}]},{id:36,categories:[{name:"CIUDADES ESPAÑOLAS",words:["BARCELONA","MADRID","VALENCIA","SEVILLA"],color:"yellow"},{name:"CUBIERTOS",words:["CUCHILLO","TENEDOR","CUCHARA","SERVILETA"],color:"green"},{name:"EXPLORADORES",words:["COLON","MAGELLANES","COOK","PIZARRO"],color:"blue"},{name:"PALABRAS TERMINAN A",words:["CASA","MESA","SILLA","FLORA"],color:"purple"}]},{id:37,categories:[{name:"PELICULAS FAMOSAS",words:["TITANIC","AVATAR","STAR WARS","HARRY POTTER"],color:"yellow"},{name:"MONUMENTOS",words:["TORRE EIFFEL","ESTATUA LIBERTAD","COLISEO","PIRAMIDES"],color:"green"},{name:"FLORES PRIMAVERA",words:["TULIPAN","MARGARITA","JAZMIN","LILA"],color:"blue"},{name:"GANADORA OSCAR",words:["PELICULA","ACTOR","DIRECTOR","GUION"],color:"purple"}]},{id:38,categories:[{name:"CLUBES FUTBOL",words:["REAL MADRID","BARCELONA","MANCHESTER","JUVENTUS"],color:"yellow"},{name:"TECNICAS ARTE",words:["OLEO","ACUARELA","PASTEL","CARBON"],color:"green"},{name:"BILLETERA CRIPTO",words:["META MASK","TRUST WALLET","EXODUS","LEDGER"],color:"blue"},{name:"EDITORES CODIGO",words:["VS CODE","SUBLIME","INTELLIJ","VIM"],color:"purple"}]},{id:39,categories:[{name:"VOCABULARIO BANCO",words:["CUENTA","AHORRO","PRESTAMO","TARJETA"],color:"yellow"},{name:"FESTIVIDADES MEXICO",words:["DIA MUERTOS","NAVIDAD","SEMANA SANTA","INDEPENDENCIA"],color:"green"},{name:"TIPOS DE QUESO",words:["MOZZARELLA","CHEDDAR","SUIZO","PARMESANO"],color:"blue"},{name:"ALGORITMOS ORDENAR",words:["BURBUJA","INSERCION","SELECCION","RAPIDO"],color:"purple"}]},{id:40,categories:[{name:"PLATAFORMAS VIDEO",words:["YOUTUBE","TIKTOK","INSTAGRAM","FACEBOOK"],color:"yellow"},{name:"SIGNOS DE PUNTUACION",words:["COMA","PUNTO","NUMERAL","ARROBA"],color:"green"},{name:"ANIMALES VENENOSOS",words:["SERPIENTE","ESCORPION","ARANA","MEDUSA"],color:"blue"},{name:"PARTES PREGUNTA",words:["QUE","QUIEN","DONDE","CUANDO"],color:"purple"}]},{id:41,categories:[{name:"ANIMALES AFRICA",words:["LEON","ELEFANTE","JIRAFA","CEBRA"],color:"yellow"},{name:"ACCIONES",words:["CORRER","SALTAR","NADAR","VOLAR"],color:"green"},{name:"TEORIA MUSICAL",words:["RITMO","MELODIA","ARMONIA","COMPAS"],color:"blue"},{name:"MARCAS DEPORTIVAS",words:["NIKE","ADIDAS","PUMA","REEBOK"],color:"purple"}]},{id:42,categories:[{name:"PAISES SUDAMERICA",words:["PERU","COLOMBIA","CHILE","ARGENTINA"],color:"yellow"},{name:"UTENSILIOS COCINA",words:["OLLA","SARTEN","CUCHILLO","ESPATULA"],color:"green"},{name:"TIPOS DE VINO",words:["TINTO","BLANCO","ROSADO","ESPUMOSO"],color:"blue"},{name:"SISTEMA SOLAR",words:["SOL","LUNA","ESTRELLA","COMETA"],color:"purple"}]},{id:43,categories:[{name:"MARCAS TECNOLOGIA",words:["GOOGLE","APPLE","MICROSOFT","META"],color:"yellow"},{name:"HIJOS",words:["BEBE","NIÑO","ADOLESCENTE","ADULTO"],color:"green"},{name:"CULTIVOS",words:["MAIZ","TRIGO","SOJA","ARROZ"],color:"blue"},{name:"TERMINOS MEDICINA",words:["DIAGNOSTICO","PRONOSTICO","SINTOMA","TRATAMIENTO"],color:"purple"}]},{id:44,categories:[{name:"REDES SOCIALES CHINAS",words:["TIKTOK","WECHAT","XIAOHONGSHU","DOUYIN"],color:"yellow"},{name:"COSMETICOS",words:["LABIAL","RIMEL","BASE","POLVO"],color:"green"},{name:"ANIMALES POLARES",words:["OSO POLAR","PINGUINO","FOCA","MOFETA"],color:"blue"},{name:"CIUDADES ANTIGUAS",words:["POMPEYA","BABILONIA","TEBAS","TROYA"],color:"purple"}]},{id:45,categories:[{name:"TIPOS DE CAFE",words:["ESPRESSO","CAPUCHINO","LATTE","AMERICANO"],color:"yellow"},{name:"ESTILOS ARQUITECTURA",words:["GOTICO","BARROCO","MODERNO","CLASICO"],color:"green"},{name:"ANIMALES NOCTURNOS",words:["BUHO","MURCIELAGO","LOBO","LUCIERNAGA"],color:"blue"},{name:"VOCABULARIO NÁUTICO",words:["POPA","PROA","ESTRIBOR","BABOR"],color:"purple"}]},{id:46,categories:[{name:"BOSQUES",words:["AMAZONIA","SELVA","TAIGA","BOSQUE"],color:"yellow"},{name:"VIAJE",words:["MALETA","PASAJE","HOTEL","VUELO"],color:"green"},{name:"FUTBOL TERMINOS",words:["GOL","PENAL","FUERA","CORNEO"],color:"blue"},{name:"PARTES DEL OJO",words:["IRIS","PUPILA","RETINA","CORNEA"],color:"purple"}]},{id:47,categories:[{name:"JUEGOS INFANTILES",words:["CARRERA","ESCONDITE","COMBA","PILLA"],color:"yellow"},{name:"CATEGORIAS GRAMATICALES",words:["SUSTANTIVO","VERBO","ADJETIVO","ADVERBIO"],color:"green"},{name:"MINERALES",words:["CUARZO","FELDESPATO","MICA","CALCITA"],color:"blue"},{name:"PALABRAS HOMOFONAS",words:["VACA","BACA","HOLA","OLA"],color:"purple"}]},{id:48,categories:[{name:"ANIMALES GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"yellow"},{name:"MATERIALES CONSTRUCCION",words:["LADRILLO","CEMENTO","ARENA","MADERA"],color:"green"},{name:"CORRIENTES ARTISTICAS",words:["RENACIMIENTO","ROMANTICISMO","IMPRESIONISMO","CUBISMO"],color:"blue"},{name:"ADJETIVOS NUMERALES",words:["PRIMERO","SEGUNDO","TERCERO","ULTIMO"],color:"purple"}]},{id:49,categories:[{name:"CENTROS COMERCIALES",words:["GALERIA","TIENDA","KIOSCO","MERCADO"],color:"yellow"},{name:"PERSONAS MITICAS",words:["HERCULES","ZEUS","ATENEA","PROMETEO"],color:"green"},{name:"DISNEY PELICULAS",words:["ALADDIN","MULAN","TARZAN","BLANCA"],color:"blue"},{name:"GENEROS LITERARIOS",words:["NOVELA","POESIA","DRAMA","ENSAYO"],color:"purple"}]},{id:50,categories:[{name:"MARAVILLAS MUNDO",words:["CHICHEN ITZA","MACHU PICCHU","COLISEO","TAJ MAHAL"],color:"yellow"},{name:"PARTES CASA",words:["PUERTA","VENTANA","TECHO","SUELO"],color:"green"},{name:"DEPORTES ACUATICOS",words:["SURF","BUCEO","REMO","VELA"],color:"blue"},{name:"HISTORIA ANTIGUA",words:["EGIPTO","GRECIA","ROMA","PERSA"],color:"purple"}]},{id:51,categories:[{name:"DULCES MEXICANOS",words:["CAJETA","CHAMOY","PALETA","GOMITA"],color:"yellow"},{name:"MUEBLES COCINA",words:["ALACENA","MESADA","GAVETA","ENCIMERA"],color:"green"},{name:"LIDERES MUNDO",words:["PRESIDENTE","REY","PRIMER MINISTRO","EMPERADOR"],color:"blue"},{name:"PLACAS TECTONICAS",words:["PACIFICA","AFRICANA","EUROASIATICA","NORTEAMERICANA"],color:"purple"}]},{id:52,categories:[{name:"TECLAS TECLADO",words:["ESPACIO","ENTRAR","BORRAR","MAYUS"],color:"yellow"},{name:"PUERTOS PC",words:["USB","HDMI","ETHERNET","AUDIO"],color:"green"},{name:"ANIMALES EXTINTOS",words:["DODO","TIGRE DIENTE","MAMUT","PEREZOSO"],color:"blue"},{name:"IDIOMAS INDIGENAS",words:["NAHUATL","MAYA","QUECHUA","GUARANI"],color:"purple"}]},{id:53,categories:[{name:"PELICULAS ANIMADAS",words:["SHREK","BUSCANDO A NEMO","TOY STORY","FROZEN"],color:"yellow"},{name:"PLATOS ESPAÑOLES",words:["TORTILLA","GAZPACHO","JAMON","CHURRO"],color:"green"},{name:"PREMIOS MUSICA",words:["GRAMMY","MTV","BILLBOARD","LATIN"],color:"blue"},{name:"FORMAS DE ONDA",words:["SENO","COSENO","CUADRADA","DIENTE"],color:"purple"}]},{id:54,categories:[{name:"TIENDAS ROPA",words:["ZARA","H&M","UNIQLO","MANGO"],color:"yellow"},{name:"ROPA DEPORTIVA",words:["SUDADERA","LEGGINGS","CHAQUE","TOP"],color:"green"},{name:"ECONOMIA",words:["INFLACION","CRECIMIENTO","RECESION","ESTANFLACION"],color:"blue"},{name:"IMPUREZAS AGUA",words:["SAL","ARENA","BARRO","ALGA"],color:"purple"}]},{id:55,categories:[{name:"APPS MENSAJERIA",words:["WHATSAPP","TELEGRAM","SIGNAL","MESSENGER"],color:"yellow"},{name:"PERSONAJES CARICATURAS",words:["BOB","SIMPSON","PATO","POKEMON"],color:"green"},{name:"TIPOS DE NIEVE",words:["POLVO","HUMEDA","COMPACTA","HIELO"],color:"blue"},{name:"CIENCIA FICCION",words:["VIAJE TIEMPO","CLONACION","TELEPATIA","TELETRANSPORTE"],color:"purple"}]},{id:56,categories:[{name:"PESCADOS COMUNES",words:["SALMON","ATUN","MERLUZA","TRUCHA"],color:"yellow"},{name:"MATERIALES PREHISTORIA",words:["PIEDRA","HUESO","MADERA","CUERO"],color:"green"},{name:"PALABRAS ONOMATOPEYAS",words:["GUAU","MIAU","MU","BEE"],color:"blue"},{name:"REFERENCIAS CINE",words:["ACCION","DRAMA","COMEDIA","TERROR"],color:"purple"}]},{id:57,categories:[{name:"PLATAFORMAS MUSICA",words:["SPOTIFY","APPLE MUSIC","YOUTUBE MUSIC","TIDAL"],color:"yellow"},{name:"COSAS DE OFICINA",words:["IMPRESORA","ESCANER","FOTOCOPIADORA","FAX"],color:"green"},{name:"ORGANOS HUMANOS",words:["CORAZON","PULMON","HIGADO","RIÑON"],color:"blue"},{name:"CLASICOS LITERATURA",words:["CIEN AÑOS","DON QUIJOTE","LAZARILLO","CUMBRES"],color:"purple"}]},{id:58,categories:[{name:"JUEGOS MESA MODERNOS",words:["CATAN","UNO","MUNCHKIN","PANDEMIC"],color:"yellow"},{name:"ROPA FORMAL",words:["CORBATA","BLUSA","TACON","TRAJE"],color:"green"},{name:"MARCAS TELEFONOS",words:["IPHONE","SAMSUNG","XIAOMI","HUAWEI"],color:"blue"},{name:"PALABRAS REPETIDAS",words:["COCO","PAPA","NENE","MAMA"],color:"purple"}]},{id:59,categories:[{name:"ISLAS CARIBE",words:["CUBA","PUERTO RICO","REPUBLICA DOMINICANA","JAMAICA"],color:"yellow"},{name:"CUIDADO PERSONAL",words:["JABON","SHAMPOO","PERFUME","CREMA"],color:"green"},{name:"HERIDAS",words:["CORTE","QUEMADURA","MORETON","RASGUNO"],color:"blue"},{name:"ESTILOS DE VIDA",words:["SALUDABLE","SEDENTARIO","ACTIVO","MINIMALISTA"],color:"purple"}]},{id:60,categories:[{name:"COMIDA RAPIDA",words:["HAMBURGUESA","PIZZA","TACO","SANDWICH"],color:"yellow"},{name:"HERRAMIENTAS JARDIN",words:["PALA","RASTRILLO","TIJERAS","MANGUERA"],color:"green"},{name:"CUERPOS CELESTES",words:["ASTEROIDE","METEORITO","COMETA","PLANETA"],color:"blue"},{name:"DEMONIOS",words:["LUCIFER","SATANAS","BELCEBU","MEFISTO"],color:"purple"}]},{id:61,categories:[{name:"PARQUES NACIONALES",words:["YOSEMITE","BANFF","TORRES DEL PAINE","IGUAZU"],color:"yellow"},{name:"VOCABULARIO BANCA",words:["CUENTA","TARJETA","CHEQUE","TRANSFERENCIA"],color:"green"},{name:"CORTES PELO",words:["LARGO","CORTO","MULTICAPA","RAPADO"],color:"blue"},{name:"SABORES UMAMI",words:["SOYA","TOMATE","CHAMPIÑON","QUESO"],color:"purple"}]},{id:62,categories:[{name:"APPS VIAJES",words:["UBER","AIRBNB","BOOKING","TRIPADVISOR"],color:"yellow"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ECLIPSE","AURORA","ESPEJISMO"],color:"green"},{name:"VIDA UNIVERSIDAD",words:["CLASE","EXAMEN","BIBLIOTECA","CAFETERIA"],color:"blue"},{name:"TINTES CABELLO",words:["CASTAÑO","RUBIO","NEGRO","ROJO"],color:"purple"}]},{id:63,categories:[{name:"ANIMALES PATAS",words:["PERRO","GATO","CONEJO","HAMSTER"],color:"yellow"},{name:"GRABACION AUDIO",words:["MICROFONO","AURICULARES","MEZCLADOR","MONITOR"],color:"green"},{name:"LUGARES HISTORICOS",words:["ACROPOLIS","STONEHENGE","PETRA","ANGKOR"],color:"blue"},{name:"CIUDADES FUTURISTAS",words:["DUBAI","SINGAPUR","TOKIO","SEUL"],color:"purple"}]},{id:64,categories:[{name:"REPOSTERIA",words:["HARINA","AZUCAR","HUEVO","MANTEQUILLA"],color:"yellow"},{name:"CICLISMO",words:["BICICLETA","CASCO","CARRETERA","MONTAÑA"],color:"green"},{name:"EXPLORACION ESPACIAL",words:["NASA","COHETE","SATELITE","ESTACION"],color:"blue"},{name:"EMISORAS RADIO",words:["LOS 40","KISS FM","RNE","CADENA SER"],color:"purple"}]},{id:65,categories:[{name:"HERIDAS PRIMEROS AUXILIOS",words:["RASPADURA","QUEMADURA","HEMATOMA","TORCEDURA"],color:"yellow"},{name:"ANIMALES ACORAZADOS",words:["TORTUGA","ARMADILLO","CANGREJO","CARACOL"],color:"green"},{name:"INSTRUMENTOS CUERDA",words:["GUITARRA","VIOLIN","VIOLONCHELO","ARPA"],color:"blue"},{name:"CUALIDADES FISICAS",words:["FUERZA","VELOCIDAD","RESISTENCIA","FLEXIBILIDAD"],color:"purple"}]},{id:66,categories:[{name:"FRUTAS TROPICALES",words:["MANGO","PAPAYA","GUANABANA","RAMBUTAN"],color:"yellow"},{name:"SALUD MENTAL",words:["ESTRES","ANSEDAD","DEPRESION","BIENESTAR"],color:"green"},{name:"FOTOGRAFIA",words:["CAMARA","LENTE","FLASH","TRIPODE"],color:"blue"},{name:"PROTOCOLOS INTERNET",words:["HTTP","FTP","DNS","TCP"],color:"purple"}]},{id:67,categories:[{name:"ANIMALES MARINOS PEQUEÑOS",words:["CAMARON","CANGREJO","LANGOSTA","MEJILLON"],color:"yellow"},{name:"PUERTOS Y CONECTORES",words:["USB-C","THUNDERBOLT","LIGHTNING","JACK"],color:"green"},{name:"COLORES FRIOS",words:["AZUL","VERDE","VIOLETA","TURQUESA"],color:"blue"},{name:"PRESIDENTES MEXICO",words:["OBRADOR","PEÑA","CALDERON","FOX"],color:"purple"}]},{id:68,categories:[{name:"VERBOS MOVIMIENTO",words:["IR","VENIR","LLEGAR","SALIR"],color:"yellow"},{name:"TIPOS TELA",words:["ALGODON","POLIESTER","LINO","SEDA"],color:"green"},{name:"ANIMALES CAMUFLAJE",words:["CAMALEON","PULPO","SEPIA","LEOPARDO"],color:"blue"},{name:"SISTEMAS NUMERICOS",words:["BINARIO","OCTAL","DECIMAL","HEXADECIMAL"],color:"purple"}]},{id:69,categories:[{name:"MARCAS LUPAS GAFAS",words:["RAY-BAN","OAKLEY","PERSOL","POLAROID"],color:"yellow"},{name:"PRACTICAS RELIGIOSAS",words:["ORACION","MEDITACION","AYUNO","PEREGRINACION"],color:"green"},{name:"SERIES NETFLIX",words:["STRANGER THINGS","CASA PAPEL","BRIDGERTON","SQUID GAME"],color:"blue"},{name:"PALABRAS LATINAS",words:["ET CETERA","EXITOS","CURRICULUM","ALUMNI"],color:"purple"}]},{id:70,categories:[{name:"BATERIAS COCINA",words:["OLLA EXPRES","WOK","CAZUELA","PAELLERA"],color:"yellow"},{name:"ESTRATEGIAS NEGOCIO",words:["MARKETING","VENTAS","LOGISTICA","INNOVACION"],color:"green"},{name:"ESTRELLAS FAMOSAS",words:["SIRIO","POLARIS","BETELGEUSE","VEGA"],color:"blue"},{name:"SINDROMES",words:["ESTOCKHOLM","DOWN","ASPERGER","BURNOUT"],color:"purple"}]},{id:71,categories:[{name:"FESTIVIDADES CULTURALES",words:["CARNAVAL","FERIA","PROCESION","ROMERIA"],color:"yellow"},{name:"CIUDADES EUROPA",words:["PRAGA","VIENA","BUDAPEST","LISBOA"],color:"green"},{name:"PERSONAJES HISTORICOS",words:["CORTES","PIZARRO","COLON","MAGELLANES"],color:"blue"},{name:"CONTRASENAS SEGURIDAD",words:["PIN","HUELLA","IRIS","FACIAL"],color:"purple"}]},{id:72,categories:[{name:"PASTAS ITALIANAS",words:["SPAGHETTI","FETTUCCINE","PENNE","LASAGNA"],color:"yellow"},{name:"LENGUAJES CORPORAL",words:["GESTO","POSTURA","MIRADA","SONRISA"],color:"green"},{name:"MARCAS HOTELES",words:["MARRIOTT","HILTON","GARDEN","HYATT"],color:"blue"},{name:"VIAS FERROCARRIL",words:["VIA","TRAVIESA","BALASTO","CARRIL"],color:"purple"}]},{id:73,categories:[{name:"TIPOS PAN",words:["BLANCO","INTEGRAL","CENTENO","MASA MADRE"],color:"yellow"},{name:"ALFABETO GRIEGO",words:["ALFA","BETA","GAMMA","DELTA"],color:"green"},{name:"TAREAS DOMESTICAS",words:["BARRER","FREGAR","PLANCHAR","POLVO"],color:"blue"},{name:"ANIMALES PREHISTORICOS",words:["MEGALODON","MAMUT","DODO","TIGRE DIENTE"],color:"purple"}]},{id:74,categories:[{name:"SITIOS WEB COMPRAS",words:["AMAZON","MERCADO LIBRE","EBAY","SHEIN"],color:"yellow"},{name:"APRENDIZAJE",words:["LEER","ESCRIBIR","ESCUCHAR","OBSERVAR"],color:"green"},{name:"SUPERHORRO PODERES",words:["INVISIBILIDAD","VUELO","TELEPATIA","FUERZA"],color:"blue"},{name:"VOCABULARIO JUDICIAL",words:["JUEZ","FISCAL","ABOGADO","TESTIGO"],color:"purple"}]},{id:75,categories:[{name:"TECNICAS PESCA",words:["CAÑA","RED","ANZUELO","CARNADA"],color:"yellow"},{name:"INVENTOS ANTIGUOS",words:["RUEDA","FUEGO","ARADO","VELA"],color:"green"},{name:"RUTAS MIGRACION",words:["AVES","MARIPOSA","BALLENA","SALMON"],color:"blue"},{name:"TERMINOS MUSICALES",words:["ALEGRO","ANDANTE","PRESTO","LARGO"],color:"purple"}]},{id:76,categories:[{name:"ACCESORIOS MODA",words:["BOLSO","CINTURON","PAÑUELO","GAFAS"],color:"yellow"},{name:"FIGURAS RETORICAS",words:["METAFORA","SIMIL","HIPERBOLE","IRONIA"],color:"green"},{name:"COMPETENCIAS LABORALES",words:["LIDERAZGO","EMPATIA","ADAPTABILIDAD","INICIATIVA"],color:"blue"},{name:"PALABRAS PALINDROMAS",words:["RECONOCER","SOMETEMOS","ANILINA","SALAS"],color:"purple"}]},{id:77,categories:[{name:"NATACION ESTILOS",words:["LIBRE","ESPALDA","PECHO","MARIPOSA"],color:"yellow"},{name:"COCINA MEXICANA",words:["CHILE","ALUBIA","ARROZ","NOPAL"],color:"green"},{name:"HONGOS",words:["CHAMPIÑON","SETAS","TRUFA","PORTOBELLO"],color:"blue"},{name:"PALABRAS ACENTO",words:["TILDE","GRAVE","AGUDA","ESDRUJULA"],color:"purple"}]},{id:78,categories:[{name:"ANIMALES SALTADORES",words:["RANA","CANGURO","GRILLO","PULGA"],color:"yellow"},{name:"COCTELERIA",words:["VASO","HIELO","LIMON","MENTA"],color:"green"},{name:"MAPAS",words:["MAPA","BRUJULA","GPS","CARTEL"],color:"blue"},{name:"PARADAS RESPIRACION",words:["PULMON","BRONQUIO","ALVEOLO","DIAFRAGMA"],color:"purple"}]},{id:79,categories:[{name:"VENDEDORES CALLEJEROS",words:["MERCADO","PUESTO","CARRITO","TIANGUIS"],color:"yellow"},{name:"DISPOSITIVOS ALMACENAMIENTO",words:["USB","DISCO","SD","NUBE"],color:"green"},{name:"ACCIDENTES GEOGRAFICOS",words:["CABO","GOLFO","ESTRECHO","PENINSULA"],color:"blue"},{name:"NUMEROS IRRACIONALES",words:["PI","E","RAIZ","PHI"],color:"purple"}]},{id:80,categories:[{name:"HISTORIA DE MEXICO",words:["AZTECA","MAYA","TOLTECA","OLMECA"],color:"yellow"},{name:"ACCESORIOS ELECTRONICOS",words:["CARGADOR","FUNDA","CABLE","ADAPTADOR"],color:"green"},{name:"CONDIMENTOS",words:["SAL","PIMIENTA","COMINO","PAPRIKA"],color:"blue"},{name:"IDIOMAS OFICIALES",words:["INGLES","ESPAÑOL","FRANCES","CHINO"],color:"purple"}]},{id:81,categories:[{name:"ESPECIES MADERA",words:["ROBLE","CAOBA","NOGAL","CEDRO"],color:"yellow"},{name:"ROPA INVIERNO",words:["CHAMARRA","BUFANDA","GUANTES","GORRO"],color:"green"},{name:"VIDA EN EL CAMPO",words:["PUEBLO","RANCHO","GRANJA","HUERTO"],color:"blue"},{name:"PALABRAS CORTAS",words:["SOL","MAR","LUZ","FLOR"],color:"purple"}]},{id:82,categories:[{name:"DEPORTES EXTREMOS",words:["PARACAIDAS","BUNGEE","ALPINISMO","RAFTING"],color:"yellow"},{name:"JARDIN INTERIOR",words:["MACETA","TIERRA","RIEGO","LUZ"],color:"green"},{name:"PRODUCTOS LACTEOS",words:["YOGURT","CREMA","MANTEQUILLA","CUAJADA"],color:"blue"},{name:"DIOSES GRIEGOS",words:["ZEUS","POSEIDON","HADES","ARES"],color:"purple"}]},{id:83,categories:[{name:"VIDEOJUEGOS",words:["MARIO","MINECRAFT","FORTNITE","ZELDA"],color:"yellow"},{name:"AYUNO",words:["AGUA","ZUMO","TE","CALDO"],color:"green"},{name:"ESPECIES EN PELIGRO",words:["PANDA","TIGRE","ELEFANTE","GORILA"],color:"blue"},{name:"PREMIOS NOBEL",words:["PAZ","CIENCIA","LITERATURA","MEDICINA"],color:"purple"}]},{id:84,categories:[{name:"PARQUES TEMATICOS",words:["DISNEY","UNIVERSAL","SIX FLAGS","XETULUL"],color:"yellow"},{name:"COLECCIONES",words:["MONEDAS","ESTAMPILLAS","FIGURAS","TARJETAS"],color:"green"},{name:"ALIMENTOS FERMENTADOS",words:["KIMCHI","CHUCUT","KEFIR","EN CURTIDO"],color:"blue"},{name:"ACORDES MUSICALES",words:["MAYOR","MENOR","AUMENTADO","DISMINUIDO"],color:"purple"}]},{id:85,categories:[{name:"PALABRAS DE ORIGEN",words:["ORIGEN","RAIZ","ETIMOLOGIA","FUENTE"],color:"yellow"},{name:"FORMAS DE TRANSPORTE",words:["CAMION","MOTO","BICI","PATINETA"],color:"green"},{name:"TEJIDOS ANIMALES",words:["LANA","CABRA","ALPACA","MERINO"],color:"blue"},{name:"FECHAS PATRIAS",words:["QUINCE","VEINTE","CINCO","DIEZ"],color:"purple"}]},{id:86,categories:[{name:"GOLOSINAS",words:["CHICLE","PALETA","GOMITAS","CARAMELO"],color:"yellow"},{name:"HOGAR INTELIGENTE",words:["ALEXA","TERMOSTATO","CAMARA","BOMBILLA"],color:"green"},{name:"ANIMALES RAPIDOS",words:["GUEPARDO","HALCÓN","GACELA","TIGRE"],color:"blue"},{name:"MATERIALES DERECHO",words:["CODIGO","ARTICULO","LICENCIA","CONTRATO"],color:"purple"}]},{id:87,categories:[{name:"MISCELANEA PAPELERIA",words:["HOJA","SOBRE","CARPETA","ETIQUETA"],color:"yellow"},{name:"VERBOS ESTADO",words:["SER","ESTAR","PARECER","SENTIR"],color:"green"},{name:"ESTRATEGIAS AJEDREZ",words:["APERTURA","MEDIO","FINAL","GAMBITO"],color:"blue"},{name:"ARQUITECTURA MODERNA",words:["RASCACIELOS","CUPULA","TORRE","DOMO"],color:"purple"}]},{id:88,categories:[{name:"ANIMALES LENTOS",words:["PEREZOSO","TORTUGA","CARACOL","KOALA"],color:"yellow"},{name:"COMIDA CALLEJERA",words:["HOT DOG","ELOTE","TACO","EMPANADA"],color:"green"},{name:"VENTANA ORDENADOR",words:["MAXIMIZAR","MINIMIZAR","CERRAR","RESTAURAR"],color:"blue"},{name:"EVENTOS NATURALEZA",words:["ECLIPSE","SOLSTICIO","EQUINOCCIO","LLUVIA"],color:"purple"}]},{id:89,categories:[{name:"TIPOS DE CERVEZA",words:["CLARA","OSCURA","ARTESANAL","SIN ALCOHOL"],color:"yellow"},{name:"HABILIDADES BLANDAS",words:["COMUNICACION","TRABAJO EQUIPO","RESOLUCION","LIDERAZGO"],color:"green"},{name:"CAPAS ATMOSFERA",words:["TROPOSFERA","ESTRATOSFERA","IONOSFERA","EXOSFERA"],color:"blue"},{name:"PALABRAS CONTRACTAS",words:["APOSTROFE","CONTRACCION","DEL","AL"],color:"purple"}]},{id:90,categories:[{name:"MUSICA LATINA",words:["REGGAETON","SALSA","BANDA","BACHATA"],color:"yellow"},{name:"UTENSILIOS COCINA BASICOS",words:["OLLA","SARTEN","VASO","PLATO"],color:"green"},{name:"MODELOS ESTADISTICA",words:["MEDIA","MEDIANA","MODA","VARIANZA"],color:"blue"},{name:"TIPOS DE PIEL",words:["SECA","GRASA","MIXTA","SENSIBLE"],color:"purple"}]},{id:91,categories:[{name:"LIBROS FAMOSOS",words:["HARRY POTTER","SEÑOR ANILLOS","GAME OF THRONES","CRONICA"],color:"yellow"},{name:"YESOS ROTURAS",words:["FRACTURA","ESCANDA","VENDAS","FERULA"],color:"green"},{name:"MATERIALES BLANDOS",words:["ARCILLA","PLASTILINA","GOMA","ESPUMA"],color:"blue"},{name:"ADJETIVOS SUPERLATIVOS",words:["BUENO","MALO","GRANDE","PEQUEÑO"],color:"purple"}]},{id:92,categories:[{name:"DEPORTES RAQUETA",words:["TENIS","BADMINTON","SQUASH","PADEL"],color:"yellow"},{name:"MUSCULOS PIERNA",words:["CUADRICEPS","BICEPS FEMORAL","GEMELOS","GLUTEO"],color:"green"},{name:"CULTIVOS TROPICALES",words:["CAÑA","BANANO","CACAO","CAFE"],color:"blue"},{name:"PALABRAS POLISEMICAS",words:["BANCO","CARTA","SILLA","VELA"],color:"purple"}]},{id:93,categories:[{name:"HERRAMIENTAS ELECTRICAS",words:["TALADRO","SIERRA","LIJADORA","AMOLADORA"],color:"yellow"},{name:"LLENAR FORMULARIOS",words:["CAMPO","CASILLA","BOTON","OPCION"],color:"green"},{name:"INSTRUMENTOS PRECISION",words:["CALIBRE","MICROMETRO","NIVEL","ESCUADRA"],color:"blue"},{name:"DANZAS REGIONALES",words:["JARABE","FANDANGO","SEVILLANA","FLAMENCO"],color:"purple"}]},{id:94,categories:[{name:"ANIMALES CAZADORES",words:["LOBO","HALCÓN","TIBURON","COCODRILO"],color:"yellow"},{name:"ESPECIAS COMUNES",words:["CANELA","CLAVO","JENGIBRE","NUEZ MOSCADA"],color:"green"},{name:"TIPOS DE LAGOS",words:["GLACIAR","CRATER","ARTIFICIAL","SALADO"],color:"blue"},{name:"OPERACIONES MATEMATICAS",words:["SUMA","RESTA","MULTIPLICACION","DIVISION"],color:"purple"}]},{id:95,categories:[{name:"VOCABULARIO CAMPAMENTO",words:["TIENDA","SACO","LINIERNA","BRUJULA"],color:"yellow"},{name:"REDES COMUNICACION",words:["TELEFONO","RADIO","TV","SATELITE"],color:"green"},{name:"ESPECIES BOSQUE",words:["HELECHO","MUSGO","LIQUEN","HONGO"],color:"blue"},{name:"CLASIFICACION ANIMALES",words:["MAMIFERO","AVE","REPTIL","PEZ"],color:"purple"}]},{id:96,categories:[{name:"POSTRE HELADO",words:["SABOR","CONO","VASO","TOPPING"],color:"yellow"},{name:"VOCABULARIO AEROPUERTO",words:["TERMINAL","PUERTA","PISTA","TORRE"],color:"green"},{name:"FENOMENOS ACUSTICOS",words:["ECO","RESONANCIA","AMPLIFICACION","ABSORCION"],color:"blue"},{name:"PALABRAS TABU",words:["PALABRO","MALEDUCACION","INSULTO","GROSERIA"],color:"purple"}]},{id:97,categories:[{name:"ANIMALES BEBES",words:["CACHORRO","GATITO","POLLITO","POTRILLO"],color:"yellow"},{name:"BAÑO",words:["DUCHA","JABON","TOALLA","ALBORNOZ"],color:"green"},{name:"TECNOLOGIA 2020",words:["IA","METAVERSO","BLOCKCHAIN","NFT"],color:"blue"},{name:"PALABRAS INGLES ESPAÑOL",words:["HOUSE","CASA","CAR","COCHE"],color:"purple"}]},{id:98,categories:[{name:"PERSONAJES MARVEL",words:["IRON MAN","CAPITAN","THOR","HULK"],color:"yellow"},{name:"TIPOS CORTE CARNE",words:["BISTEC","FILETE","COSTILLA","CARNE MOLIDA"],color:"green"},{name:"FORMAS DE PAGO",words:["EFECTIVO","TARJETA","TRANSFERENCIA","CRIPTO"],color:"blue"},{name:"ECUACIONES ALGEBRAICAS",words:["LINEAL","CUADRATICA","CUBICA","POLINOMICA"],color:"purple"}]},{id:99,categories:[{name:"LUGARES TURISTICOS",words:["PLAYA","MUSEO","IGLESIA","PLAZA"],color:"yellow"},{name:"SALUD VISUAL",words:["VISTA","ANTEOJOS","LENTES","CIRUGIA"],color:"green"},{name:"HERRAMIENTAS DIGITALES",words:["SLACK","TRELLO","FIGMA","NOTION"],color:"blue"},{name:"SIMULACION FISICA",words:["VELOCIDAD","ACELERACION","FUERZA","MASA"],color:"purple"}]},{id:100,categories:[{name:"RECICLAJE",words:["PLASTICO","VIDRIO","PAPEL","ORGANICO"],color:"yellow"},{name:"BEBIDAS CALIENTES",words:["CAFE","CHOCOLATE","MATE","INFUSION"],color:"green"},{name:"CICLO DEL AGUA",words:["EVAPORACION","CONDENSACION","PRECIPITACION","FILTRACION"],color:"blue"},{name:"PALABRAS LARGAS",words:["CONSTITUCIONAL","INTERNACIONAL","ESTERNOCLEIDO","ANTICONSTITUCIONAL"],color:"purple"}]},{id:101,categories:[{name:"FRUTAS TROPICALES",words:["MANGO","PAPAYA","GUAYABA","CHIRIMOYA"],color:"yellow"},{name:"DEPORTES ACUATICOS",words:["NATACION","SURF","REMO","BUCEO"],color:"green"},{name:"CAPITALES EUROPEAS",words:["PARIS","ROMA","BERLIN","LONDRES"],color:"blue"},{name:"INSTRUMENTOS CUERDA",words:["GUITARRA","VIOLIN","CELLO","ARPA"],color:"purple"}]},{id:102,categories:[{name:"ANIMALES DOMESTICOS",words:["PERRO","GATO","HAMSTER","CONEJO"],color:"yellow"},{name:"ELECTRODOMESTICOS",words:["LAVADORA","NEVERA","HORNO","MICROONDAS"],color:"green"},{name:"REDES SOCIALES",words:["FACEBOOK","TWITTER","INSTAGRAM","TIKTOK"],color:"blue"},{name:"GENEROS LITERARIOS",words:["NOVELA","ENSAYO","DRAMA","POESIA"],color:"purple"}]},{id:103,categories:[{name:"MEDIOS TRANSPORTE",words:["AUTOBUS","TREN","AVION","BARCO"],color:"yellow"},{name:"HERRAMIENTAS",words:["MARTILLO","DESTORNILLADOR","LLAVE","SIERRA"],color:"green"},{name:"ELEMENTOS QUIMICOS",words:["ORO","PLATA","COBRE","HIERRO"],color:"blue"},{name:"MOVIMIENTOS ARTISTICOS",words:["RENACIMIENTO","BARROCO","IMPRESIONISMO","SURREALISMO"],color:"purple"}]},{id:104,categories:[{name:"PARTES DEL CUERPO",words:["BRAZO","PIERNA","CABEZA","MANO"],color:"yellow"},{name:"POSTRES",words:["FLAN","HELADO","TARTA","NATILLAS"],color:"green"},{name:"OCUPACIONES",words:["MEDICO","ABOGADO","ARQUITECTO","INGENIERO"],color:"blue"},{name:"MITOLOGIA GRIEGA",words:["ZEUS","ATENEA","POSEIDON","HADES"],color:"purple"}]},{id:105,categories:[{name:"VERDURAS",words:["ZANAHORIA","BROCOLI","ESPINACA","CEBOLLA"],color:"yellow"},{name:"PUEBLOS INDIGENAS",words:["MAYA","AZTECA","INCA","GUARANI"],color:"green"},{name:"FUENTES ENERGIA",words:["SOLAR","EOLICA","HIDRAULICA","GEOTERMICA"],color:"blue"},{name:"FILOSOFOS",words:["SOCRATES","PLATON","ARISTOTELES","NIETZSCHE"],color:"purple"}]},{id:106,categories:[{name:"PRENDAS VESTIR",words:["PANTALON","CAMISA","ZAPATOS","ABRIGO"],color:"yellow"},{name:"BAILES",words:["SALSA","TANGO","FLAMENCO","BACHATA"],color:"green"},{name:"MARAVILLAS MUNDO",words:["PIRAMIDE","COLISEO","MACHU PICCHU","TAJ MAHAL"],color:"blue"},{name:"CIENCIAS",words:["BIOLOGIA","QUIMICA","FISICA","ASTRONOMIA"],color:"purple"}]},{id:107,categories:[{name:"EMOCIONES",words:["ALEGRIA","TRISTEZA","MIEDO","IRA"],color:"yellow"},{name:"JUEGOS MESA",words:["AJEDREZ","DOMINO","ESCALERAS","RAPIDO"],color:"green"},{name:"PLANETAS",words:["MARTE","VENUS","SATURNO","JUPITER"],color:"blue"},{name:"CORRIENTES PINTURA",words:["CUBISMO","ABSTRACTO","POP ART","EXPRESIONISMO"],color:"purple"}]},{id:108,categories:[{name:"OFICIOS ANTIGUOS",words:["HERRERO","PANADERO","SASTRE","CARPINTERO"],color:"yellow"},{name:"ESPECIAS",words:["CANELA","PIMIENTA","COMINO","AZAFRAN"],color:"green"},{name:"HITOS HISTORIA",words:["REVOLUCION","GUERRA","TRATADO","IMPERIO"],color:"blue"},{name:"ECOSISTEMAS",words:["SELVA","DESIERTO","TUNDRA","SABANA"],color:"purple"}]},{id:109,categories:[{name:"LENGUAJES PROGRAMACION",words:["PYTHON","JAVASCRIPT","JAVA","C"],color:"yellow"},{name:"DEPORTES EQUIPO",words:["FUTBOL","BASQUET","VOLEIBOL","RUGBY"],color:"green"},{name:"FORMAS GEOMETRICAS",words:["CIRCULO","CUADRADO","TRIANGULO","RECTANGULO"],color:"blue"},{name:"GLANDULAS",words:["TIROIDES","PANCREAS","HIPOFISIS","SUPRARRENAL"],color:"purple"}]},{id:110,categories:[{name:"PELICULAS FAMOSAS",words:["TITANIC","GLADIADOR","MATRIX","AVATAR"],color:"yellow"},{name:"MONEDAS MUNDO",words:["DOLAR","EURO","LIBRA","YEN"],color:"green"},{name:"MUSICA CLASICA",words:["BEETHOVEN","MOZART","BACH","CHOPIN"],color:"blue"},{name:"ARTES MARCIALES",words:["KARATE","JUDO","TAEKWONDO","KUNG FU"],color:"purple"}]},{id:111,categories:[{name:"TIENDAS",words:["FARMACIA","PANADERIA","CARNICERIA","LIBRERIA"],color:"yellow"},{name:"DEPORTES INVIERNO",words:["ESQUI","PATINAJE","HOCKEY","TRINEO"],color:"green"},{name:"INVENTOS",words:["RUEDA","PAPEL","POLVORA","BRUJULA"],color:"blue"},{name:"HUESOS CUERPO",words:["FEMUR","TIBIA","HUMERO","COSTILLA"],color:"purple"}]},{id:112,categories:[{name:"BEBIDAS",words:["AGUA","ZUMO","SODA","LECHE"],color:"yellow"},{name:"RIOS FAMOSOS",words:["AMAZONAS","NILO","MISISIPI","DANUBIO"],color:"green"},{name:"GENEROS MUSICALES",words:["JAZZ","ROCK","POP","REGGAETON"],color:"blue"},{name:"AVES RAPACES",words:["AGUILA","HALCÓN","BUITRE","LECHUZA"],color:"purple"}]},{id:113,categories:[{name:"MATERIALES ESCOLARES",words:["LAPIZ","CUADERNO","MOCHILA","REGLA"],color:"yellow"},{name:"SISTEMAS CUERPO",words:["RESPIRATORIO","DIGESTIVO","CIRCULATORIO","NERVIOSO"],color:"green"},{name:"MONTAÑAS",words:["EVEREST","ACONCAGUA","MONT BLANC","KILIMANJARO"],color:"blue"},{name:"PALEONTOLOGIA",words:["DINOSAURIO","FOSIL","EXCAVACION","MUSEO"],color:"purple"}]},{id:114,categories:[{name:"FRASES COMUNES",words:["HOLA","GRACIAS","POR FAVOR","ADIOS"],color:"yellow"},{name:"ANIMALES MARINOS",words:["DELFIN","TIBURON","BALLENA","PULPO"],color:"green"},{name:"OCEANOS",words:["PACIFICO","ATLANTICO","INDICO","ARTICO"],color:"blue"},{name:"ARQUITECTURA",words:["ARCO","BOVEDA","COLUMNA","CUPULA"],color:"purple"}]},{id:115,categories:[{name:"COSAS DE COCINA",words:["OLLA","SARTEN","CUCHILLO","ESPATULA"],color:"yellow"},{name:"VOCALES",words:["A","E","I","O"],color:"green"},{name:"DANZAS REGIONALES",words:["JOROPO","CUMBIA","SAMBA","MERENGUE"],color:"blue"},{name:"CUERPOS CELESTES",words:["ESTRELLA","COMETA","ASTEROIDE","METEORITO"],color:"purple"}]},{id:116,categories:[{name:"MUEBLES",words:["MESA","SILLA","ARMARIO","CAMA"],color:"yellow"},{name:"ENFERMEDADES",words:["GRIPE","DIABETES","ASMA","ANEMIA"],color:"green"},{name:"TRANSPORTE ANTIGUO",words:["CARRETA","DILIGENCIA","TRANVIA","VAPOR"],color:"blue"},{name:"TEORIAS CIENTIFICAS",words:["RELATIVIDAD","EVOLUCION","BIG BANG","GRAVEDAD"],color:"purple"}]},{id:117,categories:[{name:"DEPORTES PELOTA",words:["TENIS","GOLF","BEISBOL","PING PONG"],color:"yellow"},{name:"SENTIDOS",words:["VISTA","OIDO","TACTO","OLFATO"],color:"green"},{name:"RIQUEZA NATURAL",words:["PETROLEO","GAS","CARBON","URANIO"],color:"blue"},{name:"PERIODOS HISTORICOS",words:["EDAD MEDIA","RENACIMIENTO","PREHISTORIA","EDAD ANTIGUA"],color:"purple"}]},{id:118,categories:[{name:"UTILES ASEO",words:["JABON","SHAMPOO","CEPILLO","TOALLA"],color:"yellow"},{name:"FIESTAS",words:["CUMPLEAÑOS","BODA","BAUTIZO","GRADUACION"],color:"green"},{name:"PUENTES FAMOSOS",words:["GOLDEN GATE","TORRE","BROOKLYN","RIALTO"],color:"blue"},{name:"TEORIA COLOR",words:["PRIMARIO","SECUNDARIO","CALIDO","FRIO"],color:"purple"}]},{id:119,categories:[{name:"HERIDAS COMUNES",words:["CORTE","GOLPE","QUEMADURA","RASGUNO"],color:"yellow"},{name:"TECNOLOGIA",words:["ORDENADOR","CELULAR","TABLET","RELOJ"],color:"green"},{name:"PRINCESAS DISNEY",words:["BLANCA","CENICIENTA","AURORA","JASMIN"],color:"blue"},{name:"TEJIDOS",words:["ALGODON","LINO","LANA","SEDA"],color:"purple"}]},{id:120,categories:[{name:"PESOS MEDIDAS",words:["KILO","LITRO","METRO","LIBRA"],color:"yellow"},{name:"ESPECTACULOS",words:["CINE","TEATRO","CONCIERTO","CIRCO"],color:"green"},{name:"FENOMENOS NATURALES",words:["TERREMOTO","TORNADO","HURACAN","TSUNAMI"],color:"blue"},{name:"COMPOSITORES OPERA",words:["VERDI","PUCCINI","ROSSINI","WAGNER"],color:"purple"}]},{id:121,categories:[{name:"FRUTAS SECAS",words:["ALMENDRA","NUEZ","AVELLANA","MANI"],color:"yellow"},{name:"DINOSAURIOS",words:["TIRANOSAURIO","TRICERATOPS","VELOCIRAPTOR","ESTEGOSAURIO"],color:"green"},{name:"IDIOMAS MUNDO",words:["INGLES","FRANCES","MANDARIN","ARABE"],color:"blue"},{name:"MATEMATICAS",words:["ALGEBRA","CALCULO","GEOMETRIA","TRIGONOMETRIA"],color:"purple"}]},{id:122,categories:[{name:"ANIMALES GRANJA",words:["VACA","CERDO","GALLINA","OVEJA"],color:"yellow"},{name:"PARQUES NACIONALES",words:["YOSEMITE","BANFF","TORRES DEL PAINE","IGUAZU"],color:"green"},{name:"SUPERHÉROES",words:["BATMAN","SUPERMAN","SPIDERMAN","IRONMAN"],color:"blue"},{name:"CATEDRALES",words:["NOTRE DAME","SAGRADA FAMILIA","SAN PEDRO","SAN PABLO"],color:"purple"}]},{id:123,categories:[{name:"INSTRUMENTOS COCINA",words:["CUCHARA","TENEDOR","CUCHILLO","CAZUELA"],color:"yellow"},{name:"FESTIVIDADES",words:["CARNAVAL","SEMANA SANTA","NAVIDAD","RAMADAN"],color:"green"},{name:"DIOSES EGIPCIOS",words:["RA","ANUBIS","OSIRIS","HORUS"],color:"blue"},{name:"RAMAS MEDICINA",words:["PEDIATRIA","CARDIOLOGIA","NEUROLOGIA","DERMATOLOGIA"],color:"purple"}]},{id:124,categories:[{name:"DEPORTES MENTALES",words:["AJEDREZ","GO","BRIDGE","POKER"],color:"yellow"},{name:"PARTES PLANTA",words:["RAIZ","TALLO","HOJA","FLOR"],color:"green"},{name:"EXPLORADORES",words:["COLON","MAGELLANES","PIZARRO","CORTES"],color:"blue"},{name:"TEXTURAS",words:["SUAVE","RUGOSO","LISO","ASPERO"],color:"purple"}]},{id:125,categories:[{name:"DULCES TIPICOS",words:["CHURRO","TORRIJA","CHURCHEN","TURRON"],color:"yellow"},{name:"OCEANOGRAFIA",words:["OLAS","MAREA","CORRIENTE","ABISMO"],color:"green"},{name:"CONECTORES LOGICOS",words:["Y","O","NO","SI"],color:"blue"},{name:"PENSAMIENTO",words:["LOGICA","RAZON","INTUICION","CREATIVIDAD"],color:"purple"}]},{id:126,categories:[{name:"PROFESIONES ARTE",words:["ACTOR","PINTOR","ESCRITOR","MUSICO"],color:"yellow"},{name:"ESTADOS AGUA",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"green"},{name:"CLUBES FUTBOL",words:["BARCELONA","MADRID","BOCA","RIVER"],color:"blue"},{name:"HABILIDADES COGNITIVAS",words:["MEMORIA","ATENCION","LENGUAJE","PERCEPCION"],color:"purple"}]},{id:127,categories:[{name:"CONTINENTES",words:["AMERICA","EUROPA","ASIA","AFRICA"],color:"yellow"},{name:"TECNOLOGIA ANTIGUA",words:["PALANCA","POLEA","TORNO","CUNA"],color:"green"},{name:"CELEBRIDADES",words:["SHAKIRA","BAD BUNNY","ROSALIA","JLO"],color:"blue"},{name:"TRASTORNOS SUEÑO",words:["INSOMNIO","APNEA","NARCOLEPSIA","SONAMBULISMO"],color:"purple"}]},{id:128,categories:[{name:"COSAS ESCRITORIO",words:["LAPIZ","BORRADOR","SACA PUNTA","RESALTADOR"],color:"yellow"},{name:"SABORES",words:["DULCE","SALADO","AMARGO","ACIDO"],color:"green"},{name:"VULCANES",words:["VESUBIO","ETNA","FUJI","KRAKATOA"],color:"blue"},{name:"DEFORMACIONES",words:["ESTIRAR","COMPRIMIR","TORCER","DOBLAR"],color:"purple"}]},{id:129,categories:[{name:"MEDIOS COMUNICACION",words:["RADIO","TELEVISION","PERIODICO","REVISTA"],color:"yellow"},{name:"DINOSAURIOS VOLADORES",words:["PTERODACTILO","PTERANODON","QUETZALCOATLUS","RANFORRINCO"],color:"green"},{name:"PRIMATES",words:["MONO","GORILA","CHIMPANCE","ORANGUTAN"],color:"blue"},{name:"PATRONES CLIMA",words:["MONZON","EL NIÑO","HURACAN","CICLON"],color:"purple"}]},{id:130,categories:[{name:"ALFABETO GRIEGO",words:["ALFA","BETA","GAMMA","DELTA"],color:"yellow"},{name:"ACCIDENTES DOMESTICOS",words:["CAIDA","QUEMADURA","CORTADURA","GOLPE"],color:"green"},{name:"ISLAS FAMOSAS",words:["HAWAI","IBIZA","BALI","MADAGASCAR"],color:"blue"},{name:"CORTEZAS TERRESTRES",words:["LITOSFERA","ASTENOSFERA","MESOSFERA","NUCLEO"],color:"purple"}]},{id:131,categories:[{name:"ANIMALES SALVAJES",words:["LEON","TIGRE","OSO","LOBO"],color:"yellow"},{name:"PUERTOS MARITIMOS",words:["ROTTERDAM","SINGAPUR","SHANGAI","HAMBURGO"],color:"green"},{name:"HERRAMIENTAS JARDIN",words:["PALA","RASTRILLO","TIJERA","MANGUERA"],color:"blue"},{name:"ENFERMEDADES MENTALES",words:["ANSIEDAD","DEPRESION","ESQUIZOFRENIA","TOC"],color:"purple"}]},{id:132,categories:[{name:"MEDICAMENTOS",words:["ASPIRINA","PARACETAMOL","IBUPROFENO","ANTIBIOTICO"],color:"yellow"},{name:"MISIONES ESPACIALES",words:["APOLO","ARTEMIS","VOYAGER","CURIOSITY"],color:"green"},{name:"BAILES TRADICIONALES",words:["JOTA","FANDANGO","SEVILLANA","PASODOBLE"],color:"blue"},{name:"PROPIEDADES FISICAS",words:["DENSIDAD","MASA","VOLUMEN","TEMPERATURA"],color:"purple"}]},{id:133,categories:[{name:"MARCADORES TEXTILES",words:["AGUJA","HILO","DEDAL","ALFILER"],color:"yellow"},{name:"CUENCAS HIDROGRAFICAS",words:["RIO","LAGO","MAR","OCEANO"],color:"green"},{name:"SERIES NETFLIX",words:["STRANGER THINGS","CASA PAPEL","WEDNESDAY","BRIDGERTON"],color:"blue"},{name:"RECURSOS RENOVABLES",words:["BIOMASA","SOLAR","HIDROELECTRICA","MAREOMOTRIZ"],color:"purple"}]},{id:134,categories:[{name:"MATERIALES ARTE",words:["ACUARELA","OLEO","CARBONCILLO","PASTEL"],color:"yellow"},{name:"CUARTOS CASA",words:["SALA","COCINA","BAÑO","DORMITORIO"],color:"green"},{name:"MOVIMIENTOS LITERARIOS",words:["MODERNISMO","REALISMO","ROMANTICISMO","NATURALISMO"],color:"blue"},{name:"CRISTALES",words:["CUARZO","DIAMANTE","RUBI","ESMERALDA"],color:"purple"}]},{id:135,categories:[{name:"CARNE",words:["TERNERA","POLLO","CERDO","CORDERO"],color:"yellow"},{name:"CULTIVOS",words:["TRIGO","MAIZ","ARROZ","AVENA"],color:"green"},{name:"GRANDES EXPLORACIONES",words:["RUTA SEDA","VUELTA MUNDO","CONQUISTA","COLONIZACION"],color:"blue"},{name:"MUSCULOS",words:["BICEPS","TRICEPS","CUADRICEPS","ABDOMINAL"],color:"purple"}]},{id:136,categories:[{name:"NUMEROS PRIMOS",words:["DOS","TRES","CINCO","SIETE"],color:"yellow"},{name:"VALORES HUMANOS",words:["HONESTIDAD","RESPETO","SOLIDARIDAD","JUSTICIA"],color:"green"},{name:"GRANDES LAGOS",words:["SUPERIOR","MICHIGAN","TITICACA","VICTORIA"],color:"blue"},{name:"INSTRUMENTOS PERCUSION",words:["BATERIA","TAMBOR","MARIMBA","XILOFONO"],color:"purple"}]},{id:137,categories:[{name:"MARCADORES TIEMPO",words:["AHORA","LUEGO","SIEMPRE","NUNCA"],color:"yellow"},{name:"FELINOS",words:["GATO","LEON","TIGRE","PUMA"],color:"green"},{name:"DESIERTOS",words:["SAHARA","GOBI","ATACAMA","ARABIA"],color:"blue"},{name:"AVANCES MEDICOS",words:["VACUNA","PENICILINA","RAYOS X","ADN"],color:"purple"}]},{id:138,categories:[{name:"PARTES BARCO",words:["VELA","TIMON","ANCLA","PROA"],color:"yellow"},{name:"MATERIALES RECICLABLES",words:["ALUMINIO","CARTON","PLASTICO","VIDRIO"],color:"green"},{name:"EQUIPO CAMPAMENTO",words:["CARPA","SACO DORMIR","BRUJULA","CANTIMPLORA"],color:"blue"},{name:"CATEGORIAS GRAMATICALES",words:["SUSTANTIVO","VERBO","ADJETIVO","ADVERBIO"],color:"purple"}]},{id:139,categories:[{name:"ANIMALES ACUATICOS",words:["PEZ","CALAMAR","LANGOSTA","CANGREJO"],color:"yellow"},{name:"VIVERES TECNOLOGICOS",words:["WIFI","BLUETOOTH","USB","HDMI"],color:"green"},{name:"FERIAS",words:["EXPO","FERIA","CIRCULAR","MUESTRA"],color:"blue"},{name:"TEORIAS ECONOMICAS",words:["CAPITALISMO","SOCIALISMO","KEYNESIANISMO","LIBERALISMO"],color:"purple"}]},{id:140,categories:[{name:"ANIMALES NOCTURNOS",words:["BUHO","MURCIELAGO","LUCIERNAGA","ZORRO"],color:"yellow"},{name:"FRUTOS",words:["TOMATO","AGUACATE","PIMIENTO","BERENJENA"],color:"green"},{name:"REGIONES ESPAÑA",words:["CATALUÑA","ANDALUCIA","GALICIA","VALENCIA"],color:"blue"},{name:"PRINCIPIOS FISICA",words:["INERCIA","GRAVITACION","TERMODINAMICA","CUANTICA"],color:"purple"}]},{id:141,categories:[{name:"POSTRES ESPAÑOLES",words:["CREMA CATALANA","TOCINO CIELO","ARROZ LECHE","BRAZO GITANO"],color:"yellow"},{name:"SIMMBOLOS NACIONALES",words:["BANDERA","ESCUDO","HIMNO","FLOR"],color:"green"},{name:"ANIMALES EXTINTOS",words:["DODO","MAMUT","TIGRE DIENTE","PEREZOSO GIGANTE"],color:"blue"},{name:"TECNICAS ARTE",words:["CLAROSCURO","PERSPECTIVA","SFUMATO","PUNTILLISMO"],color:"purple"}]},{id:142,categories:[{name:"PINTORES FAMOSOS",words:["PICASSO","DALI","GOYA","VAN GOGH"],color:"yellow"},{name:"CAVIDADES CUERPO",words:["BOCA","NARIZ","OREJA","PULMON"],color:"green"},{name:"SISTEMAS OPERATIVOS",words:["WINDOWS","MACOS","LINUX","ANDROID"],color:"blue"},{name:"CAPAS ATMOSFERA",words:["TROPOSFERA","ESTRATOSFERA","MESOSFERA","TERMOSFERA"],color:"purple"}]},{id:143,categories:[{name:"CONDIMENTOS",words:["SAL","ACEITE","VINAGRE","LIMON"],color:"yellow"},{name:"CICLOS VIDA",words:["NACER","CRECER","REPRODUCIR","MORIR"],color:"green"},{name:"FUERZAS FISICAS",words:["GRAVEDAD","FRICCION","MAGNETISMO","ELECTRICIDAD"],color:"blue"},{name:"FIGURAS RETORICAS",words:["METAFORA","HIPERBOLE","IRONIA","SINESTESIA"],color:"purple"}]},{id:144,categories:[{name:"JUEGOS TRADICIONALES",words:["CARRERA","SALTAR","ESCONDER","RAYUELA"],color:"yellow"},{name:"FENOMENOS OPTICOS",words:["ARCOIRIS","ESPECTRO","REFLEJO","REFLEXION"],color:"green"},{name:"BALLENAS",words:["AZUL","JOROBADA","FRANCA","ASESINA"],color:"blue"},{name:"ESTILOS LIDERAZGO",words:["DEMOCRATICO","AUTOCRATICO","TRANSFORMACIONAL","LAISSEZ FAIRE"],color:"purple"}]},{id:145,categories:[{name:"PALABRAS OPUESTAS",words:["ALTO","BAJO","GRANDE","PEQUEÑO"],color:"yellow"},{name:"LIDERES HISTORICOS",words:["GANDHI","MANDELA","LUTERO","CHURCHILL"],color:"green"},{name:"LENTEJAS ESPECTRO",words:["INFRARROJO","ULTRAVIOLETA","RAYOS X","MICROONDAS"],color:"blue"},{name:"ACENTOS ESPAÑOLES",words:["MEXICANO","ARGENTINO","ESPAÑOL","COLOMBIANO"],color:"purple"}]},{id:146,categories:[{name:"SOPAS",words:["CALDO","CREMA","POTAJE","CONSOME"],color:"yellow"},{name:"COLECCIONES",words:["SELLOS","MONEDAS","CROMOS","FIGURAS"],color:"green"},{name:"NAVES ESPACIALES",words:["COHETE","SATELITE","ESTACION","SONDA"],color:"blue"},{name:"FORMAS PENSAMIENTO",words:["CONVERGENTE","DIVERGENTE","CRITICO","ANALITICO"],color:"purple"}]},{id:147,categories:[{name:"DIVISIONES POLITICAS",words:["PAIS","PROVINCIA","CIUDAD","MUNICIPIO"],color:"yellow"},{name:"COMPORTAMIENTO ANIMAL",words:["MIGRACION","HIBERNACION","CAMUFLAJE","SIMBIOSIS"],color:"green"},{name:"ESCRITORES FAMOSOS",words:["CERVANTES","NERUDA","GARCIA MARQUEZ","BORGES"],color:"blue"},{name:"ESTADOS AGREGACION",words:["SOLIDO","LIQUIDO","GASEOSO","PLASMA"],color:"purple"}]},{id:148,categories:[{name:"ACCESORIOS MODA",words:["BOLSO","CINTURON","BUFANDA","GORRO"],color:"yellow"},{name:"FAMILIA LINGUISTICA",words:["LATIN","GRIEGO","ARABE","GERMANICO"],color:"green"},{name:"ANCORAS ROCK",words:["QUEEN","ROLLING STONES","LED ZEPPELIN","PINK FLOYD"],color:"blue"},{name:"PROCESOS QUIMICOS",words:["OXIDACION","REDUCCION","HIDROLISIS","COMBUSTION"],color:"purple"}]},{id:149,categories:[{name:"ESPACIOS NATURALES",words:["BOSQUE","PRADERA","MANGLAR","ARRECIFE"],color:"yellow"},{name:"FUERZAS MILITARES",words:["EJERCITO","MARINA","AVIACION","INFANTERIA"],color:"green"},{name:"CONSTELACIONES",words:["ORION","OSA MAYOR","CASIOPEA","ESCORPION"],color:"blue"},{name:"INDICADORES ECONOMICOS",words:["PIB","IPC","MEDIA","TASA"],color:"purple"}]},{id:150,categories:[{name:"TECNICAS COCINA",words:["HERVIR","ASAR","FREIR","GUISAR"],color:"yellow"},{name:"SALUDOS MUNDO",words:["HOLA","KONICHIWA","SALAM","BONJOUR"],color:"green"},{name:"MOVIMIENTOS SOCIALES",words:["FEMINISMO","AMBIENTALISMO","PACIFISMO","INDIGENISMO"],color:"blue"},{name:"MECANISMOS",words:["RUEDA","POLEA","ENGRANAJE","TORNILLO"],color:"purple"}]}
];

const NEW_PUZZLES = [];

const JASON_PUZZLES = [
{id:"jason-1",categories:[{name:"PALABRAS CON DOBLE R",words:["CARRETERA","ARROZ","BARRIL","CORREDOR"],color:"yellow"},{name:"SINÓNIMOS DE GRANDE",words:["ENORME","GIGANTESCO","COLOSAL","MONSTRUOSO"],color:"green"},{name:"INSTRUMENTOS DE VIENTO",words:["TROMPETA","CLARINETE","SAXOFON","FLAUTA"],color:"blue"},{name:"PALABRAS CON ACENTO",words:["CAMBIÓ","CANTÓ","SALTÓ","MIRÓ"],color:"purple"}]},{id:"jason-2",categories:[{name:"PREFIJO 'DES-'",words:["DESHACER","DESCUBRIR","DESMONTAR","DESARMAR"],color:"yellow"},{name:"ANIMALES DE GRANJA",words:["VACA","CERDO","GALLINA","CABALLO"],color:"green"},{name:"PALABRAS QUE TERMINAN EN 'EZA'",words:["BELLEZA","RIQUEZA","POBREZA","ALTIVEZ"],color:"blue"},{name:"MESES SIN 'R'",words:["MAYO","JUNIO","JULIO","AGOSTO"],color:"purple"}]},{id:"jason-3",categories:[{name:"VERBOS IRREGULARES",words:["TENER","PONER","SALIR","VENIR"],color:"yellow"},{name:"PUENTES FAMOSOS",words:["GOLDEN GATE","TORRE","RIALTO","BROOKLYN"],color:"green"},{name:"SUSTANTIVOS ABSTRACTOS",words:["ESPERANZA","LIBERTAD","JUSTICIA","IGUALDAD"],color:"blue"},{name:"PALABRAS QUE EMPIEZAN CON 'H'",words:["HUEVO","HUESO","HIELO","HUERTO"],color:"purple"}]},{id:"jason-4",categories:[{name:"DÍAS DE LA SEMANA",words:["LUNES","VIERNES","DOMINGO","MARTES"],color:"yellow"},{name:"TERMINAN EN 'ÓN'",words:["CAMISÓN","COLCHÓN","RATÓN","CINTURÓN"],color:"green"},{name:"COSAS QUE EXPIRAN",words:["LECHE","PAN","MEDICINA","PERFUME"],color:"blue"},{name:"TIENEN HOMÓFONO",words:["VACA","BARON","HOLA","ASTA"],color:"purple"}]},{id:"jason-5",categories:[{name:"PALABRAS ESDRÚJULAS",words:["MÉDICO","PÁGINA","TÉCNICO","PLÁTANO"],color:"yellow"},{name:"PRENDAS INTERIORES",words:["CALCETÍN","CAMISETA","BOXER","SOSTÉN"],color:"green"},{name:"FIESTAS MUNDIALES",words:["CARNAVAL","OKTOBERFEST","JAZZ","TOMATINA"],color:"blue"},{name:"PALÍNDROMOS",words:["SALAS","RECONOCER","SOMOS","ANILINA"],color:"purple"}]},{id:"jason-6",categories:[{name:"GENTILICIOS",words:["MEXICANO","ARGENTINO","CHILENO","CUBANO"],color:"yellow"},{name:"TIEMPO VERBAL",words:["COMIÓ","SALIÓ","VIVIÓ","CORRIÓ"],color:"green"},{name:"COSAS FRÁGILES",words:["CRISTAL","HUEVO","ESPEJO","PORCELANA"],color:"blue"},{name:"NOMBRES COLECTIVOS",words:["MANADA","REBAÑO","EJERCITO","FLOTA"],color:"purple"}]},{id:"jason-7",categories:[{name:"FENÓMENOS NATURALES",words:["TERREMOTO","TORMENTA","TIFÓN","ERUPCIÓN"],color:"yellow"},{name:"PALABRAS INVARIABLES",words:["SALUD","CAOS","SED","HAMBRE"],color:"green"},{name:"RIOS DE EUROPA",words:["DANUBIO","RIN","SENA","TAJO"],color:"blue"},{name:"ANIMALES EN PELIGRO",words:["OSO PANDA","TIGRE","RINOCERONTE","KOALA"],color:"purple"}]},{id:"jason-8",categories:[{name:"PALABRAS AGUDAS",words:["AVIÓN","CAFÉ","COLOR","JUGAR"],color:"yellow"},{name:"CANCIONES TÍPICAS",words:["CUMBIA","SALSA","BACHATA","MERENGUE"],color:"green"},{name:"JUEGOS DE MESA",words:["AJEDREZ","DOMINÓ","PARQUÉS","ESCALERAS"],color:"blue"},{name:"COSAS CON RUEDAS",words:["CARRITO","MONOPATÍN","PATINES","CARRETILLA"],color:"purple"}]},{id:"jason-9",categories:[{name:"ADJETIVOS DE TAMAÑO",words:["MINÚSCULO","ENANO","GIGANTE","PEQUEÑO"],color:"yellow"},{name:"LENGUAS ROMANCES",words:["ESPAÑOL","ITALIANO","FRANCÉS","PORTUGUÉS"],color:"green"},{name:"COSAS QUE SE DOBLAN",words:["ROPA","PAPEL","MANTEL","SERVILLETA"],color:"blue"},{name:"PALABRAS QUE CAMBIAN CON 'S'",words:["JABÓN","RINCÓN","VOLCÁN","CAPITÁN"],color:"purple"}]},{id:"jason-10",categories:[{name:"NÚMEROS IMPARES",words:["UNO","SIETE","QUINCE","VEINTITRÉS"],color:"yellow"},{name:"EDIFICIOS PÚBLICOS",words:["AYUNTAMIENTO","ESCUELA","HOSPITAL","BIBLIOTECA"],color:"green"},{name:"ACORTAMIENTOS COMUNES",words:["BICI","FOTO","MOTO","CINE"],color:"blue"},{name:"TRES VOCALES IGUALES",words:["AURORA","CHILE","INDIVIDUO","PARAGUAS"],color:"purple"}]},{id:"jason-11",categories:[{name:"GÉNEROS MUSICALES",words:["REGUETON","JAZZ","CLÁSICA","ROCK"],color:"yellow"},{name:"VOCALES FRECUENTES",words:["AIRE","AREA","IDEA","ÓLEO"],color:"green"},{name:"MARCAS REGISTRADAS",words:["COCA-COLA","NIKE","SONY","FERRARI"],color:"blue"},{name:"PLURALES IRREGULARES",words:["CARÁCTERES","ESPÉCIMENES","CURRÍCULOS","CERTÁMENES"],color:"purple"}]},{id:"jason-12",categories:[{name:"VERBOS DE COCINA",words:["HERBIR","FREÍR","ASAR","HORNEAR"],color:"yellow"},{name:"COSAS QUE SE ENRROLLAN",words:["CABLE","MANGA","CINTA","ALFOMBRA"],color:"green"},{name:"PALABRAS CON 'X'",words:["EXAMEN","TEXTO","FLEXIBLE","EXCELENTE"],color:"blue"},{name:"PALABRAS CON DOS ACENTOS",words:["CAÓTICO","VEHÍCULO","TRAÍDO","REÍR"],color:"purple"}]},{id:"jason-13",categories:[{name:"PALABRAS LLANAS",words:["MESA","CASA","PERRO","CAMINO"],color:"yellow"},{name:"SINÓNIMOS DE VELOZ",words:["RÁPIDO","ÁGIL","VELOZ","RAPAZ"],color:"green"},{name:"PIRÁMIDES POR PAÍS",words:["EGIPTO","MÉXICO","SUDÁN","GUATEMALA"],color:"blue"},{name:"PALABRAS AL REVÉS SENTIDAS",words:["AMOR","SOL","RÍO","LUZ"],color:"purple"}]},{id:"jason-14",categories:[{name:"PROFESIONES CON ACENTO",words:["MÉDICO","POLICÍA","JARDINERO","MÚSICO"],color:"yellow"},{name:"PALABRAS COMPUESTAS",words:["AGUACATE","PARAGUAS","CORREVEIDILE","PORTAPAPELES"],color:"green"},{name:"BAILES LATINOS",words:["SALSA","TANGO","FLAMENCO","BACHATA"],color:"blue"},{name:"COSAS QUE PUEDEN SER LÍQUIDAS",words:["SANGRE","FUEGO","ORO","PLATA"],color:"purple"}]},{id:"jason-15",categories:[{name:"PLATOS TÍPICOS",words:["PAELLA","TACO","AREQUIPE","MOQUECA"],color:"yellow"},{name:"PALABRAS QUE TERMINAN EN 'TAD'",words:["LIBERTAD","BONDAD","MALDAD","HERMANDAD"],color:"green"},{name:"INVENTOS QUE CAMBIARON EL MUNDO",words:["RUEDA","PAPEL","BRÚJULA","IMPRENTA"],color:"blue"},{name:"MONOSÍLABOS CON S",words:["SOL","SAL","SÍ","SER"],color:"purple"}]},{id:"jason-16",categories:[{name:"PALABRAS GRAVES",words:["CASA","PERRO","GATO","MÚSICA"],color:"yellow"},{name:"COSAS QUE SE SIEMBRAN",words:["TRIGO","MAÍZ","ARROZ","ALUBIA"],color:"green"},{name:"LÍMITES GEOGRÁFICOS",words:["ECUADOR","TRÓPICO","PARALELO","MERIDIANO"],color:"blue"},{name:"PALABRAS CON CINCO LETRAS",words:["SUPRA","ÁRBOL","CIUDAD","JAMÓN"],color:"purple"}]},{id:"jason-17",categories:[{name:"ELEMENTOS QUÍMICOS",words:["ORO","PLATA","HIERRO","COBRE"],color:"yellow"},{name:"PALABRAS QUE RIMAN CON 'ORO'",words:["TESORO","SORORO","DECORO","AÑORO"],color:"green"},{name:"VERBOS CON PREPOSICIÓN",words:["CONTAR CON","SOÑAR CON","PENSAR EN","CONSISTIR EN"],color:"blue"},{name:"METÁTESIS COMUNES",words:["MURCIÉLAGO","CROQUETA","ALMOHADA","AEROPUERTO"],color:"purple"}]},{id:"jason-18",categories:[{name:"PALABRAS SOBRESDRÚJULAS",words:["DÍGAMELO","ENTRÉGUESELO","CÓMPRAMELO","DÍGASELO"],color:"yellow"},{name:"COSAS QUE SE EXPRIMEN",words:["NARANJA","LIMÓN","TORONJA","LIMA"],color:"green"},{name:"AGREGAR PREFIJO 'RE-'",words:["NACER","PASAR","CARGAR","LLENAR"],color:"blue"},{name:"CAMBIO DE LETRA",words:["ABOGADO","VASO","BARÓN","SABIA"],color:"purple"}]},{id:"jason-19",categories:[{name:"PALABRAS CON 'LL'",words:["LLAVE","LLUVIA","CALLES","POLLITO"],color:"yellow"},{name:"OLEOS DE PINTAR",words:["ÓLEO","ACUARELA","ACRÍLICO","PASTEL"],color:"green"},{name:"COSAS QUE SE PUEDEN MEDIR",words:["TIEMPO","PESO","ALTURA","TEMPERATURA"],color:"blue"},{name:"ANAGRAMAS",words:["ROMA","AMOR","MORA","RAMO"],color:"purple"}]},{id:"jason-20",categories:[{name:"PALABRAS CON DIPTONGO",words:["TIERRA","BUENO","FUEGO","VIENTO"],color:"yellow"},{name:"PALABRAS ESTRICTAS MISMA LETRA",words:["AS","CAER","REIR","SUMIR"],color:"green"},{name:"EMPIEZAN CON 'C' Y TERMINAN EN 'O'",words:["CAMINO","COLEGIO","CABELLO","CUADRO"],color:"blue"},{name:"PALABRAS CON LETRA MUDAS",words:["HORA","HOMBRE","HOY","HACIA"],color:"purple"}]},{id:"jason-21",categories:[{name:"SUSTANTIVOS FEMENINOS",words:["CASA","PUERTA","VENTANA","MESA"],color:"yellow"},{name:"LO CONTRARIO DE",words:["BUENO","GRANDE","ALEGRE","LIGERO"],color:"green"},{name:"AGUA EN MOVIMIENTO",words:["RÍO","MAR","CASCADA","TORRENTE"],color:"blue"},{name:"GEMELOS EN UNA PALABRA",words:["CHAFA","PACÍFICO","GRADOS","JUNIO"],color:"purple"}]},{id:"jason-22",categories:[{name:"VERBOS COTIDIANOS",words:["DORMIR","COMER","CAMINAR","HABLAR"],color:"yellow"},{name:"PARTES DE UNA CASA",words:["TEJADO","JARDÍN","GARAJE","SÓTANO"],color:"green"},{name:"PALABRAS POLISÉMICAS",words:["BANCO","Sierra","GATO","PICO"],color:"blue"},{name:"PALABRAS ESDRÚJULAS SINACENTO",words:["ESPÁRRAGO","TELÉFONO","MARÍTIMO","POLÍTICO"],color:"purple"}]},{id:"jason-23",categories:[{name:"SUFIJO '-ERO'",words:["CARTERO","PANADERO","JARDINERO","CARPINTERO"],color:"yellow"},{name:"COSAS REDONDAS",words:["RUEDA","PELOTA","GLORO","CIRCULO"],color:"green"},{name:"PARADAS DE BUS",words:["ESTACIÓN","PARADA","TERMINAL","APARTADERO"],color:"blue"},{name:"PALABRAS QUE CAMBIAN SU SIGNIFICADO",words:["RATÓN","NUBE","VENTANA","ESCRITORIO"],color:"purple"}]},{id:"jason-24",categories:[{name:"SINÓNIMOS DE INTELIGENTE",words:["LISTO","SABIO","DOCTO","ERUDITO"],color:"yellow"},{name:"COSAS CON AGUJAS",words:["RELOJ","BRÚJULA","ÁRBOL","JERINGA"],color:"green"},{name:"PALABRAS CON DOS SIGNIFICADOS",words:["CAPITAL","MESA","SEDE","CURA"],color:"blue"},{name:"NÚMEROS ROMANOS",words:["C","D","M","X"],color:"purple"}]},{id:"jason-25",categories:[{name:"SINÓNIMOS DE BELLO",words:["HERMOSO","LIMPIO","PRECIOSO","BONITO"],color:"yellow"},{name:"COSAS QUE SE ROMPEN",words:["PLATO","VASO","JARRÓN","VENTANA"],color:"green"},{name:"INTERJECCIONES",words:["¡AY!","¡OH!","¡EH!","¡AH!"],color:"blue"},{name:"PALABRAS SIN VOCALES REPETIDAS",words:["ARCEDAR","MUSIBUS","PERICÓN","CORONA"],color:"purple"}]},
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
          "CAMISETA",
          "ZAPATOS",
          "ABRIGO",
          "VENTANA"
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
          "PEQUENO",
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
        "name": "PALABRAS ESDRUJULAS COMUNES",
        "words": [
          "TELEFONO",
          "CAMARA",
          "MUSICA",
          "PAGINA"
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
          "ESPANA",
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
          "EXCOMPANERO",
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
        "name": "EN EL BANO",
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
          "ANO NUEVO",
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
          "MONTANA",
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
        "name": "PALABRAS AGUDAS TERMINAN N/S",
        "words": [
          "AVION",
          "BALON",
          "ATUN",
          "CAFETIN"
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
        "name": "POSTRES ESPANOLES",
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
        "name": "ESTACIONES DEL ANO",
        "words": [
          "PRIMAVERA",
          "VERANO",
          "OTONO",
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
        "name": "DIAS FESTIVOS ESPANA",
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
          "CIEN ANOS",
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
        "name": "ADJETIVOS DE TAMANO",
        "words": [
          "MINUSCULO",
          "ENANO",
          "GIGANTE",
          "PEQUENO"
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
          "CHAMPINON",
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
          "PINA COLADA",
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
          "REBANO",
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
          "BANO"
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
        "name": "PALABRAS GRAVES CON ACENTO",
        "words": [
          "ARBOL",
          "CARACTER",
          "CESAR",
          "LAPIZ"
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
        "name": "GRUPOS ESPANOLES",
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
        "name": "PALABRAS SOBRESDRUJULAS",
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
        "name": "PALABRAS GRAVES",
        "words": [
          "ARBOL",
          "CARPETA",
          "LIBRO",
          "MESA"
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
          "VENTANA",
          "JARDIN",
          "CAMINO",
          "PUERTA"
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
        "name": "MESES DEL ANO",
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
          "ESPANA",
          "ANO",
          "MUNECA",
          "PINA"
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
        "name": "SIN ACENTO",
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
          "RINON"
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
        "name": "PALABRAS GRAVES SIN ACENTO",
        "words": [
          "CASA",
          "MESA",
          "PERRO",
          "GATO"
        ],
        "color": "blue"
      },
      {
        "name": "PALABRAS AGUDAS",
        "words": [
          "CAFE",
          "SOFA",
          "AVION",
          "BALON"
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
          "ESPANOL",
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
          "QUEMAR ANO",
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
          "ESPANA",
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
          "ARANA",
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
        "name": "REGIONES DE ESPANA",
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
          "CIUDAD",
          "JAMON",
          "PLATO"
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
        "name": "ESCRITORES ESPANOLES",
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
          "PINGUINO",
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
        "name": "PALABRAS AGUDAS TERMINAN VOCAL",
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
          "ANO NUEVO"
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
        "name": "COSAS DEL BANO",
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
        "name": "CON ACENTO FINAL",
        "words": [
          "CAFE",
          "SOFA",
          "AVION",
          "BALON"
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
        "name": "COSAS DE BANO",
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
  }
];

const SPECIAL_PUZZLES = {
"0101":{id:"special-0101",categories:[{name:"PROPOSITOS AÑO NUEVO",words:["EJERCICIO","DIETA","AHORRO","VIAJE"],color:"yellow"},{name:"TRADICIONES AÑO NUEVO",words:["UVA","CAMPANADA","BRINDIS","CORNETA"],color:"green"},{name:"MESES DEL AÑO",words:["ENERO","MARZO","JUNIO","DICIEMBRE"],color:"blue"},{name:"NUMEROS ROMANOS",words:["I","V","X","L"],color:"purple"}]},"1225":{id:"special-1225",categories:[{name:"NAVIDAD",words:["VILLANCICO","REGALO","ARBOL","ESTRELLA"],color:"yellow"},{name:"ADORNOS NAVIDAD",words:["ESFERA","GUIRNALDA","LUCES","BELEN"],color:"green"},{name:"POSTRES NAVIDAD",words:["TURRON","POLVORON","MAZAPAN","ROSCON"],color:"blue"},{name:"PERSONAJES NAVIDAD",words:["SANTA","RENO","DUENDE","ELFO"],color:"purple"}]},"1031":{id:"special-1031",categories:[{name:"HALLOWEEN",words:["CALABAZA","DISFRAZ","FANTASMA","DULCE"],color:"yellow"},{name:"MONSTRUOS",words:["VAMPIRO","ZOMBIE","LOBO","MOMIA"],color:"green"},{name:"COLORES OSCUROS",words:["NEGRO","MORADO","ROJO","GRIS"],color:"blue"},{name:"PELICULAS TERROR",words:["EL EXORCISTA","PSICOSIS","IT","EL RESPLANDOR"],color:"purple"}]},"0214":{id:"special-0214",categories:[{name:"AMOR Y AMISTAD",words:["CORAZON","FLORES","CHOCOLATE","CARTA"],color:"yellow"},{name:"PAREJA",words:["NOVIO","ESPOSO","COMPAÑERO","ALMA"],color:"green"},{name:"PALABRAS DULCES",words:["AMOR","BESO","ABRAZO","CARICIA"],color:"blue"},{name:"CANCIONES AMOR",words:["BOLERO","BALADA","RANCHERA","SONETO"],color:"purple"}]},"0704":{id:"special-0704",categories:[{name:"INDEPENDENCIA USA",words:["LIBERTAD","DECLARACION","BANDERA","FUEGOS"],color:"yellow"},{name:"SIMBOLOS USA",words:["AGUILA","ESTATUA","DOLAR","CASA BLANCA"],color:"green"},{name:"CIUDADES USA",words:["NUEVA YORK","LOS ANGELES","CHICAGO","MIAMI"],color:"blue"},{name:"INVENTOS USA",words:["AVION","BOMBILLA","INTERNET","TELEFONO"],color:"purple"}]},"0916":{id:"special-0916",categories:[{name:"INDEPENDENCIA MEXICO",words:["GRITO","CAMPANA","HIDALGO","INSURGENTE"],color:"yellow"},{name:"SIMBOLOS MEXICO",words:["AGUILA","SERPIENTE","NOPAL","TRICOLOR"],color:"green"},{name:"COMIDA MEXICANA",words:["TACO","TAMAL","POZOLE","MOLE"],color:"blue"},{name:"ARTE MEXICANO",words:["FRIDA","RIVERA","SIGUEIROS","KAHLO"],color:"purple"}]},"1206":{id:"special-1206",categories:[{name:"CONSTITUCION ESPAÑOLA",words:["CONSTITUCION","DEMOCRACIA","DERECHO","LEY"],color:"yellow"},{name:"SIMBOLOS ESPAÑA",words:["TORO","BAILAORA","SOLEAR","PAELLA"],color:"green"},{name:"REYES ESPAÑA",words:["FELIPE","LETICIA","JUAN CARLOS","SOFIA"],color:"blue"},{name:"COMUNIDADES",words:["ANDALUCIA","CATALUÑA","PAIS VASCO","GALICIA"],color:"purple"}]},"0520":{id:"special-0520",categories:[{name:"DIA DE LA INDEPENDENCIA",words:["CUBANO","PUERTORRIQUEÑO","DOMINICANO","LIBERTAD"],color:"yellow"},{name:"PRIMAVERA",words:["FLOR","SOL","MARIPOSA","ARCOIRIS"],color:"green"},{name:"JARDIN",words:["SEMILLA","TIERRA","AGUA","SOL"],color:"blue"},{name:"HERIDAS EMOCIONALES",words:["PENA","DUELO","PERDON","CICATRIZ"],color:"purple"}]},"0601":{id:"special-0601",categories:[{name:"VERANO",words:["PLAYA","SOL","CALOR","VACACIONES"],color:"yellow"},{name:"DEPORTES VERANO",words:["NATACION","SURF","BUCEO","VELA"],color:"green"},{name:"FRUTAS VERANO",words:["SANDIA","MELON","MANGO","PINA"],color:"blue"},{name:"ROPA VERANO",words:["SHORT","CAMISETA","SANDALIA","GORRA"],color:"purple"}]}
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

// Rango de fechas del Mundial 2026
const MUNDIAL_START = { month: 6, day: 11 };
const MUNDIAL_END = { month: 7, day: 19 };

export function getDailyPuzzle(date = new Date(), mode = 'normal') {
  // Special mode: return a rotating Mundial puzzle during the world cup period
  if (mode === 'special') {
    return getMundialPuzzle(date);
  }
  const monthDay = String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0');
  if (SPECIAL_PUZZLES[monthDay] && mode !== 'jason') {
    return { ...SPECIAL_PUZZLES[monthDay], date };
  }
  const puzzlePool = mode === 'jason' ? JASON_PUZZLES : PUZZLES;
  let seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  if (mode === 'jason') {
    seed += 99999;
  }
  const index = Math.abs(seed * 16807) % puzzlePool.length;
  return { ...puzzlePool[index], date };
}

// Returns true if today is within the Mundial 2026 date range
export function isMundialActive(date = new Date()) {
  const start = new Date(date.getFullYear(), MUNDIAL_START.month - 1, MUNDIAL_START.day);
  const end = new Date(date.getFullYear(), MUNDIAL_END.month - 1, MUNDIAL_END.day);
  return date >= start && date <= end;
}

// Returns a daily rotating Mundial puzzle based on date seed
function getMundialPuzzle(date = new Date()) {
  if (!isMundialActive(date)) return null;
  // Use the same deterministic seed approach as normal mode
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const index = Math.abs(seed * 16807) % MUNDIAL_PUZZLES.length;
  return { ...MUNDIAL_PUZZLES[index], date };
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
  const poolSize = 10;
  const groupCount = Math.floor(PUZZLES.length / poolSize);
  const groupIndex = Math.abs(weekSeed * 16807) % groupCount;
  const startIdx = groupIndex * poolSize;
  const weeklyPool = PUZZLES.slice(startIdx, startIdx + poolSize);
  const pickIndex = Math.floor(Math.random() * weeklyPool.length);
  return { ...weeklyPool[pickIndex], isPractice: true };
}

export { PUZZLES, SPECIAL_PUZZLES, JASON_PUZZLES, MUNDIAL_PUZZLES, getWeeklyPracticePuzzle };
