import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '../Screens/CarDetails';
import { Home } from '../Screens/Home';
import { MyCars } from '../Screens/MyCars';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { Splash } from '../Screens/Splash';
import { Success } from '../Screens/Success';

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Success" component={Success} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};
