// // "use client";
// // import React from "react";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // const Navbar = () => {
// //   const pathname = usePathname();
// //   return (
// //     <nav className="flex   fixed w-full  max-w-[1212px] bg-black/70 backdrop-blur-sm z-50 justify-between text-white  py-4">
// //       {/* logo */}
// //       <Link href="/">
// //         <Image src="/logo.png" width={51} height={41} alt="Logo" />
// //       </Link>

// //       {/* links */}
// //       <div className="flex justify-between items-center w-[465px]">
// //         <Link href="#" className="p-2 group"
// onClick={()=>{setIsOpen(false)}}
// >
// //           <p className="mb-1 text-white md:text-darkgray group-hover:text-white transition-colors duration-300">
// //             Home
// //           </p>

// //           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
// //         </Link>
// // <Link href="#" className="p-2 group"
// onClick={()=>{setIsOpen(false)}}
// >
// //   <p className="mb-1 text-white md:text-darkgray group-hover:text-white transition-colors duration-300">
// //     Features
// //   </p>
// //   <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
// // </Link>
// // <Link href="#" className="p-2 group"
// onClick={()=>{setIsOpen(false)}}
// >
// //   <p className="mb-1 text-white md:text-darkgray group-hover:text-white transition-colors duration-300">
// //     FAQ
// //   </p>
// //   <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
// // </Link>
// // <Link
// //   href="#"
// //   className="p-2 group border border-darkgreen rounded-md text-darkgreen hover:bg-darkgreen hover:text-black transition-all duration-300"
// // >
// //   Dashboard
// // </Link>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // outside click functinality
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // close menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav ref={menuRef} className="fixed top-0  w-full z-50  shadow ">
      <div
        className="flex fixed w-[calc(100vw-32px)]  xl:max-w-[1212px] py-4 bg-black/70   backdrop-blur-sm z-50 justify-between 
        flex-wrap items-center "
      >
        {/* logo */}
        <Link href="/">
          <Image src="/logo.png" width={51} height={41} alt="Logo" />
        </Link>

        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="size-10 text-zinc-200" />
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          }  w-full md:block md:w-auto`}
          
        >
          <div className="flex justify-between items-center flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0  ">
            <Link
              href="#"
              className="p-2 group w-full text-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="mb-1  font-semibold  text-white  md:text-darkgray group-hover:text-white transition-colors duration-300 ">
                Home
              </p>
              <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#"
              className="p-2 group w-full text-center"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="mb-1 text-white md:text-darkgray  font-semibold group-hover:text-white transition-colors duration-300">
                Features
              </p>
              <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="p-2  w-full text-center group"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="mb-1 text-white md:text-darkgray font-semibold group-hover:text-white transition-colors duration-300">
                FAQ
              </p>
              <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className=" w-full text-center">
              <Link
                href="#"
                className="p-2  group border font-semibold border-darkgreen rounded-md text-darkgreen hover:bg-darkgreen hover:text-black transition-all duration-300"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
