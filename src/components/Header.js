import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import { AppImages } from '../res';
import { colors, family, fonts, metrics, styles } from '../themes';

const Header = props => {
  return (
    <SafeAreaView style={style.headerView}>
      {!props.hideBack ? (
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            // backgroundColor: 'white',
          }}
          activeOpacity={0.6}
          onPress={props.onPressMenu}
        >
          <Image
            source={AppImages.Back}
            style={{ height: 15, width: 15, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: '20%' }} />
      )}
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          height: 50,
          alignItems: 'center',
        }}
      >
        <Text
          style={[
            {
              fontFamily: 'InstrumentSans_Condensed-regular',
              letterSpacing: 0.13,
              fontSize: fonts.fs_18,
              lineHeight: 24,
              textAlign: 'center',
              color: '#273A53',
              fontWeight: '600',
              marginLeft: 30,
            },
            props.titleStyle,
          ]}
        >
          {props.title}
        </Text>
      </View>
      {props.showSearch ? (
        <TouchableOpacity
          style={{
            height: 50,
            width: '20%',
            alignItems: 'flex-end',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.6}
          onPress={props.onPressMenu2}
        >
          <Image
            source={AppImages.Back}
            style={{ height: 15, width: 15, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: '20%' }} />
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerView: {
    ...styles.row,
    ...styles.selfCenter,
    marginTop: Platform.OS == 'android' ? 20 : 20,
    height: 50,
    width: '90%',
    backgroundColor: colors.transparent,
  },
  searchStyle: { height: 22, width: 22, alignSelf: 'center' },
});

export default Header;
