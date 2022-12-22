import Image from 'next/image'
import { Text } from 'ui'
import Edit from 'svg/edit.svg'
import Delete from 'svg/delete.svg'
import useTranslation from 'next-translate/useTranslation'

export interface CertificateItemProps {
  src: string
  name: string
  number: number
  type: string
  id: string
  onDelete?: () => void
  onEdit?: () => void
}

function CertificateList({ data }: { data: CertificateItemProps[] }) {
  const { t } = useTranslation('common')

  const Card = ({
    src,
    name,
    number,
    onEdit,
    onDelete
  }: CertificateItemProps) => (
    <div className="h-60 rounded-lg overflow-hidden">
      <div className="h-[83%]">
        <Image
          src={src}
          alt={t('certificate_image')}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center bg-primary-100 h-[17%] relative p-1">
        <div className="flex items-center w-[75%] gap-1 ">
          <Text as="span" className="!text-sm !text-white whitespace-nowrap">
            {name}-
          </Text>
          <Text as="span" className="!text-sm !text-white whitespace-nowrap">
            {number}
          </Text>
        </div>
        <div className="flex items-center justify-center gap-2 dark:bg-white bg-secondary-100 absolute ltr:right-0 rtl:left-0 h-full w-[25%] ltr:rounded-tl-[15px] rtl:rounded-br-[15px]">
          <span className="cursor-pointer" onClick={onEdit}>
            <Edit className="scale-75 dark:stroke-[#F97E4E] stroke-white" />
          </span>
          <span className="cursor-pointer" onClick={onDelete}>
            <Delete className="scale-125 dark:fill-secondary-100 fill-white" />
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-8">
      {data.map((certificate) => {
        return <Card key={certificate.id} {...certificate} />
      })}
    </div>
  )
}

export default CertificateList
