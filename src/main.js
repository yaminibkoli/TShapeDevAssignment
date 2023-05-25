// import { createApp } from 'vue'
 import App from './App.vue'
 import "bootstrap/dist/css/bootstrap.css"
 import "bootstrap/dist/js/bootstrap.js"
// createApp(App).mount('#app')
import {createApp} from 'vue';
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
// or import 'vue3-blocks-tree/src/styles/blocks-tree.less';

let defaultoptions = {treeName:'blocks-tree'}

createApp(App)
    .use(VueBlocksTree,defaultoptions).mount('#app')
    // or .component('blocks-tree',VueBlocksTree)

// ...