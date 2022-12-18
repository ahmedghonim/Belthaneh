import React from 'react'
import TestimonialBox from './testi-box'
import { TestimonialsDataPropsType } from 'components/salon-online/type'
import { Swiper, SwiperSlide } from 'swiper/react'

function SalaonTestimonials({ testimonials }: TestimonialsDataPropsType) {
  return (
    <section className="sm:py-28 pb-14 pt-20">
      <Swiper
        spaceBetween={50}
        breakpoints={{ 768: { slidesPerView: 2.5 } }}
        className="!pt-10"
      >
        {testimonials.map((box) => {
          return (
            <SwiperSlide key={box.feedback}>
              <TestimonialBox {...box} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SalaonTestimonials
