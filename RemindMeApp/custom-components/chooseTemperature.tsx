import {
  Box,
  Button,
  ButtonGroup,
  Text
} from "@/components";
import { ActiveMinMaxTemp, CustomComponentProps, TempState } from "@/types/routine";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";



export default function ChooseTemperature({
  value,
  setValue,
}: CustomComponentProps<TempState>) {
  const [state, setState] = useState<TempState>({
    temp: 20,
    activeButtons: {
      min: true,
      max: false,
    },
  });


  const toggleMinMaxButton = (button: keyof ActiveMinMaxTemp) => {
    setState((prevState) => ({
      ...prevState,
      activeButtons: {
        min: button === "min",
        max: button === "max",
      },
    }));
  };

  const incrementTemp = () => {
    setState((prevState) => ({
      ...prevState,
      temp: prevState.temp + 1,
    }));
  };

  const decrementTemp = () => {
    setState((prevState) => ({
      ...prevState,
      temp: prevState.temp - 1,
    }));
  };

  return (
    <View>
      <Box flexDirection="row">
        <ButtonGroup isAttached marginRight={15}>
          <Button
            variant="outline"
            size="xs"
            borderColor="black"
            borderRightWidth="$1"
            style={state.activeButtons.min ? styles.buttonActive : styles.buttonInactive}
            onPress={() => toggleMinMaxButton("min")}
          >
            <Text style={state.activeButtons.min ? styles.textActive : styles.textInactive}>Min</Text>
          </Button>
          <Button
            variant="outline"
            size="xs"
            borderColor="black"
            borderLeftWidth="$1"
            style={state.activeButtons.max ? styles.buttonActive : styles.buttonInactive}
            onPress={() => toggleMinMaxButton("max")}
          >
            <Text style={state.activeButtons.max ? styles.textActive : styles.textInactive}>Max</Text>
          </Button>
        </ButtonGroup>

        <ButtonGroup isAttached>
          <Button
            variant="outline"
            size="xs"
            borderColor="black"
            borderRightWidth="$0"
            $dark-borderColor="$backgroundDark700"
            onPress={decrementTemp}
          >
            <Text bold>-</Text>
          </Button>
          <Button
            paddingHorizontal={-5}
            variant="outline"
            size="xs"
            borderColor="$black"
            borderRightWidth="$0"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark700"
          >
            <Text>{state.temp}°C</Text>
          </Button>
          <Button
            variant="outline"
            size="xs"
            borderColor="$black"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark700"
            onPress={incrementTemp}
          >
            <Text bold>+</Text>
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
