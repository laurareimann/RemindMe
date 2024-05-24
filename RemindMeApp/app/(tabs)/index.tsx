import { StyleSheet } from "react-native";
import { Box, View, Text, Switch, HStack } from "./../../components";
import { usePushNotifications } from "./../../usePushNotifications";


export default function TabOneScreen() {
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);
  return (
    <View style={styles.container}>
      <Text color="white">Token: {expoPushToken?.data == ""}</Text>
      <Text color="white">{data}</Text>
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
