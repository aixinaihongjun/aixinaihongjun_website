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
          @click="selectNav(), mobileNavOpen()"
          :class="isSelect === nav.title ? 'active' : ''"
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
          <a href="#" class="btn btn-primary" @click="mobileNavOpen(), toLogin()">登录</a
          >&nbsp;
          <a href="#" class="btn btn-primary" @click="mobileNavOpen(), toRegister()"
            >注册</a
          >
        </div>

        <div class="wrapper" v-else>
          <img src="../assets/images/portrait.gif" alt="" />&nbsp; 你好，{{
            $store.state.userInfo.username
          }}&nbsp;&nbsp;
          <button class="btn btn-primary" @click="exit">退出登录</button>
        </div>
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
      isSelect: "Home",
      mobile_menu_hide_default_state: true,
      open_default_state: false,
      navs: [
        { title: "Home", path: "/", icon: "&#xe603;" },
        { title: "About Me", path: "/about", icon: "&#xe60d;" },
        { title: "Resume", path: "/resume", icon: "&#xe7cf;" },
        { title: "Portfolio", path: "/portfolio", icon: "&#xe65f;" },
        { title: "Blog", path: "/blog", icon: "&#xe746;" },
        { title: "Contact", path: "/contact", icon: "&#xe64f;" },
      ],
    };
  },
  mounted() {
    this.isSelect = this.$route.name;
  },
  methods: {
    selectNav() {
      this.isSelect = this.$route.name;
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
  display: flex !important;
  box-sizing: border-box;
}
.nav-right {
  width: 330px;
  float: right;
  padding: 65px 0 45px;
}
ul.main-menu li.active a {
  color: #04b4e0 !important;
}
@media only screen and (min-width: 1300px) {
  .nav-right {
    width: 420px;
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
