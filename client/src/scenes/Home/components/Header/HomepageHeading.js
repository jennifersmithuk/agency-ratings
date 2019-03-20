import React from 'react';
import { Container, Button, Header, Icon, Image } from 'semantic-ui-react';
import logo from './../../../../images/Stars_small.jpg';
import './styles.css';


const HomepageHeading = () => (
    
    <Container 
    text
    >
    <Image src={logo} className="App-logo" centered alt="Logo of 6 Green Stars with different ratings" />
      <Header
        as='h1'
        content='Welcome to Agency Ratings'
        className="App-title"
        inverted
      
      />
      <Header
        as='h2'
        content="where interpreters rate agencies they like... and the ones they don't"
        inverted
        className="App-subtitle"
  
      />
      <Button 
        size="large"
        color="green"
        >
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  )

  export default HomepageHeading;

  