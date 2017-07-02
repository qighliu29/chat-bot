<template>
  <div id="app">
    <header>
    </header>
    <article>
      <router-view></router-view>
    </article>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
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
  height: 80px;
}

.container {
  width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
}
</style>
