import { StyleSheet } from "react-native";
import { Button, View, Text, Card, HStack, Divider, Spinner, Center } from "../../components";
import { useState } from "react";

export default function apiDemo() {
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

  const callAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.pirateweather.net/forecast/o2JX1CJNqVy8YcKqxTZRBDqKqc93Ozs7/53.076016%2C8.799679'); // replace with your API endpoint
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

  return (
    <View style={styles.container}>
      <Card p="$5" m="$5" width="90%" >
        {Object.entries(data).map(([key, value], index) => (
          <View key={index}>
            <HStack space="md" justifyContent="space-between">
              <Text color="black" fontWeight="$medium" >{key}</Text>
              <Text color="black" justifyContent="space-between">{value}</Text>
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
      <Button action="primary" size="lg" rounded="$full" hardShadow="1" onPress={callAPI}>
        <Text color="$light100" >Get</Text>
      </Button>
    </View>
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
