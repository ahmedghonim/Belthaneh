import React, { useEffect, useState } from 'react'
import RightArrow from 'public/img/arrows/right-arrow.svg'
import useScreen from 'hooks/useScreen'
import Button from 'ui/button'

interface PaginationProps {
  lang: string
  count: number
  previousPage: () => void
  nextPage: () => void
  canPreviousPage: boolean
  canNextPage: boolean
  gotoPage: (num: number) => void
  pageIndex: number
  maxlimit: number
  setPaginationStorage: React.Dispatch<React.SetStateAction<number>>
  paginationStorage: number
}

const Pagination = ({
  lang,
  count = 0,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  gotoPage,
  pageIndex,
  maxlimit,
  setPaginationStorage,
  paginationStorage = 0
}: PaginationProps) => {
  const screen = useScreen()
  const [list, setList] = useState<number[]>([])
  const isMinified = screen === 'tablet' || screen === 'phone'
  maxlimit = isMinified ? 2 : maxlimit

  useEffect(() => {
    setList((old: number[]) => {
      const less = old?.find((index) => index === pageIndex) === -1
      const more = old?.find((index) => index - 1 === pageIndex) === -1

      const paginationNum = Array.from(Array(count).keys()).filter(
        (idx) => !(idx > pageIndex + maxlimit || idx < pageIndex - maxlimit)
      )

      if (less || more) {
        return paginationNum
      } else {
        return old
      }
    })
  }, [maxlimit, pageIndex, count])

  useEffect(() => {
    gotoPage(paginationStorage)
  }, [gotoPage, paginationStorage])

  const numbering = () => {
    return list.map((pa) => {
      let secondary = true
      let primary = false

      if (pa === pageIndex) {
        secondary = false
        primary = true
      }
      return (
        <Button
          primary={primary}
          secondary={secondary}
          key={Number(pa)}
          className="shadow-none"
          onClick={() => {
            setPaginationStorage(Number(pa))
            gotoPage(Number(pa))
          }}
        >
          {(pa++).toString()}
        </Button>
      )
    })
  }

  return (
    <>
      <div className="flex gap-2 pagination">
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          secondary
          className="shadow-none"
          size="xSmall"
        >
          {/* Left arrow */}
          <RightArrow
            // transform={'rotate(180deg)'}
            className={`transform ${lang === 'ar' ? 'rotate-0' : 'rotate-180'}`}
          />
        </Button>

        <div className=" bg-secondary-100 px-5 py-1 rounded-3xl">
          {numbering()}
        </div>

        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          secondary
          className="shadow-none"
          size="xSmall"
        >
          <RightArrow
            className={`transform ${lang === 'ar' ? 'rotate-180' : 'rotate-0'}`}
          />
        </Button>
      </div>
    </>
  )
}
export default Pagination
