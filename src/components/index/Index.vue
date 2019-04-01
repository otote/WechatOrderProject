<template>
  <el-container>
    <el-header height="40px" class="header_class">
      <div>控制台</div>
      <div class="header_button">
        <el-button  @click.prevent="orderManagerFlag=!orderManagerFlag" size="mini" class="orderManager" type="primary">订单查询</el-button>
        <el-button  size="mini" class="logout" type="danger">退出</el-button>
      </div>
    </el-header>
    <el-main id="main_class" class="main_class">
      <OrderManager v-if='orderManagerFlag'></OrderManager>
      <!--<div class="welcome">-->
        <!--欢迎使用商家后台管理系统-->
      <!--</div>-->
      <!--<div class="main_div">-->
        <!--<el-card shadow="hover" style="background-color: #409EFF;" class="main_card">-->
          <!--<el-button v-on:click="greet" class="main_card_button">菜品管理</el-button>-->
        <!--</el-card>-->
        <!--<el-card shadow="hover" style="background-color: #67C23A" class="main_card">查看订单</el-card>-->
        <!--<el-card shadow="hover" style="background-color: #F56C6C" class="main_card">收益信息</el-card>-->
      <!--</div>-->
    </el-main>
  </el-container>
</template>

<script>
import OrderManager from '@/components/index/OrderManager'

export default {
  components: {OrderManager},
  data () {
    return {
      orderManagerFlag: false
    }
  },
  name: 'Index',
  mounted () {
    var clientHight = window.innerHeight
    document.getElementById('main_class').style.height = clientHight + 'px'
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<style scoped>
  .header_class{
    background-color: #DCDFE6;
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
    /*background-color: aquamarine;*/
    background: url("../../assets/background.png");
    background-size: 100%;
    width: 100%;
  }

  .welcome{
    font-weight: bold;
    font-size: 20px;
  }
  .main_div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px
  }

  .main_card{
    display: flex;
    width: 200px;
    height: 150px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: 0px;
    margin: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  .main_card_button{
    font-weight: bold;
    font-size: 20px;
    color: black;
    background-color:rgba(255,255,255,0);
    border: 0px;
  }
  .orderManager{
    float: right;
  }

  .logout{
    float: right;
  }

</style>
