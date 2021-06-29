<template lang="html">
<div>
    <h2>Подробная информация</h2>

  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__id">{{ post.id }}</p>
    <img alt="Vue logo" :src="post.thumbnailUrl">
    <div>
    <router-link to="/">Галлерея</router-link>
    </div>
  </div>
    <v-progress-circular
    v-else
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>


</div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data() {
        return {
        post: null,
        endpoint: 'https://jsonplaceholder.typicode.com/photos/'
        }
    },
    methods:{
        getPost(id) {
            axios(this.endpoint + id)
            .then(response => {
                if(id<25){
                    setTimeout(()=>this.post = response.data, 500);
                }
            })
            .catch( error => {
                console.log(error)
            })
        }
    },
    created(){
        this.getPost(this.id);
    },
    watch: {
        '$route'() {
            this.getPost(this.id);
        }
    }
}
</script>