<script setup lang="ts">
import { ref } from 'vue'
import McInput from '../../../../cobble-ui/src/components/Input/McInput.vue'

const inputValue = ref('')
</script>

<template>
  <McInput v-model="inputValue" placeholder="请输入内容" />
</template>
