import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 10%;
`;

export const Quiz = styled.View`
  flex-direction: row;
`;

export const Circle = styled.View`
  width: 25px;
  height: 25px;
  background-color: #f9d949;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-top: 3px;
`;

export const Number = styled.Text`
  font-family: "Montserrat-medium"
  color: #0d0a21;
  font-size: 14px;
`;

export const QandA = styled.View``;

export const Question = styled.Text`
  color: #0d0a21;
  font-family: "Montserrat-bold"
  font-size: 18px;
  margin-right: 43px;
  font-weight: bold;
`;

export const Answer = styled.Text`
  color: #0d0a21;
  font-family: "Montserrat-regular"
  font-size: 16px;
  margin-top: 8px;
`;

export const Hr = styled.View`
  margin: 40px 35px 40px -35px;
  width: 320px;
  height: 1px;
  background-color: #bea9f5;
`;
