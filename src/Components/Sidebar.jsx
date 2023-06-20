import React from 'react'
import{NavLink} from 'react-router-dom'

const Sidebar = ()=> {        
        return (
            <div id="sidebar" className="sidebar">
                <ul className="menu">
                    <li className='welcome'><a href='#home'>WELCOME</a></li>
                    <br /><br />
                    <li><NavLink to="./">Home</NavLink></li>
                    <li><NavLink to="./cart">View Cart</NavLink ></li>
                    <li><NavLink to="./">Setting</NavLink ></li>
                    <li><NavLink to="./login">Login</NavLink ></li>
                    <li>
                    <NavLink to="./"><i className="fa fa-sign-out" style={{fontSize: '20px'}}>Log Out</i></NavLink>
                    </li>
                </ul>
            </div>
        )
    }

export default Sidebar
