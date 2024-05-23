
<template>
    <a class="back-to-space" href="/cv">
      <font-awesome-icon icon="fa-solid fa-arrow-left"/>
      Volver 
    </a>
    <main :class="['earth', 'visible-element',{ 'nextret': isVisibleNextret }]">
      <article>
        <header>
          <h1> Experiencia  </h1>
          <img src="../assets/images/nextret.png" alt="nextret" />
        </header>
        <div class="barra">
          <span class="top top1"></span>
       </div>
       <div class="container-experience">
          <h2>Actualmente - 2017</h2>
          <div>
    
          <h4>Fundación La Caixa</h4>
          <p>
              <strong>01/2023 - 01/2024:</strong> Desarrollo de aplicaciones para la Fundación La Caixa, implementando mejoras. Tecnologías utilizadas: Angular, RXJS, Moment.js, PrimeNg, Sass, Java y SQL.
          </p>
          <p>
              <strong>06/2022 - 01/2023:</strong> Desarrollo de aplicaciones para la Fundación La Caixa, implementación de mejoras.
          </p>
          <p>
              <strong>09/2021 - 12/2021:</strong> Desarrollo de aplicación Referee. Implementación de sistema de envío de cartas de recomendadores. Tecnologías utilizadas: Angular, RXJS, PrimeNg, Sass, Node.
          </p>
          <p>
              <strong>01/2021 - 08/2021:</strong> Desarrollo de aplicación admin.lacaixafellowships.org. Aplicación para gestionar diferentes webs de La Caixa. Tecnologías utilizadas: Angular, RXJS, Moment.js, PrimeNg, Sass, Node.
          </p>
          <p>
              <strong>11/2019 - 09/2020:</strong> Desarrollo de Aplicación candidate.lacaixafellowships.org para La Caixa. Aplicación para que un usuario pueda solicitar una beca. Tecnologías utilizadas: Angular, RXJS, Moment.js, CSS, Node.
          </p>
          <p>
              <strong>03/2019 - 10/2019:</strong> Desarrollo de aplicación expert.lacaixafellowships.org. Creación de sistema para evaluar usuarios que han solicitado una beca. Tecnologías utilizadas: Angular, RXJS, Moment.js, CSS, Node.
          </p>
          <p>
              <strong>10/2018 - 02/2019:</strong> Desarrollo de aplicación finder.lacaixafellowships.org. Buscador de centros universitarios. Tecnologías utilizadas: Angular, RXJS, Moment.js, CSS, Node.
          </p>
          <h4>Reig Jofre</h4>
          <p>
              <strong>01/2022 - 06/2022:</strong> Desarrollo nuevas funcionalidades para la aplicación de Reig Jofre. Tecnologías utilizadas: Angular, RXJS, Moment.js, PrimeNg, Sass, Java y SQL.
          </p>
          <h4>Ayuntamiento del Prat</h4>
          <p>
              <strong>01/2022 - 06/2022:</strong> Desarrollo de aplicación para el Ayuntamiento del Prat. Implementación de sistema de gestión de Agentes Culturales. Tecnologías utilizadas: Angular, RXJS, Moment.js, PrimeNg, Sass, Node.
          </p>
          
          <h4>Noucor</h4>

          <p>
              <strong>09/2020 - 12/2020:</strong> Desarrollo de aplicación para la farmacéutica Noucor. Gestión de productos farmacéuticos. Tecnologías utilizadas: Angular, RXJS, Moment.js, CSS, Node.
          </p>
          
          <h4>Otros Proyectos</h4>
          
          <p>
              <strong>09/2018 - 2017:</strong> Maquetación y restyling  de aplicaciónes desarrolladas en sharepoint. Tecnologías utilizadas: HTML, CSS, Javascript.
          </p>
      </div>

       </div>
      </article>
    </main>
    <main :class="['earth','visible-element',{ 'accenture': isVisibleAccenture }]">
      <article>
        <header>
          <h1> Experiencia  </h1>
          <img src="../assets/images/Accenture-logo.png" width="120px" alt="accenture" />
        </header>
        <div class="barra-accenture">
          <span class="top top1"></span>
       </div>
       <div class="container-experience">
          <h2>06/2016 - 10/2016</h2>
          <h4>Endesa</h4>
          
          <p>
              <strong>06/2016 - 10/2016:</strong> Como desarrollador SharePoint en Endesa, me encargué de implementar soluciones innovadoras utilizando tecnologías como HTML, CSS y JavaScript. Mis responsabilidades incluían el desarrollo de nuevas funcionalidades, el mantenimiento continuo de las aplicaciones existentes y la resolución de errores. Enfocándome en la creación de experiencias de usuario intuitivas y eficientes, aseguré que cada componente estuviera diseñado y funcionara de manera óptima. Además, identifiqué y resolví errores de manera rápida y eficaz para garantizar el rendimiento y la estabilidad del sistema.
          </p>
       </div>
      </article>
    </main>
</template>
<style scoped>
* {
  font-family: 'Roboto';
}

.visible-element {
  opacity: 0; /* El elemento está inicialmente transparente */
  visibility: hidden; /* El elemento está inicialmente oculto */
  transition: opacity 2s ease, visibility 2s ease; 
}

.visible-element.nextret {
  opacity: 1; /* Hace que el elemento sea completamente visible */
  visibility: visible; /* Hace que el elemento sea visible */
} 

.visible-element.accenture {
  opacity: 1; /* Hace que el elemento sea completamente visible */
  visibility: visible; /* Hace que el elemento sea visible */
}

.back-to-space {
  position: absolute;
  top: 20px;
  right: 10px;
  font-size: 1.5rem;
  color: #123080;
  text-decoration: none;
  font-weight: bold
}

.back-to-space:hover {
  color: #fef08a;
}

.container-experience{
  position: absolute;
  top: 80px;
  margin-left: 60px;
  margin-right: 60px;
}

.container-experience h4 {
  position: relative;
}

.container-experience h4::before {
  position: absolute;
  left: -38px;
  top: -23px;
  content: "•";
  color: #123080;
  font-weight: bold;

  font-size: 3em; /* Ajusta el tamaño del punto */
}

.barra{
  margin-top: 20px;
  margin-left: 30px;
  border-left: 5px solid rgb(236, 20, 60); /* puedes ajustar el grosor y el color según tus necesidades */
  height: 1300px; 
  border-radius: 0 5px 5px 0; /* aquí estamos estableciendo que solo el extremo izquierdo de la barra sea redondeado */
  position: relative;
  margin-bottom: 20px;
}

.barra-accenture{
  margin-top: 20px;
  margin-left: 30px;
  border-left: 5px solid rgb(236, 20, 60); /* puedes ajustar el grosor y el color según tus necesidades */
  height: 400px; 
  border-radius: 0 5px 5px 0; /* aquí estamos estableciendo que solo el extremo izquierdo de la barra sea redondeado */
  position: relative;
  margin-bottom: 20px;
}

.top{
  position: absolute;
  display: inline-block;width: 20px;
  height: 15px;
  width: 15px;
  background-color: #123080;
  border-radius: 50%;
  left: -10px;
}

.top1{
 width: 25px;
 height: 25px;
 top: 0px;
 left: -15px;
}


main {
  border: 1px solid rgb(201, 185, 185);
  position: fixed;
  top: 50px;
  left: 50px;
  width: 60%;
  bottom: 50px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.67);
  overflow: auto; /* Añade scroll cuando el contenido excede las dimensiones del contenedor */
  
}

article{
  position: relative;
  padding: 20px;
  box-sizing: 1px solid rgb(116, 112, 112);
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

header h1 {
  font-size: 2rem;
  color: #090808;
  margin: 0;
  border-bottom: 2px solid #090808;
}

main::-webkit-scrollbar {
  cursor: pointer;
  width: 7px;
}

/* Track */
 main::-webkit-scrollbar-track main {
  cursor: pointer;

  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
main::-webkit-scrollbar-thumb {
  cursor: pointer;

  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
main::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background: #123080; 
}

.earth h4{
  font-weight: bold;
  color: #123080;
  margin: 0;
}

.earth p {
  font-size: 1.2rem;
  color: #090808;
  font-weight: bold;
} 


</style>
  
<script>
/* eslint-disable */

import { startScene } from '../phaser/scenes/startScene';
import { trackVisit } from '@/api-rest/apiService'; 

export default {

  
  mounted() {
    this.game = startScene(this, 'experience');
    this.trackVisitHome();
  },

  unmounted() {
    this.game.destroy(true);
  },

  updated() {
    console.log('Se ha actualizado el componente');
  },

  data() {
    return {
      game: this.game,
      avionX: 0,
      naveY: 0,
      cloudY: 0,
      cityY: 0,
      montainY: 0,
      isVisibleNextret: false,
      isVisibleAccenture: false,
      activeAguila: false,
    };
  },

  methods: {
    trackVisitHome() {
      try {
         trackVisit('earth'); 
      } catch (error) {
        console.error('Error al rastrear visita:', error);
      }
    },

    // Método para cambiar el contenido de la etiqueta HTML
    positionObjects({avion, nave, cloud, city, montain, aguila}) {

      if (cloud.y > 1400 ) {
        this.isVisibleNextret = true;
      } else{
        this.isVisibleNextret = false;
      }

      if (cloud.y > 2500) {
        this.isVisibleAccenture = true;
        
      } else {
        this.isVisibleAccenture = false;
      }

      if (cloud.y > 1800) {
        this.isVisibleNextret = false;
      } 

      if (cloud.y > 2100) {
        this.activeAguila = true;
      } 

      if (cloud.y > 2900) {
        this.isVisibleAccenture = false;
      }
      //activa el vuelo del aguila
      if(this.activeAguila){
        aguila.x += 5;
      }
    },

    

  },
}


</script>
  

  