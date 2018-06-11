import React from 'react';
import { View, Image } from 'react-native';
import { ButtonPrimary } from '../../components/Button';
import { FormInput } from '../../components/Form';
import { Login as styles } from './styles';

class Login extends React.Component {
  static navigationOptions = {
    mode: 'modal',
    header: null
  };

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <FormInput
          textInput={{
            placeholder: '电话号码/邮箱'
          }}
        />
        <FormInput
          textInput={{
            placeholder: '密码',
            secureTextEntry: true
          }}
        />
        <View style={styles.verificationCodeContainer}>
          <FormInput
            style={styles.verificationInput}
            textInput={{
              placeholder: '验证码'
            }}
          />
          <Image
            style={styles.verificationImage}
            source={{
              uri: 'https://m.zuzuche.com/seccode.php?from=m&_='
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary>登 录</ButtonPrimary>
        </View>
      </View>
    );
  }
}

export default Login;
