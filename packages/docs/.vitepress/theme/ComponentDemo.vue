<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  code?: string
}>()

const showCode = ref(false)
</script>

<template>
  <div class="component-demo">
    <div class="component-demo__preview">
      <slot></slot>
    </div>
    <button v-if="code" class="component-demo__toggle" @click="showCode = !showCode">
      {{ showCode ? '隐藏代码' : '显示代码' }}
    </button>
    <div v-if="showCode && code" class="component-demo__code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
$pixel-size: 4px;

.component-demo {
  margin: 16px 0;
  padding: 16px;
  background-color: var(--mc-surface);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
              inset 2px 2px 0 rgba(255,255,255,0.05);
  
  &__preview {
    padding: 16px;
    background-color: var(--mc-background);
    border: 2px solid;
    border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
    box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                inset -2px -2px 0 rgba(255,255,255,0.05);
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    min-height: 80px;
  }
  
  &__toggle {
    margin-top: 12px;
    padding: 8px 16px;
    background-color: var(--mc-success-dark);
    color: white;
    border: 2px solid;
    border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.2);
    cursor: pointer;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: 10px;
    transition: all 0.15s ease;
    
    &:hover {
      background-color: var(--mc-success);
    }
    
    &:active {
      background-color: #1B5E20;
      border-color: #1B5E20 var(--mc-success) var(--mc-success) #1B5E20;
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.1);
    }
  }
  
  &__code {
    margin-top: 12px;
    padding: 16px;
    background-color: #1a1a1a;
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.05);
    overflow-x: auto;
    
    pre {
      margin: 0;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      color: #e0e0e0;
      white-space: pre-wrap;
      word-break: break-all;
      line-height: 1.6;
    }
  }
}
</style>
