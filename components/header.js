import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Size from '../consts/size';

import { AntDesign } from '@expo/vector-icons';

const headerHeight = Size.statusBarHeight * 2.5;

const handlePressBackButton = () => {
    alert("You press back button!");
}

const handlePressInfoButton = () => {
    alert("You press info button!");
}

const header = () => {
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => handlePressBackButton()}>
                <AntDesign name="arrowleft" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePressInfoButton()}>
                <AntDesign name="appstore1" size={24} color="gray" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: headerHeight,
        marginLeft: Size.screenWidth * 0.05,
        marginRight: Size.screenWidth * 0.05,
    }
})

export default header;