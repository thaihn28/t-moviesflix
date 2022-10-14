<template>
  <div>
    <a-card hoverable style="width: 300px">
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
        <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        // loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.swiper {
  height: 360px;

  .swiper-slide {
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image: url('https://v1.github.surmon.me/images/example/8.jpg')
    }

    &.slide-2 {
      background-image: url('https://v1.github.surmon.me/images/example/6.jpg')
    }

    &.slide-3 {
      background-image: url('https://v1.github.surmon.me/images/example/7.jpg')
    }

    &.slide-4 {
      background-image: url('https://v1.github.surmon.me/images/example/8.jpg')
    }

    &.slide-5 {
      background-image: url('https://v1.github.surmon.me/images/example/5.jpg')
    }
  }
}
</style>

