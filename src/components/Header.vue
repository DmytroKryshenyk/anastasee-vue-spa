<template>
  <header class="header">
    <!-- <a href="#" class="header__logo logo" title="link to root page">
      <img src="~@/assets/logo.svg" alt="logo" class="logo__image" />
    </a>-->
    <Logo />
    <HeaderNav />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import HeaderNav from "./HeaderNav.vue";

export default {
  name: "Header",
  components: {
    Logo,
    HeaderNav
  }
};
</script>

<style lang="scss" scoped>

header {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

</style>