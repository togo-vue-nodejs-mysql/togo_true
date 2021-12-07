<template>
  <div id="searchBox">
    <div class="refund">
      <div class="refund_btns">
        <button>出票状态查询</button>
        <span style="color:darkgray">|</span>
        <button>退票申请</button>
      </div>
    </div>
    <div class="contents">
      <div class="search_left">
        <div class="inputs">
          <el-input v-model="start_place_train" placeholder="请输入出发点"></el-input>
        </div>
        
        <div class="inputs">
          <el-input v-model="end_place_train" placeholder="请输入目的地"></el-input>
        </div>
      </div>
      <div class="search_right">
        <div class="inputs">
            <div class="block">
              <el-date-picker
                v-model="train_date"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
        </div>
        <div class="inputs"></div>
        <div class="inputs">
          <div style="width:100%;height:10px"></div>
          <Btn @click.native="search" class="btn_search">  
              <div slot="name">Search</div>
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../../../../../components/client/Btn45.vue"
export default {
  name:"SearchBox",
  components:{
    Btn
  },
  data(){
    return{
      start_place_train:"",
      end_place_train:"",
      train_date:"",
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
    }
  },
  methods:{
    search(){
      console.log(this.start_place_train,this.end_place_train,this.train_date);
      alert(this.start_place_train,this.end_place_train,this.train_date);
    }
  }
}
</script>

<style>
#searchBox{
  margin: 0 auto;
  width: 90%;
  height: 80%;
  /*使用flex实现div在水平和垂直方向上居中 */
  /* background-color: rgba(202, 61, 61, 0.5); */
  border: 4px solid rgba(46, 181, 235, 0.925);
}
.refund{
  width: 100%;
  height: 15%;
  /* background-color: rgb(216, 185, 185); */
}
.contents{
  width: 100%;
  height: 85%;
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
  border-top: 1px solid rgba(136, 138, 139, 0.767);
  /* background-color: rgba(144, 200, 226, 0.486); */
}
.refund_btns{
  float: right;
  margin-top: 10px;
}
.refund_btns>button{
  font-size: 12px;
  color: rgb(139, 139, 139);
  margin-right: 5px;
  margin-left: 5px;
}
.search_left{
  width: 50%;
  height: 100%;
  
  /* background-color: rgba(59, 44, 44, 0.274); */
}
.search_right{
  width: 50%;
  height: 100%;
  /* background-color: rgba(194, 166, 166, 0.274); */
}
.inputs{
  width: 80%;
  height: 30px;
  margin: 20px;
  margin-top: 35px;
}
.btn_search{
  margin-left:140px;
}

</style>