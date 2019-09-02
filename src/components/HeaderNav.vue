<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li class="header-nav__item">
        <a
          href="#"
          class="header-nav__links header-nav__links-active"
          title="link to Home page"
        >Home</a>
      </li>
      <li class="header-nav__item">
        <a href="#" class="header-nav__links" title="link to About page">Products</a>
      </li>
      <li class="header-nav__item">
        <a href="#" class="header-nav__links" title="link to Portfolio page">Portfolio</a>
      </li>
      <li class="header-nav__item">
        <a href="#" class="header-nav__links" title="link to Blog page">Blog</a>
      </li>
      <li class="header-nav__item">
        <a href="#" class="header-nav__links" title="link to Contact page">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav"
};
</script>

<style lang="scss" scoped>
.header-nav {
  display: inline-block;
  vertical-align: middle;
  padding-top: 0.25rem;
}

.header-nav__list {
  padding-left: 0;
  position: relative;

  &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -40px;
      transform: translateY(-50%);
      display: inline-block;
      width: 1.5rem;
      height: 1px;
      background: #000000;
  }
}

.header-nav__item {
  margin-right: 2.5rem;
  list-style-type: none;
  display: inline-block;

  &:last-child {
    margin-right: 0;
    /* vertical-align: bottom; */
  }
}

.header-nav__links {
  font: $font-size-s $main-font;
  line-height: 1.714;
  text-decoration: none;
  color: $main-color;

  &:hover {
    color: $hover-color;
  }
}

.header-nav__links-active {
  font-weight: bold;
  color: $active-color;
}
</style>