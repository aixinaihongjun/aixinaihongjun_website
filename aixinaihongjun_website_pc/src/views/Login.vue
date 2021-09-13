<template>
  <div class="login">
    <section data-id="login" class="animated-section no_padding">
      <div
        class="row d-flex align-items-center justify-content-center login_view"
        id="table"
      >
        <div class="col-md-4">
          <div class="form-login">
            <input
              type="text"
              class="form-control"
              placeholder="用户名"
              v-model="username"
            />
          </div>
          <div class="form-login">
            <input
              type="password"
              class="form-control"
              placeholder="密码"
              v-model="password"
            />
          </div>

          <div class="form-login">
            <input
              type="button"
              value="登录"
              class="btn btn-primary py-2 px-3"
              @click="login()"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/utils/http.js";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        http
          .post("/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            let { state, userInfo } = res.data;
            if (state == "success") {
              alert("登录成功!");
              this.$store.commit("login", userInfo);
              this.$router.push("/");
            } else {
              alert("用户名或密码有误，请重新登录!");
            }
          });
      } else {
        alert("登录中任意一项不能为空！");
      }
    },
  },
};
</script>

<style>
.form-login {
  margin: 0 0 21.5px;
}
.login_view {
  width: 100%;
  height: 100%;
}
</style>
