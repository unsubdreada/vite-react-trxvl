import "./assets/styles/App.css";
import Header from "./components/Header/Header";
import TopContent from "./components/Content/TopContent/TopContent";
import MiddleContent from "./components/Content/MiddleContent/MiddleContent";
import BottomContent from "./components/Content/BottomContent/BottomContent";

function App() {
  return (
    <div className="App overflow-hidden font-arimo">
      <Header />
      <div className="bg-white mx-auto">
        <TopContent />
        <MiddleContent />
        <BottomContent />
      </div>
    </div>
  );
}

export default App;
