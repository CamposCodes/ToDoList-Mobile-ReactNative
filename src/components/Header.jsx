import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
        <Text style={styles.title}>My to-do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
  },
});
