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
        <ScrollView style={{ flexGrow: 1}}>
          {routines?.map((toDo, index) => {
            return (
              <Accordion
                key={index}
                m="$2.5"
                width="90%"
                size="md"
                variant="filled"
                type="single"
              >
                <AccordionItem value={index.toString()}>
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        const statefulColor = toDo.isActive ? "black" : "grey";
                        return (
                          <>
                            <Icon
                              as={toDo.icon}
                              mr="$1.5"
                              color={statefulColor}
                            />
                            <AccordionTitleText color={statefulColor}>
                              {toDo.message}
                            </AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon
                                as={ChevronUpIcon}
                                color={statefulColor}
                              />
                            ) : (
                              <AccordionIcon
                                as={ChevronDownIcon}
                                color={statefulColor}
                              />
                            )}
                            <Switch
                              size="sm"
                              value={toDo.isActive}
                              onToggle={() =>
                                handleSwitchToggle(index)
                              } /* todo: onToggle={} ... manipulate isActive value */
                            />
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <VStack space="sm" p={3}>
                      {/* Repeats Section */}
                      {/* Todo: ReWork this here */}
                      <HStack alignItems="center" space="sm">
                        <Button onPress={() => handleDeleteRoutine(index)}>
                          <Icon as={TrashIcon} color="red" />
                        </Button>
                        <Icon as={ClockIcon} size="sm" />
                        <Text>
                          {Array.isArray(toDo.Repeats.time)
                            ? toDo.Repeats.time.join(", ")
                            : toDo.Repeats.time}
                        </Text>
                      </HStack>
                      <Text>
                        {Object.keys(toDo.Repeats.days)
                          .filter((day) => toDo.Repeats.days[day])
                          .join(", ")}
                      </Text>

                      {/* Weather Section */}
                      {/* Todo: ReWork this here */}
                      <HStack alignItems="center" space="sm">
                        <Icon as={SunIcon} size="sm" />
                        <Text>
                          {Array.isArray(toDo.weather.weatherConditions)
                            ? toDo.weather.weatherConditions.join(", ")
                            : toDo.weather.weatherConditions}
                        </Text>
                      </HStack>
                      <Text>
                        {toDo.temperature.isMin ? "min" : "max"}{" "}
                        {toDo.temperature.celsius}°C
                      </Text>
                    </VStack>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
