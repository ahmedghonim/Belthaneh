import React from 'react'
import QueueList, { QueueListProps } from 'components/booking/queue/queue-list'
import { FullScreen, FullScreenHandle } from 'react-full-screen'
import QueueHeader, {
  QueueHeaderProps
} from 'components/booking/queue/queue-header'

export interface QueueProps {
  queueListData: QueueListProps
  queueHeader: QueueHeaderProps
  handle: FullScreenHandle
}

export default function Queue({
  handle,
  queueListData,
  queueHeader
}: QueueProps) {
  return (
    <div>
      <QueueHeader {...queueHeader}>
        <FullScreen handle={handle}>
          <QueueList {...queueListData} />
        </FullScreen>
      </QueueHeader>
    </div>
  )
}
