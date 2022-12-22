import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent } from 'react'
import { Button, Input, Text } from 'ui'
import Search from 'svg/search.svg'
import Plus from 'svg/plus.svg'

export interface EmployeeHeaderActionProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  onClickSearch: () => void
  handleAddNewEmployee: () => void
}

export default function EmployeeHeaderAction({
  handleSearch,
  handleAddNewEmployee,
  onClickSearch
}: EmployeeHeaderActionProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex justify-between gap-2">
      <div className="sm:w-1/3 w-full">
        <Input
          name={'search'}
          onChange={handleSearch}
          className="w-full indent-8 xs:text-xs flex-auto"
          placeholder={t('search_employee_placeholder')}
          StartComponent={() => (
            <button onClick={onClickSearch} className="w-6 h-6">
              <Search className="fill-dark-300" />
            </button>
          )}
        />
      </div>
      <Button
        primary
        onClick={handleAddNewEmployee}
        className="sm:px-5 sm:py-2 !px-4 !py-[6px] justify-center"
      >
        <Plus className="sm:hidden block" />
        <Text className="sm:block hidden !text-white">
          {t('add_new_employee')}
        </Text>
      </Button>
    </div>
  )
}
