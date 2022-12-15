// comment data type
export interface CommentType {
  src: string
  name: string
  date: string
  content: string
}

export interface CommentsHolderProps {
  data: CommentType[]
}
