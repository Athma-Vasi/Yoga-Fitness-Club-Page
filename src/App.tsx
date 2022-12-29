import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPages } from "./types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPages>("home");

  return (
    <div className="app bg-primary-100">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
