<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
        this.post.id = Date.now()

        if (!this.post.body || !this.post.title) return

        this.$emit('create', this.post)

        this.post = {
          title: '',
          body: ''
        }
      }
  }
}
</script>
<template>
  <form
    class="post-form"
    @submit.prevent
  >
    <input
      type="text"
      v-model="post.title"
      class="input"
      placeholder="Post title"
    />

    <input
      placeholder="Post text"
      type="text"
      v-model="post.body"
      class="input"
    />

    <UiButton
      @click="createPost"
      class="button"
    >
      Add
    </UiButton>
  </form>
</template>

<style lang="scss" scoped>
  .post-form {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 1rem;
  }

  .input {
    width: 300px;
    height: 60px;
    padding: 0.5rem;
  }
</style>
