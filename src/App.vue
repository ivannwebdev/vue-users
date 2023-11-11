<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

  export default {
  components: { PostForm, PostList },
    data() {
      return {
        posts: [
          {id: 1, title: 'Chocolate', body: 'Hi there. Today I will teach you how to make home-made chocolate'},
          {id: 2, title: 'Puncakes', body: 'Hi there. Today I will teach you how to make home-made puncakes'},
          {id: 3, title: 'Ice-cream', body: 'Hi there. Today I will teach you how to make home-made ice-cream'}
        ]
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post)
      },

      deletePost(id) {
        this.post.filter(post => post.id !== id)
      }
    }
  }
</script>

<template>
  <main class="main">
    <PostList :posts="posts" @delete="deletePost"/>
    <PostForm @create='createPost'/>
  </main>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }

  .main {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
</style>
