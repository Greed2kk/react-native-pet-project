import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/common/HomeScreen';
import DetailsScreen from '../components/common/DetailsScreen';
import Logo from '../components/common/LogoTitle';
import { Button } from 'react-native';
import RatingScreen from '../components/common/RatingScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={({
            route: {
              params: { title },
            },
          }) => ({
            title,
            headerTitle: props => <Logo {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
                a
              />
            ),
          })}
        />
        <Stack.Screen name="RatingScreen" component={RatingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
