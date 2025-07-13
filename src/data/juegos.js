const juegos = [
  // === DESTACADOS === PS5
  {
    id: 1,
    titulo: 'Ghost of Tsushima',
    consola: 'PS5',
    sinopsis: 'Conviértete en Jin Sakai y defiende a tu gente del invasor mongol en un mundo abierto lleno de paisajes, batallas y secretos por descubrir.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/1-ghost.jfif'
  },
  {
    id: 2,
    titulo: 'Doom The Dark Ages',
    consola: 'PS5',
    sinopsis: 'Enfrenta hordas de demonios en paisajes medievales con armas devastadoras en esta entrega intensa de la saga Doom.',
    precio: 49.99,
    destacado: true,
    imagen: './public/assets/juegos/2-doom.jfif'
  },
  {
    id: 3,
    titulo: 'Dead Space Remastered',
    consola: 'PS5',
    sinopsis: 'Vuelve al terror del espacio con gráficos mejorados mientras exploras la nave Ishimura y enfrentas horrores indescriptibles.',
    precio: 39.99,
    destacado: true,
    imagen: './public/assets/juegos/3-deadspace.webp'
  },
  {
    id: 4,
    titulo: 'Resident Evil 4 Remake',
    consola: 'PS5',
    sinopsis: 'Acompaña a Leon S. Kennedy en su misión de rescate con gráficos renovados y acción intensa en cada paso.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/4-residentevil4.webp'
  },

  // === DESTACADOS === Nintendo Switch
  {
    id: 5,
    titulo: 'The Legend of Zelda: Breath of the Wild',
    consola: 'Nintendo Switch',
    sinopsis: 'Explora Hyrule en una aventura épica llena de descubrimientos, templos y enemigos en un mundo abierto vibrante.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/5-zeldabotw.jfif'
  },
  {
    id: 6,
    titulo: 'Ori and the Blind Forest',
    consola: 'Nintendo Switch',
    sinopsis: 'Ayuda a Ori en una emotiva aventura de plataformas mientras salvas el bosque y enfrentas desafíos únicos.',
    precio: 19.99,
    destacado: true,
    imagen: './public/assets/juegos/6-ori.jpg'
  },
  {
    id: 7,
    titulo: "Pokémon Let's Go Pikachu",
    consola: 'Nintendo Switch',
    sinopsis: 'Captura y entrena Pokémon en una versión moderna y nostálgica del clásico viaje por Kanto.',
    precio: 39.99,
    destacado: true,
    imagen: './public/assets/juegos/7-poke.jpg'
  },
  {
    id: 8,
    titulo: 'Hollow Knight',
    consola: 'Nintendo Switch',
    sinopsis: 'Explora un mundo subterráneo lleno de misterios y secretos en un metroidvania desafiante y cautivador.',
    precio: 14.99,
    destacado: true,
    imagen: './public/assets/juegos/8-hollow.webp'
  },

  // === DESTACADOS === Xbox One
  {
    id: 9,
    titulo: 'Red Dead Redemption 2',
    consola: 'Xbox One',
    sinopsis: 'Vive la historia de Arthur Morgan en un vasto mundo abierto con narrativa y detalles impresionantes.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/9-reddead.PNG'
  },
  {
    id: 10,
    titulo: 'Forza Horizon 5',
    consola: 'Xbox One',
    sinopsis: 'Disfruta de carreras y exploración en escenarios vibrantes de México con una amplia variedad de autos.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/10-forza.jpg'
  },
  {
    id: 11,
    titulo: 'Elden Ring',
    consola: 'Xbox One',
    sinopsis: 'Aventura de rol en mundo abierto donde exploras tierras misteriosas y enfrentas enemigos desafiantes.',
    precio: 59.99,
    destacado: true,
    imagen: './public/assets/juegos/11-elden.jfif'
  },
  {
    id: 12,
    titulo: 'Battlefield 1',
    consola: 'Xbox One',
    sinopsis: 'Vive la intensidad de la Primera Guerra Mundial en campos de batalla épicos con combates dinámicos.',
    precio: 29.99,
    destacado: true,
    imagen: './public/assets/juegos/12-battlefield1.jfif'
  },

  // === CATÁLOGO ADICIONAL PS5 ===
  {
    id: 13,
    titulo: 'Spider-Man: Miles Morales',
    consola: 'PS5',
    sinopsis: 'Acompaña a Miles Morales mientras descubre sus poderes de Spider-Man y protege Nueva York en una emocionante historia.',
    precio: 49.99,
    destacado: false,
    imagen: './public/assets/juegos/13-spiderman.webp'
  },
  {
    id: 14,
    titulo: 'Final Fantasy XVI',
    consola: 'PS5',
    sinopsis: 'Adéntrate en un mundo de fantasía épica con intensos combates y una narrativa envolvente en la nueva entrega de la saga.',
    precio: 69.99,
    destacado: false,
    imagen: './public/assets/juegos/14-finalfan.webp'
  },
  {
    id: 15,
    titulo: 'Gran Turismo 7',
    consola: 'PS5',
    sinopsis: 'Experimenta carreras realistas con una amplia variedad de autos y circuitos con gráficos de última generación.',
    precio: 59.99,
    destacado: false,
    imagen: './public/assets/juegos/15-granturismo.jfif'
  },
  {
    id: 16,
    titulo: 'Horizon Forbidden West',
    consola: 'PS5',
    sinopsis: 'Acompaña a Aloy en su viaje por tierras peligrosas con máquinas gigantes y secretos por descubrir.',
    precio: 59.99,
    destacado: false,
    imagen: './public/assets/juegos/16-horizon.avif'
  },

  // === CATÁLOGO ADICIONAL Nintendo Switch ===
  {
    id: 17,
    titulo: 'Super Mario Odyssey',
    consola: 'Nintendo Switch',
    sinopsis: 'Explora mundos creativos con Mario y su gorra Cappy en una aventura divertida llena de secretos.',
    precio: 49.99,
    destacado: false,
    imagen: './public/assets/juegos/17-supermario.avif'
  },
  {
    id: 18,
    titulo: 'Metroid Dread',
    consola: 'Nintendo Switch',
    sinopsis: 'Acompaña a Samus en una misión intensa enfrentando nuevos enemigos y peligros en cada rincón.',
    precio: 59.99,
    destacado: false,
    imagen: './public/assets/juegos/18-metroid.avif'
  },
  {
    id: 19,
    titulo: 'Mario Kart 8 Deluxe',
    consola: 'Nintendo Switch',
    sinopsis: 'Compite en divertidas y frenéticas carreras con amigos en pistas llenas de acción.',
    precio: 49.99,
    destacado: false,
    imagen: './public/assets/juegos/19-mk8.webp'
  },
  {
    id: 20,
    titulo: 'Splatoon 3',
    consola: 'Nintendo Switch',
    sinopsis: 'Disfruta de combates multijugador llenos de color y estrategia con nuevas armas y mapas.',
    precio: 59.99,
    destacado: false,
    imagen: './public/assets/juegos/20-splatoon.avif'
  },

  // === CATÁLOGO ADICIONAL Xbox One ===
  {
    id: 21,
    titulo: 'Halo The Master Chief Collection',
    consola: 'Xbox One',
    sinopsis: 'Vive la saga del Jefe Maestro con gráficos renovados, acción intensa y multijugador clásico en esta colección definitiva.',
    precio: 59.99,
    destacado: false,
    imagen: './public/assets/juegos/21-prueba.jpg'
  },
  {
    id: 22,
    titulo: 'Gears of War 4',
    consola: 'Xbox One',
    sinopsis: 'Únete a JD Fenix y su escuadrón en una intensa lucha contra el Enjambre con acción y disparos en tercera persona',
    precio: 39.99,
    destacado: false,
    imagen: './public/assets/juegos/22-gears4.jpg'
  },
  {
    id: 23,
    titulo: 'Sea of Thieves',
    consola: 'Xbox One',
    sinopsis: 'Explora mares abiertos con amigos mientras buscas tesoros y vives aventuras piratas.',
    precio: 29.99,
    destacado: false,
    imagen: './public/assets/juegos/23-sot.jfif'
  },
  {
    id: 24,
    titulo: 'Assassin’s Creed Valhalla',
    consola: 'Xbox One',
    sinopsis: 'Conviértete en un vikingo mientras exploras y conquistas tierras en una historia épica de aventuras.',
    precio: 49.99,
    destacado: false,
    imagen: './public/assets/juegos/24-valhalla.jpg'
  }
];

export default juegos;
