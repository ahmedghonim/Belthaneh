import useTranslation from 'next-translate/useTranslation'
import { Input, Text } from 'ui'
import Add from 'svg/add2.svg'
import Palette from 'svg/palette.svg'
import { useFormikContext } from 'formik'

export default function SettingColors() {
  const { t } = useTranslation('common')
  const { values, handleChange, submitForm, setFieldValue } = useFormikContext<{
    primary: string
    secondary: string
  }>()

  const Card = ({
    value,
    text,
    message,
    name
  }: {
    value: string
    text: string
    message: string
    name: string
  }) => (
    <div className=" rounded-md flex flex-col">
      <div className="flex gap-3 pt-4">
        <div
          className={`${
            value !== '' && value !== null
              ? 'p-[0px]'
              : 'p-[14px]  border-1 border-dashed border-2 border-primary-100 '
          } `}
        >
          {value !== '' && value !== null ? (
            <div
              className={'h-[54px] w-[54px]'}
              style={{ backgroundColor: value }}
            />
          ) : (
            <Palette />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Text size={'xs'} className="font-normal">
            {text}
          </Text>
          <Text size={'xs'} className="font-normal">
            {message}
          </Text>
        </div>
      </div>
      {value !== '' && value !== null ? (
        <button
          onClick={() => {
            void setFieldValue(name, '')
            void submitForm()
          }}
          className="self-end"
        >
          <Text danger className="self-end">
            {t('remove')}
          </Text>
        </button>
      ) : (
        <div className="border-0 self-end relative cursor-pointer">
          <Add />
          <Input
            onBlur={(e) => {
              handleChange(e)
              void submitForm()
            }}
            name={name}
            type="color"
            className="absolute w-full h-full opacity-0 top-[-16px] left-[3px] right-[3px]"
          />
        </div>
      )}
    </div>
  )

  return (
    <div className="p-3 dark:bg-dark-200 bg-white rounded-md ">
      <Text>{t('colors')}</Text>
      <Card
        value={values.primary ?? ''}
        text={t('primary')}
        message={t('The_brand_colors_that_appear_on_your_store')}
        name={'primary'}
      />
      <div className="divider" />
      <Card
        value={values.secondary ?? ''}
        text={t('secondary')}
        message={t(
          t('Supporting_colors_used_for_accents_and_additional_detail')
        )}
        name={'secondary'}
      />
    </div>
  )
}
