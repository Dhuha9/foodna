import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
import Carousel from 'react-elastic-carousel';
import firebase from '../../firebase';

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default class Meals extends Component {
  constructor() {
    super();
    this.state = {
      mealsCarousel: [],
    };
  }

  componentDidMount() {
    const unsubscribe = firebase
      .firestore()
      .collection('meals')
      .onSnapshot((snap) => {
        const newMeals = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({
          mealsCarousel: newMeals,
        });
      });
    return () => unsubscribe();
  }

  render() {
    return (
      <div>
        <div className="available-meals">
          <h1 className="meals-title">Available Meals Right Now</h1>
          <p className="meals-quote">
            If you dont try this app, you wont become the hero you were meant to
            be
          </p>

          <Carousel breakPoints={breakpoints}>
            {this.state.mealsCarousel.map((e) => {
              return (
                <MealCard
                  key={e.id}
                  img={e.image}
                  title={e.title}
                  organization={e.organization}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}
