import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { readMultiGet, saveMultiData } from '../../data/rating';
import { DISABLE_RATING, RATING_KEY } from '../../data/storageKeys';
import DefaultText from './DefaultText';

const RatingScreen = () => {
  const [disabled, setDisabled] = useState(false);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    readMultiGet([RATING_KEY, DISABLE_RATING], [setRating, setDisabled]);
  }, []);

  return (
    <View style={styles.view}>
      <AirbnbRating
        defaultRating={rating}
        isDisabled={disabled}
        onFinishRating={stars => {
          setRating(stars);
          setDisabled(!disabled);
          saveMultiData([
            [RATING_KEY, JSON.stringify(stars)],
            [DISABLE_RATING, JSON.stringify(!disabled)],
          ]);
        }}
        showRating
      />

      <DefaultText style={styles.title}>
        {disabled && 'Thank you for vote!'}
      </DefaultText>
      <Button
        title="clear rating"
        onPress={() => {
          setRating(0);
          setDisabled(false);
          saveMultiData([
            [RATING_KEY, JSON.stringify(0)],
            [DISABLE_RATING, JSON.stringify(false)],
          ]);
        }}
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
  title: {
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default RatingScreen;
