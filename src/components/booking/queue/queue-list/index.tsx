import BookingEventCardEmployee, {
  BookingItem,
  Employee
} from 'components/booking/queue/queue-card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Footer from 'components/booking/footer'

export interface QueueListProps {
  bookings: BookingItem[]
  employees: Employee[]
}

function Queue({ bookings, employees }: QueueListProps) {
  const MobileQueueSlider = () => (
    <div className="flex gap-4 w-full dark:bg-dark-200 rounded-md p-6 h-[60vh] overflow-y-scroll sm:hidden bg-white ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {employees?.map((_item) => (
          <SwiperSlide key={_item.resourceId}>
            <div className="flex-1 px-2 dark:bg-dark-200 bg-white h-full sm:p-0 p-6 rounded-xl">
              <BookingEventCardEmployee employee={_item} bookings={bookings} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
  const WebQueue = () => (
    <div className="webQueue sm:flex hidden gap-4 w-full dark:bg-dark-200 bg-white rounded-md p-6 overflow-y-scroll ">
      {employees?.map((_item) => (
        <div className="flex-1" key={_item.resourceId}>
          {' '}
          <BookingEventCardEmployee employee={_item} bookings={bookings} />
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col gap-2 py-4">
      <WebQueue />
      <MobileQueueSlider />
      <Footer />
    </div>
  )
}

export default Queue
