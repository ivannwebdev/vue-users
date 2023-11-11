<template>
  <div class="post">
    <h3 class="post-title">{{post.title}}</h3>
    <p class="post-text">
      {{ post.body }}
    </p>

    <UiButton
      @click="deletePost(post.id)"
      :isSmall="true"
      :isDangerous="true"
    >
      Delete
    </UiButton>
  </div >
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      deletePost(id){
        return () => {
          this.$emit('delete', id)
        }
      }
    }
  }
}
</script>

<style scoped>
  .post {
      padding: 1rem;
  }

  .post-title {
    text-align: center;
  }

  .post-text {
    margin-top: 0.5rem;
  }
</style>
