<template>
  <div id="app">
    <TestLanding/>
  </div>
</template>

<script>
import TestLanding from './components/TestLanding.vue'

export default {
  name: 'App',
  components: {
    TestLanding
  }
}
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "style/style";
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

  *{
    font-family: 'Open Sans', sans-serif;
  }

</style>
