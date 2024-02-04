import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Theme} from '@src/common/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const infoProfile = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://static.tvtropes.org/pmwiki/pub/images/9f61396712ba4244e029d0646e1420fdea90567b_1277x716.jpg',
        }}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.avatar}
      />
      <View style={styles.info}>
        <View style={styles.nameAndEdit}>
          <Text style={styles.name}>hi hi ha ha bec ky</Text>
          <TouchableOpacity
            color={Theme.colors.primary}
            style={styles.buttonEdit}
            onPress={() => console.log('edit my info')}>
            <Icon
              name="pencil-outline"
              size={20}
              color={Theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.email}>CuteSayHi@gmail.com</Text>
      </View>
    </View>
  );
};

export default infoProfile;

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: Theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
    marginTop: -15,
  },
  nameAndEdit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEdit: {
    borderRadius: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    color: Theme.colors.notBlack,
  },
  email: {
    color: Theme.colors.notGray,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: 15,
  },
});
