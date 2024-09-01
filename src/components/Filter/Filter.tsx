import React from 'react';
import { Card } from 'antd';
import styles from './Filter.module.css';
import '../../index.css';
import { Checkbox } from 'antd';
import { useAppSelector, useAppDispatch } from '../../store/hooks/redux';
import { filterTickets } from '../../store/ActionCreators';
import { filtersMap } from '../../constans/constans';
import { Filter } from '../../types/types';

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);
  const handleChange = (key: string) => {
    dispatch(filterTickets(key));
  };

  return (
    <Card className={styles.filterCard}>
      <p>Количество пересадок</p>
      <div className={styles.checkboxes}>
        {Object.entries(Object.fromEntries(filtersMap)).map(([key, value]) => {
          const currentKey = Filter[key as keyof typeof Filter];
          return (
            <Checkbox onChange={() => handleChange(key)} checked={filters[currentKey]} key={key}>
              {value.label}
            </Checkbox>
          );
        })}
      </div>
    </Card>
  );
};
