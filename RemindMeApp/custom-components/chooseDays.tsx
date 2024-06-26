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
  Mo: boolean;
  Tu: boolean;
  We: boolean;
  Th: boolean;
  Fr: boolean;
  Sa: boolean;
  Su: boolean;
};

export default function ChooseDays() {
  const [activeDays, setActiveDays] = useState<ActiveDays>({
    Mo: true,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
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
