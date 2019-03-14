import React, { Component } from 'react';
import Rating from 'react-rating';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import starGrey from './../../../images/star_grey_16.png';
import starYellow from './../../../images/star_green_16.png';
import { Input } from 'semantic-ui-react';



class RatingsResults extends Component {

  constructor(props){
    super(props);

    this.state = {
        query: '',
}
}

  updateQuery = (query) => {
    this.setState({
      query: query,
        })
        this.props.updateFilterResults(query)
      }



  render() {

  let filterResults
  let { query } = this.state;
  let { agencies } = this.props;


  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    filterResults = agencies.filter((agencies) => match.test(agencies.AgencyName))
  } else {
    filterResults = agencies;
  }

  if (this.props.filterResults !== undefined) {
      filterResults.sort(sortBy('AgencyName'));
      }

    return (

      <section className="Ratings-results">
        <h3>The best and the worst...</h3>

        <Input
          className="Search-box"
          aria-label="Search for Agencies"
          tabIndex={0}
          type="text"
          placeholder="Filter by Agency Name"
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          />

          <ul
            className="Ratings-agencies-list"
            agencies={this.props.agencies}
            >

                {this.props.filterResults === undefined ?
                  <p className="Error-alert">Could not load agencies...</p> :

                (this.props.filterResults.map(agencies => (
                <li
                  className="Ratings-list-names"
                  key={agencies.id}
                  tabIndex={0}
                  role="menuitem"
                  >
                  {agencies.AgencyName}
                  <Rating
                    className="Ratings-list-stars"
                    initialRating={this.props.RatingAverage}
                    readonly
                    emptySymbol={<img src={starGrey} className="icon" alt="Grey Placeholder Star"/>}
                    placeholderSymbol={<img src={starGrey} className="icon" alt="Grey Star" />}
                    fullSymbol={<img src={starYellow} className="icon" alt="Yellow Star" />}
                  />
                </li>
             ))
           )
           }
            </ul>

            </section>

    );
}
}

export default RatingsResults;
