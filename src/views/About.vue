<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/cup.png"> -->
    <HelloWorld msg="Подробнее обо мне"/>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld.vue'

  export default {
    name: 'About',

    components: {
      HelloWorld,
    },
  }
</script>