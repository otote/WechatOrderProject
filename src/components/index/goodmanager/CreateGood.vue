<template>
  <div class="create_good">
    <el-form ref="form" :model="goodForm" label-width="80px">
      <el-form-item label="图片">
        <el-upload v-loading="uploadLoading"  class="avatar-uploader" action="" :http-request="uploadJpg" :show-file-list="false" :before-upload="beforeAvatarUpload">
          <img v-if="goodForm.img" :src="goodForm.img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="菜名">
        <el-input v-model="goodForm.name"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="goodForm.price"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="goodForm.sortId" placeholder="请选择商品分类">
          <el-option :key="sort.id" v-for="sort in sorts" v-bind:label="sort.name" v-bind:value="sort.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架">
        <el-select v-model="goodForm.status" placeholder="请选择是否上架">
          <el-option label="上架" value="AVAILABLE"></el-option>
          <el-option label="下架" value="UNAVAILABLE"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="goodForm.goodDesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'CreateGood',
  data () {
    return {
      goodForm: {
        name: '',
        price: '',
        sortId: '',
        img: '',
        status: '',
        goodDesc: ''
      },
      uploadLoading: false,
      sorts: []
    }
  },
  methods: {
    onSubmit () {
      console.log(this.goodForm)
      Vue.axios.post('/good', this.goodForm).then((res) => {
        if (res.data.statusCode === '200') {
          alert('创建成功')
          this.goodForm = {
            name: '',
            price: '',
            sortId: '',
            img: '',
            status: '',
            goodDesc: ''
          }
        } else {
          alert('创建失败')
        }
      }).catch((reason) => {
        console.log(reason)
        alert('创建失败')
      })
    },
    uploadJpg (file) {
      this.uploadLoading = true
      let data = new FormData()
      data.append('file', file.file)
      Vue.axios.post(this.UPLOAD_JPG_URL, data).then((res) => {
        this.goodForm.img = res.data.data
        this.uploadLoading = false
      }).catch(reason => {
        console.log(reason)
        this.uploadLoading = false
      })
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  created () {
    // 获取分类
    Vue.axios.get('/sort').then((res) => {
      this.sorts = res.data.data
    })
  }
}
</script>

<style scoped>
.create_good{
  position: fixed;
  margin: 30%;
  margin-top: 0px;
  width: 30%;
  text-align: left;
}

.avatar-uploader .el-upload {
  border: 1px dashed #378bd9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
</style>
