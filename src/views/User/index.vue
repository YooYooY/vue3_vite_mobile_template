<template>
    <div class="user">
        <div class="user-head">
            <div class="user-head-avatar">
                <img src="" alt="">
            </div>
            <p>请登录</p>
        </div>
        <div class="user-btns">
            <div class="user-btns-item">
                <span class="user-icon icon-order-d"></span>
                <p>待确认订单</p>
            </div>
            <div class="user-btns-item">
                <span class="user-icon icon-order-c"></span>
                <p>应付查询</p>
            </div>
            <div class="user-btns-item">
                <span class="user-icon icon-order-b"></span>
                <p>我的订单</p>
            </div>
        </div>
        
        <ul class="user-list">
            <li class="user-list-item">
                <span class="user-item-icon item-icon-fav"></span>
                <span class="label">我的收藏</span>
                <span class="user-item-arrow-right"></span>
            </li>
            <li class="user-list-item">
                <span class="user-item-icon item-icon-shop"></span>
                <span class="label">常购商品</span>
                <span class="user-item-arrow-right"></span>
            </li>
        </ul>
        
    </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>