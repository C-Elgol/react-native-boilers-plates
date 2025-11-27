// app/(auth)/forgot-password.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <Image source={require('@/assets/images/medicine.jpg')} style={styles.hero} />

      <View style={styles.header}>
        <Text style={styles.title}>Reset <Text style={{ color: "#0056ff" }}>Password</Text></Text>
        <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },

  hero: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
  },

  header: {
    padding: 20,
    marginTop: 5,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: "#555",
  },

  card: {
    marginTop: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    elevation: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#000",
  },

  linkRow: {
    alignItems: "flex-end",
    marginBottom: 10,
  },

  forgot: {
    color: "#0056ff",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#0056ff",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },

  bottomRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },

  bottomText: {
    color: "#444",
  },

  signup: {
    color: "#0056ff",
    fontWeight: "700",
  },
});