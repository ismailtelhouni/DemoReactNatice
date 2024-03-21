import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import AntDesignIcon from "@expo/vector-icons/AntDesign";

export default function OptionComponent(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.square}
      onPress={props.action}
    >
      <View style={styles.squareContent}>
        <View style={styles.logoContainer}>
          <AntDesignIcon size={26} name={props.iconName} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 120, // Set the width as per your requirement
    height: 120, // Set the height to match the width for a square
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  squareContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    paddingHorizontal: 22,
  },
  optionTitle: {
    fontWeight: "bold",
    color: "#323F4B",
    fontSize: 16,
    textAlign: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#1F6F78",
  },
  textContainer: {
    width: "100%",
  },
});
