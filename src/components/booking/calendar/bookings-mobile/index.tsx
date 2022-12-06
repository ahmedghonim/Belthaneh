import {
  BookingItem,
  Employee
} from 'components/booking/calendar/booking-calendar'
import BookingCardMobile from 'components/booking/calendar/booking-card-mobile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export interface BookingsMobileProps {
  bookings: BookingItem[]
  employees: Employee[]
}

function BookingsMobile({ bookings, employees }: BookingsMobileProps) {
  return (
    <div className="flex gap-4 w-full dark:bg-dark-200 rounded-md p-6 h-[60vh] overflow-y-scroll sm:hidden ">
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
          <SwiperSlide key={Math.random().toString()}>
            <div className="flex-1 px-2 dark:bg-dark-200 bg-white h-full sm:p-0 p-6 rounded-xl">
              <BookingCardMobile employee={_item} bookings={bookings} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BookingsMobile
