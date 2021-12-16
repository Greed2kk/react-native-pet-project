import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation: {goBack}}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Try editing me2</Text>
      <Button title="click2" onPress={goBack} />
    </View>
  );
};

export default HomeScreen;
