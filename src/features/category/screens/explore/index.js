import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Theme} from '@src/common/theme';
import Header from '@src/components/header';
import SearchView from '@src/components/search-view';
import CategoryList from './category-list';

const ExploreScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.root}>
      <Header
        isBack={false}
        isRight={false}
        title="Explore"
        styleRoot={styles.Header}
      />
      <CategoryList />
      <SearchView searchQuery={searchValue} searchQueryValue={value => setSearchValue(value)} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
  },
  header: {
    position: 'relative',
  },
});
