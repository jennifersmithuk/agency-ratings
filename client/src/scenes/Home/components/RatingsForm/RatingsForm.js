import React, { Component } from 'react';
import AddButton from '../AddButton';
import Button from '@material-ui/core/Button';
import Rating from 'react-rating';
import starGrey from './../../../../images/star_grey_16.png';
import starGreen from './../../../../images/star_green_16.png';
//import starYellow from './../../../images/star_yellow_16.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddAgency from '../AddAgency'
import { Route } from 'react-router-dom'
import "./styles.scss";


class RatingsForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
    agencies: [],
    anchorEl: null,
    RatingSatisfaction: '',
    RatingService: '',
    RatingPayOnTime: '',
    RatingNUBSLI: '',
    RatingWorkAgain: '',
    RatingRecommend: '',
  }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.handleRatingSatisfaction.bind(this);
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
  handleSubmit = e => {
  e.preventDefault()

  if (this.state.agencies) {
    this.setState(({ agencies }) => ({
      agencies: [
        ...agencies ],
    }))
  }
}

// Handle dropdown selection
handleClick = event => {
  this.setState({ anchorEl: event.currentTarget });
};

// Handle dropdown close
handleClose = () => {
  this.setState({ anchorEl: null });
};


  render() {

    const { RatingSatisfaction, RatingService, RatingPayOnTime, RatingNUBSLI, RatingWorkAgain, RatingRecommend } = this.state
    const { anchorEl } = this.state;
    let { agencies } = this.props;

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

          <form
            className="ratings-form-form"
            onSubmit={this.handleSubmit}
            >

            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              variant="contained"
              size="medium"
              color="primary"
            >
              Select Agency
            </Button>
            <Menu
              id="Agency-dropdown"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
            {agencies.map(agencies => (
            <MenuItem
              className="ratings-form-list-names"
              key={agencies.id}
              value={agencies.AgencyName}
              tabIndex={0}
              role="menuitem"
              onClick={this.handleClose}
              >
              {agencies.AgencyName}

            </MenuItem>
         ))
       }
            </Menu>
            <br />

                <AddButton>

                <Route path='/add-agency' render={(history) => (

                <AddAgency>
                  
                  onCreateAgency={(agencies) => {
                    this.createAgency(agencies)
                   history.push('/') 
                  }}
                  
                
                </AddAgency>
             
            )} />
             </AddButton>

            <ul className="ratings-form-questions">
            <li>
            <span>How would you rate your overall satisfaction with the agency?</span>            
            <Rating
              className="ratings-form-stars-list"
              initialRating={3}
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              onChange={this.handleRatingSatisfaction.bind(this)}
            />
        </li>
        <li>
            <span>How would you rate their service and support?</span>
            <Rating
              className="Ratings-form-stars-list"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              //value={RatingService}
              //onChange={this.handleClick}
            />
        </li>
            <li>
            <span>How often do they pay on time?</span>
            <Rating
              className="Ratings-form-stars-list"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              //value={RatingPayOnTime}
              //onChange={this.handleClick}
            />
        </li>
          <li>
            <span>How often do they pay in line with NUBSLI guidance?</span>
            <Rating
              className="Ratings-form-stars-list"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              //value={RatingNUBSLI}
              //onChange={this.handleClick}
            />
        </li>
            <li>
            <span>How likely are you to work for them again?</span>
            <Rating
              className="Ratings-form-stars-list"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              //value={RatingWorkAgain}
              //onChange={this.handleClick}
            />
          </li>
            <li>
            <span>How likely are you to recommend them to another interpreter/client?</span>
            <Rating
              className="Ratings-form-stars-list"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starGreen} className="icon" alt="Filled Green Star" />}
              //value={RatingRecommend}
              //onChange={this.handleClick}
            />
        </li>
      </ul>
        <br />

         <Button
            className='ratings-form-submit-button'
            type='submit'
            color='primary'
            variant='raised'
          >
            Submit
          </Button>

       </form>



          </div>
          </div>


    );
}
}


export default RatingsForm;
