<template>
  <div>
    <Slider />
    <Products class="products" />
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Products from "./Products.vue";

export default {
  name: "Home",
  components: {
    Slider,
    Products
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 2rem;
}
</style>