import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import UserCart from '../UserCart/UserCart';
import UserDetails from '../UserDetails/UserDetails';
import './Users.css';

const Users = () => {
    // console.log(users);
    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect( () => {
        setUser(fakeData);
    }, []);

    const handleAddUser = (user) => {
        // console.log('Add user', user);
        const newUser = [...selectedUser, user]
        setSelectedUser(newUser);
    }

    return (
        <div className='user-details'>           
            <div className='user-details-style'>
                {
                    user.map(people => <UserDetails key={people.id} handleAddUser={handleAddUser} people={people}></UserDetails>)
                }
            </div>
            <div className='user-cart'>
                <UserCart selectedUser = {selectedUser}></UserCart>
            </div>
        </div>
    );
};

export default Users;