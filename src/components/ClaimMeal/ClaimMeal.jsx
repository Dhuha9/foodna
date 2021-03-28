import React, { Component } from 'react'
import './ClaimMeal.css'
import firebase from '../../firebase'
import Recaptcha from 'react-recaptcha';
import PropTypes from 'prop-types';


export default class ClaimMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      phone: '',
      organization: '',
      isVerified: false,
      mealInfo:{},
      didMount:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        didMount:true
      })
    }, 1000);

    const unsubscribe = firebase.firestore()
      .collection('meals')
      .doc(this.props.match.params.id)
      .get()
      .then(snapshot => 
        this.setState({
          mealInfo: snapshot.data()
        })
      )
      return()=> unsubscribe();
    
    
}

  recaptchaLoaded() {
    if(this.state.didMount){
      console.log('capcha successfully loaded');
    }
    
  }

  verifyCallback(response) {
    if(this.state.didMount){
        if (response) {
        this.setState({
          isVerified: true
        })
        console.log('capcha successfully verified');
      }
    }
  }

  handleChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if(this.state.didMount){
        this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();

    if(this.state.name==''|| this.state.email==''||this.state.phone=='' || this.state.organization=='')
      alert('Please fill all the fields in the form')
    else{
      if (this.state.isVerified) {

      const MealOrder = {...this.state};
      console.log(MealOrder)
      firebase.firestore().collection('MealOrder').add(MealOrder);
      
      this.setState({
        name: '',
        email:'',
        phone: '',
        organization: '',
      });

      firebase.firestore().collection("meals")
      .doc(this.props.match.params.id).update({
        'available':false
      });

      alert('Your order have been sent!');

      } else {
        alert('Please verify that you are a human!');
      }
    }
    
  }

  render() {
    return (
      <div className="ClaimMeal">
          <div className="meal">
              <img className="image" src={this.state.mealInfo.image} alt="" />
              <h4>{this.state.mealInfo.title}</h4>
              <p className="location">{this.state.mealInfo.organization}</p>
              <p className="quantity">Quantity : {this.state.mealInfo.quantity}</p>
              <p>Description : {this.state.mealInfo.description}</p>
              
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
                  {
                    this.state.didMount? 
                      <Recaptcha
                        sitekey="6Lc1AJEaAAAAAHq9WLQosB7pq1gp4VK4s65-MnnL"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                      />: 'ReCAPCHA not working'
                  }
                  <input type="submit" value="Get This Meal" className="Submit" />
                </form>
            </div>
      </div>
  )
  }
}

ClaimMeal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}