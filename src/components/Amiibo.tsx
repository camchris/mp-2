import styled from "styled-components";
import {Character} from "../interfaces/Character"

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightpink;
    margin: 0.5%;
    padding: 0.25%;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    max-width: 15%;
    padding: 0.5% 1%;
    margin: 0.5%;
    color: white;
    border: 10px white dotted;
    font: sans-serif;
`;

const GameTitle=styled.h2`
    justify-content: start;
    background-color: white;
    border-radius: 40px;
    color: black;
    font-size: 20px;
`;

const CharName=styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    background-color: black;
    color: white;
    border-radius: 40px;
    font-size: 30px;
`;

export function Amiibo(props: { data: Character[] }) {
    return (
        <AllCharsDiv>
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.image}>
                        <img src={char.image} alt={`${char.name}`} />
                        <CharName>{char.name}</CharName>
                        <GameTitle>{char.gameSeries}</GameTitle>
                    </SingleCharDiv>
                    
                )
            }
        </AllCharsDiv>
    );
}

