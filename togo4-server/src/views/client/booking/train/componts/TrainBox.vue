<template>
  <div id="train_box">
    <!-- <span>这是搜索+广告部分</span> -->
    <div class="left_search">
      <SearchBox></SearchBox>
    </div>
    <div class="right_advertising">
      <div class="shuffling_figure">
        <ShufflingFigure></ShufflingFigure>
      </div>
      <div class="clues">
        <div class="clues_item" v-for="(item,index) in cluesData" :key="index">
          <Security>{{item}}</Security>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue"
import ShufflingFigure from "./ShufflingFigure.vue"
import Security from "./Security.vue"
export default {
  name:"train_box",
  components:{
    SearchBox,
    ShufflingFigure,
    Security
  },
  data(){
    return{
      imgurl:require('../../../../../assets/img/czm/icon/guagngao1.jpg'),
      cluesData:['安心票','价格保障','出行保障','退改保障','无消费陷阱','报销保障']
    }
  },
}
</script>

<style>
#train_box{
  width: 100%;
  height: 55%;
  display: flex;
  /* border-bottom: 1px solid rgba(136, 138, 139, 0.767);  */
  /* background: rgb(175, 171, 171); */
}
.left_search{
  width:48%;
  height: 100%;
  /*使用flex实现div在水平和垂直方向上居中 */
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
  border-right: solid 1px white;
  /* background-color: rgba(226, 164, 164, 0.384); */
}
.right_advertising{
  width: 52%;
  height: 100%;
  /* background-color: rgb(175, 152, 152); */
}
.shuffling_figure{
  width: 100%;
  height: 77%;
  background-color: #fff;
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
</style>