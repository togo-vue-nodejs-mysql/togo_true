<template>
  <div id="navigetionBar">
    <NbItem v-for="index in 3" :key="index"></NbItem>
  </div>
</template>

<script>
import NbItem from "./NBitem.vue"
export default {
  name:"NavigetionBar",
  components:{
    NbItem
  }
}
</script>

<style>
#navigetionBar{
  width: 20%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.555);
}
</style>