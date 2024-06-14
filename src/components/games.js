const games = [
  {
    id: 1,
    name: 'Red Dead Redemption 2',
    img: 'read_dead_redemption_2.jpg',
    valoration: 9.62,
    description: 'Red Dead Redemption 2 es la secuela del videojuego de éxito de Rockstar Red Dead Redemption (2010), considerado como uno de los mejores títulos de la compañía. Se trata de la tercera entrega de la saga Red Dead, iniciada en 2004 con Red Dead Revolver y nos trasladará de nuevo al Salvaje Oeste para ponernos en el escenario de mundo abierto más grande jamás creado por los padres de Grand Theft Auto y contarnos una historia sobre forajidos, venganza y atracos en un escenario de gran realismo en PlayStation 4 y Xbox One.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 2,
    name: 'Elden Ring PS4',
    img: 'elden_ring.jpg',
    valoration: 9.56,
    description: 'Elden Ring es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 3,
    name: 'The Last of Us Remasterizado',
    valoration: 9.44,
    img: 'the_last_of_us_remastered.jpg',
    description: 'The Last of Us Remastered para PS4 es una adaptación a la consola de Sony de uno de los mejores juegos de PS3. Esta versión remasterizada contará con mejoras gráficas respecto al original y con todo el contenido descargable extra lanzado, como la campaña Left Behind.', 
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 4,
    name: 'Grand Theft Auto V',
    img: 'gta_5.jpg',
    valoration: 9.42,
    description: 'Grand Theft Auto V para PS4 y Xbox One es una versión mejorada y ampliada del videojuego de acción en mundo abierto Grand Theft Auto V desarrollado por Rockstar lanzado en 2013. Esta versión del éxito, más ambiciosa técnicamente, presenta gráficos y nuevo contenido como armas, vehículos o misiones, además de una banda sonora ampliada y más jugadores en el modo online. Vuelve a presentarnos la historia de Michael, Franklin y Trevor en la ciudad de Los Santos y sus alrededores, una de las más celebradas de la historia del videojuego.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 5,
    name: 'God of War',
    img: 'god_of_war_hits.jpg',
    valoration: 9.37,
    description: 'God of War es la vuelta de Kratos a los videojuegos tras la trilogía original. Esta nueva entrega para PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, apostará por un nuevo comienzo para el personaje y una ambientación nórdica, ofreciéndonos una perspectiva más madura y realista de la mitología de dioses y monstruos milenarios habitual en la serie de títulos. En God of War, Kratos será un guerrero más curtido y pasivo, pues tendrá que desempeñar el rol de padre en un frío y hostil escenario, al que parece haberse retirado para olvidar su pasado.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 6,
    name: 'Uncharted 4: El Desenlace del Ladrón',
    img: 'uncharted_4.jpg',
    valoration: 9.33,
    description: 'Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más recónditos del mundo.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 7,
    name: 'The Last of Us Parte II ',
    img: 'the_last_of_us_2.jpg',
    valoration: 9.3,
    description: 'The Last of Us 2 es la secuela de The Last of Us, uno de los juegos más aclamados de la consola PS3, que apareció en 2015 en PS4 en versión remasterizada. Esta continuación ha sido anunciada en el evento PlayStation Experience de diciembre de 2016, generando grandísimas expectativas entre los jugadores.',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 8,
    name: 'The Witcher 3: Wild Hunt',
    img: 'the_witvher_3_complete_edition.jpg',
    valoration: 9.28,
    description: 'The Witcher 3 es la tercera entrega de la saga The Witcher desarrollada por CD Projekt para PS4, Xbox One y Pc. Se trata de un videojuego que mezcla elementos de aventura, acción y rol en un mundo abierto épico basado en la fantasía. El jugador controlará una vez más a Geralt de Rivia, el afamado cazador de monstruos, (también conocido como el Lobo Blanco) y se enfrentará a un diversificadísimo bestiario y a unos peligros de unas dimensiones nunca vistas hasta el momento en la serie, mientras recorre los reinos del Norte. Durante su aventura, tendrá que hacer uso de un gran arsenal de armas, armaduras y todo tipo de magias para enfrentarse al que hasta ahora ha sido su mayor desafío, la cacería salvaje. Este videojuego ha sido galardonado como el mejor juego del año 2015 tanto por críticos especializados como por galas de premios como los “Golden Joystick Awards”, “Game Developers Choice Awards” y “The Game Awards”. Además cuenta con 2 DLC o Expansiones: Blood and wine, y Hearts of Stone.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 9,
    name: 'God of War: Ragnarok ',
    img: 'god_of_war_ragnarok.jpg',
    valoration: 9.16,
    description: 'God of War: Ragnarok para PlayStation 5 es la secuela de God of War, el reinicio y a la vez secuela de los anteriores God of War para consolas PlayStation. Desarrollado por el prestigioso estudio Sony Santa Monica y con la dirección de Cory Barlog, encontraremos una nueva historia en la que Kratos deberá enfrentarse a diversos enemigos de inspiración nórdica. Explorando los mitos del Ragnarok, el apocalipsis que todo lo devorará según esta tradición del norte, la secuela se espera que llegue en 2021.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 10,
    name: 'Dark Souls III ',
    img: 'dark_souls_3_game_of_the_year.jpg',
    valoration: 9.14,
    description: 'Dark Souls 3 es la tercera entrega de la saga Dark Souls para PC, Xbox One y PS4, que combina elementos de los juegos de aventura y acción y tercera persona, con tintes de rol para mejorar a nuestro personaje. El tercer capítulo de la serie de títulos de From Software será el primero en ser desarrollado íntegramente en consolas como Xbox One y PlayStation 4. En esta nueva entrega, visitaremos el oscuro y amplio reino de Lothric, aprenderemos nuevas habilidades vinculadas a las armas que empuñemos y combatiremos contra duras y ásperas criaturas, que en esta ocasión serán más peligrosas y rápidas que nunca.',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 11,
    name: ' Metal Gear Solid V: The Phantom Pain',
    img: 'metal_gear_solid_5_hits.jpg',
    valoration: 9.13,
    description: 'Metal Gear Solid continúa en PS4 con una nueva entrega posterior a Metal Gear Solid: Peace Walker y anterior a los sucesos de los dos primeros Metal Gear y toda la subsaga Solid posterior. Big Boss, el padre de Solid Snake, se despierta nueve años después de los sucesos de Ground Zeroes y tendrá que acabar con sus enemigos en Afganistán y África, con un enorme mundo abierto a nuestros pies.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 12,
    name: 'Sekiro: Shadows Die Twice ',
    img: 'sekiro.jpg',
    valoration: 9.09,
    description: 'Sekiro: Shadows Die Twice es el nuevo videojuego de FromSoftware, el reputado estudio creador de obras maestras como Tenchu, Bloodborne o Dark Souls. Se trata de un aventura de rol, acción y sigilo para Xbox One, PS4 y PC diseñado y dirigido por Hidetaka Miyazaki, uno de los diseñadores de videojuegos más influyentes de la última época y responsable de haber definido un género propio. Sekiro apuesta por una ambientación única, en el Japón feudal y una jugabilidad distinta.',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 13,
    name: 'Resident Evil 2 Remake ',
    img: 'resident_evil_2.jpg',
    valoration: 8.97,
    description: 'Resident Evil 2 Remake es la puesta al día del clásico original del género survival horror para Xbox One, PlayStation 4 y PC, que coincide con el vigésimo aniversario de la saga Resident Evil. Supone un cambio de perspectiva jugable, de estilo de juego y de ambientación, un concepto muy ambicioso desde el plano técnico y artístico pero que mantendrá la esencia del emblemático videojuego que marcó un antes y un después.',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 14,
    name: 'It Takes Two',
    img: 'it takes_two.jpg',
    valoration: 8.87,
    description: 'It Takes Two es una aventura de acción y plataformas cooperativa desarrollada por Hazelight para PlayStation 4, PlayStation 4, Xbox One, Xbox Series, Nintendo Switch y PC. Los creadores de A Way Out con el carismático Josef Fares a la cabeza volvían con un original juego que solo se puede disfrutar entre dos jugadores y con una visión a pantalla partida.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 15,
    name: 'Batman: Arkham Knight ',
    img: 'batman_arkham_knight_hits.jpg',
    valoration: 8.86,
    description: 'Batman: Arkham Knight para PS4 es un nuevo videojuego de Batman que cerrará la saga "Arkham" del personaje de DC Comics en los videojuegos. Desarrollado por los creadores de Arkham Asylum y Arkham City, el título tiene lugar un año después de los sucesos de éste, enfrentándose Batman de nuevo a un grupo de villanos, liderados por el misterioso Arkham Knight. Volveremos a contar con libertad para explorar Gotham, y esta vez podremos conducir el Batmóvil.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 16,
    name: 'Horizon: Zero Dawn ',
    img: 'horizon_complete_edition_hits.jpg',
    valoration: 8.86,
    description: 'Horizon: Zero Dawn es un juego de aventuras en mundo abierto, con dosis acción y exploración en tercera persona a cargo de Guerrilla Games, responsables de Killzone. Ambientado en un futuro apocalíptico distante, los seres humanos han experimentado una regresión tecnológica que los ha devuelto a la edad de piedra y dividido en tribus. Encarnando a Aloy, una hábil cazadora, deberemos descubrir secretos del pasado, así como sobrevivir en un nuevo mundo plagado de criaturas robóticas inteligentes, hostiles y muy peligrosas.',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 17,
    name: 'Devil May Cry 5',
    img: 'devil_may_cry_5_deluxe_edition.jpg',
    valoration: 8.82,
    description: 'Devil May Cry 5 es la quinta entrega de la serie de juegos de acción en tercera persona o ‘hack and slash’ de Capcom para Xbox One, PS4 y PC. Retomando la saga después del lanzamiento de la cuarta parte, hace diez años, Hideaki Itsuno director del título y de la mayoría de los capítulos de las aventuras de Dante, promete una vuelta a los orígenes y una jugabilidad frenética y desafiante con distintos personajes.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 18,
    name: 'Spider-Man PS4',
    img: 'marvel_spiderman_marvel.jpg',
    valoration: 8.81,
    description: 'Spider-Man para PS4 es un videojuego de acción y aventuras con un estilo jugable de mundo abierto, que permite al jugador desplazarse de un lugar a otro con total libertad de movimientos y que tiene por escenario donde de desarrolla la historia, la ciudad de Nueva York. El juego está desarrollado por Imsomniac Games, creadores de juegos como Spyro, Ratchet & Clank o Sunset Overdrive, entre otros y además está producido por Sony como videojuego exclusivo de PlayStation 4.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 19,
    name: 'Dishonored 2',
    img: 'dishonored_2.jpg',
    valoration: 8.78,
    description: 'Dishonored 2 es la secuela del título de culto Dishonored, que se ambientará 15 años después de la primera entrega, y nos ofrecerá escoger entre Emily y Corvo como personajes jugables, presentando ambos habilidades y estilos de juego muy diferentes, enfocándose una más hacia el sigilo y el otro hacia el combate. Una vez más, estamos ante una aventura en primera persona llena de detalles, con ambientación steampunk y cientos de detalles y formas de resolver cada conflicto, misión y combate.',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 20,
    name: 'Injustice 2 ',
    img: 'injustice2.jpg',
    valoration: 8.71,
    description: 'Injustice 2 para PS4 es el regreso del juego de lucha que enfrenta a todos los héroes de DC entre sí. En esta ocasión vuelven luchadores como Batman, Superman o Wonder Woman, pero hay novedades como Batgirl. Se añaden nuevos supermovimientos y choques, pero la gran novedad es el sistema de subida de niveles y configuración de los luchadores, que nos reta a seguir avanzando.',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 21,
    name: 'Dragon Ball FighterZ ',
    img: 'dragon_ball_figther_z.jpg',
    valoration: 8.71,
    description: 'Dragon Ball fighterZ es un videojuego de peleas arcade en 2D desarrollado por el estudio Arc System Works y distribuido por Namco Bandai para las plataformas de PC y Xbox One.',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 22,
    name: 'Far Cry 4',
    img: 'far_cry_4.jpg',
    valoration: 8.7,
    description: 'Far Cry 4 para PS4 es una nueva entrega de esta saga de acción en primera persona, que nos lleva esta vez al Himalaya, a la región de Kyrat, para enfrentarnos a una especie de tirano que se ha proclamado rey de la zona y se comporta de manera brutal con los habitantes. Encarnaremos a Ajay Ghale, que tendrá que viajar a la región de Kyrat para cumplir el último deseo de su madre, viéndose envuelto en la guerra civil que se está librando.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 23,
    name: 'Mortal Kombat 11 Ultimate',
    img: 'mortal_kombat_11_ultimate.jpg',
    valoration: 8.7,
    description: 'Mortal Kombat 11 es la nueva entrega de la violenta y salvaje saga de lucha de NetherRealm Studios para consolas y PC. Se trata de la undécima secuela de una serie de títulos de combate y peleas de marcada estructura 2D, que en esta ocasión, además de añadir los mejores gráficos de la serie y el gore más descarnado en los llamados Fatality, presentará luchadores clásicos y nuevos, más modos de juego y una oferta online que quiere marcar un antes y un después en los eSports.',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 24,
    name: 'Mortal Kombat XL',
    img: 'mortal_kombat_xl.jpg',
    valoration: 8.69,
    description: 'Mortal Kombat XL es un juego de lucha desarrollado por NetherRealm Studios para PlayStation 4, Xbox One y PC. Se trata de una versión mejorada y ampliada de Mortal Kombat X que incluye los dos paquetes de DLC Kombat Pack, que incluyen personaje como Jason Voorhees, Predator, Leatherface o el xenomorfo de Alien.',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 25,
    name: 'Dark Souls II: Scholar of the First Sin ',
    img: 'dark_souls_2.jpg',
    valoration: 8.67,
    description: 'Dark Souls II: Scholar of the First Sin para PS4 es una versión definitiva de Dark Souls, que llega por primera vez a la nueva generación con gráficos mejorados. Además de los gráficos, incluye todo el contenido descargable hasta la fecha y cambios en la jugabilidad, convirtiéndolo en una versión definitiva de Dark Souls 2',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 26,
    name: 'Guilty Gear Xrd Rev 2 ',
    img: 'guilty_year.jpg',
    valoration: 8.66,
    description: 'Guilty Gear Xrd Rev 2 para PS4 es la segunda revisión de Guilty Gear Xrd -SIGN- tras el lanzamiento de Guilty Gear Xrd: Revelator. De este modo, este título de lucha incluirá todos los personajes del juego original y su revisión, incluidos los descargables, además de dos nuevos combatientes: Baiken y Answer. Por otra parte también se ha realizado un completo reequilibrado de toda la plantilla de luchadores, nuevos escenarios, la continuación del modo historia y mejoras en su infraestructura online.',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 27,
    name: 'NBA 2K23  ',
    img: 'nba2k23.jpg',
    valoration: 8.65,
    description: 'La serie de baloncesto de 2K Sports que ha dominado los simuladores de este deporte durante los últimos años llega con una versión completamente de nueva generación a PlayStation 4. Gráficos renovados, nuevas dinámicas de juego y la misma simulación a la que Visual Concepts nos ha acostumbrado durante quince años, en una edición del juego en la que Lebron James cobra gran protagonismo.',
    version: 1,
    size: '40gb',
    category: 'sports'
  },
  {
    id: 28,
    name: 'Rayman Legends',
    img: 'rayman_legends.jpg',
    valoration: 9.65,
    description: 'Rayman Legends es la adaptación a PlayStation 4 del último juego de Rayman, que de nuevo nos lleva a un mundo en dos dimensiones y jugabilidad clásica en el que hasta cuatro jugadores podrán colaborar para superar los niveles. Difíciles retos, gráficos coloristas, diversión y mucho humor en uno de los mejores juegos de plataformas de la década.',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 29,
    name: 'Uncharted: The Nathan Drake Collection',
    img: 'uncharted_collection_hits.jpg',
    valoration: 8.64,
    description: 'La trilogía original de Uncharted para PlayStation 3 recibe una actualización para la consola de Sony, PlayStation 4. En Uncharted: The Nathan Drake Collection disponemos de los tres juegos de la saga renovados y mejorados a nivel gráfico, en un mismo disco. Las aventuras de Nathan Drake cuentan ahora con una mayor resolución y tasa de imágenes por segundo, así como un buen número de nuevos trofeos y logros. Además, esta remasterización en alta definición, hace acopio de un modo foto que permitirá captar nuestros momentos preferidos.',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 30,
    name: 'Age of Wonder Planetfall',
    img: 'age_of_wonder_planetfall.jpg',
    valoration: '?',
    description: 'En desarrollo',
    version: 1,
    size: '40gb',
    category: 'estrategia'
  },
  {
    id: 31,
    name: 'Alladin and Lion King',
    img: 'aladdin_and_lion_king.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 32,
    name: `Assassin's Creed Mirage`,
    img: 'assassins_creed_mirage.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 32,
    name: 'BattleField 5',
    img: 'battlefield_5.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: ''
  },
  {
    id: 33,
    name: 'Ben 10',
    img: 'ben_10.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 34,
    name: 'Brawalla',
    img: 'brawlhalla.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 35,
    name: 'Cars 3',
    img: 'cars_3.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 36,
    name: 'Civilization',
    img: 'civilization_6.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'estrategia'
  },
  {
    id: 37,
    name: 'Control',
    img: 'control.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: ''
  },
  {
    id: 38,
    name: 'Crash Bandicot 4',
    img: 'crash_bandicot_4.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 39,
    name: 'Crash Bandicot Trilogy',
    img: 'crash_bandicot_trilogy.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 40,
    name: 'Crash Team Racing Nitro Fueled',
    img: 'crash_team_racing_nitro_fueled_3d.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'carreras'
  },
  {
    id: 41,
    name: 'Darksiders Genesis',
    img: 'darksiders_genesis.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 42,
    name: 'Days Gone',
    img: 'days_gone_3d.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 43,
    name: 'Death Stranding',
    img: 'death_stranding.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 44,
    name: 'Demon Slayer (Kimetsu no Yaiba)',
    img: 'demon_slayer.jpg',
    valoration: '?',
    description: '...',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 45,
    name: 'Detroit Become Human',
    img: 'detrotit_become.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 46,
    name: 'Devil My Cry Definitive Edition',
    img: 'devil_my_cry_definitive_edition.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 47,
    name: 'Dirt 5',
    img: 'dirt-5.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 48,
    name: 'Dissidia Final Fantasy',
    img: 'dissidia_final_fantasy.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 49,
    name: 'FC 24',
    img: 'fc_24.jpg',
    valoration: '8',
    description: 'EA Sports FC 24 es el sucesor de FIFA 23, un videojuego de fútbol que se abre paso a una nueva de pura innovación bajo el lema The World is Game, la experiencia futbolística más fiel hasta la fecha con HyperMotionV, PlayStyles optimizado por Opta y el nuevo motor de Frostbite. Con más de 19.000 futbolistas, 700 equipos y 30 ligas para disputas, este simulador del deporte rey quiere que el usuario sienta cada partido como nunca antes gracias a tres tecnologías de vanguardia que ofrecen un realismo sin parangón en todos los partidos. ',
    version: 1.18,
    size: '41gb',
    category: 'deporte'
  },
  {
    id: 50,
    name: 'FIST',
    img: 'fist.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 51,
    name: 'Ghost of Tushima Director Cut',
    img: 'ghost_of_tushima_director_cut.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 52,
    name: 'Ghosst Recond Wildlands',
    img: 'ghost_recon_wildlands.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter3'
  },
  {
    id: 53,
    name: 'Gof of War 3 Remastered',
    img: 'god_of_war_3.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 54,
    name: 'Grid Legends',
    img: 'grid_legends.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 55,
    name: 'Hellblade Sacrifice',
    img: 'hellblade_sacrifice.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 56,
    name: 'Hitman 1',
    img: 'hitman_1.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter3'
  },
  {
    id: 57,
    name: 'Hitman 2',
    img: 'hitman_2.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter3'
  },
  {
    id: 58,
    name: 'Hitman 3',
    img: 'hitman_3.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter3'
  },
  {
    id: 59,
    name: 'Hogwarts Legacy',
    img: 'hogwarts_legacy.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 60,
    name: 'Hollow Knight',
    img: 'hollow_knight.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 61,
    name: 'Horizon Forbidden West',
    img: 'horizon_forbidden_west_3d.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 62,
    name: 'Infamous Second Son',
    img: 'infamous_second_son.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 63,
    name: 'Jump Force',
    img: 'jump_force.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 64,
    name: 'Kao',
    img: 'kao_kangaroo.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 65,
    name: 'Kong FU Panda Showdown of Legendary Legends',
    img: 'kong_fu_panda_showdown_of_legendary_legends.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 66,
    name: 'Little Big Planet',
    img: 'little_big_planet_3_3d.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 67,
    name: 'Little Nigthmares',
    img: 'little_nigthmares.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 68,
    name: 'Lord of the fallen',
    img: 'lords_of_the_fallen.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 69,
    name: 'Mafia Definitive Edition',
    img: 'mafia_definitive_edition.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 70,
    name: 'Metro Exodus',
    img: 'metro_exodus.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter'
  },
  {
    id: 71,
    name: 'Maincraft',
    img: 'minecraft.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'estrategia'
  },
  {
    id: 72,
    name: 'Monopolio',
    img: 'monopolio.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'estrategia'
  },
  {
    id: 73,
    name: 'Need for speed Heat',
    img: 'need_for_speed_heat.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 74,
    name: 'Need for speed Hot Porsuit',
    img: 'need_for_speed_hot_porsuit.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 75,
    name: 'Oceabhorn',
    img: 'oceanhorn_monster_of_uncharted_seas.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 76,
    name: 'Ratchet and Clank',
    img: 'ratchet_clank.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 77,
    name: 'Resident Evil 3 Remake',
    img: 'resident_evil_3.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 78,
    name: 'Resident Evil 4 Remake',
    img: 'resident_evil_4.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 79,
    name: 'Resident Evil Village',
    img: 'resident_evil_village.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 80,
    name: 'Sackboy a Big Adventure',
    img: 'sackboy_a_big_adventure.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 81,
    name: 'Sherlock Holmes',
    img: 'sherlock_holmes.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: ''
  },
  {
    id: 82,
    name: 'Need for Speed Underground 2 PS4',
    img: 'need_for_speed_underground_2.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 83,
    name: 'Sifu',
    img: 'sifu.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 84,
    name: 'Sniper Ghost Warrior Contracts',
    img: 'sniper_ghost_warrior_contracts.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter'
  },
  {
    id: 85,
    name: 'Sniper Ghost Warrior Contracts 2',
    img: 'sniper_ghost_warrior_contracts_2.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'shooter'
  },
  {
    id: 86,
    name: 'Spiderman Miles Morales',
    img: 'spiderman_marvel_miles_morales_3d.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 87,
    name: 'Star Wars Jedi Fallen Order',
    img: 'star_wars_jedi_fallen_order.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'rpg'
  },
  {
    id: 88,
    name: 'Stray',
    img: 'stray.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 89,
    name: 'Street Fighter 6',
    img: 'street_fighter_6.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 90,
    name: 'Super Mario 64',
    img: 'super_mario_64.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 91,
    name: 'The Callisto Protocol',
    img: 'the_callisto_protocol_3d.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 92,
    name: 'The King of Fighter XV',
    img: 'the_king_of_figther_XV.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 93,
    name: 'The Order',
    img: 'the_order1886.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'terror'
  },
  {
    id: 94,
    name: 'Truck Driver',
    img: 'truck_driver.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'simulator'
  },
  {
    id: 95,
    name: 'Ultimate Marvel vs Capcom',
    img: 'ultimate_marvel_vs_capcom_3.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'pelea'
  },
  {
    id: 96,
    name: 'Vampyr',
    img: 'vampyr.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'terror'
  },
  {
    id: 97,
    name: 'Wo Long',
    img: 'wo_long_3d.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'supervivencia'
  },
  {
    id: 98,
    name: 'Yu-Gi-OH legacy of Duelist',
    img: 'yu_gi_oh_legacy_of_duelist.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'plataforma'
  },
  {
    id: 99,
    name: 'Need for Speed Most Wanted',
    img: 'need_for_speed_most_wanted.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 100,
    name: 'Need for Speed Pro Street',
    img: 'need_for_speed_pro_street.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 101,
    name: 'Need for Speed Payback',
    img: 'need_for_speed_payback_deluxe_edititon.jpg',
    valoration: '?',
    description: '',
    version: 1,
    size: '40gb',
    category: 'carrera'
  },
  {
    id: 102,
    name: 'Hotel Transilvania 3 Monster OverBoard',
    img: 'hotel_transilvania_3_monster_overboard.jpg',
    valoration: '5.8',
    description: 'Únete a Drácula y sus amigos en una nueva aventura durante las vacaciones de la familia en Hotel Transylvania 3. El videojuego oficial de la película te pone en la piel del protagonista de la trilogía, interpretado por el actor Adam Sandler, que deberá ayudar a Wayne, Murray y compañía a salir de las Islas Perdidas. Por supuesto, Frankenstein, Hombre Lobo y la Momia podrán ayudar a Drac con sus habilidades para conseguir volver a su crucero con éxito.',
    version: 1.01,
    size: '40gb',
    category: 'aventura'
  },
  {
    id: 103,
    name: 'Lego Dimensions',
    img: 'lego_dimensions.jpg',
    valoration: '8.2',
    description: 'Cuando se abre una misteriosa brecha entre los universos de LEGO y succiona a personajes de DC Comics, La LEGO Película y El Señor de los Anillos, les corresponde a Batman, Gandalf y Supercool formar una alianza con el objetivo de salvar a sus amigos y derrotar al malvado Lord Vortech. Así comienza LEGO Dimensions y su vídeo de aventuras y construcción repleto de personas de distintas sagas.',
    version: 1.24,
    size: '27.2gb',
    category: 'aventura'
  },
  {
    id: 104,
    name: 'The Lego Movie',
    img: 'the_lego_movie.jpg',
    valoration: '7.6',
    description: 'Videojuego de acción y aventuras inspirado en el mundo y personajes creados para la película de la popular marca LEGO. El título está protagonizado por Emmet, una figura LEGO corriente identificado por error como el Elegido para salvar el mundo.',
    version: 1.04,
    size: '14.4gb',
    category: 'aventura'
  },
  {
    id: 105,
    name: 'The Lego Movie 2',
    img: 'the_lego_movie_2.jpg',
    valoration: '7.6',
    description: 'La LEGO Película 2: El Videojuego invita al jugador a explorar el espacio exterior, descubrir nuevos mundos y poner a prueba sus habilidades de Maestro Constructor. ¡Todo es fabuloso!',
    version: 1.03,
    size: '8.75gb',
    category: 'aventura'
  },
  {
    id: 106,
    name: 'The Lego Ninjago',
    img: 'the_lego_ninjago.jpg',
    valoration: '7',
    description: 'La serie de televisión LEGO Ninjago regresa al mundo de los videojuegos con esta nueva aventura de acción para Nintendo 3DS y PS Vita.',
    version: 1.00,
    size: '16.4gb',
    category: 'aventura'
  },
  {
    id: 107,
    name: 'Ben 10 Power Trip',
    img: 'ben_10_power_trip.jpg',
    valoration: '6.8',
    description: 'Ben 10 Power Trip es un videojuego de acción y aventura ambientado un mundo 3D lleno de peleas, puzles y secretos donde Ben Tennyson, un joven que usa su fiel Omnitrix para transformarse en diferentes criaturas alienígenas, habrá de salvar el mundo una vez más en una historia inédita frente a la serie de animación en la que el malvado Hex ha hechizado a Europa.',
    version: 1.03,
    size: '1.87gb',
    category: 'aventura'
  },
]

 export { games };  

/* const result = games.map(game => ({
  ...game,
  category: 'aventura',

}))
console.log(result); */

/* const result = games.some(game => game.category.includes('aventura')) */
