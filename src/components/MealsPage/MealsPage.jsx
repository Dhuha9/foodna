/* eslint react/prop-types: 0 */
/* eslint-disable-next-line react/jsx-no-bind */
import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
//import MealData from '../../data.json'
import firebase from '../../firebase'


export default class MealsPage extends Component {
  
  constructor(){
    super()
    this.state = {
      meals:[]
    }
  }

  componentDidMount(){
      const unsubscribe = firebase.firestore()
      .collection('meals')
      .onSnapshot((snap)=>{
        const newMeals = snap.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }))
        this.setState({
          meals: newMeals
        })
      })
      return()=> unsubscribe();
  }
  


 

  render() {
    return (
      <div className="available-meals-page">
        <h1 className="available-meals-title">Available Meals Right Now</h1>
        <p className="available-meals-subtitle">
          If you dont try this app you will never become the superhero you were
          meant to be
        </p>
        <div className="meals-grid">
            {this.state.meals.map((meal)=>{
                return <div key={meal.id}>
                  <MealCard 
                img={meal.image}
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
