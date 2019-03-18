import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Grid, Header, List, Icon } from 'semantic-ui-react';

const Footer = ({ mobile }) => (

<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Why we created this site</List.Item>
                <List.Item as='a'>Created by...</List.Item>
                <List.Item as='a'>Other projects</List.Item>
                {/*<List.Item as='a'>Partners</List.Item>*/}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Actions' />
              <List link inverted>
                <List.Item as='a'>Add an agency</List.Item>
                <List.Item as='a'>Rate an agency</List.Item>
                {/*<List.Item as='a'>See your past ratings</List.Item>*/}
                <List.Item as='a'>Sign up to receive further info</List.Item>
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

    export default Footer;

  Footer.propTypes = {
    mobile: PropTypes.bool,
  }