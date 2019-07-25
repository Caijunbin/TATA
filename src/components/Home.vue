<template>
  <div>
    <section id="home">
      <div class="lvjing">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="../assets/images/index.jpg" class="img-responsive" alt="TATA">
            </div>
          </div>
        </div>
      </div>
    </section>
    <span id="about_us_top"> </span>
    <section id="about_us">
      <div class="container">
        <p class="title">关于我们</p>
        <p class="contain">
          TATA是由嗨塔科技有限责任科技集团研发的大型交互平台。平台以TATA软件和TATA社区论坛为产品形式。TATA软件包括TATA圈、TATA力、TATA秀、TATA趣四大板块，其中TATA圈为核心产品，其他三者为向心产品。
          TATA社区论坛分为TATA共享和TATA共创两大板块，游客可以在论坛实现分享、交流、投稿等众多功能，留住用户智慧，为产品注入源头活水</p>
      </div>
    </section>
    <section id="about_app">
      <div class="container">
        <div class="row" style="margin: 0">
          <div class="col-md-4 left">
            <div class="row left_content">
              <div class="col-md-9">
                <p class="left_title">塔塔圈</p>
                <p class="left_word">塔塔圈（又名生活圈），基于真实的地理位置、按照不同的功能场景作出地域划分，创设不同的功能场景生活圈。</p>
              </div>
              <div class="col-md-3">
                <img src="../assets/images/塔塔圈点亮.png">
              </div>
            </div>
            <div class="row left_content">
              <div class="col-md-9">
                <p class="left_title">塔塔秀</p>
                <p class="left_word">用户点开塔塔秀点开子栏目塔塔show，按照操作拍照、微调定制个人趣味动画形象，作为平台交互使用的个人形象。</p>
              </div>
              <div class="col-md-3">
                <img src="../assets/images/塔塔秀点亮.png">
              </div>
            </div>
          </div>
          <div class="col-md-4 middle">
            <p>关于我们的APP</p>
            <img src="../assets/images/app.png" class="app">
          </div>
          <div class="col-md-4 right">
            <div class="row right_content">
              <div class="col-md-3">
                <img src="../assets/images/塔塔趣点亮.png">
              </div>
              <div class="col-md-9">
                <p class="right_title">塔塔趣</p>
                <p class="right_word">1.塔塔流浪球<br>2.塔塔时空机<br>3.塔塔实验室<br>4.塔塔欢乐田<br>5.塔塔乐宠</p>
              </div>
            </div>
            <div class="row right_content">
              <div class="col-md-3">
                <img src="../assets/images/塔塔力点亮.png">
              </div>
              <div class="col-md-9">
                <p class="right_title">塔塔力</p>
                <p class="right_word">1.爱心力<br>2.贝塔力</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="using_scene">
      <div class="container">
        <p class="title">使用场景</p>
        <div class="row">
          <div class="col-md-4 left">
            <img src="../assets/images/WechatIMG1.jpeg">
            <div class="content">
              <h3>AR交互</h3>
              <p>通过GPS定位，一定区域的功能生活圈内，用户可以在地图图例地点埋下自己的塔消息）；也可以在顺着 “蛛丝马迹”找到在该地埋下线索的其他“塔民”。</p>
              <a>更多</a>
            </div>
          </div>
          <div class="col-md-4 middle">
            <img src="../assets/images/WechatIMG2.jpeg">
            <div class="content">
              <h3>对话</h3>
              <p>点开后，塔消息信号球跳出其他用户的个人趣味定制形象，虚拟的趣味形象与现实的网球场背景结合，Tom发送的文字消息出现在形象旁边。</p>
              <a>更多</a>
            </div>
          </div>
          <div class="col-md-4 right">
            <img src="../assets/images/WechatIMG3.jpeg">
            <div class="content">
              <h3>论坛</h3>
              <p>此论坛主要提供共享服务，用户可以在论坛上传、下载塔塔、优化软件字体、个性化皮肤等安装包，为了网站的安全性，专业的工作组会在2小时内对内容进行审核，通过审核的共享资源才可以发布在塔塔共享上。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-6 left">
            <img src="../assets/images/logo.png">
            <button class="btn btn-success">
              <span class="glyphicon glyphicon-download-alt"></span>
              Android版
            </button>
          </div>
          <div class="col-md-6 right">
            <img src="../assets/images/logo.png">
            <button class="btn btn-primary">
              <span class="glyphicon glyphicon-download-alt"></span>
              iPhone版
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {}
}
</script>

<style scoped>
  /*首页*/
  #home {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    padding-top: 70px;
  }

  #home .lvjing {
    width: 100%;
    height: 100%;
  }

  #home img {
    width: 100%;
    display: inline-block;
  }

  /*关于我们*/
  #about_us {
    background-color: #B9EDF8;
    padding: 24px 0;
    color: #1F6ED3;
    margin-bottom: 20px;
  }

  #about_us_top {
    display: block;
    height: 20px;
  }

  #about_us .title {
    font-size: 20px;
    margin: 0 0 10px 0;
  }

  #about_us .contain {
    font-size: 16px;
    margin: 0;
  }

  /*关于app*/
  #about_app {
    background-color: #EDEDED;
  }

  #about_app .container {
    padding: 4rem 0rem;
    display: flex;
  }

  #about_app .left, #about_app .right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 130px;
  }

  #about_app .left .left_content, #about_app .right .right_content {
    height: 140px;
    display: flex;
    align-items: center;
    margin: 25px 20px;
  }

  #about_app .left .left_content img, #about_app .right .right_content img {
    width: 100%;
  }

  #about_app .middle {
    text-align: center;
  }

  #about_app .middle p {
    padding: 0 0 2rem 0;
    margin: 0;
    font-size: 24px;
  }

  #about_app .app {
    width: 75%;
  }

  #about_app .left_title {
    text-align: right;
  }

  #about_app .right_title, .left_title {
    margin: 0;
    font-size: 24px;
    line-height: 56px;
  }

  #about_app .left_word, .right_word {
    margin: 0;
    font-size: 14px;
    color: #777;
  }

  #about_app .left_word {
    padding-left: 60px;
  }

  /*使用场景*/
  #using_scene {
    padding: 50px 0;
  }

  #using_scene .title {
    font-size: 24px;
    margin: 0 0 2rem 5rem;
  }

  #using_scene .container .row {
    display: flex;
    justify-content: space-around;
  }

  #using_scene .left img, #using_scene .middle img, #using_scene .right img {
    width: 88%;
  }

  #using_scene .left, #using_scene .middle, #using_scene .right {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #using_scene .left .content, #using_scene .middle .content, #using_scene .right .content {
    width: 88%;
    height: 100%;
    padding: 1rem 0;
    border: 1px solid #EDEDED;
    position: relative;
  }

  #using_scene .left .content h3, #using_scene .middle .content h3, #using_scene .right .content h3 {
    font-size: 14px;
    color: #FF7043;
    padding: 0 1rem;
  }

  #using_scene .left .content p, #using_scene .middle .content p, #using_scene .right .content p {
    font-size: 13px;
    color: #777777;
    padding: 0 1rem;
  }

  #using_scene .left .content a, #using_scene .middle .content a {
    font-size: 13px;
    color: #FF7043;
    float: right;
    padding: 5px 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  #download {
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    padding: 4rem;
  }

  #download .container .row {
    margin: 0 auto;
  }

  #download .left, #download .right {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  #download .left {
    float: left;
  }

  #download .right {
    float: right;
  }

  #download .left img, #download .right img {
    width: 86px;
    height: 108px;
    margin-right: 2rem;
  }

</style>
