<template>
  <div class="demo">
    <div class="block">
      <div class="title">使用组件库组件</div>
      <testA></testA>
      <testB></testB>
    </div>
    <div class="block">
      <div class="title">使用工具函数库</div>
      <span class="data">数据返回结果：{{ name }}</span>
    </div>
  </div>
</template>
<script>
import MyClass from 'ui-common'
export default {
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const myClass = new MyClass('Well', 'Done')
      this.name = myClass.name()
    },
  },
}
</script>

<style scoped>
.demo {
  text-align: center;
  margin: 30px 0;
}
.block {
  margin-bottom: 30px;
}
.title {
  font-weight: bold;
  margin-bottom: 10px;
}
.data {
  color: cornflowerblue;
}
</style>
