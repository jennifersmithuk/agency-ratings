import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Header, Input, Rating } from 'semantic-ui-react';


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
        <Header as='h3' color='green'content="The best and the worst..." />

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
                    //defaultRating={this.props.RatingAverage}
                    defaultRating={3}
                    maxRating={5}
                    disabled
                    icon='star'
                    size='tiny'
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
