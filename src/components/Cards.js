import React from 'react';
import Card from './Card';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const cards = [
    {
        id: 1,
        title: "Titulo 1",
        image: image1,
        url: 'https://breatheco.de/'
    },
    {
        id: 2,
        title: "Titulo 2",
        image: image2,
        url: 'https://breatheco.de/'
    },
    {
        id: 3,
        title: "Titulo 3",
        image: image3,
        url: 'https://breatheco.de/'
    }
]

function Cards(props) {
    return (
        <div className="container justify-content-center align-items-center h-100">
            <div className="row">
            {
                cards.map(card => (
                <div className="col-md-4" key={card.id}>
                    <Card title={card.title} image={card.image} url={card.url}/>
                </div>        
                ))
            }
            </div>
        </div>
    )
}

export default Cards
