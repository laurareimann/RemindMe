import { View } from "react-native";
import React, { useState } from "react";
import {
  Text,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
  ThreeDotsIcon,
  Box,
} from "@/components";

export default function ChooseTemperature() {
  const [temp, setTemp] = useState<number>(20);
  return (
    <View>
      <Box flexDirection="row"/* justifyContent="space-between" */>
        <ButtonGroup isAttached marginRight={15}>
          <Button variant="outline" size="xs" borderColor="$backgroundLight300">
            <Text>Min</Text>
          </Button>
          <Button variant="outline" size="xs" borderColor="$backgroundLight300">
            <Text>Max</Text>
          </Button>
        </ButtonGroup>

        <ButtonGroup isAttached>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderRightWidth="$0"
            $dark-borderColor="$backgroundDark700"
            onPress={()=> setTemp(temp+1)}

          >
            <Text bold>+</Text>
          </Button>
          <Button
            paddingHorizontal={-5}
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderRightWidth="$0"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark700"
          >
            <Text>{temp}°C</Text>
          </Button>
          <Button
            variant="outline"
            size="xs"
            borderColor="$backgroundLight300"
            borderLeftWidth="$0"
            $dark-borderColor="$backgroundDark70"
            onPress={()=> setTemp(temp-1)}
          >
            <Text bold>-</Text>
          </Button>
        </ButtonGroup>
      </Box>
    </View>
  );
}
