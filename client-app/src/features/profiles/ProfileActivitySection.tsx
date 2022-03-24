import React, { useEffect } from 'react';
import { Card, Grid, Tab } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import ProfileActivityCard from './ProfileActivityCard';
import { UserActivity } from '../../app/models/userActivity';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../app/layout/LoadingComponent';

export default observer(function ProfileActivitySection() {
    const { profileStore: { userActivities, loadUserActivities, loadingUserActivities, setEventTab, eventTab } } = useStore();

    

    

    
    return (<Tab.Pane style={{minHeight: '300px'}}>
        
                    {
                        loadingUserActivities? (
                            <LoadingComponent content='Loading user activites.' />
                        ) :
                        (
                            <Grid>
                                <Grid.Column width={16}>
                                    <Card.Group itemsPerRow={4}>
                                        {
                                            userActivities.map((userActivity: UserActivity) =>
                                            <ProfileActivityCard key={userActivity.id} userActivity={userActivity} />)
                                        }
                                        
                                    </Card.Group>
                
                                </Grid.Column>
                            </Grid>
                        )
                        
                    }
                    
                    
                
        
    </Tab.Pane>)
})