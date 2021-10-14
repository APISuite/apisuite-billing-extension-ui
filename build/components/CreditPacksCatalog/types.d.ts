import { CreditPackDetails } from '../../pages/Billing/types';
export declare type CreditPacksCatalogProps = {
    creditPacks: CreditPackDetails[];
    selectedCreditPack: CreditPackDetails;
    handleCreditPackSelection: (id: number) => void;
};
