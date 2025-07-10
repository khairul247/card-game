import "./EasyMode.css"
import Tilt from 'react-parallax-tilt'
import {useState, useEffect} from 'react'

export default function EasyMode({setShowHome}){

    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(()=>{
        const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        const data = await response.json();

        const characterCards = data.map(character => ({
            id: character.id,
            name: character.name,
            imageUrl: character.image,
            isClicked: false
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

    function handleCardClick(cardId){

        const clickedCard = cards.find(card => card.id === cardId);

        if (clickedCard && !clickedCard.isClicked){
            setScore(prevScore => prevScore + 1);
        } else if (clickedCard && clickedCard.isClicked){
            setShowPopup(true);
            return;
        }

        setCards(prevCards => {

            const updatedCards = prevCards.map(card =>
                card.id === cardId && !card.isClicked
                ? {...card, isClicked: true}
                : card
            )

            const shuffled = shuffleCards(updatedCards);
            console.log(shuffled)

            return shuffled;
        })
    }

    function resetGame() {
        setScore(0);
        setShowPopup(false);

        setCards(prevCards => {
            const resetCards = prevCards.map(card => ({...card, isClicked:false}));

            return shuffleCards(resetCards);
        });
    }

    return (
       <main>
            <div className="scoreboard"> Score : {score} </div>
            <div className="cardContainer">
                {cards.map(card => (
                <Tilt key={card.id}>
                        <div className="card" key={card.id} onClick={()=>handleCardClick(card.id)}>
                            <img className="cardImage" src={card.imageUrl} alt={card.name} />
                            <div className="cardName"> {card.name} </div>
                        </div>
                    </Tilt> 
                ))}
            </div> 
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Your Best Score: {score}</h3>
                        <div className="popupButtonContainer">
                            <button onClick={()=>resetGame()}> PlAY AGAIN!</button>
                            <button onClick={()=>setShowHome(true)}> GO TO HOMEPAGE</button>
                        </div>
                    </div>
                </div>
            )}
        </main> 
    )
}