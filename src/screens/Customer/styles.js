import { StyleSheet } from 'react-native';


export const Customer = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  multipleLines: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 16,
  }
});

