<template>
  <div id="recommended">
    <span class="topic">
      <slot name="topic"></slot>
    </span>
    <br>
    <span class="topic_contents">
      <slot name="instructions"></slot>
    </span>
    <div class="recommended_items">
      <div v-for="(item,index) in re_list" :key="index">
        <reItem v-bind:item="item"></reItem>
      </div>
    </div>
  </div>
</template>

<script>
import reItem from "./RecommendedItem.vue"
export default {
  name:"Recommended",
  components:{
    reItem
  },
  props:['re_list']
}
</script>

<style>
#recommended{
  width: 100%;
  height: 45%;
  margin-top: 30px;
  text-align: center;
}
.topic{
  /* margin-top: 30px; */
  font-size: 25px;
  font-weight: bold;
}
.topic_contents{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
}
.recommended_items{
  margin-top: 10px;
  margin-left: 5%;
  width: 90%;
  height: 70%;
  /* background-color: rgba(255, 255, 255, 0.425); */
  display: flex;
}
</style>