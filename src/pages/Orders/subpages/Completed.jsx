// import { PanelHeader } from '@vkontakte/vkui';
import React from 'react';
import { EmptyOrders } from '../../../components';

function Completed({data}) {
    return (
        <React.Fragment>
            <div className="orders__main">
                {
                    !data && <EmptyOrders title="Завершенных" />
                }
            </div>
        </React.Fragment>
    )
}

export default Completed;
