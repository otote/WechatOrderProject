<template>
  <div v-loading="orderLoading">
  <el-card shadow="hover" v-for="o in order" :key="o.id" class="order_card">
    <div slot="header" class="order_info">
      <span>{{'订单号： ' + o.orderNo}}</span>
      <span>{{'客人名称： ' + o.userName}}</span>
      <span>{{'数量： ' + o.total}}</span>
      <span>{{'总价： ' + o.totalPrice}}</span>
      <span>{{'下单时间： ' + o.orderTime}}</span>
      <span>{{'取餐码： ' + o.takeFoodNo}}</span>
      <span>{{o.status === "PAY" ? "状态： 已支付" : "状态： 未支付"}}</span>
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
import Vue from 'vue'

export default {
  name: 'OrderManager',
  data () {
    return {
      order: [],
      page: {},
      // 显示正在加载
      orderLoading: false
    }
  },
  methods: {
    changePage (currPage) {
      let that = this
      that.getOrderByPage(currPage)
    },
    getOrderByPage (pageNum) {
      let that = this
      // 显示加载中
      that.orderLoading = true
      let page = {'pageNum': pageNum, 'pageSize': 5}
      // 获取订单
      Vue.axios.post('/order/page', page).then((res) => {
        that.page = res.data.page
        that.order = res.data.data
        // 取消显示加载中
        that.orderLoading = false
      }).catch(reason => {
        that.orderLoading = false
      })
    }
  },
  created () {
    let that = this
    that.getOrderByPage(1)
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
