import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeStackParamList } from './types'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'


const Stack = createNativeStackNavigator<NativeStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#0f8fff" },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
