Technical test for Frontend position using Next.js and Tailwind CSS

This project consumes endpoints from the Lafise API to display a user's accounts, transactions, and allows transferring funds between their own accounts.

## Getting Started

To run a Next.js project you need to have installed Node.js first.

### Clone the git project

```bash
git clone https://github.com/Elomolina/prueba-tecnica-lafise.git
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
both can be found in the [docs](https://apidocs.lafise.com/reference/using-oauth2) of LAFISE API.
Check the `.env.example` file as an example of how your env file should look like.
