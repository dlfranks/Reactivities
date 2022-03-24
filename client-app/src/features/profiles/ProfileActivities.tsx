import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Header, Segment, Tab } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';

import { useStore } from '../../app/stores/store';
import ProfileActivitySection from './ProfileActivitySection';


export default observer(function ProfileActivities() {
    const { profileStore:{loadUserActivities, setEventTab, eventTab, loadingUserActivities} } = useStore();
    
    const panes = [
        {menuItem: 'Future Events', render: () => <ProfileActivitySection />},
        {menuItem: 'Past Events', render: () => <ProfileActivitySection />},
        {menuItem: 'Hosting', render: () => <ProfileActivitySection />},
        
        ];
    
    
    

    return (
        <Segment>
            <Header> Activities</Header>
            <Tab
                panes={panes}
                onTabChange={(e, data) => setEventTab(data.activeIndex)}
                menu={{ pointing: true, secondary:true}}
            >
            </Tab>
        </Segment>
        
        
        
    )

})