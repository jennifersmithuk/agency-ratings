import React, { Component } from 'react';
import Rating from 'react-rating';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starGrey from './star-grey.png';
import starYellow from './star-yellow.png';




class RatingsResults extends Component {




  render() {



    return (

      <div className="Ratings-results">
        <h3>The best and the worst...</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
      <p>nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
      <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


    <Rating
      emptySymbol={<img src={starGrey} className="icon" />}
      placeholderSymbol={<img src={starGrey} className="icon" />}
      fullSymbol={<img src={starYellow} className="icon" />}
    />


    </div>

    );
}
}

export default RatingsResults;
