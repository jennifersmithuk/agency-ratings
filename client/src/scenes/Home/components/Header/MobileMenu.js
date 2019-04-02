import React, { Component } from 'react';
import './styles.css';
import { Responsive, Sidebar, Menu, Segment, Container, Icon, Button } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import Intro from './../../components/Intro/Intro';
import About from './../../components/About/About';
import RatingsForm from './../../components/RatingsForm/RatingsForm';


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
  
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
          <Menu.Item as={NavLink} to="/" active >Home</Menu.Item>
          <Menu.Item as={NavLink} to="/about" >About</Menu.Item>
          <Menu.Item as={NavLink} to="/rate-an-agency" >Rate an Agency</Menu.Item>
          <Menu.Item as={NavLink} to="/ratings-results" >Ratings Results</Menu.Item>
          
          </Sidebar>
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
          <Route exact path="/" render={() => (
               <Intro 
               agencies={this.props.agencies}
               filterResults={this.props.filterResults}/>
            )}/>
            <Route path="/about" render={() => (
               <About />
            )}/>
            <Route exact path='/rate-an-agency' render={() => (
               <RatingsForm
               agencies={this.props.agencies}/>
            )}/>
            {/*<Route path="/ratings-results-full" component={RatingsResultsFull} /> */}
            {/*<Route path="/data-privacy" component={DataPrivacy} /> */}
            {/*<Route component={Notfound} /> */}
        </Responsive>
      )
    }
  }
  
  export default MobileMenu;



 