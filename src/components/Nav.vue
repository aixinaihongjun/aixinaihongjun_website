<template>
  <div class="nav-components">
    <header id="site_header" class="header mobile-menu-hide colomn">
      <ul class="main-menu">
        <li
          v-for="nav in navs"
          :key="nav.title"
          @click="changeActive(nav)"
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
              <a href="#" target="_blank"><span class="iconfont">&#xe6b2;</span></a>
            </li>
            <li>
              <a href="#" target="_blank"><span class="iconfont">&#xe916;</span></a>
            </li>
            <li>
              <a href="#" target="_blank"><span class="iconfont">&#xe63e;</span></a>
            </li>
          </ul>
        </div>

        <div class="header-buttons">
          <a href="#" target="_blank" class="btn btn-primary">Download CV</a>
        </div>

        <!-- <div class="copyrights">© 2020 All rights reserved.</div> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
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
  },
};
</script>

<style>
.colomn {
  /* width: 416px !important; */
  display: flex !important;
  box-sizing: border-box;
  /* z-index: 999; */
}
.main-menu {
  flex: right;
  /* z-index: 999; */
  height: 100vh;
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
</style>
