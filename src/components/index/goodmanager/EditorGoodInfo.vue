<template>
    <div>编辑{{msg}}</div>
</template>

<script>
import Bus from '@/components/utils/Bus'

export default {
  name: 'EditorGoodInfo',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let self = this
    Bus.$on('send', function (val) {
      self.msg = val
    })
  }
}
</script>

<style scoped>

</style>
