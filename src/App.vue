<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <!-- <AddBlog></AddBlog> -->
    <!-- <ShowBlogs></ShowBlogs> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>

<style>

</style>
