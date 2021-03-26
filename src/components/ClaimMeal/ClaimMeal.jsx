// /* eslint react/prop-types: 0 */
// // eslint-disable-next-line react/jsx-no-bind
// import React, { Component } from 'react';
// import '../../meals.css'
// import { Button } from 'react-bootstrap';

// export default class MealCard extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="image-section">
//           <img src={this.props.img} className="card-img" alt="food" />
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{this.props.title}</h5>
//           <span className="card-text">{this.props.organization}</span>
//           <Button className="Button">Get This Meal</Button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react'
import './ClaimMeal.css'
import firebase from '../../firebase'


export default class ClaimMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      phone: '',
      organization: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)

    event.preventDefault();

    const MealOrder = this.state;
    firebase.firestore().collection('MealOrder').add(MealOrder);
    

    this.setState({
      name: '',
      email:'',
      phone: '',
      organization: '',
    });
    
  }

  render() {
    return (
      <div className="ClaimMeal">
          <div className="meal">
              <img className="image" src="pizza.jpg" alt="" />
              <h4>Chicken Fajita Dishes</h4>
              <p className="location">Fried Chicken  Zayoona</p>
              <p className="quantity">Quantity : 5 Dishes</p>
              <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque, mollitia animi sit, commodi corrupti vel harum quod magnam cupiditate tempore illo saepe libero. Incidunt earum a doloribus minima eum.</p>
              
          </div>
          <div className="form">
              <h4 style ={{marginBottom:30}}>Get This Meal</h4>
                <form onSubmit={this.handleSubmit} className="formStyle">
                  <label>Name <sup>*</sup></label>
                  <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className='input'/>
                  <label>Email <sup>*</sup></label>
                  <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className='input'/>
                  <label>Phone <sup>*</sup></label>
                  <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} className='input'/>
                  <label>Organization <sup>*</sup></label>
                  <input name="organization" type="text" value={this.state.organization} onChange={this.handleChange} className='input'/>
                  <input type="submit" value="Get This Meal" className="Submit" />
                </form>
            </div>
      </div>
  )
  }
}
