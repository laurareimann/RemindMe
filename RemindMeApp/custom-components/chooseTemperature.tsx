import {
  Box,
  Button,
  ButtonGroup,
  Text
} from "@/components";
import { ActiveMinMaxTemp } from "@/types/routine";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";



export default function ChooseTemperature() {
  const [temp, setTemp] = useState<number>(20);
  const [activeButtons, setActiveButtons] = useState<ActiveMinMaxTemp>({
    // todo: soll auch beides active sein ?
    min: false,
    max: false,
  });

  const toggleButton = (button: keyof ActiveMinMaxTemp) => {
    setActiveButtons((prevActiveButtons) => ({
      ...prevActiveButtons,
      [button]: !prevActiveButtons[button],
    }));
  };

  return (
    <View>
      <Box flexDirection="row">
        <ButtonGroup isAttached marginRight={15}>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            style={activeButtons.min ? styles.buttonActive : styles.buttonInactive}
            onPress={() => toggleButton("min")}
          >
            <Text style={activeButtons.min ? styles.textActive : styles.textInactive}>Min</Text>
          </Button>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            style={activeButtons.max ? styles.buttonActive : styles.buttonInactive}
            onPress={() => toggleButton("max")}
          >
            <Text style={activeButtons.max ? styles.textActive : styles.textInactive}>Max</Text>
          </Button>
        </ButtonGroup>

        <ButtonGroup isAttached>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderRightWidth="$0"
            $dark-borderColor="$backgroundDark700"
            onPress={() => setTemp(temp + 1)}
          >
            <Text bold>+</Text>
          </Button>
          <Button
            paddingHorizontal={-5}
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderRightWidth="$0"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark700"
          >
            <Text>{temp}°C</Text>
          </Button>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark70"
            onPress={() => setTemp(temp - 1)}
          >
            <Text bold>-</Text>
          </Button>
        </ButtonGroup>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: "black",
  },
  buttonInactive: {
    backgroundColor: "white",
  },
  textActive: {
    color: "white",
  },
  textInactive: {
    color: "black",
  },
});
