import { useNavigation } from "expo-router";
import { Button } from "react-native";
import {
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

export default function HomeScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Button
      title="go to profile"
      onPress={() => navigation.navigate("Profile")}
    />
  )
}