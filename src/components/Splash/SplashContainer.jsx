import React, { useEffect } from "react";
import Splash from "./Splash.jsx";
import { connect } from "react-redux";

const SplashContainer = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate({ name: "Menu" });
    }, 3000);
  }, []);

  return <Splash />;
};
export default connect(null, null)(SplashContainer);
