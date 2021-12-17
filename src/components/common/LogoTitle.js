import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image style={style.image} source={require('../../images/moon.png')} />
  );
};

const style = StyleSheet.create({
  image: {
    width: 24,
    height: 23,
  },
});

export default Logo;
