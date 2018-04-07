import { StyleSheet } from 'react-native';

// 间隔
const MARGIN = 14;

export const index = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },

  buttonContainer: {
    paddingVertical: 20,
  },

  button: {
    backgroundColor: '#4e7cdd',
  },
});


export const Address = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGIN,
    marginHorizontal: MARGIN,
  },

  text: {
    color: '#333',
    fontSize: 20,
  },

  placeholderText: {
    color: '#999',
  },

  cityContainer: {
    width: 90,
    marginRight: 10,
  },

  city: {
    color: '#222',
    fontSize: 20,
  },

  siteContainer: {
    flex: 1,
  },

  switchDropoffChildrenContainerStyle: {
    // height: 22,
    marginTop: 6,
  },
});

export const Schedule = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGIN,
    marginHorizontal: MARGIN,
  },
});

export const Time = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#333',
    fontSize: 16,
  },

  timeAmountContainer: {
    width: 30,
    marginHorizontal: MARGIN,
    borderBottomColor: 'transparent',
  },

  timeAmount: {
    textAlign: 'center',
  },

  timeDayContainer: {
    flex: 1,
  },
});


export const ItemBox = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    paddingBottom: MARGIN,
    overflow: 'hidden',
  },

  titleContainer: {
    // marginBottom: 10,
  },

  title: {
    fontSize: 12,
    color: '#999',
  },

  childrenContainer: {
    marginTop: MARGIN,
  },
});
