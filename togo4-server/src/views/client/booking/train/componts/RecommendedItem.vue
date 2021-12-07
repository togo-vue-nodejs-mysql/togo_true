<template>
  <div id="reItem">
    <div class="item">
      <img :src="item.bgUrl" alt="">
       <span class="mark">🔥推荐</span>
       <span class="describe_topic">
         {{item.name}}
       </span>
       <span class="describe_contents">
         {{item.describe}}
       </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"reItem",
  // data(){
  //   return{
  //     bgUrl:require('../../../../../assets/img/czm/icon/beijing1.jpg')
  //   }
  // },
  props:['item']
}
</script>

<style>
.item{
  width: 250px;
  height: 150px;
  margin: 20px;
  position: relative;
}
.item>img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.mark{
  position: absolute; 
    top: 0;
    left: 0;
    z-index:2;
    background-color: rgb(250, 58, 10);
    border-radius: 5px 0;
}
.describe_topic{
    position: absolute; 
    bottom: 22px;
    left: 5px;
    z-index:2;
    color: white;
    font-weight: bold;
    font-size: 18px;
}
.describe_contents{
    position: absolute; 
    bottom: 5px;
    left: 5px;
    z-index:2;
    color: white;
    font-size: 12px;
}
</style>