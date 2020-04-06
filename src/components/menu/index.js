import React from "react";
import QRCode from "react-native-qrcode-svg";

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  ButtonText
} from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          size={100}
          value="https://www.facebook.com"
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={22} color="#fff" />
          <NavText>Me ajude</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="person-outline" size={22} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="monetization-on" size={22} color="#fff" />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="credit-card" size={22} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="smartphone" size={22} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <SignOutButton onPress={() => {}}>
          <ButtonText>Sair do App</ButtonText>
        </SignOutButton>
      </Nav>
    </Container>
  );
}
