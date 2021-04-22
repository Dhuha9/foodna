import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard';
import Carousel from 'react-elastic-carousel';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../meals.css';

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default class Meals extends Component {
  constructor(props) {
    super(props);
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
    const { t } = this.props;

    return (
      <div>
        <div
          className="text-center vh-150 mb-5"
          style={{ backgroundColor: '#03B664' }}
        >
          <h1 className="pt-5 pb-3 text-white">
            {t('AvailableMealsComponent.headline')}
          </h1>
          <p className="pb-4 text-white fs-3" style={{ fontSize: '20px' }}>
            {t('AvailableMealsComponent.paragraph')}
          </p>
          {this.state.mealsCarousel.length === 0 ? (
            <p className="pb-4 text-yello fs-3" style={{ fontSize: '20px' }}>
              {t('AvailableMealsComponent.NoData')}
            </p>
          ) : (
            <Carousel breakPoints={breakpoints}>
              {this.state.mealsCarousel.map((e) => {
                if (e.available)
                  return (
                    <div>
                      <Link
                        to={`/recieve/${e.id}`}
                        style={{ textDecoration: 'none', color: '#000' }}
                      >
                        <MealCard
                          key={e.id}
                          img={e.image}
                          title={e.title}
                          organization={e.organization}
                          id={e.id}
                          bgColor={'buttonGray'}
                        />
                      </Link>
                    </div>
                  );
              })}
            </Carousel>
          )}
        </div>
      </div>
    );
  }
}
