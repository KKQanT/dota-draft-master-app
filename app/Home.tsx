import { useNavigation } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import {
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 18, marginBottom: 8, alignSelf: "center"}}>
          Input current drafted heroes with
        </Text>
      </View>
      <View style={styles.deviceSelectionContainer}>
        <View>
          <TouchableHighlight style={styles.deviceWrapper}>
            <Ionicons name="camera" size={172} style={styles.icon} />
          </TouchableHighlight>
          <Text style={{color: "white", marginTop: 8}}>
            Screenshot drafting sceen!
          </Text>
        </View>
        <Text style={{ color: "white" }}>
          Or
        </Text>
        <View>
          <TouchableHighlight style={styles.deviceWrapper}>
            <Ionicons name="mic" size={172} style={styles.icon} />
          </TouchableHighlight>
          <Text style={{color: "white", marginTop: 8, alignSelf: "center"}}>
            Just tell using voice!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },

  text: {
    color: "white"
  },

  deviceSelectionContainer: {
    width: "80%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  deviceWrapper: {
    justifyContent: "center",
    alignContent: "center",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "dashed"
  },

  icon: {
    color: "white"
  },

  header: {
    width: "90%",
    padding: 20
  }
})