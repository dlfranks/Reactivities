import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserActivity } from '../../app/models/userActivity';
import { observer } from 'mobx-react-lite';
import { format, formatDistanceToNow } from 'date-fns';

interface Props {
    userActivity: UserActivity
}

export default function ProfileActivityCard({userActivity} : Props) {
    return (
        <Card as={Link} to={`/activities/${userActivity.id}`}>
            <Image src={`/assets/categoryImages/${userActivity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{userActivity.title }</Card.Header>
                <Card.Description><span>{ format(new Date(userActivity.date!), 'do MMM h:mm aa')}</span></Card.Description>
            </Card.Content>
        </Card>
    )
}