<template>
  <div id="box">
    <div class="login_container">
      <p>{{msg}}</p>
    </div>
    <div class="login_from">
      <input type="text" placeholder="用户名" />
      <input type="password" placeholder="密码" />
      <div class="btn">
        <button @click="handelHome">提交</button>
        <button>修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "登录页面"
    };
  },
  methods: {
    handelHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
#box {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background-color: #ccc;
  .login_container {
    display: flex;
    justify-content: center;

    width: 100%;

    p {
      font-size: 25px;
      color: #eee;
    }
  }
  .login_from {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // align-items: center;
    align-content: center;
    height: 300px;
    width: 500px;
    background: #fff;
    padding: 10px;
    // text-align: center;
    margin: auto;

    input {
      width: 100%;
      height: 50px;
      color: #ccc;
      border-radius: 25px;
      box-sizing: border-box;
      padding-left: 10px;
      margin: 5px 0;
      cursor: pointer;
      border: 2px solid #bfa;
    }
    .btn {
      position: absolute;
      right: 0px;
      bottom: 0px;
      button {
        width: 50px+10px;
        height: 30px;
        border: 0;
        cursor: pointer;
        background: skyblue;
        margin-left: 5px;
      }
      button:hover {
        background: crimson;
      }
    }
  }
}
</style>
