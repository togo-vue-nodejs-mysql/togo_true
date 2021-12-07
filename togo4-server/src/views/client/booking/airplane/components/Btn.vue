<template>
  <div>
    <Btn v-on:click.native="searchClick" class="btn">
        <div  slot="name">Search</div>
    </Btn>
  </div>
</template>

<script>
import Btn from "../../../../../components/client/Btn45.vue"
export default {
  data(){
    return{
      startP:"",
      endP:"",
      startT:"",
      endT:""
    }
  },
  props:["data"],
  watch:{
    startPlace:function(newData){
      this.startP = newData;
      this.searchClick();
    },
    endPlace:function(newData){
      this.endP = newData;
      this.searchClick();
    },
    startTime:function(newData){
      this.startT = newData;
      this.searchClick();
    },
    endT:function(newData){
      this.endT = newData;
      this.searchClick();
    }
  },
  components:{
    Btn
  },
  methods:{
    searchClick(){
      // console.log("123");
      console.log(this.data);
      // console.log(this.data.endTime);
      // console.log(this.data.startPlace);
      // console.log(this.data.endPlace);
      console.log("----Btn");
    }
  }
}
</script>

<style>
.btn{
  margin-top: 5px;
  margin-left: 85%;
}
</style>