import Image from "next/image";
import Link from "next/link";

// bg-gradient-to-t from-green-700 from-5%    via-black  to-black
export default function Footer() {
  return (
    <footer
      className="space-y-36 relative pb-[68px] pt-[145px] "
    >
      {/* upper footer */}
      <div className="flex pt-[85px]  flex-col  items-center">
        <h2 className="font-sora   text-[24.76px] md:text-[28.76px] xl:text-[52.76px] text-white font-[700]">
          Checkout automation,{" "}
          <span className="text-darkgreen">simplified</span>.
        </h2>

        <button className="text-[19.56px] mt-[51px] bg-[#fff]/10 w-[211px] h-[60px] text-white rounded-md hover:bg-[#fff]/20 transition-all duration-100">
          Purchase
        </button>
      </div>

      {/* down Footer */}
      <div className="flex z-10 justify-between  items-center">
        {/* logo */}
        <Link href="/">
          <Image src="/logo.png" width={41.21} height={38} alt="Logo" />
        </Link>
        {/* buttons */}
        <div className=" flex gap-x-4 md:gap-x-8">
          <Link
            href="/#"
            className=" text-[12px] mdl:text-[18.5px] text-darkgray hover:text-lightgray font-[700] leading-[22.39px]"
          >
            Terms of Service
          </Link>
          <Link
            href="/#"
            className=" text-[12px] mdl:text-[18.5px] text-darkgray hover:text-lightgray font-[700] leading-[22.39px]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
