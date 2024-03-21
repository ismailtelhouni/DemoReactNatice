import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const PrivacyPolicyScreen = () => {
  const windowHeight = Dimensions.get("window").height;
  const TabBarHeight = 65;
  const headerHeight = 56;
  const statusBarHeight = StatusBar.currentHeight;
  const minHeight = windowHeight - (TabBarHeight + statusBarHeight + headerHeight);
  return (
    //hello world
      <View
        style={{ 
          alignItems:"center"
         }}
      >
        {/* <StatusBar barStyle="light-content" backgroundColor="#1F6F77" /> */}
        <View>
          <Image
            source={require("../../assets/privacy_darlkhir_bg.png")}
            style={{
              resizeMode: "contain",
              height: 200,
              width: 300,
            }}
          />
        </View>

        <Text> </Text>

        <Text style={styles.title}>تطبيق دار الخير</Text>
        <Text style={styles.progressText}>
          شكراً لاستخدام تطبيق دار الخير. نحن نهتم بخصوصيتك ونريد أن تكون على ثقة
          بأن بياناتك الشخصية ستحفظ بأمان في هذه السياسة، سنوضح لك كيفية جمع
          واستخدام وحماية معلوماتك الشخصية.
        </Text>

        <Text style={styles.title}>جمع المعلومات</Text>

        <Text style={styles.progressText}>
          {" "}
          يتم جمع بعض المعلومات تلقائيًا عند استخدام التطبيق، مثل عنوان الخص بك و
          معلومات الجهاز والمتصفح الذي تستخدمه. يمكننا أيضًا جمع المعلومات IP التي
          تقدمها لنا بشكل طوعي، مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف
          ومعلومات أخرى تخصك.
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textHidden: {
    paddingHorizontal: 10,
    fontFamily: "tajawal",
    fontSize: 14,
    color: "transparent",
    lineHeight: 25,
  },
  top: {
    height: "50",
    width: "30",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1F6F77",
  },
});

export default PrivacyPolicyScreen;
