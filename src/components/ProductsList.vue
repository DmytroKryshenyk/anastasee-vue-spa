<template>
  <div class="products__list-wrapper">
    <ul class="products__list">
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-1.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-2.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-3.jpg" alt="product image" class="products__image" />
        </a>
      </li>
    </ul>

    <ul class="products__list">
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-4.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-5.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-6.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-7.jpg" alt="product image" class="products__image" />
        </a>
      </li>
    </ul>

    <ul class="products__list">
      <li class="products__item">
        <a href="#" class="product_item_link d-block position-relative">
          <img src="~@/assets/product-8.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-9.jpg" alt="product image" class="products__image" />
        </a>
      </li>
      <li class="products__item">
        <a href="#" class="products__link">
          <img src="~@/assets/product-10.jpg" alt="product image" class="products__image" />
        </a>
      </li>
    </ul>

    <button class="products__more-button">Load More</button>
  </div>
</template>
<script>
export default {
  name: "ProductsList"
};
</script>
<style lang="scss" scoped>
.products__list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.products__list {
  flex-basis: 31.5%;
  padding-left: 0;
  margin-bottom: 0;
}

.products__item {
  display: block;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.products__link {
  position: relative;
  display: block;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5) url("../~@/assets/add-icon.png") no-repeat
      center;
  }
}

.products__image {
  display: block;
  max-width: 100%;
}

.products__more-button {
  display: block;
  margin: 2.25rem auto 0 auto;
  width: 8rem;
  height: 2rem;
  background: $main-lighter-color;
  outline: none;
  border: none;
  border-radius: 2px;
  font: bold 13px $main-font;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  &:focus {
    outline: none;
    background: $main-color;
  }

  &:hover {
    background: $main-color;
  }
}
</style>