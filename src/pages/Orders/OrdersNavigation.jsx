import React from 'react';
import cx from 'classnames';
import { FixedLayout, HorizontalScroll, Tabs, TabsItem } from '@vkontakte/vkui';

function OrdersNavigation({onChange, activeLink}) {
    return (
        <React.Fragment>
            <FixedLayout style={{width: '100%'}}>
                <HorizontalScroll>
                    <ul className="orders__nav">
                        <div style={{flex: '0 0 33%'}}>
                            <li className={cx('orders__nav--link', {
                            active: activeLink === 'available'
                        })} onClick={() => onChange('available')}>Доступные</li>
                        </div>
                        <div style={{flex: '0 0 33%'}}>
                            <li className={cx('orders__nav--link', {
                            active: activeLink === 'active'
                        })} onClick={() => onChange('active')}>Активные</li>
                        </div>
                        <div style={{flex: '0 0 33%'}}>
                            <li className={cx('orders__nav--link', {
                            active: activeLink === 'completed'
                        })} onClick={() => onChange('completed')}>Завершенные</li>
                        </div>
                    </ul>
                </HorizontalScroll>
            </FixedLayout>
        </React.Fragment>
    )
}

export default OrdersNavigation;