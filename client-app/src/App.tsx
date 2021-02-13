import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state ={
    values:[]
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/Values").then(response => {
      this.setState({values: response.data});
    
    }).catch();
  }
  render(){
    return (
      <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          
        </List>
        <ul>
            {this.state.values.map((value:any) =>{
              <li key={value.id}>{value.name}</li>
            })}
          </ul>
      </div>
    );
  }
    

    
  
  
}

export default App;
