/**
 * @flow
 * 日志模块
 */
// eslint-disable-next-line
import Reactotron from 'reactotron-react-native';
import { type LEVEL } from './log.type';

// eslint-disable-next-line
const console = Reactotron;


export function log(message: string, level: LEVEL = 'info') {
  switch (level) {
    case 'warning':
      console.warn(message);
      break;
    case 'error':
      console.error(message);
      break;
    default:
      console.log(message);
  }
}


export function warn(message: string) {
  log(message, 'warn');
}

export function error(message: string) {
  log(message, 'error');
}

