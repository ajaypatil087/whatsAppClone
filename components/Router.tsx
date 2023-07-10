import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './Home/TabRoutes';
import Inbox, {InboxHeaderLeft, InboxHeaderRight, InboxTitle} from './Inbox';

const Stack = createStackNavigator();

const Router = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={({route}) => ({
            headerTitle: () => <InboxTitle route={route} />,
            headerLeft: () => <InboxHeaderLeft />,
            headerRight: () => <InboxHeaderRight />,
            headerStyle: {
              backgroundColor: '#04A784',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
