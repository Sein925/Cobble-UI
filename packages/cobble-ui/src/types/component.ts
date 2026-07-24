export type Size = 'sm' | 'md' | 'lg'

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

export type Status = 'default' | 'success' | 'warning' | 'error' | 'info'

export interface BaseProps {
  size?: Size
  variant?: Variant
  status?: Status
  disabled?: boolean
}
