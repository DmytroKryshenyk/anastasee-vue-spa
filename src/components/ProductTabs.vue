<template>
  <!-- products tabs -->
  <ul class="products-tabs__list">
    <li class="products-tabs__item products-tabs__item--active">All</li>
    <li class="products-tabs__item">Logo</li>
    <li class="products-tabs__item">Mobile App</li>
    <li class="products-tabs__item">Wordpress</li>
    <li class="products-tabs__item">Web Design</li>
    <li class="products-tabs__item">UI/IX</li>
    <li class="products-tabs__item">Branding</li>
  </ul>
</template>
<script>
export default {
  name: "ProductTabs"
};
</script>

<style lang="scss" scoped>
.products-tabs__list {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid $main-lighter-color;
  border-bottom: 1px solid $main-lighter-color;
}

.products-tabs__item {
  display: inline-block;
  margin-right: 2.25rem;
  color: $main-color;
  font: bold $font-size-s $main-font;
  line-height: 1.714;
  cursor: pointer;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    height: 2rem;
    right: -1rem;
    top: 50%;
    border-right: 1px solid $main-lighter-color;
    transform: translateY(-50%) rotate(15deg);
  }

  &--active {
    color: $active-color;
  }
}
</style>