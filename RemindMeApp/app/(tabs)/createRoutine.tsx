import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
} from "@/components";
import ChooseDays from "@/custom-components/chooseDays";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTemperature from "@/custom-components/chooseTemperature";
import ChooseTime from "@/custom-components/chooseTime";
import ChooseWeather from "@/custom-components/chooseWeather";
import PageView from "@/custom-components/templates";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function createRoutine() {

  return (
    <PageView>
      <View>
        <View>
          {/*createRoutine.tsx*/}
          <Heading paddingBottom={"$2"}>New Routine:</Heading>
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
            {/*ChooseRepeat.tsx*/}
            <ChooseRepeat />
          </Box>
          <Box width={"47%"}>
            {/*ChooseTime.tsx*/}
            <ChooseTime />
          </Box>
        </Box>
        <Box>
          {/*ChooseDays.tsx*/}
          <ChooseDays />
        </Box>

        <Heading paddingTop={"$4"} paddingBottom={"$2"}>Weather</Heading>
        <Box>
          {/*ChooseWeather.tsx*/}
          <ChooseWeather />
        </Box>

        <Heading paddingTop={"$4"} paddingBottom={"$2"}>Temperature</Heading>
        <Box>
          {/*ChooseTemperature.tsx*/}
          <ChooseTemperature />
        </Box>
      </View>
    </PageView>
  );
}