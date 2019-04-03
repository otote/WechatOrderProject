<template>
  <div class="sort_div">
    <el-tag :key="tag.id" v-for="tag in sortTags" closable :disable-transitions="false" @close="handleClose(tag)"> {{tag.name}}</el-tag>
    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="medium " @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
    <el-button v-else class="button-new-tag" size="medium" @click="showInput">+ 新增分类</el-button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SortManager',
  data () {
    return {
      sortTags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      // 删除分类
      Vue.axios.delete(`/sort/${tag.id}`).then((res) => {
        if (res.data.statusCode === '200') {
          this.$message.success('删除成功！')
          this.sortTags.splice(this.sortTags.indexOf(tag), 1)
        } else {
          this.$message.error(res.data.errorMessage)
        }
      })
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        // 发送请求添加分类
        Vue.axios.post('/sort', {'name': inputValue}).then((res) => {
          if (res.data.statusCode === '200') {
            this.$message.success('添加成功！')
            let newSort = {'id': res.data.data, 'name': inputValue}
            this.sortTags.push(newSort)
          } else {
            this.$message.error('添加失败！')
          }
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  created () {
    Vue.axios.get('/sort').then((res) => {
      this.sortTags = res.data.data
    })
  }
}
</script>

<style scoped>
  .sort_div{
    margin-top: 100px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
