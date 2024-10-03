<template>
  <h1>Mi primera app</h1>
  <hr/>
  <MyCounter :value="10"/>
  <MyCounterScript :value="14"/>
  <MyCounterScript2 />
</template>

<script lang="ts" setup>
  import MyCounter from './components/MyCounter.vue';
  import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/MyCounterScript2.vue';
</script>