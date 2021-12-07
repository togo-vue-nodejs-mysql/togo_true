<template>
  <div id="advertising">
    <img class="imgwin" :src="item.imgurl" :alt="item.imgalt">
  </div>
</template>

<script>
export default {
  name:"advertising",
  props:['item']
}
</script>

<style>
#advertising{
  width: 100%;
  height: 100%;
}
.imgwin{
  width: 100%;
  height: 100%;
}
</style>