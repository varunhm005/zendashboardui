import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import UserImage from '../../../Images/user.png'


export default function TopBar() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const toggleLogout = () => {
        setIsLogoutOpen(!isLogoutOpen);
    };
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication token from local storage
        localStorage.removeItem('token');
        // Redirect the user to the login page
        navigate('/');
      };
    
    return (
        <nav className='headerContent justify-content-between align-items-center' style={{ display: pathname === '/' ? 'none' : 'flex' }} >
            <h1 className='headingClass' >Class</h1>
            <div className='headerContents' >
                <h5 className='mt-3 mr-3 userName' >Varun Harikumar</h5>
                <div class="flex-icons"><div class="d-flex align-items-center justify-content-center dropdown"><span data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="">
                    <img src={UserImage} alt="" class="profileIcon" width="60" onClick={toggleLogout}></img>
                </span><div tabindex="-1" role="menu" aria-hidden="true" class="dropdownMenu dropdown-menu"><button type="button" tabindex="0" role="menuitem" class="dropdownItem dropdown-item">Profile</button><button type="button" tabindex="0" role="menuitem" class="dropdownItem dropdown-item">Logout</button></div></div></div>
            </div>
            {isLogoutOpen && (
                <div className="logout-div">
                    {/* Content for logout */}
                    <button >Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </nav>
    )


}
