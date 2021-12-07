<template>
  <div id="inputs">
    <div style="width:100%;height:10px"></div>
    <div class="data_selector">
      <div class="city">
        <el-input id="sp" v-model="startPlace"  placeholder="出发城市"></el-input>
      </div>
      <div style="width:40px;height:100%"></div>
      <img style="width:25px;height:25px;float:left;margin-left:12px;margin-top:5px" src="../../../../../assets/img/czm/icon/one-way.png" alt="">
      <div style="width:40px;height:100%"></div>
      <div class="city">
        <el-input id="ep" v-model="endPlace" placeholder="目的地"></el-input>
      </div>
      <div style="width:40px;height:100%"></div>
      <el-date-picker
          v-model="startTime"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
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
        startTime:"",
        endTime:"",
        startPlace:"",
        endPlace:"",
    }
  },
  methods:{
    getData(){
      // console.log("向父组件中传递数据");
      // console.log(this.startTime);
      // console.log(this.startPlace);
      // console.log(this.endPlace);
      // console.log(this.endTime);
      // console.log("----S");
      this.$emit('getData',this.startTime,this.endTime,this.startPlace,this.endPlace);
    }
  }
}
</script>

<style>
#inputs{
  /* float: left; */
  width:97%;
  height: 100%;
}
.data_selector{
  padding-top: 10px;
  width: 100%;
  height: 60%;
  margin-left: 20px;
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
  width: 250px;
  left: 20px;
}
</style>