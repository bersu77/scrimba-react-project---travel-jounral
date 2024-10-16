import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return ( 
       <div className="navbar">
        <FontAwesomeIcon icon={faEarthEurope} className="nav--icon"></FontAwesomeIcon>
        <h1>my travel journal.</h1>
       </div>

     );
}

 
export default Navbar;