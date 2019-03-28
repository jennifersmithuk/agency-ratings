import React, { Component } from 'react';
import './styles.css';
import { Container, Icon, Segment, Header } from 'semantic-ui-react';
import AboutFAQs from './AboutFAQs';


class About extends Component {

    render() {

   
    
        return (

            <Container text>
            <AboutFAQs />
            <Segment>
            <Header as='h3' color='green' >
            <a href='#'>Why I created this site</a>
            </Header>
            <Icon name='computer' color='teal'/>
                <p>
                Even as an experienced interpreter, I had a terrible experience with an agency.
                I took a series of bookings, was sent some terrible terms and conditions but agreed on the basis that I'd already 
                started working with the student, I liked them and the subject so I perserved.
                </p>
            <Icon name='sign language' color='olive' />
                <p>Later I had suspicions of fraud. The University didn't seem bothered. I raised it with DSA, but I effectively had little evidence. 
                This agency was mostly just abusing the system, leaving students with no budget
                before the end of term and the Universities they worked with had a cough up else leave students stranded for the rest of the year.
                </p>
            <Icon name='pound sign' color='blue' />
                <p>I mostly got paid but always a bit late. Towards the end, the relationship went from bad to worse. As I stated I would not work for them 
                    again I then had to threaten legal to get my last invoices paid. Then there came verbal abuse.
                </p>
            <Icon name='thumbs down outline' color='olive' />
                <p>A few months later, I was at lunch with 10 interpreters and 1 Deaf person, I mentioned the agency and the air went blue. 
                I want a way to rate agencies, to out the awful ones. 
                E-groups and forums are often not a safe space as they are littered with agencies or organisations
                keeping up with the latest news and trends. And there is always the threat of slander.
                </p>
            <Icon name='star' color='teal' />
                <p>This is a safe space. No words, no reviews. Just simple ratings and opinions. Interpreters 
                are allowed them after all. And the system is in desparate need of an overhaul and new ways of working.
                </p>
            </Segment>
            <Segment>
            <Header as='h3' color='green' >
            <a href='#'>Other Projects</a>
            </Header>
            <p>I'm working on an exciting new project with two amazing colleagues. We are aiming to change the way the market operates.
                The system is abused and broken, controlled by the few and does not work for many. 
                CoSign.io will change all this. Interpreters and other interested parties can register their interest and sign up for updates.
            </p>
            <p>My previous projects and Web Development work can be seen on my personal portfolio at <a href='https://jensmith.info/' title='Jen Smith Portfolio'>jensmith.info</a>
            </p>
            </Segment>
            </Container>
        )
        }
    }

    export default About;
