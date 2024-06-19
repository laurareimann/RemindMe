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
import { WeatherState, CustomComponentProps } from "@/types/routine";
import {
  CloudHail,
  CloudLightning,
  CloudSnow,
  LocateFixed,
  LucideIcon,
  Sun,
} from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

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



export default function ChooseWeather({value, setValue}:CustomComponentProps<WeatherState>) {
  
  const toggleWeather = (weather: keyof WeatherState) => {
    // Erstelle eine Kopie des aktuellen Zustands
    const updatedWeatherState = { ...value };
    // Toggle den Wert für das angegebene Wetterphänomen
    updatedWeatherState[weather] = !updatedWeatherState[weather];
    // Aktualisiere den Zustand über die setValue-Funktion
    setValue(updatedWeatherState);
  };

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
          <ButtonIcon as={LocateFixed} color="black" />
        </Button>
      </Box>

      <ButtonGroup justifyContent="flex-start">
        <WeatherButton
          icon={Sun}
          isActive={value.sun}
          onPress={() => toggleWeather("sun")}
        />
        <WeatherButton
          icon={CloudHail}
          isActive={value.hail}
          onPress={() => toggleWeather("hail")}
        />
        <WeatherButton
          icon={CloudLightning}
          isActive={value.lightning}
          onPress={() => toggleWeather("lightning")}
        />
        <WeatherButton
          icon={CloudSnow}
          isActive={value.snow}
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
  },
});
