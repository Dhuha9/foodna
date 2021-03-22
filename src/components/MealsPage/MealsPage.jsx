/* eslint react/prop-types: 0 */
/* eslint-disable-next-line react/jsx-no-bind */
import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
import MealData from '../../data.json'


export default class AvailableMealsPage extends Component {
  render() {
    return (
      <div className="available-meals-page">
        <h1 className="available-meals-title">Available Meals Right Now</h1>
        <p className="available-meals-subtitle">
          If you dont try this app you will never become the superhero you were
          meant to be
        </p>
        <div className="meals-grid">
            {MealData.map((meal)=>{
                return <div key={meal.id}>
                  <MealCard 
                img={meal.img}
                title={meal.title}
                organization={meal.organization}
                />
                  </div>
            })}
        </div>
      </div>
    );
  }
}
