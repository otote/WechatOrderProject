<template>
  <el-container>
    <router-view></router-view>
    <el-header height="40px" class="header_class">
      <div>控制台</div>
      <div class="header_button">
        <el-button @click='changeView("OrderManager")' size="mini" class="header_btn" type="primary">订单查询</el-button>
        <el-button @click='changeView("GoodManager")' size="mini" class="header_btn" type="primary">菜品管理</el-button>
        <el-button @click='changeView("MoneyManager")' size="mini" class="header_btn" type="primary">收益查询</el-button>
        <el-button @click='logout' size="mini" class="header_btn" type="danger">退出</el-button>
      </div>
    </el-header>
    <el-main id="main_class" class="main_class">
      <component :is="currentComponent"></component>
    </el-main>
  </el-container>
</template>

<script>
import OrderManager from '@/components/index/OrderManager'
import MoneyManager from '@/components/index/MoneyManager'
import GoodManager from '@/components/index/goodmanager/GoodManager'

export default {
  components: {OrderManager, MoneyManager, GoodManager},
  data () {
    return {
      currentComponent: 'OrderManager'
    }
  },
  name: 'Index',
  mounted () {
    var clientHight = window.innerHeight
    document.getElementById('main_class').style.height = clientHight + 'px'
  },
  methods: {
    changeView: function (componentName) {
      this.currentComponent = componentName
    },
    logout: function () {
      localStorage.clear()
      console.log(localStorage.getItem('user'))
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
  .header_class{
    background-color: #20a0ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header_button{
    display: flex;
    float: right;
    align-items: center;
    justify-content: center;
  }
  .main_class{
    /*background: url("../../assets/background.png");*/
    background-size: 100%;
    width: 100%;
  }

  .header_btn{
    float: right;
  }
  /*.logout{*/
    /*float: right;*/
  /*}*/

</style>
