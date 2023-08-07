<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import SubComponent from "@/components/sub-component/sub-component";

export default {
  components:{
    SubComponent
  },
  props: {
    temp1: {type: String, required: true, default: '测试'},
    temp2: {type: Number, default: 0},
  },
  watch: {
    "name": {
      handler(newName, oldName) {
        //执行代码
        console.log(newName)
        console.log(oldName)
      },
      deep: true,
      immediate: true,
    },
  },
  computed:{
    getComputed1(){

    }
  },
  data() {
    return {
      name: '123456'
    }
  },
  mounted() {
  },
  created() {
  }
}
</script>