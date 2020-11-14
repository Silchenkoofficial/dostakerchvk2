import React, {useState} from 'react';

import {
  Epic,
  Tabbar,
  TabbarItem,
  View,
  Panel,
  PanelHeader
} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";
import { NewOrderIcon, OrdersIcon, SearchIcon } from './icons';
import { MyOrders, NewOrder, Orders } from './pages';

import './pages/pages.css';

function App() {

  const [activeStory, setActiveStory] = useState('orders');

  const onStoryChange = e => {
    setActiveStory(e.currentTarget.dataset.story)
  }

  return (
    <div className="App">
      <Epic
      activeStory={activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={e => onStoryChange(e)}
              selected={activeStory === "orders"}
              data-story="orders"
              text="Найти заказ"
            ><SearchIcon active={activeStory === 'orders' ? true : false} /></TabbarItem>
            <TabbarItem
              onClick={e => onStoryChange(e)}
              selected={activeStory === "myOrders"}
              data-story="myOrders"
              text="Мои заказы"
            ><OrdersIcon active={activeStory === 'myOrders' ? true : false} /></TabbarItem>
            <TabbarItem
              onClick={e => onStoryChange(e)}
              selected={activeStory === "newOrder"}
              data-story="newOrder"
              text="Новый заказ"
            ><NewOrderIcon active={activeStory === 'newOrder' ? true : false} /></TabbarItem>
          </Tabbar>
        }
      >

        <View id="orders" activePanel="orders">
          <Panel id="orders">
            <Orders />
          </Panel>
        </View>
        <View id="myOrders" activePanel="myOrders">
          <Panel id="myOrders">
            <MyOrders />
          </Panel>
        </View>
        <View id="newOrder" activePanel="newOrder">
          <Panel id="newOrder">
            <PanelHeader>Новый заказ</PanelHeader>
            <NewOrder />
          </Panel>
        </View>

      </Epic>
    </div>
  
  );
}

export default App;
