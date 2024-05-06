import React from "react";
import Image from 'next/image';
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className="flex items-center">
            <Image
                src="/images/logo.svg" // Chemin vers votre image de logo
                alt="Logo" // Description alternative pour le logo
                width={100} // La largeur de votre logo
                height={40} // La hauteur de votre logo
                className="text-white font-semibold" // Classes Tailwind pour le style si nécessaire
            />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
