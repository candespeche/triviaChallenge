import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Container, Title, Credits, Btn, ButtonText } from './style';
import NavbarContainer from '../Navbar/NavbarContainer';

export default ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../../../assets/triviaFondo.png')}>
        <View style={{ alignItems: 'center' }}>
          <Btn onPress={() => navigation.navigate('Ejer2')}>
            <ButtonText>Jugar</ButtonText>
          </Btn>
          <Btn onPress={() => navigation.navigate('Ejer1')}>
            <ButtonText>Ver preguntas</ButtonText>
          </Btn>
          <Btn onPress={() => navigation.navigate('Points')}>
            <ButtonText>Puntos</ButtonText>
          </Btn>
        </View>
        {/* <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
          <Credits>diseño y desarrollo</Credits>
          <Credits>CANDELARIA ESPECHE</Credits>
          <Credits>música</Credits>
          <Credits>FRANCISCO ESPECHE</Credits>
        </View> */}
      </ImageBackground>
    </Container>
  );
};
