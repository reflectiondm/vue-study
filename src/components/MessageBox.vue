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
import { logCycleMixing, mouseTrack } from './LogCycleMixin'
export default {
  name: "MessageBox",
  mixins: [logCycleMixing, mouseTrack()],
  props: {
    type: String,
    message: String,
  },
  inheritAttrs: false,
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
