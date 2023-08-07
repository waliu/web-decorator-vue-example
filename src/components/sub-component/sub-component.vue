<template>
  <div>
    <br>
    测试的Prop1属性:{{ temp1 }}
    <br>
    测试的Prop2属性:{{ temp2 }}
    <br>
    <button @click="bsOK">Emit 测试</button>
  </div>
</template>
<script lang="ts" src="./sub-component.ts"></script>
<style scoped></style>