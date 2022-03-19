<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <MessageBox 
      v-for="item in messages" 
      class="bordered"
      :key="item.id" 
      v-bind="item"/>
    <form>
      <input 
        type="checkbox"  
        id="isError" 
        v-model="type" 
        true-value="warn" 
        false-value="success"/>
      <label for="isError">Error</label>
      <input v-model="message" placeholder="put the message here"/>
      <button 
        type="submit" 
        @click.prevent="say"
        v-bind:disabled="!canSubmit">say</button>
    </form>
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
      message: "",
      type: "success",
      messages: []
    };
  },
  methods: {
    say: function() {
      this.messages.push({
        id: Math.floor(Math.random()*100),
        message: this.message,
        type: this.type
      });
      this.message = '';

      setTimeout(() => {
        this.messages.shift();
      }, 5000);
    }
  },
  components: {
    MessageBox
  },
  computed: {
    canSubmit: function() {
      return this.message.length > 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bordered {
  border: 2px solid #42b983;
}
button {
  background: #42b983;
  border-color: lightgreen;
  text-transform: uppercase;
  padding: 5px;
  min-width: 60px;
  margin: 5px;
}
label {
  padding: 5px;
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
