// eslint-disable-next-line
import Reactotron from 'reactotron-react-native';
// eslint-disable-next-line
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron
  .configure({
    name: 'zuche'
  })
  // .useReactNative()
  .use(reactotronRedux())
  .connect();

