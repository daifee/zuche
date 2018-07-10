import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { SearchButton as styles } from './styles';

function SearchButton(props) {
  const { navigation, ...rest } = props;
  return (
    <View style={styles.container}>
      <Button
        {...rest}
        title="搜 索"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => {
          navigation.push('SearchCar');
        }}
      />
    </View>
  );
}

SearchButton.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
};

export default withNavigation(SearchButton);
