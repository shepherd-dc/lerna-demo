<template>
  <div>
    <testA></testA>
    <testB></testB>
  </div>
</template>
<script>
import MyClass from 'ui-common'
export default {
  data() {
    return {}
  },
  mounted() {
    const myClass = new MyClass('Shepherd', 'Young') // eslint-disable-line
    console.log(myClass.name())
  },
  methods: {},
}
</script>
