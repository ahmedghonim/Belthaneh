import useTranslation from 'next-translate/useTranslation'
import { DateInput, Input, Text } from 'ui'

export default function AdditionalInfo() {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col p-5 gap-5 dark:bg-dark-200 bg-white rounded-[10px]">
      <Text className="!text-primary-100 font-bold">
        {t('other_information')}
      </Text>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <Input
          name={'contract_duration'}
          placeholder={t('contract_duration')}
          label={t('contract_duration')}
          type="number"
          isForm
        />
        <DateInput
          name="start_date"
          label={t('start_date')}
          placeholder={t('start_date')}
          isForm
        />
        <Input
          name={'recruitment_fees'}
          placeholder={t('recruitment_fees')}
          label={t('recruitment_fees')}
          type="number"
          isForm
        />
        <Input
          name={'iqama_fees'}
          placeholder={t('iqama_fees')}
          label={t('iqama_fees')}
          type="number"
          isForm
        />
        <Input
          name={'financial_equivalent_fees'}
          placeholder={t('financial_equivalent_fees')}
          label={t('financial_equivalent_fees')}
          type="number"
          isForm
        />
        <DateInput
          name="start_date_Of_FE"
          label={t('start_date_Of_FE')}
          placeholder={t('start_date_Of_FE')}
          isForm
        />
        <Input
          name={'health_certificate_fees'}
          placeholder={t('health_certificate_fees')}
          label={t('health_certificate_fees')}
          type="number"
          isForm
        />
        <DateInput
          name="start_date_HC"
          label={t('start_date_HC')}
          placeholder={t('start_date_HC')}
          isForm
        />
        <Input
          name={'medical_insurance_fees'}
          placeholder={t('medical_insurance_fees')}
          label={t('medical_insurance_fees')}
          type="number"
          isForm
        />
        <DateInput
          name="expiry_date_insurance"
          label={t('expiry_date_insurance')}
          placeholder={t('expiry_date_insurance')}
          isForm
        />
        <Input
          name={'insurance_company_name'}
          placeholder={t('insurance_company_name')}
          label={t('insurance_company_name')}
          isForm
        />
      </div>
    </div>
  )
}
