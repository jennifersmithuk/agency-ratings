import React, { Component } from 'react';
import { Container, Button, Segment, Menu, Responsive } from 'semantic-ui-react';
import { Route, NavLink } from 'react-router-dom'
import './styles.css';
import Intro from './../../components/Intro/Intro';
import About from './../../components/About/About';
import RatingsForm from './../../components/RatingsForm/RatingsForm';



class MainHeader extends Component {
    state = {}
    
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    render() {
        const { fixed } = this.state
      
      return (

  
  <Responsive 
   minWidth={768}
  >
    <Segment
      inverted
      textAlign='center'
      vertical
      >
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
      <Container>
        <Menu.Item as={NavLink} to="/" active >Home</Menu.Item>
        <Menu.Item as={NavLink} to="/about" >About</Menu.Item>
        <Menu.Item as={NavLink} to="/rate-an-agency" >Rate an Agency</Menu.Item>
        <Menu.Item as={NavLink} to="/ratings-results" >Ratings Results</Menu.Item>
        <Menu.Item position='right'>
        
          <Button as='a' inverted={!fixed}>
            Log in
          </Button>
          <Button as='a' 
            inverted={!fixed} 
            primary={fixed} 
            style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
    </Segment>
    <Route exact path="/" render={() => (
               <Intro agencies={this.props.agencies}/>
            )}/>
            <Route path="/about" render={() => (
               <About />
            )}/>
            <Route exact path='/rate-an-agency' render={() => (
               <RatingsForm
               agencies={this.props.agencies}/>
            )}/>
            {/*<Route path="/ratings-results-full" component={RatingsResultsFull} /> */}
            {/*<Route component={Notfound} /> */}


</Responsive>

      

      )
  }
}

export default MainHeader;
