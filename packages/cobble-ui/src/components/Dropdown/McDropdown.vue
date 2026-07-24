<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McDropdown' })

export interface DropdownOption {
  label: string
  value: string | number
  disabled?: boolean
  divided?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string | number
  options?: DropdownOption[]
  trigger?: 'hover' | 'click'
  disabled?: boolean
}>(), {
  options: () => [],
  trigger: 'click',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [value: string | number]
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: DropdownOption) => {
  if (!option.disabled && !props.disabled) {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div ref="dropdownRef" class="mc-dropdown">
    <button
      :class="clsx(
        'mc-dropdown__trigger',
        { 'mc-dropdown__trigger--open': isOpen }
      )"
      :disabled="disabled"
      @click="toggleDropdown"
      @mouseenter="trigger === 'hover' && !disabled && (isOpen = true)"
      @mouseleave="trigger === 'hover' && !disabled && (isOpen = false)"
    >
      <slot>
        {{ modelValue || 'Select' }}
      </slot>
      <span class="mc-dropdown__arrow">▼</span>
    </button>
    <Transition name="mc-dropdown">
      <div v-if="isOpen" class="mc-dropdown__menu">
        <div
          v-for="option in options"
          :key="option.value"
          :class="clsx(
            'mc-dropdown__option',
            {
              'mc-dropdown__option--disabled': option.disabled,
              'mc-dropdown__option--divided': option.divided,
              'mc-dropdown__option--selected': option.value === modelValue
            }
          )"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
        <div v-if="options.length === 0" class="mc-dropdown__empty">
          No options
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-dropdown {
  position: relative;
  display: inline-flex;
  
  &__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
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
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    &--open {
      background-color: var(--mc-success-dark);
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
    }
  }
  
  &__arrow {
    font-size: var(--mc-font-xs);
    color: var(--mc-text-secondary);
    transition: transform 0.15s ease;
    
    .mc-dropdown__trigger--open & {
      transform: rotate(180deg);
      color: white;
    }
  }
  
  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
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
    
    &:hover:not(.mc-dropdown__option--disabled) {
      background-color: var(--mc-primary-dark);
      color: white;
    }
    
    &--selected {
      background-color: var(--mc-primary-dark);
      color: white;
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
    
    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
      color: var(--mc-text-secondary);
    }
    
    &--divided {
      border-top: 2px solid var(--mc-border);
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

.mc-dropdown-enter-active,
.mc-dropdown-leave-active {
  transition: all 0.15s ease;
}

.mc-dropdown-enter-from,
.mc-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
