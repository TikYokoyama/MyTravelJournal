import React from "react"

export default function Card(props) {

    return (
        <section className="card">
            <div>
                <img className="card--img" src={require(`../images/${props.item.image}`)} alt={`${props.item.image}`} />
            </div>
            <div className="card--infos">
                <span className="card--location">
                    <div className="location--left">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>{props.item.location}</p>
                    </div>
                    <div className="location--right">
                        <a className="card--linkG" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </span>
                <div className="card--text">
                    <h2 className="card--place">{props.item.title}</h2>
                    <h3 className="card--visitDate">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="card--placeInfo">{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}

