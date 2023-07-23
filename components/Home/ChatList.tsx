import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, FAB} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

import users from '../assets/user';
import { SafeAreaView } from 'react-native';

const chatRow = (
  id: number,
  name: string,
  message: string,
  handlePress: (id: number, name: string) => void,
) => {
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <TouchableOpacity
      style={styles.row}
      key={id}
      onPress={() => handlePress(id, name)}>
      <View style={styles.dpContainer}>
        <Avatar
          size={50}
          color="lightgrey"
          icon={props => (
            <Icon
              name="account"
              {...props}
              style={{color: 'white', fontSize: 35}}
            />
          )}
        />
      </View>
      <View style={styles.messaageSection}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text>{message}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text>{timeString}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ChatList = (): JSX.Element => {
    const scrolling = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const handlePress = (id: number, name: string) => {
    navigation.navigate('Inbox', {id, title: name});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        style={styles.main}
        scrollEventThrottle={1}
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrolling } } }],
            { useNativeDriver: true }
        )}
    >
        {users.map(user => {
          return chatRow(user.id, user.name, user.message, handlePress);
        })}
      </Animated.ScrollView>
      <View style={styles.newMsgContainer}>
        <FAB
          style={styles.addMsgBtn}
          icon={props => (
            <Icon name="android-messages" {...props} style={{color: '#fff'}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: responsiveWidth(100),
  },
  dpContainer: {
    paddingStart: 10,
    width: responsiveWidth(15),
  },
  messaageSection: {
    display: 'flex',
    paddingStart: 10,
    width: responsiveWidth(65),
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  timeContainer: {
    width: responsiveWidth(20),
  },
  newMsgContainer: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
  addMsgBtn: {
    backgroundColor: '#04A784',
    color: '#fff',
  },
});

export default ChatList;
