import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if(req.method === "GET")
  {
    const  data = async () => {
      await getAccounts()
    }
    res.status(200).json(data)
  }
}

export async function getAccounts()
{
  
    const url = 'https://api-sandbox.lafise.com/obl/v1/banks/BLNI/customers/100200/accounts?ACCOUNT_TYPE=S001'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })   
    if (!response.ok) {
        throw new Error(`Failed to fetch accounts: ${response.status}`);
      }
      return response.json();
      
}

