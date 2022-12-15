import SettingDomain, { SettingDomainProps } from './domain'
import SettingColors from './colors'
import SettingLogo from './logo'
import SettingDescription from './description'
import SettingLocation from './location'
import SettingContacts from './contacts'
import SettingSocialMedia from './social-media'
import Navigation from '../navigation'
import { Form, Formik, FormikHelpers } from 'formik'
import useSSR from 'hooks/useSSR'
import * as Yup from 'yup'
import useTranslation from 'next-translate/useTranslation'
import { Button } from 'ui'

export interface InitialValues {
  domain: string
  primary: string
  secondary: string
  logo: string
  description: string
  location: string
  phone: string
  email: string
  facebook: string
  twitter: string
  instagram: string
  currentTab: 'facebook' | 'instagram' | 'twitter'
}
export interface SettingProps {
  domainData: SettingDomainProps
  initialValues?: InitialValues | null
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function Setting({
  domainData,
  onSubmit,
  initialValues = null
}: SettingProps) {
  const { ssr } = useSSR()
  const { t } = useTranslation('common')

  const validationSchema = Yup.object({
    name: Yup.string().max(15, t('name_msg_validation')),
    phone: Yup.string().matches(phoneRegExp, t('Phone_not_valid')),
    domain: Yup.string(),
    email: Yup.string().email(t('invalid_email'))
  })
  const defaultValues = {
    domain: '',
    primary: '',
    secondary: '',
    logo: '',
    description: '',
    location: '',
    phone: '',
    email: '',
    facebook: '',
    twitter: '',
    instagram: '',
    currentTab: 'facebook' as const
  }
  const newInitialValues =
    initialValues !== null || initialValues !== undefined
      ? { ...initialValues, ...defaultValues }
      : defaultValues
  return (
    <div className="flex flex-col">
      <Navigation />
      {ssr && (
        <Formik
          initialValues={{ ...newInitialValues }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col sm:w-3/4 gap-4  pb-20">
              <SettingDomain {...domainData} />
              <SettingLogo />
              <SettingColors />
              <SettingDescription />
              <SettingLocation />
              <SettingContacts />
              <SettingSocialMedia />
            </div>
            <Button className="sm:self-end self-center" type="submit" primary>
              {t('update')}
            </Button>
          </Form>
        </Formik>
      )}
    </div>
  )
}
