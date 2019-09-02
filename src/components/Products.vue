<template>
  <!-- PRODUCTS -->
  <article class="products">
    <div class="container">
      <ProductTabs class="products__tabs" />
      <ProductsList class="products__list" />
    </div>
  </article>
</template>

<script>
import ProductTabs from "./ProductTabs.vue";
import ProductsList from "./ProductsList.vue";

export default {
  name: "Products",
  components: {
    ProductTabs,
    ProductsList
  }
};
</script>

<style lang="scss" scoped>
.products {
  padding-bottom: 4.5rem;
  margin-bottom: 1.25rem;
  box-shadow: inset 0 -0.3125rem 0.625rem -0.3125rem #d6d6d6;
}

.products__tabs {
  margin-bottom: 2rem;
}
</style>