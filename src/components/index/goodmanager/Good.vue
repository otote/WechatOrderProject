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
          <el-button type="text" size="small">编辑</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'Good',
  data () {
    return {
      good: [],
      deleteGoodDialogVisible: false,
      deleteGoodId: -1
    }
  },
  methods: {
    showDeleteGoodDialog: function (id) {
      this.deleteGoodId = id
      this.deleteGoodDialogVisible = true
    },
    deleteGoodById: function (id) {
      console.log('删除' + id)
      this.deleteGoodDialogVisible = false
      this.$message.success('删除成功！')
      this.good = JSON.parse('[\n' +
        '  {\n' +
        '    "id": 1,\n' +
        '    "name": "ggd",\n' +
        '    "price": 123,\n' +
        '    "sortId": 2,\n' +
        '    "img": "fdsgfgfdg",\n' +
        '    "status": "上架"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 6,\n' +
        '    "name": "kukuy",\n' +
        '    "price": 78,\n' +
        '    "sortId": 2,\n' +
        '    "img": "fdsgfgfdg",\n' +
        '    "status": "上架"\n' +
        '  }\n' +
        ']\n')
    }
  },
  created () {
    this.good = JSON.parse('[\n' +
      '  {\n' +
      '    "id": 1,\n' +
      '    "name": "ggd",\n' +
      '    "price": 123,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "上架"\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 2,\n' +
      '    "name": "dfgsf",\n' +
      '    "price": 45,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "下架"\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 3,\n' +
      '    "name": "juuyk",\n' +
      '    "price": 67,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "上架"\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 4,\n' +
      '    "name": "kuyu",\n' +
      '    "price": 67,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "上架"\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 5,\n' +
      '    "name": "kuyuy",\n' +
      '    "price": 77,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "上架"\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 6,\n' +
      '    "name": "kukuy",\n' +
      '    "price": 78,\n' +
      '    "sortId": 2,\n' +
      '    "img": "fdsgfgfdg",\n' +
      '    "status": "上架"\n' +
      '  }\n' +
      ']\n')
  }
}
</script>

<style scoped>

</style>
