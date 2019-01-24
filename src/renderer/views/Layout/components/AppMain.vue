<template>
  <el-main class="app-main" :style="{ height: fullHeight - 51 + 'px'}">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view ref = "view"></router-view>
    </transition>
    <!-- <back-top></back-top> -->
  </el-main>
</template>

<script>
// import BackTop from '@/components/BackTop'
import { mapGetters } from 'vuex'

export default {
  name: 'AppMain',
  components: {
    // BackTop
  },
  computed: {
    ...mapGetters([
      'fullHeight'
    ])
  },
  data () {
    return {
    }
  },
  created () {
    const that = this
    that.$store.dispatch('ResizeHeight', document.body.clientHeight)
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        // console.log(window.innerHeight)
        that.$store.dispatch('ResizeHeight', document.body.clientHeight)
      })()
    }
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .app-main{
    
    // background-color: rgb(238, 230, 230);
    //overflow: hidden;
    //position: flex;
    
  }
  .view-body{
    overflow-y: auto;
  }
</style>

