<template>
  <div>
    <!-- <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">我要上天</button> -->
    <el-button @click="backTop()" v-show="backTopShow" icon="el-icon-arrow-up" circle class = "back-top"></el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        backTopShow: false
      }
    },
    components: {},
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop () {
        const back = setInterval(() => {
          if (document.body.scrollTop || document.documentElement.scrollTop) {
            document.body.scrollTop -= 100
            document.documentElement.scrollTop -= 100
          } else {
            clearInterval(back)
          }
        })
      },
      handleScroll () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow = true
        } else {
          this.backTopShow = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 20px
  }
</style>