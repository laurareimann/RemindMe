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
  Icon,
  VStack,
  SunIcon,
  ClockIcon,
  ScrollView,
  Button,
  TrashIcon,
} from "./../../components";
import { PlannedReminderDummyData } from "@/types/reminder";
import { useState } from "react";
import PageView from "@/custom-components/templates";
import { Alert } from "react-native";
import PlannedRoutineAccordion from "@/custom-components/plannedRoutineAccordion";

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
      <Box pt="$5">
        <Heading size={"lg"}>My Routines</Heading>
        <ScrollView style={{ flexGrow: 1/* , backgroundColor: "red" */ }}>
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
      {/* Why does this not appear */}
      <Box>
        <Heading size={"lg"}>where button?!</Heading>
        <Button>
          <Text>test</Text>
        </Button>
      </Box>
    </PageView>
  );
}
