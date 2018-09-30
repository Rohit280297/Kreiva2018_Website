import React from 'react'
import './Menu.css';
import Cross from '../../assets/images/close.svg';
const Menu = (props) => {
  return (
    <div className="container-fluid">
        <div className="Menu">
            <img onClick={props.close} id="Close" src={Cross} alt="Cross"/>
            <ul className="Menu_List">
                <li className="List_Items">Events</li>
                <li className="List_Items">Sponsors</li>
                <li className="List_Items">Schedule</li>
                <li className="List_Items">Brochure</li>
                <li className="List_Items">Connect</li>
                <li className="List_Items">Register/Login</li>
            </ul>       
        </div>
    </div>
  )
}

export default Menu;
