import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function PricingScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HERO IMAGE */}
      <Image
        source={require('@/assets/images/medicine.jpg')}
        style={styles.heroImage}
      />

      {/* HEADER */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Our <Text style={{ color: "#0056ff" }}>Pricing.</Text>
        </Text>

        <Text style={styles.paragraph}>
          Choose a plan that fits your needs. Transparent pricing with no
          hidden fees — just real value for your business.
        </Text>
      </View>

      {/* PRICING CARDS */}
      <View style={styles.cardsWrapper}>

        {/* BASIC PLAN */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Basic</Text>
          <Text style={styles.price}>$9.99<Text style={styles.per}>/mo</Text></Text>
          <Text style={styles.cardDesc}>Perfect for individuals and small teams just getting started.</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>• 5 Projects</Text>
            <Text style={styles.listItem}>• Email support</Text>
            <Text style={styles.listItem}>• Basic analytics</Text>
          </View>

          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Choose plan</Text>
          </TouchableOpacity>
        </View>

        {/* PRO PLAN */}
        <View style={[styles.card, styles.cardFeatured]}>
          <Text style={[styles.cardTitle, { color: "#0056ff" }]}>Pro</Text>
          <Text style={styles.price}>$29.99<Text style={styles.per}>/mo</Text></Text>
          <Text style={styles.cardDesc}>Great for growing teams looking to scale their operations.</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>• Unlimited Projects</Text>
            <Text style={styles.listItem}>• Priority support</Text>
            <Text style={styles.listItem}>• Advanced analytics</Text>
            <Text style={styles.listItem}>• Custom automations</Text>
          </View>

          <TouchableOpacity style={[styles.cardButton, { backgroundColor: "#0056ff" }]}>
            <Text style={[styles.cardButtonText, { color: "#fff" }]}>Choose plan</Text>
          </TouchableOpacity>
        </View>

        {/* ENTERPRISE PLAN */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Enterprise</Text>
          <Text style={styles.price}>$99.99<Text style={styles.per}>/mo</Text></Text>
          <Text style={styles.cardDesc}>For large companies needing full-feature solutions.</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>• All Pro features</Text>
            <Text style={styles.listItem}>• Dedicated manager</Text>
            <Text style={styles.listItem}>• Custom integrations</Text>
          </View>

          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Contact us</Text>
          </TouchableOpacity>
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
  },

  cardFeatured: {
    borderColor: "#0056ff",
    borderWidth: 2,
    backgroundColor: "#f3f7ff",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  price: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
    color: "#111",
  },

  per: {
    fontSize: 18,
    color: "#777",
  },

  cardDesc: {
    fontSize: 15,
    color: "#555",
    marginBottom: 15,
  },

  list: {
    marginBottom: 15,
  },

  listItem: {
    fontSize: 15,
    paddingVertical: 3,
    color: "#444",
  },

  cardButton: {
    borderWidth: 1,
    borderColor: "#0056ff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  cardButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0056ff",
  },
});
