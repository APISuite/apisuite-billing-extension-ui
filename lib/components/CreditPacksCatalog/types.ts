import { CreditPackDetails } from '../../pages/Billing/types'

export type CreditPacksCatalogProps = {
  arrayOfCreditPacks: CreditPackDetails[]
  currentlySelectedCreditPack: CreditPackDetails
  handleCreditPackSelection: (idOfSelectedCreditPack: number) => void
}
