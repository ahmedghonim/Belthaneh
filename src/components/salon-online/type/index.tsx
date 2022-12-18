// blthania logo types--------------------
export interface BlthaniaLogoProps {
  fontSize?: string
}

// landing section types--------------------
export type SalonCoverType = string
export interface LandingSectionPropsType {
  coverImage: SalonCoverType
}
// description section types--------------------

export type SalaonDescription = string

export interface DescriptionPropsType {
  salonDescription: SalaonDescription
}

// catalog section types--------------------
export interface ServicesBoxDataType {
  src: string
  service: string
  description: string
  price: number | string
}

export interface CatalogPropsType {
  services: ServicesBoxDataType[]
}

// get in touch section types--------------------

export interface SocialLinksTypes {
  facebook?: string
  instagram?: string
  twitter?: string
  whatsApp?: string
}

export interface SocialLinksProps extends SocialLinksTypes {
  fill?: String
}

export interface ContactDataTypes {
  mail: string
  phone: string | number
  address: string
  src: string
  socialPlatforms: SocialLinksTypes
}

// testimonials section types--------------------
export interface TestimonialsDataType {
  src: string
  client: string
  stars: number | string
  feedback: string
}

export interface TestimonialsDataPropsType {
  testimonials: TestimonialsDataType[]
}
