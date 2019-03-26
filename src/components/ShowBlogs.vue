<template>
<div id="showblogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="search" v-model="search">
    <div v-for="blog in filteredBlogs" class="singleblog" v-bind:key="blog.title">
        <router-link v-bind:to="'/blog/'+ blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <p>{{blog.content| snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "showblogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // this.$http
    //   .get("https://wd9078961936zrxzvo.wilddogio.com/posts.json")
      axios.get("/posts.json")
      .then((response) => {
        // return response.json();
        //this.blogs = response.body.slice(0, 10);
        // console.log(response)
        return response.data;
      })
      .then((data)=>{
        // console.log(data)
        var blogsArray = [];
        for(let key in data){
          // console.log(key);
          // console.log(data[key]);
          data[key].id = key;
          blogsArray.unshift(data[key]);
        }
        // console.log(blogsArray);
        this.blogs = blogsArray;
      })
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  //局部自定义指令
  directives: {
      "rainbow":{
          bind(el, binding, vnode){
              el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
      }
  },
  //局部自定义过滤器
  filters:{
      "to-uppercase":function(value){
          return value.toUpperCase()
      },
      snippet(value){
          return value.slice(0, 100) + "..."
      }
  }
};
</script>

<style>
#showblogs {
  margin: 20px auto;
  max-width: 600px;
}

#showblogs a{
  text-decoration: none;
}

.singleblog {
  padding: 10px 20px;
  border: 1px solid #000;
  margin: 20px 0;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 8px;
}
input[type="text"] {
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>