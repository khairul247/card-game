import "./EasyMode.css"
import Tilt from 'react-parallax-tilt'
import {useState, useEffect} from 'react'

export default function EasyMode(){

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12');
        const data = await response.json();

        const characterCards = data.map(character => ({
            id: character.id,
            name: character.name,
            imageUrl: character.image
        }))

        console.log(characterCards);

        setCards(characterCards);
        };

        fetchCharacters();
    },[]);

    function shuffleCards(cards){
        const shuffled = [...cards];

        for (let i = shuffled.length-1; i > 0; i--){
            const random = Math.floor(Math.random()*(i+1));
            [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]]
        }

        return shuffled;
    }

    function handleCardClick(){
        setCards(prevCards => shuffleCards(prevCards))
    }

    return (
       <div className="cardContainer">
            {cards.map(card => (
               <Tilt key={card.id}>
                    <div className="card" key={card.id} onClick={()=>handleCardClick()}>
                        <img className="cardImage" src={card.imageUrl} alt={card.name} />
                        <div className="cardName"> {card.name} </div>
                    </div>
                </Tilt> 
            ))}
        </div> 
    )
}