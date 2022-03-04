import './App.css';
import BioCard from './components/BioCard';
import Header from "./components/Header";
import { bioCards } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {bioCards.map((card, index) => <BioCard image={card.img_small} alt="card.alt" title={card.title} bio={card.bio} key={index} />)}
    </div>
  );
}

export default App;
