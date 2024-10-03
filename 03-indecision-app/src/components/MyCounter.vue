<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square}}</h3>
    <div>
      <button @click="add">+1</button>
      <button @click="subtract">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const props = defineProps<{value: number}>()

  const counter = ref(props.value)
  const square = computed(() => counter.value * counter.value)

  const add = () => counter.value++
  const subtract = () => counter.value--
 </script>

