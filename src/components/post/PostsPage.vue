<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import PostsList from '@/components/post/PostsList.vue'
import PostCreateForm from '@/components/post/PostCreateForm.vue'

export default defineComponent({
  name: 'PostsPage',
  components: { PostCreateForm, PostsList },
  data: () => ({
    searchModel: ''
  }),
  computed: {
    ...mapGetters({
      posts: 'posts'
    }),
    displayPosts () {
      return [].concat(this.posts)
        .filter((post) => post.name.toLowerCase().includes(this.searchModel.toLowerCase()))
    }
  },
  methods: {
    ...mapActions({ fetchPosts: 'fetchPosts' })
  },
  mounted () {
    this.fetchPosts()
  }
})
</script>

<template>
  <div class="post-page">
    <input class="post-page__search" v-model="searchModel" type="text" placeholder="Поиск">
    <div class="post-page__content">

      <post-create-form></post-create-form>
      <posts-list v-if="displayPosts.length" :posts="displayPosts"></posts-list>
      <div class="post-page__not-found" v-else>Посты не найдены</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-page {
  &__search {
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 20px;
  }
  &__content {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__not-found {
    font-size: 44px;
    color: gray;
  }
}
</style>
