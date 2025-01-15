import { useRouter, useRootNavigationState } from "expo-router"
import { useEffect } from "react"
import { View, ActivityIndicator } from "react-native"

export default function IndexRedirect() {
	const router = useRouter()
	const rootNavigationState = useRootNavigationState()

	useEffect(() => {
		if (rootNavigationState?.key) {
			// Redirect to the "home" route once the navigation is ready
			router.replace("/home")
		}
	}, [rootNavigationState?.key])

	if (!rootNavigationState?.key) {
		// Render a loading indicator while waiting for navigation to be ready
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#25292e"
				}}
			>
				<ActivityIndicator
					size="large"
					color="#ffd33d"
				/>
			</View>
		)
	}

	return null
}
