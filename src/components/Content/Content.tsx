import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { TabKeys } from '../../types/types';
import './Content.css';
import { TicketList } from '../TicketList/TicketList';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { useEffect } from 'react';
import { fectchTickets } from '../../store/reducers/ActionCreators';
import { Filter } from '../Filter/Filter';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, Button } from 'antd';
import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { selectFilteredTickets } from '../../store/selectors';
import { getNewFiveTickets, getSortType } from '../../store/reducers/TicketsSlice';

const items: TabsProps['items'] = [
  {
    key: TabKeys.cheapest,
    label: 'САМЫЙ ДЕШЕВЫЙ',
  },
  {
    key: TabKeys.fastest,
    label: 'САМЫЙ БЫСТРЫЙ',
  },
  {
    key: TabKeys.optimal,
    label: 'ОПТИМАЛЬНЫЙ',
  },
];

export const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, visibleTickets } = useAppSelector((state) => state.ticketReducer);
  const filteredTickets = useSelector(selectFilteredTickets);
  useEffect(() => {
    dispatch(fectchTickets());
  }, []);

  const onChange = (key: string) => {
    dispatch(getSortType(key));
  };

  return (
    <div className="content">
      <div className="filter">
        <Filter />
      </div>
      <div className="content__buttonsAndTickets">
        <div className="buttons">
          <Tabs centered defaultActiveKey={TabKeys.cheapest} className="button" items={items} onChange={onChange} />
        </div>
        {isLoading && (
          <>
            <Flex className="spin" align="center" gap="middle">
              <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
            </Flex>
          </>
        )}
        {error && <Alert message="Error" className="alert" description={error} type="error" showIcon />}
        {filteredTickets.length === 0 && !isLoading && !error ? (
          <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" className="alert" type="info" showIcon />
        ) : (
          <>
            <TicketList tickets={filteredTickets.slice(0, visibleTickets)} />
            <Flex gap="small" wrap>
              {!isLoading && !error ? (
                <Button
                  className="ticketsButton"
                  type="primary"
                  disabled={filteredTickets.length <= visibleTickets}
                  onClick={() => dispatch(getNewFiveTickets())}
                >
                  ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
                </Button>
              ) : (
                ''
              )}
            </Flex>
          </>
        )}
      </div>
    </div>
  );
};
