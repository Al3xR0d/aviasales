import React from 'react';
import { Card } from 'antd';
import styles from './Filter.module.css';
import '../../index.css';
import { Checkbox } from 'antd';
import { useAppSelector, useAppDispatch } from '../../store/hooks/redux';
import { filterTickets } from '../../store/ActionCreators';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);
  const handleChange = (key: string) => {
    dispatch(filterTickets(key));
  };

  return (
    <Card className={styles.filterCard}>
      <p>Количество пересадок</p>
      <div className={styles.checkboxes}>
        {Object.entries(filters).map(([key, value]) => (
          <Checkbox onChange={() => handleChange(key)} checked={value.isChecked} key={key}>
            {value.label}
          </Checkbox>
        ))}
      </div>
    </Card>
  );
};
