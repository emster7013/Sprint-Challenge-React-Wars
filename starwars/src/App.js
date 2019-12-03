import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Characters from './Characters';
import styled from 'styled-components';
const Main = styled.div `
width: 80%;
border: 5px dashed #58427C;
border-radius: 10%;
margin: 0 auto;
`
const Title = styled.div `
color: #A50B5E;
font-size: 40px;
`
 
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
    <Main>
    <div className="App">
     <Title><h1>React Wars</h1></Title>
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
    </Main>
  );
};
export default App;
