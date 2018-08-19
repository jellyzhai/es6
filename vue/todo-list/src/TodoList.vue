<template>
    <!--模板里面的最外层只能是一个标签-->
    <div>
        <div>
            <input type="text" v-model="inputValue"/>
            <button @click="handleSubmit">submit</button>
        </div>
        <ul>
            <TodoItem
                    v-for="(item, index) of list"
                    :key="index"
                    :index="index"
                    :content="item"
                    @delete="handleDelete"
            ></TodoItem>
        </ul>
    </div>
</template>

<script>
    import TodoItem from './components/TodoItem'

  export default {
      components: {
        TodoItem //表示'TodoItem':TodoItem
      },
    //只有数据要写成函数形式
    data(){
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handleSubmit(){
        if(this.inputValue){
          this.list.push(this.inputValue);
          this.inputValue = ''
        }
      },
      handleDelete(index){
        this.list.splice(index,1)
      }
    }
  }

</script>

<style>

</style>
