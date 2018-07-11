<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.top_bar{
    background: #144c71;
    height: .84rem;
    line-height: .84rem;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    font-size:.4rem;
}
.back_bar{
    margin-left:.3rem;
    width:30%;
    float: left;
}
.to_home{
  width:10%;
  float: right;
}
.clear_both{
  clear: both;
}
</style>
