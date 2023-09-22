<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { uid } from '@/utils/uid'

export default defineComponent({
  name: 'PostCreateForm',
  data: () => ({
    postName: ''
  }),
  methods: {
    ...mapMutations({
      addPost: 'addPost'
    }),
    handleSubmitForm () {
      if (!this.postName.trim()) {
        return
      }

      this.addPost({
        id: uid(),
        name: this.postName
      })
      this.postName = ''
    }
  }
})
</script>

<template>
  <form class="post-create-form" @submit.prevent="handleSubmitForm">
    <h2>Добавить пост</h2>
    <div class="post-create-form__content">
      <input v-model="postName" placeholder="Название поста" type="text">
      <button class="post-create-form__add-btn" type="submit">Добавить</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.post-create-form {
  font-size: 22px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }

  &__add-btn {
    margin-top: 10px;
    background-color: green;
  }
}

h2 {
  font-size: 32px;
}

input {
  border-bottom: 1px solid gray;
}
</style>
