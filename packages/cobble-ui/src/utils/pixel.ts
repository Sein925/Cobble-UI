export function pixelize(value: number, pixelSize: number = 4): number {
  return Math.floor(value / pixelSize) * pixelSize
}

export function createPixelBorder(radius: number = 2): string {
  return `${radius}px`
}

export function getPixelShadow(color: string, offset: number = 4): string {
  return `${offset}px ${offset}px 0 ${color}`
}

export function getPixelShadowDark(color: string, offset: number = 4): string {
  return `-${offset}px -${offset}px 0 ${color}`
}
