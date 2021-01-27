import React from 'react';
import './UserCart.css';

const UserCart = (props) => {
    const users = props.selectedUser;
    const totalSalary = users.reduce( ((total, user) => total + user.salary), 0);
    // console.log(user);

    return (
        <div className="user-cart-style">
            <h1>User Details</h1>
            <hr/>
            <h3>Total Selected User {users.length}</h3>
            <h3>Total User Salary : {totalSalary}</h3>
            <hr/>
            <h1>User List</h1>
            <hr/>
            <div>
                {
                    users.map((user => 
                        <div key={user.id} className="cart-image"> 
                            <img src={user.image} alt=""/>
                            <p>{user.first_name} {user.last_name}</p>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default UserCart;