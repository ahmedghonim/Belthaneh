const ReactSelectTheme = (theme: string | 'dark' | 'light' | undefined) => ({
  control: (base: any) => ({
    ...base,
    height: '40px',
    minHeight: '40px',
    backgroundColor: 'transparent',
    borderColor: '#525252',
    boxShadow: null,
    flexWrap: 'nowrap',
    color: 'white',
    ':active': {
      ...base[':active'],
      color: 'white',
      backgroundColor: '#3031D9'
    }
  }),
  valueContainer: (base: any) => ({
    ...base,
    height: '40px',
    minHeight: '40px',
    padding: '0 6px',
    flexWrap: 'nowrap'
  }),
  indicatorsContainer: (base: any) => ({
    ...base,
    height: '40px'
  }),
  singleValue: (base: any) => ({
    ...base,
    color: theme === 'light' ? '#1E1E1E' : '#FFFFFF'
  }),
  option: (base: any, { isFocused }: { isFocused: boolean }) => {
    return {
      ...base,
      backgroundColor: isFocused && '#3031D9',
      color: isFocused && '#FFFFFF',
      borderRadius: 10,
      cursor: 'pointer',
      ':active': {
        ...base[':active'],
        backgroundColor: '#3031D9',
        color: theme === 'dark' ? '#FFFFFF' : '#1E1E1E'
      }
    }
  },
  menu: (base: any) => ({
    ...base,
    zIndex: 9999,

    backgroundColor: theme === 'dark' ? '#1E1E1E' : '#FFFFFF',
    borderRadius: 10,
    marginTop: 10
  }),
  menuList: (base: any) => ({
    ...base,
    padding: 10
  }),

  multiValue: (base: any) => {
    return {
      ...base,
      backgroundColor: '#3031D9'
    }
  },
  multiValueLabel: (base: any) => ({
    color: 'white'
  }),
  multiValueRemove: (base: any) => ({
    color: 'white',
    ':hover': {
      backgroundColor: 'red',
      color: 'white'
    }
  })
})

export default ReactSelectTheme
