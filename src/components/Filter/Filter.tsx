import React from 'react';
import { Card } from 'antd';
import './Filter.css';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export const Filter: React.FC = () => (
  <Card className="filterCard">
    <p>Количество пересадок</p>
    <div className="checkboxs">
      <Checkbox onChange={onChange}>Все</Checkbox>
      <Checkbox onChange={onChange}>Без пересалок</Checkbox>
      <Checkbox onChange={onChange}>1 пересадка</Checkbox>
      <Checkbox onChange={onChange}>2 пересадки</Checkbox>
      <Checkbox onChange={onChange}>3 пересадки</Checkbox>
    </div>
  </Card>
);
