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
                I was looking for a change in the types of jobs I was getting when I started studying to be a Developer.
                I wanted to focus on interpreting anything that was tech or IT related as this was fast becoming my specialism.
                I was contacted out of the blue by one agency and proceeded to take on some work.
                A few weeks after accepting this work I was sent some terrible terms and conditions but agreed on the basis that I'd already 
                started working with a student, I liked them and the subject so I perserved.
                </p>
            <Icon name='sign language' color='olive' />
                <p>This often happens that as interpreters that we feel a loyalty to the client and carry on despite the agency.
                I had suspicions of fraud. I talked to the University - they didn't seem bothered. I raised it with DSA, was told the procedure
                to report but I effectively had little evidence. This agency was mostly just abusing the system, leaving students with no budget
                before the end of term and the Universities they worked with had a cough up else leave students stranded for the rest of the year.
                </p>
            <Icon name='pound sign' color='blue' />
                <p>I mostly got paid but always a bit late. Towards the end, the relationship went from bad to worse as I had to threaten legal 
                action on several occassions to get my last invoices paid. Basically after I started to refuse work from them. Along with this 
                was the verbal abuse and passive aggressive behaviour which was intolerable and unprfoessional.
                </p>
            <Icon name='thumbs down outline' color='olive' />
                <p>A few months later, I was at lunch with 10 interpreters and 1 Deaf person, I mentioned the agency and the air went blue. Everyone
                had gone through the same kind of experiences and the agency was reknown for a whole host of dodgy practices. Never quite being 
                able to be brought to account. I don't want these types of agencies to exist. Interpreters can ask about but there is not always 
                the time to find a colleague to ask. E-groups and forums are often not a safe space as they are littered with agencies or organisations
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
            <p>I'm working on an exciting project with two amazing colleagues. We are aiming to change the way the market operates.
                The system is abused and broken, controlled by the few and does not work any. 
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
