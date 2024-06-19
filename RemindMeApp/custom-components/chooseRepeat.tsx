import {
  Button,
  ButtonGroup,
  Text
} from "@/components";

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

type ActiveButtons = {
  daily: boolean;
  weekly: boolean;
  monthly: boolean;
  yearly: boolean;
};

export default function ChooseRepeat() {
  const [activeButtons, setActiveButtons] = useState<ActiveButtons>({
    daily: true,
    weekly: false,
    monthly: false,
    yearly: false,
  });

  const toggleButton = (button: keyof ActiveButtons) => {
    setActiveButtons({
      daily: button === 'daily',
      weekly: button === 'weekly',
      monthly: button === 'monthly',
      yearly: button === 'yearly',
    });
  };

  return (
    <View>
      <ButtonGroup paddingBottom={"$2"} isAttached marginRight={15}>
        <Button
          variant="outline"
          size="xs"
          borderColor="black"
          borderRightWidth="$1"
          style={activeButtons.daily ? styles.buttonActive : styles.buttonInactive}
          onPress={() => toggleButton("daily")}
        >
          <Text style={activeButtons.daily ? styles.textActive : styles.textInactive}>Daily</Text>
        </Button>
        <Button
          variant="outline"
          size="xs"
          borderColor="black"
          borderRightWidth="$1"
          borderLeftWidth="$1"
          style={activeButtons.weekly ? styles.buttonActive : styles.buttonInactive}
          onPress={() => toggleButton("weekly")}>
          <Text style={activeButtons.weekly ? styles.textActive : styles.textInactive}>Weekly</Text>
        </Button>
        <Button
          variant="outline"
          size="xs"
          borderColor="black"
          borderRightWidth="$1"
          borderLeftWidth="$1"
          style={activeButtons.monthly ? styles.buttonActive : styles.buttonInactive}
          onPress={() => toggleButton("monthly")}>
          <Text style={activeButtons.monthly ? styles.textActive : styles.textInactive}>Monthly</Text>
        </Button>
        <Button
          variant="outline"
          size="xs"
          borderColor="black"
          borderLeftWidth="$1"
          style={activeButtons.yearly ? styles.buttonActive : styles.buttonInactive}
          onPress={() => toggleButton("yearly")}>
          <Text style={activeButtons.yearly ? styles.textActive : styles.textInactive}>Yearly</Text>
        </Button>
      </ButtonGroup>
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
