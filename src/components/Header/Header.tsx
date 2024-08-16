import React from 'react';
import { Button, Flex } from 'antd';
import './Header.css';
import logo from '../../images/Logo.png';

export const Header: React.FC = () => (
  <>
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <Flex gap="small" className="buttons" wrap>
        <Button type="primary" className="button">
          Самый дешевый
        </Button>
        <Button className="button">Самый быстрый</Button>
        <Button className="button">Оптимальный</Button>
      </Flex>
    </div>
  </>
);
