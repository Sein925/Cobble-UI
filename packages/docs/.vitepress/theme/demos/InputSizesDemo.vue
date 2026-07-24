<script setup lang="ts">
import { ref } from 'vue'
import McInput from '../../../../cobble-ui/src/components/Input/McInput.vue'

const inputValue = ref('')
</script>

<template>
  <McInput v-model="inputValue" size="sm" placeholder="小号输入框" />
  <McInput v-model="inputValue" size="md" placeholder="中等输入框" />
  <McInput v-model="inputValue" size="lg" placeholder="大号输入框" />
</template>
