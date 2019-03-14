import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Header, Icon, Image } from 'semantic-ui-react';
import logo from './../../images/Stars_small.jpg';

const HomepageHeading = ({ mobile }) => (
    
    <Container 
    text
    >
    <Image src={logo} className="App-logo" centered alt="Logo of 6 Green Stars with different ratings" />
      <Header
        as='h1'
        content='Welcome to Agency Ratings'
        className="App-title"
        inverted
        style={{
          fontSize: mobile ? '1.75em' : '2.5em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '5em',
        }}
      />
      <Header
        as='h2'
        content="where interpreters rate agencies they like, and the ones they don't"
        inverted
        style={{
          fontSize: mobile ? '0.75em' : '1.25em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          marginBottom: mobile ? '1em' : '2em'
        }}
      />
      <Button 
        primary size="large"
        color="green"
        className="start-button">
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
  
  export default HomepageHeading;

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }