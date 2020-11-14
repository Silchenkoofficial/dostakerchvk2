import { FixedLayout } from '@vkontakte/vkui';
import React from 'react';

function OrderInfo({order}) {
    return (
        <div className="order-info">
            <div className="order-info__header block">
                <div className="desclaimer">Внимательно прочитайте условия, перед тем, как брать заказ</div>
                <div className="takeBtn">Взять заказ</div>
            </div>
            <div className="order-info__detail block">
                <div className="label">Детали заказа</div>
                <div className="desc">
                    <div className="weight">До {order.weight} кг</div>
                    <div className="product">{order.product}</div>
                </div>
            </div>
            <div className="order-info__address address block">
                <div className="title">Откуда</div>
                <div className="address__block">
                    <div className="address__time">
                        <div className="label">Время</div>
                        <div className="time">Сегодня с <span>{order.address[0].timeFrom}</span> до <span>{order.address[0].timeTo}</span></div>
                    </div>
                    <div className="address__text">
                        <div className="label">Куда</div>
                        {order.address[0].text}
                    </div>
                    <div className="address__telephone">
                        <div className="label">Телефон</div>
                        <a href={`tel:${order.address[0].telephone}`}>{order.address[0].telephone}</a>
                    </div>
                </div>
            </div>
            <div className="order-info__address address block">
                <div className="title">Куда</div>
                <div className="address__block">
                    <div className="address__time">
                        <div className="label">Время</div>
                        <div className="time">Сегодня с <span>{order.address[1].timeFrom}</span> до <span>{order.address[1].timeTo}</span></div>
                    </div>
                    <div className="address__text">
                        <div className="label">Куда</div>
                        {order.address[1].text}
                    </div>
                    <div className="address__telephone">
                        <div className="label">Телефон</div>
                        <a href={`tel:${order.address[1].telephone}`}>{order.address[1].telephone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;
