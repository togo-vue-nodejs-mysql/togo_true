<template>
  <div id="nbItem">
    <City></City>
  </div>
</template>

<script>
import City from "./City.vue"
export default {
  name:"NbItem",
  components:{
    City
  }
}
</script>

<style>
#nbItem{
  width: 100%;
  height: 33.33%;
  background-color: rgb(229, 155, 155);
}

</style>