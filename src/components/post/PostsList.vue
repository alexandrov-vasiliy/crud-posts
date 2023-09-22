<script>
import { defineComponent } from 'vue'
import PostItem from '@/components/post/PostItem.vue'

export default defineComponent({
  name: 'PostsList',
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts"
          :key="post.id"
      >
        <post-item :post="post"></post-item>
      </li>
    </ul>
  </div>

</template>

<style scoped>
li {
  margin-top: 10px;
}
</style>
