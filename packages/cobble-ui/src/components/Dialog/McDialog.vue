<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'McDialog' })

const props = withDefaults(defineProps<{
  modelValue?: boolean
  visible?: boolean
  title?: string
  width?: string
  closable?: boolean
  maskClosable?: boolean
}>(), {
  modelValue: false,
  visible: false,
  width: '400px',
  closable: true,
  maskClosable: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:visible': [value: boolean]
  close: []
  confirm: []
}>()

const isVisible = computed({
  get: () => props.modelValue || props.visible,
  set: (value: boolean) => {
    emit('update:modelValue', value)
    emit('update:visible', value)
  }
})

const dialogRef = ref<HTMLElement | null>(null)

const handleClose = () => {
  isVisible.value = false
  emit('close')
}

const handleConfirm = () => {
  emit('confirm')
}

const handleMaskClick = (event: MouseEvent) => {
  if (props.maskClosable && event.target === event.currentTarget) {
    handleClose()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isVisible.value) {
    handleClose()
  }
}

watch(isVisible, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="mc-dialog-fade">
      <div
        v-if="isVisible"
        class="mc-dialog__wrapper"
        @click="handleMaskClick"
      >
        <div class="mc-dialog__mask"></div>
        <Transition name="mc-dialog-scale">
          <div
            v-if="isVisible"
            ref="dialogRef"
            class="mc-dialog"
            :style="{ width }"
          >
            <div class="mc-dialog__header">
              <span class="mc-dialog__title">{{ title }}</span>
              <span
                v-if="closable"
                class="mc-dialog__close"
                @click="handleClose"
              >
                ✕
              </span>
            </div>
            <div class="mc-dialog__body">
              <slot></slot>
            </div>
            <div class="mc-dialog__footer">
              <slot name="footer">
                <button class="mc-dialog__btn mc-dialog__btn--cancel" @click="handleClose">
                  Cancel
                </button>
                <button class="mc-dialog__btn mc-dialog__btn--confirm" @click="handleConfirm">
                  Confirm
                </button>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-dialog {
  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  position: relative;
  width: 400px;
  background-color: var(--mc-surface);
  border: 2px solid;
  border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
  box-shadow: inset -4px -4px 0 rgba(0,0,0,0.3),
              inset 4px 4px 0 rgba(255,255,255,0.05);
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    border-bottom: 2px solid var(--mc-border);
  }
  
  &__title {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-md);
    font-weight: bold;
    color: var(--mc-text);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &__close {
    font-size: var(--mc-font-lg);
    color: var(--mc-text-secondary);
    cursor: pointer;
    padding: 2px;
    border: 2px solid transparent;
    
    &:hover {
      color: var(--mc-text);
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
      background-color: rgba(76,175,80,0.1);
    }
  }
  
  &__body {
    padding: 14px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    line-height: 1.6;
  }
  
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 14px;
    border-top: 2px solid var(--mc-border);
  }
  
  &__btn {
    padding: 8px 14px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    border: 2px solid;
    cursor: pointer;
    transition: all 0.15s ease;
    
    &--cancel {
      background-color: var(--mc-button-bg);
      color: var(--mc-text);
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.1);
      
      &:hover {
        background-color: var(--mc-button-hover);
      }
      
      &:active {
        background-color: var(--mc-button-pressed);
        border-color: var(--mc-border) var(--mc-border-light) var(--mc-border-light) var(--mc-border);
      }
    }
    
    &--confirm {
      background-color: var(--mc-success-dark);
      color: white;
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
      
      &:hover {
        background-color: var(--mc-success);
      }
      
      &:active {
        background-color: #1B5E20;
        border-color: #1B5E20 var(--mc-success) var(--mc-success) #1B5E20;
      }
    }
  }
}

.mc-dialog-fade-enter-active,
.mc-dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mc-dialog-fade-enter-from,
.mc-dialog-fade-leave-to {
  opacity: 0;
}

.mc-dialog-scale-enter-active,
.mc-dialog-scale-leave-active {
  transition: transform 0.2s ease;
}

.mc-dialog-scale-enter-from {
  transform: scale(0.9);
}

.mc-dialog-scale-leave-to {
  transform: scale(0.9);
}
</style>
