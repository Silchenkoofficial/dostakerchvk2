import { Alert, PanelHeader } from '@vkontakte/vkui';
import React from 'react';
import {OrderCard, EmptyOrders} from '../../../components';

function Available({data, onClick, openOrderInfo}) {
    return (
        <React.Fragment>
            <div className="orders__main">
                {
                    data.orders.length === 0 
                        ? <EmptyOrders title="Доступных" />
                        : data.orders.map((item) => !item.isBooked
                            && <OrderCard key={item.id} data={item} onClick={() => {
                                onClick(item);
                                openOrderInfo();
                            }} />)
                }
            </div>
        </React.Fragment>
    )
}

export default Available;
