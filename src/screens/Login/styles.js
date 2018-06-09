import { StyleSheet } from 'react-native';
import { PADDING } from '../../styles';
import px from '../../utils/px';


export const Login = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.md,
  },
  verificationCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verificationInput: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  verificationImage: {
    width: px(200),
    height: px(60),
    flexShrink: 0,
  },
  buttonContainer: {
    marginTop: PADDING.md,
  }
});

