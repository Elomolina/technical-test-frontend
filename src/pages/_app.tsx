import "@/styles/globals.css";
import { AccountsProvider } from "@/context/clientAccount";
import ClientNumber, { ClientProvider } from "@/context/clientNumber";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountsProvider>
      <ClientProvider>
        <main className={`${poppins.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ClientProvider>
    </AccountsProvider>
  );
}
