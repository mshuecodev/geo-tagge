import { View, Text, Button } from "react-native"
import { useRouter } from "expo-router"

export default function DetailsScreen() {
	const router = useRouter()

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ color: "#fff", fontSize: 18 }}>Details Screen</Text>
			<Button
				title="Go Back"
				onPress={() => router.back()}
				color="#ffd33d"
			/>
		</View>
	)
}
