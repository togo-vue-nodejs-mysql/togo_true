<template>
  <div id="topBar">
    <img id="icon" :src="iconUrl" alt="">
    <img id="logo" :src="logoUrl" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      iconUrl:require('../../../../assets/img/czm/icon.png'),
      logoUrl:require('../../../../assets/img/czm/logo.png')
    }
  }
}
</script>

<style>
#topBar{
  width: 100%;
  height: 45px;
  /* background: rgb(105, 134, 158); */
}
#icon{
  margin-top: 5px;
  margin-left: 40px;
  width:40px;
  height:40px;
}
#logo{
margin-left: 10px;
}
</style>