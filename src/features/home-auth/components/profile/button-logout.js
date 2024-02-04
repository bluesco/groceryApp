import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '@src/components/button';
import { Theme } from '@src/common/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {memo} from 'react';


const ButtonLogOut = ({onPress}) => {
  return (
    <View style={styles.buttonLogOutContainer}>
      <Button
        style={{backgroundColor: Theme.backgrounds.paper}}
        onPress={onPress}>
        <View style={styles.buttonLogOut}>
          <Icon
            name="log-out-outline"
            size={25}
            color={Theme.colors.primary}
          />
          <Text style={styles.text}>Log Out</Text>
          <Icon
            name="log-out-outline"
            size={25}
            color={Theme.backgrounds.paper}
          />
        </View>
      </Button>
    </View>
  );
};

export default memo(ButtonLogOut); 
// tối ưu cho performance, nếu có thay đổi dữ liệu thì sẽ không re-render lại. nếu không có thằng memo thì chỉ cần một thứ trong component thay đổi thì nó sẽ re-render lại toàn bộ component

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonLogOut: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.colors.primary,
  },
});
