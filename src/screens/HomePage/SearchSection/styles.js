import { StyleSheet } from 'react-native';

// 间隔
const MARGIN = 14;

export const SearchSection = StyleSheet.create({
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
  }
});

export const DropoffSwitch = StyleSheet.create({
  container: {
    marginTop: 6
  }
});

export const City = StyleSheet.create({
  container: {
    width: 90,
    marginRight: 10,
  },
  text: {
    color: '#333',
    fontSize: 20,
  },
  placeholderText: {
    color: '#999',
  }
});

export const Site = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#333',
    fontSize: 20,
  },
  placeholderText: {
    color: '#999',
  }
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
  }
});

export const TimeDay = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#333',
    fontSize: 16
  }
});

export const TimeHours = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 16
  }
});

export const TimeAmount = StyleSheet.create({
  container: {
    width: 30,
    marginHorizontal: MARGIN,
    borderBottomColor: 'transparent'
  },
  text: {
    textAlign: 'center'
  }
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
