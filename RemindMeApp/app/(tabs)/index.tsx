import { StyleSheet } from 'react-native';

import { Box, View, Text } from '@gluestack-ui/themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Box
        bg="$primary500"
        p="$5"
      >
        <Text color="white">
          This is the Box
        </Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
