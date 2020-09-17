import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Size from '../consts/size';

const statsWidth = Size.screenWidth;
const statsHeight = statsWidth * 0.3;

const Stats = (props) => {
    return (
        <View style={styles.statsWrapper}>
            <View style={styles.photos}>
                <Text style={styles.stat}>{props.photos}</Text>
                <Text style={styles.label}>Photos</Text>
            </View>
            <View style={styles.followers}>
                <Text style={styles.stat}>{props.followers}</Text>
                <Text style={styles.label}>Followers</Text>
            </View>
            <View style={styles.following}>
                <Text style={styles.stat}>{props.following}</Text>
                <Text style={styles.label}>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statsWrapper: {
        flexDirection: "row",
        width: statsWidth,
        height: statsHeight,
        justifyContent: "space-between",
        alignSelf: "center",
    },
    photos: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    followers: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    following: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    stat: {
        fontWeight: "bold",
        fontSize: 18
    },
    label: {
        color: "gray",
        fontSize: 13
    }
})

export default Stats;