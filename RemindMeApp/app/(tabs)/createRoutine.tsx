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
import PageView from "@/custom-components/templates";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  'index': undefined;
  'api-demo': undefined;
};

export default function createRoutine() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showWeather, setShowWeather] = useState(true);
  const [showTemperature, setShowTemperature] = useState(true);

  return (
    <PageView>
      <ScrollView style={{ flexGrow: 1 }}>
      <View>
        <View>
          {/*createRoutine.tsx*/}
          <Heading paddingBottom={"$4"}>New Routine</Heading>
          <Box>
            <Input>
              <InputField placeholder="Your routine message" />
              <InputSlot>
                <InputIcon>{/* Some Icon Component */}</InputIcon>
              </InputSlot>
            </Input>
          </Box>
        </View>

        <Heading paddingTop={"$4"} paddingBottom={"$2"}>Repeat</Heading>
        <Box paddingBottom={"$2"} flexDirection="column" justifyContent="space-between">
          <Box width={"47%"}>
            {/*ChooseTime.tsx*/}
            <ChooseTime />
          </Box>
          <Box width={"47%"}>
            {/*ChooseRepeat.tsx*/}
            <ChooseRepeat />
          </Box>
        </Box>
        <Box>
          {/*ChooseDays.tsx*/}
          <ChooseDays />
        </Box>

        <Box flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop={"$4"} >
          <Heading>Weather</Heading>
          <Switch
            value={showWeather}
            onValueChange={(value) => setShowWeather(value)}
          />
        </Box>
        {showWeather && (
          <Box>
            {/*ChooseWeather.tsx*/}
            <ChooseWeather />
          </Box>
        )}

        <Box flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop={"$2"} >
          <Heading>Temperature</Heading>
          <Switch
            value={showTemperature}
            onValueChange={(value) => setShowTemperature(value)}
          />
        </Box>
        {showTemperature && (
          <Box>
            {/*ChooseTemperature.tsx*/}
            <ChooseTemperature />
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
            console.log('Button new Routine Pressed');
            navigation.navigate('api-demo');
          }}
        >
          <Text bg="black">Save</Text>
        </Button>
      </Box>
    </PageView>
  );
}
