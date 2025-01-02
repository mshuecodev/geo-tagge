import { useRouter } from "expo-router"
import { View, Text, Button } from "react-native"

export default function HomeScreen() {
	const router = useRouter()

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => router.push("/home/details")}
			/>
			<Button
				title="Go to Maps"
				onPress={() => router.push("/home/basicmap")}
			/>
		</View>
	)
}
