import React from "react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 nav">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-white text-xl font-bold">
          <Link href="/getAccount">
            <Image src="/lafise_logo.png" alt="logo" width={100} height={50} />
          </Link>
        </div>
        <div className="md:flex space-x-4 navigation-link">
          <Link
            href="/get-account"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Obtener cuentas
          </Link>
          <Link
            href="transactions/own-accounts"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Transferencia entre cuentas propias
          </Link>
          <Link
            href="/movements"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Historial de transacciones
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
