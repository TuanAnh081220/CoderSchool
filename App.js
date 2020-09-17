import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './components/header';
import Profile from './components/profile';
import Stats from './components/stats';
import Images from './components/images';

const user = {
  name: "Jisoo",
  job: "Idol/Actor"
}

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') }
];

const stats = {
  photos: imgData.length,
  followers: 128,
  following: 1
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Profile name={user.name} job={user.job} />
        <Stats photos={stats.photos} followers={stats.followers} following={stats.following} />
        <Images imgData={imgData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-around"
  },
  scrollView: {
  },
});
