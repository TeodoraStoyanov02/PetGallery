// PetGallery.js

import React from 'react';

// Importing images
import belaImg from './images/bela.jpg';
import iskricaImg from './images/iskrica.jpg';
import mangoImg from './images/mango.jpg';

const petsData = [
  { "id": 1, "name": "Bela", "type": "Dog", "image": belaImg },
  { "id": 2, "name": "Iskrica", "type": "Hedgehog", "image": iskricaImg },
  { "id": 3, "name": "Mango", "type": "Cat", "image": mangoImg }
];

function PetGallery() {
    return (
        <div className="pets-container">
            {petsData.map(pet => (
                <div className="pet-item" key={pet.id}>
                    <h3>{pet.name}</h3>
                    <p>{pet.type}</p>
                    <img src={pet.image} alt={pet.name} />
                </div>
            ))}
        </div>
    );
}


export default PetGallery;
