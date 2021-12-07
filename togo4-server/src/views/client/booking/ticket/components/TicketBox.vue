<template>
  <div id="ticketBox">
    <NavigetionBar></NavigetionBar>
    <div class="center">
      <ShufflingFigure></ShufflingFigure>
      <div class="clues">
        <div class="clues_item" v-for="(item,index) in cluesData" :key="index">
          <Security>{{item}}</Security>
        </div>
      </div>
    </div>
    <div class="right"> 
      <div class="advertising" v-for="(item, index) in sdvertisings" :key="index">
        <Advertising v-bind:item="item"></Advertising>
      </div>
    </div>
  </div>
</template>

<script>
import NavigetionBar from "./NavigetionBar.vue"
import ShufflingFigure from "./ShufflingFigure.vue"
import Advertising from "./Advertising.vue"
import Security from "../../train/componts/Security.vue"
export default {
  name:"ticketBox",
  data(){
    return {
      cluesData:['放心出行保障有我','📝入园保障','📝出票保障','📝如实描述'],
      sdvertisings:[{
        imgurl:require('../../../../../assets/img/czm/icon/guanggao4.jpeg'),
        imgalt:"长隆水上乐园"
      },{
        imgurl:require('../../../../../assets/img/czm/icon/guanggao5.jpeg'),
        imgalt:"长隆度假区"
      }]
    }
  },
  components:{
    NavigetionBar,
    ShufflingFigure,
    Advertising,
    Security
  }
}
</script>

<style>
#ticketBox{
  width: 100%;
  height: 55%;
  display: flex;
  background-color: rgb(175, 164, 164);
}
.center{
  width: 55%;
  height: 100%;

}
.clues{
  width: 100%;
  height: 23%;
  /* background-color: rgb(138, 27, 27); */
  display: flex;
}
.clues_item{
  width: 100%;
  height: 100%;
  /*使用flex实现div在水平和垂直方向上居中 */
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
}
.right{
  width: 25%;
  height: 100%;
}
.advertising{
  width: 100%;
  height: 50%;
}
</style>