import TotalBookings from './total-bookings'
import TodaysBooking from './today-booking'
import {
  BookingSingleObjectType,
  TotalBookingDataType
} from 'components/employees/total-booking/types'
import Header from './header'

// total bookings boxs dummy data
const totalBookingBoxsData: TotalBookingDataType = {
  monthly: '345',
  weekly: '345',
  daily: '345'
}

// today bookings dummy data
const todayBookingData: BookingSingleObjectType[] = [
  {
    client: 'Ali',
    date: '25/10/2022',
    service: 'hair cut',
    price: '20$',
    status: 'completed'
  },
  {
    client: 'Ali',
    date: '25/10/2022',
    service: 'hair cut',
    price: '20$',
    status: 'completed'
  },
  {
    client: 'Ali',
    date: '25/10/2022',
    service: 'hair cut',
    price: '20$',
    status: 'completed'
  },
  {
    client: 'Ali',
    date: '25/10/2022',
    service: 'hair cut',
    price: '20$',
    status: 'completed'
  }
]

function TotalBooking() {
  return (
    <section className="flex flex-col gap-9">
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-10">
        <TotalBookings data={totalBookingBoxsData} />
        <TodaysBooking data={todayBookingData} />
      </div>
    </section>
  )
}

export default TotalBooking
