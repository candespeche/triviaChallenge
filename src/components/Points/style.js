import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #3a547c;
`;
export const Btn = styled.TouchableHighlight`
  height: 45px;
  width: 280px;
  align-items: center;
  background-color: #f9d949;
  justify-content: center;
  border-radius: 30px;
  shadow-color: #abddf2;
  shadow-offset: -5px -10px;
  shadow-opacity: 1;
  shadow-radius: 0px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-weight: 600;
  font-size: 18px;
  font-family: "Montserrat-medium"
  text-align: center;
  justify-content: center;
`;

export const Number = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 150px;
  font-family: "Montserrat-bold"
  text-align: center;
  margin-top: -20px;
  margin-bottom: -7px;
`;

export const Pointstxt = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 30px;
  font-family: "Montserrat-medium"
  text-align: center;
`;

export const Circle = styled.View`
  width: 270px;
  height: 270px;
  border-radius: 150px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #ed752f;
  shadow-color: #bea9f5;
  shadow-offset: -15px 15px;
  shadow-opacity: 1;
  shadow-radius: 0px;
`;

export const Circle2 = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: #abddf2;
  shadow-color: #f9d949;
  shadow-offset: -15px 20px;
  shadow-opacity: 1;
  shadow-radius: 0px;
`;

export const Hr = styled.View`
  width: 90px;
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
`;

export const Answers = styled.Text`
  color: #fff;
  font-family: "Montserrat-regular"
  font-size: 14px;
  text-align: center;
`;
