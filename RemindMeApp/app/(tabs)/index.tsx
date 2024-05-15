import { StyleSheet } from "react-native";
import { Box, View, Text, Switch, HStack } from "./../../components";
import { CalendarDaysIcon } from "lucide-react-native";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Box bg="$primary500" p="$5"><Switch size="md" isDisabled={false} />
        <HStack space="md" reversed={false} >
          <Text color="white">This is the Box</Text>
        </HStack>
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
