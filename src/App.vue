<template>
  <div>
    <div class="header-wrapper">
      <div class="container">
        <Header />
      </div>
    </div>
    <main>
      <Home class="home" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer
  }
};
</script>

<style lang="scss">
.header-wrapper {
  margin: auto;
}
</style>
