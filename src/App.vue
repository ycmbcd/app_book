<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index < from.meta.index) {
        this.transitionName = "slide-back";
      } else {
        this.transitionName = "slide-forward";
      }
    }
  }
};
</script>

<style>
.slide-forward-enter-active {
  animation-timing-function: ease-out;
  animation: movein 0.4s;
}
.slide-forward-enter-to {
  animation: movein 0.4s;
  animation-timing-function: ease-out;
}
.slide-forward-leave-active {
  animation-timing-function: ease-out;
  animation: moveout 0.4s;
}
.slide-forward-leave-to {
  animation: moveout 0.4s;
  animation-timing-function: ease-out;
}
@keyframes movein {
  from {
    left: 200px;
    opacity: 0;
  }
  to {
    left: 0px;
    opacity: 1;
  }
}
@keyframes moveout {
  from {
    left: 0px;
    opacity: 1;
  }
  to {
    left: -200px;
    opacity: 0;
  }
}

.slide-back-enter-active {
  animation-timing-function: ease-out;
  animation: movein1 0.4s;
}
.slide-back-enter-to {
  animation: movein1 0.4s;
  animation-timing-function: ease-out;
}
.slide-back-leave-active {
  animation-timing-function: ease-out;
  animation: moveout1 0.4s;
}
.slide-back-leave-to {
  animation: moveout1 0.4s;
  animation-timing-function: ease-out;
}
@keyframes movein1 {
  from {
    right: 100px;
    opacity: 0;
  }
  to {
    right: 0px;
    opacity: 1;
  }
}
@keyframes moveout1 {
  from {
    right: 0px;
    opacity: 1;
  }
  to {
    right: -100px;
    opacity: 0;
  }
}


.top_bar {
  background: rgba(20, 76, 113, 0.9);
  height: 0.84rem;
  line-height: 0.84rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.4rem;
}
.back_bar {
  margin-left: 0.3rem;
  width: 30%;
  float: left;
}
.to_home {
  width: 10%;
  float: right;
}
.clear_both {
  clear: both;
}
</style>
