<template>
  <div class="dashboard-container">
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <div class="dashboard-text">预留</div>
    <!-- <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div> -->
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { ipcRenderer } from 'electron'

ipcRenderer.on('message', (event, arg) => {
  console.log(arg)
})

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
