<template>
  <div id="homePage"> 
    <Top></Top>
    <!-- 视频轮播控件 -->
    <VideoRotator></VideoRotator>
  </div>
</template>

<script>
import Top from "./components/top.vue"
import VideoRotator from "./components/VideoRotator.vue"
export default {
  name:'HomePage',
  data(){
    return{

    }
  },
  // 按钮方法
  methods:{

  },
  components:{
    Top,
    VideoRotator
  }
}
</script>

<style>
#homePage{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.651);
}
</style>