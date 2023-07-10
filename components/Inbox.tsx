import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

interface MessageProps {
  route: any;
}

const Message = (props: MessageProps) => {
  const {route} = props;
  const {id} = route.params;
  return (
    <ImageBackground
      source={require('./assets/inboxBg.jpg')}
      style={styles.backgroundImage}>
      <ScrollView style={styles.msgView}></ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inpt}
          placeholder="Type a message..."
          multiline
          autoFocus
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const InboxTitle = (props: any) => {
  const {title} = props.route.params;
  return (
    <TouchableOpacity style={headerStyles.titleContainer}>
      <Text style={headerStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const InboxHeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', paddingStart: 5}}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={20} color="#fff" />
      <View>
        <Avatar
          size={35}
          color="lightgrey"
          icon={props => (
            <Icon
              name="account"
              {...props}
              style={{color: 'white', fontSize: 20}}
            />
          )}
          style={{marginLeft: 5}}
        />
      </View>
    </TouchableOpacity>
  );
};

const InboxHeaderRight = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <View style={headerStyles.rightContainer}>
      <TouchableOpacity style={headerStyles.rightBtns}>
        <Icon name="video" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={headerStyles.rightBtns}>
        <Icon name="phone" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={headerStyles.menuBtn}
        onPress={() => setState(true)}>
        <Icon name="dots-vertical" size={25} color="#fff" />
      </TouchableOpacity>
      <Menu openMenu={state} closeMenu={() => setState(false)} />
    </View>
  );
};

function Menu(props: {openMenu: boolean; closeMenu: () => void}): JSX.Element {
  const handlePress = () => {
    props.closeMenu();
  };
  return (
    <Modal
      visible={props.openMenu}
      transparent={true}
      animationType="fade"
      onRequestClose={props.closeMenu}>
      <TouchableOpacity
        style={headerStyles.modalContainer}
        onPress={props.closeMenu}>
        <View style={headerStyles.modalContent}>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>View Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>Media, links and docs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>Mute Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>Disappearing messages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text>Wallpaper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={headerStyles.menuItems}>
            <Text style={{display: 'flex', justifyContent: 'center'}}>
              More <Icon name="play" />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  msgView: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  inpt: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: '#04A784',
    borderRadius: 20,
    padding: 10,
  },
});

const headerStyles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    width: 200,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightBtns: {
    marginEnd: 20,
  },
  menuBtn: {
    marginEnd: 10,
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingTop: 40,
    paddingEnd: 10,
    height: '100%',
  },
  modalContent: {
    width: '50%',
    height: 290,
    backgroundColor: 'white',
    paddingStart: 20,
  },
  menuItems: {
    paddingTop: 20,
  },
});

export default Message;
export {InboxHeaderLeft, InboxTitle, InboxHeaderRight};
