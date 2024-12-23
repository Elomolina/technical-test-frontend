
Technical test for Frontend position using Next.js and Tailwind CSS

This project consumes endpoints from the Lafise API to display a user's accounts, transactions, and allows transferring funds between their own accounts.

## Getting Started

To run a Next.js project you need to have installed [Node.js](https://nodejs.org/en/) first.

### Clone the git project

```bash
git clone https://github.com/Elomolina/technical-test-frontend.git
```

### Install dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```
### Environment variables

To execute the project you need to create a `.env.local` file, where you need to specify the `API_KEY` and the `AUTH_TOKEN`
For the `AUTH_TOKEN` use the Bearer authorization token found in the [LAFISE API Reference](https://apidocs.lafise.com/reference/using-oauth2).
The `API_KEY` is the same for every endpoint, you can find it as `x-api-key` in the [docs](https://apidocs.lafise.com/reference/get-account-by-costumer-id).
Check the `.env.example` file as an example of how your env file should look like.

### What you should see

https://github.com/user-attachments/assets/a8037aee-5027-4a1b-977d-b0b060b5b143

