<template>
  <div class="home">
    <div>
      <h3>父组件</h3>
      <br>
      input : <input type="text" v-model="message">
      <br>
      text1 :{{ message }}
      <br>
      text2 :{{ nested["count"]?.temp }}
      <br>
      Computed-text1: {{ getComputed1 }}
      <br>
      Computed2-text1: {{ getComputed2 }}

      <button @click="init">测试按钮</button>
    </div>
    <div>
      <h3>子组件</h3>
      <sub-component
          @bsOk="bsOK"
          :temp1="message"
          :temp2='nested["count"]?.temp'></sub-component>
    </div>

  </div>
</template>
<script lang="ts" src="./HomeView.ts"></script>

