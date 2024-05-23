<template>
   <a class="back-to-space" href="/cv">
      <font-awesome-icon icon="fa-solid fa-arrow-left"/>
      Volver 
    </a>
  <div ref="mars">
  <div class="map-container">
    <font-awesome-icon icon="fa-solid fa-location-dot" class="faPosition position1" />
    <font-awesome-icon icon="fa-solid fa-location-dot" class="faPosition position2" />
    <font-awesome-icon icon="fa-solid fa-location-dot" class="faPosition position3" />
    <font-awesome-icon icon="fa-solid fa-location-dot" class="faPosition position4" />
    <font-awesome-icon icon="fa-solid fa-location-dot" class="faPosition position5" />
    <div class="map"></div>
    <div class="camera-marker" :style="{ left: mapCenterX + 'px', top: mapCenterY + 'px' }"></div>
    <!-- <button :style="{'border': '1px solid red'}"  @click="toggleFullScreen">Pantalla Completa</button> -->
  </div>
  <div class="data-camara-position">
    <div @click="moveCamera('ArrowUp')" class="cursor up"></div>
    <div @click="moveCamera('ArrowDown')" class="cursor down"></div>
    <div @click="moveCamera('ArrowLeft')" class="cursor left"></div>
    <div @click="moveCamera('ArrowRight')" class="cursor rigth"></div>
    <div @click="moveCamera('q')" class="cursor upy"></div>
    <div @click="moveCamera('a')" class="cursor dowy"></div>
    <img src="../assets/images/keys.png" width="300px">
    <img src="../assets/images/keysa.png" width="110px">
  </div>
  <div ref="container"></div>
</div>
</template>
<style scoped>

.cursor{
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1000;
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


.up{
  left: 114px;
  top: 15px;
}

.down{
  left: 114px;
  top: 123px;
}

.left{
  left: 12px;
  top: 123px;
}

.rigth{
  left: 215px;
  top: 123px;
}

.upy{
  left: 319px;
  top: 17px;
}

.dowy{
  left: 319px;
  top: 123px;
}
.faPosition {
  position: absolute;
  top: 10px;
  left: 10px;
  color: rgb(26, 28, 127);
  z-index: 1000;
  font-size: 25px;
}

.position1 {
  top: 75px;
  left: 100px;
}

.position2 {
  top: 25px;
  left: 150px;
}

.position3 {
  top: 150px;
  left: 150px;
}

.position4 {
  top: 170px;
  left: 25px;
}

.position5 {
  top: 200px;
  left: 200px;
}


.map-container {
  margin: 10px;
  position: fixed;
  width: 250px;
  height: 250px;

}

.map {
  width: 250px;
  height: 250px;
  background-image: url(../assets/images/mapaMarte.PNG);
  background-size: cover;
  filter: grayscale(50%);
  /* Convierte la imagen en escala de grises */

}

.camera-marker {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  position: absolute;
  z-index: 2000;

}

.data-camara-position {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  color: white;
}
</style>
<script>
/* eslint-disable */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import superficieMars2 from '../assets/images/superficieMars.jpg';
import candidateImg from '../assets/images/candidate.png';
import expertImg from '../assets/images/expert.png';
import finderImg from '../assets/images/finder.png';
import adminImg from '../assets/images/adminCV.png';
import rover from '../assets/rover.gltf';
import popurriCV from '../assets/images/popurriCV.png';
import running from '../assets/audio/running.mp3';
import { trackVisit } from '@/api-rest/apiService'; 


export default {
  data() {
    return {
      cameraPositionX: 0,
      cameraPositiony: 50,
      camaraPositionZ: 50,
      mapCenterX: 125, // Centro x del mapa CSS
      mapCenterY: 125,
      mapWidth: 250,
      mapHeight: 250,
      sound: null, // Agrega una propiedad para almacenar el objeto de audio
      lastMoveTime: 0, // Tiempo del último movimiento de la cámara
      soundTimeout: null //
    };
  },
  mounted() {

    this.trackVisitHome();
    // Crear una nueva escena Three.js
    const scene = new THREE.Scene();


    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera = camera;

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

  

    // Suelo de Marte
    const groundTexture = new THREE.TextureLoader().load(superficieMars2);
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; // Repetir la textura en ambas direcciones
    groundTexture.repeat.set(20, 20); // Repetir la textura 10 veces en ambas direcciones
    const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture }); // Material básico con la textura de Marte
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // Geometría del suelo (plano)
    const ground = new THREE.Mesh(groundGeometry, groundMaterial); // Crear el suelo como un Mesh
    ground.rotation.x = -Math.PI / 2; // Rotar el suelo para que sea horizontal
    scene.add(ground); // Agregar el suelo a la escena

    // Crear el coche (un cubo rojo para este ejemplo)
    const groundTextureMarc = new THREE.TextureLoader().load(superficieMars2);
    groundTextureMarc.wrapS = groundTextureMarc.wrapT = THREE.RepeatWrapping; // Repetir la textura en ambas direcciones
    groundTexture.repeat.set(20, 20); // Repetir la textura 10 veces en ambas direcciones

    const candidateTexture = new THREE.TextureLoader().load(candidateImg);
    const expertTexture = new THREE.TextureLoader().load(expertImg);
    const finderTexture = new THREE.TextureLoader().load(finderImg);
    const adminTexture = new THREE.TextureLoader().load(adminImg);
    const popurriTexture = new THREE.TextureLoader().load(popurriCV);

    const proyectGeometry = new THREE.BoxGeometry(50, 50, 5); // Geometría del coche (cubo)
    const proyectMaterial = new THREE.MeshBasicMaterial({ map: expertTexture }); // Material básico de color rojo
    const proyect = new THREE.Mesh(proyectGeometry, proyectMaterial); // Crear el coche como un Mesh
    proyect.position.set(-400, 25, 200); // Posición inicial del coche
    const proyectGeometryM = new THREE.BoxGeometry(60, 60, 5); // Geometría del coche (cubo)
    const proyectMaterialM = new THREE.MeshBasicMaterial({ map: groundTextureMarc }); // Material básico de color rojo
    const proyectM = new THREE.Mesh(proyectGeometryM, proyectMaterialM); // Crear el coche como un Mesh
    proyectM.position.set(-400, 25, 199); // Posición inicial del coche
    const proyect1Geometry = new THREE.BoxGeometry(50, 50, 5); // Geometría del coche (cubo)
    const proyect1Material = new THREE.MeshBasicMaterial({ map: candidateTexture }); // Material básico de color rojo
    const proyect1 = new THREE.Mesh(proyect1Geometry, proyect1Material); // Crear el coche como un Mesh
    proyect1.position.set(-50, 25, -200); // Posición inicial del coche
    const proyect1GeometryM1 = new THREE.BoxGeometry(60, 60, 5); // Geometría del coche (cubo)
    const proyect1MaterialM1 = new THREE.MeshBasicMaterial({ map: groundTextureMarc }); // Material básico de color rojo
    const proyectM1 = new THREE.Mesh(proyect1GeometryM1, proyect1MaterialM1); // Crear el coche como un Mesh
    proyectM1.position.set(-50, 25, -201); // Posición inicial del coche
    const proyect2Geometry = new THREE.BoxGeometry(50, 50, 5); // Geometría del coche (cubo)
    const proyect2Material = new THREE.MeshBasicMaterial({ map: finderTexture}); // Material básico de color rojo
    const proyect2 = new THREE.Mesh(proyect2Geometry, proyect2Material); // Crear el coche como un Mesh
    proyect2.position.set(140, 25, 180); // Posición inicial del coche
    const proyect2GeometryM = new THREE.BoxGeometry(60, 60, 5); // Geometría del coche (cubo)
    const proyect2MaterialM = new THREE.MeshBasicMaterial({ map: groundTextureMarc}); // Material básico de color rojo
    const proyectM2 = new THREE.Mesh(proyect2GeometryM, proyect2MaterialM); // Crear el coche como un Mesh
    proyectM2.position.set(140, 25, 179);
    
    const proyect3Geometry = new THREE.BoxGeometry(50, 50, 5); // Geometría del coche (cubo)
    const proyect3Material = new THREE.MeshBasicMaterial({ map: adminTexture }); // Material básico de color rojo
    const proyect3 = new THREE.Mesh(proyect3Geometry, proyect3Material); // Crear el coche como un Mesh
    proyect3.position.set(100, 25, -300); // Posición inicial del coche
     const proyect3GeometryM = new THREE.BoxGeometry(60, 60, 5); // Geometría del coche (cubo)
    const proyect3MaterialM = new THREE.MeshBasicMaterial({ map: groundTextureMarc }); // Material básico de color rojo
    const proyectM3 = new THREE.Mesh(proyect3GeometryM, proyect3MaterialM); // Crear el coche como un Mesh
    proyectM3.position.set(100, 25, -301); // Posición inicial del coche

    const proyect4Geometry = new THREE.BoxGeometry(180, 40, 5); // Geometría del coche (cubo)
    const proyect4Material = new THREE.MeshBasicMaterial({ map: popurriTexture }); // Material básico de color rojo
    const proyect4 = new THREE.Mesh(proyect4Geometry, proyect4Material); // Crear el coche como un Mesh
    proyect4.position.set(320, 25, 350); // Posición inicial del coche
    const proyect4GeometryM = new THREE.BoxGeometry(185, 45, 5); // Geometría del coche (cubo)
    const proyect4MaterialM = new THREE.MeshBasicMaterial({ map: groundTextureMarc }); // Material básico de color rojo
    const proyectM4 = new THREE.Mesh(proyect4GeometryM, proyect4MaterialM); // Crear el coche como un Mesh
    proyectM4.position.set(320, 25, 349); // Posición inicial del coche



    //modelo 3d
    const loader = new GLTFLoader();


    // Crear una luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental con un color blanco y una intensidad de 0.5
    scene.add(ambientLight); // Agregar la luz ambiental a la escena

    // Crear una luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Luz direccional con un color blanco y una intensidad de 0.5
    directionalLight.position.set(10, 10, 10); // Posición de la luz direccional
    scene.add(directionalLight); // Agregar la luz direccional a la escena

  

    // Cargar el modelo 3D
    loader.load(rover, (gltf) => {
      // Código para manejar el modelo cargado
      const modelo = gltf.scene;
      modelo.scale.set(50, 50, 50); // Escalar el modelo
      modelo.position.set(0, 0, -20); // Posicionar el modelo
      scene.add(modelo);
    },
      (xhr) => {
        // Código para manejar la carga del modelo
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
      },
      (error) => {
        // Código para manejar errores
        console.error('Error al cargar el modelo', error);
      },


);


   
    scene.add(proyect, proyect1, proyect2, proyect3, proyect4, proyectM, proyectM1, proyectM2,  proyectM3, proyectM4); // Agregar el coche a la escena




    // Posicionar la cámara
    camera.position.set(0, 20, 10); // Posición inicial de la cámara
    camera.lookAt(camera.position.x, camera.position.y, camera.position.z - 1);

    // Movimiento de la cámara
    document.addEventListener('keydown', (event) => {
      const speed = 5; // Velocidad de movimiento de la cámara
      const cameraUpAndDown = 2; // Velocidad de movimiento de la cámara hacia arriba y hacia abajo 
      switch (event.key) {
        case 'ArrowUp':
          camera.position.z -= speed;
          this.mapCenterY -= (speed / 4);
          break;
        case 'ArrowDown':
          camera.position.z += speed;
          this.mapCenterY += (speed / 4);
          break;
        case 'ArrowLeft':
          camera.position.x -= speed;
          this.mapCenterX -= (speed / 4);
          break;
        case 'ArrowRight':
          camera.position.x += speed;
          this.mapCenterX += (speed / 4);
          break;
        case 'q':
          if(camera.position.y < 45) camera.position.y += cameraUpAndDown;
          break;
          case 'a':
          if(camera.position.y > 5) camera.position.y -= cameraUpAndDown;
          break;
      }
      console.log('Posición X: ', event.key, camera.position.x);
      camera.lookAt(camera.position.x, camera.position.y, camera.position.z - 1);
      runningSound();

    });

    this.moveCamera = (event) => {
      const speed = 6; // Velocidad de movimiento de la cámara
      const cameraUpAndDown = 2; // Velocidad de movimiento de la cámara hacia arriba y hacia abajo 
      switch (event) {
        case 'ArrowUp':
          camera.position.z -= speed;
          this.mapCenterY -= (speed / 4);
          break;
        case 'ArrowDown':
          camera.position.z += speed;
          this.mapCenterY += (speed / 4);
          break;
        case 'ArrowLeft':
          camera.position.x -= speed;
          this.mapCenterX -= (speed / 4);
          break;
        case 'ArrowRight':
          camera.position.x += speed;
          this.mapCenterX += (speed / 4);
          break;
        case 'q':
          if(camera.position.y < 45) camera.position.y += cameraUpAndDown;
          break;
        case 'a':
          if(camera.position.y > 5) camera.position.y -= cameraUpAndDown;
          break;
      }
      console.log('Posición X: ', event.key, camera.position.x);
      camera.lookAt(camera.position.x, camera.position.y, camera.position.z - 1);
      this.lastMoveTime = Date.now();

// Reproduce el sonido
runningSound();

    }

  const runningSound = () =>{
    this.lastMoveTime = Date.now();

        if (this.sound) {
          this.sound.setVolume(0.5); // Ajusta el volumen según sea necesario

      this.sound.play();
    }

    // Detener el sonido después de 1 segundo sin movimiento
    if (this.soundTimeout) {
      clearTimeout(this.soundTimeout);
    }
    this.soundTimeout = setTimeout(() => {
      if (this.sound) {
        this.sound.stop();
      }
    }, 100);
  }

  const listener = new THREE.AudioListener();
  this.camera.add(listener);

  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(running, (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(false); // Configura si el audio se repite o no
    sound.setVolume(0.5); // Ajusta el volumen según sea necesario
    this.sound = sound; // Almacena el objeto de audio en la propiedad del componente
  });





    // Función para renderizar

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate(); // Iniciar la animación

    
  
  },

  methods: {

    trackVisitHome() {
      try {
         trackVisit('mars'); 
      } catch (error) {
        console.error('Error al rastrear visita:', error);
      }
    },

    toggleFullScreen() {
      const container = this.$refs.mars;
      if (document.fullscreenElement) {
        document.exitFullscreen();
        
      } else {
        container.requestFullscreen();
      }
    }
  }


};
</script>
