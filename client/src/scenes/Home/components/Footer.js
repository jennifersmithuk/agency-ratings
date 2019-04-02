import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Grid, Header, List, Icon } from 'semantic-ui-react';
//import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from "react-router-hash-link";


class Footer extends Component {
  state = {}
  
  
  render() {
    
    
    return (

<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as={NavLink} to="/about#faqs" activeClassName="selected" >FAQs</List.Item>
                <List.Item as={NavLink} to="/about#why" activeClassName="selected" >Why I created this site</List.Item>
                <List.Item as={NavLink} to="/about#other-projects" activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Other projects</List.Item>
                {/*<List.Item as={NavLink} to="/data-privacy" >Data and privacy policy</List.Item>*/}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Actions' />
              <List link inverted>
                <List.Item as={NavLink} smooth to="/about#hash" >Add an agency</List.Item>
                <List.Item as={NavLink} to="/rate-an-agency" >Rate an agency</List.Item>
                <List.Item as={NavLink} to="/ratings-results" >See ratings results</List.Item>
                {/*<List.Item as={NavLink} to="/" >Sign up for info</List.Item>*/}
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
              Share on social media
              </Header>
                <Icon inverted color='green' name='twitter square' size='big' />
                <Icon inverted color='green' name='facebook official' size='big' />
                <Icon inverted color='green' name='linkedin' size='big' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

)
    }
  }

  export default Footer;

  /*
  Footer.propTypes = {
    mobile: PropTypes.bool,
  }
  */