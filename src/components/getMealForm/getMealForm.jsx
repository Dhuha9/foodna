import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

export default function getMealForm({ match }) {

    const [mealData, setMealData] = useState([]);
    
    useEffect(()=>{
        const mealRef = firebase.firestore()
        .collection('meals')
        .doc(match.params.id);
        mealRef.get()
        .then((meal) => {
          setMealData(meal.data());
        });
    }, []);

  return (
    <div className="meal-in-form">
        <div className="meal-info">
        <img className="meal-form-image" src={mealData.image}/>
      <h1>{mealData.title}</h1>
      <p className="text"><strong>Address: </strong>{mealData.organization}</p>
      <p className="text"><strong>Quantity: </strong>{mealData.quantity}</p>
      <p className="text"><strong>Description: </strong>{mealData.description}</p>
        </div>
    </div>
  );
}
