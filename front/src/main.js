import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de tener la ruta correcta hacia tu archivo router.js
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCheck, faLocationDot, faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
 




const app = createApp(App);

library.add(faUserSecret, faCheck, faLocationDot, faLink, faArrowLeft)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // Asegúrate de usar el router aquí

app.mount('#app');
