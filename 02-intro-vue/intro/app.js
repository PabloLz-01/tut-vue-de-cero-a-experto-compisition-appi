
const {createApp, ref} = Vue;

const app = createApp({

  setup() {
    const message = ref('Im Batman')
    const author = ref('Bruce Wayne')

    const changeQuote = () => {
      message.value = "Hola, soy Goku"
      author.value = "Goku"
    }


    /*setTimeout(() => {
      message.value = 'Soy Goku';
      author.value = 'Goku';
    }, 1500);*/

    return {
      message, author,

      changeQuote
    }
  }
});

app.mount('#myApp');