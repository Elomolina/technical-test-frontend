import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.API_BASE_URL!;
const API_KEY = process.env.API_KEY!;
const AUTH_TOKEN = process.env.NEXT_AUTH_TOKEN!;

const apiHeaders = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
  Authorization: `Bearer ${AUTH_TOKEN}`,
};

async function fetchFromAPI(endpoint: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: apiHeaders,
  });

  if (!response.ok) {
    throw new Error(`Error al realizar la solicitud: ${response.status}`);
  }

  return response.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const {
        accountNumber,
        bankID = "BLNI",
      } = req.query;

      if (accountNumber) {
        const accountDetails = await fetchFromAPI(
          `/banks/${bankID}/accounts/${accountNumber}/transactions`
        );
        return res.status(200).json(accountDetails);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: "No se pudo procesar la solicitud" });
    }
  }
}
