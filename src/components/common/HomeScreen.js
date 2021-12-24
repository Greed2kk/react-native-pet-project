import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

const HomeScreen = ({ route: { params }, navigation: { navigate } }) => {
  return (
    <View style={styles.view}>
      <DefaultText>фывфыв</DefaultText>
      <DefaultText>{params ? params.text : 'Go to details, bruh!'}</DefaultText>
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
