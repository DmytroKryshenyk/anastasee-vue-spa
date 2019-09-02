<template>
  <footer class="footer">
    <div class="footer_logo">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center py-5">
            <a href="#" class="footer_logo_link d-inline-block" title="link to root page">
              <img src="img/logo.svg" alt="logo" class="footer_logo_image d-block" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer_social">
      <div class="container">
        <div class="row">
          <div class="col-12 py-4">
            <ul class="social_list text-center mb-0">
              <li class="social_items d-inline-block">
                <a
                  href="https://www.facebook.com"
                  class="social_item_links_"
                  title="link to facebook"
                >
                  <img src="img/Facebook.svg" alt="facebook icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a
                  href="https://plus.google.com"
                  class="social_item_links_"
                  title="link to google plus"
                >
                  <img src="img/Google+.svg" alt="google plus icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a href="https://twitter.com" class="social_item_links_" title="link to twitter">
                  <img src="img/Twitter.svg" alt="twitter icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a
                  href="https://www.linkedin.com"
                  class="social_item_links_"
                  title="link to linkedin"
                >
                  <img src="img/Linkedin.svg" alt="linkedin icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a href="https://dribbble.com" class="social_item_links_" title="link to dribbble">
                  <img src="img/Dribbble.svg" alt="dribbble icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a
                  href="https://www.pinterest.com"
                  class="social_item_links_"
                  title="link to pinterest"
                >
                  <img src="img/Pinterest.svg" alt="pinterest icon" class="social_item_img d-block" />
                </a>
              </li>
              <li class="social_items d-inline-block">
                <a
                  href="https://www.instagram.com"
                  class="social_item_links_"
                  title="link to instagram"
                >
                  <img src="img/Instagram.svg" alt="instagram icon" class="social_item_img d-block" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer_copyright">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="footer_copyright_text text-uppercase text-center mb-0">
              © 2016
              <span class="footer_copyright_span">Mulitix Theme</span> by ThemeForces. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer_logo_image {
  height: 35px;
}

.social_items {
  margin-left: 57px;

  &:first-child {
    margin-left: 0;
  }
}

.footer_social {
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}

.social_items {
  vertical-align: middle;
}

.social_item_img {
  max-width: 100%;
  height: 30px;
  width: 30px;
}

.footer_copyright {
  padding-top: 34px;
  padding-bottom: 44px;
}

.footer_copyright_text {
  font: 13px $main-font;
  font-family: "Roboto";
  color: #9c9c9c;
}

.footer_copyright_span {
  color: #000000;
}
</style>