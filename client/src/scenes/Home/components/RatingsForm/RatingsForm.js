import React, { Component } from 'react';
import { Button, Menu, Icon, Input, Form, Dropdown, Rating } from 'semantic-ui-react';

//import AddAgency from '../AddAgency'
//import { Route } from 'react-router-dom'
import "./styles.css";


class RatingsForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
    RatingSatisfaction: '',
    RatingService: '',
    RatingPayOnTime: '',
    RatingNUBSLI: '',
    RatingWorkAgain: '',
    RatingRecommend: '',
    selectedAgency: null,
  }
    //this.handleClick = this.handleClick.bind(this);
    //this.onChange = this.handleRatingSatisfaction.bind(this);
  }

selectAgency = (event, data) => {
this.setState ({
  selectedAgency: data.value
  })
}

//TODO make sure state kept in controlled component - not rerender emplty rating
//TODO star value on click then on submit change JSON/database files and update average
handleRatingSatisfaction = (rating) => {
    this.setState({
      RatingSatisfaction: rating  
    })
    console.log(rating);
  }
    
    /*
EXAMPLE from SO...
    handleStaffRatingChange = (rating) => {
      this.setState({...this.state, form: {...this.state.form, staffRate: rating}});
  }
  */

//TODO check function updates values - CHANGE to submit form NOT change DB
/*
  handleSubmit = e => {
  e.preventDefault()

  if (this.state.agencies) {
    this.setState(({ agencies }) => ({
      agencies: [
        ...agencies ],
    }))
  }
}
*/

//handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    const { RatingSatisfaction, RatingService, RatingPayOnTime, RatingNUBSLI, RatingWorkAgain, RatingRecommend } = this.state
    const { agencies } = this.props;

    return (

      
      <div className="ratings-form">
      

        <h3>Rate the agency</h3>
          <div className="ratings-form-main">

          <div>There are 6 questions to rate the agency on, out of 5. The average is worked out and displayed in the results.</div>
          <br />
          <div>You must be logged in to give your ratings so we can verify that you're an interpreter, and not a robot or working for an agency. Ahem.</div>
          <br />
          <div>We have a strict privacy policy and your data is secure.</div>
          <br />

          <Form>

            <Dropdown
              placeholder='Click or start typing to select agency'
              fluid
              search
              selection
              onChange={this.selectAgency}
              options={agencies.map(agencies => ({
                key: agencies.id,
                label: { agencies },
                text: agencies.AgencyName,
                value: agencies.AgencyName,
            }))}
            />

            <br />

            <ul className="ratings-form-questions">
            <li>
            <span>How would you rate your overall satisfaction with the agency?</span>            
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
        </li>
        <li>
            <span>How would you rate their service and support?</span>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
        </li>
            <li>
            <span>How often do they pay on time?</span>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
        </li>
          <li>
            <span>How often do they pay in line with NUBSLI guidance?</span>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
        </li>
            <li>
            <span>How likely are you to work for them again?</span>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
          </li>
            <li>
            <span>How likely are you to recommend them to another interpreter/client?</span>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRate}
            />
        </li>
      </ul>
        <br />
            <Button
              color="green">
              Submit
            </Button>
       </Form>
          </div>
          </div>
    );
}
}


export default RatingsForm;
