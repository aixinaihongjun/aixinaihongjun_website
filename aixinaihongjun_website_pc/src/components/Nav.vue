<template>
  <div class="nav-components">
    <header
      id="site_header"
      class="header colomn"
      :class="{ 'mobile-menu-hide': mobile_menu_hide_default_state }"
    >
      <ul class="main-menu">
        <li
          v-for="nav in navs"
          :key="nav.title"
          @click="changeActive(nav), mobileNavOpen()"
          :class="{ active: nav.isActive }"
        >
          <router-link :to="nav.path">
            <span class="menu-icon iconfont" v-html="nav.icon"></span>
            <span class="link-text">{{ nav.title }}</span>
          </router-link>
        </li>
      </ul>
      <div class="nav-right">
        <div class="header-content">
          <div class="header-photo">
            <img src="../assets/images/main_photo.jpg" alt="Alex Smith" />
          </div>
          <div class="header-titles">
            <h2>Alex Smith</h2>
            <h4>Web Designer</h4>
          </div>
        </div>

        <div class="social-links">
          <ul>
            <li>
              <a href="#"><span class="iconfont">&#xe6b2;</span></a>
            </li>
            <li>
              <a href="#"><span class="iconfont">&#xe916;</span></a>
            </li>
            <li>
              <a href="#"><span class="iconfont">&#xe63e;</span></a>
            </li>
          </ul>
        </div>

        <div class="header-buttons" v-if="!$store.state.userInfo.isLogin">
          <a href="#" class="btn btn-primary" @click="mobileNavOpen(), toLogin()">登录</a>&nbsp;
          <a href="#" class="btn btn-primary" @click="mobileNavOpen(), toRegister()"
            >注册</a
          >
        </div>

        <div class="wrapper" v-else>
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
            alt=""
          />&nbsp; 你好，{{ $store.state.userInfo.username }}&nbsp;&nbsp;
          <button class="btn btn-primary" @click="exit">退出登录</button>
        </div>

        <!-- <div class="copyrights">© 2020 All rights reserved.</div> -->
      </div>
    </header>
    <!-- Mobile Navigation -->
    <div
      class="menu-toggle"
      :class="{ open: open_default_state }"
      @click="mobileNavOpen()"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- End Mobile Navigation -->
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      mobile_menu_hide_default_state: true,
      open_default_state: false,
      navs: [
        { title: "Home", path: "/", icon: "&#xe603;", isActive: false },
        { title: "About Me", path: "/about", icon: "&#xe60d;", isActive: false },
        { title: "Resume", path: "/resume", icon: "&#xe7cf;", isActive: false },
        { title: "Portfolio", path: "/portfolio", icon: "&#xe65f;", isActive: false },
        { title: "Blog", path: "/blog", icon: "&#xe746;", isActive: false },
        { title: "Contact", path: "/contact", icon: "&#xe64f;", isActive: false },
      ],
    };
  },
  methods: {
    changeActive(nav) {
      this.navs.forEach((item) => {
        item.isActive = false;
      });
      nav.isActive = true;
    },
    mobileNavOpen() {
      this.mobile_menu_hide_default_state = !this.mobile_menu_hide_default_state;
      this.open_default_state = !this.open_default_state;
    },
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    },
    exit() {
      this.$store.commit("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.colomn {
  /* width: 416px !important; */
  display: flex !important;
  box-sizing: border-box;
  /* z-index: 999; */
}
.nav-right {
  width: 330px;
  float: right;
  padding: 65px 0 45px;
  /* background: #d5d5d5; */
}
ul.main-menu li.active a {
  color: #04b4e0 !important;
}
@media only screen and (min-width: 1300px) {
  .nav-right {
    width: 420px;
    /* float: right; */
    /* padding: 65px 30px 45px; */
  }
}
.wrapper {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  button {
    margin: 0;
  }
}
</style>
