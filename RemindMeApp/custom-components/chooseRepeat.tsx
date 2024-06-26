import {
  Button,
  ButtonGroup,
  Text
} from "@/components";
import { CustomComponentProps, RepeatState } from "@/types/routine";

import React from "react";
import { StyleSheet } from "react-native";

export default function ChooseRepeat({
  value,
  setValue,
}: CustomComponentProps<RepeatState>) {

  const toggleButton = (button: "daily" | "weekly" | "monthly" | "yearly" ) => {
    const prev = value;
    setValue({
      ...prev,
      frequency: button,
    });
  };

  return (
    <ButtonGroup paddingBottom={"$2"} isAttached>
      <Button
        variant="outline"
        size="xs"
        borderColor="black"
        borderRightWidth="$1"
        style={value.frequency === 'daily' ? styles.buttonActive : styles.buttonInactive}
        onPress={() => toggleButton("daily")}
      >
        <Text style={value.frequency === 'daily' ? styles.textActive : styles.textInactive}>Daily</Text>
      </Button>
      <Button
        variant="outline"
        size="xs"
        borderColor="black"
        borderRightWidth="$1"
        borderLeftWidth="$1"
        style={value.frequency === 'weekly'  ? styles.buttonActive : styles.buttonInactive}
        onPress={() => toggleButton("weekly")}>
        <Text style={value.frequency === 'weekly' ? styles.textActive : styles.textInactive}>Weekly</Text>
      </Button>
      <Button
        variant="outline"
        size="xs"
        borderColor="black"
        borderRightWidth="$1"
        borderLeftWidth="$1"
        style={value.frequency === 'monthly'  ? styles.buttonActive : styles.buttonInactive}
        onPress={() => toggleButton("monthly")}>
        <Text style={value.frequency === 'monthly' ? styles.textActive : styles.textInactive}>Monthly</Text>
      </Button>
      <Button
        variant="outline"
        size="xs"
        borderColor="black"
        borderLeftWidth="$1"
        style={value.frequency === 'yearly'  ? styles.buttonActive : styles.buttonInactive}
        onPress={() => toggleButton("yearly")}>
        <Text style={value.frequency === 'yearly' ? styles.textActive : styles.textInactive}>Yearly</Text>
      </Button>
    </ButtonGroup>
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
