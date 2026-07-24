<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Size } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McSlider' })

const props = withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
  step?: number
  size?: Size
  disabled?: boolean
  showTooltip?: boolean
  vertical?: boolean
}>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
  disabled: false,
  showTooltip: false,
  vertical: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  input: [value: number]
  change: [value: number]
}>()

const sliderRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

const tooltipValue = computed(() => props.modelValue)

const updateValue = (clientX: number, clientY: number) => {
  if (!sliderRef.value || props.disabled) return
  
  const rect = sliderRef.value.getBoundingClientRect()
  let position: number
  
  if (props.vertical) {
    position = 1 - ((clientY - rect.top) / rect.height)
  } else {
    position = (clientX - rect.left) / rect.width
  }
  
  position = Math.max(0, Math.min(1, position))
  const rawValue = props.min + position * (props.max - props.min)
  const steppedValue = Math.round(rawValue / props.step) * props.step
  const clampedValue = Math.max(props.min, Math.min(props.max, steppedValue))
  
  emit('update:modelValue', clampedValue)
  emit('input', clampedValue)
}

const handleMouseDown = (event: MouseEvent) => {
  isDragging.value = true
  updateValue(event.clientX, event.clientY)
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value) {
    updateValue(event.clientX, event.clientY)
  }
}

const handleMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false
    emit('change', props.modelValue)
  }
}

const handleTouchStart = (event: TouchEvent) => {
  isDragging.value = true
  const touch = event.touches[0]
  updateValue(touch.clientX, touch.clientY)
}

const handleTouchMove = (event: TouchEvent) => {
  if (isDragging.value) {
    const touch = event.touches[0]
    updateValue(touch.clientX, touch.clientY)
  }
}

const handleTouchEnd = () => {
  if (isDragging.value) {
    isDragging.value = false
    emit('change', props.modelValue)
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('touchmove', handleTouchMove)
  window.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)
})

const sliderClasses = computed(() => clsx(
  'mc-slider',
  `mc-slider--${props.size}`,
  {
    'mc-slider--disabled': props.disabled,
    'mc-slider--vertical': props.vertical
  }
))
</script>

<template>
  <div :class="sliderClasses">
    <div
      ref="sliderRef"
      class="mc-slider__track"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
    >
      <div
        class="mc-slider__fill"
        :style="vertical ? { height: `${percentage}%` } : { width: `${percentage}%` }"
      ></div>
      <div
        class="mc-slider__thumb"
        :style="vertical ? { bottom: `${percentage}%` } : { left: `${percentage}%` }"
      ></div>
    </div>
    <div
      v-if="showTooltip"
      class="mc-slider__tooltip"
      :style="vertical ? { bottom: `${percentage}%` } : { left: `${percentage}%` }"
    >
      {{ tooltipValue }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-slider {
  position: relative;
  display: inline-flex;
  align-items: center;
  
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  &--vertical {
    height: 160px;
    width: 24px;
    
    .mc-slider__track {
      width: 10px;
      height: 100%;
    }
  }
  
  &--sm {
    width: 120px;
    
    .mc-slider__track {
      height: 8px;
    }
    
    .mc-slider__thumb {
      width: 14px;
      height: 14px;
    }
  }
  
  &--md {
    width: 200px;
    
    .mc-slider__track {
      height: 10px;
    }
    
    .mc-slider__thumb {
      width: 18px;
      height: 18px;
    }
  }
  
  &--lg {
    width: 300px;
    
    .mc-slider__track {
      height: 12px;
    }
    
    .mc-slider__thumb {
      width: 22px;
      height: 22px;
    }
  }
  
  &__track {
    position: relative;
    width: 100%;
    height: 10px;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    cursor: pointer;
  }
  
  &__fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--mc-success-dark);
    border-right: 2px solid rgba(0,0,0,0.3);
    transition: width 0.1s ease, height 0.1s ease;
    
    &::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
    
    .mc-slider--vertical & {
      top: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      border-right: none;
      border-top: 2px solid rgba(0,0,0,0.3);
    }
  }
  
  &__thumb {
    position: absolute;
    top: 50%;
    width: 18px;
    height: 18px;
    background-color: #5C5C5C;
    border: 2px solid;
    border-color: #7C7C7C #4C4C4C #4C4C4C #7C7C7C;
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.2);
    transform: translate(-50%, -50%);
    cursor: grab;
    transition: left 0.1s ease, bottom 0.1s ease;
    
    &:active {
      cursor: grabbing;
      background-color: #4CAF50;
      border-color: #66BB6A #2E7D32 #2E7D32 #66BB6A;
    }
    
    .mc-slider--vertical & {
      left: 50%;
      top: auto;
    }
  }
  
  &__tooltip {
    position: absolute;
    top: -32px;
    padding: 4px 8px;
    background-color: #388E3C;
    color: white;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-xs);
    border: 2px solid;
    border-color: #4CAF50 #2E7D32 #2E7D32 #4CAF50;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.2);
    transform: translateX(-50%);
    white-space: nowrap;
    
    .mc-slider--vertical & {
      top: auto;
      left: 32px;
      bottom: 50%;
      transform: translateY(50%);
    }
  }
}
</style>
