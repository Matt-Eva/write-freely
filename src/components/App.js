import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import PiecePage from "./PiecePage";
import Create from "./Create";
import Login from './Login';
import "../App.css"

function App() {
  const [user, setUser] = useState(null)
  const [creations, setCreations] = useState([])
  const [category, setCategory] = useState("")

  useEffect(()=>{
    fetch("http://localhost:9292/")
    .then(r => r.json())
    .then(data => setCreations(data))
  }, [])

  if (user === null) {
    return (
      <Login setUser={setUser}/>
    )
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          <Home creations={creations} user={user}/>
        }/>
        <Route exact path="/fiction" element={
          <Home creations={creations} user={user} category={category}/>
        }/>
        <Route exact path="/poetry" element={
          <Home creations={creations} user={user} category={category}/>
        }/>
        <Route exact path="/nonfiction" element={
          <Home creations={creations} user={user} category={category}/>
        }/>
        <Route exact path="/journalism" element={
          <Home creations={creations} user={user} category={category}/>
        }/>
        <Route exact path="/:id" element={<PiecePage />}/> 
        <Route exact path="/create" element={<Create />}/>
      </Routes>
    </div>
  );
}

export default App;
