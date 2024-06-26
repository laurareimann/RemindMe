import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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

type WeatherButtonProps = {
  icon: LucideIcon;
  isActive: boolean;
  onPress: () => void;
};

function WeatherButton({ icon, isActive, onPress }: WeatherButtonProps) {
  return (
    <Button
      borderRadius="$full"
      size="sm"
      style={[styles.button, isActive ? styles.buttonActive : styles.buttonInactive]}
      onPress={onPress}
    >
      <ButtonIcon color={isActive ? "white" : "black"} as={icon} />
    </Button>
  );
}

type ActiveWeather = {
  sun: boolean;
  hail: boolean;
  lightning: boolean;
  snow: boolean;
};

export default function ChooseWeather() {
  const [activeWeather, setActiveWeather] = useState<ActiveWeather>({
    sun: false,
    hail: false,
    lightning: false,
    snow: false,
  });

  const toggleWeather = (weather: keyof ActiveWeather) => {
    setActiveWeather((prevActiveWeather) => ({
      ...prevActiveWeather,
      [weather]: !prevActiveWeather[weather],
    }));
  };

  return (
    <View>
      <Box paddingBottom={"$2"} flexDirection="row" justifyContent="space-between">
        <Input width="85%">
          <InputField placeholder="Your location" />
          <InputSlot>
            <InputIcon>
              <LocateFixed />
            </InputIcon>
          </InputSlot>
        </Input>
        <Button width="5%">
          <ButtonIcon as={LocateFixed} color="white" />
        </Button>
      </Box>

      <ButtonGroup justifyContent="flex-start">
        <WeatherButton
          icon={Sun}
          isActive={activeWeather.sun}
          onPress={() => toggleWeather("sun")}
        />
        <WeatherButton
          icon={CloudHail}
          isActive={activeWeather.hail}
          onPress={() => toggleWeather("hail")}
        />
        <WeatherButton
          icon={CloudLightning}
          isActive={activeWeather.lightning}
          onPress={() => toggleWeather("lightning")}
        />
        <WeatherButton
          icon={CloudSnow}
          isActive={activeWeather.snow}
          onPress={() => toggleWeather("snow")}
        />
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    //borderRadius: "$full",
    //size:"sm",
    borderRadius: 50,
    // todo: hight & width evtl. in % oder iwie anders?
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: "black",
  },
  buttonInactive: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
});
