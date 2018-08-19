<template>
  <li @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props:['content', 'index'],
  methods: {
    handleDelete(){
      this.$emit('delete',this.index) //事件名称可以自定义
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
