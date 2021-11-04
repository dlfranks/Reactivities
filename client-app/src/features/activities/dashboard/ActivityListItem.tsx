import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Activity } from './../../../app/models/Activity';
import { format } from 'date-fns';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    
   
    // function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    //     setTarget(e.currentTarget.name);
    //     deleteActivity(id);
    // }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Holding by Bob </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyy h:mm aa')}  
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}