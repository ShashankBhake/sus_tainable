import React from 'react';
import CardData from './cards'; // Assuming the component file is in the same directory
import jsonData from './cardDetails.json';
import CardElement from './cards';
import './cards.css';
export default function CardList() {
  return (
    <div className ="body">
    <div className='container'>
      {jsonData.map((cardData, index) => (  
        <CardElement key={index} cardData={cardData} />
      ))}
    </div>
    </div>
  );
}
