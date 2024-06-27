import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, ButtonGroup } from "@/components";
import { ActiveDays, CustomComponentProps, RepeatState } from "@/types/routine";

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

export default function ChooseDays(
  {
    value,
    setValue,
  }: CustomComponentProps<RepeatState>
) {
  
  const toggleDay = (day: keyof ActiveDays) => {
    const prev = value;
    setValue({
      ...prev,
      days: {
        ...prev.days,
        [day]: !prev.days[day],
      },
    });
  };

  return (
    <View>
      <ButtonGroup justifyContent="space-between">
        {Object.keys(value.days).map((day) => (
          <DayButton
            key={day}
            dayText={day}
            isActive={value.days[day as keyof ActiveDays]}
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
    borderColor: "black",
    borderWidth: 2,
  },
  textActive: {
    color: "white",
  },
  textInactive: {
    color: "black",
  },
});
