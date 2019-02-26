import React, { Component } from 'react';
import AddButton from './AddButton';
import Button from '@material-ui/core/Button';
import Rating from 'react-rating';
import starGrey from './star_grey_16.png';
import starYellow from './star_green_16.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddAgency from './AddAgency'
import { Route } from 'react-router-dom'


class RatingsForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
    value: 0,
    agencies: [],
    anchorEl: null,
  }

    this.handleClick = this.handleClick.bind(this);
  }

//TODO star value on click then on submit change JSON files and update average

  handleClick = ({ target: { agencies, value } }) =>
    this.setState({
      agencies: value
    })

//TODO check function updates values
  handleSubmit = e => {
  e.preventDefault()

  if (this.state.agencies) {
    this.setState(({ agencies }) => ({
      agencies: [
        ...agencies ],
    }))
  }
}

// Handle menu selection
handleClick = event => {
  this.setState({ anchorEl: event.currentTarget });
};

// Handle menu close
handleClose = () => {
  this.setState({ anchorEl: null });
};


  render() {

    const { RatingPayOnTime, RatingNubsliRates, RatingCommunication, RatingOrganisation, RatingWorkAgain, RatingRecommend } = this.state
    const { anchorEl } = this.state;
    let { agencies } = this.props;

    return (

      <div className="Ratings-form">
        <h3>Rate the agency</h3>
          <div className="Form-main">

          <div>There are 6 questions to rate the agency on, out of 5. The average is worked out and displayed in the results.</div>
          <br />
          <div>You must be logged in to give your ratings so we can verify that you're an interpreter, and not a robot or working for an agency. Ahem.</div>
          <br />
          <div>We have a strict privacy policy and your data is secure.</div>
          <br />

          <form
            className="Form"
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
              className="Ratings-list-names"
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
                


            <ul className="Ratings-form-questions">
            <li>
            <span>How often do they pay on time?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingPayOnTime}
              onChange={this.handleClick}
            />
        </li>
          <li>
            <span>How often do they pay NUBSLI rates?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingNubsliRates}
              onChange={this.handleClick}
            />
        </li>
          <li>
            <span>How well do they communicate?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingCommunication}
              onChange={this.handleClick}
            />
          </li>
            <li>
            <span>How organised are they?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingOrganisation}
              onChange={this.handleClick}
            />
          </li>
            <li>
            <span>How likely are you to work for them again?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingWorkAgain}
              onChange={this.handleClick}
            />
          </li>
            <li>
            <span>How likely are you to recommend them to another interpreter/client?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingRecommend}
              onChange={this.handleClick}
            />
        </li>
      </ul>
        <br />

         <Button
            className='Submit-button'
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
