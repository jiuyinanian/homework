<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <p>{{blog.content}}</p>
        <p>作者:{{blog.author}}</p>
        <p>分类:</p>
        <ul>
          <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
        </ul>
        <button v-on:click="deleteBlog">删除</button>
        <router-link v-bind:to="'/edit/' + this.id" >重新编辑</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods:{
    deleteBlog(){
      // this.$http.delete("https://wd9078961936zrxzvo.wilddogio.com/posts/" + this.id + ".json")
      axios.delete("/posts/" + this.id + ".json")
      .then((response)=>this.$router.push({path:"/"}))
    }
  },
  created() {
    // this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
    // this.$http
    //   .get(
    //     "https://wd9078961936zrxzvo.wilddogio.com/posts/" + this.id + ".json"
    //   )
      axios.get("/posts/" + this.id + ".json")
      .then(response => {
        // this.blog = response.body;
        // console.log(response);
        // console.log(response.json());
        // return response.json();
        this.blog = response.data;
      })
      // .then(data => {
      //   this.blog = data;
      // });
  }
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px solid #aaa;
}
</style>

