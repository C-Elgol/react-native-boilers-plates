import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';  

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HERO IMAGE */}
      <Image
        source={require('@/assets/images/medicine.jpg')}
        style={styles.heroImage}
      />


      {/* ABOUT SECTION */}
      <View style={styles.section}>
        <Text style={styles.title}>
          About <Text style={{ color: "#0056ff" }}>us.</Text>
        </Text>

        <Text style={styles.paragraph}>
          We're on a mission to add relevancy to everys online experience by
          creating solutions that connect people, ideas, and technology.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Link href="/"style={styles.buttonText}>Learn more</Link>
        </TouchableOpacity>
        {/* <Link href="/about" style={styles.button}>
                Go to About screens
              </Link> */}
      </View>

      {/* PURPOSE SECTION */}
      <View style={styles.section}>
        <Text style={styles.title}>Our purpose</Text>

        <Text style={styles.paragraph}>
          Many brandsdw are using personalisation to build better customer
          journeys, but we believe it takes more than personalisation to build
          truly unforgettable digital experiences.
        </Text>

        <Text style={styles.paragraph}>
          Many brands are using personalisation to build better customer
          journeys, but we believe it takes more than personalisation to build
          truly unforgettable digital experiences.
        </Text>

        <Text style={styles.paragraph}>
          Many brands are using personalisation to build better customer
          journeys, but we believe it takes more than personalisation to build
          truly unforgettable digital experiences.
        </Text>

        <Text style={styles.paragraph}>
          Many brands are using personalisation to build better customer
          journeys, but we believe it takes more than personalisation to build
          truly unforgettable digital experiences.
        </Text>

        <Text style={styles.paragraph}>
          That’s why we’re committed to delivering meaningful interactions that
          matter — from awareness to conversion and beyond.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  heroImage: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginBottom: 15,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#0056ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
});
