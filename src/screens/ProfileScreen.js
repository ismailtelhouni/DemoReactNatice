import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Divider } from "react-native-elements";
import logo from "../../assets/default-avatar.png" ; 
import OptionComponent from "../components/OptionComponent";

const ProfileScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.avatar_container}>
          <View style={styles.avatar_bubble}>
            <Image
              style={styles.avatar}
              resizeMode="contain"
              source={logo}
            />
          </View>
        </View>
        <Text
          style={{
            textAlign: "left",
            marginBottom: 10,
            marginTop: 5,
            fontSize: 18,
          }}
        >
          نادي المبادرة الوطنية للتنمية البشرية
        </Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.bottom}>
        <View style={styles.row}>
          <OptionComponent
            title="عن دار الخير"
            action={() => navigation.navigate("AboutDarlkhirScreen")}
            iconName="home"
          />
          <OptionComponent
            iconName="database"
            title="سياسة الخصوصية"
            action={() => navigation.navigate("PrivacyPolicyScreen")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // TOP
  top: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },

  // -- Avatar --
  avatar_container: {
    backgroundColor: "white",
  },
  avatar_bubble: {
    width: "30%",
    borderColor: "#1F6F7877",
    backgroundColor: "#D5E6FB",
    borderWidth: 2,
    borderRadius: 300,
    aspectRatio: 1,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  // MIDDLE
  middle: {
    flex: 1,
    paddingHorizontal: "7%",
    justifyContent: "space-evenly",
  },

  // BOTTOM
  bottom: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  section_title: {
    color: "#7B8794",

    fontSize: 12,
    alignSelf: "flex-end",
  },
});

export default ProfileScreen;
