import {
  Box,
  Button,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ScrollView,
  Switch,
  Text,
} from "@/components";
import ChooseDays from "@/custom-components/chooseDays";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTemperature from "@/custom-components/chooseTemperature";
import ChooseTime from "@/custom-components/chooseTime";
import ChooseWeather from "@/custom-components/chooseWeather";
import PageView from "@/custom-components/templates";
import { RepeatState, TempState, WeatherState } from "@/types/routine";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { uploadRoutine } from "@/api/database-core";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";

type RootStackParamList = {
  index: undefined;
  "api-demo": undefined;
};

export default function createRoutine() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showWeather, setShowWeather] = useState(true);
  const [showTemperature, setShowTemperature] = useState(true);


  // 1.[x] message:
  const [message, setMessage] = useState<string>("");
  const handleMessageChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const newMessage = event.nativeEvent.text;
    setMessage(newMessage);
  };
  // 2.[x] repeat: repeat & time & days
  const [repeat, setRepeat] = useState<RepeatState>({
    frequency: "daily",
    days: {
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      Su: false,
    }, 
    date: new Date(),
  });
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
  // 4.[x] temperature: min/max & temp
  const [tempState, setTempState] = useState<TempState>({
    temp: 16,
    activeButtons: {
      min: true,
      max: false,
    },
  });



  return (
    <PageView>
      <ScrollView style={{ flexGrow: 1 }}>
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
            <ChooseRepeat value={repeat} setValue={setRepeat} />
          </Box>
          <Box
            paddingBottom={"$2"}
            flexDirection="column"
            justifyContent="space-between"
          >
            {repeat.frequency === "daily" && (
              <Box>
                <ChooseTime showDateButton={false} showTimeButton={true} value={repeat} setValue={setRepeat} />
              </Box>
            )}

            {repeat.frequency === "weekly" && (
              <Box>
                <Box paddingBottom={"$2"}>
                  <ChooseDays value={repeat} setValue={setRepeat}/>
                </Box>
                <Box>
                  <ChooseTime showDateButton={false} showTimeButton={true} value={repeat} setValue={setRepeat}/>
                </Box>
              </Box>
            )}

            {repeat.frequency === "monthly" && (
              <Box paddingBottom={"$2"}>
                <Box>
                  <ChooseTime showDateButton={true} showTimeButton={true} value={repeat} setValue={setRepeat}/>
                </Box>
              </Box>
            )}

            {repeat.frequency === "yearly" && (
              <Box>
                <ChooseTime showDateButton={true} showTimeButton={true} value={repeat} setValue={setRepeat}/>
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
          onPress={async () => {
            const response: any = await uploadRoutine({
              message: message,
              repeat: repeat,
              weather: activeWeather,
              temperature: tempState,
              setActive: true,
            });
            navigation.navigate("index");
            console.log(response);
          }}
        >
          <Text bg="black">Save</Text>
        </Button>
      </Box>
    </PageView>
  );
}
