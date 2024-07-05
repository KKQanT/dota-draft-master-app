import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
