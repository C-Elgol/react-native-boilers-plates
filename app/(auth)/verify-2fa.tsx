import { useLocalSearchParams, Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

export default function Verify2FAScreen() {
  const { email } = useLocalSearchParams();
  const router = useRouter();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    if (!code) {
      setMessage("Enter the 6-digit code");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`http://10.245.37.105:8000/api/auth/verify-2fa/${email}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage("Verification successful!");
        router.replace("/login");
      } else {
        setMessage(data?.detail || "Invalid code. Try again.");
      }
    } catch (error) {
      setMessage("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit verification code sent to:
      </Text>
      <Text style={styles.email}>{email}</Text>

      <TextInput
        placeholder="6-digit code"
        keyboardType="number-pad"
        maxLength={6}
        style={styles.input}
        value={code}
        onChangeText={setCode}
      />

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleVerify} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Verify</Text>}
      </TouchableOpacity>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Didn't receive the code?</Text>
        <Link href={`./resend-code?email=${email}`} style={styles.resend}> Resend</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 5,
  },
  subtitle: {
    color: "#666",
    marginBottom: 3,
  },
  email: {
    fontWeight: "700",
    marginBottom: 25,
    color: "#0056ff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    color: "red",
    marginBottom: 10,
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
    fontSize: 18,
    fontWeight: "700",
  },
  bottomRow: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
  },
  bottomText: {
    color: "#444",
  },
  resend: {
    color: "#0056ff",
    fontWeight: "700",
  },
});
