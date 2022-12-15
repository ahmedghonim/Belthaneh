interface SubMenuProps {
  label: string
  href: string
}

export interface ToolProps {
  label: string
  icon: any
  href: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggle?: boolean
  open?: boolean
  subMenu?: SubMenuProps[]
}
