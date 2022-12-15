import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { CommentType } from 'components/client/comments/types'
import { Text } from 'ui'
import CommentsHolder from './comments-holder'
import NavigatorTabs from '../navigator-tabs'

// comments data
const allComments: CommentType[] = [
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'maxblagun',
    date: '2 weeks ago',
    content:
      'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'
  },
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'maxblagun',
    date: '2 weeks ago',
    content:
      'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'
  }
]
const newComments: CommentType[] = [
  {
    src: 'https://placeimg.com/192/192/people',
    name: 'maxblagun',
    date: '2 weeks ago',
    content:
      'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'
  }
]

function Comments() {
  const { t } = useTranslation('common')

  return (
    <section className="xs:pb-24 pb-6">
      <section>
        <NavigatorTabs splitNum={3} />
      </section>
      <section className="flex flex-col xs:gap-10 gap-4 mt-4">
        <div>
          <Text as="h1" className="!capitalize xs:!mb-4 !mb-1">
            {t('all_comments')}
          </Text>
          <CommentsHolder data={allComments} />
        </div>
        <div>
          <Text as="h1" className="!capitalize xs:!mb-4 !mb-1">
            {t('new_comments')}
          </Text>
          <CommentsHolder data={newComments} />
        </div>
      </section>
    </section>
  )
}

export default Comments
