import styled from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
  max-height: 380px;
`;
export const Card = styled(Animated.View)`
  border-radius: 5px;
  height: 100%;
  background: #fff;
  margin: 0 10px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardText = styled.Text`
  font-size: 18px;
  color: #333;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  font-size: 15px;
  color: #999;
`;

export const CardValue = styled.Text`
  font-size: 34px;
  margin-top: 3px;
  color: #333;
`;

export const CardDesciption = styled.Text`
  font-size: 12px;
  color: #333;
`;
export const CardFooter = styled.View`
  padding: 20px;
  flex-direction: row;
  background: #eee;
  border-radius: 4px;
`;
