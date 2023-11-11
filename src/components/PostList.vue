<template>
  <div class="container">

    <Post
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />

  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: { Post },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .container {
    margin: auto;
  }
</style>
