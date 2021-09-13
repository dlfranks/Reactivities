import React, {useEffect, useState} from 'react';
import { Container} from 'semantic-ui-react';
import axios from 'axios';

import {Activity} from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';

const App  = () => {
  
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  function handleSelectedActivity(id: string) {
    
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleSelectCancelActivity() {
    
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleSelectCancelActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    console.log(activities);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)]);
  }

  useEffect(() => {

    axios.get<Activity[]>("http://localhost:5000/api/Activities").then(response => {
      setActivities(response.data);
    
    }).catch();

  }, []);
  
    return (
      <>
        <NavBar openForm={ handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectedActivity}
            cancelSelectedActivity={handleSelectCancelActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditActivity}
            deleteActivity={handleDeleteActivity}
          />
        </Container>
        
      </>
    );
  
    

    
  
  
}

export default App;
