import { CreditPackDetails } from 'pages/Billing/types';
export declare type CreditPacksCatalogProps = {
    arrayOfCreditPacks: CreditPackDetails[];
    handleCreditPackSelection: (idOfSelectedCreditPack: number) => void;
    currentlySelectedCreditPack: CreditPackDetails;
};
