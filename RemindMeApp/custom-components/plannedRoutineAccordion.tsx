import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  Box,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  HStack,
  Icon,
  SunIcon,
  Switch,
  Text,
  TrashIcon,
  VStack,
  View,
} from "@/components";
import { RoutineDbCall } from "@/types/routine";
import React from "react";
import ChooseTime from "./chooseTime";
import ChooseDays from "./chooseDays";

type PlannedRoutineAccordionProps = {
  routine: RoutineDbCall;
  handleSwitchToggle: (index: string) => void;
  handleDeleteRoutine: (index: string) => void;
};

export default function PlannedRoutineAccordion(
  props: PlannedRoutineAccordionProps
) {
  const { routine, handleSwitchToggle, handleDeleteRoutine } =
    props;

  const hours = routine.routineData.repeat.date
    .getHours()
    .toString()
    .padStart(2, "0");
  const minutes = routine.routineData.repeat.date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const tag = String(routine.routineData.repeat.date.getDate()).padStart(
    2,
    "0"
  );
  const monat = String(routine.routineData.repeat.date.getMonth() + 1).padStart(
    2,
    "0"
  ); // Monate sind nullbasiert
  const jahr = routine.routineData.repeat.date.getFullYear();

  const formatWeekdays = (days: { [key: string]: boolean }) => {
    return Object.keys(days)
      .filter((day) => days[day])
      .map((day) => day.substring(0, 2)) // Take first two letters as abbreviation
      .join(", ");
  };

  return (
    <View>
      <Accordion
        key={routine.id}
        m="$2.5"
        width="90%"
        size="md"
        variant="filled"
        type="single"
      >
        <AccordionItem value={routine.id.toString()}>
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                const statefulColor = routine.routineData.isActive
                  ? "black"
                  : "grey";
                return (
                  <>
                    {/* <Icon as={routine.routineData.icon} mr="$1.5" color={statefulColor} /> */}
                    <AccordionTitleText color={statefulColor}>
                      {routine.routineData.message}
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} color={statefulColor} />
                    ) : (
                      <AccordionIcon
                        as={ChevronDownIcon}
                        color={statefulColor}
                      />
                    )}
                    <Switch
                      size="sm"
                      value={routine.routineData.isActive}
                      onToggle={() =>
                        handleSwitchToggle(routine.id)
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
              <HStack
                justifyContent="space-between"
                space="sm"
                flexDirection="column"
              >
                <HStack justifyContent="space-between">
                  {/* Time and Weekdays */}
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    space="sm"
                  >
                    <HStack alignItems="center" space="sm">
                      <Text>{routine.routineData.repeat.frequency}</Text>
                      <Icon as={ClockIcon} size="sm" color="black" />
                      <Box
                        paddingBottom={"$2"}
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        {routine.routineData.repeat.frequency === "daily" && (
                          <Box>
                            <ChooseTime
                              showDateButton={false}
                              showTimeButton={false}
                              value={routine.routineData.repeat}
                              setValue={() => {}}
                            />
                          </Box>
                        )}

                        {routine.routineData.repeat.frequency === "weekly" && (
                          <Box>
                            <Box paddingBottom={"$2"}>
                              <ChooseDays
                                value={routine.routineData.repeat}
                                setValue={()=>{}}
                              />
                            </Box>
                            <Box>
                              <ChooseTime
                                showDateButton={false}
                                showTimeButton={false}
                                value={routine.routineData.repeat}
                                setValue={() => {}}
                              />
                            </Box>
                          </Box>
                        )}

                        {routine.routineData.repeat.frequency === "monthly" && (
                          <Box paddingBottom={"$2"}>
                            <Box>
                              <ChooseTime
                                showDateButton={true}
                                showTimeButton={true}
                                value={routine.routineData.repeat}
                                setValue={() => {}}
                              />
                            </Box>
                          </Box>
                        )}

                        {routine.routineData.repeat.frequency === "yearly" && (
                          <Box>
                            <ChooseTime
                              showDateButton={true}
                              showTimeButton={true}
                              value={routine.routineData.repeat}
                              setValue={() => {}}
                            />
                          </Box>
                        )}
                      </Box>
                      <HStack flexDirection="column">
                        <Text>
                          {/* ToDO fix join! => ", "*/}
                          {hours + ":" + minutes}
                        </Text>
                        <Text>
                          {
                            /* formatWeekdays */ routine.routineData.repeat.date.getDay()
                          }
                        </Text>
                      </HStack>
                    </HStack>
                  </HStack>
                  {/* Trash Icon */}
                  <HStack
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    space="sm"
                  >
                    <Button
                      variant="link"
                      onPress={() => handleDeleteRoutine(routine.id)}
                    >
                      <Icon as={TrashIcon} color="red" />
                    </Button>
                  </HStack>
                </HStack>

                {/* Weather Section */}
                <HStack justifyContent="space-between">
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    space="sm"
                  >
                    <HStack alignItems="center" space="sm">
                      <Icon as={SunIcon} size="sm" color="black" />
                      <HStack flexDirection="column">
                        {/* ToDo: show conditions? */}
                        {/* <Text>
                          {routine.routineData.weather.activeWeather.hail }
                        </Text> */}
                        {/* Temperature Section */}
                        <Text>
                          {routine.routineData.temperature.activeButtons
                            ? "min"
                            : "max"}{" "}
                          {routine.routineData.temperature.temp}°C
                        </Text>
                      </HStack>
                    </HStack>
                  </HStack>
                </HStack>
              </HStack>
            </VStack>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
