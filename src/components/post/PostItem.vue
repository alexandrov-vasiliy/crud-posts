<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'PostItem',
  data () {
    return {
      editNameModel: this.post.name,
      isEdited: false,
      inputRef: null
    }
  },
  methods: {
    ...mapMutations({
      removePost: 'removePost',
      editPost: 'editPost'
    }),
    edit () {
      this.isEdited = !this.isEdited
      if (this.isEdited) {
        setTimeout(() => {
          this.$refs.inputRef?.focus()
        }, 0)
      } else {
        this.editPost({
          postId: this.post.id,
          newName: this.editNameModel
        })
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="post-item">
    <textarea class="post-item__editArea" v-if="isEdited" ref="inputRef" v-model="editNameModel"></textarea>
    <p v-else class="post-item__name">{{ post?.name }}</p>
    <div class="post-item__actions">
      <button class="post-item__delete" @click="removePost(post.id)">Delete</button>
      <button class="post-item__edit" @click="edit">{{ isEdited ? 'Save' : 'Edit' }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  min-width: 720px;
  &:hover {
    background-color: #B4B4B46C;
  }

  &:active {
    background-color: rgba(127, 157, 127, 0.67);
  }
  &__editArea {
    font-size: 22px;
    border-bottom: 1px solid gray;
  }
  &__actions {
    margin-top: 20px;
  }
  &__name {
    font-size: 22px;
  }
  &__delete {
    background-color: #f5554a;
  }

  &__edit {
    background-color: #ffc71f;
    margin-left: 20px;
  }
}

</style>
