import React from 'react';
import home from '../images/home.PNG';
import list from '../images/list.PNG';
import chat from '../images/chat.PNG';
import profile from '../images/profile.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='options'>
                <FontAwesomeIcon className='h-icon' icon={faHome} size="3x" />
                <h3 className=''>Home</h3>
            </div>
            <div className='options'>
                <img alt='' src={profile} height='46.66px' width='auto' />
                <h3>Profile</h3>
            </div>
            <div className='options'>
                <img alt='' src={home} className='home' height='75px' width='auto' />
            </div>
            <div className='options'>
                <img alt='' src={list} height='46.66px' width='auto' />
                <h3>Follow List</h3>
            </div>
            <div className='options'>
                <img alt='' src={chat} height='46.66px' width='auto' />
                <h3>Chat</h3>
            </div>
        </div>
    );
}
 
export default Footer;