import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, rating) => {
  try {
    const jsonValue = JSON.stringify(rating);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    alert('Failed to save the data to the storage');
  }
};

export const readData = async (key, setRating) => {
  try {
    const userRating = await AsyncStorage.getItem(key);

    if (userRating !== null) {
      setRating(JSON.parse(userRating));
    }
    setRating(JSON.parse(userRating));
    return userRating != null ? JSON.parse(userRating) : null;
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

export const saveMultiData = async data => {
  // data = [['key', 'value'], ['key', 'value']]
  try {
    await AsyncStorage.multiSet(data);
  } catch (e) {
    alert('Failed to save the data to the storage');
  }
};

export const readMultiGet = async (keys, setters) => {
  // keys = ['key', 'key', key]; setter = [setter, setter, setter]
  try {
    const data = await AsyncStorage.multiGet(keys);

    setters?.forEach((setter, index) => {
      setter(JSON.parse(data[index][1]));
    });
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
};
