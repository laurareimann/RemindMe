import { View, Text } from "react-native";
import React, { ReactElement, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Box } from "lucide-react-native";

type childrenAsProps = {
  children: ReactNode;
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    // Add more text styles if needed
  },
});

// Box - Align to the top and Items are centered
export default function PageView(props: childrenAsProps) {
  return <View style={styles.pageView}>{props.children}</View>;
}
