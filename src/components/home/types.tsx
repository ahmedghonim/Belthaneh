// Features Types------------------------------
export interface FeaturesCardProps {
  icon: any
  title: string
  desc: string
  fill?: string
}

export interface FeaturesHolderProps {
  featuresData: FeaturesCardProps[]
  fill: string
}

// get started Types------------------------------

export interface JoinStepProps {
  num: string
  text: string
  className?: string
}

// Benefits Types------------------------------

export interface SingleBenifitProps {
  src: string | any
  text: string
}

// Contact Types------------------------------

export interface ContactInputProps {
  placeHolder: string
  name: string
}

// Download App Types------------------------------
export interface DownloadBoxProps {
  platformIcon: string | any
  text: string
  platformName: string
}
