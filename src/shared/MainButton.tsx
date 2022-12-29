import { SelectedPages } from "@/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (page: SelectedPages) => void;
};

function MainButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-primary-500 px-9 py-2 hover:bg-secondary-500 hover:text-gray-70"
      onClick={() => setSelectedPage("contactus")}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
}

export default MainButton;
