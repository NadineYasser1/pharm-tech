import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/auth/LoginScreen';
import { Colors } from './constants/GlobalColors';
import CreateReturnRequestsScreen from './screens/requests/CreateReturnRequestScreen';
import ItemsScreen from './screens/requests/ItemsScreen';
import AddItemScreen from './screens/requests/AddItemScreen';
import ReturnRequestsScreen from './screens/requests/ReturnRequestsScreen';
import { useContext } from 'react';
import AuthContextProvider, { AuthContext } from './store/AuthContext';
import useLoading from './common/hooks/useLoading';
import LoadingSpinner from './common/components/LoadingSpinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setupInterceptor } from './common/config/axios';
import CustomHeader from './common/components/CustomHeader';


const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

const AuthenticatedStack = () => {
  return <Stack.Navigator
    initialRouteName='ReturnRequests'
    screenOptions={{
      headerTintColor: Colors.primary800,
      headerStyle: { backgroundColor: 'transparent' },
      headerBackTitleVisible: false

    }}
  >
    <Stack.Screen
      name='ReturnRequests'
      component={ReturnRequestsScreen}
      options={{
        header: ({ navigation }) => <CustomHeader navigation={navigation} />
      }} />
    <Stack.Screen
      name='CreateRequest'
      component={CreateReturnRequestsScreen}
      options={{
        title: 'Create New Request'
      }} />
    <Stack.Screen name='Items' component={ItemsScreen} />
    <Stack.Screen name='AddItem' component={AddItemScreen} />

  </Stack.Navigator>
}

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

const Root = () => {
  const { loading, setIsLoading } = useLoading()
  const authCtx = useContext(AuthContext)
  setupInterceptor(authCtx)
  const fetchToken = async () => {
    setIsLoading(true)
    const storedToken = await AsyncStorage.getItem('token')

    if (storedToken) {
      authCtx.authenticate(storedToken)
    }

    setIsLoading(false)

  }
  useEffect(() => {
    fetchToken()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return <Navigation />
}

export default function App() {

  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
