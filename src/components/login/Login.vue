<template class="login_template">
  <div id="login-page" class="login_page">
    <el-form class="login_form">
      <el-form-item>
         <el-input type="text" class="username" placeholder="用户名" v-model="userName"></el-input>
      </el-form-item>
      <el-form-item>
          <el-input type="password" class="password" placeholder="密码" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      isBtnLoading: false
    }
  },
  mounted () {
    var clientHight = window.innerHeight
    document.getElementById('login-page').style.height = clientHight + 'px'
  },
  created () {
    if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
      this.userName = JSON.parse(localStorage.getItem('user')).userName
      this.password = JSON.parse(localStorage.getItem('user')).password
    }
  },
  computed: {
    btnText () {
      if (this.isBtnLoading) return '登录中...'
      return '登录'
    }
  },
  methods: {
    login () {
      if (!this.userName) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      this.$router.push({path: '/index/index'})
    }
  }
}
</script>
<style>
  .login_page{
    width: 100%;
    height: 100%;
    background: url("../../assets/background.png");
    background-size: 100%;
    left: 0px;
    top: 0px;
  }

  .login_form {
    display: flex;
    justify-content: center;
    padding-top: 20%;
    padding-left: 10%;
    padding-right: 10%;
  }

  .login_btn {
    margin-left: 20px;
    width: 100px;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099, #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }

  .username{
    margin-left: 20px;
    width: 200px;
  }

  .password{
    margin-left: 20px;
    width: 200px;
  }
</style>
