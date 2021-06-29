<template>
  <div class="hello">
    <h1>Галлерея</h1>
      <h2>Категория 1</h2>
       <router-link
            v-for="post in posts1"
            :key='post.id'
            active-class="is-active"
            class="link"
            tag="button"
            :to="{ name: 'post', params: { id: post.id } }">
          <img alt="unknown" :src="post.thumbnailUrl" title="Подробнее">
        </router-link>
        <h2>Категория 2</h2>
        <router-link
            v-for="post in posts2"
            :key='post.id'
            active-class="is-active"
            class="link"
            tag="button"
            :to="{ name: 'post', params: { id: post.id } }">
          <!-- {{post.id}}. {{post.title}} -->
          <img alt="unknown" :src="post.thumbnailUrl" title="Подробнее">
        </router-link>

      <h2>Категория 3</h2>
        <router-link
            v-for="post in posts3"
            :key='post.id'
            active-class="is-active"
            class="link"
            tag="button"
            :to="{ name: 'post', params: { id: post.id } }">
          <!-- {{post.id}}. {{post.title}} -->
          <img alt="unknown" :src="post.thumbnailUrl" title="Подробнее">
        </router-link>

      <h2>Категория 4</h2>
        <router-link
            v-for="post in posts4"
            :key='post.id'
            active-class="is-active"
            class="link"
            tag="button"
            :to="{ name: 'post', params: { id: post.id } }">
          <!-- {{post.id}}. {{post.title}} -->
          <img alt="unknown" :src="post.thumbnailUrl" title="Подробнее">
        </router-link>

        <div class="content">
        <router-view></router-view>
      </div>

  </div>
</template>

<script>
export default {
  name: 'gallery',

  computed: {
    posts1() {
      return this.$store.state.posts.slice(0,6)
    },
    posts2(){
      return this.$store.state.posts.slice(6,12)
    },
    posts3(){
      return this.$store.state.posts.slice(12,18)
    },
    posts4(){
      return this.$store.state.posts.slice(18,24)
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }

}
</script>

