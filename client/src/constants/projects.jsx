export const LABELS = {
  en: {
    title : (mainName) => (<>
      <strong className={mainName}>Projects</strong>
    </>),
    subtitle : (mainName) => (<><p className={mainName}>
        Here are a few projects I've worked.
      </p> </>),
    view : "View project",
    more : "Know more"
  },
  esp : {
    title : (mainName) => (<>
      <strong className={mainName}>Proyectos</strong>
    </>),
    subtitle : (mainName) => (<><p className={mainName}>
        Aqui puedes encontrar algunos proyectos en los que he trabajado. 
      </p> </>),
    view : "Ver proyecto",
    more : "Saber más"
  }
}

export const PROJECTS = [
  {
    id: '1',
    title: 'Watertown',
    image: {
      src: 'https://res.cloudinary.com/dnb5g8p7v/image/upload/c_crop,h_598,w_598/v1656891478/portfolio/watertown_qehjg5.jpg',
      },
      links: {
        site: 'https://big-monster.net/project/water-town/',
      },
      technologies: [
        'Big monster',
        'Unity',
        'C#',
        'mobile'
      ],
    text : {
        en: {
          position : "Game Programmer",
          description: (<>
            Game about water care, complete the minigames and upgrade your city.
            I was responsible of the programming of the minigames, navigation in the city and the upgrade system.
          </>)},
        esp : {
          position : "Game Programmer",
          description: (<>
            Juego sobre el cuidado del agua, completa varios minijuegos y mejora la ciudad.
            Me encargue de la programación de los minijuegos, la navegación y el sistema de mejora de la ciudad.
          </>)}
    
    }
  },
  {
    id: '2',
    title: 'Mansion Alien',
    image: {
      src: 'https://res.cloudinary.com/dnb5g8p7v/image/upload/v1656891480/portfolio/alien_dcfj54.png',
      },
      links: {
        site: 'https://play.google.com/store/apps/details?id=mx.inoma.mansionalien2&hl=es_AR&gl=US',
      },
      technologies: [
        'Big Monster',
        'Unity',
        'C#',
        'mobile',
        'WebGL'
      ],
    text : {
      en: {
        position : "Game Programmer",
        description: (<>
          Game for the prevention of drug abuse in young people from 8 to 13 years old.
          I programmed the controls, AI of enemies and bosses, quests, dialogues and collectables.
          I created the shaders of the main character and enemies, as well as a render to simulete ilumination without lights.
          Also I designed a tool for level integration using Tiled and json. 
        </>)},
      esp : {
        position : "Game Programmer",
        description: (<>
          Juego para la prevención del consumo de drogas en jóvenes de 8 a 13 años.
          Programe el sistema de controles, IA de los enemigos y bosses, sistema de misiones, diálogos y coleccionables.
          Cree los shaders del personaje principal, los enemigos, asi como un render para simular iluminación en el entorno sin utilizar luces.
          Tambien diseñe una herramienta para la integración de niveles utilizando Tiled y json.
        </>)}
    }
  },
  {
    id: '3',
    title: 'Mechawaiis',
    image: {
      src: 'https://res.cloudinary.com/dnb5g8p7v/image/upload/c_crop,h_503,w_503/v1656891478/portfolio/mecha_qalorj.jpg',
      },
      links: {
        site: 'https://big-monster.net/project/mechawaiis/',
      },
      technologies: [
        'Big Monster',
        'Unity',
        'C#',
        'mobile'
      ],
    text : {
      en: {
        position : "Game Programmer",
        description: (<>
          Runner for mobiles, go forward and improve your mecha.
          I programmed the controls, the pseudorandom level system, powerup, obstacles and
          the store. I integrated announces with Firebase.
        </>)},
      esp : {
        position : "Game Programmer",
        description: (<>
          Runner para móviles, avanza y compra mejoras para tu mecha.
          Programe los controles, el sistema de niveles pseudoaleatorio, powerups, obstaculos y 
          la tienda. Integre anuncios con Firebase.
        </>)}
    }
  },

  {
    id: '4',
    title: 'Paipote',
    image: {
      src: 'https://res.cloudinary.com/dnb5g8p7v/image/upload/v1657039621/portfolio/paipote_g7gtek.jpg',
      },
      links: {
        site: 'https://globalgamejam.org/2018/games/paipote',
      },
      technologies: [
        'GGJ 2018',
        'Unity',
        'C#',
      ],
    text : {
      en: {
        position : "Programmer",
        description: (<>
          Paipote it's a game from the point and click genre. The game have two phases: Paipote's city exploration and recollection of grandfather's memories.
          I programmed the navigation, collectables and a shader to see thourgh buildings when you are behind them.
        </>)},
      esp : {
        position : "Programmer",
        description: (<>
          Paipote es un juego point and click. El juego tiene dos fases: exploración por la ciudad y la recolección de las memorias del abuelo.
          Programé la navegación, coleccionables y un shader para ver a través de los edificios cuando estas destrás de ellos.
        </>)},
    }
  },

  {
    id: '5',
    title: "Hell kitten night's",
    image: {
      src: 'https://res.cloudinary.com/dnb5g8p7v/image/upload/v1657039621/portfolio/kitten_cx43km.jpg',
      },
      links: {
        site: 'https://globalgamejam.org/2019/games/hell-kitten-nights',
      },
      technologies: [
        'GGJ 2019',
        'Unity',
        'C#',
      ],
    text : {
      en: {
        position : "Programmer",
        description: (<>
          Help Dante fight Fausto's nightmares in this fun shooter where you have the power to decide if you face your fears or eliminate them completely.
          I programmed the controls and the shooter system.
        </>)},
      esp : {
        position : "Programmer",
        description: (<>
        Ayuda a Dante a pelear contre las pesadillas de Fausto en este divertido shooter, donde tienes el pode de decidir
        si enfrentas tus miedos o los eliminas por completo.
        Programé los controles y el sistema de disparo.
        </>)},
    }
  },
];

