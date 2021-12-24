import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';
import { Button as EButton } from 'react-native-elements';

import DefaultText from './DefaultText';

const HomeScreen = ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.view}>
      <DefaultText>Welcome!🎉</DefaultText>
      <Button title={title} onPress={() => navigation.popToTop()} />
      <TextInput
        multiline
        placeholder="enter message on Home screen"
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="send"
        onPress={() => navigation.navigate('Home', { text })}
      />
      <DefaultText style={styles.title}>Update title!</DefaultText>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
      <EButton
        title="Add rating"
        onPress={() => navigation.navigate('RatingScreen')}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
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
  textInput: {
    height: 50,
    width: 200,
    marginTop: 100,
    padding: 10,
    backgroundColor: 'white',
    color: '#000000',
  },
  title: {
    marginTop: 30,
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
