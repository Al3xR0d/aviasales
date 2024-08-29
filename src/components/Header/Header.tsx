import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo.png';

export const Header: React.FC = () => (
  <>
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
    </div>
  </>
);
