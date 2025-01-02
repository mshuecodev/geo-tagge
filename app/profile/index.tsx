import { useRouter } from "expo-router"
import { View, Text, Button } from "react-native"

export default function ProfileScreen() {
	const router = useRouter()

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Profile Screen</Text>
			<Button
				title="Go to Settings"
				onPress={() => router.push("/profile/settings")}
			/>
		</View>
	)
}
