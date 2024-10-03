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