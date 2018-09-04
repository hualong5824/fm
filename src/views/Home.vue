<template>
    <el-container>
  <el-header>
    <el-row>
    <el-col :span="4">
      <img src="@/assets/logo.png" alt="">
    </el-col>
    <el-col class="midlle" :span="19">
      <span>电商后端管理系统</span>
    </el-col>
    <el-col :span="1">
      <a href="#" class="logout" @click.prevent="handleLogout">退出</a>
    </el-col>
  </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px">
         <el-menu
      style="height:100%"
      default-active="1-1"
      unique-opened=true
      router=true>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/users" class="el-icon-menu">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/roles" class="el-icon-tickets">角色列表</el-menu-item>
          <el-menu-item index="/rights" class="el-icon-sort">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" class="el-icon-star-on">商品列表</el-menu-item>
          <el-menu-item index="3-2" class="el-icon-picture">分类参数</el-menu-item>
          <el-menu-item index="3-3" class="el-icon-edit-outline">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  beforeCreate() {
    const token=sessionStorage.getItem('token')
   //判断是否能够获取查询到token
   if(!token){
    //如果不存在。认为没有登录
    this.$message.warning('请先登录')
    this.$router.push('/login')
    }
  },
 methods: {
      handleLogout() {
        this.$confirm('您确定要退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        sessionStorage.clear()
        this.$message.warning('退出登录成功')
        this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    }

}
</script>
<style>
body{
    background: url(../assets/1534215070515.jpg) no-repeat;
    background-size: cover;
}

.el-container{
  height: 100%;
}
.midlle{
text-align: center;
line-height: 60px;
font-size: 24px;
color: #E9EEF3;
}
.logout{
  text-decoration: none;
  color: orchid;
  line-height: 60px;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  

</style>