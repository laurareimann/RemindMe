import { Button, ButtonGroup, ButtonIcon, EditIcon } from "@/components";
import React from "react";
import { View, Text } from "react-native";

type DayButtonProps = {
  dayText: string;
  setValue?: () => void;
};

function DayButton(props: DayButtonProps) {
  return (
    <Button
      // width={50} // Ensure the button is a square
      // height={50} // Ensure the button is a square
      // borderRadius={25} // Half of the width / height to make it a circle
      borderRadius="$full"
      size="sm"
    >
      <Text>{/* ToDo / BUG: Full rounded without text crash */}{props.dayText}</Text>
    </Button>
  );
}

export default function ChooseDays() {
  return (
    <View>
      <ButtonGroup justifyContent="space-between">
        <DayButton dayText={"M"} />
        <DayButton dayText={"T"} />
        <DayButton dayText={"W"} />
        <DayButton dayText={"T"} />
        <DayButton dayText={"F"} />
        <DayButton dayText={"S"} />
        <DayButton dayText={"S"} />
      </ButtonGroup>
    </View>
  );
}
