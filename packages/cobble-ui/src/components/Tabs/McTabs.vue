<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McTabs' })

export interface TabItem {
  label: string
  value: string | number
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string | number
  tabs?: TabItem[]
  size?: Size
  type?: 'line' | 'card'
}>(), {
  tabs: () => [],
  size: 'md',
  type: 'line'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const tabsClasses = computed(() => clsx(
  'mc-tabs',
  `mc-tabs--${props.size}`,
  `mc-tabs--${props.type}`
))

const selectTab = (value: string | number) => {
  const tab = props.tabs.find(t => t.value === value)
  if (tab && !tab.disabled) {
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>

<template>
  <div :class="tabsClasses">
    <div class="mc-tabs__nav">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        :class="clsx(
          'mc-tabs__tab',
          {
            'mc-tabs__tab--active': modelValue === tab.value,
            'mc-tabs__tab--disabled': tab.disabled
          }
        )"
        @click="selectTab(tab.value)"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="mc-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-tabs {
  &--sm {
    .mc-tabs__tab {
      padding: 6px 10px;
      font-size: var(--mc-font-xs);
    }
  }
  
  &--md {
    .mc-tabs__tab {
      padding: 10px 14px;
      font-size: var(--mc-font-sm);
    }
  }
  
  &--lg {
    .mc-tabs__tab {
      padding: 14px 18px;
      font-size: var(--mc-font-md);
    }
  }
  
  &--line {
    .mc-tabs__nav {
      border-bottom: 2px solid;
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
      background-color: rgba(0,0,0,0.05);
    }
    
    .mc-tabs__tab {
      position: relative;
      margin-bottom: -2px;
      
      &--active {
        color: var(--mc-primary);
        
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 4px;
          background-color: var(--mc-success-dark);
          border: 2px solid;
          border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
          box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                      inset 1px 1px 0 rgba(255,255,255,0.2);
        }
      }
    }
  }
  
  &--card {
    .mc-tabs__nav {
      background-color: var(--mc-surface);
      border: 2px solid;
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
                  inset 2px 2px 0 rgba(255,255,255,0.05);
    }
    
    .mc-tabs__tab {
      border-right: 2px solid var(--mc-border);
      
      &:last-child {
        border-right: none;
      }
      
      &--active {
        background-color: var(--mc-success-dark);
        color: white;
        box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                    inset 2px 2px 0 rgba(255,255,255,0.2);
      }
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 0;
  }
  
  &__tab {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &:hover:not(.mc-tabs__tab--disabled) {
      color: var(--mc-text);
      background-color: rgba(255,255,255,0.05);
    }
    
    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
  
  &__content {
    padding: 14px 0;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
  }
}
</style>
