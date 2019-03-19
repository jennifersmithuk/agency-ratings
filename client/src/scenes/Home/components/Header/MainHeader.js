import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Segment, Menu } from 'semantic-ui-react';
import HomepageHeading from './HomepageHeading';
import './styles.css';


class Header extends Component {
    state = {}
    
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    render() {
        const { children } = this.props
        const { fixed } = this.state
      
      return (

//const Header = ({ mobile }) => (

    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 420, padding: '1em 0em' }}
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
        <Menu.Item as='a' active>
          Home
        </Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Rate an Agency</Menu.Item>
        <Menu.Item as='a'>Ratings Results</Menu.Item>
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
    <HomepageHeading/>
</Segment>
  )
  }
}

export default Header;

/*
Header.propTypes = {
  mobile: PropTypes.bool,
}
*/