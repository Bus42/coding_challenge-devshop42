import Home from "./components/Home";
import BioDetail from "./components/BioDetail";
import './App.css';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <div id="App-wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<BioDetail />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
