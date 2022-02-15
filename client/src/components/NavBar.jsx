import { Link } from 'react-router-dom'
import { useContext } from "react";

import { UserContext } from '../context/UserContext';

import Logout from '../pages/Authentication/Logout'
import './NavBar.css'

export default function NavBar() {

    const { id } = useContext(UserContext)
    const [userId, setUserId] = id

    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <Link to='/'> Schedule-Manager </Link>
            </div>
            <div className='login'>
                {userId ? <Logout/> : <Link to='/login'> Login </Link>}
            </div>
        </nav>
    )
}