import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Size from '../consts/size';
import * as Color from '../consts/color';

const profileWidth = Size.screenWidth * 0.8;
const avatarPart = 2.2;
const infoPart = 3.8;
const avatarWidth = profileWidth * (avatarPart / 6);
const avatarHeight = avatarWidth;
const infoWidth = profileWidth * (infoPart / 6);
const infoHeight = avatarHeight;

const handlePressFollowButton = () => {
    alert("You press follow button!");
};

const hanldePressMessageButton = () => {
    alert("You press message button!");
}

const renderImage = () => {
    const item = { id: 0, imgSource: require('../assets/avatar.jpg') };
    const newImageSize = {
        width: avatarWidth,
        height: avatarHeight,
        radius: avatarWidth / 2
    }
    return (
        <Image source={item.imgSource} style={{
            width: newImageSize.width,
            height: newImageSize.height,
            borderRadius: newImageSize.radius,
        }} />
    );
}

const Profile = (props) => {
    return (
        <View style={styles.profileWrapper}>
            <View style={styles.avatar}>
                {renderImage()}
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.job}>{props.job}</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.followButton} onPress={() => handlePressFollowButton()}>
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageButton} onPress={() => hanldePressMessageButton()}>
                        <Feather style={styles.messageIcon} name="send" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileWrapper: {
        flexDirection: "row",
        width: profileWidth,
        alignSelf: "center"
    },
    avatar: {
        flex: avatarPart,
    },
    info: {
        flex: infoPart,
    },
    name: {
        flex: 2,
        paddingLeft: infoWidth * 0.05,
        paddingTop: infoHeight * 0.05,
        fontSize: 20,
        fontWeight: "bold"
    },
    job: {
        flex: 2,
        paddingLeft: infoWidth * 0.05,
        fontSize: 13,
        color: "gray"
    },
    button: {
        flex: 2,
        paddingLeft: infoWidth * 0.05,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    followButton: {
        flex: 4,
        backgroundColor: Color.FOLLOW_COLOR,
        borderRadius: infoHeight * (1 / 3) * (1 / 2),
        marginRight: 6,
        justifyContent: "center"
    },
    followText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: "center"
    },
    messageButton: {
        flex: 2,
        backgroundColor: Color.SEND_MESSAGE_COLOR,
        borderRadius: infoHeight * (1 / 3) * (1 / 2),
        justifyContent: "center"
    },
    messageIcon: {
        color: "white",
        alignSelf: "center"
    }
})

export default Profile;