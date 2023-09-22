<template>
  <div id="app">
    <div class="main">
      <div class="container">
        <posts-page></posts-page>
      </div>
    </div>
  </div>
</template>

<script>

import PostsPage from '@/components/post/PostsPage.vue'

export default {
  name: 'App',
  components: {
    PostsPage
  }
}
</script>
<style>
.container {
  margin: 0 auto;
}
</style>
