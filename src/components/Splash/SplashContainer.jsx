import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Splash from "./Splash.jsx";
import { connect } from "react-redux";

// import {Sound} from 'react-native-sound';

const SplashContainer = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate({ name: "Menu" });
    }, 3000);
  }, []);

  return <Splash />;
};
export default connect(null, null)(SplashContainer);
