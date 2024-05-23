import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const PullToRefresh = ({ children, onRefresh, refreshing }) => {
  const [refreshControl, setRefreshControl] = useState(
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      colors={['#ff1cc0', '#ff1cc0']}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={refreshControl}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PullToRefresh;
