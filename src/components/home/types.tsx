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
