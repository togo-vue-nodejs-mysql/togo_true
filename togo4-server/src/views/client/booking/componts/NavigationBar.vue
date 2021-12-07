<template>
  <div>
    <!-- <span>1112233</span> -->
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true" @select="handleSelect">
  <el-menu-item index="/booking">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">酒店</template>
    <el-submenu index="2-1">
      <template slot="title">按酒店类型</template>
      <el-menu-item index="2-4-1">民宿</el-menu-item>
      <el-menu-item index="2-4-2">度假村</el-menu-item>
      <el-menu-item index="2-4-3">豪华酒店</el-menu-item>
    </el-submenu>
    <el-submenu index="2-2">
      <template slot="title">按酒店等级</template>
      <el-menu-item index="2-4-1">五星级</el-menu-item>
      <el-menu-item index="2-4-2">四星级</el-menu-item>
      <el-menu-item index="2-4-3">三星级</el-menu-item>
    </el-submenu>
   
   
    <el-submenu index="2-3">
      <template slot="title">热门景点</template>
      <el-menu-item index="2-4-1">日月贝</el-menu-item>
      <el-menu-item index="2-4-2">珠海渔女</el-menu-item>
      <el-menu-item index="2-4-3">拱北口岸</el-menu-item>
      <el-menu-item index="2-4-3">北师珠</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="/booking/ticket">门票</el-menu-item>
  <el-menu-item index="/booking/airplane" >机票</el-menu-item>
  <el-menu-item index="/booking/train">火车票</el-menu-item>
  <el-menu-item index="6">叫车</el-menu-item>
</el-menu>
<div class="line"></div>
  </div>
</template>

<script>
export default {
  name:"NavigationBar",
  data() {
      return {
        activeIndex: '1',
        // airplane_router:'../airplane/Airplane.vue'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>