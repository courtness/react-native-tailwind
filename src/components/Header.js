import React from "react";
import { Text, View } from "react-native";
import { tw } from "react-native-tailwindcss";

const Header = () => {
  return (
    <View
      style={[
        tw.absolute,
        tw.mT12,
        tw.flex,
        tw.flexRow,
        tw.justifyBetween,
        tw.wFull
      ]}
    >
      <Text style={[tw.mX4]}>Heading</Text>
    </View>
  );
};

export default Header;
