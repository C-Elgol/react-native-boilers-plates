// app/(auth)/login.tsx
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";

import { loginUser } from "../services/auth";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    const result = await loginUser(email.trim(), password);

    setLoading(false);

    if (!result.success) {
      Alert.alert("Login Failed", result.error);
      return;
    }

    // Token is in result.data.access
    // You can store it with SecureStore later

    Alert.alert("Success", "Login Successful!");

    router.push("/"); // redirect user to home/dashboard
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <Image source={require('@/assets/images/medicine.jpg')} style={styles.hero} />

      <View style={styles.header}>
        <Text style={styles.title}>Welcomes <Text style={{ color: "#0056ff" }}>Back</Text></Text>
        <Text style={styles.subtitle}>Login to continue using the app</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.linkRow}>
          <Link href="/forgot-password" style={styles.forgot}>Forgot Password?</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Don't have an account?</Text>
          <Link href="/register" style={styles.signup}> Register</Link>
        </View>

        <Link href="/" style={styles.home}> Home</Link>
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

  home: {
    color: "#0056ff",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
