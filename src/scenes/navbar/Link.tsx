import { SelectedPages } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = {
  page: string;
  selectedPage: SelectedPages;
  setSelectedPage: (page: SelectedPages) => void;
};

export default function Link({
  page,
  selectedPage,
  setSelectedPage,
}: LinkProps) {
  const lowerCasePage = page.toLowerCase().split(" ").join("") as SelectedPages;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-tertiary-500" : "text-gray-100"
      } transition duration-150 hover:text-tertiary-300`}
    >
      {page}
    </AnchorLink>
  );
}
