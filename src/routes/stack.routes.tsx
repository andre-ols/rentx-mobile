import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '../Screens/CarDetails';
import { Home } from '../Screens/Home';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { Success } from '../Screens/Success';

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Success" component={Success} />
    </Navigator>
  );
};
