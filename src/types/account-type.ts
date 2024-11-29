export type AccountType = {
  customer_number: number;
  account_number: number;
  account_type: string;
  currency: string;
  balance: {
    amount: number;
    currency: string;
  };
  debit_card: [];
  product_code: string;
};
