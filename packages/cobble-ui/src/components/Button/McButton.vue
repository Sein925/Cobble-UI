<script setup lang="ts">
import { computed } from 'vue'
import type { Size, Variant, Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McButton' })

const props = withDefaults(defineProps<{
  size?: Size
  variant?: Variant
  status?: Status
  disabled?: boolean
  loading?: boolean
}>(), {
  size: 'md',
  variant: 'primary',
  status: 'default',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => clsx(
  'mc-button',
  `mc-button--${props.size}`,
  `mc-button--${props.variant}`,
  `mc-button--${props.status}`,
  {
    'mc-button--disabled': props.disabled,
    'mc-button--loading': props.loading
  }
))

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="mc-button__loader"></span>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--mc-button-bg);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  color: var(--mc-text);
  font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
  font-size: var(--mc-font-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
              inset 2px 2px 0 rgba(255,255,255,0.1);
  transition: all 0.15s ease;
  
  &:hover:not(:disabled):not(.mc-button--loading) {
    background-color: var(--mc-button-hover);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.15);
  }
  
  &:active:not(:disabled):not(.mc-button--loading) {
    background-color: var(--mc-button-pressed);
    border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
    box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                inset -2px -2px 0 rgba(255,255,255,0.1);
  }
  
  &--disabled,
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &--loading {
    cursor: wait;
  }
  
  &--sm {
    padding: 6px 12px;
    font-size: var(--mc-font-xs);
  }
  
  &--md {
    padding: 10px 20px;
    font-size: var(--mc-font-sm);
  }
  
  &--lg {
    padding: 14px 28px;
    font-size: var(--mc-font-md);
  }
  
  &--primary {
    background-color: var(--mc-button-bg);
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    color: var(--mc-text);
    
    &:hover:not(:disabled) {
      background-color: var(--mc-button-hover);
      border-color: var(--mc-border) #888888 #888888 var(--mc-border);
    }
    
    &:active:not(:disabled) {
      background-color: var(--mc-button-pressed);
      border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
    }
  }
  
  &--secondary {
    background-color: #4A3728;
    border-color: #6B4423 #3E2723 #3E2723 #6B4423;
    color: #FFFFFF;
    
    &:hover:not(:disabled) {
      background-color: #5D4037;
    }
    
    &:active:not(:disabled) {
      background-color: #3E2723;
      border-color: #3E2723 #6B4423 #6B4423 #3E2723;
    }
  }
  
  &--outline {
    background-color: transparent;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    color: var(--mc-text);
    box-shadow: none;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-button-bg);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.1);
    }
    
    &:active:not(:disabled) {
      border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
    }
  }
  
  &--ghost {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    
    &:hover:not(:disabled) {
      background-color: rgba(76,175,80,0.1);
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.1);
    }
  }
  
  &--success {
    background-color: var(--mc-success-dark);
    border-color: var(--mc-success) #1B5E20 #1B5E20 var(--mc-success);
    color: #FFFFFF;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-success);
    }
    
    &:active:not(:disabled) {
      background-color: #1B5E20;
      border-color: #1B5E20 var(--mc-success) var(--mc-success) #1B5E20;
    }
  }
  
  &--warning {
    background-color: var(--mc-warning-dark);
    border-color: var(--mc-warning) #E65100 #E65100 var(--mc-warning);
    color: #FFFFFF;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-warning);
    }
    
    &:active:not(:disabled) {
      background-color: #E65100;
      border-color: #E65100 var(--mc-warning) var(--mc-warning) #E65100;
    }
  }
  
  &--error {
    background-color: var(--mc-error-dark);
    border-color: var(--mc-error) #8E0000 #8E0000 var(--mc-error);
    color: #FFFFFF;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-error);
    }
    
    &:active:not(:disabled) {
      background-color: #8E0000;
      border-color: #8E0000 var(--mc-error) var(--mc-error) #8E0000;
    }
  }
  
  &--info {
    background-color: var(--mc-info-dark);
    border-color: var(--mc-info) #0D47A1 #0D47A1 var(--mc-info);
    color: #FFFFFF;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-info);
    }
    
    &:active:not(:disabled) {
      background-color: #0D47A1;
      border-color: #0D47A1 var(--mc-info) var(--mc-info) #0D47A1;
    }
  }
  
  &__loader {
    width: 12px;
    height: 12px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
