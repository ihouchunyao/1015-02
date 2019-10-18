<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="startLogin('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请选择密码", trigger: "change" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    startLogin() {
      this.$refs.loginForm.validate(valid => {
        // console.log(valid) //false
        if (!valid) {
          console.log("校验失败");
          this.$message({
            message: "校验失败",
            type: "error",
            duration: 800
          });
          return;
        }
        // console.log("校验成功");
        axios
          .post("http://localhost:8888/api/private/v1/login", this.loginForm)
          .then(res => {
            console.log(res);

            if (res.data.meta.status == 200) {
              this.$message({
                message: "校验成功",
                type: "success",
                duration: 800
              });
              this.$router.push("/home");
            } else {
              this.$message({
                message: "校验失败",
                type: "error",
                duration: 800
              });
            }
          });

        // if (valid) {
        //   alert("submit!");
        // } else {
        //   console.log("error submit!!");
        //   return false;
        // }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style scoped lang="less">

.el-row {
  height: 100%;
  background: #2d434c;
}

.el-form {
  background: #fff;
  border-radius: 10px;
  padding: 20px 30px;
}
</style>

