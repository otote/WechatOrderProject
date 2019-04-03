<template>
  <div>
    <el-table :data="good" border style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="菜名"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="sortId" label="分类"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作" width="160px">
        <template slot-scope="scope">
          <el-button @click="showEditorGoodInfoDialog()" type="text" size="small">编辑</el-button>
          <el-button @click="sendMsg" type="text" size="small">测试</el-button>
          <el-button @click="showDeleteGoodDialog(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="deleteGoodDialogVisible" width="30%">
      <span>确认删除?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteGoodDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteGoodById(deleteGoodId)">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="editorGoodInfoDialogVisible" width="60%">
      <EditorGoodInfo></EditorGoodInfo>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import EditorGoodInfo from '@/components/index/goodmanager/EditorGoodInfo'
import Bus from '@/components/utils/Bus'

export default {
  name: 'Good',
  components: {EditorGoodInfo},
  data () {
    return {
      good: [],
      deleteGoodDialogVisible: false,
      editorGoodInfoDialogVisible: false,
      deleteGoodId: -1
    }
  },
  methods: {
    showDeleteGoodDialog: function (id) {
      this.deleteGoodId = id
      this.deleteGoodDialogVisible = true
    },
    deleteGoodById: function (id) {
      // 删除菜品
      Vue.axios.delete(`/good/${id}`).then((res) => {
        if (res.data.statusCode === '200') {
          this.deleteGoodDialogVisible = false
          this.$message.success('删除成功！')
          // 从新获取商品
          Vue.axios.get('/good').then((res) => {
            if (res.data.statusCode === '200') {
              this.good = res.data.data
            }
          })
        } else {
          this.deleteGoodDialogVisible = false
          this.$message.success('删除失败！')
        }
      })
    },
    showEditorGoodInfoDialog: function () {
      Bus.$emit('send', '测试成功')
      this.editorGoodInfoDialogVisible = true
    },
    sendMsg: function () {
      console.log('发送中。。。。')
      // Bus.$emit('send', '测试成功')
    }
  },
  created () {
    Vue.axios.get('/good').then((res) => {
      if (res.data.statusCode === '200') {
        this.good = res.data.data
      }
    })
  }
}
</script>

<style scoped>

</style>
