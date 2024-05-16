import { StyleSheet } from "react-native";
import { Box, View, Text, Switch, HStack } from "./../../components";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Box bg="$primary500" p="$5"><Switch size="md" isDisabled={false} />
        <HStack space="md" reversed={false} >
          <Text color="white" >This is the Box</Text>
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
});
