import React from 'react';
import { Card } from 'antd';
import './Filter.css';
import { Checkbox } from 'antd';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { filterTickets } from '../../store/reducers/ActionCreators';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);
  const handleChange = (key: string) => {
    dispatch(filterTickets(key));
  };

  return (
    <Card className="filterCard">
      <p>Количество пересадок</p>
      <div className="checkboxes">
        {Object.entries(filters).map(([key, value]) => (
          <Checkbox onChange={() => handleChange(key)} checked={value.isChecked} key={key}>
            {value.label}
          </Checkbox>
        ))}
      </div>
    </Card>
  );
};
