<template>
  <Swiper class="review_swiper" ref="mySwiper" :options="swiperOptions">
    <SwiperSlide v-for="slide in this.slides" :key="slide.id">
      <div class="review_quote_contain">
        <q class="quote_body">{{ slide.body }}</q>
        <br />
        <h2 class="quote_credit">{{ slide.credit }}</h2>
        <h4 class="quote_credit_credential">
          {{ slide.credential }}
        </h4>
      </div>
    </SwiperSlide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MySwiper",
  props: {
    slides: Array,
  },
  directives: {
    swiper: directive,
  },

  components: { Swiper, SwiperSlide },
  data() {
    return {
      test: [
        {
          id: 0,
          body: "lorem",
          credit: "ipsum",
          credential: "joe bloggs",
        },
      ],
      swiperOptions: {
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    var swiper_wrapper = document.getElementsByClassName("swiper-wrapper");
    swiper_wrapper[0].style.display = "flex";
    swiper_wrapper[0].style.alignItems = "center";
  },
};
</script>

<style scoped></style>
