import { TransactionDetails } from '../Billing/types';
export interface EditPaymentConfirmProps {
    getTransactionDetailsAction: (orgId: string, transactionID: string) => void;
    orgId: string;
    transactionDetails: TransactionDetails;
}
