import React, {useState} from 'react';
import { Alert, Avatar, Epic, Panel, PanelHeader, PanelHeaderButton, PullToRefresh, View } from '@vkontakte/vkui';
import DB from './../../db.json';

import OrderInfo from '../OrderInfo/OrderInfo';
import OrdersNavigation from './OrdersNavigation';
import { Active, Available, Completed } from './subpages';
import { ProfileIcon } from '../../icons';

function Orders() {
    const [activeView, setActiveView] = useState('available');
    const [activePanel, setActivePanel] = useState('available');

    const [fetching, setFetching] = useState(false);
    
    const [data, setData] = useState(DB);
    
    const [openAlert, setOpenAlert] = useState(null);
    
    const [activeOrderInfo, setActiveOrderInfo] = useState({});

    const onChangeView = story => {
        setActiveView(story);
    }

    const onRefresh = () => {
        setFetching(true);
        setTimeout(() => {
            setFetching(false);
            setData(DB);
        }, 1000);
    }

    const alert = () => {
        setOpenAlert(
            <Alert
                actions={[{
                title: 'Окей',
                autoclose: true,
                mode: 'cancel'
                }]}
                onClose={() => closePopout()}
            >
                <h2>Профиль</h2>
                <p>Страницы "Профиль" пока нет, но скоро будет:)</p>
            </Alert>
        );
    };

    const closePopout = () => setOpenAlert(null);
    
    const onActiveItem = (item) => {
        setActiveOrderInfo(item);
    }

    return (
        <div className="orders">
            <Epic activeStory={activeView}>
                <View id='available' activePanel={activePanel} popout={openAlert}>
                    <Panel id="available">
                        <PanelHeader
                            left={
                                <PanelHeaderButton onClick={() => alert()}>
                                    <Avatar shadow={false} style={{backgroundColor: '#fff'}}>
                                        <ProfileIcon />
                                    </Avatar>
                                </PanelHeaderButton>
                            }
                        >Доступные</PanelHeader>
                        <OrdersNavigation onChange={onChangeView} activeLink={activeView} />
                        <div style={{marginTop: 42}}></div>
                        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
                            <Available data={data} onClick={onActiveItem} openOrderInfo={() => setActiveView('order-info')} />
                        </PullToRefresh>
                    </Panel>
                </View>
                <View id='active' activePanel='active' popout={openAlert}>
                    <Panel id="active">
                        <PanelHeader left={
                                <PanelHeaderButton onClick={() => alert()}>
                                    <Avatar shadow={false} style={{backgroundColor: '#fff'}}>
                                        <ProfileIcon />
                                    </Avatar>
                                </PanelHeaderButton>
                            } >Активные</PanelHeader>
                        <OrdersNavigation onChange={onChangeView} activeLink={activeView} />
                        <div style={{marginTop: 42}}></div>
                        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
                            <Active data={data} onClick={onActiveItem} openOrderInfo={() => setActiveView('order-info')} />
                        </PullToRefresh>
                    </Panel>
                </View>
                <View id='completed' activePanel='completed' popout={openAlert}>
                    <Panel id="completed">
                        <PanelHeader left={
                                <PanelHeaderButton onClick={() => alert()}>
                                    <Avatar shadow={false} style={{backgroundColor: '#fff'}}>
                                        <ProfileIcon />
                                    </Avatar>
                                </PanelHeaderButton>
                            } >Завершенные</PanelHeader>
                        <OrdersNavigation onChange={onChangeView} activeLink={activeView} />
                        <div style={{marginTop: 42}}></div>
                        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
                            <Completed />
                        </PullToRefresh>
                    </Panel>
                </View>
                <View id="order-info" activePanel="order-info">
                    <Panel id="order-info">
                        <PanelHeader
                            left={
                                <PanelHeaderButton onClick={() => setActiveView('available')} >Назад</PanelHeaderButton>
                            }
                        >
                            Заказ №{activeOrderInfo.id}
                        </PanelHeader>
                        <OrderInfo order={activeOrderInfo} />
                    </Panel>
                </View>
            </Epic>
        </div>
    )
}

export default Orders;