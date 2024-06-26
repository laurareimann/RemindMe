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
import { WeatherState, Routine, TempState } from "@/types/routine";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";

export default function createRoutine() {
  //const [routine, setRoutine] = useState<Routine>(); // in Routine sind noch dinge offe
  let routine = {};
  //=> Ziel: eigentlich nur ein useState
  //...
  //aber erstmal für jede Komponente ein useState...

  // todo: 0. init Values
  // isActive = true
  // id

  // 1.[x] message:
  const [message, setMessage] = useState<string>("");
  const handleMessageChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const newMessage = event.nativeEvent.text;
    setMessage(newMessage);
  };
  // 2.[ ] repeat: repeat & time & days
  // 3.[x] weather: location & weather
  const [activeWeather, setActiveWeather] = useState<WeatherState>({
    location: "",
    activeWeather: {
      sun: false,
      hail: false,
      lightning: false,
      snow: false,
    },
  });
  // 4.[ ] temperature: min/max & temp
  const [tempState, setTempState] = useState<TempState>({
    temp: 16,
    activeButtons: {
      min: false,
      max: false,
    },
  });

  routine = {
    message,
    activeWeather,
  };

  return (
    <ScrollView style={{ padding: 15, backgroundColor: "white" }}>
      <Text>{JSON.stringify(routine, null, 2)}</Text>
      <Text>1 - createRoutine.tsx</Text>
      {/* 1. Message */}
      <Heading>Create a Routine:</Heading>
      <Box>
        <Input>
          <InputField
            placeholder="your routine message"
            value={message}
            onChange={handleMessageChange}
          />
          <InputSlot>
            <InputIcon>{/* Some Icon Component */}</InputIcon>
          </InputSlot>
        </Input>
      </Box>

      {/* 2. Repeat */}
      <Heading>Repeat</Heading>
      <Box flexDirection="row" justifyContent="space-between">
        <Box width={"47%"}>
          <Text>2 - ChooseRepeat.tsx</Text>
          <ChooseRepeat />
        </Box>
        <Box width={"47%"}>
          <Text>2 - ChooseTime.tsx</Text>
          <ChooseTime />
        </Box>
      </Box>
      <Box>
        <Text>2 - ChooseDays.tsx</Text>
        <ChooseDays />
      </Box>

      {/* 3. Weather */}
      <Heading>Weather</Heading>
      <Box>
        <Text>3 - ChooseWeather.tsx</Text>
        <ChooseWeather value={activeWeather} setValue={setActiveWeather} />
      </Box>

      {/* 4. Temperature */}
      <Heading>Temperature</Heading>
      <Box>
        <Text>4 - ChooseTemperature.tsx</Text>
        <ChooseTemperature value={tempState} setValue={setTempState} />
      </Box>
    </ScrollView>
  );
}
