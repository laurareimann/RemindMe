import { StyleSheet } from "react-native";
import { Card, View, Text } from "./../../components";
import { usePushNotifications } from "./../../usePushNotifications";

export default function TabOneScreen() {
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);

  return (
    <View style={styles.container}>
      <Card p="$5">
        <Text>Token: {expoPushToken?.data ?? ""}</Text>
        <Text>Notification: {data}</Text>
      </Card>
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
