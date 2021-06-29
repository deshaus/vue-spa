<template>
<!-- <v-app>
  <v-main> -->
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
 
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-left"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          {{msg}}
        </h1>
        <h4 class="subheading">
          Привет, я Саша!
        </h4>
        <p class="text-left">
          Мой опыт в web разработке - <v-btn rounded href="https://deshaus941857505.wordpress.com/about/">link</v-btn>
        </p>
        <p class="text-left">
          На предыдущих местах работы был получен богатый опыт самостоятельной и командной работы. 
          Участие в крупных инженерных проектах как в части технических вопросов, так и в части коммерческих и организационных.
        </p>
        <p class="text-left">
          На постоянной основе проходил обучение английскому языку.

          Увлекаюсь современными технологиями, фотографией, hi-fi звуком. 
  </p>

  <h4 class="subheading">
          Продвинутые либо базовые знания в следующих областях:
        </h4>
  <p class="text-left">
    <v-chip>HTML5</v-chip>
    <v-chip>CSS3</v-chip>
    <v-chip>JavaScript</v-chip>
    <v-chip>React</v-chip>
    <v-chip>Redux</v-chip>
    <v-chip>Bootstrap</v-chip>
    <v-chip>jQuery</v-chip>
    <v-chip>SASS</v-chip>
    <v-chip>Vue</v-chip>
    <v-chip>Vuex</v-chip>
    <v-chip>Vue-Router</v-chip>
    <v-chip>Vuetify</v-chip>
    <v-chip>Vue-CLI</v-chip>
    <v-chip>Git</v-chip>
    <v-chip>Github</v-chip>
  </p>
      </v-col>
    </v-row>
  </v-parallax>
  <!-- </v-main>
</v-app> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
