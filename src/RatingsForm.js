import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import AddButton from './AddButton';
import Button from '@material-ui/core/Button';
import Rating from 'react-rating';
import starGrey from './star_grey_16.png';
import starYellow from './star_yellow_16.png';


class RatingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
    agencies: [],

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


  render() {

    const { RatingPayOnTime, RatingNubsliRates, RatingCommunication, RatingOrganisation, RatingWorkAgain, RatingRecommend } = this.state

    return (

      <div className="Ratings-form">
        <h3>Rate the agency</h3>


          <form
            className="Form"
            onSubmit={this.handleSubmit}>
            <div className="Form-main">


            <AddButton></AddButton>

            <div>
            <span>Do they pay on time?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingPayOnTime}
              onChange={this.handleClick}
            />
          </div>
          <div>
            <span>Do they pay NUBSLI rates?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingNubsliRates}
              onChange={this.handleClick}
            />
          </div>
          <div>
            <span>Do they communicate well?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingCommunication}
              onChange={this.handleClick}
            />
          </div>
          <div>
            <span>Are they organised?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingOrganisation}
              onChange={this.handleClick}
            />
          </div>
          <div>
            <span>How likely are you to work for them again?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingWorkAgain}
              onChange={this.handleClick}
            />
          </div>
          <div>
            <span>Would you recommend them to another interpreter/client?</span>
            <Rating
              className="Ratings-list-stars-form"
              emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
              placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
              fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
              value={RatingRecommend}
              onChange={this.handleClick}
            />
          </div>
        </div>

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


    );
}
}


export default RatingsForm;
