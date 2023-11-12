import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="screens/other">
        <Text className="font-Inter-bold">Goto Other</Text>
      </Link>
    </View>
  );
}
