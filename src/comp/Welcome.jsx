import { Link } from "react-router-dom";
import photo from '../media/Untitled-1.jpg'
function Welcome() {
    return (
        
        <div className="welcome">
            <div className="welcome-inner">
            <div className="welcome-text">
        <h1>Самый лучший киносервис!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique esse dicta deleniti. Exercitationem magni veniam numquam quo itaque. Nulla expedita, similique corrupti quisquam suscipit perferendis cumque dolores harum numquam!</p>
        </div>
        <div className="img-box">
            <img src={photo} alt="" />
        </div>
            </div>
        
        </div>
        
    );
}

export default Welcome;
