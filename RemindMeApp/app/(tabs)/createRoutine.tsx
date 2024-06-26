import {
  Box,
  Button,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  Switch,
  ScrollView,
} from "@/components";
import ChooseDays from "@/custom-components/chooseDays";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTemperature from "@/custom-components/chooseTemperature";
import ChooseTime from "@/custom-components/chooseTime";
import ChooseWeather from "@/custom-components/chooseWeather";
import { WeatherState, Routine, TempState } from "@/types/routine";
import PageView from "@/custom-components/templates";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  index: undefined;
  "api-demo": undefined;
};

export default function createRoutine() {
  // von Laura
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [frequency, setFrequency] = useState("daily");
  const [showWeather, setShowWeather] = useState(true);
  const [showTemperature, setShowTemperature] = useState(true);

  // von Jannik
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
    tempState
  };

  const handleFrequencyChange = (newFrequency: string) => {
    setFrequency(newFrequency);
  };

  return (
    <PageView>
      <ScrollView style={{ flexGrow: 1 }}>
        <Text>{JSON.stringify(routine, null, 2)}</Text>
        <View>
          <View>
            {/* 1. Message */}
            {/*createRoutine.tsx*/}
            <Heading paddingBottom={"$4"}>New Routine</Heading>
            <Box>
              <Input>
                <InputField
                  placeholder="Your routine message"
                  value={message}
                  onChange={handleMessageChange}
                />
                <InputSlot>
                  <InputIcon>{/* Some Icon Component */}</InputIcon>
                </InputSlot>
              </Input>
            </Box>
          </View>
          {/* 2. Repeat */}
          <Heading paddingTop={"$4"} paddingBottom={"$2"}>
            Repeat
          </Heading>
          <Box width={"47%"}>
            {/*ChooseRepeat.tsx*/}
            <ChooseRepeat onFrequencyChange={handleFrequencyChange} />
          </Box>
          <Box
            paddingBottom={"$2"}
            flexDirection="column"
            justifyContent="space-between"
          >
            {frequency === "daily" && (
              <Box>
                <ChooseTime showDateButton={false} showTimeButton={true} />
              </Box>
            )}

            {frequency === "weekly" && (
              <Box>
                <Box paddingBottom={"$2"}>
                  <ChooseDays />
                </Box>
                <Box>
                  <ChooseTime showDateButton={false} showTimeButton={true} />
                </Box>
              </Box>
            )}

            {frequency === "monthly" && (
              <Box paddingBottom={"$2"}>
                <Box>
                  <ChooseTime showDateButton={true} showTimeButton={true} />
                </Box>
              </Box>
            )}

            {frequency === "yearly" && (
              <Box>
                <ChooseTime showDateButton={true} showTimeButton={true} />
              </Box>
            )}
          </Box>

          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingTop={"$4"}
          >
            {/* 3. Weather */}
            <Heading>Weather</Heading>
            <Switch
              value={showWeather}
              onValueChange={(value) => setShowWeather(value)}
            />
          </Box>
          {showWeather && (
            <Box>
              {/*ChooseWeather.tsx*/}
              <ChooseWeather value={activeWeather} setValue={setActiveWeather} />
            </Box>
          )}

          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingTop={"$2"}
          >
            {/* 4. Temperature */}
            <Heading>Temperature</Heading>
            <Switch
              value={showTemperature}
              onValueChange={(value) => setShowTemperature(value)}
            />
          </Box>
          {showTemperature && (
            <Box>
              {/*ChooseTemperature.tsx*/}
              <ChooseTemperature value={tempState} setValue={setTempState} />
            </Box>
          )}
        </View>
      </ScrollView>
      <Box pt="$4">
        <Button
          action="primary"
          variant="solid"
          size="md"
          onPress={() => {
            console.log("Button new Routine Pressed");
            navigation.navigate("api-demo");
          }}
        >
          <Text bg="black">Save</Text>
        </Button>
      </Box>
    </PageView>
  );
}
