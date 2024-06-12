const dummyData: string[] = ["Aufgabe 1", "Aufgabe 2"];
import { StyleSheet } from "react-native";
import PlannedRoutineAccordion from "@/custom-components/plannedRoutineAccordion";
import PageView from "@/custom-components/templates";
import { PlannedReminderDummyData } from "@/types/reminder";
import { useState } from "react";
import { Alert } from "react-native";
import {
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
  Box,
  Button,
  ScrollView,
  Text
} from "./../../components";

export default function TabOneScreen() {
  const [routines, setRoutines] = useState(PlannedReminderDummyData);

  const handleSwitchToggle = (index: number) => {
    // Use the map function to create a new array of routines with the updated isActive value
    const updatedRoutines = routines.map((routine, i) =>
      // Check if the current routine's index matches the index of the toggled switch
      i === index ? { ...routine, isActive: !routine.isActive } : routine
    );
    // Update the state with the new array of routines
    setRoutines(updatedRoutines);
  };
  const handleDeleteRoutine = (index: number) => {
    Alert.alert(
      "Delete Routine",
      "Are you sure you want to delete this routine?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const updatedRoutines = routines.filter((_, i) => i !== index);
            setRoutines(updatedRoutines);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <PageView>
      <Box pt="$5">
        <Heading size={"2xl"}>Remind Me</Heading>
      </Box>
      <Box pt="$5" flex={1}>
        <Heading size={"lg"}>My Routines</Heading>
        <ScrollView style={{ flexGrow: 1}}>
          {routines?.map((routine, index) => {
            return (
              <PlannedRoutineAccordion
                key={index}
                routine={routine}
                routineIndex={index}
                handleSwitchToggle={() => handleSwitchToggle(index)}
                handleDeleteRoutine={() => handleDeleteRoutine(index)}
              />
            );
          })}
        </ScrollView>
      </Box>
      <Box pt="$4">
        <Button
          action="primary"
          variant="solid"
          size="md"
          onPress={() => {
            console.log('Button new Routine Pressed');
          }}
        >
          <Text bg="black">Create New Routine</Text>
        </Button>
      </Box>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
