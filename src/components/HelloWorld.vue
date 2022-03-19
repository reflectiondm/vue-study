<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <MessageBox v-bind:messageType="type" v-bind:message="message"></MessageBox>
    <input v-model="message" />
    <button v-on:click="toggleMessage">say</button>
  </div>
</template>

<script>
import MessageBox from './MessageBox';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      message: "oopsy",
      type: "warn",
      messages: []
    };
  },
  methods: {
    toggleMessage: function () {
      if (this.type === "warn") {
        this.type = "success";
        this.message = "dasy";
      } else {
        this.type = "warn";
        this.message = "oopsy";
      }
    },
  },
  components: {
    MessageBox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: #42b983;
  border-color: lightgreen;
  text-transform: uppercase;
  padding: 5px;
  min-width: 60px;
  margin: 5px;
}
input {
  padding: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
