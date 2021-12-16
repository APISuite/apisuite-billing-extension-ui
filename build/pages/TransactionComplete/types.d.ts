import { TransactionDetails } from '../Billing/types';
export interface TransactionCompleteProps {
    getTransactionDetailsAction: (orgId: string, transactionID: string) => void;
    orgId: string;
    transactionDetails: TransactionDetails;
}
