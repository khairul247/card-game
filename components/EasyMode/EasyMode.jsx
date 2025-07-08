import "./EasyMode.css"
import {useState, useEffect} from 'react'

export default function EasyMode(){

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3');
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
                <div className="card" key={card.id}>
                    <img className="cardImage" src={card.imageUrl} alt={card.name} />
                    <div className="cardName"> {card.name} </div>
                </div>
            ))}
        </div> 
    )
}