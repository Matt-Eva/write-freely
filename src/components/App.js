import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import PiecePage from "./PiecePage";
import Create from "./Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>'
        <Route exact path="/:id" element={<PiecePage />}/> 
        <Route exact path="/create" element={<Create />}/>
      </Routes>
    </div>
  );
}

export default App;
