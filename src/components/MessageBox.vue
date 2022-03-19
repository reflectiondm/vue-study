<template>
  <div class="message" v-bind:class="classObject">{{ message }}</div>
</template>

<style scoped>
.message {
  height: 20px;
  padding: 5px;
  margin: 5px;
}

.success {
  background: greenyellow;
}

.warning {
  background: lightyellow;
}
</style>

<script>
export default {
  name: "MessageBox",
  props: {
    type: String,
    message: String,
  },
  computed: {
    classObject: function () {
      return {
        warning: this.type === "warn",
        success: this.type === "success",
      };
    },
  },
};
</script>
