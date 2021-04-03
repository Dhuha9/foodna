import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
import '../../meals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from '../../firebase';
import {Link} from "react-router-dom"


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
              if (meal.available)
                return <div key={meal.id}>
                  <Link to={`/ClaimMeal/${meal.id}`}>
                  <MealCard 
                img={meal.image}
                title={meal.title}
                organization={meal.organization}
                />
                  </Link>
                  </div>
            })}
        </div>
      </div>
    );
  }
}
