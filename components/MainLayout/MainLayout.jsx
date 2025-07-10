import Homepage from "../Homepage/Homepage"
import EasyMode from "../EasyMode/EasyMode"
import {useState} from 'react'
import "./MainLayout.css"

export default function MainLayout () {

    const [showHome, setShowHome] = useState(true);

    return (
        <div className="mainLayout">
            {showHome && (<Homepage setShowHome = {setShowHome}/>)}
            {!showHome && (<EasyMode setShowHome = {setShowHome}/>)}
        </div>
    )
}