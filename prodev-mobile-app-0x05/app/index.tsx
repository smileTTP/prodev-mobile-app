import { ImageBackground, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
          >
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>The best prices for over 2 </Text>
                <Text style={styles.titleSubText}>million properties worldwide</Text>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <Link  href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>Join here</Text>
              </TouchableOpacity>
              </Link>

              <Link  href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
              </Link>
          </View>
          <View style={{ alignItems: "center", paddingVertical: 20 }}>
            <Text style={{ color: "white" }}>Continue to home</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}