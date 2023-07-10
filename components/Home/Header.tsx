import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MenuProps {
  openMenu: boolean;
  closeMenu(): void;
}

interface HeaderState {
  openMenu: boolean;
}

const Header = (): JSX.Element => {
  const [state, setState] = useState<HeaderState>({
    openMenu: false,
  });

  return (
    <View style={styles.headerRow}>
      <View>
        <Text style={styles.title}>WhatsApp</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          style={styles.iconButtons}
          color="white"
          icon={props => <Icon name="camera-outline" {...props} />}
        />
        <IconButton
          style={styles.iconButtons}
          color="white"
          icon={props => <Icon name="magnify" {...props} />}
        />
        <IconButton
          style={styles.iconButtons}
          color="white"
          icon={props => <Icon name="dots-vertical" {...props} />}
          onPress={() => setState({...state, openMenu: true})}
        />
      </View>
      <Menu
        openMenu={state.openMenu}
        closeMenu={() => setState({...state, openMenu: false})}
      />
    </View>
  );
};

function Menu(props: MenuProps): JSX.Element {
  const handlePress = () => {
    props.closeMenu();
  };
  return (
    <Modal
      visible={props.openMenu}
      transparent={true}
      animationType="fade"
      onRequestClose={props.closeMenu}>
      <TouchableOpacity style={styles.modalContainer} onPress={props.closeMenu}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>New Group</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>New Broadcast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>Linked devices</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>Starred messages</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.menuItems}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#04A784',
    paddingTop: 15,
    paddingStart: 15,
    paddingBottom: 0,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
  },
  iconButtons: {
    padding: 5,
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
    height: 250,
    backgroundColor: 'white',
    paddingStart: 20,
  },
  menuItems: {
    paddingTop: 20,
  },
});

export default Header;
