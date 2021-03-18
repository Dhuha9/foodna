import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import MealCard from '../MealCard/MealCard';
import '../Meals/meals.css';

export default class Meals extends Component {
  render() {
    return (
      <div>
        <div className="available-meals">
          <h1 className="meals-title">Available Meals Right Now</h1>
          <p className="meals-quote">
            `If you dont try this app, you wont become the hero you were meant
            to be`
          </p>
          <Carousel>
            <CarouselItem>
              <div className="items">
                <MealCard
                  img="tomato.jpg"
                  title="Canned Tomato Soup"
                  organization="Family Market"
                />
                <MealCard
                  img="donut.jpg"
                  title="Pastry Box"
                  organization="Chocolate Bar"
                />
                <MealCard
                  img="pantry.jpg"
                  title="Two days worth of pantry"
                  organization="7eleven"
                />
                <MealCard
                  img="rice.jpg"
                  title="Rice bags"
                  organization="Sprout Warehouse"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="items">
                <MealCard
                  img="tomato.jpg"
                  title="Canned Tomato Soup"
                  organization="Family Market"
                />
                <MealCard
                  img="donut.jpg"
                  title="Pastry Box"
                  organization="Chocolate Bar"
                />
                <MealCard
                  img="pantry.jpg"
                  title="Two days worth of pantry"
                  organization="7eleven"
                />
                <MealCard
                  img="rice.jpg"
                  title="Rice bags"
                  organization="Sprout Warehouse"
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    );
  }
}
