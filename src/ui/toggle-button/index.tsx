import Button from 'ui/button'

export interface ToggleButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  first: { label: string; value: string }
  second: { label: string; value: string }
  checked: string
  className: string
  handleToggle: (value: string) => void
}

export default function ToggleButton({
  first,
  second,
  handleToggle,
  checked,
  ...props
}: ToggleButtonProps) {
  const { className, ...otherProps } = props
  return (
    <div className={`flex w-full ${className}`} {...otherProps}>
      <Button
        className={`justify-center flex-1 ltr:rounded-r-none rtl:rounded-l-none !border-dark-300 font-bold text-md  ${
          checked !== first.value ? '!text-dark-300 bg-transparent' : ''
        }`}
        primary={checked === first.value}
        onClick={() => handleToggle(first.value)}
        primaryBorder={checked !== first.value}
      >
        {first.label}
      </Button>
      <Button
        className={`justify-center flex-1 ltr:rounded-l-none rtl:rounded-r-none  !border-dark-300 font-bold text-md ${
          checked !== second.value ? '!text-dark-300 bg-transparent' : ''
        }`}
        primary={checked === second.value}
        onClick={() => handleToggle(second.value)}
        primaryBorder={checked !== second.value}
      >
        {second.label}
      </Button>
    </div>
  )
}
