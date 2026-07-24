<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McSpinner' })

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  color?: string
}>(), {
  size: 'md',
  color: '#388E3C'
})

const spinnerClasses = clsx('mc-spinner', `mc-spinner--${props.size}`)
</script>

<template>
  <div :class="spinnerClasses">
    <div class="mc-spinner__dot mc-spinner__dot--1"></div>
    <div class="mc-spinner__dot mc-spinner__dot--2"></div>
    <div class="mc-spinner__dot mc-spinner__dot--3"></div>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-spinner {
  position: relative;
  
  &--sm {
    width: 20px;
    height: 20px;
    
    .mc-spinner__dot {
      width: 6px;
      height: 6px;
    }
  }
  
  &--md {
    width: 28px;
    height: 28px;
    
    .mc-spinner__dot {
      width: 8px;
      height: 8px;
    }
  }
  
  &--lg {
    width: 40px;
    height: 40px;
    
    .mc-spinner__dot {
      width: 12px;
      height: 12px;
    }
  }
  
  &__dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #388E3C;
    border: 2px solid;
    border-color: #4CAF50 #2E7D32 #2E7D32 #4CAF50;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.2);
    animation: mc-spinner-bounce 1.4s infinite ease-in-out both;
    
    &--1 {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: -0.32s;
    }
    
    &--2 {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      animation-delay: -0.16s;
    }
    
    &--3 {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      animation-delay: 0s;
    }
  }
}

@keyframes mc-spinner-bounce {
  0%, 80%, 100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
  }
  40% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
