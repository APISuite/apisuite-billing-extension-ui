import { CreditPackDetails } from '../../pages/Billing/types';
export declare type CreditPacksCatalogProps = {
    arrayOfCreditPacks: CreditPackDetails[];
    currentlySelectedCreditPack: CreditPackDetails;
    handleCreditPackSelection: (idOfSelectedCreditPack: number) => void;
};
