import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/getAccount");
  }),
    [router];
  return <Navbar></Navbar>;
}
