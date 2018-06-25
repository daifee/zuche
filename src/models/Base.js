import { type ASYNC_STATUS } from './flow.type';

export default class Base {
  asyncStatus: ASYNC_STATUS;
  asyncMessage: string;

  isLoading(): boolean {
    return this.asyncStatus === 'PENDING';
  }

  setAsync(status: ASYNC_STATUS, message: string) {
    this.asyncStatus = status;
    this.asyncMessage = message;
  }
}
