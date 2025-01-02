import React from "react"
import { StyleSheet, View } from "react-native"
import Mapbox from "@rnmapbox/maps"

Mapbox.setAccessToken("sk.eyJ1IjoibWlzbjAzIiwiYSI6ImNsczFvNXJyOTBjeG0ybm8zbGRmM3gxNzkifQ.BmmF9FtCpmpMzNBbx-PPeQ")

const BasicMap = () => {
	return (
		<View style={styles.page}>
			<View style={styles.container}>
				<Mapbox.MapView style={styles.map} />
			</View>
		</View>
	)
}

export default BasicMap

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	container: {
		height: 300,
		width: 300
	},
	map: {
		flex: 1
	}
})
