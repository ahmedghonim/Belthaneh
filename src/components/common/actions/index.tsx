import Edit from 'svg/edit.svg'
import Delete from 'svg/delete.svg'

export interface Props {
  onEdit?: () => void
  onDelete?: () => void
}

function Actions({ onEdit, onDelete }: Props) {
  return (
    <>
      {onEdit !== null ? (
        <button onClick={onEdit}>
          <Edit className="dark:stroke-secondary-100 stroke-white scale-[0.7]" />
        </button>
      ) : (
        <></>
      )}
      {onDelete !== null ? (
        <button onClick={onDelete}>
          <Delete className="dark:fill-secondary-100   fill-white scale-110" />
        </button>
      ) : (
        <></>
      )}
    </>
  )
}

export default Actions
