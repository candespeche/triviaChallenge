import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Card = styled.View`
  width: 340px;
  padding: 12% 8%;
  border-radius: 9px;
  background-color: white;
  shadow-color: #bbc9cd;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  align-self: center;
`;

export const Question = styled.Text`
  color: #0d0a21;
  font-size: 18px;
  height: 120px;
  font-weight: bold;
  text-align: center;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  margin-top: 20px;
  background-color: #f9d949;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTxt = styled.Text`
  color: #0d0a21;
  font-size: 15px;
  text-align: center;
`;
