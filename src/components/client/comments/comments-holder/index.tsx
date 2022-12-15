import React from 'react'
import { CommentsHolderProps } from 'components/client/comments/types'
import Comment from '../comment'

function CommentsHolder({ data }: CommentsHolderProps) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((comment) => {
        return <Comment key={comment.content} {...comment} />
      })}
    </div>
  )
}

export default CommentsHolder
