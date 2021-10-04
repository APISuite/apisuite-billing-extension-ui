import { CreditPackDetails } from '../../pages/Billing/types'

export type CreditPacksCatalogProps = {
  creditPacks: CreditPackDetails[]
  selectedCreditPack: CreditPackDetails
  handleCreditPackSelection: (id: number) => void
}
