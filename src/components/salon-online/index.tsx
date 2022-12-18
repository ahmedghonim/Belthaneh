import React from 'react'
import LandingSection from './landing-sec'
import Description from './description'
import Catalog from './catalog'
import GitInTouch from './get-in-touch'
import SalonTestimonials from './testimonials'
import Footer from './footer'
import {
  SalonCoverType,
  SalaonDescription,
  ServicesBoxDataType,
  ContactDataTypes,
  TestimonialsDataType
} from 'components/salon-online/type'

function SalonOnline() {
  // salon dummy cover image
  const salonCoverImage: SalonCoverType = 'https://placeimg.com/192/192/people'
  // salon dummy description
  const salonDescription: SalaonDescription =
    'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit? de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles'

  // services dummy data
  const servicesData: ServicesBoxDataType[] = [
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      service: 'Hair Cut',
      description:
        'Li Europan lingues es membres del sam familie. Lor separat existentie',
      price: '25$'
    }
  ]

  // git in touch dummy data
  const gitInTouchData: ContactDataTypes = {
    mail: 'salonname@example.com',
    phone: '0123456789',
    address: '25th El Riyadh Saudi Arbia',
    src: 'https://placeimg.com/192/192/people',
    socialPlatforms: {
      facebook: 'www.facebook.com',
      instagram: 'www.instagram.com',
      twitter: 'www.twitter.com',
      whatsApp: 'www.facebook.com'
    }
  }

  // Testimonials dummy data
  const testimonialsData: TestimonialsDataType[] = [
    {
      src: 'https://placeimg.com/192/192/people',
      client: 'Bang Upin',
      stars: 4,
      feedback:
        'Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      client: 'Bang Upin',
      stars: 4,
      feedback:
        'Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      client: 'Bang Upin',
      stars: 4,
      feedback:
        'Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!'
    },
    {
      src: 'https://placeimg.com/192/192/people',
      client: 'Bang Upin',
      stars: 4,
      feedback:
        'Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!'
    }
  ]

  return (
    <section className="sm:bg-[#F5F5F5]">
      <LandingSection coverImage={salonCoverImage} />
      <div className="xs:px-5 sm:w-[85%] w-full m-auto">
        <Description salonDescription={salonDescription} />
        <Catalog services={servicesData} />
        <GitInTouch {...gitInTouchData} />
        <SalonTestimonials testimonials={testimonialsData} />
      </div>
      <Footer />
    </section>
  )
}

export default SalonOnline
