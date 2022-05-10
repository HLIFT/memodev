import {Platform, SafeAreaView, StatusBar, Text} from "react-native";
import React from "react";

const ScreenContainer = ({children}: React.ComponentProps<any>) => {
    return (
        <SafeAreaView style={{backgroundColor: 'red', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            {children}
        </SafeAreaView>
    )
}

export default ScreenContainer
