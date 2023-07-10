import {Avatar, FAB} from '@react-native-material/core';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Status = (): JSX.Element => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View>
      <ScrollView style={styles.main}>
        <TouchableOpacity style={styles.myStatusContainer}>
          <View style={styles.addMyStatus}>
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
            <View style={styles.addIcon}>
              <Icon name="plus" color="white" size={15} />
            </View>
          </View>
          <View style={styles.myStsTxtContainer}>
            <Text style={styles.myStatus}>My Status</Text>
            <Text>Tap to add status update</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.recentUpdates}>
          <Text>Recent Updates</Text>
        </View>
        <View style={{marginBottom: 15}}>
          {arr.map(val => (
            <StatusRow key={val} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.addTextContainer}>
        <FAB
          style={styles.addTextBtn}
          icon={props => <Icon name="pencil" {...props} size={25} />}
          size="mini"
        />
      </View>
      <View style={styles.addStsContainer}>
        <FAB
          style={styles.addStsBtn}
          icon={props => (
            <Icon name="camera" {...props} style={{color: '#fff'}} />
          )}
        />
      </View>
    </View>
  );
};

function StatusRow(): JSX.Element {
  return (
    <TouchableOpacity style={styles.statusRow}>
      <View>
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
          style={styles.statusPreview}
        />
      </View>
      <View style={styles.fontContainer}>
        <Text style={styles.statusName}>Ajay Patil</Text>
        <Text>
          {new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    paddingBottom: 20,
  },
  myStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  addMyStatus: {},
  addIcon: {
    backgroundColor: '#04A784',
    position: 'absolute',
    padding: 1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    top: 30,
    left: 34,
  },
  myStsTxtContainer: {
    paddingStart: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  myStatus: {
    color: '#000',
    fontWeight: '600',
  },
  recentUpdates: {
    paddingTop: 20,
    fontWeight: '600',
  },
  statusRow: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  statusPreview: {
    borderColor: '#04A784',
    borderWidth: 2,
  },
  fontContainer: {
    paddingStart: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  statusName: {
    color: '#000',
    fontWeight: '600',
  },
  addTextContainer: {
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
  addTextBtn: {
    backgroundColor: 'lightgrey',
  },
  addStsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 25,
  },
  addStsBtn: {
    backgroundColor: '#04A784',
    color: '#fff',
  },
});

export default Status;
