<template>
  <div class="security">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Security'
}
</script>

<style>
.security{
  width: 100%;
  height: 100%;
  border: rgba(1, 145, 228, 0.822);
  color: darkgray;
  font-size: 12px;
  /*使用flex实现div在水平和垂直方向上居中 */
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
  justify-content: center;
  border-left: 1px solid white;
}
</style>