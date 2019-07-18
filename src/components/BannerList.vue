<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) of banner" :key="index">
        <img class="banner-item" :src="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- {{ banner }} -->
    <!-- 轮播图 -->
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  props: {
    banner: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .banner-item {
    width: 100%
  }
</style>
