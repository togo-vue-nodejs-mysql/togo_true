/* eslint-disable no-unused-vars */
<template>
  <div id="oneway">
    <!-- <span>这是日期选择器</span> -->
    <div class="one_way">
        <Selector ref="Selector" @getData="getData"></Selector>
        <Btn @click.native="sendData" v-bind:data="data"></Btn>
      </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue"
// eslint-disable-next-line no-unused-vars
import Selector from "./Selector.vue"
export default {
  data(){
    return{
        data:{
          startTime:"",
          endTime:"",
          startPlace:"",
          endPlace:"",
        }
    }
  },
  components:{
    Btn,
    Selector
  },
  methods:{
    // 接受子组件传来的数据
    getData(startT,endT,startP,endP){
      this.data.startTime = startT;
      this.data.endTime = endT;
      this.data.startPlace = startP;
      this.data.endPlace = endP;
    },
    // 触发子组件事件
    sendData(){
      this.$refs.Selector.getData();
    }
  }
}
 
</script>

<style>
.data_selector{
  width: 100%;
  height: 60%;
  margin-left: 20px;
  display: flex;
}
.city{
  /* margin-left: 20px; */
  width: 20%;
  height: 100%;
  float: left;
}
.oneway{
  width: 100%;
  height: 100%;
  display: flex;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 150px;
  left: 20px;
}

</style>