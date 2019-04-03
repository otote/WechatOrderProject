<template>
  <div>
    <el-table :data="goods" border style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="菜名"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="sortId" label="分类">
        <template slot-scope="scope">
          <span>{{sortsByKey[scope.row.sortId]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.status === 'AVAILABLE' ? '上架' : '下架'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160px">
        <template slot-scope="scope">
          <el-button @click="showEditorGoodInfoDialog(scope.row)" type="text" size="small">编辑</el-button>
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

    <el-dialog title="编辑" :visible.sync="editorGoodInfoDialogVisible" width="40%">
      <EditorGoodInfo v-if="editorGoodInfoDialogVisible" v-bind:editorGoodInfo="editorGoodInfo"></EditorGoodInfo>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import EditorGoodInfo from '@/components/index/goodmanager/EditorGoodInfo'

export default {
  name: 'Good',
  components: {EditorGoodInfo},
  data () {
    return {
      goods: [],
      deleteGoodDialogVisible: false,
      editorGoodInfoDialogVisible: false,
      deleteGoodId: -1,
      editorGoodInfo: {},
      sortsByKey: []
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
              this.goods = res.data.data
            }
          })
        } else {
          this.deleteGoodDialogVisible = false
          this.$message.success('删除失败！')
        }
      })
    },
    showEditorGoodInfoDialog: function (good) {
      this.editorGoodInfo = good
      this.editorGoodInfoDialogVisible = true
    }
  },
  created () {
    Vue.axios.get('/good').then((res) => {
      if (res.data.statusCode === '200') {
        this.goods = res.data.data
      }
    })

    Vue.axios.get('/sort').then((res) => {
      let sorts = res.data.data
      let sortsByKey = []
      sorts.forEach((sort) => {
        sortsByKey[sort.id] = sort.name
      })
      this.sortsByKey = sortsByKey
    })
  }
}
</script>

<style scoped>

</style>
