<template>
  <div id="booking">
    <!-- <span>Hotels</span> -->
    <div class="head">
      <TopBar></TopBar>
      <NavigationBar></NavigationBar>
    </div>
      <v-main class="body">
        <router-view>
        </router-view>
      </v-main>
    
  </div>
</template>

<script>
import NavigationBar from "./componts/NavigationBar.vue"
import TopBar from "./componts/TopBar.vue"
// import Airplane from "./airplane/Airplane.vue"
export default {
  components:{
    NavigationBar,
    TopBar,
    // Airplane
  }

}
</script>

<style>
#booking{
  width: 100vw;
  height: 100vh;
  /* background-color: rgb(189, 180, 180); */
}
.body{
  width: 100%;
  height: 90%;
  /* background-color: rgba(219, 219, 219, 0.336); */
}
</style>