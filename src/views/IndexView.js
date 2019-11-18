/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { tw } from "react-native-tailwindcss";

import styles from "~scss/index.scss";

class IndexPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam(`headerTitle`, `Home`)
    };
  };

  //

  render() {
    return (
      <View
        style={[
          tw.flex,
          tw.flexCol,
          tw.wFull,
          tw.hFull,
          tw.justifyCenter,
          tw.itemsCenter
        ]}
      >
        <View
          style={[
            tw.flex,
            tw.justifyCenter,
            tw.itemsCenter,
            tw.m12,
            { height: 300, width: 300 }
          ]}
        >
          <Text style={[tw.absolute, tw.leadingNone, styles.f1]}>
            React Native // Tailwind
          </Text>
        </View>
      </View>
    );
  }
}

export default IndexPage;
