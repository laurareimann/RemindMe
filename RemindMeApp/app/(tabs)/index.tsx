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
      <Box bg="$primary500" p="$5">
        {dummyData?.map((toDo, index) => {
          return (
            <Accordion m="$5" width="90%" size="md" variant="filled" type="single" isCollapsible={true} isDisabled={false} >
              <AccordionItem value="a">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            How do I place an order?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    To place an order, simply select the products you want, proceed to
                    checkout, provide shipping and payment information, and finalize
                    your purchase.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="b">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText>
                            What payment methods do you accept?
                          </AccordionTitleText>
                          {isExpanded ? (
                            <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                          ) : (
                            <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                          )}
                        </>
                      );
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    We accept all major credit cards, including Visa, Mastercard, and
                    American Express. We also support payments through PayPal.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
              </Accordion>
            );
        })}
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
