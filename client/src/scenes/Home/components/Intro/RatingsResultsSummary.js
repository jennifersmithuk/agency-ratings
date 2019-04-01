import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Header, Input, Rating } from 'semantic-ui-react';
import './styles.css';


class RatingsResultsSummary extends Component {

  constructor(props){
    super(props);

    this.state = {
        query: ''
}
}

  updateQuery = (query) => {
    this.setState({
      query: query,
        })
        this.updateFilterResults(query)
      }
  
  
  //When query starts, filter results
  updateFilterResults(query) {
    const match = new RegExp(escapeRegExp(query), 'i')
    this.setState({
      filterResults: this.props.agencies.filter((agencies) => match.test(agencies.AgencyName))
    })
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
        <Header as='h3' color='green' content="The best and the worst..." />

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

                {this.state.filterResults === undefined ?
                  <p className="Error-alert">Loading agencies...</p> :

                (this.state.filterResults.map(agencies => (
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

export default RatingsResultsSummary;
