import React, { ReactElement, ReactNode } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Box } from "lucide-react-native";

type childrenAsProps = {
  children: ReactNode;
  style?: ViewStyle; // Optional style props
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingBottom: 32,
  },
  text: {
    fontSize: 20,
    // Add more text styles if needed
  },
});

// Box - Align to the top and Items are centered
export default function PageView({ children, style }: childrenAsProps) {
  return <View style={StyleSheet.compose(styles.pageView, style)}>{children}</View>;
}
