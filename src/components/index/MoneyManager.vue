<template>
  <div class="money_info">
    <el-card class="money_card">
      <div>总收入: {{money}}元</div>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'

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
  }
}
</script>

<style scoped>
  .money_info{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .money_card{
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .money_card div{
    font-weight: bolder;
    text-align: center;
  }
</style>
