import React, { Component } from 'react';
import { Button, Menu, Icon, Input, Form, Dropdown, Rating, Container, Header, Segment } from 'semantic-ui-react';

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
      <Container>
        <Header as='h3' color='green'content="Rate an Agency" />
          <div className="ratings-form-main">
          <p>There are 6 quick questions to rate the agency on, out of 5. The average is worked out and displayed in the results.</p>
          <p>You must be logged in to give your ratings so we can verify that you're an interpreter and not a robot.</p>
          <p>We have a strict privacy policy and your data is secure.</p>
          </div>
          </Container>


          <Form>
            <Form.Field required>
            <Form.Dropdown required
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
            </Form.Field>
            <Form.Field required>
            <Segment>
              <p>How would you rate your overall satisfaction with this agency?</p>
              <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingSatisfaction}
            />
              </Segment>
            </Form.Field>
            
            <Form.Field required>
            <Segment>
              <p>How would you rate their service and support?</p>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingSupport}
            />
            </Segment>
            </Form.Field>
            <Form.Field required>
            <Segment>
              <p>How often do they pay on time?</p>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingPayOnTime}
            />
            </Segment>
            </Form.Field>
            <Form.Field required>
            <Segment>
              <p>How often do they pay in line with NUBSLI guidance?</p>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingNUBSLI}
            />
            </Segment>
            </Form.Field>
            <Form.Field required>
            <Segment>
              <p>How likely are you to work for them again?</p>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingWorkAgain}
            />
            </Segment>
            </Form.Field>
            <Form.Field required>
            <Segment>
              <p>How likely are you to recommend them to another interpreter/client?</p>
            <Rating
              className="ratings-form-stars-list"
              maxRating={5}
              icon="star"
              //onRate={this.handleRatingRecommend}
            />
            </Segment>
            </Form.Field>
            <Button
              className="ratings-form-submit-button"
              color="green">
              Submit
            </Button>
            <br/>
       </Form>
       </div>
    
    );
}
}


export default RatingsForm;
