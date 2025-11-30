// app/(auth)/register.tsx
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
  Switch,
} from "react-native";
import { registerUser } from "../services/auth";

export default function RegisterScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // E.164 format
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!firstName || !lastName || !email || !phone || !address || !password || !passwordConfirm) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    if (!acceptedTerms) {
      Alert.alert("Terms Not Accepted", "You must accept the terms and conditions to register.");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("Password Mismatch", "Password and confirm password do not match.");
      return;
    }

    const data = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone_number: phone.trim(), // include country code, e.g., +237690123456
      address: address.trim(),
      password,
      password_confirm: passwordConfirm,
      has_accepted_terms: acceptedTerms,
    };

    setLoading(true);
    const result = await registerUser(data);
    setLoading(false);

    if (!result.success) {
      Alert.alert("Registration Failed", result.error);
      return;
    }

    Alert.alert(
      "Success",
      "Account created! A 6-digit verification code was sent to your email.",
      [
        {
          text: "Verify Now",
          onPress: () => router.push(`/verify-2fa?email=${email}`),
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Image source={require('@/assets/images/medicine.jpg')} style={styles.hero} />

      <View style={styles.header}>
        <Text style={styles.title}>
          Create <Text style={{ color: "#0056ff" }}>Account</Text>
        </Text>
        <Text style={styles.subtitle}>Join us and enjoy the experience</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="First Name"
          style={styles.input}
          placeholderTextColor="#777"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          placeholder="Last Name"
          style={styles.input}
          placeholderTextColor="#777"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Phone (+237...)"
          style={styles.input}
          placeholderTextColor="#777"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          placeholder="Address"
          style={styles.input}
          placeholderTextColor="#777"
          value={address}
          onChangeText={setAddress}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#777"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
        />

        <View style={styles.termsRow}>
          <Switch
            value={acceptedTerms}
            onValueChange={setAcceptedTerms}
            trackColor={{ false: "#ccc", true: "#0056ff" }}
            thumbColor="#fff"
          />
          <Text style={styles.termsText}>I accept the Terms and Conditions</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <Link href="/login" style={styles.signup}> Login</Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },
  hero: { width: "100%", height: 230, resizeMode: "cover" },
  header: { padding: 20, marginTop: 5 },
  title: { fontSize: 34, fontWeight: "800" },
  subtitle: { fontSize: 16, marginTop: 8, color: "#555" },
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
  termsRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  termsText: { marginLeft: 10, color: "#444" },
  button: { backgroundColor: "#0056ff", paddingVertical: 14, borderRadius: 10, marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 17, fontWeight: "700" },
  bottomRow: { flexDirection: "row", marginTop: 20, justifyContent: "center" },
  bottomText: { color: "#444" },
  signup: { color: "#0056ff", fontWeight: "700" },
});
