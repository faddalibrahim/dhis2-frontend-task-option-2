import Appbar from "./components/Appbar/Appbar";
import DashboardItemsList from "./components/DashboardItemsList/DashboardItemsList";
import { useState } from "react";

function App() {
  const [currentExpandedCard, setCurrentExpandedCard] = useState("");
  const [filterBy, setFilterBy] = useState("All Dashboards");

  return (
    <main className="bg-[#222] w-screen h-screen">
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
