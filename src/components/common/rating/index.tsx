import Star from 'svg/star.svg'

interface RatingProps {
  ratings: number | string
}
const starsArray: string[] = ['1', '2', '3', '4', '5']

export default function Rating({ ratings }: RatingProps) {
  return (
    <div className="flex gap-1 xs:gap-0">
      {starsArray.map((starNum) => {
        return (
          <Star
            key={starNum}
            fill={Number(starNum) <= ratings ? '#F97E4E' : '#C5C5C5'}
          />
        )
      })}
    </div>
  )
}
