import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import Header from './Header';
import ChatList from './ChatList';
import Status from './Status';
import Calls from './Calls';

const Tab = createMaterialTopTabNavigator();

const TabRoutes = (): JSX.Element => {
  return (
    <>
      <View>
        <Header />
      </View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#04A784',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: 0,
          },
          tabBarLabelStyle: {
            color: '#fff',
            padding: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff',
          },
        })}>
        <Tab.Screen name="Chats" component={ChatList} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </>
  );
};

export default TabRoutes;
