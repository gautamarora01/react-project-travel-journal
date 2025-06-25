
function Entry(props){
    return (
        <div className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="location.png" alt="location-marker"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="trip-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Entry;