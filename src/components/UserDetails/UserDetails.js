import { faEnvelopeSquare, faFileInvoiceDollar, faFilm, faFlag, faMale, faPhoneVolume, faPlusCircle, faSortNumericUpAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './UserDetails.css';

const UserDetails = (props) => {
    const {email, country, age, fav_movie, first_name, last_name, gender, salary, phone, image} = props.people;
    // console.log(props)
    const handleAddUser = props.handleAddUser;
    return (
        <div className="user-description">
            <div className='left-side-style'>
                <p>
                    <FontAwesomeIcon icon={ faUser }></FontAwesomeIcon> &nbsp;
                    {first_name} {last_name}                  
                </p> 
                <p>                
                    Gender : <FontAwesomeIcon icon={ faMale }></FontAwesomeIcon> {gender}
                </p>
                <p> 
                    Age : <FontAwesomeIcon icon={ faSortNumericUpAlt }></FontAwesomeIcon> {age}
                </p>
                <p>                     
                    Country : <FontAwesomeIcon icon={ faFlag }></FontAwesomeIcon> {country}
                </p>
                <p>                     
                    Salary : <FontAwesomeIcon icon = { faFileInvoiceDollar }></FontAwesomeIcon> {salary} TK
                </p>
            </div>
            <div className='middle-side-style'>
                <img src={image} alt=""/>
            </div>
            <div className='right-side-style'>
                <p>                     
                    Email : <FontAwesomeIcon icon = { faEnvelopeSquare }></FontAwesomeIcon> {email}
                </p>
                <p>                     
                    Phone : <FontAwesomeIcon icon = { faPhoneVolume }></FontAwesomeIcon> {phone}
                </p>
                
                <p>                     
                    Favorite Movie  : <FontAwesomeIcon icon = { faFilm }></FontAwesomeIcon> {fav_movie}
                </p>
                <div className="user-button">
                    <FontAwesomeIcon icon={ faPlusCircle }></FontAwesomeIcon> &nbsp; &nbsp;
                    <button onClick={() => handleAddUser(props.people)} className='add-user-button'>Add User</button> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={ faUserPlus }></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;