import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #abddf2;
`;

export const Btn = styled.TouchableOpacity`
  height: 45px;
  padding-top: 2.3%;
  margin: 20px 0;
  background-color: #f9d949;
  width: 280px;
  border-radius: 30px;
  padding-horizontal: 10px;
  shadow-color: #abddf2;
  shadow-offset: -5px -10px;
  shadow-opacity: 1;
  shadow-radius: 0px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

export const Credits = styled.Text`
  color: #536c77;
  padding: 1.5px 0;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.3px;
`;
