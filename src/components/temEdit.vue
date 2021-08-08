<!-- 编辑文章 -->
<template>
    <div class="tEditbox">
        <header></header>
      <div>
        <el-form ref="ruleForm" status-icon :model="ruleForm" :rules="rules" label-width="100px">
          <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <!-- <div>
              <span class="leftTitle">性别</span>
              
                    <el-radio class="radio" v-model="wwww" label="0">男</el-radio>
                    <el-radio class="radio" v-model="wwww" label="1">女</el-radio>
            
          </div> -->
         <div id="apppp"> 
              <span class="leftTitle" prop="labele">文章标签</span>
              <input type="radio"  value="日记" v-model="labele" name="name"><label for="日记">日记</label> 
              <input type="radio"  value="技术" v-model="labele" name="name"><label for="技术">技术</label> 
              <input type="radio"  value="美食" v-model="labele" name="name"><label for="美食">美食</label>
              <input type="radio"  value="感悟" v-model="labele" name="name"><label for="感悟">感悟</label>
              <p>已选：{{labele}}</p>
         </div>
          <!-- <div id="checkboxes">
              <span>美食</span>
              <input type="checkbox" value="美食" v-model="categories">
              <span>技术</span>
              <input type="checkbox" value="技术" v-model="categories">
              <span>生活</span>
              <input type="checkbox" value="生活" v-model="categories">
              <span>感悟</span>
              <input type="checkbox" value="感悟" v-model="categories">
          </div> -->
          <el-form-item label="内容" prop="content">
             <mavon-editor v-model="ruleForm.content" style="min-height: 500px"></mavon-editor>
          </el-form-item>
          <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm')">发布文章</el-button>
             <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
import { postArticle } from '../utils/server.js'
//import {setEdit,getArtLikeCollect,initDate} from '../utils/server.js'
    export default {
        data() { //选项 / 数据
            return {
                ruleForm: {
                     title: '',
                     content: '',
                     labele: '',
                    //  categories:[]
                },
                rules: {
                 title: [
                         {required: true, message: '请输入标题', trigger: 'blur'},
                         //{min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
                    ],
                 content: [
                         { required: true,message: '请输入内容', trigger: 'change' }
                    ],
                }

            }
        },

        methods: { //事件处理器
           submitForm(formName) {
            //    var that = this;
            //    if(that.content){
            //        _this.$alert('发布成功')
            //        setEdit(_that.aId,function(msg){
                       
            //        })

            //    }else{
            //         _this.$alert('不能为空')
            //         return false;
            //    }
            //   this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         const _this=this;
            //              this.$axios.get('/article/edit', this.ruleForm).then(res => {//请求成功
            //                    _this.$alert('操作成功', '提示', {
            //                        confirmButtonText: '确定',
            //                    callback: () => {//发送成功，切换界面
            //                         _this.$router.push("/Home")
            //                     }
            //                 });
            //             })
            //     } else {
            //          console.log('error submit!!');
            //          return false;
            //     }
            //  })
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  //console.log(labele)
                  postArticle(this.ruleForm.title,this.ruleForm.content,this.ruleForm.labele);
                  //postArticle(this.ruleForm.title,this.ruleForm.content);
                  this.$router.push({ path: '/Home' });
                }
             })
            },
            resetForm(formName) {
               this.$refs[formName].resetFields();
            },


        },
        watch: {

         },
        components: { //定义组件

        },
        created() { //生命周期函数
           const blogId = this.$route.params.aId
           const _this = this
           if(blogId) {
               this.$axios.get('/DetailShare/' + blogId).then((res) => {
                   const blog = res.data.data
                    _this.ruleForm.id = blog.artId
                    _this.ruleForm.title = blog.title
                    _this.ruleForm.content = blog.content
                    //_this.ruleForm.categories = blog.categories
                });
            }

        }
    }
</script>

<style>
    .tEditbox{
        text-align: center;
    }
</style>