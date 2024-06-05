import { StyleSheet } from "react-native";
import {
  Box,
  View,
  Text,
  Switch,
  HStack,
  Heading,
  Accordion,
  ChevronUpIcon,
  ChevronDownIcon,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
  AccordionTitleText,
  AccordionTrigger,
} from "./../../components";

const dummyData: string[] = ["Aufgabe 1", "Aufgabe 2"];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Box>
        <Heading size={"2xl"}>My Reminder</Heading>
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