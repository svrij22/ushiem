<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Lato', sans-serif;
  min-height: 100%;
  position: relative;
  padding-bottom: 450px;
}

@media screen and (max-width: 893px) {
  #app {
    padding-bottom: 700px;
  }
}

html, body {
  height: 100%;
  margin: 0;
}
</style>
