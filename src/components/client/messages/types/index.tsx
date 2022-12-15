// remaining message box---------------------
export type RemainingMessages = number | string

export interface RemainingMessageProp {
  messagesNum: RemainingMessages
}

// clients messages box---------------------
type onClickFun = (id: string, kind: string) => void

interface BoxMainData {
  icon: SVGElement | any
  formType: string
}

interface BoxSubData {
  boxTitle: string | any
  boxDesc: string | any
  faceDir?: string
  className?: string
  onClickFun?: onClickFun
}
export interface BoxFaceType extends BoxMainData, BoxSubData {
  flipFun: () => void
}

export interface BoxType {
  mainData: BoxMainData
  frontData: BoxSubData
  backData: BoxSubData
  onClickFun?: onClickFun
  formDir?: () => void
}
export interface MessageBoxsType {
  onClickFun: onClickFun
  formDir: () => void
}

// clients message pop form---------------------
export interface FormInitialValuesType {
  messageType: string
  subject: string
  messageContent: string
}

export interface FormControl {
  actionType: string
  formType: string | undefined
  show: boolean
}

export interface FormPropsType extends FormControl {
  onCancel: () => void
  formDir: boolean
}
