
<template>

<div class="pyro" v-if="showFireWorks">
  <div class="before"></div>
  <div class="after"></div>
</div>

<audio ref="audioPlayer" :src="introStarWars" @loadedmetadata="onLoadedMetadata">
      Tu navegador no soporta el elemento de audio.
</audio>

<div class="star-wars-intro"  v-if="viewIntro">
<button class="space-button-close-intro" @click="hideViewIntro">Saltar intro</button> 

<!-- Texto introductorio en azul -->
<p class="intro-text">
  Hace mucho tiempo, en una galaxia muy, muy lejana...
</p>

<!-- Imagen o texto del logo -->
<h2 class="main-logo">
  PMF DEV
</h2>

<!-- Todo el contenido desplazable va aquí -->
<div class="main-content">

  <div class="title-content">
    <p class="content-header">Bienvenido al Juego de Mi Exploración Profesional</p>

    <br>

    <p class="content-body">
      En esta aventura cósmica, te embarcarás en un viaje a través de las galaxias, explorando planetas para descubrir información sobre mi perfil profesional.
    </p>
    
    <p class="content-body">
      Las instrucciones del juego son simples: haz clic en cualquiera de los planetas en la parte superior de la pantalla para embarcarte en una misión.
    </p>

    <p class="content-body">
      Utiliza las flechas del teclado (←↑→↓) y la barra espaciadora para manejar la nave espacial. <br />Una vez que alcances los objetivos para descubrir un planeta, tendrás la oportunidad de explorarlo y descubrir información sobre mi vida profesional, hobbies y más planetas que estarán disponibles para alcanzar sus objetivos.
    </p>    <!-- Botón o enlace o lo que prefieras -->
    <button @click="startGame('tierra')" class="space-button-intro">¡Comienza la exploracion!</button>
  </div>
</div>
</div>

  <div class="container_nav">
    <div class="column">
      <div class="container-elements">
        <!-- <div class="column max-width">
          <button class="space-button btn-green" @click="restartGame">Comenzar exploración</button>
        </div> -->
        <div class="container-planets column">
          <font-awesome-icon icon="fa-solid fa-check" class="check-earth" v-if="earthDiscovered"/>
          <img class="nav_earth" :class="{ 'planet-disabled': !isEarthDisabled }" @click="startGame('tierra')" src="../assets/images/tierra.png" alt="earth" />
          <font-awesome-icon icon="fa-solid fa-check" class="check-mars" v-if="marsDiscovered"/>
          <img class="nav_mars" :class="{ 'planet-disabled': !isMarsDisabled }" @click="startGame('marte')" src="../assets/images/marte.png" alt="mars" />
          <!-- <img class="img__nav" src="../assets/images/tierra.png" alt="earth" /> -->
        </div>
      </div>
    </div>
    
    <div class="column container_life">
      <div class="life" :style="{ width: porcentajeLife + '%'}"></div>
    </div>
    <div class="column">
      <div class="container-count">
        <a class="back-to-home" href="/home">
      <font-awesome-icon icon="fa-solid fa-arrow-left"/>
      Home 
    </a>
        <span class="count">
          {{ numberShips }}
        </span>
        <img class="count_ship_image" src="../assets/images/count_ship.png" alt="logo" />
      </div>
    </div>
  </div>
  <div class="container">
    <div v-if="showGameOver" class="container__gameOver">
      <div class="title__gameOver">Game Over</div> <br />
      <div class="restartButton">
        <button class="space-button btn-red" @click="startGame(Object.keys(this.game.scene.keys)[0])">Reiniciar partida</button>
      </div>
      
    </div>
    

    <!-- <div ref="gameContainer"> -->
    <div v-for="(star, index) in stars" :key="index" :style="{ top: star.top, left: star.left }" :class="star.classStart">
    </div>
  </div>
</template>

<script>
// Importa Phaser
/* eslint-disable */

import { getStartData } from '@/phaser/spaceGame/DataMainGame';
import { obtenerDeLocalStorage, obtenerDeLocalStorageByProperty, eliminarDeLocalStorage } from '../services/localstorage';
import { startScene } from '../phaser/scenes/startScene';
import { trackVisit } from '@/api-rest/apiService'; 

export default {

  mounted() {
      
      this.discoveredPlanets();
      this.showViewIntro(); 
      this.game = startScene(this, 'default');
      this.calculateRemoveStorage();
      this.trackVisitHome();
  },

  unmounted() {
    this.game.destroy(true);
  },

  methods: {

    trackVisitHome() {
      try {
         trackVisit('space'); 
      } catch (error) {
        console.error('Error al rastrear visita:', error);
      }
    },

    startGame(scene) {
      this.$refs.audioPlayer.pause();
      this.game.destroy(true);
      this.game = startScene(this, scene);
      this.showGameOver = false;
      this.showButtonRestart = false;
      this.porcentajeLife = 100;
      this.hideViewIntro();
    },

  
    resetScrollPosition() {
      setTimeout(() => {
        window.scrollTo(0, 0); 
      }, 1000);
    },

    fullScreen() {
      const canvas = document.querySelector('canvas');
      canvas.requestFullscreen();
    },

    gameOver() {
      this.showGameOver = true;
      this.showButtonRestart = true;
    },

    travel(destination) {
      this.$router.push(destination);
      this.game.destroy(true);
    },

    hideViewIntro() {
      this.viewIntro = false;
      this.game.sound.stopAll();
    },

    showViewIntro() {
      this.viewIntro = true;
    },

    setNumeroColisiones(numero, numeroMaximoColisiones) {

        const colisiones = Math.min(numero, numeroMaximoColisiones);
        const porcentaje = ((numeroMaximoColisiones - colisiones) / numeroMaximoColisiones) * 100;
        const porcentajeFinal = colisiones === 0 ? 100 : porcentaje;
        this.porcentajeLife = porcentajeFinal;

    },

    setCountShips( numberShips) {
      this.numberShips = numberShips;
    },

    initStartGame() {
      this.hideViewIntro();
    },

    discoveredPlanets() {
      const planets = obtenerDeLocalStorage('spaceGame');
      console.log(planets?.tierra);

          this.isEarthDisabled = planets?.tierra ;
          this.earthDiscovered = planets?.tierra;
          this.isMarsDisabled = planets?.marte;
          this.marsDiscovered = planets?.marte;
    },

    calculateRemoveStorage() {
      let time = obtenerDeLocalStorageByProperty('spaceGame', 'time');
      if (time !== null) {
        let diferenciaTiempo = Date.now() - time;
        let tiempo24Horas = 24 * 60 * 60 * 1000;
      if (diferenciaTiempo > tiempo24Horas) { 
        eliminarDeLocalStorage('spaceGame');
      } 
} 
    },
  
  },

  data() {
    return {
      introStarWars: require('@/assets/audio/big-space.mp3'), // Importa el archivo de audio
      showGameOver: false,
      showButtonRestart: false,
      viewIntro: false,
      isEarthDisabled: true,
      isMarsDisabled: true,
      porcentajeLife: 100, 
      numberShips: 0,
      showFireWorks: false,
      earthDiscovered: false,
      marsDiscovered: false,
      stars: getStartData()
    };
  },
};

</script>

<style scoped>
@import '../phaser/spaceGame/stylesMainGame.css';
@import '../styles/button.css';
@import '../styles/starwarsintro.css';
@import '../styles/util.css';
@import '../styles/fireworks.css';

.check-earth {
  position: absolute;
    top: 5px;
    left: 60px;
    color: #00b300;
    font-size: 2rem;
    z-index: 1;
}

.check-mars {
  position: absolute;
    top: 5px;
    left: 140px;
    color: #00b300;
    font-size: 2rem;
    z-index: 1;
}

.back-to-home {
  font-size: 1.5rem;
  color: #EBD71C;
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
}

.back-to-home:hover {
  color: #00b300;
}

</style>

