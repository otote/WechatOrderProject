<template>
  <div>
  <el-card shadow="hover" v-for="o in order" :key="o.id" class="order_card">
    <div slot="header" class="order_info">
      <span>{{'订单号： ' + o.orderNo}}</span>
      <span>{{'客人名称： ' + o.userName}}</span>
      <span>{{'数量： ' + o.total}}</span>
      <span>{{'总价： ' + o.totalPrice}}</span>
      <span>{{'下单时间： ' + o.orderTime}}</span>
      <span>{{'状态： ' + o.status}}</span>
    </div>
    <div>
      <el-table :data="o.orderDetails" border style="width: 100%">
        <el-table-column prop="orderNo" label="订单号" width="180"></el-table-column>
        <el-table-column prop="goodName" label="菜品名" width="180"></el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column prop="totalPrice" label="总价"></el-table-column>
      </el-table>
    </div>
  </el-card>
    <el-pagination @current-change="changePage" class="order_pagination" background layout="prev, pager, next" :total=page.total :page-size=page.pageSize >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'OrderManager',
  data () {
    return {
      order: {},
      page: {
        total: 20,
        pageSize: 5
      }
    }
  },
  methods: {
    changePage (currPage) {
      console.log(currPage)
    }
  },
  created () {
    this.order = JSON.parse('[\n' +
      '  {\n' +
      '    "id": 1,\n' +
      '    "orderNo": 23534354355,\n' +
      '    "userName": "test",\n' +
      '    "total": 6,\n' +
      '    "totalPrice": 113,\n' +
      '    "orderTime": "2019-02-18 13:59:15",\n' +
      '    "status": "payed",\n' +
      '    "orderDetails": [\n' +
      '      {\n' +
      '        "orderNo": 23534354355,\n' +
      '        "goodName": "kfc全家桶",\n' +
      '        "num": 1,\n' +
      '        "price": 13,\n' +
      '        "totalPrice": 13\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 23534354355,\n' +
      '        "goodName": "麦当劳全家桶",\n' +
      '        "num": 2,\n' +
      '        "price": 15,\n' +
      '        "totalPrice": 30\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 23534354355,\n' +
      '        "goodName": "金拱门全家桶",\n' +
      '        "num": 3,\n' +
      '        "price": 20,\n' +
      '        "totalPrice": 60\n' +
      '      }\n' +
      '    ]\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 2,\n' +
      '    "orderNo": 6575767365,\n' +
      '    "userName": "test",\n' +
      '    "total": 6,\n' +
      '    "totalPrice": 113,\n' +
      '    "orderTime": "2019-02-18 13:59:15",\n' +
      '    "status": "payed",\n' +
      '    "orderDetails": [\n' +
      '      {\n' +
      '        "orderNo": 6575767365,\n' +
      '        "goodName": "kfc全家桶",\n' +
      '        "num": 1,\n' +
      '        "price": 13,\n' +
      '        "totalPrice": 13\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 6575767365,\n' +
      '        "goodName": "麦当劳全家桶",\n' +
      '        "num": 2,\n' +
      '        "price": 15,\n' +
      '        "totalPrice": 30\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 6575767365,\n' +
      '        "goodName": "金拱门全家桶",\n' +
      '        "num": 3,\n' +
      '        "price": 20,\n' +
      '        "totalPrice": 60\n' +
      '      }\n' +
      '    ]\n' +
      '  },\n' +
      '  {\n' +
      '    "id": 3,\n' +
      '    "orderNo": 875857846,\n' +
      '    "userName": "test",\n' +
      '    "total": 6,\n' +
      '    "totalPrice": 113,\n' +
      '    "orderTime": "2019-02-18 13:59:15",\n' +
      '    "status": "payed",\n' +
      '    "orderDetails": [\n' +
      '      {\n' +
      '        "orderNo": 875857846,\n' +
      '        "goodName": "kfc全家桶",\n' +
      '        "num": 1,\n' +
      '        "price": 13,\n' +
      '        "totalPrice": 13\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 875857846,\n' +
      '        "goodName": "麦当劳全家桶",\n' +
      '        "num": 2,\n' +
      '        "price": 15,\n' +
      '        "totalPrice": 30\n' +
      '      },\n' +
      '      {\n' +
      '        "orderNo": 875857846,\n' +
      '        "goodName": "金拱门全家桶",\n' +
      '        "num": 3,\n' +
      '        "price": 20,\n' +
      '        "totalPrice": 60\n' +
      '      }\n' +
      '    ]\n' +
      '  }\n' +
      ']\n')
  }
}
</script>

<style scoped>
  .order_card{
    display: block;
    text-align: left;
    margin-top: 20px;
  }

  .order_info{
    display: flex;
    color: #303133;
  }

  .order_info span{
    color:red;
  }

  .order_info span{
    margin-right: 100px;
  }

  .order_pagination{
    margin-top: 20px;
    float: right;
  }

</style>
