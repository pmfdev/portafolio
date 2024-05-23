<template>

<main class="main cv_container onest-unique" @scroll="handleScroll">
  <nav class="nav" :class="{background_nav: !isBackground_nav, background_nav_opacity: isBackground_nav}" >
  <!-- <nav class="nav"> -->
  <div class="nav__container">
      <div class="nav__container__links">
        <a @click="scrollToSection('inicio')">Inicio</a>
        <a @click="scrollToSection('experiencia')">Experiencia</a>
        <a @click="scrollToSection('proyectos')">Proyectos</a>
        <router-link v-if="!isMobile()" class="nav__container__links__link" to="/cv">CV Interactivo (Beta)</router-link>
      </div>
    </div>
  </nav>
    <section id="inicio">
      <div>
        <div class="section1 onest-unique">
             <img class="" src="../assets/images/cv/programador.png" alt="Pablo Morcillo Fulgencio">
              <a href="https://www.linkedin.com/in/pablo-morcillo-fulgencio-074993105" target="_blank" rel="noopener">
                <div class=""> 
                  <span class="">
                    <span class=""></span>
                    <div class=""> Actualmente trabajando</div>
                  </span> 
                </div> 
              </a> 
          </div>
          <h1 class="onest-unique">
            Hola, soy Pablo
          </h1>
          <p class="text1">          
             Con +8 años de experiencia, soy <strong>desarrollador fullstack especializado en el desarrollo frontend</strong>. Resido en Barcelona, España 🇪🇸, donde trabajo en la creación de aplicaciones web distintivas y de alto rendimiento.

          </p>
          <nav>
            <a href="mailto:pablogeminis1978@gmail.com" target="_blank" rel="noopener">
              <font-awesome-icon icon="fa-solid fa-link"/>
              Contactame
            </a>
            <a href="https://www.linkedin.com/in/pablo-morcillo-fulgencio-074993105" target="_blank" rel="noopener">
              <font-awesome-icon icon="fa-solid fa-link"/>
              Linkedin
            </a>        
          </nav>
      </div>
    </section>
    <section id="experiencia">
      <div class="section2">
        <h2 class="onest-unique">
          <svg class="size-8" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          Experiencia laboral
        </h2>
        <ol>
          <li>
            <span class="point">•</span>
            <div class="sub-section">
              <div class="section-text-1">
                <div>
                    <h3 class="">Desarrollador fullstack</h3>
                    <h4 class="">Nextret</h4>
                    <time class="">2017 - Actualmente</time>
                </div>
              </div>
              <div class="section-text-2">      
                Como responsable del desarrollo de aplicaciones front en NextRet. Utilizo mi especialización en desarrollo frontend para garantizar una experiencia de usuario excepcional y colaboro con los equipos de backend para garantizar la funcionalidad completa de nuestras aplicaciones.
                <br> Mi rol también implica el desarrollo del backend, análisis para aplicar soluciones, mantenimiento y migración de aplicaciones.
                <a href="https://nextret.net/" role="link" target="_blank"> 
                Nextret 
                  <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> 
                   <path d="M9 6l6 6l-6 6"></path>
                  </svg>  
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="sub-section">
              <div class="section-text-1">
                <div>
                    <span class="point">•</span>
                    <h3 class="">Desarrollador frontend</h3>
                    <h4 class="">Accenture</h4>
                    <time class="">2016 - 2017</time>
                </div>
              </div>
              <div class="section-text-2">
                Fui responsable de desarrollar funcionalidades en una plataforma con Sharepoint, para la gestión de contenido para Endesa.               <a href="https://www.accenture.com/es-es" role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> 
                Accenture 
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path>
                  </svg>  
                </a>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section id="proyectos">
      <h2 class="onest-unique">
        <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 8l-4 4l4 4"></path>
          <path d="M17 8l4 4l-4 4"></path>
          <path d="M14 4l-4 16"></path>
        </svg>                 
        Proyectos
      </h2>
      <div >
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Proyecto con angular y java" class="image-experience" src="../assets/images/cv/candidate_cv.png"> 
              </div>            
            </div>
            <div>
              <h3>Candidates - Fundación "La Caixa"</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  Esta plataforma web facilita a los usuarios solicitar becas a la Fundación La Caixa para continuar con investigaciones y proyectos. Simplifica el proceso de solicitud y gestión, brindando una experiencia fluida y eficiente para los solicitantes en busca de apoyo financiero.                </p>
              </div>
              <footer>
                <a class="preview" href="https://candidate-fellowships.lacaixafoundation.org/login" target="_blank" rel="noopener">
                  <font-awesome-icon icon="fa-solid fa-link"/>
                  Preview
                </a>
              </footer>
            </div>
        </article>
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Desarrollador frontend" class="image-experience" src="../assets/images/cv/referee.png"> 
              </div>            
            </div>
            <div>
              <h3>Referee - Fundación "La Caixa"</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  La aplicación permite a los usuarios redactar y enviar cartas de recomendación a los solicitantes de becas. Facilita el proceso de apoyo a candidatos.                </p>
              </div>
              <footer>
                <a class="preview" href="https://referee-fellowships.lacaixafoundation.org/login" target="_blank" rel="noopener">
                  <font-awesome-icon icon="fa-solid fa-link"/>
                  Preview
                </a>
              </footer>
            </div>
        </article>
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Desarrollador paginas webs" class="image-experience" src="../assets/images/cv/finder.png"> 
              </div>            
            </div>
            <div>
              <h3>Experts - Fundación "La Caixa"</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  Una aplicación diseñada para preseleccionadores, les permite evaluar las capacidades de los solicitantes de becas, facilitando la toma de decisiones sobre la asignación de fondos. Ofrece una plataforma intuitiva y eficaz para revisar y calificar candidaturas, optimizando el proceso de selección y garantizando una asignación equitativa de becas.                
                </p>
              </div>
              <footer>
                <a class="preview" href="https://experts-fellowships.lacaixafoundation.org/login" target="_blank" rel="noopener">
                  <font-awesome-icon icon="fa-solid fa-link"/>
                  Preview
                </a>
              </footer>
            </div>
        </article>
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Buscador universidades" class="image-experience" src="../assets/images/cv/expert_cv.png"> 
              </div>            
            </div>
            <div>
              <h3>Finder - Fundación "La Caixa"</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  Buscador que brinda a los beneficiarios de becas la capacidad de buscar y seleccionar universidades o centros educativos para llevar a cabo sus proyectos. Simplifica el proceso de encontrar instituciones adecuadas para el desarrollo académico y profesional.                </p>
              </div>
              <footer>
                <a class="preview" href="https://finder-fellowships.lacaixafoundation.org/finder" target="_blank" rel="noopener">
                  <font-awesome-icon icon="fa-solid fa-link"/>
                  Preview
                </a>
              </footer>
            </div>
        </article>
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Angular Java" class="image-experience" src="../assets/images/cv/admin.png"> 
              </div>            
            </div>
            <div>
              <h3>Administración - Fundación "La Caixa"</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  Una aplicación de administración que permite gestionar programas y aplicaciones para la solicitud de becas.                </p>
              </div>
              <footer>
              
              </footer>
            </div>
        </article>
        <article class="section-3">
            <div>
              <div class="section-3__image"> 
                <img alt="Otros proyectos realizados" class="image-experience" src="../assets/images/cv/popurri.png"> 
              </div>            
            </div>
            <div>
              <h3>Otros proyectos</h3>
              <div>
                <div>
                  <span class="item-tec orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                    <span>Angular</span> 
                  </span>
                  <span class="item-tec yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                      <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                      <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                      <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                    </svg>                    
                    <span>Java</span> 
                  </span>
                  <span class="item-tec green">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>            
                    <span>Spring</span> 
                  </span>
              </div>
              </div>
              <div class="section-text-3">
                <p>
                  Durante mi tiempo como profesional en Nextret, he desempeñado un papel integral en el desarrollo de proyectos tanto en el frontend como en el backend. He llevado a cabo análisis, mantenimiento y migraciones de empresas destacadas como Noucor, Reig Jofre y el Ayuntamiento del Prat entre otras.                </p>
              </div>
              <footer>
              
              </footer>
            </div>
        </article>
      </div>
    </section>
    <section>
        <div>
          <h2 class="onest-unique">
            Tecnologías más utilizadas
          </h2>
        </div>
        <div class="section-5">
          <div class="frontend">
            <h3 class="onest-unique title__frontend">Frontend</h3>
            <div class="items_frontend">
              <div class="items_frontend__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1052 1052">
                  <path fill="#f0db4f" d="M0 0h1052v1052H0z"/>
                  <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/>
                </svg>
                <span>JavaScript</span>
              </div>            
              <div class="items_frontend__item">
                <svg viewBox="0 0 256 256" width="50" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/>
                </svg>
                <span>TypeScript</span>
              </div>            
              <div class="items_frontend__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 452 520">
                  <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
                  <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
                  <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
                  <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
                </svg>
                <span>CSS</span>
              </div>            
              <div class="items_frontend__item">
                <svg viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                  <path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"/>
                </svg>
                <span>Sass</span>
              </div>                
              <div class="items_frontend__item">
                <svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" preserveAspectRatio="xMidYMid" viewBox="12.100000000000001 8.4 262.79999999999995 272.2"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="53.496" x2="177.932" y1="247.701" y2="115.323"><stop offset="0" stop-color="#e01d84"/><stop offset=".401" stop-color="#df1d85"/><stop offset=".77" stop-color="#932c87"/><stop offset="1" stop-color="#5d2f88"/></linearGradient><radialGradient id="b" cx="190.456" cy="80.2" gradientTransform="matrix(1 .00239 -.002 .8362 .16 12.685)" gradientUnits="userSpaceOnUse" r="121.582"><stop offset="0" stop-color="#e01d84"/><stop offset=".139" stop-color="#de1e85"/><stop offset=".285" stop-color="#d62085"/><stop offset=".434" stop-color="#c92386"/><stop offset=".586" stop-color="#b72786"/><stop offset=".739" stop-color="#9d2b87"/><stop offset=".891" stop-color="#7c2e88"/><stop offset="1" stop-color="#5d2f88"/></radialGradient><linearGradient id="c" x1="83.212" x2="137.371" y1="62.336" y2="62.336" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e01d84"/><stop offset=".238" stop-color="#da1e85"/><stop offset=".658" stop-color="#c72085"/><stop offset=".999" stop-color="#b52284"/></linearGradient><path d="M29.6 175.3c-5.2-16.2-6.7-33.3-3.7-50.9 1.3-7.3 3.3-14.3 5.5-21.4 0 0 13.8-45.3 60.5-66 0 0 16.1-8.5 40.3-9.1 0 0-3.3-3.2-5.4-4.6-11.4-7.6-28.4-10.1-38.7.6-3.1 3.2-5.7 6.7-8.6 9.9-3.3 3.6-7.3 6.6-11.9 8.3-4 1.5-8 1.2-12.1 1.9-4.2.7-8.5 2.2-11.9 4.9-3.7 3-5.2 7-5.6 11.6-.4 3.6-.3 7.3-.5 10.9C37 82 33.6 85 26 90.9c-3.2 2.4-5.9 5.6-7.9 9-6 10.6 3.6 21.6 4.1 32.3.1 2.2-.1 4.4-.9 6.5-.8 2.3-2.4 3.8-3.7 5.7-1.8 2.5-3 5.5-2.5 8.6s2.1 6 3.6 8.7c2.9 4.8 6.5 9.1 10.3 13.2.2 0 .4.2.6.4" fill="#e32286"/><path d="M220.4 213.7c23-10 32.8-27.3 32.8-27.3 21.5-29.3 14.2-60.2 14.2-60.2-13.7 29.8-26.2 38-26.2 38 33.7-51.3.2-82.3.2-82.3 13.7 29.2-4.5 64.8-4.5 64.8-15.3 32.2-37 43.7-37 43.7 24.2 4.5 42-11.8 42-11.8-34.7 37.5-72.3 35.7-72.3 35.7 15.8 17.7 39.5 16.2 39.5 16.2-31 7.3-60.1-3-84-22.9-4.5-3.7-8.8-7.7-12.8-12 0 0-3.6-3.8-4.3-4.8l-.1-.1c-.5 18.5 18.8 35.7 18.8 35.7-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 47.5-38.5 47.5-38.5c29.5 14.3 54.5 18.8 54.5 18.8 52.7 8.8 49.7-17 49.7-17 .5-22.2-33-45.8-33-45.8C145.9 8.4 91.9 37 91.9 37c-46.7 20.7-60.5 66-60.5 66-2.2 7.1-4.2 14.1-5.5 21.4-5.1 29.7 2.6 57.8 19.3 82.8 26 38.8 68.2 52.2 68.2 52.2 62.5 21.2 105.2-10 105.2-10 39.3-27 47.2-58.2 47.2-58.2-31.7 24.8-45.4 22.5-45.4 22.5zM171.6 67.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z" fill="url(#a)"/><path d="M238.5 98.4c.5-22.2-33-45.8-33-45.8C145.8 8.4 91.8 37 91.8 37c-46.7 20.7-60.5 66-60.5 66-2.7 7.7-5.1 19.5-5.1 19.5-2.9 14.8-1.6 28.5-1.6 28.5 1.2 13.1 4.1 21.9 4.1 21.9 3 9.4 4.4 12.3 4.4 12.3-.1-.3-.6-2.5-.6-2.5s-4.2-20.2-.3-39.6c0 0 3.4-20.2 17.2-35.8 0 0 22.4-31.9 64.1-19.4 0 0 9 3.2 12.1 4.8 3.1 1.5 8.5 3.8 8.5 3.8 29.5 14.3 54.5 18.8 54.5 18.8 52.9 8.9 49.9-16.9 49.9-16.9zm-66.9-19.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z" fill="url(#b)"/><path d="M137.4 58.2l-34.1-10.6c-.2 0-1.2-.5-3 0 0 0-20.1 5.1-16.6 16.1 0 0 2.1 6.9 7.8 13.6l37.5-1.8z" fill="url(#c)"/></svg>
                <span>RxJS</span>
              </div>            
              <div class="items_frontend__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>                
                <span>Angular</span>
              </div>            
              <div class="items_frontend__item">
                <svg viewBox="0 0 256 228" width="50" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/></svg>                
                <span>React</span>
              </div>            
              <div class="items_frontend__item">
                <svg viewBox="0 0 256 221" width="50" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>               
                <span>VUE</span>
              </div>            
            </div>
          </div>
          <div class="backend">
            <h3 class="onest-unique title__backend">Backend</h3>
            <div class="items_backend">
              <div class="items_backend__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
                  <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
                  <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
                  <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
                  <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
                  <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
                </svg>
                <span>Java</span>
              </div>            
              <div class="items_backend__item">
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z" fill="#68bd45"/></svg>
                <span>Spring</span>
              </div>            
              <div class="items_backend__item">
                <svg viewBox="0 0 256 240" xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid"><defs><linearGradient id="a" x1="50%" x2="50%" y1="1089.396%" y2="-159.5%"><stop offset="30.33%" stop-color="#473788"/><stop offset="87.2%" stop-color="#2C2255"/></linearGradient><linearGradient id="b" x1="49.999%" x2="49.999%" y1="896.537%" y2="-352.359%"><stop offset="30.33%" stop-color="#473788"/><stop offset="87.2%" stop-color="#2C2255"/></linearGradient><linearGradient id="c" x1="49.999%" x2="49.999%" y1="215.17%" y2="-166.715%"><stop offset="30.33%" stop-color="#473788"/><stop offset="86.31%" stop-color="#2C2255"/></linearGradient></defs><path fill="#2C2255" d="M70.382 153.049H31.26c5.18 17.768 14.792 33.693 28.864 47.768 22.434 22.436 49.41 33.64 80.956 33.64 6.306 0 12.416-.47 18.35-1.365 23.761-3.587 44.565-14.33 62.39-32.275 14.162-14.07 23.842-30 29.062-47.768H70.382ZM48.81 99.915H28.373a119.493 119.493 0 0 0-1.488 13.775h228.399c-.233-4.7-.743-9.285-1.497-13.775M26.885 126.482c.231 4.703.738 9.287 1.488 13.775h225.418a118.86 118.86 0 0 0 1.5-13.775M250.887 87.12c-5.215-17.817-14.897-33.817-29.067-47.99-17.778-17.777-38.522-28.443-62.207-32.031a123.318 123.318 0 0 0-18.532-1.386c-31.546 0-58.524 11.143-80.956 33.418C46.048 53.303 36.43 69.303 31.254 87.12"/><path fill="#F7941E" d="M20.093 120.09C20.093 59.753 65.407 9.621 124.357.803c-1.462-.053-2.932-.112-4.409-.112C53.796.692.164 54.15.164 120.09c0 65.943 53.63 119.397 119.784 119.397 1.482 0 2.951-.056 4.419-.11-58.96-8.817-104.274-58.95-104.274-119.287Z"/><path fill="url(#a)" d="M155.728 14.226A77.824 77.824 0 0 0 153.364.451H2.642A77.753 77.753 0 0 0 .276 14.226h155.452Z" transform="translate(63.083 99.461)"/><path fill="url(#b)" d="M155.728 27.02H.278a77.611 77.611 0 0 0 2.364 13.776h150.724a77.821 77.821 0 0 0 2.362-13.776Z" transform="translate(63.083 99.461)"/><path fill="url(#c)" d="M78.003 98.636c31.3 0 58.282-18.441 70.706-45.048H7.297c12.425 26.607 39.405 45.048 70.706 45.048Z" transform="translate(63.083 99.461)"/><g fill="#FFF"><path d="M51.84 126.482h203.29c.108-2.035.168-4.084.168-6.147 0-2.232-.081-4.444-.208-6.647H26.885c-.126 2.2-.208 4.415-.208 6.647 0 2.063.06 4.112.168 6.147H51.84ZM69.924 87.12H31.252c-1.271 4.166-2.091 8.44-2.879 12.795H253.065a113.52 113.52 0 0 0-3.075-12.795M238.373 140.255H28.371c.766 4.352 1.638 8.623 2.888 12.794H250.738a113.252 113.252 0 0 0 3.023-12.794h-15.388Z"/></g></svg>
                <span>Eclipse</span>
              </div>            
              <div class="items_backend__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                  <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
                </svg>
                <span :style="{'width': '50px'}"> Git </span>
              </div>            
              <div class="items_backend__item">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#cfd8dc" d="M23.084 11.277c-1.633-2.449-1.986-5.722-2.063-7.067-4.148.897-8.269 2.506-8.031 3.691.03.149.218.328.53.502l-.488.873c-.596-.334-.931-.719-1.022-1.179-.269-1.341 1.25-2.554 4.642-3.709a42.152 42.152 0 0 1 4.751-1.279l.597-.12V3.6c0 .042.026 4.288 1.916 7.123l-.832.554zM24.751 43H24.5c-8.192 0-17.309-2.573-18.386-6.879-.657-2.63 1.492-5.536 6.214-8.401l.52.854c-4.249 2.579-6.296 5.172-5.763 7.305.935 3.738 9.575 6.068 17.153 6.12.901-1.347 5.742-9.26 2.979-19.873l.967-.252c3.149 12.092-3.218 20.837-3.282 20.924l-.151.202z"/><path fill="#cfd8dc" d="M9.931 39.306c-.539 0-.806-.059-.85-.07a.498.498 0 0 1-.233-.84c.072-.072 7.197-7.208 8.159-12.978l.986.164c-.827 4.964-5.715 10.623-7.656 12.707 1.939-.111 6.835-1.019 16.234-6.28-7.335-.804-8.495-6.676-8.507-6.739l.983-.181c.047.246 1.226 6.011 9.244 6.011h.008a.5.5 0 0 1 .251.933c-11.235 6.509-16.683 7.272-18.619 7.273z"/><path fill="#cfd8dc" d="M14.524 41.7a.499.499 0 0 1-.291-.907c.034-.025 1.813-1.338 3.706-4.228a19.896 19.896 0 0 1-2.196-1.137c-.888-.533-1.559-1.105-2.06-1.691-2.57.678-4.942.946-7.025.769l.084-.996c1.876.159 4.009-.063 6.321-.64-1.573-2.688-.129-5.356-.109-5.392l.874.487c-.067.122-1.265 2.37.249 4.633 2.201-.632 4.549-1.567 6.979-2.782a32.189 32.189 0 0 0 1.225-6.276.501.501 0 0 1 .706-.406c.032.015 3.264 1.491 5.604 2.454a.5.5 0 0 1 .091.876 62.494 62.494 0 0 1-6.778 4.042 27.19 27.19 0 0 1-2.459 5.591c3.702 1.383 6.915 1.404 6.956 1.404a.5.5 0 0 1 .243.938c-4.54 2.522-11.767 3.232-12.072 3.261h-.048zm4.385-4.733c-1.04 1.614-2.062 2.773-2.826 3.53 1.998-.294 5.501-.938 8.408-2.139a23.733 23.733 0 0 1-5.582-1.391zm-4.142-3.536c.393.392.883.775 1.49 1.14.736.442 1.483.817 2.22 1.135a26.116 26.116 0 0 0 2.142-4.568c-2.021.962-3.983 1.73-5.852 2.293zm8.435-9.102a33.95 33.95 0 0 1-.913 4.85 62.45 62.45 0 0 0 5.062-3.026 207.1 207.1 0 0 1-4.149-1.824zM17.924 10.6a.504.504 0 0 1-.325-.12c-1.61-1.378-3.505-4.182-3.585-4.301a.5.5 0 0 1 .654-.718c.011.003.938.385 7.217 1.431a.499.499 0 0 1 .29.828c-1.758 1.953-3.979 2.813-4.073 2.848a.527.527 0 0 1-.178.032zm-2.277-3.854c.631.849 1.54 1.996 2.372 2.769a11.186 11.186 0 0 0 2.744-1.798c-2.583-.441-4.159-.755-5.116-.971z"/><path fill="#b71c1c" d="M21.843 24.4a.5.5 0 0 1-.497-.552c.292-2.749-3.926-3.852-3.969-3.862a.5.5 0 0 1-.23-.838c.207-.207 5.139-5.098 11.327-7.784a.5.5 0 0 1 .689.559c-1.186 5.744-6.71 12.044-6.944 12.309a.51.51 0 0 1-.376.168zm-3.388-5.115c1.184.445 3.258 1.475 3.783 3.356 1.449-1.808 4.542-5.973 5.697-9.934-4.387 2.11-8.081 5.292-9.48 6.578z"/><path fill="#b71c1c" d="m13.079 28.36-.475-.88c1.883-1.015 4.04-2.883 5.807-5.054-1.504 1.03-2.365 1.735-2.392 1.758l-.639-.77c.039-.032 1.764-1.447 4.631-3.22.787-1.266 1.392-2.568 1.703-3.816.053-.212.099-.417.136-.615-1.925-.687-3.701-1.094-4.921-1.269a.5.5 0 0 1-.297-.835c.085-.092 2.116-2.268 4.654-3.463a.5.5 0 0 1 .581.114c.067.073 1.44 1.615 1.091 4.805 1.155.45 2.345.997 3.491 1.648 2.759-1.24 5.892-2.356 9.229-3.03a.51.51 0 0 1 .481.168c.117.14.149.333.083.503-1.3 3.332-4.786 6.891-4.934 7.041a.503.503 0 0 1-.748-.04c-1.12-1.408-2.584-2.574-4.163-3.523a55.136 55.136 0 0 0-5.684 3.049c-2.02 3.153-5.069 6.048-7.634 7.429zm14.413-10.964c1.29.832 2.491 1.81 3.484 2.948.828-.898 2.815-3.168 3.942-5.422-2.65.61-5.158 1.493-7.426 2.474zm-4.693-1.274c-.033.163-.071.33-.113.5-.21.839-.544 1.701-.972 2.561a56.183 56.183 0 0 1 3.618-1.898 25.476 25.476 0 0 0-2.533-1.163zm-4.751-2.45c1.111.218 2.48.574 3.941 1.086.152-1.843-.346-2.972-.647-3.472-1.376.718-2.581 1.728-3.294 2.386z"/><path fill="#b71c1c" d="M18.05 18.5c0 4.38-3.65 7.86-6.28 10.4-.44.43-1.93.5-1.93.5.37-.38.79-.78 1.24-1.21 2.5-2.42 5.97-5.73 5.97-9.69 0-4.69-1.89-6.54-3.38-8.02-.66-.67-1.22-1.31-1.56-2.09l.31-.13c.34.15.73.32 1.03.45.24.35.56.69.93 1.06 1.53 1.53 3.67 3.63 3.67 8.73z"/><path fill="#b71c1c" d="M42.935 19.794s-.605.086-.775.106c-8.76.97-17.8 3.49-22.97 5.56-1.87.75-3.81 1.66-5.58 2.68-.01.01-.02.01-.04.02-1.04.6-3.57 1.84-5.62 2.93 3-3.19 8.62-5.65 10.86-6.55 5.07-2.03 13.78-4.48 22.35-5.53-1.01-1.18-3.48-3.68-8.34-5.54-2.84-1.1-7.16-1.72-10.97-2.27-6.06-.87-9.51-1.45-9.84-3.1-.07-.33-.02-.66.13-.98.33.54.8.92 1.11 1.14.15.1.26.16.3.18l.01.01c1.42.75 5.25 1.3 8.44 1.76 3.86.56 8.23 1.19 11.18 2.32 6.87 2.65 9.24 6.44 9.34 6.6.09.15.415.664.415.664z"/></svg>
                <span> SQL Server </span>
              </div>            
            </div>
          </div>
        </div>
    </section>

    <section>
      <div >
        <h2 class="onest-unique">
          <svg class="size-8" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
          Sobre mí
        </h2>
      </div>
      <div class="section-4">
        <div class="onest-unique">
          <p>
            Soy un apasionado de la programación y el desarrollo web.
Me encanta compartir conocimientos con colegas, promoviendo el crecimiento colectivo. Creo en un ambiente colaborativo y amigable entre compañeros para maximizar el potencial de todos. 
          </p>
          <p>
            Durante mi trayectoria profesional, he tenido el privilegio de participar en proyectos emblemático: como el desarrollo de múltiples aplicaciones frontend para <strong>Fundación La Caixa</strong>. Esta experiencia me brindó la oportunidad de demostrar mis habilidades técnicas y mi capacidad para trabajar en un entorno exigente y de alto impacto          </p>
          <p v-if="!isMobile()">
            ¿Te gustaría descubrir más sobre mi experiencia de una manera más interactiva? ¡Entonces estás invitado a echar un vistazo a mi CV interactivo! Actualmente se encuentra en fase Beta, pero será una experiencia entretenida. 😊 <router-link  class="nav__container__links__link" to="/cv">¡Haz clic aquí para explorarlo! </router-link>
         </p>
        </div>
        <div>
          <div class="container-image">
            <img class="image-about" src="../assets/images/cv/programador.png" alt="Pablo Morcillo">
          </div>
        </div>
      </div>
    </section>
    <section class="contact" id="app">
      <h2>Contacto</h2>
      <div>
        <textarea v-model="mensaje" name="message" id="message" placeholder="Escribe tu mensaje"></textarea>
        <span v-if="mensaje === '' && focus" class="error">Por favor, escribe tu mensaje.</span><br>
        <span v-if="email === '' && focus" class="error">Por favor, escribe tu email de contacto.</span>
      </div>
      <input type="text" v-model="email" placeholder="Escribe tu email">
      
      <button @click="enviarMensaje">Enviar mensaje</button>
    </section>
    <section>
      <div class="footer">
        <div>
          @2024 pablogeminis1978@gmail.com
        </div>
      </div>
    </section>
    

    
      
     
</main>


</template>

<script>
import { trackVisit, sendMessage } from '@/api-rest/apiService'; 

export default {

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.isMobile();
    this.trackVisitHome();
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {

   trackVisitHome() {
      try {
         trackVisit('home'); 
      } catch (error) {
        console.error('Error al rastrear visita:', error);
      }
    },

    enviarMensaje() {
      if (this.mensaje.trim() === '' || this.email.trim() === '') {
        this.focus = true;
        return;
      }

      try {
        sendMessage(this.mensaje, this.email);
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
      }

    },

    isMobile() {
     const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
     console.log("regex", regex.test(navigator.userAgent));
     return regex.test(navigator.userAgent);
   },
    addStar() {
      this.$router.push("/cv");
    },

    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    handleScroll() {

      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 10) {
        this.isBackground_nav = true;
      } else {
        this.isBackground_nav = false;
      }
    },


  },


  data() {
    return {
      isBackground_nav: false,
      mensaje: '',
      email: '',
      focus: false,
    };
  }
};
</script>

<style scoped>
  @import '../styles/cv.css';
  @import '../styles/nav.css';
  @import url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');

  .background_nav{
    background-color: #1f2937;
  }

  .background_nav_opacity{
    background-color: #1f293737;
    transition: 1s;
  }

  .contact {
    width: 100%;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
  }

  
  .contact textarea{
    padding: 10px;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    outline: none;
    margin: 0; /* Elimina cualquier margen predeterminado */
    font-family: inherit; /* Utiliza la fuente del elemento padre */
    font-size: inherit; /* Utiliza el tamaño de fuente del elemento padre */
    line-height: inherit; /* Utiliza la altura de línea del elemento padre */
    overflow: auto; /* Agrega barras de desplazamiento cuando sea necesario */
    background: transparent;
    color: #fff;
  }

  .contact button{
    margin-top: 10px;
    color: #f3f4f6;
    border: 1px solid #4b5563; /* Color inicial del borde (verde) */
    padding: 10px 15px;
    border-radius: 10px; /* Bordes más redondos */
    background-color: #1f2937;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
  }

  .contact input{
    border: none; /* Quita el borde */
    outline: none; /* Quita el resaltado al enfocar */
    background-color: transparent; /* Fondo transparente */
    border-radius: 5px;
    border: 1px solid #767676; /* Color inicial del borde (verde) */
    padding: 10px; /* Añade espacio alrededor del texto */
    width: 365px;
    margin-right: 10px;
    font-size: inherit; /* Utiliza el tamaño de fuente del elemento padre */
    color: #fff;
  }
  
</style>
