import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Characters from './Characters';
 
 
function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [chars, setChars] = useState([]);
 
  useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(res => {
          console.log(res);
          setChars(res.data.results);
        })
        .catch(err => console.log(err));
   }, []);
  return (
    <div className="App">
      <h1>React Wars</h1>
      <div className = "character">
      {chars.map((char, index) => {
         return (
             <Characters 
               key={index} 
                name={char.name} 
                gender={char.gender} 
                hair={char.hair_color}
                height={char.height}   
              />
   );
   }, [])};
      </div>
    
    </div>
  
  );
};
export default App;
