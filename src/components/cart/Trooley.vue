<template>
  <div class="page">
    <div class="cart">
      <!--top部分 crumbs   -->
      <div class="crumbs">
        <strong>您的位置：</strong>
        <ol class="crumb">
          <li><a href="http://www.taobao.com">首页</a></li>
          <li><a href="https://i.taobao.com/my_taobao.htm">我的淘宝</a></li>
          <li>我的购物车</li>
        </ol>

        <span class="cart-tip">
          购物车帮您一次性完成批量购买与付款，下单更便捷，付款更简单！
          <a href="">如何使用购物车</a>
        </span>
      </div>

      <!-- 提示部分 -->
      <div class="empty">
        <h2>您的购物车还是空的，赶紧行动吧！您可以：</h2>
        <ul>
          <li>
            看看
            <a
              href="//shoucang.taobao.com/shop_collect_list.htm"
              target="_blank"
              >我的收藏夹</a
            >
          </li>
          <li>
            看看<a
              href="//trade.taobao.com/trade/itemlist/list_bought_items.htm"
              target="_blank"
              >已买到的宝贝</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.page {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
a {
  color: #36c;
  text-decoration: none;
}
a:hover {
  color: #f40;
  text-decoration: underline;
}
ol,
ul {
  list-style: none;
  display: block;
}
.cart {
  height: 400px;
  width: 1190px;
  margin: 0 auto;
}

/* top部分 crumbs */
.crumbs {
  height: 17.6px;
  width: 1190px;
}
.crumbs strong {
  float: left;
}
.crumbs.crumb {
  float: left;
  margin-left: -5px;
}
.crumb li {
  float: left;
  padding: 0 0 0 5px;
}
.crumb a {
  background: url(//assets.alicdn.com/sys/common/img/crumb_bg.gif) no-repeat
    100% 50%;
  padding-right: 8px;
  margin-right: 1px;
}
.crumbs span {
  float: right;
  color: gray;
}

/* 提示部分 */
.empty {
  height: 260px;
  width: 100%;
  padding: 88px 0 100px 156px;
  background: url(//gtd.alicdn.com/tps/i3/T1TvXUXnNjXXXXXXXX-100-100.png)
    no-repeat 40px 86px;
}
.empty h2 {
  font-weight: bold;
  display: block;
  font-size: 14px;
}
.empty ul {
  margin-top: 12px;
  line-height: 20px;
}
</style>
