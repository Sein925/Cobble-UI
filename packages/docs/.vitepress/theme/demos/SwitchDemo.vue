<script setup lang="ts">
import { ref } from 'vue'
import McSwitch from '../../../../cobble-ui/src/components/Switch/McSwitch.vue'

const value = ref(false)
const value2 = ref(true)
</script>

<template>
  <McSwitch v-model="value" />
  <McSwitch v-model="value2" />
</template>
