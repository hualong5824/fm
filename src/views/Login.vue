<template>
    <div class="login-wrap">
    <el-form
    class="login-form"
    label-position="top"
    label-width="80px"
    :model="formData">
    <div class="login-div-h2">
          <h2>登录界面</h2>
    </div>
  <el-form-item label="账号:">
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-form-item  label="密码:" class="login-form-password">
    <el-input v-model="formData.password" @keyup.enter.native="handleLogin" type="password"></el-input>
  </el-form-item>
   <el-form-item class="login-form-button">
    <el-button type="primary" @click="handleLogin">立即登录</el-button>
  </el-form-item>
</el-form>
</div>

</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      if (this.formData.username.trim().length === 0) {
        this.$message.error('不能为空')
        return
      }
      this.$http
        .post('login', this.formData)
        .then((result) => {
          console.log(result)
          const { meta: { msg, status } } = result.data
          if (status === 200) {
            this.$message.success(msg)
            sessionStorage.setItem('token', result.data.data.token)
            this.$router.push('/')
          } else {
            this.$message.error(msg)
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background: url(../assets/1534215070515.jpg) no-repeat;
    background-size: cover;
}
.login-wrap{
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
}
.login-form{
    width: 450px;
    border-radius:25px 25px 25px 25px;
    box-shadow:0px 18px 25px  #000040;
}
.login-div-h2{
    margin: 0 auto;
    width: 450px;
    height: 30px;
    box-shadow:0px 0px 2px #000040;
    text-align: center;
    border-radius:25px 25px 0 0;
}
h2{
    color:#000040;
}
.el-form--label-top .el-form-item__label{
    color: #000040;
    font-size: 20px;
    float: left;
}
.el-form-item{
    padding:88px 50px 9px 96px;
    margin-bottom: 0;
}
.el-input__inner{
    height: 30px;
}
.el-input{
    width: 200px;
}
.el-form{
    height: 350px;
}
.login-form-password{
    padding-top: 0;
}
.login-form-button{
    padding-top: 0px;
    padding: 0;
}
.el-button{
    width: 450px;
    box-shadow:0px 1px 0px#000040;
    text-align: center;
    background:rgba(0, 0, 0, 0);
    border: 0;
    font-size: 23px;
}

</style>
