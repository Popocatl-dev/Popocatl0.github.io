export const MAIN = {
  en :{
    welcome : ( <>Welcome!</> ),
    presentation : (mainName) => ( <> 
    I'M
    <strong className={mainName}>  JESUS POPOCATL</strong></> ),
    profesion: ( <> Game Developer</> ),
    resumeButton : ( <> View Resume</> ),
    projectButton:  ( <> View Projects</> ),
  },
  esp : {
    welcome : ( <>¡Bienvenido!</> ),
    presentation : (mainName) => (<> 
    Soy
    <strong className={mainName}> JESUS POPOCATL</strong></> ),
    profesion: ( <> Game Developer</> ),
    resumeButton : ( <> Ver CV </> ),
    projectButton:  ( <> Ver Proyectos</> ),
  }
}

export const INTRO = {
  en :{
    title : (mainName) => ( <> 
      <span className={mainName}> ABOUT ME </span>{' '}
    </> ),

    description: (mainName) => ( <>
            <p>
            I'm a game developer, establishing my career in the industry<br />
            to create and design all kind of game systems.
            </p>

            <p>
            I studied Computer Engineering at UNAM.Have worked as programmer<br /> 
            for 6 years and 4 in game industry. I participate in  the development <br />
            of games and multimedia applications for a educational, marketing and,<br />
            entertaiment purposes on mobile and web platform.
            </p>

            <p>
            I continue to learning about game desing, coding and engines,<br />
            also have interest in shaders and technical art. <br />
            Gamer and Anime fan, I like to create experiences like the ones I grew up with. 
            </p>
    </>)
  },
  esp : {
    title : (mainName) => ( <> 
      <span className={mainName}> SOBRE MI </span>{' '}
    </> ),
    
    description: (mainName) => ( <>
            <p>
            Soy Desarrollador de Videojuegos, estableciendo mi carrera<br />
            en la industria para crear y diseñar todo tipo de sistemas de juego.
            </p>

            <p>
            Estudie Ingeniería en Computacion en la UNAM. He trabajado como<br />
            programador por +6 años y estado en la industrai por +4. Participe<br />
            en el desarrollo de juegos y aplicaciones multimedia para proyectos<br />
             educativos, de marketing y entrenenimiento lanzados en movil y web.
            </p>

            <p>
            Continuo aprendiendo sobre diseño de juegos, engines y programación,<br />
            tambien me interesan los shader y saber de technical art.<br />
            Gamer y fan del anime, me gusta crear experiencias como con las que crecí.
            </p>
    </>)
  }
}

 