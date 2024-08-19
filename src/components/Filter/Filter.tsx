import React, { useState } from 'react';
import { Card } from 'antd';
import './Filter.css';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export const Filter: React.FC = () => {
  const [checkedList, setCheckedList] = useState({
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  });

  const handleChangeAll = (e: CheckboxChangeEvent) => {
    setCheckedList({
      all: e.target.checked,
      noTransfer: e.target.checked,
      oneTransfer: e.target.checked,
      twoTransfers: e.target.checked,
      threeTransfers: e.target.checked,
    });
  };

  const handleCheckbox = (e: CheckboxChangeEvent, key: string) => {
    const updatedCheckedList = {
      ...checkedList,
      [key]: e.target.checked,
    };
    setCheckedList({
      ...updatedCheckedList,
      all:
        updatedCheckedList.noTransfer &&
        updatedCheckedList.oneTransfer &&
        updatedCheckedList.twoTransfers &&
        updatedCheckedList.threeTransfers,
    });
  };

  return (
    <Card className="filterCard">
      <p>Количество пересадок</p>
      <div className="checkboxes">
        <Checkbox onChange={handleChangeAll} checked={checkedList.all}>
          Все
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            handleCheckbox(e, 'noTransfer');
          }}
          checked={checkedList.noTransfer}
        >
          Без пересалок
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            handleCheckbox(e, 'oneTransfer');
          }}
          checked={checkedList.oneTransfer}
        >
          1 пересадка
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            handleCheckbox(e, 'twoTransfers');
          }}
          checked={checkedList.twoTransfers}
        >
          2 пересадки
        </Checkbox>
        <Checkbox
          onChange={(e) => {
            handleCheckbox(e, 'threeTransfers');
          }}
          checked={checkedList.threeTransfers}
        >
          3 пересадки
        </Checkbox>
      </div>
    </Card>
  );
};
