 import React from 'react';
import styled from 'styled-components';
//styled
const Character = styled.div`
background: rgba(24,0,37,0.5);
border-radius: 10px;
border: 4px solid #f5f5dc;
color: white;
margin: 20px 0px 20px 170px;
height: 60%;
padding: 20px;
width: 70%;
height: 60%;
display: flex;
justify-content: center;
`

 const Char = props => {
  console.log(props);
    return (
     <Character> 
      Name: {props.name},
      Gender: {props.gender},
      Hair: {props.hair},
      Height: {props.height}
     </Character>
    );
  };
 export default Char;