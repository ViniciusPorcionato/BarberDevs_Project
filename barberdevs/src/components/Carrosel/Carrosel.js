import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {
    height: 130,
  },
  slide1: {
    alignSelf: "center",
    width: 300,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "trasparent",
    borderRadius: 15,
    overflow:"hidden"
  },
  slide2: {
    width: 300,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "trasparent",
    borderRadius: 15,
    overflow:"hidden"
  },
  slide3: {
    width: 300,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "trasparent",
    borderRadius: 15,
    overflow:"hidden"
  },
  slide4: {
    width: 300,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "trasparent",
    borderRadius: 15,
    overflow:"hidden"
  },
  imgFoto:{
    width: "100%",
    height: "100%",
    
  }
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false} 
        activeDotColor={"white"}
        dotColor="black"
      >
        <View style={styles.slide1}>
          <Image style={styles.imgFoto} source={{uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLXAriW0xpBYWZwIwmyWpfZ6KzPIYroN-97bACw-Tb9nbxG0U2"}} />
        </View>
        <View style={styles.slide2}>
          <Image style={styles.imgFoto} source={{uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRj67eR5PlZy3AlMA6UR9Zc3sBaku8WQPvMGM-DI7i_KtdHpeiY"}} />
        </View>
        <View style={styles.slide3}>
          <Image style={styles.imgFoto} source={{uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdih0EMIjXsP7OypDKRDJPeBjlGkr1qmIqdxRXeTSQyGeQBShk"}} />
        </View>
        <View style={styles.slide4}>
          <Image style={styles.imgFoto} source={{uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjGVe1ZPGEg4GhhQSq6vBGDJOWkTBKasB3XLL1CAmEU7RMsHZt"}} />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
