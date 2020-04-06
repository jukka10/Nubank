import React from "react";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "../../components/header";
import Tabs from "../../components/tabs";
import Menu from "../../components/menu";
import {
  Container,
  Content,
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
  CardDesciption,
  CardText,
  CardValue
} from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  function onHandlerStateChange(event) {}
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 390],
                    outputRange: [-50, 0, 390],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            <CardHeader>
              <CardText>
                <MaterialIcons name="monetization-on" size={22} color="#666" />
                {`  `}NuConta
              </CardText>
              <MaterialIcons name="visibility-off" size={24} color="#666" />
            </CardHeader>
            <CardContent>
              <CardTitle>Saldo disponivel</CardTitle>
              <CardValue>R$ 2.000,00</CardValue>
            </CardContent>
            <CardFooter>
              <CardDesciption>
                Tranferencia de R$ 204,38 recebida de Jão Paulo Verissimo da
                silva Santos as 08:31
              </CardDesciption>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
