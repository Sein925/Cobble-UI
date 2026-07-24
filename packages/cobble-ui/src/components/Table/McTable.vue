<script setup lang="ts">
import { clsx } from '@/utils/classNames'

defineOptions({ name: 'McTable' })

export interface TableColumn {
  key: string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface TableRow {
  [key: string]: any
}

const props = withDefaults(defineProps<{
  columns: TableColumn[]
  data: TableRow[]
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
}>(), {
  bordered: true,
  striped: false,
  hoverable: false
})

const tableClasses = clsx(
  'mc-table',
  {
    'mc-table--bordered': props.bordered,
    'mc-table--striped': props.striped,
    'mc-table--hoverable': props.hoverable
  }
)
</script>

<template>
  <div class="mc-table__wrapper">
    <table :class="tableClasses">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            :class="clsx('mc-table__th', `mc-table__th--${column.align || 'left'}`)"
            :style="{ width: column.width }"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          :class="clsx(
            'mc-table__tr',
            { 'mc-table__tr--striped': striped && rowIndex % 2 === 0 }
          )"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            :class="clsx('mc-table__td', `mc-table__td--${column.align || 'left'}`)"
          >
            <slot :name="`cell-${column.key}`" :value="row[column.key]" :row="row">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="data.length === 0" class="mc-table__empty">
          <td :colspan="columns.length">
            No data
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
$pixel-size: 4px;

.mc-table {
  &__wrapper {
    overflow-x: auto;
    border: 2px solid;
    border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    box-shadow: inset -2px -2px 0 rgba(0,0,0,0.2),
                inset 2px 2px 0 rgba(255,255,255,0.05);
    background-color: var(--mc-surface);
  }
  
  width: 100%;
  border-collapse: collapse;
  
  &--bordered {
    .mc-table__th,
    .mc-table__td {
      border: 1px solid var(--mc-border);
    }
    
    thead {
      border-bottom: 2px solid;
      border-color: var(--mc-border-light) var(--mc-border) var(--mc-border) var(--mc-border-light);
    }
  }
  
  &--striped {
    .mc-table__tr--striped {
      background-color: rgba(76,175,80,0.05);
    }
  }
  
  &--hoverable {
    .mc-table__tr:hover {
      background-color: var(--mc-success-dark);
      color: white;
    }
    
    .mc-table__tr:hover .mc-table__td {
      color: white;
    }
  }
  
  &__th {
    padding: 10px 14px;
    background-color: var(--mc-button-bg);
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    font-weight: bold;
    color: var(--mc-text);
    text-align: left;
    box-shadow: inset -1px -1px 0 rgba(0,0,0,0.3),
                inset 1px 1px 0 rgba(255,255,255,0.1);
    
    &--center {
      text-align: center;
    }
    
    &--right {
      text-align: right;
    }
  }
  
  &__td {
    padding: 10px 14px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text);
    text-align: left;
    background-color: var(--mc-surface);
    
    &--center {
      text-align: center;
    }
    
    &--right {
      text-align: right;
    }
  }
  
  &__tr {
    transition: all 0.15s ease;
  }
  
  &__empty {
    text-align: center;
    padding: 32px;
    font-family: 'Mojangles', 'Press Start 2P', 'Courier New', monospace;
    font-size: var(--mc-font-sm);
    color: var(--mc-text-secondary);
    background-color: #282828;
  }
}
</style>
