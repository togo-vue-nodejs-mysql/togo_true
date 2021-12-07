<template>
  <div id="city">
    <div class="search">
       选择城市:<input type="text" @focus="pop_up" @blur="hidden_box">
    </div>
    <button @click="displayData"></button>
    <div id="bounced" >
     <span>请选择城市</span>
     <div>
       <button @click="displayData">新按钮</button>
     </div> 
     <div v-for="(item,index) in city" :key="index">
       <span>{{item.title}}</span>
       <button v-for="c in item.lists" :key="c">{{c}}</button>
     </div>
     <!-- <div class="btns">
      <div v-for="(item,index) in buttonText" :key="item">
        <button class="btn_city" :class="{btn_way_click : index===clickedIndex}" @click="itemClick(index)" >{{item}}</button>
      </div>
    </div> -->
    </div>
  </div>

</template>

<script>
import city from "../../../../../assets/json/czm/citys.json"
export default {
  name:"City",
  methods:{
    pop_up(){
      $("#bounced").show();
    },
    hidden_box(){
      $("#bounced").hide();
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    itemClick(index){
      this.clickedIndex = index;
    },
    displayData(){
      console.log(city);
    }
  },
  data(){
    return{
       activeIndex: '1',
       buttonText:["热门","ABCDEFG","HIJKLMN","OPQRST","UVWXYZ"],
       clickedIndex:0
    }
  }
}
</script>

<style>
.city{
  width: 100%;
  height: 100%;
}

.search{
  width: 100%;
   background-color: white;
   display: flex;
   align-items: center;
   position: relative;  
}
.search>input{
  border: 1px solid rgba(122, 126, 129, 0.596);
}

#bounced{
  margin-left: 30px;
  width: 17%;
  /* border-top:5px solid #84888f; */
  display: none;
  background-color: white;
  position: absolute;
  top:30px;
  z-index: 3;
  border: 1px solid rgba(93, 183, 240, 0.808);
  border-radius: 5px;
}
.topbar{
  width: 100%;
  height: 30px;
  background-color: rgb(185, 108, 108);
}
#bounced>span{
  font-size: 14px;
  color: rgba(169, 169, 169, 0.849);
  float: left;
}
.btns{
  width: 100%;
  height: 30px;
  background-color: rgb(228, 48, 48);
  display: flex;
  
}
.btn_city{
  width: 100%;
  height: 100%;
  font-size: 10px;
  border: 1px solid black;
}
.btn_city_click{
  width: 20%;
  height: 100%;
  font-size: 8px;
  color: rgb(52, 136, 247);
}
/* .search:hover~.bounced {
    display: block;
} */
</style>