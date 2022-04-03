import AsyncStorage from '@react-native-async-storage/async-storage'

export const setKeys = async (key, value, callBack = null) => {
  try {
    await AsyncStorage.setItem(key, value, () => {
      if (callBack) {
        callBack()
      }
    });
  } catch (error) {
    console.error(error)
  }
}

export const getKeys = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    const data = jsonValue != null ? JSON.parse(jsonValue) : null
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const removeKeys = async key => {
  return await AsyncStorage.removeItem(key)
}
