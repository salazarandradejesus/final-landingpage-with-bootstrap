import React from 'react';
import './Card.css';


function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Officia esse officia proident id. Labore excepteur occaecat sunt exercitation sint nostrud do duis dolore ad deserunt reprehenderit consectetur. Ad eiusmod exercitation reprehenderit anim reprehenderit commodo.</p>
            <a href={props.url} className="btn btn-outline-primary rounded-0" target="_blank">
                Find More</a>                       
            </div>
        </div>
    )
}

export default Card