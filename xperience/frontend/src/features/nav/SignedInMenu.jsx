import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { SIGN_OUT_USER } from '../authentication/authConstants';

export default function SignedInMenu() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const photo = localStorage.getItem("userPhoto");

    const dispatch = useDispatch();

    const history = useHistory();

    async function handleSignOut() {
        try{
            dispatch({ type: SIGN_OUT_USER});
            history.push('/');
            setUser(null);
        }
        catch(error){
            toast.error(error.message);
        }
    }

    return(
        <Menu.Item position='right'>
            <Image avatar spaced='right' src={ photo || user?.result?.photoURL || '/assets/user.png'} />
            <Dropdown pointing='top left' text={user?.result?.displayName || user?.result?.name} >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item as={Link} to={`/profile/${user?.result._id || user?.result?.googleId}`} text='My Profile' icon='user' />
                    <Dropdown.Item as={Link} to='/account' text='My Account' icon='settings' />
                    <Dropdown.Item 
                    onClick={handleSignOut}
                    text='Sign Out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}