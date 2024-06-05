import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot
} from "@/components";
import ChooseRepeat from "@/custom-components/chooseRepeat";
import ChooseTime from "@/custom-components/chooseTime";
import React from "react";
import { Text, View } from "react-native";

export default function createRoutine() {
  return (
    <View>
      <Text>createRoutine</Text>
      <Box>
        <Input>
          <InputField />
          <InputSlot>
            <InputIcon>{/* Some Icon Component */}</InputIcon>
          </InputSlot>
        </Input>
      </Box>
      <Box>
        <Text>Repeat</Text>
        <ChooseRepeat />
      </Box>

      <Box>
        <Text>Set Time</Text>
        <ChooseTime />
      </Box>
        
    </View>
  );
}
