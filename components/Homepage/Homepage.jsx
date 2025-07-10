import "./Homepage.css";

export default function Homepage({setShowHome}) {

    return (
            <div className="content">
                <img className="logo" src="/img/logo.png" alt="Rick and Morty Logo" />
                <div className="buttonContainer">
                    <button className="playButton" onClick={()=>setShowHome(false)}> PlAY NOW! </button>
                </div>
            </div>
    )
}