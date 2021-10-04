import { observer } from 'mobx-react-lite';
import { Header} from 'semantic-ui-react';
import ActivityListItem from './ActivityListItem';
import { useStore } from '../../../app/stores/store';
import { Fragment } from 'react';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const {groupActivities} = activityStore;
    
    return (
        <>
            {groupActivities.map(([group, activities]) => {
                return (<Fragment key={group}>
                    <Header sub color='teal' >
                        {group}
                    </Header>
                    {activities.map(activity =>
                        <ActivityListItem key={activity.id } activity={ activity}/>
                    )}
                </Fragment>)

            })}
        </>
        
    )
})
