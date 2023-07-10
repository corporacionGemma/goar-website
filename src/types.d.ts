export interface Featured {
  src: string
  type: string
  title: string
  id: number
  subtitle: string
  description: string
}
export interface SocialNetwork {
  id: number
  label: string
  href: string
}
export interface CountNumber {
  start?: number
  end?: number
  duration?: number
  separator?: string
  suffix?: string
}

export interface RoutesIF {
  label: string
  path: string
  delayOut: number
  delayIn: number
}
