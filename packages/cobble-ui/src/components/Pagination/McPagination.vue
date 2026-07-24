<script setup lang="ts">
import { computed } from 'vue'
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McPagination' })

const props = withDefaults(defineProps<{
  currentPage?: number
  total?: number
  pageSize?: number
  showSizeChanger?: boolean
  pageSizes?: number[]
  showTotal?: boolean
}>(), {
  currentPage: 1,
  total: 0,
  pageSize: 10,
  showSizeChanger: false,
  pageSizes: () => [10, 20, 50, 100],
  showTotal: true
})

const emit = defineEmits<{
  'update:currentPage': [value: number]
  'update:pageSize': [value: number]
  change: [page: number, pageSize: number]
}>()

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(props.total / props.pageSize))
})

const visiblePages = computed(() => {
  const pages: number[] = []
  const total = totalPages.value
  const current = props.currentPage
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push(-1)
      pages.push(total)
    } else if (current >= total - 3) {
      pages.push(1)
      pages.push(-1)
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push(-1)
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push(-1)
      pages.push(total)
    }
  }
  
  return pages
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value && page !== props.currentPage) {
    emit('update:currentPage', page)
    emit('change', page, props.pageSize)
  }
}

const prevPage = () => {
  goToPage(props.currentPage - 1)
}

const nextPage = () => {
  goToPage(props.currentPage + 1)
}

const firstPage = () => {
  goToPage(1)
}

const lastPage = () => {
  goToPage(totalPages.value)
}

const changePageSize = (size: number) => {
  emit('update:pageSize', size)
  emit('update:currentPage', 1)
  emit('change', 1, size)
}
</script>

<template>
  <div class="mc-pagination">
    <div v-if="showTotal" class="mc-pagination__total">
      Total: {{ total }}
    </div>
    
    <div class="mc-pagination__nav">
      <button
        class="mc-pagination__btn mc-pagination__btn--first"
        :disabled="currentPage === 1"
        @click="firstPage"
      >
        <<
      </button>
      
      <button
        class="mc-pagination__btn mc-pagination__btn--prev"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <
      </button>
      
      <div class="mc-pagination__pages">
        <span
          v-for="page in visiblePages"
          :key="page"
          :class="clsx(
            'mc-pagination__page',
            {
              'mc-pagination__page--active': page === currentPage,
              'mc-pagination__page--ellipsis': page === -1
            }
          )"
          @click="page !== -1 && goToPage(page)"
        >
          {{ page === -1 ? '...' : page }}
        </span>
      </div>
      
      <button
        class="mc-pagination__btn mc-pagination__btn--next"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        >
      </button>
      
      <button
        class="mc-pagination__btn mc-pagination__btn--last"
        :disabled="currentPage === totalPages"
        @click="lastPage"
      >
        >>
      </button>
    </div>
    
    <div v-if="showSizeChanger" class="mc-pagination__size-changer">
      <span>Page size:</span>
      <select :value="pageSize" @change="changePageSize(Number(($event.target as HTMLSelectElement).value))">
        <option v-for="size in pageSizes" :key="size" :value="size">
          {{ size }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  
  &__total {
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  &__btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
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
      opacity: 0.5;
    }
  }
  
  &__pages {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  &__page {
    min-width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.15s ease;
    
    &:hover:not(.mc-pagination__page--ellipsis) {
      background-color: #4C4C4C;
      border-color: #6C6C6C #4C4C4C #4C4C4C #6C6C6C;
    }
    
    &--active {
      background-color: #388E3C;
      color: white;
      border: 2px solid;
      border-color: #4CAF50 #2E7D32 #2E7D32 #4CAF50;
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.2);
    }
    
    &--ellipsis {
      cursor: default;
      color: var(--mc-text-secondary);
    }
  }
  
  &__size-changer {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    
    select {
      padding: 6px 10px;
      background-color: #3C3C3C;
      border: 2px solid;
      border-color: #5C5C5C #3C3C3C #3C3C3C #5C5C5C;
      box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3),
                  inset 2px 2px 0 rgba(255,255,255,0.1);
      font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
      font-size: var(--mc-font-sm);
      color: var(--mc-text);
      cursor: pointer;
    }
  }
}
</style>
