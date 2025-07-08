import "./EasyMode.css"
import Tilt from 'react-parallax-tilt'
import {useState, useEffect} from 'react'

export default function EasyMode(){

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,6');
        const data = await response.json();

        const characterCards = data.map(character => ({
            id: character.id,
            name: character.name,
            imageUrl: character.image
        }))

        setCards(characterCards);
        };

        fetchCharacters();
    },[]);

    return (
       <div className="cardContainer">
            {cards.map(card => (
               <Tilt>
                    <div className="card" key={card.id}>
                        <img className="cardImage" src={card.imageUrl} alt={card.name} />
                        <div className="cardName"> {card.name} </div>
                    </div>
                </Tilt> 
            ))}
        </div> 
    )
}