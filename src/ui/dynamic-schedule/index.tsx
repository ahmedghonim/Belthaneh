import React, { useMemo } from 'react'
import {
  Calendar,
  EventPropGetter,
  View,
  momentLocalizer
} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export interface DynamicScheduleData<ItemType, HeaderType> {
  start?: Date
  end?: Date
  step?: number
  resources?: object[] | []
  events?: object[]
  defaultDate?: Date
  views?: string[]
  eventStyleGetter?: EventPropGetter<ItemType>
  resourceTitleAccessor?:
    | keyof HeaderType
    | ((resource: HeaderType) => any)
    | undefined
  resourceIdAccessor?:
    | keyof HeaderType
    | ((resource: HeaderType) => any)
    | undefined
  defaultView?: View
  Toolbar?: React.FC | null
  TimeGutterHeader?: React.FC | null
  EventComponent?: React.FC<{ event: ItemType }>
  ResourceHeader?: React.FC<{ resource: HeaderType }> | null
}
interface DynamicScheduleProps<ItemType, HeaderType> {
  data?: DynamicScheduleData<ItemType, HeaderType> | null
  onEventDrop: ({
    event,
    start,
    end
  }: {
    event: object
    start: Date | string
    end: Date | string
    isAllDay: boolean
  }) => void
}

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

export const DynamicSchedule = <CardType, HeaderType>({
  data,
  onEventDrop
}: DynamicScheduleProps<CardType, HeaderType>) => {
  const {
    ResourceHeader,
    step,
    resourceTitleAccessor,
    EventComponent,
    defaultView,
    resourceIdAccessor,
    resources,
    events,
    start,
    end,
    defaultDate: defaultDateView,
    views: arrayOfViews,
    eventStyleGetter,
    Toolbar,
    TimeGutterHeader
  } = data ?? {}

  const { defaultDate } = useMemo(
    () => ({
      views: arrayOfViews,
      defaultDate: defaultDateView
    }),
    [arrayOfViews, defaultDateView]
  )

  const endTime = new Date(new Date(end ?? '').getTime() + (step ?? 0) * 60000)

  return data != null ? (
    <DnDCalendar
      startAccessor={(event: any) => {
        return new Date(event?.start)
      }}
      endAccessor={(event: any) => {
        return new Date(event?.end)
      }}
      onEventDrop={onEventDrop}
      min={new Date(start ?? '')}
      max={new Date(endTime ?? '')}
      defaultDate={defaultDate}
      defaultView={defaultView ?? 'day'}
      events={events}
      localizer={localizer}
      resourceIdAccessor={resourceIdAccessor as any}
      resourceAccessor={resourceIdAccessor as any}
      resources={resources}
      resourceTitleAccessor={resourceTitleAccessor as any}
      step={step}
      timeslots={1}
      eventPropGetter={(event, start, end, isSelected) =>
        (eventStyleGetter?.(event as CardType, start, end, isSelected) ?? {
          style: undefined
        }) as { className?: string | undefined; style?: React.CSSProperties }
      }
      components={{
        event: (props) => (
          <>
            {EventComponent != null && (
              <EventComponent event={props.event as CardType} />
            )}
          </>
        ),
        resourceHeader: (props) => (
          <>
            {ResourceHeader != null && (
              <ResourceHeader resource={props.resource as HeaderType} />
            )}
          </>
        ),
        toolbar: () => <>{Toolbar != null && <Toolbar />}</>,
        timeGutterHeader: () => (
          <>{TimeGutterHeader != null && <TimeGutterHeader />}</>
        )
      }}
      scrollToTime={moment().set({ h: 24, m: 0 }).toDate()}
    />
  ) : null
}
