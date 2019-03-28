import React, { Component } from 'react';
import { Container, Button, Segment, Menu, Responsive } from 'semantic-ui-react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import './styles.css';



class MainHeader extends Component {
    state = {}
    
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    render() {
        const { children } = this.props
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
      <Router>
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
      <Container>
        <Menu.Item as={NavLink} to="/" >
          Home
        </Menu.Item>
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
    </Router>
</Segment>
</Responsive>

      

      )
  }
}

export default MainHeader;
