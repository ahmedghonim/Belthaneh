import SettingComponent, { InitialValues } from 'components/online/setting'

function Setting() {
  const domainData = {
    onClickCopy: () => undefined
  }
  const settingProps = {
    domainData,
    onSubmit: (values: InitialValues) => {
      //
      // console.log(values, 'values')
    }
  }
  return (
    <div>
      <SettingComponent {...settingProps} />
    </div>
  )
}

export default Setting
