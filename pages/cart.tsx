
import { useTranslation } from 'next-i18next'

export default function CartPage() {
  const { t } = useTranslation()
  return <h1>{t('cart')}</h1>
}
