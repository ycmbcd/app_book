<template>
    <div id="book_lists">
        <div class="top_bar" v-show="!hiddenBack">
            <div class="back_bar"><a href="#/">返回首页</a></div>
        </div>
        <div class="book_list">
            <ul>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1</a>
                </li>
                <li>
                    <a href="#/BookContent">第一章 休息休息</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.1</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.2</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">1.3</a>
                </li>
                <li>
                    <a href="#/BookContent">第二章 休息休息吧</a>
                </li>
                <li class="list_2">
                    <a href="#/BookContent">2.1xxxxx</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
.book_list{
    font-size:.4rem;
    padding-left:.8rem;
    line-height: .8rem;
    margin-top:.3rem;
    margin-bottom: 2rem;
}
.list_2{
    padding-left:.4rem;
    font-size:.3rem;
}
#book_lists{
    position: absolute;
    top: 1.1rem;
    z-index: 1;
    background: #FFF;
    width:100%;
}
</style>
<script>
export default {
    name: "BookList",
    props:{
        hiddenBack: Number
    }
}
</script>
