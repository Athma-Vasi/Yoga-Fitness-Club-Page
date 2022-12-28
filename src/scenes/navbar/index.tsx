import { SelectedPages } from "@/types";
import { useState } from "react";
import { FaBars, FaDharmachakra } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Link from "./Link";

type NavbarProps = {
  selectedPage: SelectedPages;
  setSelectedPage: (page: SelectedPages) => void;
};

function Navbar({ selectedPage, setSelectedPage }: NavbarProps) {
  return (
    <nav>
      <div className="fixed top-0 z-50 flex w-full items-center justify-between py-6">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between gap-16">
              {/* logo - left side*/}
              <div className="flex items-center justify-between">
                <h1 className="px-5 text-2xl text-gray-100">Yoga Ashram</h1>
                <FaDharmachakra className="scale-150 transform text-gray-100" />
              </div>
              {/* menu - right side */}
              <div className="flex w-4/6 items-center justify-between">
                {/* nav links */}
                <div className="flex items-center justify-between gap-7 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Philosophy"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Massages"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Join Our Sangha"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* sign in... */}
                <div className="flex items-center justify-between gap-7">
                  <p>Sign In</p>
                  <p>Join our Ashram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

//flex items-center justify-between
