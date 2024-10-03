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

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      value: Number,

    },
    setup(props) {
      const counter = ref(props.value ?? 15)
      const square = computed(() => counter.value * counter.value)

      const add = () => counter.value++
      const subtract = () => counter.value--

      return {
        counter, 
        square,

        add,
        subtract
      }
    }
  })

 </script>

