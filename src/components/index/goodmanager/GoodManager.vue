<template>
  <el-container>
    <el-header height="30px" class="good_header">
      <div>
        <el-button @click='changeView("Good")' size="mini"  type="primary" round>所有菜品</el-button>
        <el-button @click='changeView("CreateGood")' size="mini"  type="primary" round>添加菜品</el-button>
        <el-button @click='changeView("SortManager")' size="mini" type="primary" round>分类管理</el-button>
      </div>
    </el-header>
    <el-main id="main_class">
      <component :is="currentComponent"></component>
    </el-main>
  </el-container>
</template>

<script>
import Good from '@/components/index/goodmanager/Good'
import CreateGood from '@/components/index/goodmanager/CreateGood'
import SortManager from '@/components/index/goodmanager/SortManager'

export default {
  name: 'GoodManager',
  components: {Good, CreateGood, SortManager},
  data () {
    return {
      currentComponent: 'Good'
    }
  },
  methods: {
    changeView: function (componentName) {
      this.currentComponent = componentName
    }
  }
}
</script>

<style scoped>
  .good_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
