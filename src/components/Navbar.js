import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex   fixed w-[calc(100vw-160px)] bg-black/70 backdrop-blur-sm z-50 justify-between text-white px-6 py-4">
      {/* logo */}
      <Link href="/">
        <Image src="/logo.png" width={51} height={41} alt="Logo" />
      </Link>

      {/* links */}
      <div className="flex justify-between items-center w-[465px]">
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-[#fff]/30 group-hover:text-white transition-colors duration-300">
            Home
          </p>
          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-[#fff]/30 group-hover:text-white transition-colors duration-300">
            Features
          </p>
          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-[#fff]/30 group-hover:text-white transition-colors duration-300">
            FAQ
          </p>
          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="p-2 group border border-green-500 rounded-md text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
