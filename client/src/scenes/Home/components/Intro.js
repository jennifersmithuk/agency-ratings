import React, { Component } from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';


class Intro extends Component {
    state = {}
    
    render() {
    
      
      return (
<Container 
text
className="App-about" >
<Grid relaxed columns={3} className="App-about-info">
  <Grid.Column>
  <Icon name='sign language' color='olive' size='big' className="App-about-icons" />
    <p className="App-about-column-text">Most interpreters are freelance, working for a variety of agencies and direct clients.</p>
  </Grid.Column>
  <Grid.Column>
  <Icon name='talk' size='big' color='green' className="App-about-icons" />
    <p className="App-about-column-text">There are a multitude of agencies. Not all are reputable and relying on word of mouth isn't enough.</p>
  </Grid.Column>
  <Grid.Column>
  <Icon name='star' size='big' color='teal' className="App-about-icons" />
  <p className="App-about-column-text">Transparency and clarity for freelancers is vital... <br/> Finally, we can rate agencies in a safe way.</p>
  </Grid.Column>
</Grid>
</Container>
      )
    }
}

export default Intro; 