import { useState } from "react";
import { FaBars, FaDharmachakra } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

type Props = {};

function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-50 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
