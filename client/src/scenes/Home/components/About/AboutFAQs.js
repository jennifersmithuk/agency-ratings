import React, { Component } from 'react';
import './styles.css';
import { Container, Accordion, Icon, Header } from 'semantic-ui-react';


class AboutFAQs extends Component {

    state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

    render() {

        const { activeIndex } = this.state
    
        return (

            <Container text className="about-main">
            <Header as='h3' color='green'>
            <a href='#'>FAQs</a>
            </Header>
            <Accordion fluid styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Why do we ask Interpreters to sign in to rate an agency?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
              We only want sign language interpreters to be able to rate agencies. 
              That way we stop spammers and bots and make sure the ratings on this 
              site are real, credible and we maintain the site’s integrity.
              </p>
            </Accordion.Content>
                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How do you know that someone is an interpreter?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                We verify your details against publicly held information such as the NRCPD 
                registers. We check by registration number and we ask that you use the public 
                email that you use for work. We also have a two-step authorisation process 
                where we email this address and wait until you verify your identity.  
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Do you allow Trainee Interpreters to rate agencies?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <p>
                Yes.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Why don’t you allow Communication Support Workers (CSWs), 
                communicators and signers to rate agencies?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <p>
                People who work in the field but are not yet registered are likely to have an 
                even worse deal and less protection against agencies than registered interpreters, 
                especially ones who are members of NUBSLI, the National Union for British Sign 
                Language Interpreters. However, we have no way of verifying the identity and work 
                of people who are not registered interpreters. Additionally the site owner believes 
                only registered and trainee interpreters should be working as interpreters in the 
                majority of circumstances and as such this is the focus of the site.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                <Icon name='dropdown' />
                What about relay interpreters?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <p>
                As there is sadly, still, no proper pathway to registration for relay interpreters 
                then we cannot verify someone’s work and identity. If they are a registered Translator 
                then they can create a log in and rate agencies. 
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
                <Icon name='dropdown' />
                What happens if an interpreter is a staff member at an agency?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
                <p>
                It is up to the interpreter how they rate any agency. All of their ratings are 
                anonymous so they are free to rate their employers as they wish without recrimination. 
                If they own the agency, they are also free to rate as they wish.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Will someone know how I rated?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
                <p>
                No. All ratings are submitted anonymously. All data is held in accordance 
                with the terms and conditions of using the site. Only the owner of the site 
                has access to the database and may use the data to create more features on the 
                site in future. Your personal data will always be private and the ratings will 
                always be anonymous. Please see the privacy policy. LINK
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How many times can you rate an agency?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 7}>
                <p>
                Once. If you rate them again, your previously submitted results 
                are wiped out and the new ratings are used for the results shown.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How do you work out the ratings?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 8}>
                <p>
                There are six questions for interpreters to rate the agency on. For the summary 
                ratings, an average of the six ratings is calculated and these results are 
                displayed in the full results page LINK along with how many interpreters have submitted ratings.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
                <Icon name='dropdown' />
                How many agencies should I rate?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 9}>
                <p>
                As many as you like. As long as you are logged in, you can rate agencies. 
                The more ratings we have the more the results will be reflective of the 
                experience of interpreters around the UK.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Who benefits from these results?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 10}>
                <p>
                Interpreters. Deaf people. Anyone who wants to book an interpreter.
                Anyone who is booked by the agecies but is unqualified. 
                Other communication professionals who work with Deaf people.
                Organisations who use agencies to book interpreters.
                </p>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Who created this site?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 11}>
                <p>
                Jen Smith. See the ‘Who created this site?’ page for more info. LINK
                </p>
            </Accordion.Content>
            </Accordion>
            </Container>
                    
            );
    
      }
    }
      
export default AboutFAQs;

