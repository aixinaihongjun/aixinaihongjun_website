<template>
  <div class="register">
    <section data-id="register" class="animated-section no_padding">
      <div
        class="row d-flex align-items-center justify-content-center register_view"
        id="table"
      >
        <div class="col-md-4">
          <div class="form-register">
            <input
              type="text"
              class="form-control"
              placeholder="用户名"
              v-model="username"
            />
          </div>
          <div class="form-register">
            <input
              type="password"
              class="form-control"
              placeholder="密码"
              v-model="password"
            />
          </div>
          <div class="form-register">
            <input
              type="password"
              class="form-control"
              placeholder="确认密码"
              v-model="confirm_password"
            />
          </div>

          <div class="form-register">
            <input
              type="button"
              value="注册"
              class="btn btn-primary py-2 px-3"
              @click="register()"
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
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    register() {
      if (
        this.username != "" &&
        this.password != "" &&
        this.confirm_password != "" &&
        this.password == this.confirm_password
      ) {
        http
          .post("/register", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              alert("注册成功!");
              this.$router.push("/login");
            } else {
              alert("用户名已存在，可直接登录！");
              this.$router.push("/login");
            }
          });
      } else if (this.password != this.confirm_password) {
        alert("密码和确认密码不一致，请重新输入！");
      } else {
        alert("注册中任意一项不能为空！");
      }
    },
  },
};
</script>

<style>
.form-register {
  margin: 0 0 21.5px;
}
.register_view {
  width: 100%;
  height: 100%;
}
</style>
