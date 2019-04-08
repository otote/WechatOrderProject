<template>
  <div v-loading="orderLoading">
  <el-card shadow="hover" v-for="o in order" :key="o.id" class="order_card">
    <div slot="header" align="center" class="order_info">
      <span>{{'订单号： ' + o.orderNo}}</span>
      <span>{{'客人名称： ' + o.userName}}</span>
      <span>{{'数量： ' + o.total}}</span>
      <span>{{'总价： ' + o.totalPrice}}</span>
      <span>{{'下单时间： ' + o.orderTime}}</span>
      <span>{{'取餐码： ' + o.takeFoodNo}}</span>
      <span v-if="o.status==='PAY'">已支付</span>
      <span v-if="o.status==='NOT_PAY'">未支付</span>
      <span v-if="o.status==='DEAL'">交易完成</span>
      <el-button class="dealOrder" @click="dealOrder(o.id)" v-if="o.status!=='DEAL'" type="primary">确认交易</el-button>
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
    },
    // 确认交易
    dealOrder (orderId) {
      Vue.axios.put(`/order/deal/${orderId}`).then((res) => {
        if (res.data.statusCode === '200') {
          this.order.forEach((o) => {
            if (o.id === orderId) {
              o.status = 'DEAL'
            }
          })
          this.$message.success('交易完成')
        } else {
          this.$message.error(res.data.errorMessage)
        }
      })
    },
    // 监听新订单
    listenNewOrder () {
      let that = this
      let userId = localStorage.getItem('userId')
      // 建立webSocket连接  监听是否有新的订单
      let webSocket = new WebSocket(`${that.WEBSOCKET_URL}/merchant/websocket/${userId}`)

      webSocket.onmessage = function (message) {
        that.$message.success(message.data)
        // 刷新订单
        that.getOrderByPage(1)
      }
    }
  },
  created () {
    let that = this
    that.getOrderByPage(1)
    that.listenNewOrder()
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
    align-items: center;
    text-align: center;
  }
  .dealOrder{
    height: 20px;
    font-size: 10px;
  }

  .order_info span{
    color:red;
    margin-right: 50px;
  }
  .order_pagination{
    margin-top: 20px;
    float: right;
  }

</style>
