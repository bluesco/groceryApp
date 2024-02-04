import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = ({style, ...props}) => (
  <Image
    source={require('@src/assets/images/grocery.png')}
    style={[styles.image, style]}
  />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default memo(Logo);