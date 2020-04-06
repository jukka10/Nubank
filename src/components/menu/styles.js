import { Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: { alignItems: "center" },
  showsVerticalScrollIndicator: false
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
  align-self: stretch;
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 10px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  background: #8b10ae;
`;
export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
