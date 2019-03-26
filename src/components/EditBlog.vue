<template>
  <div class="add-blog">
      <form v-if="!submitted">
        <h2>写博客</h2>
          <label>标题</label>
          <input type="text" v-model="blog.title" required/>

          <label>内容</label>
          <textarea v-model="blog.content"></textarea>
        
        <div id="checkboxes">
            <label>vue.js</label>
            <input type="checkbox" value="vue.js" v-model="blog.categories">
            <label>node.js</label>
            <input type="checkbox" value="node.js" v-model="blog.categories">
            <label>react.js</label>
            <input type="checkbox" value="react.js" v-model="blog.categories">
            <label>Angular4</label>
            <input type="checkbox" value="Angular4" v-model="blog.categories">
        </div>
        <label>作者</label>
        <select v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author">{{author}}</option>
        </select>
        <button v-on:click.prevent="post">编辑博客</button>
      </form>

      <div v-if="submitted">
        <h3>您的博客已经成功提交！</h3>
      </div>

      <div class="preview">
          <h3>博客预览</h3>
          <h4>博客标题:</h4>
          <p>{{blog.title}}</p>
          <h4>博客内容:</h4>
          <p>{{blog.content}}</p>
          <h4>博客分类:</h4>
          <ul>
              <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
          </ul>
          <h4>作者:</h4>
          <p>{{blog.author}}</p>
      </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addblog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["herry", "bucky", "emliy"],
      submitted: false
    };
  },
  methods: {
    fetchData: function() {
      //   console.log(this.id)
      // this.$http.get("https://wd9078961936zrxzvo.wilddogio.com/posts/" + this.id + ".json")
      axios.get("/posts/" + this.id + ".json").then(response => {
        // console.log(response.data);
        this.blog = response.data;
      });
    },
    post: function() {
      // this.$http
      //   .put("https://wd9078961936zrxzvo.wilddogio.com/posts/" + this.id + ".json",
      axios
        .put(
          "/posts/" + this.id + ".json",
          this.blog
          // {
          //   title: this.blog.title,
          //   body: this.blog.content,
          //   userId: 1
          // }
        )
        .then(data => {
          //   console.log(data);
          this.submitted = true;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog * {
  box-sizing: border-box;
}

.add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
  cursor: pointer;
}

.preview {
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin: 30px 0;
}
</style>
