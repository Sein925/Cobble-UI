<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Size, Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McSelect' })

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  size?: Size
  status?: Status
  disabled?: boolean
  readonly?: boolean
}>(), {
  options: () => [],
  placeholder: 'Select',
  size: 'md',
  status: 'default',
  disabled: false,
  readonly: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

const displayLabel = computed(() => {
  return selectedOption.value?.label || props.placeholder
})

const toggleDropdown = () => {
  if (!props.disabled && !props.readonly) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: SelectOption) => {
  if (!option.disabled && !props.disabled) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

const selectClasses = computed(() => clsx(
  'mc-select',
  `mc-select--${props.size}`,
  `mc-select--${props.status}`,
  {
    'mc-select--disabled': props.disabled,
    'mc-select--readonly': props.readonly,
    'mc-select--open': isOpen.value
  }
))
</script>

<template>
  <div ref="selectRef" :class="selectClasses">
    <div class="mc-select__trigger" @click="toggleDropdown">
      <span class="mc-select__value">{{ displayLabel }}</span>
      <span class="mc-select__arrow">▼</span>
    </div>
    <div v-if="isOpen" class="mc-select__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        :class="clsx(
          'mc-select__option',
          {
            'mc-select__option--selected': option.value === modelValue,
            'mc-select__option--disabled': option.disabled
          }
        )"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
      <div v-if="options.length === 0" class="mc-select__empty">
        No options
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-select {
  position: relative;
  display: inline-flex;
  
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &--readonly {
    cursor: default;
  }
  
  &--sm {
    .mc-select__trigger {
      padding: 8px 12px;
      font-size: var(--mc-font-sm);
    }
  }
  
  &--md {
    .mc-select__trigger {
      padding: 10px 14px;
      font-size: var(--mc-font-sm);
    }
  }
  
  &--lg {
    .mc-select__trigger {
      padding: 14px 18px;
      font-size: var(--mc-font-md);
    }
  }
  
  &--success {
    .mc-select__trigger {
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
    }
  }
  
  &--warning {
    .mc-select__trigger {
      border-color: var(--mc-warning) var(--mc-warning-dark) var(--mc-warning-dark) var(--mc-warning);
    }
  }
  
  &--error {
    .mc-select__trigger {
      border-color: var(--mc-error) var(--mc-error-dark) var(--mc-error-dark) var(--mc-error);
    }
  }
  
  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    min-width: 180px;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    cursor: pointer;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    transition: all 0.15s ease;
    
    &:hover:not(:disabled) {
      background-color: var(--mc-button-hover);
      border-color: var(--mc-border) #888888 #888888 var(--mc-border);
    }
    
    &:active:not(:disabled) {
      background-color: var(--mc-button-pressed);
      border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
      box-shadow: inset 2px 2px 0 rgba(0,0,0,0.3),
                  inset -2px -2px 0 rgba(255,255,255,0.1);
    }
  }
  
  &__value {
    flex: 1;
    text-align: left;
  }
  
  &__arrow {
    margin-left: 8px;
    font-size: var(--mc-font-xs);
    color: var(--mc-text-secondary);
    transition: transform 0.15s ease;
    
    .mc-select--open & {
      transform: rotate(180deg);
    }
  }
  
  &__dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    min-width: 100%;
    background-color: var(--mc-surface);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
                inset 2px 2px 0 rgba(255,255,255,0.05),
                4px 4px 0 rgba(0,0,0,0.3);
    z-index: 100;
    max-height: 200px;
    overflow-y: auto;
  }
  
  &__option {
    padding: 10px 14px;
    cursor: pointer;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    transition: all 0.15s ease;
    
    &:hover:not(.mc-select__option--disabled) {
      background-color: var(--mc-success-dark);
      color: white;
    }
    
    &--selected {
      background-color: var(--mc-success-dark);
      color: white;
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
    
    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
      color: var(--mc-text-secondary);
    }
  }
  
  &__empty {
    padding: 16px;
    text-align: center;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
  }
}
</style>
