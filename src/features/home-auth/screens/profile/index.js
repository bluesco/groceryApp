import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import InfoCard from '@src/features/home-auth/components/profile/info-card';
import infoProfile from '../../components/profile/info-profile';
import ButtonLogout from '../../components/profile/button-logout';
import { Theme } from '@src/common/theme';
import { useDispatch } from 'react-redux';
import { typeAuths } from '../../redux/auth.type';

const Profile = () => {
  const dispatch = useDispatch();
  const arrInfoCard = [
    {nameIcon: 'basket-outline', name: 'Orders'},
    {nameIcon: 'newspaper-outline', name: 'My Details'},
    {nameIcon: 'location-outline', name: 'Delivery Address'},
    {nameIcon: 'card-outline', name: 'Payment Methods'},
    {nameIcon: 'barcode-outline', name: 'Promo Card'},
    {nameIcon: 'notifications-outline', name: 'Notifications'},
    {nameIcon: 'help-circle-outline', name: 'Help'},
    {nameIcon: 'alert-circle-outline', name: 'About'},
  ];

  return (
    <View style={styles.root}>
      <FlatList
        data={arrInfoCard}
        renderItem={({item}) => {
          return <InfoCard nameIcon={item.nameIcon} name={item.name} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={infoProfile}
        ListFooterComponent={<ButtonLogout onPress={() => dispatch({type: typeAuths.logout})}/>}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Theme.backgrounds.white,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
