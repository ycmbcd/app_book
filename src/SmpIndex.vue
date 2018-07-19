<template>
    <div id="container">
        <div id="lrc_bar">{{nowLrc}}
            <div id="music_box" @click="clickMusic" :class="{'fa-spin':is_play}"><img src="/static/music_record.png" width="100%"></div>
        </div>
        <div id="music_btn">
            <audio loop="loop" id="player" autoplay="autoplay">
                <source src="static/1.mp3" type="audio/mpeg">
            </audio>
        </div>
        <vue-swiper style="margin-top:1.1rem"></vue-swiper>
        <div @click="bookList=1" class="btn">目录</div>
        <div id="book_lists" v-show="bookList">
            <div @click="bookList=0" id="close_lists" class="fa fa-window-close fa-3x"></div>
            <book-list :hiddenBack="1"></book-list>
        </div>
    </div>
</template>

<script>
import VueSwiper from './VueSwiper'
import BookList from './BookList'

export default {
    data () {
        return {
            show_pic: 0,
            bookList: 0,
            nowLrc: '【 岁月的记忆 】',
            is_play: 1,
            lrcObj: {},
            lrc: "[00:06.00]《一晃就老了》\n[00:10.52]编曲：孙侠\n[00:13.10]制作人：陈伟\n[00:16.80]出品人：秋裤大叔\n[00:22.62]不知道何时鬓角已染霜\n[00:26.51]不知道何时颜容已沧桑\n[00:30.46]忽然怀念从前那些逞强\n[00:34.99]和懵懂无知的年少轻狂\n[00:38.57]一瞬间发现人生太短暂\n[00:42.52]一瞬间发现路不再漫长\n[00:46.46]还没腾出双手拥抱自己\n[00:50.39]时光竟已走得这么匆忙\n[00:58.12]怎么刚刚学会懂事就老了\n[01:02.36]怎么刚刚学会包容就老了\n[01:06.40]怎么刚刚懂得路该往哪走\n[01:10.33]怎么还没走到就老了\n[01:14.23]怎么刚刚开始成熟就老了\n[01:18.33]怎么刚刚开始明白就老了\n[01:22.31]怎么刚刚懂得时间不经用\n[01:26.34]怎么转眼之间就老了\n[01:34                          .00]^_^\n[02:02.12]不知道何时鬓角已染霜\n[02:06.11]不知道何时颜容已沧桑\n[02:10.04]忽然怀念从前那些逞强\n[02:14.38]和懵懂无知的年少轻狂\n[02:18.12]一瞬间发现人生太短暂\n[02:22.06]一瞬间发现路不再漫长\n[02:26.06]还没腾出双手拥抱自己\n[02:30.01]时光竟已走得这么匆忙\n[02:37.93]怎么刚刚学会懂事就老了\n[02:41.96]怎么刚刚学会包容就老了\n[02:45.95]怎么刚刚懂得路该往哪走\n[02:50.01]怎么还没走到就老了\n[02:53.89]怎么刚刚开始成熟就老了\n[02:57.93]怎么刚刚开始明白就老了\n[03:01.86]怎么刚刚懂得时间不经用\n[03:05.84]怎么转眼之间就老了\n[03:18.20]怎么刚刚学会懂事就老了\n[03:22.72]怎么刚刚学会包容就老了\n[03:26.55]怎么刚刚懂得路该往哪走\n[03:30.49]怎么还没走到就老了\n[03:34.53]怎么刚刚开始成熟就老了\n[03:38.52]怎么刚刚开始明白就老了\n[03:42.50]怎么刚刚懂得时间不经用\n[03:46.48]怎么转眼之间就老了\n[03:54.47]怎么转眼之间就老了\n[04:02.47](๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤"
        };
    },
    components:{
        VueSwiper,
        BookList
    },
    mounted() {
        let _this = this;
        this.player = document.querySelector("#player");
        this.player.addEventListener("timeupdate", function() {
            for(var kk in _this.lrcObj){
                var x = kk-this.currentTime
                if(x < 0){
                    _this.nowLrc = _this.lrcObj[kk];
                }
            }
        });

        _this.lrcObj = this.mountLrc();

        // console.log(this.lrc)
    },
    methods:{
        clickMusic () {
            let _this = this;
            this.player = document.querySelector("#player");
            if(this.player.paused){
                this.player.play();
                _this.is_play = 1;
            }else{
                this.player.pause();
                _this.is_play = 0;
            }
        },
        mountLrc () {
            var lrcs = this.lrc.split("\n");
            var finalObj = {}
            for(var i=0;i<lrcs.length;i++){
                var now_min = lrcs[i].substr(2,1);
                var now_sec = lrcs[i].substr(4,2);
                var now_msec = lrcs[i].substr(6,3);
                var now_time = now_min * 60 + Number(now_sec) + String(now_msec);
                finalObj[now_time] = lrcs[i].replace(/\[.*\]/g,'');
            }
            return finalObj;
        }
    }
};
</script>

<style scoped>
#container{
    background: #FFF;
}
#book_lists{
    width:100%;
    height: 100%;
    position: fixed;
    overflow: scroll;
}
#close_lists{
    position: fixed;
    right: .3rem;
    top: 1.3rem;
    color: #da706e;
    z-index: 10000;
    text-shadow: 2px 2px 2px #757575;
}
#music_box{
    position: fixed;
    z-index: 10;
    width: .6rem;
    height: .6rem;
    right: 0.2rem;
    top: 0.2rem;
}
#lrc_bar{
    background-color: rgba(181,36,36,.5);
    position: fixed;
    z-index: 101;
    top:0;
    text-align: center;
    color: #FFF;
    font-size: .5rem;
    padding:.3rem 0;
    width: 100%;
    box-shadow: 0 0px .3rem #861616;
}
.btn {
    height: 2rem;
    background: #dedede;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1rem;
}
#music_btn {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
