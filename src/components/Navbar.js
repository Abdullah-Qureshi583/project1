"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex   fixed w-full  max-w-[1212px] bg-black/70 backdrop-blur-sm z-50 justify-between text-white  py-4">
      {/* logo */}
      <Link href="/">
        <Image src="/logo.png" width={51} height={41} alt="Logo" />
      </Link>

      {/* links */}
      <div className="flex justify-between items-center w-[465px]">
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
            Home
          </p>

          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
            Features
          </p>
          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#" className="p-2 group">
          <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
            FAQ
          </p>
          <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#"
          className="p-2 group border border-darkgreen rounded-md text-darkgreen hover:bg-darkgreen hover:text-black transition-all duration-300"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



// import Image from "next/image";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// import React, { useState } from "react";

// const Navbar = () => {
//   const [openNavbar, setOpenNavbar] = useState(false);
//   return (
//     <>
    
//     <nav class="flex  fixed  w-[calc(100vw-30px)] xl:w-full  xl:max-w-[1212px] bg-black/70 backdrop-blur-sm z-50 justify-between text-white  py-4">
//       <Link href="/">
//         <Image src="/logo.png" width={51} height={41} alt="Logo" />
//       </Link>

//       <button className="block xl:hidden" onClick={() => setOpenNavbar(!openNavbar)}>
//         <GiHamburgerMenu size={32} />
//       </button>

//       {/* links */}
//       <div className=" hidden md:flex flex-col bg-red-400 justify-between items-center w-[465px]">
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             Home
//           </p>

//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             Features
//           </p>
//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             FAQ
//           </p>
//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link
//           href="#"
//           className="p-2 group border border-darkgreen rounded-md text-darkgreen hover:bg-darkgreen hover:text-black transition-all duration-300"
//         >
//           Dashboard
//         </Link>
//       </div>

//       {/* <div class="hidden w-full xl:block bg-red-400 xl:w-auto">
//         <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//             <a
//               href="#"
//               class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//               aria-current="page"
//             >
//               Home
//             </a>
//           </li>
//         </ul>
//       </div> */}
//     </nav>

//     {/* <div className=" flex  bg-red-400 justify-between items-center w-[465px]">
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             Home
//           </p>

//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             Features
//           </p>
//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link href="#" className="p-2 group">
//           <p className="mb-1 text-darkgray group-hover:text-white transition-colors duration-300">
//             FAQ
//           </p>
//           <span className="block h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         <Link
//           href="#"
//           className="p-2 group border border-darkgreen rounded-md text-darkgreen hover:bg-darkgreen hover:text-black transition-all duration-300"
//         >
//           Dashboard
//         </Link>
//       </div> */}
//     </>
//   );
// };

// export default Navbar;
