<script setup lang="ts">
import { computed } from 'vue'
import type { Size, Status } from '@/types/component'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McProgress' })

const props = withDefaults(defineProps<{
  percentage?: number
  size?: Size
  status?: Status
  showText?: boolean
  striped?: boolean
  animated?: boolean
}>(), {
  percentage: 0,
  size: 'md',
  status: 'default',
  showText: true,
  striped: false,
  animated: false
})

const safePercentage = computed(() => {
  return Math.max(0, Math.min(100, props.percentage))
})

const progressClasses = computed(() => clsx(
  'mc-progress',
  `mc-progress--${props.size}`,
  `mc-progress--${props.status}`,
  {
    'mc-progress--striped': props.striped,
    'mc-progress--animated': props.animated
  }
))

const statusColor = computed(() => {
  const colors: Record<Status, string> = {
    success: '#2E7D32',
    warning: '#F57C00',
    error: '#C62828',
    info: '#1976D2',
    default: '#388E3C'
  }
  return colors[props.status]
})
</script>

<template>
  <div :class="progressClasses">
    <span v-if="$slots.prepend" class="mc-progress__prepend">
      <slot name="prepend"></slot>
    </span>
    <div class="mc-progress__track">
      <div class="mc-progress__bar" :style="{ width: `${safePercentage}%`, backgroundColor: statusColor }"></div>
    </div>
    <span v-if="showText" class="mc-progress__text">{{ safePercentage }}%</span>
    <span v-if="$slots.append" class="mc-progress__append">
      <slot name="append"></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-progress {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  
  &--sm {
    .mc-progress__track {
      height: 8px;
    }
    
    .mc-progress__text {
      font-size: var(--mc-font-xs);
    }
  }
  
  &--md {
    .mc-progress__track {
      height: 10px;
    }
    
    .mc-progress__text {
      font-size: var(--mc-font-sm);
    }
  }
  
  &--lg {
    .mc-progress__track {
      height: 14px;
    }
    
    .mc-progress__text {
      font-size: var(--mc-font-md);
    }
  }
  
  &--striped {
    .mc-progress__bar {
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 6px,
        rgba(255, 255, 255, 0.2) 6px,
        rgba(255, 255, 255, 0.2) 12px
      );
    }
  }
  
  &--animated {
    .mc-progress__bar {
      animation: mc-progress-stripes 1s linear infinite;
    }
  }
  
  &__track {
    flex: 1;
    background-color: var(--mc-button-bg);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                inset 2px 2px 0 rgba(255,255,255,0.1);
    overflow: hidden;
  }
  
  &__bar {
    height: 100%;
    background-color: var(--mc-success-dark);
    border-right: 2px solid rgba(0,0,0,0.3);
    transition: width 0.3s ease;
    
    &::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
  }
  
  &__text {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  &__prepend,
  &__append {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    white-space: nowrap;
    flex-shrink: 0;
  }
}

@keyframes mc-progress-stripes {
  from {
    background-position: 12px 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
