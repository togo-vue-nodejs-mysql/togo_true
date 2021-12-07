<template>
  <div id="roundway">
    <!-- <span>这是日期选择器</span> -->
    <div class="one_way">
        <div style="width:100%;height:10px"></div>
        <div class="data_selector">
          <div class="city">
            <el-input id="sp" v-model="data.startPlace"  placeholder="出发城市"></el-input>
          </div>
          <img style="width:25px;height:25px;float:left;margin-left:12px;margin-top:5px" src="../../../../../assets/img/czm/icon/one-way.png" alt="">
          <div style="width:8px;height:100%"></div>
          <div class="city">
            <el-input id="ep" v-model="data.endPlace" placeholder="目的地"></el-input>
          </div>
          <div style="width:20px;height:100%"></div>
          <el-date-picker
              v-model="data.startTime"
              type="date"
              placeholder="选择出发日期"
              :picker-options="pickerOptions">
            </el-date-picker>
            <div style="width:20px;height:100%"></div>
          <el-date-picker
              v-model="data.endTime"
              type="date"
              placeholder="选择回程日期"
              :picker-options="pickerOptions">
            </el-date-picker>
            <div style="width:60px;height:100%"></div>
        </div>
        <Btn v-bind:data="data"></Btn>
      </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue"
// eslint-disable-next-line no-unused-vars
export default {
  name:"Roundway",
  data(){
    return{
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        data:{
          startTime:"",
          endTime:"",
          startPlace:"",
          endPlace:"",
        }
    }
  },
  components:{
    Btn
  },
  methods:{
    oneWayClick(){
      console.log("start place:"+this.startPlace);
      console.log("end place:"+this.endPlace);
      console.log("star time:"+this.startTime);
    },
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
  position: relative
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 150px;
  left: 20px;
}

</style>