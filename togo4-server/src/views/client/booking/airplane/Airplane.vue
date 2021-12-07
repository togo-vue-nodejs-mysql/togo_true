<template>
  <div id="airplane">
    <div style="width:100%;height:70px"></div>
    <div class="airplane_title">
      <div class="title_up">Go where you want to go</div>
      <div class="title_down">Book your ticket and leave right now.</div>
    </div>
    <div class="airplane_body">
      <CityBox></CityBox>
    </div>
  <!-- <span>机票预订界面</span> -->
  </div>
</template>

<script>
import CityBox from "./components/CityBox.vue"
export default {
  name:'Airplane',
  data(){
    return{
      
    }
  },
  components:{
    CityBox,
  }
}
</script>

<style>
#airplane{
  width: 100%;
  height: 100%;
  background: url("../../../../assets/img/czm/airplane_bg.png") no-repeat center/cover;
  opacity: 0.7;
}
.searchBox{
  padding: 20px;
  width: 98%;
  height: 30%;
}
.airplane_title{
  width: 100%;
  height: 20%;
  /* background-color: rgba(255, 255, 255, 0.582); */
}
.title_up{
  width: 100%;
  height: 50%;
  font-size: 55px;
  text-align: center;
  color: rgb(255, 255, 255);
}
.title_down{
  width: 100%;
  height: 50%;
  font-size: 30px;
  text-align: center;
  color: rgb(255, 255, 255);
}
.airplane_body{
  width: 100%;
  /* background-color: rgb(110, 78, 78); */
}
</style>