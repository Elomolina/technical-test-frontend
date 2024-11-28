interface information 
{
    customer_number: number, 
    account_number: number, 
    account_type: string, 
    currency: string
};



export async function getAccounts()
{
    const url = 'https://api-sandbox.lafise.com/obl/v1/banks/BLNI/customers/100200/accounts?ACCOUNT_TYPE=S001'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      })   
    if (!response.ok) {
        throw new Error(`Failed to fetch accounts: ${response.status}`);
      }
      return response.json();
      
}