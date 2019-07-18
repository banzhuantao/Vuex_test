<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content">
      <BannerList :banner="getHomeBannerList"/>
      <ProList :prolist="getHomeProList"/>
    </div>
  </div>
</template>

<script>
import BannerList from '@/components/BannerList'
import ProList from '@/components/ProList'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  components: {
    BannerList,
    ProList
  },
  data () {
    return {
      baseUrl: 'https://www.daxunxun.com'
    }
  },
  computed: {
    ...mapGetters(['getHomeBannerList', 'getHomeProList'])
  },
  mounted () {
    this.getHomeBannerListData()
    this.getHomeProListData()
  },
  methods: {
    ...mapActions(['setHomeBannerList', 'setHomeProList']),
    getHomeBannerListData () {
      axios.get(this.baseUrl + '/banner').then(res => {
        let arr = []
        res.data.map(item => {
          arr.push(this.baseUrl + item)
        })
        this.setHomeBannerList({
          data: arr
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getHomeProListData () {
      axios.get(this.baseUrl + '/douban').then(res => {
        console.log(res.data)
        console.log(this.$store.state)
        this.setHomeProList({
          data: res.data
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
