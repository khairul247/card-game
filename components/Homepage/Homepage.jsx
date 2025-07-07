import "./Homepage.css";

export default function Homepage() {
    return (
            <div className="content">
                <img className="logo" src="../../src/assets/img/logo.png" alt="Rick and Morty Logo" />
                <div className="buttonContainer">
                    <button> EASY </button>
                    <button> MEDIUM </button>
                    <button> HARD </button>
                </div>
            </div>
    )
}