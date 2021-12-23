import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({ route: { params }, navigation: { navigate } }) => {
  return (
    <View style={styles.view}>
      <Text>2222222</Text>
      <Text>{params ? params.text : 'Go to details, bruh!'}</Text>
      <Button
        title="click"
        onPress={() =>
          navigate('DetailsScreen', { title: 'button title from props' })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
