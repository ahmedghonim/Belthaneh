import useSSR from 'hooks/useSSR'
import useTranslation from 'next-translate/useTranslation'
import React, { useEffect } from 'react'
import { useTable, useFilters, useGlobalFilter, Column } from 'react-table'

export interface TableProps<ColumnsType> {
  columns: Array<(Column<object> & ColumnsType) | any>
  data: object[]
  noDataMessage?: string
  searchValue?: string | number
}

const Table = <ColumnsType,>({
  columns,
  data,
  searchValue,
  noDataMessage = 'There is No Data to show'
}: TableProps<ColumnsType>) => {
  const { t } = useTranslation('common')
  const { ssr } = useSSR()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter
  )

  useEffect(() => {
    setGlobalFilter(searchValue ?? undefined)
  }, [searchValue, setGlobalFilter])

  const firstPageRows = rows.slice(0, 10)

  return data.length !== 0 ? (
    ssr ? (
      <table
        className="z-0 table w-full rounded-lg relative border border-dark-300"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="w-full"
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup?.id ?? Math.random().toString()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="dark:bg-dark-200 bg-[#D4D6D9] text-center rounded-none"
                  {...column.getHeaderProps()}
                  key={column.id ?? Math.random().toString()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr
                className="border-t dark:border-t-dark-200 border-b-dark-500"
                {...row.getRowProps()}
                key={row.id ?? Math.random().toString()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="dark:bg-dark-100 bg-white text-center"
                      {...cell.getCellProps()}
                      key={Math.random().toString()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    ) : (
      <div>{t('loading')}</div>
    )
  ) : (
    <div className="dark:bg-dark-200  bg-white rounded-lg h-full w-full flex-1 flex justify-center items-center ">
      <span className="text-lg">{noDataMessage}</span>
    </div>
  )
}

export default Table
