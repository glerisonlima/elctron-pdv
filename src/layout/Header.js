import React from 'react';
import './header.css'
import avatar from  './images/avatar.jpg'

export default function Header() {  
    
  return (
    <nav className="navbar">
        <label className="title">LOGO</label>
        <img className="avatar" src={avatar} />        
    </nav>
);
}
