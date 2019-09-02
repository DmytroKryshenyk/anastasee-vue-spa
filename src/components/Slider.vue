<template>
  <slick class="slider" ref="slick" :options="slickOptions">
    <div class="slider__item slider__item_1">
      <div class="slider__content container">
        <h3 class="slider__title">Lian Creative Agency</h3>
        <p class="slider__subtitle">Minimal Freelance Portfolio</p>
      </div>
    </div>
    <div class="slider__item slider__item_2">
      <div class="slider__content container">
        <h3 class="slider__title">Design & Branding</h3>
        <p class="slider__subtitle">We Deliver Quality Results</p>
      </div>
    </div>
    <div class="slider__item slider__item_3">
      <div class="slider__content container">
        <h3 class="slider__title">Design & Branding</h3>
        <p class="slider__subtitle">We Deliver Quality Results</p>
      </div>
    </div>
  </slick>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "Slider",
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
      }
    };
  }
};
</script>

<style lang="scss">
.slider {
  overflow: hidden;
  position: relative;

  > .slick-arrow {
    position: absolute;
    top: 50%;
    width: 2.625rem;
    height: 2.625rem;
    border: 1px solid #ffffff;
    border-radius: 50%;
    font-size: 0;
    z-index: 2;
    background: transparent;
    background-size: 1.5rem;
    background-repeat: no-repeat;

    &:hover {
      background-color: $hover-color;
      border: 1px solid $hover-color;
    }

    &:focus {
      outline: none;
    }
  }

  > .slick-prev {
    left: 5%;
    background-image: url(~@/assets/arrow-prev.svg);
    background-position: 40%;
  }

  > .slick-next {
    right: 5%;
    background-image: url(~@/assets/arrow-next.svg);
    background-position: 60%;
  }
}

.slider__item {
  box-shadow: inset 0 0.3125rem 0.625rem -0.3125rem rgba(51, 51, 51, 0.75);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &_1 {
    background-image: url(~@/assets/banner-slider-img-1.jpg);
  }

  &_2 {
    background-image: url(~@/assets/banner-slider-img-2.jpg);
  }

  &_3 {
    background-image: url(~@/assets/banner-slider-img-3.jpg);
  }
}

.slider__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 4rem);
}

.slider__title {
  text-align: center;
  text-transform: uppercase;
  background-color: #000000;
  font: 300 $font-size-xxl $main-font;
  line-height: 1.1666;
  color: #ffffff;
  padding: 0 2.5rem;
  letter-spacing: 0.5rem;
  margin-bottom: 2rem;
}

.slider__subtitle {
  flex-basis: 100%;
  text-align: center;
  text-transform: uppercase;
  font: 18px $main-font;
  letter-spacing: 0.5rem;
}

.slider .slick-dots {
  position: absolute;
  bottom: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0;

  & li {
    display: inline-block;
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }

  & button {
    font-size: 0;
    height: 1rem;
    width: 1rem;
    padding: 0;
    background: #ffffff;
    outline: 0;
    border: 1px solid #ffffff;
    border-radius: 50%;
  }

  & .slick-active > button {
    border: 2px solid $active-color;
  }
}

.slick-track {
  display: flex !important;
}

.slick-slide {
  height: inherit !important;
}
</style>