import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
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
  View
} from "@/components";
import { RoutinePlanned } from "@/types/routine";
import React from "react";

type PlannedRoutineAccordionProps = {
  routine: RoutinePlanned;
  routineIndex: number;
  handleSwitchToggle: (index: number) => void;
  handleDeleteRoutine: (index: number) => void;
};

export default function PlannedRoutineAccordion(
  props: PlannedRoutineAccordionProps
) {
  const { routineIndex, routine, handleSwitchToggle, handleDeleteRoutine } =
    props;

  const formatWeekdays = (days: { [key: string]: boolean }) => {
    return Object.keys(days)
      .filter((day) => days[day])
      .map((day) => day.substring(0, 2)) // Take first two letters as abbreviation
      .join(", ");
  };

  return (
    <View>
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
              <HStack justifyContent="space-between" space="sm" flexDirection="column">
                <HStack justifyContent="space-between">
                  {/* Time and Weekdays */}
                  <HStack justifyContent="space-between" alignItems="center" space="sm">
                    <HStack alignItems="center" space="sm">
                      <Icon as={ClockIcon} size="sm" color="black" />
                      <HStack flexDirection="column">
                        <Text>
                          {Array.isArray(routine.Repeats.time)
                            ? routine.Repeats.time.join(", ")
                            : routine.Repeats.time}
                        </Text>
                        <Text>
                          {formatWeekdays(routine.Repeats.days)}
                        </Text>
                      </HStack>
                    </HStack>
                  </HStack>
                  {/* Trash Icon */}
                  <HStack justifyContent="flex-end" alignItems="flex-start" space="sm">
                    <Button variant="link" onPress={() => handleDeleteRoutine(routineIndex)}>
                      <Icon as={TrashIcon} color="red" />
                    </Button>
                  </HStack>
                </HStack>

                {/* Weather Section */}
                <HStack justifyContent="space-between">
                  <HStack justifyContent="space-between" alignItems="center" space="sm">
                    <HStack alignItems="center" space="sm">
                      <Icon as={SunIcon} size="sm" color="black" />
                      <HStack flexDirection="column">
                        <Text>
                          {Array.isArray(routine.weather.weatherConditions)
                            ? routine.weather.weatherConditions.join(", ")
                            : routine.weather.weatherConditions}
                        </Text>
                        {/* Temperature Section */}
                        <Text>
                          {routine.temperature.isMin ? "min" : "max"}{" "}
                          {routine.temperature.celsius}°C
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
