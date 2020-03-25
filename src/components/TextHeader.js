import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../utils/theme";

const TextHeader = ({ style, children }) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: theme.colors.font,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor:theme.colors.primary

  }
});

export default TextHeader;
