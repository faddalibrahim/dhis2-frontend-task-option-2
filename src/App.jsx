import Appbar from "./components/Appbar/Appbar";
import DashboardCardList from "./components/DashboardCardList/DashboardCardList";
import { useState } from "react";

function App() {
  const [currentExpandedCard, setCurrentExpandedCard] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <main className="bg-[#222] w-screen h-screen flex flex-col justify-between">
      <Appbar filterBy={filterBy} setFilterBy={setFilterBy} />
      <DashboardCardList
        currentExpandedCard={currentExpandedCard}
        setCurrentExpandedCard={setCurrentExpandedCard}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </main>
  );
}

export default App;
