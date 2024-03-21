import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";

const AboutDarlkhirScreen = () => {

  const windowHeight = Dimensions.get("window").height;
  const TabBarHeight = 65;
  const headerHeight = 56;
  const statusBarHeight = StatusBar.currentHeight;
  const minHeight =
    windowHeight - (TabBarHeight + statusBarHeight + headerHeight);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        backgroundColor: "white",
        minHeight: minHeight,
      }}
    >
      {/* <StatusBar barStyle="light-content" backgroundColor="#1F6F77" /> */}
      <ImageBackground
        source={require("../../assets/darlkhir.png")}
        resizeMode="contain"
      >
        <Text style={styles.textHidden}>
          نحب فعل الخير ونظن أنكم كذلك. من هنا نبعت فكرة دار الخير .دار الخير
          تطبيق إلكتروني، يلبي نداء فعاليات المجتمع المدني في أن تعزز فرقها
          وتوحد طاقاتها من خلال الاستعانة بمتطوعين ومتبرعين لهم نفس الرغبة لنشر
          البسمة وتقديم يد العون للآخر. طور دار الخير من طرف شباب نادي المبادرة
          الوطنية للتنمية البشرية سنة 2022 لكن المشروع ليس حكرا على أعضاء النادي
          بل يمكنكم انتم كذلك أن تكونوا جزءا من التغيير بدعم المشروع.
        </Text>
      </ImageBackground>
      <Text style={styles.progressText}>
        نحب فعل الخير ونظن أنكم كذلك. من هنا نبعت فكرة دار الخير .دار الخير
        تطبيق إلكتروني، يلبي نداء فعاليات المجتمع المدني في أن تعزز فرقها وتوحد
        طاقاتها من خلال الاستعانة بمتطوعين ومتبرعين لهم نفس الرغبة لنشر البسمة
        وتقديم يد العون للآخر. طور دار الخير من طرف شباب نادي المبادرة الوطنية
        للتنمية البشرية سنة 2022 لكن المشروع ليس حكرا على أعضاء النادي بل يمكنكم
        انتم كذلك أن تكونوا جزءا من التغيير بدعم المشروع.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHidden: {
    paddingHorizontal: 10,
    fontFamily: "tajawal",
    fontSize: 14,
    color: "transparent",
    lineHeight: 25,
  },
  progressText: {
    paddingHorizontal: 20,
    fontFamily: "tajawal",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 30,
    paddingBottom: 20,
  },
});

export default AboutDarlkhirScreen;
