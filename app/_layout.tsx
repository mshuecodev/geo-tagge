import { Tabs } from "expo-router"

import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#ffd33d",
				headerStyle: {
					backgroundColor: "#25292e"
				},
				headerShadowVisible: false,
				headerTintColor: "#fff",
				tabBarStyle: {
					backgroundColor: "#25292e"
				}
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							color={color}
							size={24}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "information-circle" : "information-circle-outline"}
							color={color}
							size={24}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					href: null // Hides the index route from appearing as a tab
				}}
			/>
		</Tabs>
	)
}
