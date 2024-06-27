import { View, Text } from "react-native";
import React from "react";
import ChooseDays from "./chooseDays";
import { RepeatState } from "@/types/routine";

type showRepeatProps = {
  repeatValues: RepeatState;
};

export default function ShowRepeat(props: showRepeatProps) {
  const { repeatValues } = props;
  const hours = repeatValues.date.getHours().toString().padStart(2, "0");
  const minutes = repeatValues.date.getMinutes().toString().padStart(2, "0");
  const tag = String(repeatValues.date.getDate()).padStart(2, "0");
  const monat = String(repeatValues.date.getMonth() + 1).padStart(2, "0"); // Monate sind nullbasiert
  const jahr = repeatValues.date.getFullYear();

  // die drei lassen sich glaube ganz gut stylen
  const time = () => {
    return (
      <Text>
        {hours}:{minutes}
      </Text>
    );
  };

  const date = () => {
    return (
      <Text>
        {tag}.{monat}.{jahr}
      </Text>
    );
  };

  const days = () => {
    return (
        // hier gerne noch einfach wollte nur schnell was ausprobieren
      <ChooseDays
        value={{
          frequency: "weekly",
          date: new Date(),
          days: repeatValues.days,
        }}
        setValue={() => {}}
      />
    );
  };

  switch (repeatValues.frequency) {
    case "daily":
      return (
        <View>
          <Text>{repeatValues.frequency}</Text>
          {time()}
        </View>
      );
    case "weekly":
      return (
        <View>
          <Text>{repeatValues.frequency}</Text>
          {time()}
          {days()}
        </View>
      );
    case "monthly":
      return (
        <View>
          <Text>{repeatValues.frequency}</Text>
          {date()}
          {time()}
        </View>
      );
    case "yearly":
      return (
        <View>
          <Text>{repeatValues.frequency}</Text>
          {date()}
          {time()}
        </View>
      );
    default:
      return (
        <View>
          <Text>Invalid frequency</Text>
        </View>
      );
  }
}
