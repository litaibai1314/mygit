<template>
  <div class="home">
    <el-container>
      <el-header>
        Header
        <el-button type="info" disabled class="btn">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="iscollapse?'64px':'200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#002b36"
            text-color="#fff"
            active-text-color="red"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="handel">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航二</span>
              </template>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </template>
              <el-menu-item index="4">
                <el-menu-item index="1-1" @click="handel">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iscollapse: false
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    toggleCollapse() {
      this.iscollapse = !this.iscollapse;
    },
    handel() {
      this.$router.push("/home1");
    }
  }
};
</script>

<style lang="less" scoped>
.home,
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  position: relative;
  background-color: #002b36;
  color: #fff;
  text-align: center;
  line-height: 60px;
  .btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer !important;
  }
}

.el-aside {
  background-color: #002b36;
  color: #fff;
  text-align: center;
  line-height: 200px;
  height: 100%;
  .toggle-button {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 15px;
    letter-spacing: 0.5em;
    cursor: pointer;
    color: blue;
  }
  .el-menu {
    border: 0;
  }
}
</style>
