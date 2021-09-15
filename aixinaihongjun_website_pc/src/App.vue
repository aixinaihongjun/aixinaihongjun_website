<template>
  <div id="app">
    <div class="page">
      <div class="page-content">
        <Nav></Nav>
        <div class="content-area">
          <div class="animated-sections">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  //===========================下面是解决刷新页面丢失vuex数据
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store")))
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #04b4e0;
    }
  }
}
</style>
