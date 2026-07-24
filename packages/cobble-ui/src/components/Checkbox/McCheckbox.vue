<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McCheckbox' })

const props = withDefaults(defineProps<{
  modelValue?: boolean
  size?: Size
  disabled?: boolean
  indeterminate?: boolean
  label?: string
}>(), {
  modelValue: false,
  size: 'md',
  disabled: false,
  indeterminate: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const checkboxClasses = computed(() => clsx(
  'mc-checkbox',
  `mc-checkbox--${props.size}`,
  {
    'mc-checkbox--checked': props.modelValue,
    'mc-checkbox--indeterminate': props.indeterminate,
    'mc-checkbox--disabled': props.disabled
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
  <label :class="checkboxClasses">
    <input
      type="checkbox"
      :checked="modelValue || indeterminate"
      :disabled="disabled"
      @click.prevent="handleClick"
      class="mc-checkbox__input"
    />
    <span class="mc-checkbox__box">
      <span v-if="modelValue || indeterminate" class="mc-checkbox__check">
        <span v-if="indeterminate" class="mc-checkbox__check--indeterminate"></span>
        <span v-else class="mc-checkbox__check--icon">✓</span>
      </span>
    </span>
    <span v-if="label" class="mc-checkbox__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-checkbox {
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
    .mc-checkbox__box {
      width: 14px;
      height: 14px;
      
      .mc-checkbox__check {
        font-size: var(--mc-font-xs);
      }
      
      .mc-checkbox__check--indeterminate {
        width: 6px;
        height: 2px;
      }
    }
    
    .mc-checkbox__label {
      font-size: var(--mc-font-xs);
    }
  }
  
  &--md {
    .mc-checkbox__box {
      width: 18px;
      height: 18px;
      
      .mc-checkbox__check {
        font-size: var(--mc-font-sm);
      }
      
      .mc-checkbox__check--indeterminate {
        width: 8px;
        height: 2px;
      }
    }
    
    .mc-checkbox__label {
      font-size: var(--mc-font-sm);
    }
  }
  
  &--lg {
    .mc-checkbox__box {
      width: 22px;
      height: 22px;
      
      .mc-checkbox__check {
        font-size: var(--mc-font-md);
      }
      
      .mc-checkbox__check--indeterminate {
        width: 10px;
        height: 2px;
      }
    }
    
    .mc-checkbox__label {
      font-size: var(--mc-font-md);
    }
  }
  
  &__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  
  &__box {
    position: relative;
    width: 18px;
    height: 18px;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    transition: all 0.15s ease;
    
    .mc-checkbox--checked & {
      background-color: var(--mc-success-dark);
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
    }
    
    .mc-checkbox:hover:not(.mc-checkbox--disabled) & {
      border-color: var(--mc-border) #888888 #888888 var(--mc-border);
    }
  }
  
  &__check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    
    &--indeterminate {
      background-color: white;
      border: 1px solid white;
    }
    
    &--icon {
      line-height: 1;
    }
  }
  
  &__label {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
  }
}
</style>
