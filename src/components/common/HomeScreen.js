import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Try editing me! 🎉</Text>
      <Button title="click" onPress={() => navigate('Home2')} />
    </View>
  );
};

export default HomeScreen;
