import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
              <div className="profileScreen__info">
                  <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Avatar"
                  />
                  <div className="profileScreen__details">
                      <h2>{user.email}</h2>
                      <div className="profileScreen__palns">
                        <h3>Plans</h3>
                        
                          <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ProfileScreen;