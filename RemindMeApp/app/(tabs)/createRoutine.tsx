import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  Heading,
  ScrollView,
} from "@/components";
import ChooseDays from "@/custom-components/chooseDays";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTemperature from "@/custom-components/chooseTemperature";
import ChooseTime from "@/custom-components/chooseTime";
import ChooseWeather from "@/custom-components/chooseWeather";
import { WeatherState, Routine } from "@/types/routine";
import React, { useState } from "react";
import { View } from "react-native";

export default function createRoutine() {
  const [routine, setRoutine] = useState<Routine>(); // in Routine sind noch dinge offe
  //=> Ziel: eigentlich nur ein useState 
  //...
  //aber erstmal mit für jede Komponente ein useState
  const [activeWeather, setActiveWeather] = useState<WeatherState>({
    sun: false,
    hail: false,
    lightning: false,
    snow: false,
  });
  

  return (
    <ScrollView style={{ padding: 15, backgroundColor:'white' }}>
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
        <ChooseWeather value={activeWeather} setValue={setActiveWeather}/>
      </Box>

      <Heading>Temperature</Heading>
      <Box>
        <Text>ChooseTemperature.tsx</Text>
        <ChooseTemperature />
      </Box>
    </ScrollView>
  );
}
