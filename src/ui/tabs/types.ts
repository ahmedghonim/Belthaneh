export interface TabProps {
  isActive?: boolean
  primaryBorder?: boolean
  label: string
  size?: 'small' | 'medium'
  onClick: () => void
}
