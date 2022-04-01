import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen, Group } = createStackNavigator();

import { Home } from '../pages/Home';
import { Achievements } from '../pages/Achievements';
import { Activity } from '../pages/Activity';
import { TabRoutes } from './tab.routes';


import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { FinishSignUp } from '../pages/FinishSignUp';





export function AppRoutes() {

    const user = null;


    return (
        <Navigator screenOptions={{ headerShown: false, }}>

            {
                user != null ?
                    <Group>
                        <Screen name='Home' component={TabRoutes} />
                        <Screen name='Activity' component={Activity} />
                        <Screen name='Achievements' component={Achievements} />
                    </Group>
                    :
                    <Group>
                        <Screen name='SignIn' component={SignIn} />
                        <Screen name='SignUp' component={SignUp} />
                        <Screen name='FinishSignUp' component={FinishSignUp} />
                    </Group>
            }
        </Navigator>
    )
}