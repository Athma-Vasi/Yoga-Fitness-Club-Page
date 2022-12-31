import { SelectedPages } from "@/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type PhilosophyCardProps = {
  key: string;
  image: JSX.Element;
  title: string;
  description: string;
  level: string;
  setSelectedPage: (page: SelectedPages) => void;
};

function PhilosophyCard({
  key,
  image,
  title,
  description,
  level,
  setSelectedPage,
}: PhilosophyCardProps) {
  return (
    <div
      className="mt-5 rounded-md border-2 border-gray-300 bg-tertiary-25 px-5 py-16 text-center xs:basis-3/5 sm:basis-3/5 md:h-[800px] md:basis-3/5"
      key={key}
    >
      <div className="mb-4 flex justify-center">{image}</div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <h6 className="my-3">Level: {level}</h6>
      <AnchorLink
        className="text-sm font-bold text-tertiary-500 underline hover:text-tertiary-300"
        onClick={() => setSelectedPage("contactus")}
        href="#contactus"
      >
        <p>Learn more</p>
      </AnchorLink>
    </div>
  );
}

export default PhilosophyCard;
