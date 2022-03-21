import { observer } from 'mobx-react-lite';
import React, { ChangeEvent,  useState } from 'react';
import { Button, Form, Grid, Header, Tab} from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';

interface Props{
    profile: Profile;
}
export default observer(function ProfileAbout({ profile }: Props) {
    const { profileStore: { isCurrentUser, updateProfile, loading, setProfile } } = useStore();
    const [editMode, setEditMode] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]:value });
        
    }

    const handleFormSubmit = () => {
        updateProfile(profile).then(() => {
            setEditMode(false);
        });
    }

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header icon='image' content={profile.displayName} />
                    {
                        isCurrentUser && (
                            <Button floated='right' basic
                                content={editMode ? 'Cancel' : 'Edit'}
                                onClick={() => setEditMode(!editMode)}
                            />
                        )
                    }
                   
                </Grid.Column>
                <Grid.Column width={16}>
                    {
                        isCurrentUser && editMode ? (
                            <Form className='ui form' onSubmit={handleFormSubmit}>
                                <Form.Field>
                                    <label>Display Name:</label>
                                    <Form.Input name='displayName' value={ profile.displayName} type='text' onChange={handleChange}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Bio:</label>
                                    <Form.TextArea rows={5} name='bio' value={profile.bio} type='text' onChange={handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Button
                                        floated='right'
                                        type='submit'
                                        content='Update Profile'
                                        loading={loading}
                                        positive
                                        disabled={loading}
                                    />
                                </Form.Field>
                                
                                
                                
                            </Form>       
                        ) : (
                            <p style={{wordWrap:'break-word'}}>
                                {profile.bio}
                            </p>  
                        )
                    }
                    
                    

                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )

})