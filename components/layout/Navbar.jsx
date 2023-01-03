import Link from "next/link";
import navdata from "../data/navdata";
import NavbarHover from "./NavbarHover";

const Navbar = () => {
  return (
    <>
      <nav className=" fixed bottom-0 animation lg:bg-transparent shadow-md lg:shadow-none w-full lg:w-fit lg:right-0 flex lg:h-screen items-center justify-center z-[9999]">
        <div className=" flex flex-row lg:flex-col w-full sm:px-10 lg:px-0  sm:gap-5 justify-between lg:justify-center lg:items-end py-3 ">
          {navdata.map((data) => {
            return (
              <div className="px-1 sm:px-3" key={data.id}>
                <Link href={data.path}>
                  <NavbarHover {...data} />
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

