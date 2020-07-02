<template>
  <div id="All">
    <!-- 写HTML代码 -->
    <!-- Hello World -->
    <div id="header">
      <div id="heade">
        <div id="header-1">
          <img
            src="//img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png"
            style="height: 130px; width: 240px; display: block;"
          />
        </div>
        <div id="header-2">
          <input type="text" class="Src" />
          <a href="#"><button type="submit" class="Btn">搜索</button></a>
        </div>
      </div>
    </div>

    <div id="content">
      <div id="main-nav">
        <div id="nav-1">
          <div class="nav-1-1">
            <a href=""
              ><img
                src="//img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png"
                style="width: 100px;height: 30px;"
            /></a>
            <a href=""
              ><img
                src="//img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png"
                style="width: 100px;height: 30px;"
            /></a>
            <a href="">天猫会员</a>
            <a href="">电器城</a>
            <a href="">喵鲜生</a>
            <a href="">医药馆</a>
            <a href="">天猫商城</a>
            <a href="">营业厅</a>
            <a href="">魅力惠</a>
            <a href="">飞猪旅行</a>
            <a href="">苏宁易购</a>
          </div>
          <div class="category-type">
            <a href="">商品分类</a>
          </div>
        </div>
        <div id="nav-2">
          <ul id="category-list">
            <li v-for="(item, index) in items" :key="index">
              <a href="">{{ item }}</a>
            </li>
          </ul>
          <div id="GUANG">
            <img
              src="../assets/img/lunbo.jpg"
              style="width: 100%;height: 500px;"
            />
          </div>
        </div>
      </div>

      <div id="activity-bg">
        <div id="Brandwall">
          <div class="B-1">
            <a href=""
              ><div id="B-1-body">
                <li v-for="(itme, index) in Imgs" :key="index">
                  <img :src="itme.img" class="B-1-body-img" />
                  <div class="xuangou">{{ itme.zi }}</div>
                </li>
              </div></a
            >
          </div>
        </div>

        <div id="NewBrand">
          <div id="NewBrandBody">
            <div id="NewBrandBody-1">
              <ul id="BrandList">
                <a href=""
                  ><li v-for="(itme, index) in Brands" :key="index">
                    <img :src="itme.img" alt="" /></li
                ></a>
              </ul>
              <ul id="BrandList">
                <a href=""
                  ><li v-for="(itme, index) in Brands" :key="index">
                    <img :src="itme.img" alt="" /></li
                ></a>
              </ul>
            </div>
          </div>
        </div>

        <div id="TMmark">
          <div id="Mark">
            <div id="Mark-line">
              <img
                src="https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png"
                style="width:214px;height: 30px;"
              />
            </div>
            <div id="Mark-body">
              <a href="">
                <div class="body-1">
                  <img
                    src="../assets/img/m.jpg"
                    style="width: 300px;height: 600px;"
                  />
                </div>
                <div class="body-2">
                  <img
                    src="../assets/img/m-1.jpg"
                    style="width:500px;height: 301px;"
                  />
                </div>
                <div class="body-3">
                  <img
                    src="../assets/img/m-3.jpg"
                    style="width: 200px;height: 301px;"
                  />
                </div>
                <div class="body-4">
                  <img
                    src="../assets/img/m-3.jpg"
                    style="width: 200px;height: 301px;"
                  />
                </div>
                <div class="body-5">
                  <img
                    src="../assets/img/m-2.jpg"
                    style="width: 900px;height: 290px;"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div id="TMhk">
          <div id="HK">
            <div id="HK-line">
              <img
                src="https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png"
                style="width:214px;height: 30px;"
              />
            </div>

            <ul id="HKbody">
              <a href="">
                <li v-for="(itme, index) in HK" :key="index" class="HKLI">
                  <img :src="itme.img" alt="" /></li
              ></a>
            </ul>
          </div>
        </div>

        <div>
          <img src="../assets/img/img.jpg" style="width: 100%;height: 150px;" />
        </div>

        <h3>随心购</h3>
        <div id="TMLISTS">
          <div id="TMLIST">
            <ul id="lists" v-for="(itme, index) in list" :key="index">
              <a href="">
                <li>
                  <img :src="itme.img" class="TMLIimg" />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div id="TMLISTS">
          <div id="TMLIST">
            <ul id="lists" v-for="(itme, index) in list" :key="index">
              <a href="">
                <li>
                  <img :src="itme.img" class="TMLIimg" />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div id="TMLISTS">
          <div id="TMLIST">
            <ul id="lists" v-for="(itme, index) in list" :key="index">
              <a href="">
                <li>
                  <img :src="itme.img" class="TMLIimg" />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div id="TMLISTS">
          <div id="TMLIST">
            <ul id="lists" v-for="(itme, index) in list" :key="index">
              <a href="">
                <li>
                  <img :src="itme.img" class="TMLIimg" />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div id="TMLISTS">
          <div id="TMLIST">
            <ul id="lists" v-for="(itme, index) in list" :key="index">
              <a href="">
                <li>
                  <img :src="itme.img" class="TMLIimg" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div id="Ylike">
        <h3>猜你喜欢</h3>
        <ul id="likes" v-for="(itme, index) in likes" :key="index">
          <a href="">
            <li>
              <img :src="itme.img" alt="" />
              <div class="s">{{ itme.s }}</div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装",
        "女装"
      ],

      Imgs: [
        {
          img: require("../assets/img/lunbo1.jpg"),
          zi: "选购"
        },
        {
          img: require("../assets/img/lunbo1.jpg"),
          zi: "选购"
        },
        {
          img: require("../assets/img/lunbo1.jpg"),
          zi: "选购"
        },
        {
          img: require("../assets/img/lunbo1.jpg"),
          zi: "选购"
        },
        {
          img: require("../assets/img/lunbo1.jpg"),
          zi: "选购"
        }
      ],

      Brands: [
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") },
        { img: require("../assets/img/B.jpg") }
      ],
      HK: [
        { img: require("../assets/img/HK-1.jpg") },
        { img: require("../assets/img/HK-1.jpg") },
        { img: require("../assets/img/HK-1.jpg") },
        { img: require("../assets/img/HK-1.jpg") }
      ],

      list: [
        { img: require("../assets/img/L.jpg") },
        { img: require("../assets/img/L.jpg") },
        { img: require("../assets/img/L.jpg") },
        { img: require("../assets/img/L.jpg") },
        { img: require("../assets/img/L.jpg") }
      ],

      likes: [
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" },
        { img: require("../assets/img/s.jpg"), s: "预售" }
      ]
    };
  }
};
</script>

<style scoped>
/* 写css样式 */
#All {
  width: 100%;
  margin: 0;
  padding: 0;
}

#header {
  height: 130px;
  display: block;
  margin: auto;
  width: 100%;
}
#heade {
  margin: 0 auto;
  height: 130px;
  width: 100%;
}
#header-1 {
  height: 130px;
  width: 240px;
  display: block;
  float: left;
  margin: auto;
}
#header-2 {
  float: left;
  width: 625px;
  height: 80px;
  margin-left: 100px;
  margin-top: 30px;
}
#header-2 input {
  display: block;
  margin-top: 15px;
}
.Src {
  width: 500px;
  height: 36px;
  float: left;
  border: red 2px solid;
}
.Btn {
  cursor: pointer;
  width: 120px;
  height: 42px;
  float: left;
  margin-top: 15px;
  background-color: red;
  border: red 2px solid;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

#content {
  width: 100%;
  margin: 0;
  padding: 0;
}
#main-nav {
  width: 100%;
  height: 37px;
  margin: 0 auto;
  padding: 0;
}
#nav-1 {
  width: 1230px;
  height: 35px;
  margin: 0 auto;
  padding-right: 20px;
}
.nav-1-1 {
  width: 1030px;
  height: 35px;
  clear: both;
  margin-left: 200px;
}
.nav-1-1 a {
  height: 35px;
  float: left;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: #000;
}

#nav-2 {
  width: 100%;
  height: 500px;
  position: relative;
}
.category-type {
  width: 210px;
  height: 36px;
  background-color: red;
  float: left;
  margin-top: -45px;
  margin-left: -20px;
}
.category-type a {
  display: inline-block;
  font-size: 16px;
  margin-left: 58px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 10px;
  color: #fff;
}

#category-list {
  position: absolute;
  width: 170px;
  height: 500px;
  background-color: #000;
  position: relative;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.55);
  margin-left: 22px;
  margin-top: -10px;
  float: left;
}
#category-list li {
  width: 170px;
  height: 32px;
  list-style: none;
  padding-top: 10px;
}
#category-list a {
  text-decoration: none;
  font-size: 14px;
  line-height: 31px;
  color: #fff;
}
#GUANG {
  position: absolute;
  float: left;
  z-index: 1;
  display: block;
  height: 500px;
  width: 100%;
}

#activity-bg {
  width: 100%;
  height: 5600spx;
  float: left;
}
#Brandwall {
  width: 100%;
  height: 370px;
  margin: auto;
}
.B-1 {
  width: 100%;
  height: 370px;
  float: left;
  display: block;
  margin: 0 auto;
}
#B-1-body {
  width: 234px;
  height: 316px;
  display: flex;
}
.B-1-body-img {
  width: 234px;
  height: 316px;
  display: inline-block;
  padding-left: 20px;
}
#B-1-body li {
  list-style: none;
  display: inline-block;
}
.xuangou {
  width: 150px;
  height: 50px;
  border-radius: 60px / 50px;
  background: red;
  font-size: 18px;
  margin-left: 50px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
}
#B-1-body a {
  text-decoration: none;
  font-size: 18px;
  color: #fff;
}

#NewBrand {
  width: 100%;
  height: 327px;
  background-color: #fff;
  margin-top: 20px;
}
#NewBrandBody {
  width: 100%;
  height: 327px;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
#BrandList {
  float: left;
  display: flex;
  margin-left: -20px;
}
#NewBrandBody-1 {
  width: 100%;
  height: 327px;
}
#BrandList li {
  list-style: none;
  display: inline-block;
  width: 120px;
  height: 120px;
  margin-left: 20px;
}
#BrandList img {
  width: 120px;
  height: 120px;
  display: inline-block;
}

#TMmark {
  width: 100%;
  height: 665px;
}
#Mark {
  width: 100%;
  height: 665px;
  margin: 0 auto;
}
#Mark-line {
  display: inline-block;
  font-size: 18px;
  height: 28px;
  color: #000;
  margin-top: 10px;
  margin-left: 50px;
}
#Mark-body {
  width: 100%;
  height: 618px;
}
.body-1 {
  width: 300px;
  height: 500px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
.body-2 {
  width: 500px;
  height: 301px;
  margin-left: 13px;
  float: left;
  margin-top: 10px;
}
.body-3 {
  width: 200px;
  height: 301px;
  margin-left: 13px;
  text-align: center;
  float: left;
  margin-top: 10px;
}
.body-4 {
  width: 200px;
  height: 301px;
  margin-left: 13px;
  text-align: center;
  float: left;
  margin-top: 10px;
}
.body-5 {
  width: 400px;
  height: 301px;
  margin-left: 30px;
  text-align: center;
  float: left;
  margin-top: 10px;
}

#TMhk {
  width: 100%;
  height: 665px;
}
#HK {
  width: 100%;
  height: 665px;
  margin: 0 auto;
}
#HK-line {
  width: 214px;
  height: 28px;
  margin-top: 10px;
  margin-left: 50px;
}
#HKbody {
  height: 630px;
}
#HKbody li {
  width: 600px;
  height: 300px;
  float: left;
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
}
#HKbody img {
  width: 600px;
  height: 300px;
  padding-left: 10px;
}

#TMLISTS {
  width: 100%;
  height: 618px;
}
#TMLIST {
  height: 618px;
  margin: 0 auto;
  padding: 0;
}

#lists {
  height: 618px;
  width: 250px;
  float: left;
  display: block;
  list-style: none;
  padding: 0;
  margin-left: 10px;
}
.TMLI {
  width: 250px;
  height: 618px;
  display: block;
  float: left;
  list-style: none;
}
.TMLIimg {
  width: 250px;
  height: 618px;
}

#Ylike {
  width: 100%;
  height: 800px;
  float: left;
}
h3 {
  color: red;
}
#likes {
  width: 240px;
  height: 340px;
  float: left;
  display: block;
  padding: 0;
  margin-left: 20px;
}
#likes li {
  width: 240px;
  height: 340px;
  float: left;
  display: block;
}
#likes img {
  width: 200px;
  height: 300px;
  margin-left: 20px;
}

.s {
  width: 50px;
  height: 30px;
  font-size: 18px;
  line-height: 20px;
  margin-left: 100px;
  color: rgb(226, 105, 105);
}
</style>
