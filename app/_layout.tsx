import { Stack } from "expo-router";
import React, { useState, useRef } from "react";
import { View, Animated, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Sidebar from "../components/Sidebar";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const [open, setOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-260)).current;

  const openSidebar = () => {
    setOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: -260,
      duration: 250,
      useNativeDriver: false,
    }).start(() => setOpen(false));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Navigation Stack */}
      <Stack
        screenOptions={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={26}
              style={{ marginLeft: 1 }}
              onPress={openSidebar}
            />
          ),
          headerTitle: "Medication Reminder",
          headerStyle: {

            backgroundColor: "#1c8648ff", // <-- Change header background color here
          },
          headerTintColor: "#fff", // Optional: change title and icons color
        }}
      />

      {/* Background overlay */}
      {open && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebarContainer, { left: slideAnim }]}>
        <Sidebar onClose={closeSidebar} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 260,
    zIndex: 20,
    backgroundColor: "#010377ff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 10,
  },
});
