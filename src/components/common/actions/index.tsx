import Edit from 'svg/edit.svg'
import Delete from 'svg/delete.svg'

export interface Props {
  className?: string
  onEdit?: () => void
  onDelete?: () => void
}

function Actions({ onEdit, onDelete, className = '' }: Props) {
  return (
    <>
      {onEdit !== null ? (
        <button onClick={onEdit}>
          <Edit
            className={`dark:stroke-secondary-100 stroke-white scale-[0.7] ${className} `}
          />
        </button>
      ) : (
        <></>
      )}
      {onDelete !== null ? (
        <button onClick={onDelete}>
          <Delete
            className={`dark:fill-secondary-100 fill-white scale-110 ${className} `}
          />
        </button>
      ) : (
        <></>
      )}
    </>
  )
}

export default Actions
