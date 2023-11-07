import Appbar from "./components/Appbar/Appbar";
import DashboardItemsList from "./components/DashboardItemsList/DashboardItemsList";

function App() {
  return (
    <main className="bg-[#222] w-screen h-screen">
      <Appbar />
      <DashboardItemsList />
    </main>
  );
}

export default App;
