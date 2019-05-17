<template>
  <div class="money_info">
    <el-card class="money_card">
      <div>总收入: {{money}}元</div>
    </el-card>
    <div class="thirty_days_income_div">
      <h2>近30日收入情况</h2>
      <div class="thirty_days_income" id="thirty_days_income">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
import _ from 'lodash'

export default {
  name: 'MoneyManager',
  data () {
    return {
      money: ''
    }
  },
  created () {
    let userId = localStorage.getItem('userId')
    Vue.axios.get(`/merchant/${userId}`).then((res) => {
      console.log(res)
      let moneyId = res.data.data.moneyId
      Vue.axios.get(`/money/${moneyId}`).then((res) => {
        this.money = res.data.data.money
      })
    })
  },
  mounted () {
    let that = this
    that.getThirtyDaysIncome()
  },
  methods: {
    // 近三十日收入图表
    getThirtyDaysIncome () {
      Vue.axios.get(`/thirty_days_income`).then((res) => {
        let orderDate = []
        let totalPrice = []
        _.forEach(res.data.data, function (o) {
          orderDate.push(o.orderDate)
          totalPrice.push(o.totalPrice)
        })
        let thirtyDaysIncomeChart = echarts.init(document.getElementById('thirty_days_income'))
        let option = {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: orderDate
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: totalPrice,
            type: 'line',
            areaStyle: {}
          }]
        }
        thirtyDaysIncomeChart.setOption(option)

        window.addEventListener('resize', function () {
          thirtyDaysIncomeChart.resize()
        })
      })
    }
  }
}
</script>

<style scoped>
  .money_info {
    margin-top: 50px;
    display: flex;
  }

  .money_card {
    margin-top: 250px;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    background-color: #62a6ff;
  }

  .money_card div {
    font-weight: bolder;
    text-align: center;
  }

  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  .thirty_days_income_div{
    width: 600px;
    height: 600px;
    float: right;
  }
  .thirty_days_income{
    width: 500px;
    height: 500px;
    border: 1px solid #060506;
    margin: 0 auto;
  }
</style>
