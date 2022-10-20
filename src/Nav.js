import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => { 
      if(window.scrollY > 100) {
          handleShow(true);
      } else {
          handleShow(false);
      }
  }

  useEffect(() => { 
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
                onClick={() => history("/")}
                className='nav__logo' 
                alt='logo' 
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
            />
            <img 
                onClick={() => history("/profile")}
                className='nav__avatar' 
                alt='logo' 
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' 
            />
        </div>
    </div>
  )
}

export default Nav