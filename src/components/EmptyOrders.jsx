import React from 'react';

function EmptyOrders({title}) {
    return (
        <div className="orders__empty">
            <h1>{title} заказов нет</h1>
        </div>
    )
}

export default EmptyOrders;
