import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './containers/Home'
import Detail from './containers/Detail'
import Login from './containers/Login'
const homeStack = createStackNavigator ({
    Home,
    Detail
})

const appNavi = createSwitchNavigator({
    homeStack
})

export default createAppContainer(appNavi)

