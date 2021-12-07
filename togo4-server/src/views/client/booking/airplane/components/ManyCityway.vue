<template>
  <div id="manyCityWay">
    <div id="path">
      <Selector ref="Selector" @getData="getData"></Selector>
      <div v-for="(s,index) in paths" :key="index">
        <Selector style="float:left"></Selector>
        <i @click="delPath(index)" class="el-icon-remove-outline"></i>
    </div>
     
    <Button @click="addPath" class="add_path">添加路线</Button>
  </div>
    <Btn @click.native="sendData" v-bind:data="data" ></Btn>
  </div>

</template>

<script>
// import Oneway from "./Oneway.vue"
import Btn from "./Btn.vue"
import Selector from "./Selector.vue"
export default {
  components:{
    // Oneway,
    Selector,
    Btn
  },
  methods:{
    addPath(){
      console.log("111");
      this.paths.push({});
      // $("#path").append("<Selector></Selector>")
    },
    delPath(index){
      console.log("222");
      this.paths.splice(index,1);
    },
    // 接受子组件传来的数据
    getData(startT,endT,startP,endP){
      this.data.startTime = startT;
      this.data.endTime = endT;
      this.data.startPlace = startP;
      this.data.endPlace = endP;
    },
  },
  data(){
    return {
      paths:[],
       data:{
          startTime:"",
          endTime:"",
          startPlace:"",
          endPlace:"",
        }
    }
  }
}
</script>

<style>
#path{
  width: 100%;
  height: 100%;
}
.add_path{
  margin-left: 10px;
  font-size: 12px;
  margin-top: 5px;
}

.el-icon-remove-outline{
  margin-top: 3%;
}
</style>