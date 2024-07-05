import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";
import {
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView>
      <Text>
        This is login
      </Text>
    </SafeAreaView>
  )
}