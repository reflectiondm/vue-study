<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <transition-group name="message" tag='div'>
      <MessageBox 
        v-for="item in messages" 
        class="bordered message-item"
        :key="item.id" 
        v-bind="item"/>
    </transition-group>
    <form>
      <BaseCheckbox
        v-model="type"
        true-value="warn"
        false-value="success"><b>Error</b>
      </BaseCheckbox>
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
import BaseCheckbox from './BaseCheckbox';

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
    MessageBox,
    BaseCheckbox
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
.message-item {

}
.message-enter-active {
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.message-leave-active {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.message-enter {
  opacity: 0;
  height: 0;
}

.message-enter-active {
  max-height: 100%;
}

 .message-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

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
