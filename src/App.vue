<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="index.html" class="logoname">TATA</a>
          <img src="./assets/images/logo.png" class="navbar-brand" alt="logo">
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/Home">首页</router-link></li>
            <li><router-link to="/Forum/Post">论坛</router-link></li>
            <li><a>登录</a></li>
            <li><a href="#download">下载</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!--内容区域-->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
$(function () {
  console.log(123)
})
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '2'
    }
  },
  methods: {}
}
</script>
<style scoped>
  #app {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }

  /*导航*/
  .navbar-default {
    background-color: #fff;
    border: none;
    box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.25);
  }

  .navbar-default .logoname {
    font-size: 24px;
    color: #101010;
    height: 70px;
    line-height: 70px;
  }

  .navbar-default .navbar-header {
    height: 70px;
    line-height: 70px;
  }

  .navbar-default .navbar-header > img {
    width: 70px;
    height: 70px;
  }

  .navbar-default .navbar-nav > li > a {
    font-size: 18px;
    color: #101010;
    height: 70px;
    line-height: 35px;
  }

  .navbar-toggle {
    margin-top: 17px;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #101010;
  }

</style>
