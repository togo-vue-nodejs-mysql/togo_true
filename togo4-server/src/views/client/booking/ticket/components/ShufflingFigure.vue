<template>
  <div id="shufflingFigure">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in list_img" :key="index">
          <h3 class="small">
            <img :src="item.url" alt />
          </h3>
        </el-carousel-item>
      </el-carousel>
      <!-- <img :src="imgurl" width="100%" height="100%" alt=""> -->
  </div>
  
</template>

<script>
export default {
  name:"ShufflingFigure",
  data(){
    return {
      imgurl:require('../../../../../assets/img/czm/icon/guagngao1.jpg'),
      list_img: [
        { url: require('../../../../../assets/img/czm/icon/guagngao1.jpg') },
        { url: require('../../../../../assets/img/czm/icon/guanggao2.jpg') },
        { url: require('../../../../../assets/img/czm/icon/guanggao3.png') },
        { url: require('../../../../../assets/img/czm/icon/guanggao3.png') },
      ],
    }
  }
}
</script>

<style>
#shufflingFigure{

  width: 100%;
  height: 77%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .small img {
  width: 100%;
  height: 100%;
}
</style>