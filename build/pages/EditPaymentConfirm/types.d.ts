import { TransactionDetails } from '../Billing/types';
export interface EditPaymentConfirmProps {
    getTransactionDetailsAction: (transactionID: string) => void;
    transactionDetails: TransactionDetails;
}
