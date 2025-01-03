import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from 'lucide-react';

function Header() {
  return (
    <>
      <header className="py-6 md:px-20 sm:px-10 px-5 flex justify-between text-white">
        <div className="relative z-10">
          <h1 className="sm:text-2xl text-xl z-20 font-bold italic font-serif drop-shadow-[0px_0px_5px_red]">
             BLOGS
          </h1>
          <div className="sm:w-[140px] w-[120px] h-[10px] bg-[#1D2B34] blur-[5px] shadow-[0px_2px_20px_10px_#1D2B34] absolute top-[10px] -z-10 rounded-2xl "></div>
        </div>
        <nav>
          <ul className="md:inline-flex hidden gap-6 text-lg font-bold">
            <li>
              <Link className="hover:text-[#BC382E]" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#BC382E]" href={"/blog"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#BC382E]" href={"/about"}>
                About
              </Link>
            </li>
          </ul>
          <Sheet>
            <SheetTrigger className="md:hidden"><Menu className=" w-[35px] h-[35px] hover:text-[#BC382E]" /></SheetTrigger>
            <SheetContent className="">
            <ul className="flex flex-col gap-2 items-center mt-5 text-lg text-black font-bold ">
            <li>
              <Link className="text-white hover:underline" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href={"/blog"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href={"/about"}>
                About
              </Link>
            </li>
          </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}

export default Header;
