<template>
    <label v-bind:for="id">
        <input 
            type="checkbox"  
            v-bind="$attrs"
            v-bind:checked="isChecked"
            v-bind:value="value"
            v-on:change="onChange"
        />
        <slot></slot>
    </label>
</template>

<script>
import { getRndId } from '../utils'
export default {
    name: "BaseCheckbox",
    inheritAttrs: false,
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: [Boolean, String],
        trueValue: {
            type: [Boolean, String],
            default: true
        },
        falseValue: {
            type: [Boolean, String],
            default: false
        }
    },
    methods: {
        onChange: function(event) {
            const isChecked = event.target.checked;
            const newValue = isChecked ? this.trueValue : this.falseValue;
            this.$emit('change', newValue);
        }
    },
    computed: {
        id: function() {
            return getRndId();
        },
        isChecked: function() {
            return this.value === this.trueValue;
        }
    },
}
</script>

<style scoped>
    label {
        padding: 5px;
    }
    input {
        padding: 5px;
    }
</style>