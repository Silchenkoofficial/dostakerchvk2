import { PanelHeader } from '@vkontakte/vkui';
import Axios from 'axios';
import React from 'react';
import { EmptyOrders, OrderCard } from '../../../components';

function Active({data, onClick, openOrderInfo}) {

    console.log(data);
    return (
        <React.Fragment>
            <div className="orders__main">
                {
                    !data ? <EmptyOrders title="Активных" />
                    : data.couriers[0].activeOrders.map(item => <OrderCard data={item} onClick={() => {
                        onClick(item);
                        openOrderInfo();
                    }} />)
                }
            </div>
        </React.Fragment>
    )
}

export default Active;
