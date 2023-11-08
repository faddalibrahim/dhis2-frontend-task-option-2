import Appbar from "./components/Appbar/Appbar";
import DashboardItemsList from "./components/DashboardItemsList/DashboardItemsList";
import { useState } from "react";

function App() {
  const [currentExpandedCard, setCurrentExpandedCard] = useState("");
  const [filterBy, setFilterBy] = useState("");

  return (
    <main className="bg-[#222] w-screen h-screen flex flex-col justify-between">
      <Appbar filterBy={filterBy} setFilterBy={setFilterBy} />
      <DashboardItemsList
        currentExpandedCard={currentExpandedCard}
        setCurrentExpandedCard={setCurrentExpandedCard}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </main>
  );
}

export default App;
