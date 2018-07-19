<template>
<div>
<swiper :options="swiperOption" ref="mySwiper" >
<!-- slides -->
<swiper-slide v-for="item of list" :key="item.id">
<img @click="bigShow(item.img);getWidth()" class="swiper-img" v-bind:src="item.img" />
</swiper-slide>
<!-- Optional controls -->
<div class="swiper-pagination" slot="pagination"></div>
</swiper>
<div v-show="isBigShow" id="big_show">
<div :class="{'to_90':toSpin,'to_0':!toSpin}">
<img :src="bigShowMe" id="big_pic" @click="hideBtn=!hideBtn"  v-bind:style="{width:picWidth,height:picHeight,marginTop:picMt}"/>
</div>

<div :class="{'to_90':toSpin,'to_0':!toSpin}" id="close" v-show="hideBtn" @click="isBigShow=0" class="fa fa-window-close fa-2x"> 关闭</div>
<div :class="{'to_90':toSpin,'to_0':!toSpin}" id="zhuan" v-show="hideBtn" @click="toSpin=!toSpin;getWidth()"><i class="fa fa-undo fa-2x"> 旋转</i></div>
</div>
</div>
</template>

<style scooped>
.fa{
    text-shadow: 1px 1px 4px #000;
}
#big_show {
  position: absolute;
  z-index: 20000;
  top: 0;
  left: 0;
  background: #2a2a2a;
  width: 100%;
  height: 100%;
}
.to_90 {
  transition: 0.3s;
  transform: rotate(90deg);
}
.to_0 {
  transition: 0.3s;
  transform: rotate(0deg);
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  background: #eee;
  padding-bottom: 39.2%;
}
.swiper-img {
  width: 100%;
}
#close {
  position: fixed;
  top: 1rem;
  right: .6rem;
  color: #fff;
}
#zhuan {
  position: fixed;
  top: 1rem;
  left: .6rem;
  color: #fff;
}
</style>


<script>
export default {
  name: "VueSwiper",
  data() {
    return {
        picMt:0,
        hideBtn:1,
      picWidth: "100%",
      picHeight: "100%",
      toSpin: 0,
      bigShowMe: "",
      isBigShow: 0,
      swiperOption: {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        delay: 3000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      list: [
        {
          id: "1",
          img: "/static/pic/1.jpg"
        },
        {
          id: "2",
          img: "/static/pic/2.jpg"
        },
        {
          id: "3",
          img: "/static/pic/3.jpg"
        },
        {
          id: "4",
          img: "/static/pic/4.jpg"
        },
        {
          id: "5",
          img: "/static/pic/5.jpg"
        }
      ]
    };
  },
  methods: {
    bigShow: function(e) {
      this.isBigShow = 1;
      this.bigShowMe = e;
    },
    getWidth: function() {
      if (this.toSpin) {
        this.picHeight = document.body.clientWidth + "px";
        this.picWidth = "";
        this.picMt = 0;
      } else {
          this.picMt = '3rem'
          this.picHeight = "";
        this.picWidth = document.body.clientWidth + "px";
      }
    }
  }
};
</script>