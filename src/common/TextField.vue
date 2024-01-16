<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'id'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<template>
  <div class="form-field">
    <input
      class="input"
      :value="modelValue"
      placeholder=" "
      :id="id"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label" :for="id" v-if="label">{{ label }}</label>
  </div>
</template>
<style>
form {
  display: grid;
}

.form-field .label {
  position: absolute;
  color: black;
  top: 8px;
  left: 8px;
  font-size: 14px;
  padding: 0px 4px;
  transition:
    top 300ms ease-in,
    left 300ms ease-in,
    font-size 300ms ease-in;
}
.form-field {
  position: relative;
  width: 100%;
  padding: 4px;
  margin: 8px;
}
.form-field .input {
  width: 100%;
  padding: 8px 12px;
}
.form-field .input:focus ~ .label,
.form-field .input:not(:focus).input:not(:placeholder-shown) ~ .label {
  top: -5px;
  left: 4px;
  font-size: 10px;
  background-color: white;
}
</style>
