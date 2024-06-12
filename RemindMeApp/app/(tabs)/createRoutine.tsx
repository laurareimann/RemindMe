import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  Heading,
} from "@/components";
import ChooseDays from "@/custom-components/chooseDays";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTemperature from "@/custom-components/chooseTemperature";
import ChooseTime from "@/custom-components/chooseTime";
import ChooseWeather from "@/custom-components/chooseWeather";
import React from "react";
import { View } from "react-native";

export default function createRoutine() {
  return (
    <View style={{ padding: 15 }}>
      <Text>createRoutine.tsx</Text>
      <Heading>Create a Routine:</Heading>
      <Box>
        <Input>
          <InputField placeholder="your routine message" />
          <InputSlot>
            <InputIcon>{/* Some Icon Component */}</InputIcon>
          </InputSlot>
        </Input>
      </Box>

      <Heading>Repeat</Heading>
      <Box flexDirection="row" justifyContent="space-between">
        <Box width={"47%"}>
          <Text>ChooseRepeat.tsx</Text>
          <ChooseRepeat />
        </Box>
        <Box width={"47%"}>
          <Text>ChooseTime.tsx</Text>
          <ChooseTime />
        </Box>
      </Box>
      <Box>
        <Text>ChooseDays.tsx</Text>
        <ChooseDays />
      </Box>

      <Heading>Weather</Heading>
      <Box>
        <Text>ChooseWeather.tsx</Text>
        <ChooseWeather/>
      </Box>

      <Heading>Temperature</Heading>
      <Box>
        <Text>ChooseTemperature.tsx</Text>
        <ChooseTemperature />
      </Box>
    </View>
  );
}
