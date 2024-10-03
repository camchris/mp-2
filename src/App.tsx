import styled from 'styled-components';
import './App.css'
import {useEffect, useState} from "react";
import {Amiibo} from "./components/Amiibo"
import {Character} from "./interfaces/Character"

const MainDiv=styled.div`
  color: lightpink;

`;

const CharactersDiv=styled.div`
  width: 90vw;
  border: 10px lightpink dotted; 
  margin: auto;
`;

const Title=styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  border-radius: 40px;
  background-color: black;
  width: 100;
`;

function App() {

  const [data, setData] = useState<Character[]>([]);
  
  useEffect(() => {
    async function getData(): Promise<void> {
      const rawData = await fetch("https://www.amiiboapi.com/api/amiibo/");
      const {amiibo} : {amiibo: Character[]} = await rawData.json();
      setData(amiibo);
    }
    getData()
  }, []);
  
  return (
    <MainDiv>
      <Title>Nintendo Amiibos</Title>
        <CharactersDiv>
          <Amiibo data={data}/>
        </CharactersDiv>
    </MainDiv>
  )
  
}
  
export default App




