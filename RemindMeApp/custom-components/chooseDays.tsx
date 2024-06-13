import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup } from "@/components";

type DayButtonProps = {
  dayText: string;
  isActive: boolean;
  onPress: () => void;
};

function DayButton({ dayText, isActive, onPress }: DayButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.buttonActive : styles.buttonInactive,
      ]}
      onPress={onPress}
    >
      <Text style={isActive ? styles.textActive : styles.textInactive}>
        {dayText}
      </Text>
    </TouchableOpacity>
  );
}

type ActiveDays = {
  M: boolean;
  T: boolean;
  W: boolean;
  Th: boolean;
  F: boolean;
  S: boolean;
  Su: boolean;
};

export default function ChooseDays() {
  const [activeDays, setActiveDays] = useState<ActiveDays>({
    M: false,
    T: false,
    W: false,
    Th: false,
    F: false,
    S: false,
    Su: false,
  });

  const toggleDay = (day: keyof ActiveDays) => {
    setActiveDays((prevActiveDays) => ({
      ...prevActiveDays,
      [day]: !prevActiveDays[day],
    }));
  };

  return (
    <View>
      <ButtonGroup justifyContent="space-between">
        {Object.keys(activeDays).map((day) => (
          <DayButton
            key={day}
            dayText={day}
            isActive={activeDays[day as keyof ActiveDays]}
            onPress={() => toggleDay(day as keyof ActiveDays)}
          />
        ))}
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    //borderRadius: "$full",
    //size:"sm",
    borderRadius: 50,
    // todo: hight & width evtl. in % oder iwie anders?
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
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
