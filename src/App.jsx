import './App.css';
// on importe React
import {useState} from "react";
// on import axios
import axios from "axios";


function App() {
  //on utilise un state qui va contenir la quote
  const [quote, setQuote] = useState("joke!");

  //on crée la function qui appelle l'API
  //avec axios, get, res, then
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      //si la réponse est positive
      .then((res) => res.data)
      .then((data) => setQuote(data[0]))
      //si la réponse est erreur
      .catch((err)=>console.log(err))
  };

  return (
    <div className="App">
      {/* on crée un bouton pour appeler la function API */}
      <button type="button" onClick={() => getQuote()}>Get Quote</button>
      {/* on affiche la quote dans une div */}
      <div>{quote.quote}</div>
      <div>{quote.character}</div>
      <img src={quote.image} alt="imagesimpsons"/>  
    </div>
  );
}

export default App;
