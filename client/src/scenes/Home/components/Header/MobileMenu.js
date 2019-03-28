import React, { Component } from 'react';
import './styles.css';
import { Responsive, Sidebar, Menu, Segment, Container, Icon, Button } from 'semantic-ui-react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom'


class MobileMenu extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive 
          as={Sidebar.Pushable}
          maxWidth={767}
        >
        <Router>
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={NavLink} to="/" >
          Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about" >About</Menu.Item>
          <Menu.Item as={NavLink} to="/rate-an-agency" >Rate an Agency</Menu.Item>
          <Menu.Item as={NavLink} to="/ratings-results" >Ratings Results</Menu.Item>
          
          </Sidebar>
          </Router>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 160, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
  
            {children}
          </Sidebar.Pusher>
        </Responsive>
      )
    }
  }
  
  export default MobileMenu;



 