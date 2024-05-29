import React from "react";
import { RoutinePlanned } from "@/types/reminder";
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
} from "@/components";

type PlannedRoutineAccordionProps = {
  key: number | string;
  routine: RoutinePlanned;
  routineIndex: number;
  handleSwitchToggle: (index: number) => void;
  handleDeleteRoutine: (index: number) => void;
};

export default function PlannedRoutineAccordion(
  props: PlannedRoutineAccordionProps
) {
  const { key, routineIndex, routine, handleSwitchToggle, handleDeleteRoutine } =
    props;
  return (
    <View key={key}>
      <Accordion
        key={routineIndex}
        m="$2.5"
        width="90%"
        size="md"
        variant="filled"
        type="single"
      >
        <AccordionItem value={routineIndex.toString()}>
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                const statefulColor = routine.isActive ? "black" : "grey";
                return (
                  <>
                    <Icon as={routine.icon} mr="$1.5" color={statefulColor} />
                    <AccordionTitleText color={statefulColor}>
                      {routine.message}
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
                      value={routine.isActive}
                      onToggle={() =>
                        handleSwitchToggle(routineIndex)
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
                <Button onPress={() => handleDeleteRoutine(routineIndex)}>
                  <Icon as={TrashIcon} color="red" />
                </Button>
                <Icon as={ClockIcon} size="sm" />
                <Text>
                  {Array.isArray(routine.Repeats.time)
                    ? routine.Repeats.time.join(", ")
                    : routine.Repeats.time}
                </Text>
              </HStack>
              <Text>
                {Object.keys(routine.Repeats.days)
                  .filter((day) => routine.Repeats.days[day])
                  .join(", ")}
              </Text>

              {/* Weather Section */}
              {/* Todo: ReWork this here */}
              <HStack alignItems="center" space="sm">
                <Icon as={SunIcon} size="sm" />
                <Text>
                  {Array.isArray(routine.weather.weatherConditions)
                    ? routine.weather.weatherConditions.join(", ")
                    : routine.weather.weatherConditions}
                </Text>
              </HStack>
              <Text>
                {routine.temperature.isMin ? "min" : "max"}{" "}
                {routine.temperature.celsius}°C
              </Text>
            </VStack>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
