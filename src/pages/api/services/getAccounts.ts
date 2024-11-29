import { NextApiRequest, NextApiResponse } from "next";
import { log } from "console";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { customerID } = req.query;

    const data = await getAccounts("BLNI", customerID as string, "S001");
    res.status(200).json(data);
  }
}

export async function getAccounts(
  bankID: string,
  customerID: string,
  accountType: string
) {
  if (customerID.length == 0) {
    customerID = "1";
  }
  const url = `https://api-sandbox.lafise.com/obl/v1/banks/${bankID}/customers/${customerID}/accounts?ACCOUNT_TYPE=${accountType}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch accounts: ${response.status}`);
  }
  return response.json();
}
