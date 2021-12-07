<template>
  <div id="cityBox">
    <!-- <span>这是机票区</span>  -->
    <div id="btns">
      <div v-for="(item,index) in buttonText" :key="item">
        <button class="btn_way" :class="{btn_way_click : index===clickedIndex}" @click="itemClick(index)" >{{item}}</button>
      </div>
    </div>
    <div id="content" >
      <div v-show="isShow1">
        <Oneway></Oneway>
      </div>
      <div v-show="isShow2">
        <!-- <span>单程</span> -->
        <Roundway></Roundway>
      </div>
      <div v-show="isShow3">
        <!-- <span>服务未开启</span> -->
        <ManyCityWay></ManyCityWay>
      </div>
      

    </div>
    <!-- <input class="cityinput" id="citySelect" value="城市名" > -->
    
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import {test} from "../../js/cityBox"
import Oneway from "./Oneway.vue"
// import Btn from "../../../../../components/client/Btn45.vue"
import Roundway from "./Roundway.vue"
import ManyCityWay from "./ManyCityway.vue"
export default {
  components: { Oneway ,Roundway,ManyCityWay},
  name:"CtiyBox",
  data(){
    return{
      buttonText:[
        '单程',"往返","多城市"
      ],
      clickedIndex: 0,
               // 展示
        isShow1:true,
        isShow2:false,
        isShow3:false
    }
    
  },
  methods:{
    itemClick(index){
      this.clickedIndex = index;
      if(index ==0){
        this.isShow1 = true;
        this.isShow2 = false;
        this.isShow3 = false
      }else if(index == 1){
        this.isShow1 = false;
        this.isShow2 = true;
        this.isShow3 = false
      }else if(index == 2){
        this.isShow1 = false;
        this.isShow2 = false;
        this.isShow3 = true
      }
    },
    
  },
  computed: {
    
  }
}
</script>

<style>
#cityBox{
 width: 70%;
 height: 70%;
 /* margin-top: 10%; */
 margin-left: 13%;
 background-color: rgba(255, 255, 255, 0.719);
}
#btns{
  width: 100%;
  height: 40%;
  /* background-color: #fff; */
}
#content{
  width: 100%;
  height: 60%;
  /* background-color: rgb(126, 66, 66); */
}
.btn_way{
  width: 90px;
  height: 35px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: rgba(83, 83, 83, 0.623);
  border-radius: 5px;
  float: left;
}
.btn_way_click{
  width: 90px;
  height: 35px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: rgba(46, 46, 46, 0.911);
  color: white;
  border-radius: 5px;
  float: left;
}
#block{
  padding: 10px;
}



/* 城市选择器 */


/* 日期选择器 */


</style>