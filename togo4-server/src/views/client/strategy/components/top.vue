<template>
  <div id="top">
    <div class="cloud_layer">
      <div class="text">
        <span style="font-size: 50px; ">旅游不在乎终点</span>
        <br>
        <br>
        <span>而是在意途中的人和事还有那些美好的记忆和景色。</span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name:'Top',
}
</script>

<style>
#top{
  width: 100%;
  height: 70%;
  background:url("../../../../assets/img/czm/icon/strategy_bg2.jpg") no-repeat center/cover;
  position: relative;
}
.cloud_layer{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(196, 196, 196, 0.5), transparent);
  position: absolute;
}
.text{
  position: relative;
  left: 55px;
  top: 20%;
  width: 30%;
  height: 40%;
  /* text-align: center; */
  
}
.text>span{
  letter-spacing:5px;
  font-size: 30px;
  margin: 0 auto;
  font-weight: bold;
  color: rgb(223, 217, 217);
  /* background-color: #fff; */
  text-align: center;
  
}

</style>