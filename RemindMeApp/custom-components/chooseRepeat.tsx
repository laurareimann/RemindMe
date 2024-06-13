
import {
    Box,
    CalendarDaysIcon,
    Icon,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectInput,
    SelectItem,
    SelectPortal,
    SelectTrigger,
} from "@/components";
import React from "react";
import { View, Text} from "react-native";
export default function ChooseRepeat() {
  return (
    <View>
      <Box>
        <Select>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Select option" />
            {/* <SelectIcon mr="$3"> */}
            <Icon as={CalendarDaysIcon} size="md" />
            {/* </SelectIcon> */}
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="daily" value="daily" />
              <SelectItem label="weekly" value="weekly" />
              <SelectItem label="yearly" value="yearly" isDisabled={true} />
            </SelectContent>
          </SelectPortal>
        </Select>
        <Text>ToDo: fix select view</Text>
      </Box>
    </View>
  );
}
