// conversations type
export interface CoversationType {
  src: string
  name: string
  message: string
  replay?: () => void
}

export interface ConversationsType {
  data: CoversationType[]
  replayHandler: () => void
}

export interface Message {
  text: string
  type?: string
  className?: string
}

export interface AllMessages {
  data: Message[]
}

export interface ChatScreenData {
  src: string
  person: string
  messages: Message[]
}

export interface ChatScreenProps extends ChatScreenData {
  show: boolean
  hide: () => void
}
