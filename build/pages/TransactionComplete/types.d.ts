import { TransactionDetails } from '../Billing/types';
export interface TransactionCompleteProps {
    getTransactionDetailsAction: (transactionID: string) => void;
    transactionDetails: TransactionDetails;
}
