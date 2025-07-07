import Homepage from "../Homepage/Homepage"
import EasyMode from "../EasyMode/EasyMode"
import "./MainLayout.css"

export default function MainLayout () {
    return (
        <div className="background">
            {/* <Homepage /> */}
            <EasyMode />
        </div>
    )
}