import React, { Component } from 'react';
import { View, Image, ImageBackground, Animated } from 'react-native';
import { Container } from './styles';
const image = { uri: 'https://reactjs.org/logo-og.png' };

class Splash extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    logoAnimation: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount() {
    setTimeout(() => {
      const { logoAnimation, LogoText } = this.state;
      Animated.parallel([
        Animated.spring(logoAnimation, {
          toValue: 1,
          tension: 15,
          friction: 1,
          duration: 2000,
        }).start(),
      ]).start(() => {
        this.setState({
          loadingSpinner: true,
        });
      });
    }, 300);
  }
  render() {
    return (
      <Container>
        <ImageBackground
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={require('../../../assets/triviaFondoSPLASH.png')}>
          <Animated.View
            style={{
              opacity: this.state.logoAnimation,
              top: this.state.logoAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0],
              }),
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                alignSelf: 'center',
                width: '85%',
              }}
              source={require('../../../assets/triviaSPLASH.png')}
            />
          </Animated.View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Splash;
