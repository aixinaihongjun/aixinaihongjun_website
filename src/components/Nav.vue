<template>
  <div class="nav-components">
    <header id="site_header" class="header mobile-menu-hide">
      <div class="header-content">
        <div class="header-photo">
          <img src="../assets/images/main_photo.jpg" alt="Alex Smith" />
        </div>
        <div class="header-titles">
          <h2>Alex Smith</h2>
          <h4>Web Designer</h4>
        </div>
      </div>

      <ul class="main-menu">
        <li class="active">
          <router-link to="/">
            <span class="menu-icon iconfont">&#xe603;</span>
            <span class="link-text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span class="menu-icon iconfont">&#xe60d;</span>
            <span class="link-text">About Me</span>
          </router-link>
        </li>
        <li>
          <router-link to="/resume">
            <span class="menu-icon iconfont">&#xe7cf;</span>
            <span class="link-text">Resume</span>
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio">
            <span class="menu-icon iconfont">&#xe65f;</span>
            <span class="link-text">Portfolio</span>
          </router-link>
        </li>
        <li>
          <router-link to="/blog">
            <span class="menu-icon iconfont">&#xe746;</span>
            <span class="link-text">Blog</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <span class="menu-icon iconfont">&#xe675;</span>
            <span class="link-text">Contact</span>
          </router-link>
        </li>
      </ul>

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

      <div class="copyrights">© 2020 All rights reserved.</div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style></style>
