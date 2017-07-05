<template>
  <div id="app">
    <header>
      <header-nav></header-nav>
    </header>
    <article>
      <router-view></router-view>
    </article>
    <footer>
      <footer-bar></footer-bar>
    </footer>
    <beacon></beacon>
  </div>
</template>

<script>
import HeaderNav from './components/header/HeaderNav.vue';
import FooterBar from './components/footer/FooterBar.vue';
import Beacon from './components/beacon/Beacon.vue';

export default {
  name: 'app',
  data: () => ({}),
  components: {
    HeaderNav,
    FooterBar,
    Beacon
  }
};
</script>

<style lang="scss">
html {
  height: 100vh;
}

body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
}

header {
  background-color: rgb(95, 95, 95);
  height: 80px;
  line-height: 80px;
}

.container {
  width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
}

footer {
  background: radial-gradient(ellipse at 69% 50%, #2d2d39 15%, #1b1920 70%);
  width: 100%;
  height: auto;
}
</style>
