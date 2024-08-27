import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png';

export const Header: React.FC = () => (
  <>
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
    </div>
  </>
);
