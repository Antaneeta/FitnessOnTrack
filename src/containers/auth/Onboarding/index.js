import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import * as images from "../../../assets/image";
import { screens } from "../../../constants";

const OnboardScreen = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity style={styles.swipe}>
          <Image source={item.swip} />
        </TouchableOpacity>
      </View>
    );
  };
  const onDone = () => {
    props.navigation.navigate(screens.SIGN_IN);
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
  };
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      dotStyle={styles.dotStyle}
    />
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: "60%",
  },
  slide: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#1D1617",
    marginHorizontal: 30,
    marginVertical: 25,
    // fontWeight:'800',
  },
  text: {
    fontSize: 14,
    color: "#7B6F72",
    marginHorizontal: 30,
  },
  swipe: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 60,
    marginTop: 60,
  },
  dotStyle: {
    display: "none",
  },
});
const slides = [
  {
    key: "one",
    title: "Track Your Goal",
    text: "Don't worry about jumping from app to app to track your fitness goals. We give you the only app you will ever need to track your fitness goals.",
    image: images.onb1,
    backgroundColor: "#59b2ab",
    swip: images.swip1,
  },
  {
    key: "two",
    title: "Get Burn",
    text: "Let’s create your own workout plan specific to your style of training. Let the app worry about keeping track of your progress.",
    image: images.onb2,
    backgroundColor: "#febe29",
    swip: images.swip2,
  },
  {
    key: "three",
    title: "Eat Well",
    text: "Let's start a healthy lifestyle with us, you can track your diet every day. ",
    image: images.onb3,
    backgroundColor: "#22bcb5",
    swip: images.swip3,
  },
  {
    key: "four",
    title: "Free of Stress",
    text: "Remove the hassle of tracking your progress in and outside the GYM. ",
    image: images.onb4,
    backgroundColor: "#22bcb5",
    swip: images.swip4,
  },
];
