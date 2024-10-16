import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
    return ( 
        <div className="card">
            <div className="card--image">
                <img src={`../images/${props.destination.imageUrl}`} alt="" />
            </div>
            <div className="card--info">
                <FontAwesomeIcon icon ={faLocationDot} className = 'card--location-icon'></FontAwesomeIcon>
                <span className="card--location">
                    {props.destination.location}
                </span>
                <span className="google-map-link"> <a href={props.destination.googleMapsUrl} target="_blank">View on Google Maps</a></span>
                <h1 className="card--title"> {props.destination.title}</h1>
                <h3 className="card--date">{props.destination.startDate}-{props.destination.endDate}</h3>
                <p className="card--description">{props.destination.description}</p>
                
            </div>
            
        </div>
     );
}
 
export default Card;