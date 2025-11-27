import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.header}>Menu</Text>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.item} onPress={onClose}>
          <Ionicons name="home-outline" size={22} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/about" asChild>
        <TouchableOpacity style={styles.item} onPress={onClose}>
          <Ionicons name="information-circle-outline" size={22} />
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/services" asChild>
        <TouchableOpacity style={styles.item} onPress={onClose}>
          <Ionicons name="briefcase-outline" size={22} />
          <Text style={styles.text}>Services</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pricing" asChild>
        <TouchableOpacity style={styles.item} onPress={onClose}>
          <Ionicons name="pricetag-outline" size={22} />
          <Text style={styles.text}>Pricing</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/contact" asChild>
        <TouchableOpacity style={styles.item} onPress={onClose}>
          <Ionicons name="call-outline" size={22} />
          <Text style={styles.text}>Contact</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 260,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: "#eaeaea",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
  },
});
