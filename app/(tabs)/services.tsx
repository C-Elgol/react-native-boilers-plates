import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HERO IMAGE */}
      {/* <Image
        source={require('@/assets/images/medicine.jpg')}
        style={styles.heroImage}
      /> */}

      {/* HEADER */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Our <Text style={{ color: "#0056ff" }}>Services.</Text>
        </Text>

        <Text style={styles.paragraph}>
          We provide solutions designed to transform customer experiences,
          streamline operations, and enhance digital growth.
        </Text>
      </View>

      {/* SERVICES LIST */}
      <View style={styles.servicesWrapper}>

        {/* SERVICE CARD */}
        <View style={styles.serviceCard}>
          <Ionicons name="construct-outline" size={32} color="#0056ff" />
          <Text style={styles.serviceTitle}>Digital Strategy</Text>
          <Text style={styles.serviceDesc}>
            We help you define clear digital objectives and develop scalable strategies.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="brush-outline" size={32} color="#0056ff" />
          <Text style={styles.serviceTitle}>UI / UX Design</Text>
          <Text style={styles.serviceDesc}>
            Clean, modern, user-centered interfaces that improve conversions.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="code-slash-outline" size={32} color="#0056ff" />
          <Text style={styles.serviceTitle}>Software Development</Text>
          <Text style={styles.serviceDesc}>
            Custom apps and platforms built with modern, scalable technologies.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="stats-chart-outline" size={32} color="#0056ff" />
          <Text style={styles.serviceTitle}>Data & Analytics</Text>
          <Text style={styles.serviceDesc}>
            Transform raw data into meaningful insights you can act on.
          </Text>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },

  heroImage: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
  },

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

  servicesWrapper: {
    padding: 20,
  },

  serviceCard: {
    backgroundColor: "#f7f9fc",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e9eef7",
  },

  serviceTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 8,
    color: "#111",
  },

  serviceDesc: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});
