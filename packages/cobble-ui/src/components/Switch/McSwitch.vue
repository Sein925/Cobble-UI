<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McSwitch' })

const props = withDefaults(defineProps<{
  modelValue?: boolean
  size?: Size
  disabled?: boolean
  activeText?: string
  inactiveText?: string
}>(), {
  modelValue: false,
  size: 'md',
  disabled: false,
  activeText: '',
  inactiveText: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const switchClasses = computed(() => clsx(
  'mc-switch',
  `mc-switch--${props.size}`,
  {
    'mc-switch--active': props.modelValue,
    'mc-switch--disabled': props.disabled
  }
))

const handleClick = () => {
  if (!props.disabled) {
    const newValue = !props.modelValue
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}
</script>

<template>
  <div :class="switchClasses" @click="handleClick">
    <span class="mc-switch__track">
      <span class="mc-switch__thumb"></span>
    </span>
    <span v-if="activeText && modelValue" class="mc-switch__text mc-switch__text--active">
      {{ activeText }}
    </span>
    <span v-if="inactiveText && !modelValue" class="mc-switch__text mc-switch__text--inactive">
      {{ inactiveText }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &--sm {
    .mc-switch__track {
      width: 32px;
      height: 18px;
      
      .mc-switch__thumb {
        width: 14px;
        height: 14px;
      }
      
      &.mc-switch__track--active {
        .mc-switch__thumb {
          left: 14px;
        }
      }
    }
    
    .mc-switch__text {
        font-size: var(--mc-font-xs);
      }
  }
  
  &--md {
    .mc-switch__track {
      width: 44px;
      height: 24px;
      
      .mc-switch__thumb {
        width: 18px;
        height: 18px;
      }
      
      &.mc-switch__track--active {
        .mc-switch__thumb {
          left: 22px;
        }
      }
    }
    
    .mc-switch__text {
        font-size: var(--mc-font-sm);
      }
    }
    
    &--lg {
    .mc-switch__track {
      width: 56px;
      height: 30px;
      
      .mc-switch__thumb {
        width: 22px;
        height: 22px;
      }
      
      &.mc-switch__track--active {
        .mc-switch__thumb {
          left: 30px;
        }
      }
    }
    
    .mc-switch__text {
        font-size: var(--mc-font-md);
      }
    }
    
    &__track {
    position: relative;
    width: 44px;
    height: 24px;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    transition: all 0.2s ease;
    
    .mc-switch--active & {
      background-color: var(--mc-success-dark);
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
    }
  }
  
  &__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: var(--mc-border-light);
    border: 2px solid;
    border-color: #888888 var(--mc-border) var(--mc-border) #888888;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.2);
    transition: transform 0.2s ease;
    
    .mc-switch--active & {
      background-color: var(--mc-success);
      border-color: #66BB6A var(--mc-success-dark) var(--mc-success-dark) #66BB6A;
      transform: translateX(20px);
    }
    
    .mc-switch--sm & {
      transform: translateX(0);
      
      .mc-switch--active & {
        transform: translateX(14px);
      }
    }
    
    .mc-switch--lg & {
      transform: translateX(0);
      
      .mc-switch--active & {
        transform: translateX(28px);
      }
    }
  }
  
  &__text {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &--active {
      color: #4CAF50;
    }
    
    &--inactive {
      color: var(--mc-text-secondary);
    }
  }
}
</style>
