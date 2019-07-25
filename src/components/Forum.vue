<template>
  <div>
    <section id="head">
      <div class="container">
        <div class="row">
          <div class="col-md-8 left">
            <h2>最新最好玩的趣味AR社交平台</h2>
            <el-input placeholder="请输入要搜索的内容" v-model="searchContent">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="col-md-2 right">
            <img src="../assets/images/luntan1.png" class="right_first" />
          </div>
          <div class="col-md-2 right">
            <img src="../assets/images/luntan2.png" class="right_second" />
          </div>
        </div>
      </div>
    </section>
    <section id="nav">
      <div class="container">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/Forum/fabu">
              <i class="glyphicon glyphicon-pencil"></i>发布
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="glyphicon glyphicon-envelope"></i>消息
            </a>
          </li>
          <li>
            <a href="#">
              <i class="glyphicon glyphicon-user"></i>个人中心
            </a>
          </li>
        </ul>
      </div>
    </section>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Forum',
  data () {
    return {
      searchContent: ''
    }
  }
}
</script>

<style scoped>
/*头部*/
#head {
  margin: 0 auto;
  width: 100%;
  padding-top: 70px;
  height: 220px;
  background-color: #b9edf8;
  overflow: hidden;
}
#head .container {
  height: 100%;
}
#head .container .row {
  height: 100%;
}
#head .left {
  padding: 10px;
  height: 100%;
}
#head .left h2 {
  margin-bottom: 20px;
}
#head .right {
  height: 100%;
  text-align: right;
}
#head .right .right_first {
  height: 80%;
}
#head .right .right_second {
  height: 100%;
}
/*头部*/
#nav {
  background-color: #53c4f4;
}
#nav .nav > li > a:focus,
#nav .nav > li > a:hover {
  text-decoration: none;
  background-color: #53c4f4;
}
#nav li a {
  color: #fff;
  font-size: 16px;
}
#nav li a i {
  padding: 5px;
}
</style>
