<template>
  <div>
    <section id="content">
      <div class="container">
        <el-container>
          <el-aside width="150px">
            <div class="top">
              <div class="nav">
                <div class="kong"></div>
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="1">
                    <span slot="title">热门话题</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <span slot="title">最新内容</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <span slot="title">关注内容</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
            <div class="down">
              <el-row>
                <el-col :span="24">
                  <h5>APP频道</h5>
                  <el-divider></el-divider>
                  <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <el-menu-item index="1">
                      <span slot="title">综合讨论区</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                      <span slot="title">皮肤讨论区</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                      <span slot="title">BUG讨论区</span>
                    </el-menu-item>
                  </el-menu>
                  <h5>技术频道</h5>
                  <el-divider></el-divider>
                  <el-menu
                    default-active="4"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <el-menu-item index="4">
                      <span slot="title">5G</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                      <span slot="title">人工智能</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                      <span slot="title">AR</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                      <span slot="title">其他</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </div>
          </el-aside>
          <el-container>
            <el-main>
              <div>
                <el-carousel height="190px">
                  <el-carousel-item v-for="item in lunbosrc" :key="item">
                    <img :src=" item.src " />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="list">
                <ul class="list-group">
                  <li class="list-group-item" v-for="item in items">
                    <label class="left">
                      <img src="../../assets/images/reshou.png" />
                      <a>{{item.title}}</a>
                    </label>
                    <i class="glyphicon glyphicon-user"></i>
                    <span class="user">{{item.user}}</span>
                    <i class="glyphicon glyphicon-envelope"></i>
                    <span class="comment_num">{{item.comment}}</span>
                  </li>
                </ul>
              </div>
              <el-footer>
                <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
              </el-footer>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Post",
  data() {
    return {
      lunbosrc: [
        { src: require("../../assets/images/lunbo1.jpg") },
        { src: require("../../assets/images/lunbo2.jpg") }
      ],
      items: [
        {
          title:
            "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？55555555555555",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        },
        {
          title: "一起去图书馆学习，一起备考，有没有小伙伴一起鸭？",
          user: "今天我复习了鸭",
          comment: "113"
        }
      ]
    };
  }
};
</script>
<style scoped>
#content {
  background-color: #fdfdfd;
}
#content .el-aside {
  overflow: visible;
  padding: 40px 0;
}
#content .nav {
  float: none;
  border: 1px solid rgba(187, 187, 187, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
#content .nav > li {
  float: none;
  text-align: center;
  color: #101010;
  font-size: 20px;
}
#content .nav .kong {
  height: 40px;
  background-color: #53c4f4;
}
#content .down .el-divider {
  margin: 15px 0;
}
#content .down .el-menu {
  border-right: none;
}
#content .down h5 {
  margin-top: 50px;
}
#content .el-menu-item {
  font-size: 20px;
}
#content .container .el-main {
  margin: 20px 0 0 20px;
}
#content .list {
  margin: 30px;
}
#content .list ul li {
  border: none;
}
#content .list .left {
  width: 75%;
}
#content .list .left img {
  width: 38px;
}
#content .list .left a {
  font-size: 20px;
  vertical-align: middle;
  color: #61a7f4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 88%;
  padding-left: 5px;
  cursor: pointer;
  text-decoration: none;
}
#content .list .list-group i,
#content .list .list-group span {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #bbb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#content .list .list-group span {
  padding-left: 5px;
}
#content .user {
  width: 15%;
}
#content .el-footer {
  text-align: center;
}
</style>

