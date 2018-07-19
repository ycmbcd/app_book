<template>
    <div>
        <div class="top_bar" v-show="open_menu">
            <div class="back_bar"><a href="#/BookList"><i class="fa fa-angle-left"></i> &nbsp;返回目录</a></div>
            <div class="to_home"><a href="#/"><i class="fa fa-home"></i></a></div>
            <div class="clear_both"></div>
        </div>
        <div class="t_box" v-bind:class="txt_bg">
            <div class="txt" @click="show_menu" :style="{'fontSize':fSize+'rem','lineHeight':lHight+'rem'}">
        
            </div>
            <div class="page_bar">
                <div class="page_pre page_btn">上一篇</div>
                <div class="page_next page_btn">下一篇</div>
                <div class="clear_both"></div>
            </div>
        </div>

        <div class="menu" v-show="open_menu">
            <div class="menu-item">
                <span>字号：</span>
                <i class="fa fa-font font_1" @click="fontSize(1)">-</i>
                <i class="fa fa-font font_2" @click="fontSize(2)"></i>
                <i class="fa fa-font font_3" @click="fontSize(3)">+</i>
                <i class="fa fa-font font_4" @click="fontSize(4)">++</i>
            </div>
            <div class="menu-item">
                <div style="float:left;">主题：</div>
                <div @click="cgBg('bai')" class="theme bai"></div>
                <div @click="cgBg('lv')" class="theme lv"></div>
                <div @click="cgBg('huang')" class="theme huang"></div>
                <div @click="cgBg('hong')" class="theme hong"></div>
                <div class="clear_both"></div>
            </div>
            <div class="menu-item">
                <div style="float:left;">白天、夜晚：</div>
                <div @click="cgBg('sun')" class="theme sun"><i class="fa fa-sun-o"></i></div>
                <div @click="cgBg('hei')" class="theme hei"><i class="fa fa-moon-o"></i></div>
                <div class="clear_both"></div>
            </div>
        </div>
    </div>
</template>
<style>
.theme{
    float: left;
    width:1rem;
    margin-top:.1rem;
    height: .5rem;
    background: #FFF;
    margin-left:.3rem;
}
.bai{
    transition: 1.2s;
    background: #FFF;
    color:#5a5a5a;
}
.sun{
    transition: 1.2s;
    background: #fff7b4;
    color: #6f6400;
}
.hei{
    transition: 1.2s;
    background: #2b2b2b;
    color: #909090;
}
.lv{
    color:#2a2a2a;
    transition: 1.2s;
    background: #b5e2ba;
}
.hong{
    transition: 1.2s;
    background: #fff3f3;
    color: #903454;
}
.huang{
    transition: 1.2s;
    background: #f3f3d6;
    color: #8e7d50;
}
.font_1{
    padding:0 .3rem;
    font-size: .3rem;
}
.font_2{
    padding:0 .3rem;
    font-size: .4rem;
}
.font_3{
    padding:0 .3rem;
    font-size: .5rem;
}
.font_4{
    padding:0 .3rem;
    font-size: .6rem;
}
.top_bar .fa{
    font-size: .6rem;
    float: left;
    margin-top:.1rem;
}
.t_box{
    height: 100%;
    width: 100%;
    padding:.4rem 0rem 2rem 0rem;
}
.txt{
    padding:0 .4rem;
    white-space: pre-wrap;
    text-align: justify;
    font-family: '楷体';
}
.menu{
    width:100%;
    height: 3rem;
    background: rgba(20, 76, 113, .9);
    position:fixed;
    bottom:0;
    color:#FFF;
}
.menu-item{
    font-size:.4rem;
    padding-left:.3rem;
    line-height: .8rem;
}
.menu-item:first-child{
    margin-top:0.3rem;
}
.page_bar{
    margin-top:2rem;
}
.page_btn{
    width:3rem;
    height: 1rem;
    line-height: 1rem;
    background: #144c71;
    text-align: center;
    color:#FFF;
    font-size:.4rem;
    border:1px solid #000;
    border-radius: .8rem;
}
.page_pre{
    margin-left:.4rem;
    float: left;
}
.page_next{
    float: right;
    margin-right:.4rem;
}
</style>
<script>
export default {
    data() {
        return {
            open_menu: 0,
            txt_bg:'bai',
            fSize: .4, // 字体
            lHight: .7 // 行高
        }
    },
    methods: {
        cgBg(e) {
            this.txt_bg = e;
        },
        show_menu() {
            this.open_menu = !this.open_menu
        },
        fontSize(e) {
            if(e === 1){
                this.fSize = .3
                this.lHight = .5
            }
            if(e === 2){
                this.fSize = .4
                this.lHight = .7
            }
            if(e === 3){
                this.fSize = .5
                this.lHight = .8
            }
            if(e === 4){
                this.fSize = .6
                this.lHight = 1
            }
        }
    }
}
</script>
