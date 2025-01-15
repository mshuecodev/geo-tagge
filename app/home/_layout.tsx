import { Stack } from "expo-router"

export default function HomeLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#25292e"
				},
				headerTintColor: "#fff",
				headerShadowVisible: false,
				headerShown: false
			}}
		>
			<Stack.Screen
				name="home"
				options={{ title: "Home" }}
			/>
		</Stack>
	)
}
