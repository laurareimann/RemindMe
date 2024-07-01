import PageView from "@/custom-components/templates";
import * as Location from 'expo-location';
import { Heading, LocateFixed } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Button, ButtonIcon, Card, Center, Divider, HStack, Input, InputField, InputIcon, InputSlot, Spinner, Text, View } from "../../components";


export default function TabTwoScreen() {
  const placeholderData = {
    "Summary": "Clear",
    "Preciptation Probability": 0.0,
    "Precipation Type": "none",
    "Temperature": 0,
    "Humidity": 0,
    "Wind Speed": 0,
    "UV Index": 0
  }

  const [data, setData] = useState(placeholderData)
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [statusMsg, setStatusMsg] = useState('Your Location');

  const getLocation = async () => {
    setStatusMsg('Getting location...');

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setStatusMsg('Permission error!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    await callAPI(location.coords.latitude, location.coords.longitude);  // Pass coordinates to callAPI
    setStatusMsg('Success!');
    console.log(location);
  };

  const callAPI = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.pirateweather.net/forecast/o2JX1CJNqVy8YcKqxTZRBDqKqc93Ozs7/${latitude},${longitude}`); // Updated to use passed coordinates
      const json = await response.json();
      setData({
        "Summary": json.currently.summary,
        "Preciptation Probability": json.currently.precipProbability,
        "Precipation Type": json.currently.precipType,
        "Temperature": json.currently.temperature,
        "Humidity": json.currently.humidity,
        "Wind Speed": json.currently.windSpeed,
        "UV Index": json.currently.uvIndex
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // convert Weather data to usable/readable values
  const convertToCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1) + "°C";
  };

  const convertUVIndex = (uvIndex: number) => {
    if (uvIndex < 3) return 'low';
    if (uvIndex < 6) return 'moderate';
    if (uvIndex < 9) return 'high';
    return 'very high';
  };

  const convertToPercent = (humidity: number) => {
    return `${(humidity * 100).toFixed(0)}%`;
  };

  const convertWindSpeed = (mph: number) => {
    return `${(mph * 1.60934).toFixed(1)} km/h`;
  };

  return (
    <PageView>
      <View style={styles.container}>
        <Card p="$10" m="$5">
          {Object.entries(data).map(([key, value], index) => (
            <View key={index}>
              <HStack space="lg" justifyContent="space-between">
                <Text color="black" fontWeight="$medium" >{key}</Text>
                <Text color="black" justifyContent="space-between">
                  {key === "Temperature" ? convertToCelsius(Number(value)) :
                    key === "UV Index" ? convertUVIndex(Number(value)) :
                      key === "Humidity" ? convertToPercent(Number(value)) :
                        key === "Wind Speed" ? convertWindSpeed(Number(value)) :
                          key === "Preciptation Probability" ? convertToPercent(Number(value)) : value}
                </Text>
              </HStack>
              {index !== Object.keys(data).length - 1 &&
                <Divider my="$3" bgColor="$borderLight100" />
              }
            </View>
          ))}
          {loading &&
            <Center rounded="$xl" style={styles.loadAnimation}>
              <Spinner size="large" ></Spinner>
            </Center>
          }
        </Card>

        <Box paddingBottom={"$2"} flexDirection="row" justifyContent="space-between">
          <Input width="75%">
            <InputField
              placeholder={statusMsg}
              value={location ? `${location.coords.latitude}, ${location.coords.longitude}` : ''} />
            <InputSlot>
              <InputIcon>
                <LocateFixed />
              </InputIcon>
            </InputSlot>
          </Input>
          <Button width="5%" marginStart={8} onPress={getLocation}>
            <ButtonIcon as={LocateFixed} color="white" />
          </Button>
        </Box>
      </View>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadAnimation: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
});
