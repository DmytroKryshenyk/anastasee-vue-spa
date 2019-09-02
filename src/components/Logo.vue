<template>
  <a href="#" class="header__logo logo" title="link to root page">
    <img src="~@/assets/logo.svg" alt="logo" class="logo__image" />
  </a>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss" scoped>
.header__logo {
  display: inline-block;
  vertical-align: middle;
}

.logo__image {
  display: block;
  max-width: 100%;
  height: 2rem;
}
</style>