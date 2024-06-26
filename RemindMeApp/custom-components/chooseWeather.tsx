import React from "react";
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
import { LucideIcon, Sun, CloudHail, CloudLightning, CloudSnow, LocateFixed } from "lucide-react-native";
import { StyleSheet, View, TextInputChangeEventData, NativeSyntheticEvent } from "react-native";
import { CustomComponentProps, WeatherState } from "@/types/routine";

type WeatherButtonProps = {
  icon: LucideIcon;
  isActive: boolean;
  onPress: () => void;
};

function WeatherButton({ icon, isActive, onPress }: WeatherButtonProps) {
  return (
    <Button
      borderRadius={50}
      size="sm"
      style={[styles.button, isActive ? styles.buttonActive : styles.buttonInactive]}
      onPress={onPress}
    >
      <ButtonIcon color={isActive ? "white" : "black"} as={icon} />
    </Button>
  );
}

export default function ChooseWeather({ value, setValue }: CustomComponentProps<WeatherState>) {
  
  const toggleWeather = (weather: keyof WeatherState['activeWeather']) => {
    // Erstelle eine Kopie des aktuellen Zustands
    const updatedWeatherState = { ...value, activeWeather: { ...value.activeWeather } };
    // Toggle den Wert für das angegebene Wetterphänomen
    updatedWeatherState.activeWeather[weather] = !updatedWeatherState.activeWeather[weather];
    // Aktualisiere den Zustand über die setValue-Funktion
    setValue(updatedWeatherState);
  };

  const handleLocationChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newLocation = event.nativeEvent.text;
    // Aktualisiere den Zustand über die setValue-Funktion
    setValue({ ...value, location: newLocation });
  };

  return (
    <View>
      <Box paddingBottom={"$2"} flexDirection="row" justifyContent="space-between">
        <Input width="85%">
          <InputField placeholder="Your location" value={value.location}
            onChange={handleLocationChange}/>
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
          isActive={value.activeWeather.sun}
          onPress={() => toggleWeather("sun")}
        />
        <WeatherButton
          icon={CloudHail}
          isActive={value.activeWeather.hail}
          onPress={() => toggleWeather("hail")}
        />
        <WeatherButton
          icon={CloudLightning}
          isActive={value.activeWeather.lightning}
          onPress={() => toggleWeather("lightning")}
        />
        <WeatherButton
          icon={CloudSnow}
          isActive={value.activeWeather.snow}
          onPress={() => toggleWeather("snow")}
        />
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    borderRadius: 50,
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
