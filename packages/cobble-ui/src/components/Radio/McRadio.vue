<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McRadio' })

const props = withDefaults(defineProps<{
  modelValue?: string | number
  value?: string | number
  size?: Size
  disabled?: boolean
  label?: string
}>(), {
  size: 'md',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const radioClasses = computed(() => clsx(
  'mc-radio',
  `mc-radio--${props.size}`,
  {
    'mc-radio--checked': props.modelValue === props.value,
    'mc-radio--disabled': props.disabled
  }
))

const handleClick = () => {
  if (!props.disabled && props.value !== undefined) {
    emit('update:modelValue', props.value)
    emit('change', props.value)
  }
}
</script>

<template>
  <label :class="radioClasses">
    <input
      type="radio"
      :checked="modelValue === value"
      :disabled="disabled"
      @click.prevent="handleClick"
      class="mc-radio__input"
    />
    <span class="mc-radio__circle">
      <span v-if="modelValue === value" class="mc-radio__dot"></span>
    </span>
    <span v-if="label" class="mc-radio__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-radio {
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
    .mc-radio__circle {
      width: 14px;
      height: 14px;
      
      .mc-radio__dot {
        width: 6px;
        height: 6px;
      }
    }
    
    .mc-radio__label {
        font-size: var(--mc-font-xs);
      }
  }
  
  &--md {
    .mc-radio__circle {
      width: 18px;
      height: 18px;
      
      .mc-radio__dot {
        width: 8px;
        height: 8px;
      }
    }
    
    .mc-radio__label {
        font-size: var(--mc-font-sm);
      }
  }
  
  &--lg {
    .mc-radio__circle {
      width: 22px;
      height: 22px;
      
      .mc-radio__dot {
        width: 10px;
        height: 10px;
      }
    }
    
    .mc-radio__label {
        font-size: var(--mc-font-md);
      }
  }
  
  &__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  
  &__circle {
    position: relative;
    width: 18px;
    height: 18px;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    transition: all 0.15s ease;
    
    .mc-radio--checked & {
      background-color: var(--mc-success-dark);
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
    }
    
    .mc-radio:hover:not(.mc-radio--disabled) & {
      border-color: var(--mc-border) #888888 #888888 var(--mc-border);
    }
  }
  
  &__dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: var(--mc-success);
    border: 1px solid;
    border-color: #66BB6A var(--mc-success-dark) var(--mc-success-dark) #66BB6A;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.3);
  }
  
  &__label {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
  }
}
</style>
