<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Main from './views/main.vue';
import Login from './views/Login.vue';
export default {
  components: {
    Header,
    RouterView,
    Main,
    Login,
  }
}
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="content">
    
    <Main/>
  </div>




</template>

<style scoped lang="scss">
$mainColor: #FFF3D9;
$secondColor: #C85250;
$textColor: #E9EAE0;

.header {
  width: 100%;
  height: 15dvh;
  
}
</style>
