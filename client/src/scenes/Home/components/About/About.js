import React, { Component } from 'react';
import './styles.css';
import { Container, Icon, Segment, Header } from 'semantic-ui-react';
import AboutFAQs from './AboutFAQs';
import { HashLink as Link } from 'react-router-hash-link';


class About extends Component {

    render() {

    
        return (

            <Container text>
            <AboutFAQs />
            <Container className="about-why">
            <Header as='h3' color='green' >

            {/*<Link
                smooth
                to="about#why"
            >Why I created this site</Link>*/}
            <div id="why">
            <p>Why I created this site</p>
            </div>
            </Header>
            <Container text className='about-why-text'>
            <Icon name='computer' color='olive' size='large' className='about-icons'/>
                <p>
                Even as an experienced interpreter, I had a terrible experience with an agency.
                I took a series of bookings. I was sent some terrible terms and conditions later but I was already 
                working with the student, I liked them and the subject so I perservered.
                </p>
            <Icon name='sign language' color='blue' size='large' className='about-icons'/>
                <p>Later I had suspicions of fraud. The University didn't seem bothered. I raised it with DSA, but I had little evidence. 
                This agency was mostly just abusing the system, leaving students with no budget
                and the Universities they worked with had to cough up else leave students stranded for the rest of the year.
                </p>
            <Icon name='pound sign' color='teal' size='large' className='about-icons'/>
                <p>I mostly got paid but always late. Towards the end, the relationship went from bad to worse. After I said I would no longer work for them 
                    I had to threaten legal action to get my last invoices paid. Then there came verbal abuse.
                </p>
            <Icon name='thumbs down outline' color='blue' size='large' className='about-icons'/>
                <p>A few months later, I was at lunch with 10 interpreters and 1 Deaf person, I mentioned the agency and everyone had a similar story. 
                I wanted a way to rate agencies, to out the awful ones. 
                E-groups and forums are often not a safe space as they are littered with agencies or other organisations
                keeping up with the latest news and trends. And then there is always the threat of libel.
                </p>
            <Icon name='star' color='olive' size='large' className='about-icons'/>
                <p>This is a safe space. No written reviews. Just opinions via a simple ratings system. Interpreters 
                are allowed them after all. The system is in desparate need of an overhaul and new ways of working.
                </p>
            </Container>
            </Container>
            <Segment className="about-other">
            <Container text>
            
            <Header as='h3' color='green' >

            {/*<Link
                smooth
                to="/about#other-projects"
            >Other Projects</Link>*/}
            <div id="other-projects">
            <p>Other Projects</p>
            </div>
            </Header>
           
            <p>I'm working on an exciting new project with some brilliant colleagues. <br/>
                We are aiming to change the way the market operates.
                The current system is open to abuse and broken. <br/>
                </p>
            <p>SignCo.io can change all this. <br/>
                Interpreters and other interested parties can register their interest and sign up for updates.
            </p>
            <p>My previous projects and web development work can be seen on my personal portfolio at <a href='https://jensmith.info/' title='Jen Smith Portfolio'>jensmith.info</a>
            </p>
            </Container>
            </Segment>
            </Container>
        )
        }
    }

    export default About;
