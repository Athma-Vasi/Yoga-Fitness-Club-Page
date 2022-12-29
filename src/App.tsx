import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPages } from "./types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPages>("home");
  const [isPageAtTop, setIsPageAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsPageAtTop(true);
        console.log("setIsPageAtTop: ", setIsPageAtTop);
        setSelectedPage("home");
      } else {
        setIsPageAtTop(false);
        console.log("setIsPageAtTop: ", setIsPageAtTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-primary-100">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isPageAtTop={isPageAtTop}
      />
    </div>
  );
}

export default App;
