import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // install if not installed: npm install react-native-vector-icons
import { AppImages } from '../res';
import Header from '../components/Header';
import colors from '../themes/colors';

const ProfileScreen = props => {
  const menuItems = [
    { id: '1', title: 'Edit Profile' },
    { id: '2', title: 'My Statement' },
    { id: '3', title: 'My Benefits' },
    { id: '4', title: 'Registered Offers' },
    { id: '5', title: 'Change Password' },
    { id: '6', title: 'Manage Your Consent' },
    { id: '7', title: 'Settings' },
    { id: '8', title: 'Terms & Conditions' },
    { id: '9', title: 'Help & Support' },
    { id: '10', title: 'Logout', isLogout: true },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => console.log(item.title)}
    >
      <View style={styles.menuContent}>
        {/* <Icon
          name={item.icon}
          size={22}
          color={item.isLogout ? 'red' : '#444'}
          style={styles.icon}
        /> */}
        <Text style={[styles.menuText, item.isLogout && styles.logoutText]}>
          {item.title}
        </Text>
      </View>
      {!item.isLogout && (
        <Image
          source={AppImages.arrownext}
          style={{ height: 15, width: 15, tintColor: 'black' }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" onPressMenu={() => props.navigation.goBack()} />
      <ImageBackground
        source={AppImages.profileBackground}
        style={styles.headerBg}
        resizeMode="cover"
      >
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=12', // demo avatar
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Ankit Sharma</Text>
          <Text style={styles.membership}>Membership no. 2007562529</Text>
        </View>
      </ImageBackground>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
  },
  headerBg: {
    width: '100%',
    paddingBottom: 30,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.7)', // transparent overlay for text visibility
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'InstrumentSans_Condensed-Regular',
  },
  membership: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    fontFamily: 'InstrumentSans_Condensed-bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#eee',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'InstrumentSans_Condensed-Regular',
  },
  logoutText: {
    color: 'red',
    fontWeight: '500',
  },
});

export default ProfileScreen;
