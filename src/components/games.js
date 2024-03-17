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
  }
]

 export { games };  

/* const result = games.map(game => ({
  ...game,
  category: 'aventura',

}))
console.log(result); */

/* const result = games.some(game => game.category.includes('aventura')) */
