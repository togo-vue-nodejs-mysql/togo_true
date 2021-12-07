<template>
  <div id="train">
    <!-- <span>这里是火车订票界面</span> -->
    <div class="train_conntents">
      <TrainBox></TrainBox>
      <div style="width:100%;height:8px;background-color: #fff;"></div>
      <Recommended v-bind:re_list="re_list">
        <template v-slot:topic>
          <span>坐着火车去旅行</span>
        </template>
        <template v-slot:instructions>
          <span>热门火车旅行路线</span>
        </template>
      </Recommended>
    </div>
  </div>
</template>

<script>
import TrainBox from "./componts/TrainBox.vue"
import Recommended from "./componts/Recommended.vue"
export default {
  name:"train",
  components:{
    TrainBox,
    Recommended
  },
  data(){
    return{
      re_list:[{
        name:"京广高铁",
        describe:"天南地北任你游",
        bgUrl:require('../../../../assets/img/czm/icon/guangzhou.jpg')
      },{
        name:"京沪高铁",
        describe:"千里京沪一日还",
        bgUrl:require('../../../../assets/img/czm/icon/shanghai.jpg')
      },{
        name:"宁杭甬",
        describe:"最养颜的高铁路线",
        bgUrl:require('../../../../assets/img/czm/icon/hangzhou.jpg')
      },{
        name:"成渝高铁",
        describe:"爱上天府之国",
        bgUrl:require('../../../../assets/img/czm/icon/chengdu.jpg')
      }]
    }
  }
}
</script>

<style>
#train{
  width: 100%;
  height: 100%;
  text-align: center;
  /* background-color: rgba(209, 208, 208, 0.336); */
  /* background-color: #fff; */
}
.train_conntents{
  margin: auto;
  width: 89%;
  height: 100%;
  background-color: rgba(231, 227, 227, 0.705);
}
</style>