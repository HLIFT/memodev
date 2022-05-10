import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";

const ScreenContainer = ({children}: React.ComponentProps<any>) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeContainer}>
                {children}
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5E60CE',
        flex: 1
    },
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ScreenContainer
