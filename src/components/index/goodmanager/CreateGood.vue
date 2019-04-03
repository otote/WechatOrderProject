<template>
  <div class="create_good">
    <el-form ref="form" :model="goodForm" label-width="80px">
      <el-form-item label="菜名">
        <el-input v-model="goodForm.name"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="goodForm.price"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="goodForm.sortId" placeholder="请选择商品分类">
          <el-option label="分类1" value="1"></el-option>
          <el-option label="分类2" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架">
        <el-select v-model="goodForm.status" placeholder="请选择是否上架">
          <el-option label="上架" value="1"></el-option>
          <el-option label="下架" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="goodForm.goodDesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
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
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
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
</style>
