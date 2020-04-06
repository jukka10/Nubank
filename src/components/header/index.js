import React from "react";

import logo from "../../assets/Nubank_Logo.png";

import { MaterialIcons } from "@expo/vector-icons";
import { Container, Top, Title, Logo } from "./styles";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo resizeMode="contain" source={logo} />
        <Title>João</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" size={30} color="#FFF" />
    </Container>
  );
}
