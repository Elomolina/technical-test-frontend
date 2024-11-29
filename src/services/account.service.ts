import { AccountType } from "@/types";

export const fetchAccountsByCustomerID = async (customerID: string) => {
  const response = await fetch(`/api/account?customerID=${customerID}`);
  if (!response.ok) {
    throw new Error("El número de cliente es inválido");
  }
  return response.json();
};

export const fetchAccountDetailsByID = async (accountNumber: number) => {
  const response = await fetch(`/api/account?accountNumber=${accountNumber}`);
  if (!response.ok) {
    throw new Error(
      `No se pudo obtener información para la cuenta ${accountNumber}`
    );
  }
  return response.json();
};
