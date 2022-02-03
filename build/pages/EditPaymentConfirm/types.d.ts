import { TransactionDetails } from '../Billing/types';
export interface EditPaymentConfirmProps {
    getTransactionDetailsAction: (orgId: number, transactionID: string) => void;
    orgId: number;
    transactionDetails: TransactionDetails;
}
