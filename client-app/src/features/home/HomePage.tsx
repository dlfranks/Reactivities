import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Segment, Header, Button } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment invert textAlign='center' vertical className='masthead'>
            <Container style={{ marginTop: '7em' }}>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the Activities!
                </Button>
        </Container>
        </Segment>
        
    )
}


