<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McBreadcrumb' })

export interface BreadcrumbItem {
  label: string
  path?: string
}

withDefaults(defineProps<{
  items?: BreadcrumbItem[]
  separator?: string
}>(), {
  items: () => [],
  separator: '>'
})

const emit = defineEmits<{
  click: [item: BreadcrumbItem]
}>()

const handleClick = (item: BreadcrumbItem) => {
  if (item.path) {
    emit('click', item)
  }
}
</script>

<template>
  <nav class="mc-breadcrumb">
    <ol class="mc-breadcrumb__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="clsx(
          'mc-breadcrumb__item',
          { 'mc-breadcrumb__item--last': index === items.length - 1 }
        )"
      >
        <span
          v-if="index === items.length - 1"
          class="mc-breadcrumb__label"
        >
          {{ item.label }}
        </span>
        <a
          v-else
          :href="item.path"
          class="mc-breadcrumb__link"
          @click.prevent="handleClick(item)"
        >
          {{ item.label }}
        </a>
        <span v-if="index < items.length - 1" class="mc-breadcrumb__separator">
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-breadcrumb {
  &__list {
    display: flex;
    align-items: center;
    gap: 6px;
    list-style: none;
    padding: 10px 14px;
    margin: 0;
    background-color: var(--mc-surface);
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
                inset 2px 2px 0 rgba(255,255,255,0.05);
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 6px;
    
    &--last {
      .mc-breadcrumb__label {
        color: var(--mc-text);
      }
    }
  }
  
  &__link {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-primary);
    text-decoration: none;
    padding: 4px 8px;
    border: 2px solid transparent;
    transition: all 0.15s ease;
    
    &:hover {
      color: white;
      background-color: var(--mc-success-dark);
      border-color: var(--mc-success) var(--mc-success-dark) var(--mc-success-dark) var(--mc-success);
      box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                  inset 1px 1px 0 rgba(255,255,255,0.2);
    }
  }
  
  &__label {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    padding: 4px 8px;
  }
  
  &__separator {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: #5C5C5C;
  }
}
</style>
