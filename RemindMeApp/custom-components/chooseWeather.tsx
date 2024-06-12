import {
  Box,
  Button,
  ButtonGroup,
  ButtonIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/components";
import {
  CloudHail,
  CloudLightning,
  CloudSnow,
  LocateFixed,
  LucideIcon,
  Sun,
} from "lucide-react-native";
import React from "react";
import { View } from "react-native";

type WeatherButtonProps = {
  icon: LucideIcon;
  setValue?: () => void;
};

function WeatherButton(props: WeatherButtonProps) {
  return (
    <Button
      // width={50} // Ensure the button is a square
      // height={50} // Ensure the button is a square
      // borderRadius={25} // Half of the width / height to make it a circle
      borderRadius="$full"
      size="sm"
    >
      <ButtonIcon color="black" as={props.icon} />
    </Button>
  );
}

export default function ChooseWeather() {
  return (
    <View>
      <Box flexDirection="row" justifyContent="space-between">
        <Input width="85%">
          <InputField placeholder="your location" />
          <InputSlot>
            <InputIcon>
              <LocateFixed />
            </InputIcon>
          </InputSlot>
        </Input>
        <Button width="5%">
          <ButtonIcon as={LocateFixed} color="black"/>
        </Button>
      </Box>

      <ButtonGroup justifyContent="flex-start">
        <WeatherButton icon={Sun} />
        <WeatherButton icon={CloudHail} />
        <WeatherButton icon={CloudLightning} />
        <WeatherButton icon={CloudSnow} />
      </ButtonGroup>
    </View>
  );
}
