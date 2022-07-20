import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderSection.styles';

const HeaderSection = ({count}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default HeaderSection;
