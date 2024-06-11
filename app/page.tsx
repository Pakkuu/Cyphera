import Navbar from "./components/Navbar";
import Image from "next/image";
import { Button } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#ffffff30] to-[#6938be57]">
      <div className="top-[- 45rem] absolute right-[-15rem] h-[150rem] w-[150rem] opacity-10">
        <Image
          src="/bg.svg"
          alt="Cyphera Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="w-[9 0%] bor der-[0.06rem] m-au to lg:fle x lg: relative z-10 h-[85vh] flex-row items-center overflow-hidden rounded-3xl border-[#fffffff6] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter sm:flex-col lg:justify-evenly">
        <div className="relative h-[15rem] w-[30rem] opacity-80 sm:mx-auto lg:mx-0">
          <Image
            src="/cyphera2.svg"
            alt="Cyphera Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-4 flex-col tracking-widest sm:text-center lg:mt-0">
          <div className="text-[4rem] font-extralight opacity-70">
            Your Personal
          </div>
          <div className="text-[4rem] font-extralight opacity-70">
            Data Fortress
          </div>
          <div className="text-[1.3rem] font-extralight opacity-20">
            cloud storage - elegantly crafted
          </div>
          <Link href="/authenticate">
            <Button
              className="mt-[1rem] rounded-[1rem] bg-[#353535bd] font-space-mono hover:bg-[#35353595]"
              variant="contained"
              disableElevation
            >
              Get Started
              <SlArrowRight className="ml-[1rem]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
