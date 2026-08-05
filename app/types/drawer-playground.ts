export interface DrawerPlaygroundState {
  open: boolean
  side: 'left' | 'right'
  width: string
  appearance: 'default' | 'transparent'
  floating: boolean
  absolute: boolean
  elevation: string
}