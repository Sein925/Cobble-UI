<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Size, Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McInput' })

const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  size?: Size
  status?: Status
  disabled?: boolean
  readonly?: boolean
  icon?: string
  showPassword?: boolean
}>(), {
  modelValue: '',
  type: 'text',
  size: 'md',
  status: 'default',
  disabled: false,
  readonly: false,
  showPassword: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'update:showPassword': [value: boolean]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const isFocused = ref(false)

const inputClasses = computed(() => clsx(
  'mc-input',
  `mc-input--${props.size}`,
  `mc-input--${props.status}`,
  {
    'mc-input--disabled': props.disabled,
    'mc-input--readonly': props.readonly,
    'mc-input--focused': isFocused.value
  }
))

const inputType = computed(() => {
  if (props.type === 'password' && props.showPassword) return 'text'
  return props.type
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', props.type === 'number' ? parseFloat(target.value) || '' : target.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const togglePassword = () => {
  if (props.type === 'password' && !props.disabled && !props.readonly) {
    emit('update:showPassword', !props.showPassword)
  }
}
</script>

<template>
  <div class="mc-input-wrapper">
    <span v-if="icon" class="mc-input__icon">{{ icon }}</span>
    <input
      :class="inputClasses"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <button
      v-if="type === 'password'"
      class="mc-input__toggle-password"
      :disabled="disabled || readonly"
      @click="togglePassword"
      :title="showPassword ? '隐藏密码' : '显示密码'"
    >
      {{ showPassword ? '✕' : '○' }}
    </button>
    <span v-if="status !== 'default'" class="mc-input__status-indicator"></span>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.mc-input {
  width: 100%;
  padding: 12px 44px 12px 42px;
  background-color: var(--mc-input-bg);
  border: 3px solid;
  border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
  color: var(--mc-text);
  font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
  font-size: var(--mc-font-lg);
  outline: none;
  box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
              inset -2px -2px 0 rgba(255,255,255,0.05);
  transition: all 0.2s ease;
  
  &::placeholder {
    color: var(--mc-text-muted);
    opacity: 0.7;
  }
  
  &:focus {
    border-color: var(--mc-primary) var(--mc-primary-dark) var(--mc-primary-dark) var(--mc-primary);
    box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                inset -2px -2px 0 rgba(255,255,255,0.05),
                0 0 0 3px rgba(76, 175, 80, 0.2);
    transform: translateY(-1px);
  }
  
  &--sm {
    padding: 8px 36px 8px 34px;
    font-size: var(--mc-font-sm);
    border-width: 2px;
    
    &:focus {
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05),
                  0 0 0 2px rgba(76, 175, 80, 0.2);
    }
  }
  
  &--md {
    padding: 12px 44px 12px 42px;
    font-size: var(--mc-font-lg);
  }
  
  &--lg {
    padding: 16px 52px 16px 50px;
    font-size: var(--mc-font-xl);
    
    &:focus {
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05),
                  0 0 0 4px rgba(76, 175, 80, 0.2);
    }
  }
  
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    border-color: var(--mc-border);
    
    &:focus {
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05);
      transform: none;
    }
  }
  
  &--readonly {
    cursor: default;
    background-color: var(--mc-surface);
    
    &:focus {
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05);
      transform: none;
    }
  }
  
  &--success {
    border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
    
    &:focus {
      border-color: #66BB6A var(--mc-success) var(--mc-success) #66BB6A;
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05),
                  0 0 0 3px rgba(76, 175, 80, 0.2);
    }
  }
  
  &--warning {
    border-color: var(--mc-warning) var(--mc-warning-dark) var(--mc-warning-dark) var(--mc-warning);
    
    &:focus {
      border-color: #FFB74D var(--mc-warning) var(--mc-warning) #FFB74D;
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05),
                  0 0 0 3px rgba(255, 152, 0, 0.2);
    }
  }
  
  &--error {
    border-color: var(--mc-error) var(--mc-error-dark) var(--mc-error-dark) var(--mc-error);
    
    &:focus {
      border-color: #EF5350 #F44336 #F44336 #EF5350;
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.05),
                  0 0 0 3px rgba(244, 67, 54, 0.2);
    }
  }
  
  &__icon {
    position: absolute;
    left: 14px;
    font-size: var(--mc-font-xl);
    color: var(--mc-text-secondary);
    pointer-events: none;
    transition: color 0.2s ease;
    
    .mc-input--focused & {
      color: var(--mc-primary);
    }
  }
  
  &__toggle-password {
    position: absolute;
    right: 10px;
    width: 26px;
    height: 26px;
    padding: 0;
    background-color: var(--mc-input-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    color: var(--mc-text-secondary);
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.2),
                inset 1px 1px 0 rgba(255,255,255,0.1);
    
    &:hover:not(:disabled) {
      border-color: var(--mc-primary) var(--mc-primary-dark) var(--mc-primary-dark) var(--mc-primary);
      color: var(--mc-primary);
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
    
    &:active:not(:disabled) {
      border-color: var(--mc-primary-dark) var(--mc-primary) var(--mc-primary) var(--mc-primary-dark);
      box-shadow: inset 1px 1px 0 rgba(0,0,0,0.3),
                  inset -1px -1px 0 rgba(255,255,255,0.1);
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    
    .mc-input--focused & {
      border-color: var(--mc-primary) var(--mc-primary-dark) var(--mc-primary-dark) var(--mc-primary);
    }
  }
  
  &__status-indicator {
    position: absolute;
    right: 10px;
    width: 10px;
    height: 10px;
    pointer-events: none;
    
    .mc-input--success & {
      background-color: #4CAF50;
      box-shadow: inset 1px 1px 0 rgba(255,255,255,0.3),
                  inset -1px -1px 0 rgba(0,0,0,0.3);
    }
    
    .mc-input--warning & {
      background-color: #FF9800;
      box-shadow: inset 1px 1px 0 rgba(255,255,255,0.3),
                  inset -1px -1px 0 rgba(0,0,0,0.3);
    }
    
    .mc-input--error & {
      background-color: #F44336;
      box-shadow: inset 1px 1px 0 rgba(255,255,255,0.3),
                  inset -1px -1px 0 rgba(0,0,0,0.3);
    }
    
    .mc-input--focused & {
      transform: scale(1.1);
    }
  }
}
</style>
