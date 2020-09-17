import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Size from '../consts/size';

const imgWidth = Size.screenWidth * 0.45;

const handlePressImage = (item) => {
    alert(`you press image ${item.id}, bro!`)
}

const renderImage = (item) => {
    const imageSize = Image.resolveAssetSource(item.imgSource);
    const newImageSize = {
        width: imgWidth,
        height: imgWidth * imageSize.height / imageSize.width
    }
    return (
        <TouchableOpacity onPress={() => handlePressImage(item)}>
            <Image key={item.id} source={item.imgSource} style={{
                width: newImageSize.width,
                height: newImageSize.height,
                borderRadius: 10,
                marginBottom: 5
            }} />
        </TouchableOpacity>
    );
}

const Images = (props) => {
    const centerImgData = Math.floor(props.imgData.length / 2);
    const firstColumn = props.imgData.slice(0, centerImgData).map(item => {
        return renderImage(item);
    })

    const secondColumn = props.imgData.slice(centerImgData).map(item => {
        return renderImage(item);
    })
    return (
        <View style={styles.imagesWrapper}>
            <View style={styles.imagesFirstColumn}>
                {firstColumn}
            </View>
            <View style={styles.imagesSecondColumn}>
                {secondColumn}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imagesFirstColumn: {
        flex: 3,
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: Size.screenWidth * 0.01
    },
    imagesSecondColumn: {
        flex: 3,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: Size.screenWidth * 0.01
    }
})

export default Images;