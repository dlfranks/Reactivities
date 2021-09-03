import React, {useEffect, useState} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';

import './App.css';
interface IActivity {

}
const App  = () => {
  
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/Values").then(response => {
      setActivities(response.data);
    
    }).catch();

  }, []);
  
    return (
      <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          
        </List>
        <ul>
            {activities.values.map((value:any) =>{
              <li key={value.id}>{value.name}</li>
            })}
          </ul>
      </div>
    );
  
    

    
  
  
}

export default App;
