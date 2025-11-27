// app/(tabs)/contact.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    Alert.alert('Message envoyé', 'Merci pour votre message !');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Contactez <Text style={{ color: "#0056ff" }}>Nous</Text>
        </Text>
        <Text style={styles.paragraph}>
          Nous serions ravis de répondre à vos questions ou suggestions.
        </Text>
      </View>

      {/* CONTACT INFO CARDS */}
      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={24} color="#0056ff" />
            <Text style={styles.infoText}>+237 699 123 456</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={24} color="#0056ff" />
            <Text style={styles.infoText}>contact@mycompany.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={24} color="#0056ff" />
            <Text style={styles.infoText}>Bafoussam, Cameroun</Text>
          </View>
        </View>
      </View>

      {/* CONTACT FORM */}
      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Votre nom"
            style={styles.input}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Votre email"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Votre message"
            multiline
            numberOfLines={5}
            style={[styles.input, styles.textArea]}
          />

          <TouchableOpacity style={styles.cardButton} onPress={handleSubmit}>
            <Text style={styles.cardButtonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },

  section: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 12,
  },

  paragraph: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
  },

  cardsWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  infoText: {
    fontSize: 16,
    color: "#444",
    marginLeft: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111",
    marginBottom: 15,
  },

  textArea: {
    height: 120,
    textAlignVertical: "top",
  },

  cardButton: {
    backgroundColor: "#0056ff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  cardButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
