import {Avatar, FAB} from '@react-native-material/core';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Calls = (): JSX.Element => {
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View style={styles.main}>
      <ScrollView>
        <TouchableOpacity style={styles.createLinkContainer}>
          <View style={styles.createLinkBtn}>
            <Icon name="link" size={30} color="white" style={styles.linkIcon} />
          </View>
          <View style={styles.createLinkFontContainer}>
            <Text style={{fontWeight: '600', color: '#000'}}>
              Create call link
            </Text>
            <Text>Share a link for your WhatsApp call</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.recentContainer}>
          <Text style={styles.recentFont}>Recent</Text>
        </View>
        {row.map(val => (
          <CallRow key={val} />
        ))}
      </ScrollView>
      <View style={styles.newCallBtnContainer}>
        <FAB
          style={styles.newCallBtn}
          icon={props => <Icon name="phone-plus" {...props} color="white" />}
        />
      </View>
    </View>
  );
};

function CallRow(): JSX.Element {
  return (
    <TouchableOpacity style={styles.row}>
      <View>
        <Avatar
          style={styles.avatar}
          icon={props => <Icon name="account" {...props} color="white" />}
        />
      </View>
      <View style={styles.detailCol}>
        <View>
          <Text style={{color: '#000', fontWeight: '600', fontSize: 17}}>
            Ajay Patil
          </Text>
        </View>
        <View style={styles.details}>
          <Icon name="call-received" size={18} color="#04A784" />
          <Text style={{paddingStart: 10}}>{new Date().toLocaleString()}</Text>
        </View>
      </View>
      <View>
        <Icon name="video" size={30} color="#04A784" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 0,
  },
  createLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  createLinkBtn: {
    backgroundColor: '#04A784',
    padding: 10,
    borderRadius: 50,
  },
  linkIcon: {
    transform: [{rotate: '140deg'}],
  },
  createLinkFontContainer: {
    paddingStart: 20,
  },
  recentContainer: {
    paddingTop: 20,
    paddingStart: 15,
  },
  recentFont: {
    color: '#000',
    fontWeight: '500',
  },
  avatar: {
    backgroundColor: 'lightgrey',
  },
  row: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(100),
  },
  detailContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailCol: {
    paddingStart: 15,
    width: responsiveWidth(70),
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
  },
  newCallBtnContainer: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
  newCallBtn: {
    backgroundColor: '#04A784',
  },
});

export default Calls;
